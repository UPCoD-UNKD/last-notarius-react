// //TODO iterators JSON Object
// const fs = require('fs');
// const datanot = './src/datanot.json'; // Replace with the path to your JSON file
// // const datanotId = datanot.Notar
// const jsonData = fs.readFileSync(datanot, 'utf8');


// console.log(datanot);
// console.log(jsonData);
// // Parse the JSON data
// const data = JSON.parse(jsonData);
// console.log(data);
// // Iterate over the array of objects and add an "id" field
// data.forEach((item, index) => {
//   item.id = index + 1; // You can use any unique identifier logic here
// });

// // Convert the modified data back to JSON format
// const modifiedJsonData = JSON.stringify(data, null, 2);
// console.log(modifiedJsonData);
// // Write the modified JSON data back to the file
// fs.writeFileSync(datanot, modifiedJsonData, 'utf8');
//
//





// const fs = require('fs');
// const datanotPath = './src/datanot.json'; // Replace with the path to your JSON file
// // const datanotPath = datanot.Notar
// try {
//   // Read the JSON file
//   const jsonData = fs.readFileSync(datanotPath, 'utf8');

 
//   // Parse the JSON data
//   // const data = JSON.parse(jsonData);
//   const data = JSON.parse(jsonData).data || JSON.parse(jsonData);
//   console.log('Parsed JSON Data:', data);
//   // Check if 'data' is an array before proceeding
//   if (!Array.isArray(data)) {
//     throw new Error('Data is not an array.');
//   }



//   // Iterate over the array of objects and add an "id" field
//   data.forEach((item, index) => {
//     item.id = index + 1; // You can use any unique identifier logic here
//   });

//   // Convert the modified data back to JSON format
//   const modifiedJsonData = JSON.stringify(data, null, 2);


//   // Write the modified JSON data back to the file
//   fs.writeFileSync(datanotPath, modifiedJsonData, 'utf8');

//   console.log('Added "id" field to JSON data successfully.');
// } catch (error) {
//   console.error('An error occurred:', error.message);
// }


/**
 * Structure [arr{}]
 */

// const fs = require('fs');
// const datanotPath = './src/datanot.json'; // Replace with the correct path to your JSON file

// try {
//   // Read the JSON file
//   const jsonData = fs.readFileSync(datanotPath, 'utf8');

//   // Parse the JSON data
//   const parsedData = JSON.parse(jsonData);

//   // Handle different JSON structures (if necessary)
//   const data = parsedData.Notar || parsedData;

//   // Check if 'data' is an array before proceeding
//   if (!Array.isArray(data)) {
//     throw new Error('Data is not an array.');
//   }

//   // Iterate over the array of objects and add an "id" field
//   data.forEach((item, index) => {
//     item.id = index + 1; // You can use any unique identifier logic here
//   });

//   // Convert the modified data back to JSON format
//   const modifiedJsonData = JSON.stringify(data, null, 2);

//   // Write the modified JSON data back to the file
//   fs.writeFileSync(datanotPath, modifiedJsonData, 'utf8');

//   console.log('Added "id" field to JSON data successfully.');
// } catch (error) {
//   console.error('An error occurred:', error.message);
// }



// node ../src/addIdToJson.js

// node addIdToJson.js   ======Dood job====



/**
 * Structure { "products":[arr{}]}
 * Structure { "notaries":[arr{}]}
 */

const fs = require('fs');
const datanotPath = './src/datanot.json';

try {
  // Read the JSON file
  const jsonData = fs.readFileSync(datanotPath, 'utf8');

  // Parse the JSON data
  const parsedData = JSON.parse(jsonData);

  // Ensure that 'products' is an array
  // if (!Array.isArray(parsedData.products)) {
  if (!Array.isArray(parsedData.notaries)) {
    throw new Error('Data is not an array.');
  }

  // Iterate over the array of objects and add an "id" field
  // parsedData.products.forEach((item, index) => {
  parsedData.notaries.forEach((item, index) => {
    item.id = index + 1; // You can use any unique identifier logic here
  });

  // Convert the modified data back to JSON format
  const modifiedJsonData = JSON.stringify(parsedData, null, 2);

  // Write the modified JSON data back to the file
  fs.writeFileSync(datanotPath, modifiedJsonData, 'utf8');

  console.log('Added "id" field to JSON data successfully.');
} catch (error) {
  console.error('An error occurred:', error.message);
}

// node addIdToJson.js   ======Dood job====