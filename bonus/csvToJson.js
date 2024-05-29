const fs = require('fs');
const csv = require('csv-parser');

// Check if correct number of command-line arguments are provided
if (process.argv.length !== 4) {
  console.error('Usage: node csvToJson.js <input_csv_file> <output_json_file>');
  process.exit(1);
}

const inputFile = process.argv[2];
const outputFile = process.argv[3];

// Check if input CSV file exists
if (!fs.existsSync(inputFile)) {
  console.error(`Input file '${inputFile}' not found.`);
  process.exit(1);
}

// Create a readable stream to read data from the CSV file
const inputStream = fs.createReadStream(inputFile);

// Create an array to store the transformed JSON data
const jsonData = [];

// Use csv-parser to parse the CSV data
inputStream
  .pipe(csv())
  .on('data', (data) => {
    // Process each row of data and transform it into JSON format
    const { productId, name, price } = data;
    const product = {
      productId: parseInt(productId),
      name,
      price: parseFloat(price),
    };
    jsonData.push(product);
  })
  .on('end', () => {
    // Write the transformed JSON data to the output JSON file
    fs.writeFile(outputFile, JSON.stringify(jsonData, null, 2), (err) => {
      if (err) {
        console.error('Error writing to output file:', err);
      } else {
        console.log(`JSON data written to '${outputFile}' successfully.`);
      }
    });
  })
  .on('error', (err) => {
    console.error('Error parsing CSV data:', err);
  });
