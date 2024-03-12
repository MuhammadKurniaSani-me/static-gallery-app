import { readFileSync, writeFileSync } from 'fs';

// read visitor
// let visitor = fs.readFileSync('./src/num-of-visitor.json');
// let numOfPeople = JSON.parse(visitor);

// // add visitor
// books.push(book);

// get current visitor data
// Path to your JSON file
// const filePath = 'https://github.com/Focus-Alfasarana/gallery-app/blob/master/src/num-of-visitor.json';

const filePath = './src/num-of-visitor.json';

// Function to read, modify, and write JSON data
function updateJson(key, incrementValue) {
  try {
    // Read the JSON file content
    const jsonData = JSON.parse(readFileSync(filePath, 'utf-8'));

    // Check if the key exists
    if (jsonData.hasOwnProperty(key)) {
      jsonData[key] += incrementValue; // Increment the value
    } else {
      jsonData[key] = incrementValue; // Create the key with initial value
    }

    // Stringify the updated data
    const updatedJsonString = JSON.stringify(jsonData, null, 2);

    // Write the updated JSON data to the file
    writeFileSync(filePath, updatedJsonString);

    console.log(`Value for key '${key}' incremented by ${incrementValue}`);
  } catch (error) {
    console.error(error.message);
  }
}

// Example usage: Increment a value named "count" by 1
updateJson('count', 1);