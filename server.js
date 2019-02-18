const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cities = require('cities.json');

app.use(bodyParser());

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html');
});

app.post('/getCities', (req, res) => {        
    res.send(getCitiesCountry(req.body.country).filter( elem => {
        if (elem.name.indexOf(req.body.city) !== -1 ) {
            return elem;
        }
    })) 
});

app.listen(3000, () => {
  console.log('server started');
});

function getCitiesCountry(country) {
  return cities.filter( elem => {
    if (elem.country === country) {
      return elem;
    }
  });
}