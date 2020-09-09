const groupBy = require("./StandardExcelParse").groupBy;
const getExcelData = require("./StandardExcelParse").getExcelData;
var xlsx = require('node-xlsx');
var fs = require('fs');
var moment = require('moment');
var ncp = require("copy-paste");
const parseName = require("./utils").parseName;


let data = getExcelData();




let maps = groupBy(data.map(it => ({
    ...it,
    publishYear: moment(it.publishDate, "YYYY-MM-DD").year(),
    cate: parseName(it.standardNumber)
}))/*.filter(it => it.publishYear >= 2011 && it.publishYear <= 2018)*/, item => item.publishYear + item.cate)
    .sort((a, b) => a[0].publishYear - b[0].publishYear)
    .map(it => ({cate: it[0].cate, year: it[0].publishYear.toString(), count: it.length}))

console.log(maps);

ncp.copy(maps)

// ncp.copy(maps.map(it=> `${it.year}\t${it.cate}\t${it.count}`).join("\n"))
