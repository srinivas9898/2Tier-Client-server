let os = require("node:os");
let path = require("node:path");
let moment = require("moment");
let express = require("express");


console.log(os.platform());
console.log(os.version());
console.log(os.totalmem()/1024/1024/1024);

console.log(os.freemem()/1024/1024);

path.parse("https://documents.iplt20.com/ipl/IPLHeadshot2024/57.png");

console.log(moment().subtract(10, 'days').calendar());
