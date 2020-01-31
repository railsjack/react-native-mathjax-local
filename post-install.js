'use strict'
const fs = require('fs');
const copyAssetFiles = async () => {
  await mkdirAssets();
  await mkdirMathJax();
  await copyMathJax();
}
const mkdirAssets = async () => {
  console.log('Creating assets directory');
  try {
    fs.mkdirSync(process.env.INIT_CWD + '/assets');
  } catch (error) {
    console.log(error);
  }
}
const mkdirMathJax = async () => {
  console.log('Creating assets/MathJax directory');
  try {
    fs.mkdirSync(process.env.INIT_CWD + '/assets/MathJax');  
  } catch (error) {
    console.log(error);
  }
}
const copyMathJax = async () => {
  console.log('Copying MathJax/MathJax.js');
  try {
    fs.copyFileSync('src/MathJax/MathJax.js', process.env.INIT_CWD + '/assets/MathJax/MathJax.js');
  } catch (error) {
    console.log(error);
  }
}

copyAssetFiles();

