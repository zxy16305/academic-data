require('chromedriver'); //导入chrome浏览器 driver
var chrome = require('selenium-webdriver/chrome');

var webdriver = require('selenium-webdriver');
// const client = require("./baidu-ocr").client; //导入selenium 库
let ChromeOptions = new chrome.Options()
// ChromeOptions.addArguments("--headless", "window-size=1024,768", "--no-sandbox");
var xlsx = require('node-xlsx');
var fs = require('fs');

let pages = "/gbjg/gbgk/115887.htm,/gbjg/gbgk/108634.htm,/gbjg/gbgk/106293.htm,/gbjg/gbgk/106292.htm,/gbjg/gbgk/106291.htm,/gbjg/gbgk/105565.htm,/gbjg/gbgk/98230.htm,/gbjg/gbgk/88392.htm,/gbjg/gbgk/88394.htm,/gbjg/gbgk/88395.htm,/gbjg/gbgk/88398.htm,/gbjg/gbgk/85625.htm,/gbjg/gbgk/84262.htm,/gbjg/gbgk/83735.htm,/gbjg/gbgk/83432.htm,/gbjg/gbgk/80306.htm,/gbjg/gbgk/77104.htm,/gbjg/gbgk/77103.htm,/gbjg/gbgk/77099.htm,/gbjg/gbgk/74581.htm,/gbjg/gbgk/73849.htm,/gbjg/gbgk/72062.htm,/gbjg/gbgk/77096.htm,/gbjg/gbgk/70991.htm,/gbjg/gbgk/70549.htm,/gbjg/gbgk/70551.htm,/gbjg/gbgk/70553.htm,/gbjg/gbgk/68871.htm,/gbjg/gbgk/67145.htm,/gbjg/gbgk/66884.htm,/gbjg/gbgk/66328.htm,/gbjg/gbgk/66293.htm,/gbjg/gbgk/66292.htm,/gbjg/gbgk/66291.htm,/gbjg/gbgk/66290.htm,/gbjg/gbgk/66289.htm,/gbjg/gbgk/66288.htm,/gbjg/gbgk/66284.htm,/gbjg/gbgk/66283.htm,/gbjg/gbgk/66282.htm,/gbjg/gbgk/66281.htm,/gbjg/gbgk/66280.htm,/gbjg/gbgk/66279.htm,/gbjg/gbgk/66275.htm,/gbjg/gbgk/66271.htm,/gbjg/gbgk/66270.htm,/gbjg/gbgk/66266.htm,/gbjg/gbgk/66265.htm,/gbjg/gbgk/66264.htm,/gbjg/gbgk/66263.htm,/gbjg/gbgk/66262.htm,/gbjg/gbgk/66261.htm,/gbjg/gbgk/66260.htm,/gbjg/gbgk/65323.htm,/gbjg/gbgk/64980.htm,/gbjg/gbgk/64948.htm,/gbjg/gbgk/64950.htm,/gbjg/gbgk/64952.htm,/gbjg/gbgk/64505.htm,/gbjg/gbgk/64049.htm,/gbjg/gbgk/63302.htm,/gbjg/gbgk/62688.htm,/gbjg/gbgk/62686.htm,/gbjg/gbgk/62666.htm,/gbjg/gbgk/60932.htm,/gbjg/gbgk/60706.htm,/gbjg/gbgk/59959.htm,/gbjg/gbgk/59958.htm,/gbjg/gbgk/58491.htm,/gbjg/gbgk/58326.htm,/gbjg/gbgk/57155.htm,/gbjg/gbgk/55399.htm,/gbjg/gbgk/52311.htm,/gbjg/gbgk/44548.htm,/gbjg/gbgk/35789.htm,/gbjg/gbgk/35388.htm,/gbjg/gbgk/10220.htm,/gbjg/gbgk/60933.htm,/gbjg/gbgk/10074.htm,/gbjg/gbgk/10062.htm,/gbjg/gbgk/10063.htm,/gbjg/gbgk/10064.htm,/gbjg/gbgk/10058.htm,/gbjg/gbgk/10059.htm,/gbjg/gbgk/10045.htm,/gbjg/gbgk/10047.htm,/gbjg/gbgk/10048.htm,/gbjg/gbgk/10049.htm,/gbjg/gbgk/11084.htm,/gbjg/gbgk/10050.htm,/gbjg/gbgk/10051.htm,/gbjg/gbgk/10025.htm,/gbjg/gbgk/10027.htm,/gbjg/gbgk/10036.htm,/gbjg/gbgk/10037.htm,/gbjg/gbgk/10038.htm,/gbjg/gbgk/10040.htm,/gbjg/gbgk/10044.htm,/gbjg/gbgk/10004.htm,/gbjg/gbgk/10008.htm,/gbjg/gbgk/10010.htm,/gbjg/gbgk/10011.htm,/gbjg/gbgk/10014.htm,/gbjg/gbgk/10018.htm,/gbjg/gbgk/10020.htm,/gbjg/gbgk/10006.htm,/gbjg/gbgk/10007.htm,/gbjg/gbgk/10005.htm,/gbjg/gbgk/9975.htm,/gbjg/gbgk/874.htm,/gbjg/gbgk/901.htm,/gbjg/gbgk/852.htm,/gbjg/gbgk/1845.htm,/gbjg/gbgk/902.htm,/gbjg/gbgk/1841.htm,/gbjg/gbgk/904.htm,/gbjg/gbgk/867.htm,/gbjg/gbgk/853.htm,/gbjg/gbgk/864.htm,/gbjg/gbgk/899.htm,/gbjg/gbgk/866.htm,/gbjg/gbgk/880.htm,/gbjg/gbgk/885.htm,/gbjg/gbgk/884.htm,/gbjg/gbgk/896.htm,/gbjg/gbgk/894.htm,/gbjg/gbgk/892.htm,/gbjg/gbgk/897.htm,/gbjg/gbgk/811.htm,/gbjg/gbgk/900.htm,/gbjg/gbgk/841.htm,/gbjg/gbgk/868.htm,/gbjg/gbgk/903.htm,/gbjg/gbgk/847.htm,/gbjg/gbgk/854.htm,/gbjg/gbgk/870.htm,/gbjg/gbgk/825.htm,/gbjg/gbgk/807.htm,/gbjg/gbgk/872.htm,/gbjg/gbgk/895.htm,/gbjg/gbgk/891.htm,/gbjg/gbgk/836.htm,/gbjg/gbgk/905.htm,/gbjg/gbgk/898.htm".split(",")
    .map(it => `https://www.yidaiyilu.gov.cn${it}`)

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
 * 从tag转换标准类型
 * @param tags
 * @returns {string|*}
 */
