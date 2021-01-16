/**
 * 修补，数据要的是标准数量，而不是国家
 */
require('../util/logWithTimestamp');
const SuperagentPipe = require("../poolList").SuperagentPipe;
let superagentPipe = new SuperagentPipe(2, true);
const cheerio = require('cheerio');
const fs = require('fs');
let all = require("./temp.json");

(async function f() {
    async function getInfo(tcNumber) {
        let {_, res} = await superagentPipe.get(`https://www.iso.org/committee/${tcNumber}.html`);
        let $ = cheerio.load(res.text);
        let psNumber = $("#section-activity a[aria-labelledby=published-standards]").text();
        let sudNumber = $("#section-activity a[aria-labelledby=standards-under-development]").text();
        return {psNumber, sudNumber}
    }

    async function getScInfo(tcNumber) {
        let {_, res} = await superagentPipe.get(`https://www.iso.org/committee/${tcNumber}/x/catalogue/`);
        let $ = cheerio.load(res.text);
        let lines = $("#datatable-committee-children tbody tr");

        return lines.toArray().map(line => {
            let scName =$(line).find("td[data-title=Subcommittee] a").text();
            let psNumber = $(line).find("td[data-title=Published\\ standards] a").text();
            let sudNumber = $(line).find("td[data-title=Standards\\ under\\ development] a").text();
            return {
                scName, psNumber, sudNumber
            }
        });

    }

    for (let tc of all) {
        let result = /\/contents\/data\/committee\/\S*\/\S*\/(\S*)\/x\/catalogue\//.exec(tc.url);
        if (result == null) {
            console.log(`${tc.name}不匹配正则`)
            continue;
        }
        let tcNumber = result[1];
        let {psNumber, sudNumber} = await getInfo(tcNumber);
        tc.psNumber = psNumber;
        tc.sudNumber = sudNumber;

        let scInfo = await getScInfo(tcNumber);

        function findScInfo(sc) {
            for(let scInfoItem of scInfo){
                if(scInfoItem.scName.trim() === sc.name.trim()){
                    return scInfoItem;
                }
            }
            return null;
        }

        for (let sc of tc.sc) {
            let info = findScInfo(sc);
            if(info != null){
                sc.psNumber = info.psNumber || 0;
                sc.sudNumber = info.psNumber || 0;
            }else{
                sc.psNumber = 0;
                sc.sudNumber = 0;
            }
        }
    }

    // 保存
    fs.writeFile('temp-fix.json', JSON.stringify(all), (err) => {
        if (err) throw err;
        console.log('文件已被保存');
    })


})()


