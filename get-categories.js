import { MongoClient, ObjectId } from 'mongodb';

let cachedDb = null;

const connectToDatabase = async () => {
  if (cachedDb) {
    return cachedDb;
  }

  // Ensure MONGODB_URI and MONGODB_DATABASE are defined in your environment variables
  if (!process.env.MONGODB_URI) throw new Error('Please define the MONGODB_URI environment variable inside .mongodb.env');
  if (!process.env.MONGODB_DATABASE) throw new Error('Please define the MONGODB_DATABASE environment variable inside .mongodb.env');

  // Connect to the database
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  cachedDb = client.db(process.env.MONGODB_DATABASE);
  return cachedDb;
};


const flattenCategories = (categories, parentPath = '') => {
  let result = [];

  categories.forEach(category => {
    // Determine the correct property names for ID and Name based on the category object structure
    const categoryId = category.categoryId || category.id;
    const categoryName = category.categoryName || category.name;

    const currentPath = parentPath ? `${parentPath} > ${categoryName}` : categoryName;

    // If there are no subcategories, this is the most specific category
    if (!category.subcategories || category.subcategories.length === 0) {
      result.push({ id: categoryId, name: currentPath });
    } else {
      // Otherwise, continue traversing the subcategories
      const subcategoryResults = flattenCategories(category.subcategories, currentPath);
      result = result.concat(subcategoryResults);
    }
  });

  return result;
};

const removeDuplicatesByProperty = (array, property) => {
  return array.reduce((acc, current) => {
    if (!acc.find(item => item[property] === current[property])) {
      acc.push(current);
    }
    return acc;
  }, []);
};

export const getCategories = async () => {
  const db = await connectToDatabase();
  const collection = db.collection('ProductPlacement');
  const categories = await collection.aggregate([
    {
      $project: {
        _id: 0, // Exclude the _id field
        categories: 1 // Include the categories field
      }
    },
    {
      $unwind: '$categories' // Deconstruct the categories array
    },
    {
      $replaceRoot: { newRoot: '$categories' } // Promote the categories field to the root
    }
  ]).toArray();

  const flattenedCategories = flattenCategories(categories);
  const uniqueCategories = removeDuplicatesByProperty(flattenedCategories, 'id');
  return uniqueCategories;
};
