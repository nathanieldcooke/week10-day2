const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('GET / This is the root URL');
});

// other route handlers here...

app.use((req, res, next) => {
  const err = new Error('Sorry, the requested resource couldn\'t be found')
  err.status = 404
  next(err)
})

app.use((err, req, res, next) => {
  res.status = err.status || 500
  const stack = {
    "message": "Sorry, the requested resource couldn't be found.",
    "statusCode": 404
  }
  res.json(stack)
})


const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));