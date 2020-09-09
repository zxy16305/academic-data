const superagent = require('superagent');
const cheerio = require('cheerio');
var xlsx = require('node-xlsx');
var fs = require('fs');
const getExcelData = require("./StandardExcelParse").getExcelData;
const resolveFileName = require("./utils").resolveFileName;
const range = require("./utils").range;
const SuperagentPipe = require("../poolList").SuperagentPipe;
var moment = require('moment');
let superagentPipe = new SuperagentPipe(2);

const search = (keyWord) => {
    console.log(`准备搜索-${keyWord}`)
    superagentPipe.get(`http://www.bzmfxz.com/search.aspx?searchtype=0&Keyword=${keyWord}`)
        .then(({err, res}) => {
            let $ = cheerio.load(res.text);
            // console.log(res.text);
            let $cContentElement = $(".c_content a")[0];
            let href = $($cContentElement).attr("href");
            console.log(`完成搜索-${keyWord}-${href}`)

            if(href){
                let id = href.substring(href.lastIndexOf("/") + 1, href.lastIndexOf("."));

                superagentPipe.get(`http://www.bzmfxz.com/Common/ShowDownloadUrl.aspx?urlid=0&id=${id}`).then(({err, res}) => {
                    // console.log(res.text);
                    let $2 = cheerio.load(res.text);
                    let url = $2("#content a").attr("href");

                    console.log("开始下载"+url)
                    superagentPipe.download(url, fs.createWriteStream(
                        'files\\'+
                        resolveFileName($2(".STYLE1").text() && $2(".STYLE1").text()) + url.substring(url.lastIndexOf(".")) ||
                        url.substring(url.lastIndexOf("/") + 1)
                    )).then(it => console.log(it));

                });
            }


        })
}
let data = getExcelData();


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
Object.keys(draftUnitMap).forEach(key => {

    if(key === ''){
        draftUnitMap[key].forEach(arr=>{
           search( arr.standardNumber.split(' ')[1])
        })
    }
})
//search("1208-2002")

//
// let interval = setInterval(() => {
//     console.log("queue size:", superagentPipe.bagpipe.queue.length)
// }, 10000);
//
// const searchs = ['移动支付', '移动金融', '手机支付']
// // const searchs = ['全球无敌手']
//
// const getPageUrl = (search, pageNo) => `http://std.samr.gov.cn/search/stdPage?q=${encodeURIComponent(search)}&tid=&pageNo=${pageNo}&op=G_STATE%3A%22%E7%8E%B0%E8%A1%8C%22`
//
// const getTotal = (text) => {
//     let s = text.substring(text.indexOf("totalPages"));
//     return parseInt(s.substring(s.indexOf(":") + 1, s.indexOf(",")))
// }
//
// const getTotalBySearch = (search) => {
//     return new Promise(((resolve, reject) => {
//         superagentPipe.get(getPageUrl(search, 0)).then(({err, res}) => {
//             if (err) {
//                 // 如果访问失败或者出错，会这行这里
//                 console.log(`抓取失败 - ${err}`)
//             } else {
//                 resolve(getTotal(res.text))
//             }
//         });
//     }))
// }
//
//
// const getItemUrls = (url) => {
//     return new Promise(((resolve, reject) => {
//         superagentPipe.get(url).then(({err, res}) => {
//             if (err) {
//                 // 如果访问失败或者出错，会这行这里
//                 console.log(`抓取失败 - ${err}`)
//             } else {
//                 // console.log(res.text);
//                 let $ = cheerio.load(res.text);
//                 let $media = $(".media-body table a");
//                 // console.log($media);
//                 resolve($media.toArray().map((ele) => getHref($(ele))))
//             }
//         });
//     }))
// }
//
// const getHref = ($a) => {
//     var tid = $a.attr('tid');
//     var pid = $a.attr('pid');
//     if (tid === 'BV_HB')
//         return "http://std.samr.gov.cn/hb/search/stdHBDetailed?id=" + pid;
//     else if (tid === 'BV_DB')
//         return "http://std.samr.gov.cn/db/search/stdDBDetailed?id=" + pid;
//     else
//         return "http://std.samr.gov.cn/gb/search/gbDetailed?id=" + pid;
// }
//
// const getDetail = (url) => {
//     return new Promise((resolve, reject) => {
//         superagentPipe.get(url).then(({err, res}) => {
//             if (err) {
//                 // 如果访问失败或者出错，会这行这里
//                 console.log(`抓取失败 - ${err}`)
//             } else {
//                 // console.log(res.text);
//                 let $ = cheerio.load(res.text);
//                 let title = $(".page-header h4").text()
//
//                 let $rightBasicInfo = $(".basicInfo-block.basicInfo-right");
//                 let $basicInfo = $(".basicInfo-block.basicInfo-left");
//                 let baseInfo = {...getTableInfo($basicInfo[0], $), ...getTableInfo($rightBasicInfo[0], $)}
//                 /**
//                  * 起草单位
//                  * @type {string | jQuery}
//                  */
//                 let draftingUnit = $($(".basic-info.cmn-clearfix")[1]).find(".triggers").toArray().map(it => $(it).text()).join(",");
//
//                 resolve({
//                     url,
//                     title,
//                     standardNumber: baseInfo['标准号'],
//                     publishDate: baseInfo['发布日期'],
//                     executeDate: baseInfo['实施日期'],
//                     focalUnit: baseInfo['归口单位'] || "",
//                     executeUnit: baseInfo['执行单位'] || "",
//                     Administration: baseInfo['主管部门'] || "",
//                     draftingUnit
//                 })
//             }
//         });
//     })
// }
//
// const getTableInfo = (info, $) => {
//     let value = $($(info)).find(".basicInfo-item.value").toArray().map(el => $(el).text().trim());
//     let key = $($(info)).find(".basicInfo-item.name").toArray().map(el => $(el).text().trim());
//     return composeObject(key, value);
// }
//
//
// const composeObject = (key = [], value = []) => {
//     let obj = {}
//     for (let i = 0; i < key.length; i++) {
//         obj[key[i]] = value[i]
//     }
//     return obj
// }
//
// Promise.all(
//     searchs.map(search => {
//         return new Promise(resolve => {
//             getTotalBySearch(search).then(page => {
//                 Promise.all(range(page, 1).map(pageNum => {
//                         return getItemUrls(getPageUrl(search, pageNum)).then((urls) => {
//                             // getTotalBySearch
//                             return Promise.all(urls.map(it => getDetail(it)))
//                             // getDetail(urls[0])
//                         })
//                     }
//                 )).then(it => {
//                     let data = [].concat(...it);
//                     console.log(`${search}搜索完成，共${data.length}项, ${page}页`)
//                     resolve({search, data: data})
//                 })
//             })
//         })
//     })).then((list) => {
//     console.log("准备输出excel")
//     let xlsxData = list.map(({search, data}) => {
//         let sheetData = [["标准名", "标准编号", "归口单位", "执行单位", "主管部门", "起草单位", "发布日期", "执行日期", "网页地址"]]
//             .concat(data.map(it => [it.title, it.standardNumber, it.focalUnit, it.executeUnit, it.Administration, it.draftingUnit, it.publishDate, it.executeDate, it.url]))
//         return {
//             name: search,
//             data: sheetData
//         }
//     });
//     var buffer = xlsx.build(xlsxData);
//     fs.writeFileSync('book.xlsx', buffer, {'flag': 'w'});
//     clearInterval(interval)
// })