function getStandardType(tags) {
    if (tags.includes("国家标准计划")) {
        return "国家标准计划";
    }

    if (tags.includes("国家标准")) {
        return "国家标准";
    }

    let hangye = tags.filter(it => it.startsWith("行业标准"));
    if (hangye.length > 0) {
        return hangye[0];
    }

    let difang = tags.filter(it => it.startsWith("地方标准"));
    if (difang.length > 0) {
        return difang[0];
    }
}

async function getInnerInfo(driver) {
    let tags = await Promise.all((await driver.findElements(By.css(
        'body > div.container.main-body > div > div > div > div.page-header > div > span.s-status.label'
    ))).map(async it => await it.getText()))
    // 标准性质
    let standardProperty = tags.includes("推荐性") ? "推荐性" :
        (tags.includes("强制性") ? "强制性" : "")
    // 标准类型
    let standardType = getStandardType(tags)

    // 内容索引
    let caibiao = [];
    var qicao = [];
    let baseInfo = {};
    let divArrays = await driver.findElements(By.css("body > div.container.main-body > div > div > div > *"));
    for (let j = 0; j < divArrays.length; j++) {
        // console.log((await divArrays[j].getAttribute("class")));
        if ((await divArrays[j].getAttribute("class")).includes("para-title")) {
            let title = await divArrays[j].findElement(By.css("h2")).getText();
            // console.log(title);
            if (title === "基础信息") {
                let baseInfoItem = await divArrays[j + 1].findElements(By.css(".basicInfo-item"));
                for (let k = 0; k < baseInfoItem.length; k++) {
                    if ((await baseInfoItem[k].getAttribute("class")).includes("name")) {
                        baseInfo[await baseInfoItem[k].getText()] = await baseInfoItem[k + 1].getText();
                    }
                }

            } else if (title === "起草单位") {
                qicao = await Promise.all((await divArrays[j + 1].findElements(By.css('a'))).map(async it => await it.getText()))
            } else if (title === "采标情况") {
                let k = j + 1;
                while (k < divArrays.length && (await divArrays[k].getTagName()) === "p") {
                    caibiao.push(await divArrays[k].getText())
                    k++;
                }
            }

        }
    }
    return {standardProperty, standardType, caibiao, qicao, baseInfo};
}

