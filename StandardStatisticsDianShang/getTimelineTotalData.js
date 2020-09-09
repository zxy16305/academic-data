const groupBy = require("./StandardExcelParse").groupBy;
const getExcelData = require("./StandardExcelParse").getExcelData;
var xlsx = require('node-xlsx');
var fs = require('fs');
var moment = require('moment');
var ncp = require("copy-paste");
const range = require("./utils").range;


let data = getExcelData();

function parseName(serialNumber) {
    if (serialNumber.startsWith("GB")) {
        return "国家标准"
    }/*else if(serialNumber.startsWith("GM/T")){
        return "行业标准"
    }*/ else if (serialNumber.startsWith("DB")) {
        return "地方标准"
    } else if (serialNumber.startsWith("Q ")) {
        return "企业标准"
    } else if (serialNumber.startsWith("T ")) {
        return "团体标准"
    } else {
        return "行业标准"
    }
}


let maps = groupBy(data.map(it => ({
    ...it,
    publishYear: moment(it.publishDate, "YYYY-MM-DD").year(),
    cate: parseName(it.standardNumber)
})), item => item.publishYear + item.cate)
    .sort((a, b) => a[0].publishYear - b[0].publishYear)
    .map(it => ({cate: it[0].cate, year: it[0].publishYear, count: it.length}))

let maxYear = Math.max(...maps.map(it=>it.year));
let minYear = Math.min(...maps.map(it=>it.year));


let sums = range(maxYear - minYear + 1, minYear).map(it => ({
    year: it,
    count: maps.filter(item => item.year <= it && item.cate === "国家标准").map(item => item.count).reduce((acc, val) => acc + val, 0),
    cate: "国家标准"
})).concat(
    range(maxYear - minYear + 1, minYear).map(it => ({
        year: it,
        count: maps.filter(item => item.year <= it && item.cate === "行业标准").map(item => item.count).reduce((acc, val) => acc + val, 0),
        cate: "行业标准"
    })))

// let sums = maps.filter(it => it.year >= 2011 && it.year <= 2018)
//     .map(it=> ({
//         ...it,
//         count: maps.filter(item => item.year <= it.year && item.cate === it.cate).map(item => item.count).reduce((acc, val) => acc + val, 0)
//     }));

console.log(sums);

ncp.copy(sums)

// ncp.copy(sums.map(it => `${it.year}\t${it.cate}\t${it.count}`).join("\n"))

// console.log(range(8, 2011));