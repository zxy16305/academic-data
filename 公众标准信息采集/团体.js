require('chromedriver'); //导入chrome浏览器 driver
var chrome = require('selenium-webdriver/chrome');

var webdriver = require('selenium-webdriver');
// const client = require("./baidu-ocr").client; //导入selenium 库
let ChromeOptions = new chrome.Options()
// ChromeOptions.addArguments("--headless", "window-size=1024,768", "--no-sandbox");
var xlsx = require('node-xlsx');
var fs = require('fs');

const {By, until} = webdriver;

const delay = (interval) => {
    return new Promise((resolve) => {
        setTimeout(resolve, interval);
    });
};

/**
 * 切换tab
 * @param driver
 * @param index
 * @returns {Promise<void>}
 */
async function switchTab(driver, index = 1) {
    let windowHandles = await driver.getAllWindowHandles();
    await driver.switchTo().window(windowHandles[index]);
}

/**
 * 切换iframe
 * @param driver
 * @param iframeMyiframe
 * @returns {Promise<void>}
 */
async function switchChildIframe(driver, iframeMyiframe) {
    await driver.switchTo().frame(await driver.wait(until.elementLocated(By.css(
        iframeMyiframe
    )), 6000));
}

/**
 * 把表格信息解析成键值对
 * @param tableElement
 * @returns {Promise<void>}
 */
async function analyzeTableInfo(tableElement) {
    let tableObject = {};

    let trElements = await tableElement.findElements(By.css("tr"));
    for (trElement of trElements){
        let tdElements = await trElement.findElements(By.css("td"));
        if (tdElements.length % 2 === 0) {
            for (let i = 0; i < tdElements.length / 2; i++) {
                let key = (await tdElements[2*i].getText()).trim();
                let value = (await tdElements[2*i + 1].getText()).trim();
                tableObject[key] = value
            }
        }
    }

    // console.log(tableObject)

    return tableObject
}

async function getInnerInfo(driver) {
    let tableElements = await driver.findElements(By.css(
        "#main_content > table"
    ))

    let infoObject = {};
    for (let tableElementsKey in tableElements) {
        let tempTable = await analyzeTableInfo(tableElements[tableElementsKey])
        infoObject = {
            ...infoObject,
            ...tempTable
        }
    }

    return {
        InternetCateCode: infoObject["国际标准分类号"],
        chinaCateCode: infoObject["中国标准分类号"],
        publishDate: infoObject["发布日期"],
        executeDate: infoObject["实施日期"],
        qicaoUnit: infoObject["起草单位"]
    };
}

/**
 * 获取某一项的标准
 * @param driver
 * @param i
 * @returns {Promise<{standardStage: *, standardName: *, standardType: (string|*), standardProperty: (string)}>}
 */
async function getInfoObject(driver, i) {
    let item = driver.wait(until.elementLocated(By.css(
        `#main_content > div.standard_mainbox.bigboxborder > table > tbody > tr:nth-child(${i + 1})`
    )), 6000);

    let info = {
        groupName: (await item.findElement(By.css("td:nth-child(2)")).getText()).trim(),
        standardNumber: (await item.findElement(By.css("td:nth-child(3)")).getText()).trim(),
        standardName: (await item.findElement(By.css("td:nth-child(4)")).getText()).trim(),
        putUpDate: (await item.findElement(By.css("td:nth-child(5)")).getText()).trim(),
        status: (await item.findElement(By.css("td:nth-child(6)")).getText()).trim(),
        buyInfo: (await item.findElement(By.css("td:nth-child(8)")).getText()).trim()
    }

    await item.findElement(By.css("td:nth-child(7)")).click();
    await delay(200)
    await switchTab(driver, 1);

    const __ret = await getInnerInfo(driver);

    await driver.close();
    await switchTab(driver, 0);

    return {
        ...info,
        ...__ret
    }
}

