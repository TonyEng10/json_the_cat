let args = process.argv.slice(2);
const request = require('request');

let search = args[0];

request(`https://api.thecatapi.com/v1/breeds/search/?q=${search}`, (error, response, body) => {
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log('requested breed not found');
  }
  // console.log(data);
  try {
    console.log(data[0].description);
  } catch (error) {
    console.log('error', error.message);
  }
});
