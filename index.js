const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/instagram', (req, res) => {
    res.send('Imao')
});
app.get('/login', (req, res) => {
    res.send('Login here')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});