'use strict';

// 设置默认环境变量
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var express = require('express');
var db = require('./db.js');
var config = require('./config/env');
var path = require('path');
var fs = require('fs');
var errorHandler = require('errorhandler');

