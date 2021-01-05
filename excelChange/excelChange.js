var xlsx = require('node-xlsx');
let {range} = require("../StandardStatistics/utils");
let fs = require("fs");

var excelObj = xlsx.parse('./最终版本.xlsx');
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
for (var sheetKey in excelObj) {
    let sheet = excelObj[sheetKey]
    sheet.data.forEach((it, index) => {
        if (index > 0) {
            set.add(it[0])
        }
    })

}

console.log(set)
let years = range(15, 2004)
// 填充表头和
set.forEach(it => {
    years.forEach(year => {
        answer.data.push([it, year])
    })
})


for (var sheetKey in excelObj) {
    // 按列补充数据
    let sheet = excelObj[sheetKey];
    // 统计项
    let sheetName = sheet.name;
    answer.data[0].push(sheetName)

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
}

console.log(answer)
var buffer = xlsx.build([answer]);
fs.writeFileSync(`面板数据.xlsx`, buffer, {'flag': 'w'});

// console.log(years)