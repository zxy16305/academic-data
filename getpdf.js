const superagent = require('superagent');
const cheerio = require('cheerio');


let root = 'https://www.springernature.com/gp/researchers/campaigns/belt-road-initiative?utm_source=hybris-campaign&utm_medium=email&utm_content=internal&utm_campaign=SRCN_1_LL_bri19en&sap-outbound-id=F97BFBC45E76867213FBA85BDFA85632E1D25D94&mkt-key=005056B0331B1ED8BFEC2E459CB58A47\n'

superagent.get(root).end((err, res) => {
    if (err) {
        // 如果访问失败或者出错，会这行这里
        console.log(`热点新闻抓取失败 - ${err}`)
    } else {
        // 访问成功，请求http://news.baidu.com/页面所返回的数据会包含在res
        // 抓取热点新闻数据
        let pdfUrls = getPdfUrl(res)
    }
});

function getPdfUrl(res) {
    let $ = cheerio.load(res.text);

    return $('.tabs-body td p:first-child a').map((idx, ele) => {
        let url = $(ele).attr('href');
        console.log(url)
        return url
    })
}


// superagent.get('http://www.baidu.com').end((err, res) => {
//    console.log(res.text)
// });
