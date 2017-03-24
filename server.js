const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.use(express.static(path.join(__dirname, './')));
app.set('port', (process.env.PORT || 8080));

// const port = process.env.PORT || 5000;
app.listen(app.get('port'), () => console.log(`Listening on port ${app.get('port')}`));
