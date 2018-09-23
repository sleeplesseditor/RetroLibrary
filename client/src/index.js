import '../dist/css/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';

const FileStack = require('./config').FILESTACK;

// Don't forget to add your API key
filepicker.setKey(FileStack);

// Our views are rendered inside the #content div
ReactDOM.render(
  Routes,
  document.getElementById('content')
);