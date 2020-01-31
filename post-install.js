'use strict'
const fs = require('fs');
fs.mkdirSync(process.env.INIT_CWD + '/assets');
fs.mkdirSync(process.env.INIT_CWD + '/assets/MathJax');
fs.copyFileSync('src/MathJax/MathJax.js', process.env.INIT_CWD + '/assets/MathJax');
