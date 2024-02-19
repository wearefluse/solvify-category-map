import fs from 'fs';

const downloadAndParseTaxonomy = async () => {
  const response = await fetch('https://help.shopify.com/txt/product_taxonomy/nl.txt');
  if (!response.body) throw new Error('Failed to get response body');
  const reader = response.body.pipeThrough(new TextDecoderStream()).getReader();

  const categories = [];
  let isFirstLine = true;
  let partialLine = '';

  return new Promise((resolve, reject) => {
    function processNext() {
      reader.read().then(({ done, value }) => {
        if (done) {
          // Check if there's any remaining partial line to be processed.
          if (partialLine) {
            processLine(partialLine);
          }
          resolve(categories);
          return;
        }

        const lines = (partialLine + value).split('\n');
        partialLine = lines.pop() || ''; // Save the last partial line, if any.

        lines.forEach(line => processLine(line));

        processNext();
      }).catch(reject);
    }

    function processLine(line) {
      if (isFirstLine) {
        isFirstLine = false;
        return;
      }

      const match = line.match(/^(\d+) - (.*)$/);
      if (match) {
        const [, id, name] = match;
        categories.push({ id: +id, name: name });
      } else {
        reject(new Error(`Failed to parse line: ${line}`));
      }
    }

    processNext();
  });
};

const writeCategoryTaxonomyToFile = async () => {
  const categoryTaxonomy = await downloadAndParseTaxonomy();
  fs.writeFileSync('./taxonomy.json', JSON.stringify(categoryTaxonomy, null, 2));
};

try {
  await writeCategoryTaxonomyToFile();
  console.log('Shopify category taxonomy file has been created.');
} catch (error) {
  console.error('Failed to create Shopify category taxonomy file:', error);
}