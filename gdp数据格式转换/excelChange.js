var xlsx = require('node-xlsx');
let {range} = require("../StandardStatistics/utils");
let fs = require("fs");

let countryList = ["南非", "印度", "越南", "尼日利亚", "卢旺达", "希腊", "乌克兰", "奥地利", "巴拿马", "匈牙利", "拉脱维亚", "乌兹别克斯坦", "阿拉伯埃及共和国", "俄罗斯联邦", "马来西亚", "新加坡", "新西兰", "波兰", "土耳其", "大韩民国", "冈比亚", "纳米比亚", "意大利", "乌拉圭", "突尼斯", "以色列", "埃塞俄比亚", "塞尔维亚", "沙特阿拉伯", "阿联酋", "印度尼西亚",]

var excelObj = xlsx.parse('./GDP（以2010为基期）.xls');
var regPos = /^[0-9]+.?[0-9]*/;

//
let answer = {
    name: "",
    data: [
        ["序号", "国家", "年份"]
    ]
}

let sheetAnswer = {
    // country + year
}
// sheet
//
// let set = new Set();
let sheet = excelObj[0]
// countryList.forEach(it=> set.add(it))
// sheet.data.forEach((it, index) => {
//     if (index > 0) {
//         set.add(it[0])
//     }
// })



// console.log(set)
let years = [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018]
// 填充表头和
countryList.forEach((it, index) => {
    if (countryList.includes(it)) {
        years.forEach(year => {
            answer.data.push([index + 1, it, year])
        })
    }
})


// 统计项
answer.data[0].push("GDP")

// 组建年份、国家的行列索引
var yearIndex = {};
sheet.data[0].forEach((it, index) => {
    if (regPos.test(it)) {
        // 数字默认是年份
        yearIndex[it] = index
    }
})
var countryIndex = {};
sheet.data.forEach((it, index) => {
    countryIndex[it[0]] = index;
})

// 按列填充数据
answer.data.forEach((line, index) => {
    if (index > 0) {
        let [index, country, year] = line
        let countryLine = sheet.data[countryIndex[country]];
        if (countryLine != null) {
            let data = countryLine[yearIndex[year]];
            line.push(data)
        } else {
            line.push("")
        }

    }
})


console.log(answer)
var buffer = xlsx.build([answer]);
fs.writeFileSync(`GDP.xlsx`, buffer, {'flag': 'w'});

// console.log(years)