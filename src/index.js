'use strict';

import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);


import accordion from './modules/accordion'; 
accordion();
import popup from './modules/popup'; 
popup();
import sendForm from './modules/sendForm'; 
sendForm();
import calc from './modules/calc'; 
calc();

