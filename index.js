const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { MongoClient, ServerApiVersion,ObjectId } = require('mongodb');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

 








app.get('/', (req, res) => {
    res.send('Talents are showing in the cottage')
})

app.listen(port, () => {
    console.log(`Talent Cottage Server is running on port ${port}`)
})