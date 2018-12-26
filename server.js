var express = require("express");
var bodyParser = require("body-parser");

var orm = require("./config/orm.js")

orm.selectAll('Khana');
orm.insertOne('Khana','Gulabzamun with Yogurt');
orm.updateOne('Khana', 'Gualvo',1);