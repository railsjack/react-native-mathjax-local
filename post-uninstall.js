'use strict'
const fs = require('fs');
const cleanAssetFiles = async () => {
  await removeMathJax();
  await rmdirMathJax();
}
const removeMathJax = async () => {
  console.log('Removing MathJax/MathJax.js');
  try {
    fs.unlinkSync(process.env.INIT_CWD + '/assets/MathJax/MathJax.js');
  } catch (error) {
    // console.log(error);
  }
}
const rmdirMathJax = async () => {
  console.log('Removing assets/MathJax directory');
  try {
    fs.rmdirSync(process.env.INIT_CWD + '/assets/MathJax');  
  } catch (error) {
    // console.log(error);
  }
}

cleanAssetFiles();

