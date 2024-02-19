# Solvify Category Map
This project helps to build a category map for Solvify.

## Usage
1. Build the app with `npm run build`. This downloads and parses the Shopify category taxonomy to the local filesystem.
2. Run the app with `npm run start`. This does two things: (1) it validates the parsed taxonomy, and (2) it validates the category map.
When the category map is missing a category from the taxonomy, the user is guided to add it to the category mapm through a series of prompts. At some point, the category map contains all of the categories that are in the database, and the process completes successfully.