/**
 * 获取某一项的标准
 * @param driver
 * @param i
 * @returns {Promise<{standardStage: *, standardName: *, standardType: (string|*), standardProperty: (string)}>}
 */
async function getInfoObject(driver, i) {
    let item = driver.wait(until.elementLocated(By.css(
        `body > div > div.row > div:nth-child(${i}) > div.panel-body > div > div.media-body > div.page-header > div.post-head > table > tbody > tr > td:nth-child(1) > a`
    )), 6000);
    let standardName = await item.getText();

    let standardStage = await driver.wait(until.elementLocated(By.css(
        `body > div > div.row > div:nth-child(${i}) > div.panel-body > div > div.media-body > div.page-header > div.post-head > table > tbody > tr > td:nth-child(2) > span`
    )), 6000).getText();

    // 时间信息
    let timeTags = await Promise.all((await driver.findElements(By.css(
        `body > div > div.row > div:nth-child(${i}) > div.panel-footer span:nth-child(3n+2)`
    ))).map(async it => await it.getText()))
    let times = await Promise.all((await driver.findElements(By.css(
        `body > div > div.row > div:nth-child(${i}) > div.panel-footer time`
    ))).map(async it => await it.getText()))
    let time = [];
    for (let j = 0; j < timeTags.length; j++) {
        if (["发布于", "实施于"].includes(timeTags[j])) {
            time.push(timeTags[j] + times[j])
        }
    }

    await item.click();
    await switchTab(driver, 1);

    const __ret = await getInnerInfo(driver);
    let standardProperty = __ret.standardProperty;
    let standardType = __ret.standardType;
    let caibiao = __ret.caibiao;
    var qicao = __ret.qicao;
    let baseInfo = __ret.baseInfo;

    return {
        standardName, standardStage, standardType, standardProperty, time: time.join(",",),
        caibiao: caibiao.join("\n"),
        qicao: qicao.join("\n"),
        guikou: baseInfo['归口单位'],
        zhixing: baseInfo['执行单位'],
        zhuguan: baseInfo['主管部门'],
        chinaCateCode: baseInfo['中国标准分类号'],
        intCateCoe: baseInfo['国际标准分类号'],
        standardCate: baseInfo['标准类别'],
        replaceStandard: baseInfo['全部代替标准']
    }
}

