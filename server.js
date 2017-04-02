const express = require('express');
const path = require('path');

const app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
const port = process.env.PORT || 8080;


// make express look in the public directory for assets (css/js/img)
app.use(express.static(path.join(__dirname, './')));

// set the home page route
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.listen(port, () => `Our app is running on http://localhost:${port}`);
