# React Native Latex

![Build Status](https://img.shields.io/npm/v/npm?style=plastic)

This module includes a component to render MathJax formulas in React Native App.  
This is based on the local MathJax file instead of remote JS file.  

## **Installation**
---
```
$ npm install --save react-native-mathjax-local
```
The solution is implemented in JavaScript so no native module linking is required.

## **Usage**
After install this package, MathJax directory will be created inside the directory <projectDir> / assets.  
## For iOS  
1. Open Xcode workspace   
2. Drag and drop node_modules/react-native-mathjax-local/MathJax to `Project name` directory in Xcode  
3. When a dialog shows up, make sure to check `Copy items if needed` and `Create folder references`  
4. Press Finish  
5. Build & Run  

## For Android
1. Copy node_modules/react-native-mathjax-local/MathJax to `android/app/src/main/assets`  
2. Build & Run  


---
```
import MathJax from 'react-native-mathjax-local';

<MathJax style={{
  width: '100%',
  height: 100
}}>
  {"\\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty}e^{-\\frac{x^2}{2}}dx"}
</MathJax>
```