(async function example() {
    var driver = await new webdriver.Builder().forBrowser('chrome')
        .setChromeOptions(ChromeOptions)
        .build(); //创建一个chrome 浏览器实例

    driver.manage().window().maximize();

    try {
        // for (const page of pages) {
        //
        // await driver.get(pages[0]);
        await driver.get("http://std.samr.gov.cn/search/std?q=%E7%94%B5%E5%AD%90%E5%95%86%E5%8A%A1");
        let answer = [];

        while (true) {
            // await delay(400)

            // 切到里面拿个条数
            await driver.switchTo().frame(await driver.wait(until.elementLocated(By.css(
                "iframe#myiframe"
            )), 6000));

            // await driver.wait(until.elementLocated(By.css(
            //     `#pagebar > li > a[title=跳转到最后一页]`
            // )), 6000).click();

            let itemSize = (await driver.findElements(By.css("body > div > div.row > div"))).length;
            // 当页面数量不为10，且不是最后一页时，刷新内部
            console.log(itemSize)
            if (itemSize !== 10 && (await driver.findElements(By.css("#pagebar > li > a[title=跳转到下一页]"))).length > 0) {
                console.log("刷洗")
                // 数据出了问题
                await driver.findElement(By.css("#pagebar > li.active > a")).click();
                // 重置
                await driver.switchTo().parentFrame();
                continue;
            }

            console.log(answer.length)
            // 切出来，确保循环
            await driver.switchTo().defaultContent();

            for (let i = 1; i <= itemSize; i++) {
                // await delay(400)

                await driver.switchTo().frame(await driver.wait(until.elementLocated(By.css(
                    "iframe#myiframe"
                )), 6000));

                let infoObject = await getInfoObject(driver, i);
                // console.log(infoObject)
                answer.push(infoObject)

                await driver.close();

                await switchTab(driver, 0);

                // 切出来，确保循环
                // await driver.switchTo().defaultContent();
            }

            // await driver.switchTo().parentFrame();
            await switchChildIframe(driver, "iframe#myiframe");
            if ((await driver.findElements(By.css("#pagebar > li > a[title=跳转到下一页]"))).length === 0) {
                break;
            }

            // await delay(400)

            await driver.findElement(By.css("#pagebar > li > a[title=跳转到下一页]")).click();

            // 重置
            await driver.switchTo().parentFrame();

            // await driver.wait(until.elementLocated(By.css("#pagebar > li:nth-child(11) > a")), 6000).click()
        }

        /**
         * 转换国际标准分类号
         * @param chinaCateCode
         * @param intCateCoe
         * @returns {*}
         */
        function parseIntCateCode(chinaCateCode, intCateCoe) {
            if(chinaCateCode || intCateCoe){
                return intCateCoe + (chinaCateCode ? `（中国：${chinaCateCode}）` : "")
            }else{
                return ""
            }
        }

        /**
         * 转换归口执行
         * @param guikou
         * @param zhixing
         * @returns {*}
         */
        function parseGuikouZhiXing(guikou, zhixing) {
            if (guikou === zhixing) {
                return guikou;
            } else {
                return guikou + (zhixing ? "/" + zhixing : "");
            }
        }

        let a = {
            name: "excel",
            data: [["标准名称", "强制性/推荐性", "标准类型", "标准类别", "国际标准分类号", "处于什么阶段", "年份", "归口/执行单位", "主管部门", "起草单位", "采标情况", "替代情况"]].concat(
                answer.map(({standardName, standardProperty, standardType, standardCate, standardStage, chinaCateCode, intCateCoe, time, guikou, zhixing, zhuguan, qicao, caibiao, replaceStandard}) =>
                    [standardName, standardProperty, standardType, standardCate, parseIntCateCode(chinaCateCode, intCateCoe), standardStage, time, parseGuikouZhiXing(guikou, zhixing), zhuguan, qicao, caibiao, replaceStandard])
            )
        }

        var buffer = xlsx.build([a]);
        fs.writeFileSync(`sss.xlsx`, buffer, {'flag': 'w'});
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
        await driver.get("http://std.samr.gov.cn/gb/search/gbDetailed?id=5DDA8BA1E73318DEE05397BE0A0A95A7");

        let infoObject = await getInnerInfo(driver);
        console.log(infoObject)

    } finally {
        // await driver.quit();
    }
});

