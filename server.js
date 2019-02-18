const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cities = require('cities.json');

app.use(bodyParser());

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html');
});

app.post('/next', (req, res) => {
    getRussianCites();
});

app.listen(3000, () => {
    console.log('server started');
});

function getRussianCites() {
  return cities.filter( elem => {
    if (elem.country === 'RU') {
      return elem;
    }
  });
}

app.post('/helps', (req, res) => {
    console.log(req.body);
    res.send(req.body.city);
    // res.send(getRussianCites().filter( elem => {
    //     elem
    // }))
}) ;

