let all = require("./temp-fix.json");
var xlsx = require('node-xlsx');
var fs = require('fs');
let {yidaiyilu} = require("../分散下载/countries");


let countrys = yidaiyilu.map(it => it.toLowerCase());


function include(inputOriginal) {
    let input = inputOriginal.toLowerCase();
    // 测试结果为，niger匹配有问题，手动去除
    if (input === 'niger') {
        return null;
    }
    if (countrys.includes(input)) {
        return countrys.find(it => it === input)
    }
    for (let country of countrys) {
        if (country.includes(input)) {
            return country;
        }
    }
    return null;
}

// let map = all.flatMap(it=>{
//     return it.participation.map(p=>p.countryName)
//         .concat(...it.sc.flatMap(c=>c.participation.map(p=>p.countryName)))
// });
// let set = new Set(map);
// let answer = []
// let match = {}
// set.forEach(it => {
//     let countryInDir = include(it.split(",")[0].toLowerCase());
//     if (countryInDir == null) {
//         answer.push(it)
//     }else{
//         if(match[countryInDir] == null || match[countryInDir] === undefined){
//             match[countryInDir] = it;
//         }else{
//             console.log("冲突", it, match[countryInDir], countryInDir)
//         }
//     }
// })
// console.log(countrys.length)
// console.log(set.size)
// console.log(answer.length)


let answer = {
    name: "含有31国的统计",
    data: [
        ["国家", "名称", "已发布的标准数量", "正在进行中的标准数量", '地址']
    ]
}

function getParticipation(country, participation) {
    // 如果参与国家包括中国和这个国家，返回true
    let contryLowerCase = country.toLowerCase();
    let map = participation.map(it => it.countryName.split(",")[0].toLowerCase());
    return map.includes("china") && map.some(it => contryLowerCase.includes(it))
}

for (let country of yidaiyilu) {
    for (let tc of all) {
        let isWithChina = getParticipation(country, tc.participation);
        answer.data.push([country, tc.name, isWithChina ? tc.psNumber: 0 ,isWithChina ? tc.sudNumber : 0, "https://www.iso.org" + tc.url])

        for (let sc of tc.sc) {
            let isScWithChina = getParticipation(country, sc.participation);
            answer.data.push([country, sc.name, isScWithChina ? sc.psNumber : 0, isScWithChina ? sc.sudNumber : 0, "https://www.iso.org" + sc.url])
        }
    }
}

var buffer = xlsx.build([answer]);

fs.writeFileSync(`共同制定数据.xlsx`, buffer, {'flag': 'w'});