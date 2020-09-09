require('chromedriver'); //导入chrome浏览器 driver
var chrome = require('selenium-webdriver/chrome');

var webdriver = require('selenium-webdriver');
const client = require("./baidu-ocr").client; //导入selenium 库
let ChromeOptions = new chrome.Options()
// ChromeOptions.addArguments("--headless", "window-size=1024,768", "--no-sandbox");
var xlsx = require('node-xlsx');
var fs = require('fs');

let pages = "/gbjg/gbgk/115887.htm,/gbjg/gbgk/108634.htm,/gbjg/gbgk/106293.htm,/gbjg/gbgk/106292.htm,/gbjg/gbgk/106291.htm,/gbjg/gbgk/105565.htm,/gbjg/gbgk/98230.htm,/gbjg/gbgk/88392.htm,/gbjg/gbgk/88394.htm,/gbjg/gbgk/88395.htm,/gbjg/gbgk/88398.htm,/gbjg/gbgk/85625.htm,/gbjg/gbgk/84262.htm,/gbjg/gbgk/83735.htm,/gbjg/gbgk/83432.htm,/gbjg/gbgk/80306.htm,/gbjg/gbgk/77104.htm,/gbjg/gbgk/77103.htm,/gbjg/gbgk/77099.htm,/gbjg/gbgk/74581.htm,/gbjg/gbgk/73849.htm,/gbjg/gbgk/72062.htm,/gbjg/gbgk/77096.htm,/gbjg/gbgk/70991.htm,/gbjg/gbgk/70549.htm,/gbjg/gbgk/70551.htm,/gbjg/gbgk/70553.htm,/gbjg/gbgk/68871.htm,/gbjg/gbgk/67145.htm,/gbjg/gbgk/66884.htm,/gbjg/gbgk/66328.htm,/gbjg/gbgk/66293.htm,/gbjg/gbgk/66292.htm,/gbjg/gbgk/66291.htm,/gbjg/gbgk/66290.htm,/gbjg/gbgk/66289.htm,/gbjg/gbgk/66288.htm,/gbjg/gbgk/66284.htm,/gbjg/gbgk/66283.htm,/gbjg/gbgk/66282.htm,/gbjg/gbgk/66281.htm,/gbjg/gbgk/66280.htm,/gbjg/gbgk/66279.htm,/gbjg/gbgk/66275.htm,/gbjg/gbgk/66271.htm,/gbjg/gbgk/66270.htm,/gbjg/gbgk/66266.htm,/gbjg/gbgk/66265.htm,/gbjg/gbgk/66264.htm,/gbjg/gbgk/66263.htm,/gbjg/gbgk/66262.htm,/gbjg/gbgk/66261.htm,/gbjg/gbgk/66260.htm,/gbjg/gbgk/65323.htm,/gbjg/gbgk/64980.htm,/gbjg/gbgk/64948.htm,/gbjg/gbgk/64950.htm,/gbjg/gbgk/64952.htm,/gbjg/gbgk/64505.htm,/gbjg/gbgk/64049.htm,/gbjg/gbgk/63302.htm,/gbjg/gbgk/62688.htm,/gbjg/gbgk/62686.htm,/gbjg/gbgk/62666.htm,/gbjg/gbgk/60932.htm,/gbjg/gbgk/60706.htm,/gbjg/gbgk/59959.htm,/gbjg/gbgk/59958.htm,/gbjg/gbgk/58491.htm,/gbjg/gbgk/58326.htm,/gbjg/gbgk/57155.htm,/gbjg/gbgk/55399.htm,/gbjg/gbgk/52311.htm,/gbjg/gbgk/44548.htm,/gbjg/gbgk/35789.htm,/gbjg/gbgk/35388.htm,/gbjg/gbgk/10220.htm,/gbjg/gbgk/60933.htm,/gbjg/gbgk/10074.htm,/gbjg/gbgk/10062.htm,/gbjg/gbgk/10063.htm,/gbjg/gbgk/10064.htm,/gbjg/gbgk/10058.htm,/gbjg/gbgk/10059.htm,/gbjg/gbgk/10045.htm,/gbjg/gbgk/10047.htm,/gbjg/gbgk/10048.htm,/gbjg/gbgk/10049.htm,/gbjg/gbgk/11084.htm,/gbjg/gbgk/10050.htm,/gbjg/gbgk/10051.htm,/gbjg/gbgk/10025.htm,/gbjg/gbgk/10027.htm,/gbjg/gbgk/10036.htm,/gbjg/gbgk/10037.htm,/gbjg/gbgk/10038.htm,/gbjg/gbgk/10040.htm,/gbjg/gbgk/10044.htm,/gbjg/gbgk/10004.htm,/gbjg/gbgk/10008.htm,/gbjg/gbgk/10010.htm,/gbjg/gbgk/10011.htm,/gbjg/gbgk/10014.htm,/gbjg/gbgk/10018.htm,/gbjg/gbgk/10020.htm,/gbjg/gbgk/10006.htm,/gbjg/gbgk/10007.htm,/gbjg/gbgk/10005.htm,/gbjg/gbgk/9975.htm,/gbjg/gbgk/874.htm,/gbjg/gbgk/901.htm,/gbjg/gbgk/852.htm,/gbjg/gbgk/1845.htm,/gbjg/gbgk/902.htm,/gbjg/gbgk/1841.htm,/gbjg/gbgk/904.htm,/gbjg/gbgk/867.htm,/gbjg/gbgk/853.htm,/gbjg/gbgk/864.htm,/gbjg/gbgk/899.htm,/gbjg/gbgk/866.htm,/gbjg/gbgk/880.htm,/gbjg/gbgk/885.htm,/gbjg/gbgk/884.htm,/gbjg/gbgk/896.htm,/gbjg/gbgk/894.htm,/gbjg/gbgk/892.htm,/gbjg/gbgk/897.htm,/gbjg/gbgk/811.htm,/gbjg/gbgk/900.htm,/gbjg/gbgk/841.htm,/gbjg/gbgk/868.htm,/gbjg/gbgk/903.htm,/gbjg/gbgk/847.htm,/gbjg/gbgk/854.htm,/gbjg/gbgk/870.htm,/gbjg/gbgk/825.htm,/gbjg/gbgk/807.htm,/gbjg/gbgk/872.htm,/gbjg/gbgk/895.htm,/gbjg/gbgk/891.htm,/gbjg/gbgk/836.htm,/gbjg/gbgk/905.htm,/gbjg/gbgk/898.htm".split(",")
    .map(it=> `https://www.yidaiyilu.gov.cn${it}`)

