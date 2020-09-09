/**
 * 获取起草单位分类的excel
 * @type {groupBy}
 */
const groupBy = require("./StandardExcelParse").groupBy;
const getExcelData = require("./StandardExcelParse").getExcelData;
var xlsx = require('node-xlsx');
var fs = require('fs');
var moment = require('moment');
var ncp = require("copy-paste");


let data = getExcelData();

// let unitNames = ["银联", "财付通", "阿里巴巴", "支付宝", "中国移动", "中国联合网络通信", "中国电信"];

let draftUnitMap = {}

data
    .filter((it) => {
        let publishYear = moment(it.publishDate, "YYYY-MM-DD").year();
        return publishYear >= 2005 && publishYear <= 2018
    })
    .map(it => ({
        ...it,
        graftUnits: it.draftingUnit.split(",")
    })).forEach(it => {
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

let excelData = stat.map(it => ({
    name: it.unit.substring(0, 31),
    data: [
        ["标准名", "标准编号", "归口单位", "执行单位", "主管部门", "起草单位", "发布日期", "执行日期", "网页地址"],
        ...it.item.map(item => [item.title, item.standardNumber, item.focalUnit, item.executeUnit, item.Administration, item.draftingUnit, item.publishDate, item.executeDate, item.url])
    ]
}));
var buffer = xlsx.build(excelData);
fs.writeFileSync('起草单位分类详情.xlsx', buffer, {'flag': 'w'});

//主要起草单位
// {
//     let excelString = unitNames.map(unitName => `${unitName}\t${stat.filter(it => it.unit.includes(unitName)).map(item => item.count).reduce((a, b) => a + b, 0)}`).join("\n");
//
//     ncp.copy(excelString)
// }

// //原始起草单位
// {
//     ncp.copy(stat.map(it=>`${it.unit}\t${it.count}`).join("\n"))
// }
// ncp.copy(draftUnitMap.map(it => `${it.year}\t${it.cate}\t${it.count}`).join("\n"))
