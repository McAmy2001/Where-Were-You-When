const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(PORT, function() {
  console.log(`Now listening on port: ${PORT}`);
});