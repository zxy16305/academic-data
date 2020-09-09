var AipOcrClient = require("baidu-aip-sdk").ocr;
var fs = require('fs');

var APP_ID = "17552159";
var API_KEY = "VE9tyRhtMkE33UUuuBeoNRd4";
var SECRET_KEY = "SLYkVMPLuhDwmtf2XWBVkwFrnMo5IlOR";

var client = new AipOcrClient(APP_ID, API_KEY, SECRET_KEY);

// var image = fs.readFileSync("test.png").toString("base64");
//
// client.generalBasic(image).then(function(result) {
//     console.log(JSON.stringify(result));
// }).catch(function(err) {
//     // 如果发生网络错误
//     console.log(err);
// });

module.exports = {
    client
}