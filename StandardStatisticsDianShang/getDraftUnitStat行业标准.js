const groupBy = require("./StandardExcelParse").groupBy;
const getExcelData = require("./StandardExcelParse").getExcelData;
var xlsx = require('node-xlsx');
var fs = require('fs');
var moment = require('moment');
var ncp = require("copy-paste");

const parseName = require("./utils").parseName;


let data = getExcelData();

let unitNames = ["银联", "财付通", "阿里巴巴", "支付宝", "中国移动", "中国联合网络通信", "中国电信"];

let draftUnitMap = {}

data
    .filter((it) => {
        let publishYear = moment(it.publishDate, "YYYY-MM-DD").year();
        return publishYear >= 2005 && publishYear <= 2018
    })
    .map(it => ({
    ...it,
    graftUnits: it.draftingUnit.split(",")
}))
    .filter(it=> parseName(it.standardNumber) === "行业标准")
    .forEach(it => {
    if (it.graftUnits.length > 0) {
        it.graftUnits.forEach(draft => {
            draftUnitMap[draft] = (draftUnitMap[draft] || []).concat(it)
        })
    }
})
// console.log(draftUnitMap);

let stat = []

Object.keys(draftUnitMap).forEach(key => {
    stat.push({
        unit: key,
        count: (draftUnitMap[key] || []).length,
        item: draftUnitMap[key]
    })
})

stat.sort((a, b) => b.count - a.count)

// console.log(stat)

// //主要起草单位
// {
//     let excelString = unitNames.map(unitName => `${unitName}\t${stat.filter(it => it.unit.includes(unitName)).map(item => item.count).reduce((a, b) => a + b, 0)}`).join("\n");
//
//     ncp.copy(excelString)
// }

// 原始起草单位
{
    ncp.copy(stat.map(it=>`${it.unit}\t${it.count}`).join("\n"))
}

// ncp.copy(draftUnitMap.map(it => `${it.year}\t${it.cate}\t${it.count}`).join("\n"))
