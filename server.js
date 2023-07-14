const express = require('express');
const cors = require('cors');

const app = express();

var corOptions = {
  origin: 'http://localhost:8081',
}

// middleware
app.use(cors(corOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World!'
  })
})

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log(`Server is running on post: ${PORT}`)
})
