const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from AWS CI/CD 🚀');
});

app.listen(3000);
