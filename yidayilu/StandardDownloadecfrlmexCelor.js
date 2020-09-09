const superagent = require('superagent');
const cheerio = require('cheerio');
var xlsx = require('node-xlsx');
var fs = require('fs');
const resolveFileName = require("./utils").resolveFileName;
const range = require("./utils").range;
const SuperagentPipe = require("../poolList").SuperagentPipe;
var moment = require('moment');
let superagentPipe = new SuperagentPipe(2);

let pages = "/gbjg/gbgk/115887.htm,/gbjg/gbgk/108634.htm,/gbjg/gbgk/106293.htm,/gbjg/gbgk/106292.htm,/gbjg/gbgk/106291.htm,/gbjg/gbgk/105565.htm,/gbjg/gbgk/98230.htm,/gbjg/gbgk/88392.htm,/gbjg/gbgk/88394.htm,/gbjg/gbgk/88395.htm,/gbjg/gbgk/88398.htm,/gbjg/gbgk/85625.htm,/gbjg/gbgk/84262.htm,/gbjg/gbgk/83735.htm,/gbjg/gbgk/83432.htm,/gbjg/gbgk/80306.htm,/gbjg/gbgk/77104.htm,/gbjg/gbgk/77103.htm,/gbjg/gbgk/77099.htm,/gbjg/gbgk/74581.htm,/gbjg/gbgk/73849.htm,/gbjg/gbgk/72062.htm,/gbjg/gbgk/77096.htm,/gbjg/gbgk/70991.htm,/gbjg/gbgk/70549.htm,/gbjg/gbgk/70551.htm,/gbjg/gbgk/70553.htm,/gbjg/gbgk/68871.htm,/gbjg/gbgk/67145.htm,/gbjg/gbgk/66884.htm,/gbjg/gbgk/66328.htm,/gbjg/gbgk/66293.htm,/gbjg/gbgk/66292.htm,/gbjg/gbgk/66291.htm,/gbjg/gbgk/66290.htm,/gbjg/gbgk/66289.htm,/gbjg/gbgk/66288.htm,/gbjg/gbgk/66284.htm,/gbjg/gbgk/66283.htm,/gbjg/gbgk/66282.htm,/gbjg/gbgk/66281.htm,/gbjg/gbgk/66280.htm,/gbjg/gbgk/66279.htm,/gbjg/gbgk/66275.htm,/gbjg/gbgk/66271.htm,/gbjg/gbgk/66270.htm,/gbjg/gbgk/66266.htm,/gbjg/gbgk/66265.htm,/gbjg/gbgk/66264.htm,/gbjg/gbgk/66263.htm,/gbjg/gbgk/66262.htm,/gbjg/gbgk/66261.htm,/gbjg/gbgk/66260.htm,/gbjg/gbgk/65323.htm,/gbjg/gbgk/64980.htm,/gbjg/gbgk/64948.htm,/gbjg/gbgk/64950.htm,/gbjg/gbgk/64952.htm,/gbjg/gbgk/64505.htm,/gbjg/gbgk/64049.htm,/gbjg/gbgk/63302.htm,/gbjg/gbgk/62688.htm,/gbjg/gbgk/62686.htm,/gbjg/gbgk/62666.htm,/gbjg/gbgk/60932.htm,/gbjg/gbgk/60706.htm,/gbjg/gbgk/59959.htm,/gbjg/gbgk/59958.htm,/gbjg/gbgk/58491.htm,/gbjg/gbgk/58326.htm,/gbjg/gbgk/57155.htm,/gbjg/gbgk/55399.htm,/gbjg/gbgk/52311.htm,/gbjg/gbgk/44548.htm,/gbjg/gbgk/35789.htm,/gbjg/gbgk/35388.htm,/gbjg/gbgk/10220.htm,/gbjg/gbgk/60933.htm,/gbjg/gbgk/10074.htm,/gbjg/gbgk/10062.htm,/gbjg/gbgk/10063.htm,/gbjg/gbgk/10064.htm,/gbjg/gbgk/10058.htm,/gbjg/gbgk/10059.htm,/gbjg/gbgk/10045.htm,/gbjg/gbgk/10047.htm,/gbjg/gbgk/10048.htm,/gbjg/gbgk/10049.htm,/gbjg/gbgk/11084.htm,/gbjg/gbgk/10050.htm,/gbjg/gbgk/10051.htm,/gbjg/gbgk/10025.htm,/gbjg/gbgk/10027.htm,/gbjg/gbgk/10036.htm,/gbjg/gbgk/10037.htm,/gbjg/gbgk/10038.htm,/gbjg/gbgk/10040.htm,/gbjg/gbgk/10044.htm,/gbjg/gbgk/10004.htm,/gbjg/gbgk/10008.htm,/gbjg/gbgk/10010.htm,/gbjg/gbgk/10011.htm,/gbjg/gbgk/10014.htm,/gbjg/gbgk/10018.htm,/gbjg/gbgk/10020.htm,/gbjg/gbgk/10006.htm,/gbjg/gbgk/10007.htm,/gbjg/gbgk/10005.htm,/gbjg/gbgk/9975.htm,/gbjg/gbgk/874.htm,/gbjg/gbgk/901.htm,/gbjg/gbgk/852.htm,/gbjg/gbgk/1845.htm,/gbjg/gbgk/902.htm,/gbjg/gbgk/1841.htm,/gbjg/gbgk/904.htm,/gbjg/gbgk/867.htm,/gbjg/gbgk/853.htm,/gbjg/gbgk/864.htm,/gbjg/gbgk/899.htm,/gbjg/gbgk/866.htm,/gbjg/gbgk/880.htm,/gbjg/gbgk/885.htm,/gbjg/gbgk/884.htm,/gbjg/gbgk/896.htm,/gbjg/gbgk/894.htm,/gbjg/gbgk/892.htm,/gbjg/gbgk/897.htm,/gbjg/gbgk/811.htm,/gbjg/gbgk/900.htm,/gbjg/gbgk/841.htm,/gbjg/gbgk/868.htm,/gbjg/gbgk/903.htm,/gbjg/gbgk/847.htm,/gbjg/gbgk/854.htm,/gbjg/gbgk/870.htm,/gbjg/gbgk/825.htm,/gbjg/gbgk/807.htm,/gbjg/gbgk/872.htm,/gbjg/gbgk/895.htm,/gbjg/gbgk/891.htm,/gbjg/gbgk/836.htm,/gbjg/gbgk/905.htm,/gbjg/gbgk/898.htm".split(",")


