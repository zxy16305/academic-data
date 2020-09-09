const superagent = require('superagent');
const cheerio = require('cheerio');
var xlsx = require('node-xlsx');
var fs = require('fs');
const resolveFileName = require("./utils").resolveFileName;
const range = require("./utils").range;
const SuperagentPipe = require("../poolList").SuperagentPipe;
var moment = require('moment');
let superagentPipe = new SuperagentPipe(1);

var a885s = [
    {
        "name": "中国",
        "code": "CN"
    },
    {
        "name": "巴基斯坦",
        "code": "PK"
    },
    {
        "name": "以色列",
        "code": "IL"
    },
    {
        "name": "马来西亚",
        "code": "MY"
    },
    {
        "name": "约旦",
        "code": "JO"
    },
    {
        "name": "斯里兰卡",
        "code": "LK"
    },
    {
        "name": "印度尼西亚",
        "code": "ID"
    },
    {
        "name": "沙特阿拉伯",
        "code": "SA"
    },
    {
        "name": "阿联酋",
        "code": "AE"
    },
    {
        "name": "菲律宾",
        "code": "PH"
    },
    {
        "name": "印度",
        "code": "IN"
    },
    {
        "name": "土耳其",
        "code": "TR"
    },
    {
        "name": "越南",
        "code": "VN"
    },
    {
        "name": "韩国",
        "code": "KR"
    },
    {
        "name": "新加坡",
        "code": "SG"
    },
    {
        "name": "泰国",
        "code": "TH"
    },
    {
        "name": "委内瑞拉",
        "code": "VE"
    },
    {
        "name": "智利",
        "code": "CL"
    },
    {
        "name": "乌拉圭",
        "code": "UY"
    },
    {
        "name": "新西兰",
        "code": "NZ"
    },
    {
        "name": "俄罗斯",
        "code": "RU"
    },
    {
        "name": "葡萄牙",
        "code": "PT"
    },
    {
        "name": "立陶宛",
        "code": "LT"
    },
    {
        "name": "斯洛伐克",
        "code": "SK"
    },
    {
        "name": "奥地利",
        "code": "AT"
    },
    {
        "name": "波兰",
        "code": "PL"
    },
    {
        "name": "保加利亚",
        "code": "BG"
    },
    {
        "name": "捷克",
        "code": "CZ"
    },
    {
        "name": "匈牙利",
        "code": "HU"
    },
    {
        "name": "罗马尼亚",
        "code": "RO"
    },
    {
        "name": "埃及",
        "code": "EG"
    },
    {
        "name": "埃塞俄比亚",
        "code": "ET"
    },
    {
        "name": "南非",
        "code": "ZA"
    },
    {
        "name": "突尼斯",
        "code": "TN"
    },
    {
        "name": "肯尼亚",
        "code": "KE"
    }
]

var years = range(22, 2000)

// var a885s = [
//     {
//         "name": "中国",
//         "code": "CN"
//     },
//     {
//         "name": "巴基斯坦",
//         "code": "PK"
//     }
// ]
//
// var years = range(3, 2014)

const urlTemplate = (year, code, year2 = year) => {
    var filter = `[{"YEARNUM_s":["${year}","${year2}"],"a885_s":["${code}"],"a000_s":["现行"]}]`
    return `http://www.ydylstandards.org.cn/api/Wechatcnis/simpleSearch/findByFieldRoad.do?Query&currentPage=1&rows=10&type=a298_c&sort&filter=${encodeURIComponent(filter)}`
}

Object.defineProperty(Array.prototype, 'flat', {
    value: function (depth = 1) {
        return this.reduce(function (flat, toFlatten) {
            return flat.concat((Array.isArray(toFlatten) && (depth > 1)) ? toFlatten.flat(depth - 1) : toFlatten);
        }, []);
    }
});

//
Promise.all(a885s.map(country => {
    return [...years.map(year => {
        return new Promise(((resolve, reject) => {
            let url = urlTemplate(year, country.code);
            console.log(`prepare get ${url}`)
            superagentPipe.get(url).then(({err, res}) => {
                console.log(`complete get ${url}`)
                var value;
                try {
                    value = {
                        ...country,
                        year,
                        count: JSON.parse(JSON.parse(res.text).data).pageBean.totalNumber
                    }
                } catch (e) {
                    value = {
                        ...country,
                        year,
                        count: -1
                    }
                }
                resolve(value)
            })
        }))
    }), new Promise((resolve, reject) => {
        let url = urlTemplate(1900, country.code, 1999);
        console.log(`prepare get ${url}`)
        superagentPipe.get(url).then(({err, res}) => {
            console.log(`complete get ${url}`)
            var value;
            try {
                value = {
                    ...country,
                    year: "1900-2000",
                    count: JSON.parse(JSON.parse(res.text).data).pageBean.totalNumber
                }
            } catch (e) {
                value = {
                    ...country,
                    year: "1900-2000",
                    count: -1
                }
            }
            resolve(value)
        })
    })
    ]
}).flat(1)).then(datas => {


    let a = {
        name: "excel",
        data: [["国家", "编号", "年份", "数量"]].concat(
            datas.map(it => [it.name, it.code, it.year, it.count])
        )
    }
    var buffer = xlsx.build([a]);
    fs.writeFileSync(`yidaiyilunumbers.xlsx`, buffer, {'flag': 'w'});

})


// console.log(a885s.map(country => years.map(year => ({
//     ...country,
//     year,
//     count: 0
// }))).flat());


// a885s.map(country => {
//     return years.map(year => {
//         return new Promise(((resolve, reject) => {
//             superagentPipe.get(urlTemplate(year ,country.code)).then(({err, res})=>{
//                 var value;
//                 try {
//                     value = {
//                         ...country,
//                         year,
//                         count: JSON.parse(JSON.parse(res.text).data).pageBean.totalNumber
//                     }
//                 } catch (e) {
//                     value = {
//                         ...country,
//                         year,
//                         count: -1
//                     }
//                 }
//                 resolve(value)
//             })
//         }))
//     })
// })

// function unique(arr) {
//     return Array.from(new Set(arr))
// }
//
// let message = unique(pages.map(it => `https://www.yidaiyilu.gov.cn${it}`));
// console.log(message);
//
//
// console.log("准备输出excel")
//
// let a = {
//     name: "excel",
//     data: [["国家", "位置", "网站"]].concat(
//         message.map(it => ['', '', it])
//     )
// }
//
// var buffer = xlsx.build([a]);
// fs.writeFileSync(`ss.xlsx`, buffer, {'flag': 'w'});
