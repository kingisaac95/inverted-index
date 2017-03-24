const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.use(express.static(path.join(__dirname, './')));

const port = process.env.PORT || 5000;
app.listen(port, () => `Listening on port ${port}`);
