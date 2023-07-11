const { resolve } = require('path');
const express = require('express');
const app = express();
const router = express.Router();

app.use( express.static(resolve('public')) );
app.use( router );

router.get('*', (req, res) => res.end());

module.exports = app;