(async function example() {
    var driver = await new webdriver.Builder().forBrowser('chrome')
        .setChromeOptions(ChromeOptions)
        .build(); //创建一个chrome 浏览器实例

    // driver.manage().window().maximize();

    try {
        // for (const page of pages) {
        //
        // await driver.get(pages[0]);
        await driver.get(`http://www.ttbz.org.cn/Home/Standard?stNo=&stName=${"电子商务"}&orgCode=&orgName=&enTitle=&stStatus=&stSale=&stOpen=&page=1`);
        let answer = [];

        while (true) {
            // await delay(400)

            // 等待加载完成
            await driver.wait(until.elementLocated(By.css(
                ".standard_list_table"
            )), 6000);

            // await driver.wait(until.elementLocated(By.css(
            //     `#pagebar > li > a[title=跳转到最后一页]`
            // )), 6000).click();

            let itemSize = (await driver.findElements(By.css("#main_content > div.standard_mainbox.bigboxborder > table > tbody > tr"))).length - 2;
            // 当页面数量不为20，且不是最后一页时，刷新内部
            console.log(itemSize)
            // if (itemSize !== 20 && (await driver.findElements(By.css(".pgNext.pgEmpty"))).length === 0) {
            //     console.log("刷新")
            //     // 数据出了问题
            //     await driver.findElement(By.css("#pagebar > li.active > a")).click();
            //     // 重置
            //     await driver.switchTo().parentFrame();
            //     continue;
            // }

            console.log(answer.length)
            // 切出来，确保循环
            // await driver.switchTo().defaultContent();

            for (let i = 1; i <= itemSize; i++) {
                // await delay(400)

                // await driver.switchTo().frame(await driver.wait(until.elementLocated(By.css(
                //     "iframe#myiframe"
                // )), 6000));

                let infoObject = await getInfoObject(driver, i);
                console.log(infoObject)
                answer.push(infoObject)

                // 切出来，确保循环
                // await driver.switchTo().defaultContent();
            }

            // await driver.switchTo().parentFrame();
            // await switchChildIframe(driver, "iframe#myiframe");
            // 下一页为空，就跳转
            if ((await driver.findElements(By.css("#pager ul li.pgNext.pgEmpty:nth-last-child(2)"))).length > 0) {
                break;
            }

            // await delay(400)

            await driver.findElement(By.css("#pager ul li.pgNext:nth-last-child(2)")).click();

            // 重置
            // await driver.switchTo().parentFrame();

            // await driver.wait(until.elementLocated(By.css("#pagebar > li:nth-child(11) > a")), 6000).click()
        }


        let a = {
            name: "excel",
            data: [["团体名称", "标准编号", "标准名称", "公布日期", "状态", "购买信息", "国际标准分类号", "中国标准分类号", "发布日期", "实施日期", "起草单位"]].concat(
                answer.map((it) =>
                    [it.groupName, it.standardNumber, it.standardName,
                        it.putUpDate, it.status, it.buyInfo,
                        it.InternetCateCode, it.chinaCateCode, it.publishDate,
                        it.executeDate, it.qicaoUnit])
            )
        }

        var buffer = xlsx.build([a]);
        fs.writeFileSync(`电子商务-团体.xlsx`, buffer, {'flag': 'w'});
    } finally {
        // await driver.quit();
    }



})();


(async function example() {
    var driver = await new webdriver.Builder().forBrowser('chrome')
        .setChromeOptions(ChromeOptions)
        .build(); //创建一个chrome 浏览器实例

    try {
        // for (const page of pages) {
        //
        // await driver.get(pages[0]);
        await driver.get(`http://www.ttbz.org.cn/Home/Standard?stNo=&stName=${"电子商务"}&orgCode=&orgName=&enTitle=&stStatus=&stSale=&stOpen=&page=1`);

        await driver.wait(until.elementLocated(By.css(
            ".standard_list_table"
        )), 6000);
        // for (let i = 6; i < 15; i++) {
        //     let infoObject = await getInfoObject(driver, 15);
        //     console.log(infoObject)
        // }

        console.log((await driver.findElements(By.css("#pager ul li.pgNext.pgEmpty:nth-last-child(2)"))).length)
    } finally {
        // await driver.quit();
    }
});

