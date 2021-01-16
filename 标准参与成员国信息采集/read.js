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
        ["名称", "正在进行中的标准数量", "从属", "地址"]
    ]
}

function getParticipation(participation) {
    for (let item of participation) {
        if (include(item.countryName)) {
            return participation.length;
        }
    }
    return 0;
}

for (let tc of all) {
    let participation = getParticipation(tc.participation);
    answer.data.push([tc.name, participation > 0 ? tc.sudNumber : 0, "", "https://www.iso.org" + tc.url])

    for (let sc of tc.sc) {
        answer.data.push([sc.name, getParticipation(sc.participation) > 0? sc.sudNumber: 0, "https://www.iso.org" + tc.name, sc.url])
    }
}

var buffer = xlsx.build([answer]);

fs.writeFileSync(`共同制定数据.xlsx`, buffer, {'flag': 'w'});