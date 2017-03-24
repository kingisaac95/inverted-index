// const express = require('express');
// const path = require('path');

// const app = express();

// app.use(express.static(path.join(__dirname, './')));
// app.set('port', (process.env.PORT || 8080));

// app.get('/', (req, res) => {
//   res.sendFile(`${__dirname}/index.html`);
// });
// // const port = process.env.PORT || 5000;
// app.listen(app.get('port'), () => console.log(`Listening on port ${app.get('port')}`));

const express = require('express');

const app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
const port = process.env.PORT || 8080;


// make express look in the public directory for assets (css/js/img)
app.use(express.static(`${__dirname}/public`));

// set the home page route
app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log(`Our app is running on http://localhost:${port}`);
});
