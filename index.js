// index.js
// This file will be the one that users can run and provide the breed name to. 
// It will then require the breedFetcher file and call its exported function.

const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});