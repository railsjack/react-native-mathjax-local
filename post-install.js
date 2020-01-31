'use strict'
const fs = require('fs');
const copyFiles = function() {
  try {
    fs.mkdirSync(process.env.INIT_CWD + '/assets');
  } catch (error) {
    console.log(error);
  }
  try {
    fs.mkdirSync(process.env.INIT_CWD + '/assets/MathJax');  
  } catch (error) {
    console.log(error);
  }
  try {
    fs.copyFileSync('src/MathJax/MathJax.js', process.env.INIT_CWD + '/assets/MathJax');
  } catch (error) {
    console.log(error);
  }
}

copyFiles();