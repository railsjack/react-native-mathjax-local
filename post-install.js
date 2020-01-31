'use strict'
const fs = require('fs');
const mkdirAssets = function(){
  try {
    fs.mkdirSync(process.env.INIT_CWD + '/assets');
  } catch (error) {
    console.log(error);
  }
}
const mkdirMathJax = function(){
  try {
    fs.mkdirSync(process.env.INIT_CWD + '/assets/MathJax');  
  } catch (error) {
    console.log(error);
  }
}
const copyMathJax = function() {
  try {
    fs.copyFileSync('src/MathJax/MathJax.js', process.env.INIT_CWD + '/assets/MathJax');
  } catch (error) {
    console.log(error);
  }
}
mkdirAssets();
mkdirMathJax();
copyMathJax();