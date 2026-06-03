const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Jenkins Automation Demo! with third time update');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
