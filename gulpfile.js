/*
STV Digital
gulpfile.js
Author: STV Digital
Date: 7th November 2014
Project: STV Player Version 3
*/

// specify a directory contains scripts to require, recursive to include sub folders
var requireDir = require('require-dir');

requireDir('./gulp/tasks', { recurse : true });
