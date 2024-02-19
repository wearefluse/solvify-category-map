# Solvify Category Map
This project helps to build a category map for Solvify.

## Usage
1. Build the app with `npm run build`. This downloads and parses the Shopify category taxonomy to the local filesystem.
2. Run the app with `npm run start --colors`. The output may be long, so it is recommended to do this in a seperate terminal with fullscreen.

## What does it do?
1. The app validates the parsed Shopify category taxonomy.
2. The app validates checks if the categories from the database are in the category map.
    * When a category is missing from the map, the user is guided through a set of prompts to rapidly build up the category map.
    * When no categories are missing, the process completes without errors.