const {By, until} = webdriver;

const delay = (interval) => {
    return new Promise((resolve) => {
        setTimeout(resolve, interval);
    });
};


// driver.get("https://www.doc88.com/tag/1208-2002/") //打开https://autowebtest.github.io/

// driver.wait(()=>{
//     driver.findElement(By.css('.sd-title')).click();
//
// },16000)
// setTimeout(() => {
//     driver.findElement({css: '#result_content > div > div:nth-child(2) > h3 > a'}).click()
//         .then(() => {
//             return new Promise((resolve) => {
//                 setTimeout(resolve, 6000)
//             })
//         })
//         .then(() => {
//             // return driver.switchTo().window(driver.getAllWindowHandles()[0]);
//             return driver.getAllWindowHandles();
//         })
//         .then((strins) => {
//             // return driver.switchTo().window(driver.getAllWindowHandles()[0]);
//             return driver.switchTo().window(strins[1])
//         })
//         .then(() => {
//             driver.findElement({css: '#readshop > div > ul.shop3 > li.text'}).getText().then(text => {
//                 let split = text.split(" ");
//                 console.log(split)
//             })
//             // driver.findElement({css: '#result_content > div > div:nth-child(2) > h3 > a'}).click()
//
//         })
//     ;
//     // driver.findElement({css:'#keyword'}).click();
// }, 7000)
let result = [];

