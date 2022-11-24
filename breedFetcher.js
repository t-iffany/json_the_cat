// Write the logic to fetch data from the API endpoint using request

// command line arguments
const args = process.argv[2];
let breed = args;
// node type in Breed and it will take us to the URL
// node breedFetcher.js breed
let url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

// use request to make HTTP request for HTML of the website homepage
const request = require('request');

const breedFetcher = (url) => {
  request(url, (error, response, body) => {
    if (error) {
      console.log('error: REQUEST FAILED', error);  // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      return;    // so it stops trying to keep runnig to the next condition
    }

    const data = JSON.parse(body);      // use json.parse to convert body into an object
    
    if (data.length === 0) {
      console.log("Breed not found");
      return;
    }
    // print out description
    console.log('Description:', data[0].description); // data/body > array > object ; data[0] is index of array ; within the array, we want the object key description
  });
};

//run app breedFetcher
breedFetcher(url);