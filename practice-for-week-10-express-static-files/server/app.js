const express = require('express');
const app = express();
const path = require('path')

// Your code here

// PHASE 1
// app.use(express.static(path.join(__dirname, 'assets')));
// app.use(express.static('assets'));

// PHASE 2 A
// app.use('/scripts', express.static(path.join(__dirname, 'assets/scripts')));

// PHASE 2 B
app.use('/stylesheets', express.static(path.join(__dirname, 'assets')));


// PHASE 2 C
app.use('/stickers', express.static(path.join(__dirname, 'assets/images')));

/// /scripts/hello-world.js
// app.use('lama', express.static(path.join(__dirname, 'assets')));
// console.log(path.join(__dirname, 'assest'))

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));