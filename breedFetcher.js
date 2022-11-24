const request = require('request');


const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search/?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback(null, 'requested breed not found');
      return;
    }
    // console.log(data);
    try {
      callback(null, data[0].description);
    } catch (error) {
      callback(error, null);
    }
  });
};

module.exports = { fetchBreedDescription };