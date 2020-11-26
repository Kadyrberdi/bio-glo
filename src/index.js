'use strict';
console.log('this is index.js');
console.log('this console watched live');

import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);


import popup from './modules/popup'; 
popup();