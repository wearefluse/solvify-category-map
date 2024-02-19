import 'dotenv/config';
import chalk from 'chalk';

import categoryMap from './map.js';
import { getCategories } from './get-categories.js';

let categoryTaxonomy;
try {
  categoryTaxonomy = await import('./taxonomy.json', { assert: { type: 'json' } });
  categoryTaxonomy = categoryTaxonomy.default;
} catch (error) {
  if (error.code === 'ERR_MODULE_NOT_FOUND' && error.url.includes('taxonomy.json')) {
    console.error(chalk.red(error.message));
    console.error(chalk.red('Please run the command `npm run build` to download the Shopify taxonomy file.'));
    process.exit(1);
  }
  throw error;
}

const buildCategoryMap = async () => {
  /*
  * Function to export products from MongoDB to Shopify CSV
  * 
  * TODO: Add fields from https://help.shopify.com/en/manual/products/import-export/using-csv#product-csv-file-format
  */

  // Check if all categories are in the Shopify Taxonomy
  for (const bolCategory in categoryMap) {

    // Make a list of all category names and ids in the Shopify Taxonomy
    const taxonomyIds = categoryTaxonomy.map((c) => c.id);
    const taxonomyNames = categoryTaxonomy.map((c) => c.name);

    // Check if taxonomy contains every category
    const lastCategoryId = 5595; // Manually set this id to the last category id in the Shopify Taxonomy
    if (taxonomyNames.length !== lastCategoryId) {
      const missingIds = Array.from({ length: lastCategoryId }, (value, index) => (1 + index)).filter(id => !taxonomyIds.includes(id));
      throw new Error(`Shopify Taxonomy is incomplete. Missing ids: ${missingIds.join(',')}.`);
    }

    // Check if taxonomy contains non existent ids
    const invalidIds = taxonomyIds.filter((id) => (id > lastCategoryId) || (id < 1) || (id % 1 !== 0) || (id !== parseInt(id)));
    if (invalidIds.length) {
      throw new Error(`Shopify Taxonomy contains invalid ids: ${invalidIds.join(',')}.`);
    }

    // Check if the category name and id of the node match
    if (taxonomyNames.indexOf(categoryMap[bolCategory].name) !== taxonomyIds.indexOf(categoryMap[bolCategory].id)) {
      throw new Error(`Node id ${categoryMap[bolCategory].id} does not match node name ${categoryMap[bolCategory].name} in Shopify taxonomy.`)
    }

    // Check if the category name exists in the Shopify Taxonomy
    if (!taxonomyNames.includes(categoryMap[bolCategory].name)) {
      throw new Error(`Node with name ${categoryMap[bolCategory].name} does not exist in Shopify Taxonomy.`);
    }

    // Check if the category id exists in the Shopify Taxonomy
    if (!taxonomyIds.includes(categoryMap[bolCategory].id)) {
      throw new Error(`Node with id ${categoryMap[bolCategory].id} does not exist in Shopify Taxonomy.`);
    }
  }

  // Get all of the categories from the Solvify database
  const categories = await getCategories();

  for (const category of categories) {
    try {
      // Try to find the category in the category map
      const mappedCategory = categoryMap[category.name].id;
    } catch (error) {
      // TODO: Split taxonomy category by ' ' to find exact matches.
      // TODO: Limit the number of matches if it is too general.
      // TODO: Escape special characters in the category name (e.g. ' &)

      // Try to find a matching category with simple search
      const matches = [];
      const categorySplit = category.name.split(' > ');
      const search1 = categorySplit.pop().toLowerCase() || '';

      // First search for the highest level category
      for (const { id, name } of categoryTaxonomy) {

        // Check for a complete match in the taxonomy
        if (name.toLowerCase().includes(search1)) {
          const result = `"${category.name}": {\n  id: ${id},\n  name: "${chalk.greenBright(name)}"\n},`;
          if (!matches.includes(result)) {
            matches.push(result);
          }
        }
      }

      // Then search for the second highest level category
      if (!matches.length) {
        const search2 = categorySplit.pop().toLowerCase() || '';
        for (const { id, name } of categoryTaxonomy) {
          if (name.toLowerCase().includes(search2)) {
            const result = `"${category.name}": {\n  id: ${id},\n  name: "${chalk.blueBright(name)}"\n},`;
            if (!matches.includes(result)) {
              matches.push(result);
            }
          }
        }
      }

      // Provide suggestions to the user
      if (matches.length) {
        console.log(chalk.red(`Could not find Bol category ${chalk.yellow(category.name)} in the Shopify taxonomy. To continue:\n`) + `  1. Select the best matching category in the Shopify taxonomy from the list below\n  2. Add the match to the category map (map-category.ts).\n  3. Save and re-run the command.\n`);
        for (const match of matches) console.log(match);
        console.log(chalk.grey(`\nIf none of the suggestions match:\n  1. Manually search the Shopify taxonomy (categoryTaxonomy.ts).\n  2. Fill in the template below.`));
        console.log(chalk.grey(`\n"${category.name}": {\n  id: BEST_MATCH_ID,\n  name: "BEST_MATCH_NAME"\n},\n`));
      } else {
        console.log(chalk.red(`Could not find Bol category ${category.name} in the Shopify taxonomy. To continue:\n`) + `  1. Manually search for a match in the Shopify taxonomy (categoryTaxonomy.ts).\n  2. Fill in the template below.\n  3. Add the match to the category map (map-category.ts).\n  4. Save and re-run the command.\n`);
        console.log(`\n"${category.name}": {\n  id: BEST_MATCH_ID,\n  name: "BEST_MATCH_NAME"\n},\n`);
      }

      // Throw the category not found error
      throw new Error(`Could not find category ${category.name}.`);
    }
  }
};

try {
  await buildCategoryMap();
  console.log(chalk.greenBright('Category map created successfully!'));
} catch (error) {
  throw error;
}