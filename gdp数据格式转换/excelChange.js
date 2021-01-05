var xlsx = require('node-xlsx');
let {range} = require("../StandardStatistics/utils");
let fs = require("fs");

var excelObj = xlsx.parse('./GDP（以2010为基期）.xls');
var regPos = /^[0-9]+.?[0-9]*/;

//
let answer = {
    name: "",
    data: [
        ["国家", "年份"]
    ]
}

let sheetAnswer = {
    // country + year
}
// sheet
//
let set = new Set();
let sheet = excelObj[0]
sheet.data.forEach((it, index) => {
    if (index > 0) {
        set.add(it[0])
    }
})



console.log(set)
let years = [2009,2010,2011,2012,2013,2014,2015,2016,2017,2018]
// 填充表头和
set.forEach(it => {
    years.forEach(year => {
        answer.data.push([it, year])
    })
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
        let [country, year] = line
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
fs.writeFileSync(`面板数据.xlsx`, buffer, {'flag': 'w'});

// console.log(years)