// 处理下载的temp.json，做成合适的图表
let {findByCode, countryList} = require("./countries");
var xlsx = require('node-xlsx');
var fs = require('fs');

let answer = {
    name: "本国对外出口数据",
    data: [
        ["country_code", "country_name", "year", 'Trade Value (US$)']
    ]
}

let temp = require('./temp.json');

temp.flatMap(it=>it)
.forEach((it, index)=>{
    const {country_name, country_code} = findByCode(it.rt3ISO)
    answer.data.push([
        country_code,
        country_name,
        it.yr,
        it.TradeValue
    ])
})

answer.data.sort((a, b) => {
        let aIndex = countryList.findIndex(it => it === a[1]);
        let bIndex = countryList.findIndex(it => it === b[1]);
        if (aIndex !== bIndex) {
            return aIndex - bIndex;
        }
        return a[2] - b[2];
    }
)

var buffer = xlsx.build([answer]);

fs.writeFileSync(`本国对外出口.xlsx`, buffer, {'flag': 'w'});
