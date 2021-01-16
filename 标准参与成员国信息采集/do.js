/**
 * 标准参与的成员国信息采集，包含 TC 和 SC
 */
require('../util/logWithTimestamp');
const SuperagentPipe = require("../poolList").SuperagentPipe;
let superagentPipe = new SuperagentPipe(2, true);
const cheerio = require('cheerio');
const fs = require('fs');


function test() {
    superagentPipe.get("https://www.iso.org/standards-catalogue/browse-by-tc.html")
        .then(({err, res}) => {
            let $ = cheerio.load(res.text);
            let tcArray = $("#datatable-committees td[data-title=Committee] a");
            tcArray.forEach()
            $(tcArray[0]).attr("href")
            $(tcArray[0]).text()
        })
}

(async function () {
// {name: string, url: string, participating: [string], observing: [string], sc: [{name, url, participating, observing}]}
    const answer = [

    ]

    let {_, res} = await superagentPipe.get("https://www.iso.org/standards-catalogue/browse-by-tc.html");
    let $ = cheerio.load(res.text);
    let tcArray = $("#datatable-committees td[data-title=Committee] a");
    // let tc = tcArray[0]
    for (const tc of tcArray.toArray()) {
        let href = $(tc).attr("href");
        let name = $(tc).text();
        // /contents/data/committee/04/54/45446/x/catalogue/
        let result = /\/contents\/data\/committee\/\S*\/\S*\/(\S*)\/x\/catalogue\//.exec(href);
        if (result == null) {
            console.log(`${href}不合正则表达式`)
            // continue;
        }
        let tcNumber = result[1];
        let participation = await loadParticipation(tcNumber);
        let sc = await loadSc(tcNumber);
        answer.push({
            name,
            url: href,
            participation,
            sc
        })
    }

    // 保存
    fs.writeFile('temp.json', JSON.stringify(answer), (err) => {
        if (err) throw err;
        console.log('文件已被保存');
    })

})();

const loadSc = async (tcNumber)=>{
    let {_, res} = await superagentPipe.get(`https://www.iso.org/committee/${tcNumber}/x/catalogue/`);
    let $ = cheerio.load(res.text);
    let trs = $("#datatable-committee-children tbody tr");
    let scAnswer = []
    // let tr = trs[0]
    for (const tr of trs.toArray()) {
        let find = $(tr).find("td[data-title=Subcommittee] a");
        let scName = find.text();
        let href = find.attr("href");
        let result = /\/contents\/data\/committee\/\S*\/\S*\/(\S*)\/x\/catalogue\//.exec(href);
        if (result == null) {
            console.log(`${href}不合正则表达式`)
            // continue;
        }
        let scNumber = result[1];
        let participation = await loadParticipation(scNumber);
        scAnswer.push({name: scName, url: href, participation})
    }

    return scAnswer;
}


const loadParticipation = async (number) => {
    // return new Promise(async (resolve) => {
    let {err, res} = await superagentPipe.get(`https://www.iso.org/committee/${number}.html?view=participation`);
    let $ = cheerio.load(res.text);
    let trArray = $("#datatable-PART_P_OC tbody tr");
    let participation = []
    for (const tr of trArray.toArray()) {
        let countryName = $(tr).find("td[data-title=Country\\/Territory]").text();
        let acronym = $(tr).find("td[data-title=Acronym] a").text();
        let url = $(tr).find("td[data-title=Acronym] a").attr("href");
        participation.push({
            countryName, acronym, url
        })
    }
    // resolve(participation)
    return participation
    // })
}