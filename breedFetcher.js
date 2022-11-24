// Write the logic to fetch data from teh API endpoint using request

// use request to make HTTP request for HTML of the website homepage
const request = require('request');
// print out the body content to the terminal
request('https://api.thecatapi.com/v1/breeds/search?q=siberian', (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //  console.log('body:', body); // Print the HTML for the website homepage. Body is a string
  const data = JSON.parse(body);      // use json.parse to convert body into an object
//  console.log('first entry: weight ', data[0].weight);      // access the first entry in the data array and print out the description
});
