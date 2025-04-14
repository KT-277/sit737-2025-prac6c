const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Updated version: Hello from SIT737 Practical 6.2C');
});

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
