require('chromedriver'); //导入chrome浏览器 driver
var chrome = require('selenium-webdriver/chrome');

var webdriver = require('selenium-webdriver');
const client = require("./baidu-ocr").client; //导入selenium 库
let ChromeOptions = new chrome.Options()
// ChromeOptions.addArguments("--headless", "window-size=1024,768", "--no-sandbox");


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

(async function example() {
    var driver = await new webdriver.Builder().forBrowser('chrome')
        .setChromeOptions(ChromeOptions)
        .build(); //创建一个chrome 浏览器实例

    try {
        await driver.get("https://www.doc88.com/tag/1208-2002/");
        await delay(5000)
        await driver.findElement({css: '#result_content > div > div:nth-child(2) > h3 > a'}).click()

        let strings = await driver.getAllWindowHandles();
        await delay(7000)
        await driver.switchTo().window(strings[1])
        let newVar = await driver.findElement({css: '#readshop > div > ul.shop3 > li.text'}).getText();
        let split = newVar.split(" ");
        console.log(split)
        // 扫描现有的前几页 找起草单位
        //
        // let zoomInBtn = await driver.findElement({css: '#zoomInButton'});
        // for (let i = 0; i < 3; i++) {
        //     await zoomInBtn.click();
        // }

        let elements = await driver.findElements({css: '.outer_page'});
        let length = elements.length;

        for (let i = 0; i < length; i++) {
            let canvas = await driver.findElement({css: `#page_${i + 1}`});
            await driver.executeScript("arguments[0].scrollIntoView(true);", canvas)

            await delay(1000)
        }

        // await delay(4000)

        for (let i = 0; i < length; i++) {

            while (await driver.findElement({css: `#pagepb_${i + 1 }`}).getAttribute("innerHTML").length > 0) {
                await delay(300)
            }

            let canvas = await driver.findElement({css: `#page_${i + 1}`});

            await driver.executeScript("arguments[0].scrollIntoView(true);", canvas)

            // await delay(1000)
            // console.log("canvas", canvas)
            let baseUrl = await driver.executeScript("return arguments[0].toDataURL('image/png')", canvas);
            // console.log("base64", baseUrl.substring(baseUrl.indexOf(",") + 1))
            let result = await client.generalBasic(baseUrl.substring(baseUrl.indexOf(",") + 1));
            console.log(result);
            // let depts = await searchWord(baseUrl);
            // if(depts){
            //     console.log(depts);
            //     break;
            // }

        }

        // 没找到 开始下拉

    } finally {
        // await driver.quit();
    }
})();

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
