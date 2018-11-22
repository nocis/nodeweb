'use strict';

var mongoose = require('mongoose'),
    DB_URL = 'mongodb://localhost:27017/mongoosesample';


mongoose.connect(DB_URL);

mongoose.connect(config.mongo.uri, config.mongo.options);
var modelsPath = path.join(__dirname, 'model');
fs.readdirSync(modelsPath).forEach(function (file) {
    if (/(.*)\.(js$|coffee$)/.test(file)) {
        require(modelsPath + '/' + file);
    }
});
//mongoose promise 风格
mongoose.Promise = global.Promise;

// 初始化数据
if(config.seedDB) { require('./config/seed'); }