(async function example() {
    var driver = await new webdriver.Builder().forBrowser('chrome')
        .setChromeOptions(ChromeOptions)
        .build(); //创建一个chrome 浏览器实例

    try {
        for (const page of pages) {

            // await driver.get(pages[0]);
            await driver.get(page);

            // driver.wait(function () {
            //     console.log("try..")
            //     return driver.findElement({css: '#zoom > h1'}).then(it => true).catch(it => false);
            // }, 1000);
            // driver.wait(until.elementLocated(By.id('zoom')),60000)
            let title = await driver.wait(until.elementLocated(By.css('#zoom > h1')), 60000).getText();

            await delay(200)
            // for (let i = 1; i < 20; i++) {
            var doc = await driver.wait(until.elementLocated(By.css(`#zoom > div.content_left.left`)), 60000).getText();
                // if (simple.startsWith("【简 况】")) {
                //     break;
                // }
            var {number, cut} = tryCut(doc, ["【简况】", "【简 况】", "【地理位置】", "【自然地理】", {word: "位于", cut: 0}])
            // var number = doc.indexOf("【简况】");
            // var cut = 4;
            // if (number === -1) {
            //     number = doc.indexOf("【简 况】");
            //     cut = 5;
            // }
            //
            // if (number === -1) {
            //     number = doc.indexOf("【地理位置】");
            //     cut = 6;
            // }
            //
            // if (number === -1) {
            //     number = doc.indexOf("【自然地理】");
            //     cut = 6;
            // }
            //
            // if (number === -1) {
            //     number = doc.indexOf("位于");
            //     cut = 0;
            // }
            var simple = ""
            if (number === -1) {

            } else {
                let number1 = doc.indexOf("。", number);
                simple = doc.substring(number + cut, number1).trim();
            }


            // }
            // await driver.wait(until.elementLocated(By.css('#zoom > h1')), 60000)

            // driver.wait(function() {
            //     return driver.getTitle().then(function(title) {
            //         return title && title.includes("一带一路");
            //     });
            // }, 1000);
            console.log("process in")
            if(simple === ""){
                console.log(doc)
            }
            // delay(1000)
            //
            // let title = await driver.findElement({css: '#zoom > h1'}).getText();
            // let simple = await driver.findElement({css: '#zoom > div.content_left.left > div.info_content > p:nth-child(10)'}).getText();
            console.log({title, simple, page})
            result.push({title, simple, page})
        }

        let a = {
            name: "excel",
            data: [["国家", "位置", "网站"]].concat(
                result.map(({title, simple, page}) => [title, simple, page])
            )
        }

        var buffer = xlsx.build([a]);
        fs.writeFileSync(`sss.xlsx`, buffer, {'flag': 'w'});

        // 没找到 开始下拉

    } finally {
        // await driver.quit();
    }
})();

function tryCut(doc, words){
    for (let wordsKey of words) {
        var word,cut
        if(typeof wordsKey === "string"){
            word = wordsKey;
            cut = wordsKey.length
        }else{
            word = wordsKey.word
            cut = wordsKey.cut
        }
        var number = doc.indexOf(word);
        if(number !== -1){
            return {
                number,
                cut
            }
        }
    }

    return {
        number: -1,
        cut: 0
    }
}

// 封装思路
/// 输入 - 标准编号
/// 输出 - 起草单位

//// 过程
///// 输入搜索
///// 如果有结果，打开新tab
///// 寻找前几页，如果查询到就返回
///// 没有查询到，点击查看更多，继续查询
///// 没有查询到，返回空
///// 关闭tab

async function searchWord(baseUrl) {
    let result = await client.generalBasic(baseUrl.substring(baseUrl.indexOf(",") + 1));
    let filter = result.words_result.filter(it => it.words.includes("起草单位"));
    if (filter.length === 0) {
        return null;
    } else {
        let words = filter[0].words;
        return words.substring(words.indexOf(":") + 1);
    }

}


// driver.sleep(20 * 1000).then(function () { //等待20秒
//     driver.quit(); //关闭浏览器
// })