const search = (page) => {
    console.log(`准备搜索-${page}`)
    superagentPipe.get(`https://www.yidaiyilu.gov.cn${page}`)
        .then(({err, res}) => {
            let $ = cheerio.load(res.text);
            // console.log(res.text);
            let $cContentElement = $("#content p");
            let href = $($cContentElement).attr("href");
            // console.log(`完成搜索-${keyWord}-${href}`)
            //
            // if(href){
            //     let id = href.substring(href.lastIndexOf("/") + 1, href.lastIndexOf("."));
            //
            //     superagentPipe.get(`http://www.bzmfxz.com/Common/ShowDownloadUrl.aspx?urlid=0&id=${id}`).then(({err, res}) => {
            //         // console.log(res.text);
            //         let $2 = cheerio.load(res.text);
            //         let url = $2("#content a").attr("href");
            //
            //         console.log("开始下载"+url)
            //         superagentPipe.download(url, fs.createWriteStream(
            //             'files\\'+
            //             resolveFileName($2(".STYLE1").text() && $2(".STYLE1").text()) + url.substring(url.lastIndexOf(".")) ||
            //             url.substring(url.lastIndexOf("/") + 1)
            //         )).then(it => console.log(it));
            //
            //     });
            // }


        })
}
search(pages[0])

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
