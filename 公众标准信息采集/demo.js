import {mysqlUrl} from "../screct";

const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize(mysqlUrl + '/STANDARD?createDatabaseIfNotExist=true');

const superagent = require('superagent');
const cheerio = require('cheerio');
var xlsx = require('node-xlsx');
var fs = require('fs');
var moment = require('moment');
const range = require("../StandardStatisticsDianShang/utils").range;
const SuperagentPipe = require("../poolList").SuperagentPipe;

let superagentPipe = new SuperagentPipe(8);

class StrandBaseInfo extends Model {}
StrandBaseInfo.init({
    standardName: DataTypes.STRING,
    groupName: DataTypes.STRING,
    standardNumber: DataTypes.STRING,
    publishDate: DataTypes.DATE,
    status: DataTypes.STRING,
    infoUrl: DataTypes.STRING,
    purchaseInfo: DataTypes.STRING,
}, { sequelize, modelName: 'StrandBaseInfo' ,charset: "utf8mb4"});

(async () => {
    await sequelize.sync();

    var pageSize = 100;
    let totalSize = Math.ceil(15195/pageSize);
    for (let page = 1; page < totalSize + 1; page++) {
        superagentPipe.get(`http://www.ttbz.org.cn/Home/Standard?ps=${pageSize}&searchType=&key=&enTitle=&stNo=&stName=&orgCode=&orgName=&stStatus=&stSale=&CNL1Code=&CNL2Code=&CNL3Code=&ENL1Code=&ENL2Code=&ENL3Code=&stOpen=&page=${page}`)
            .then(({err, res}) => {
                let $ = cheerio.load(res.text);
                // console.log(res.text);
                let $cContentElement = $("#main_content > div.standard_mainbox.bigboxborder > table:nth-child(3) > tbody > tr")[0];

                let list = $("#main_content > div.standard_mainbox.bigboxborder > table:nth-child(3) > tbody > tr").toArray().map(tr=>$(tr).find("td").toArray().map(it=>$(it).text().trim()).concat([
                    $(tr).find("td:nth-child(7) > a").attr("href")
                ])).filter(it=>it.length>1);

                list.forEach(([_, groupName, standardNumber, standardName, publishDateString, status, _1, purchaseInfo, infoUrl])=>{
                    StrandBaseInfo.count({
                        where: {
                            standardNumber: standardNumber
                        }
                    }).then(c => {
                        if (c === 0) {
                            StrandBaseInfo.create({
                                groupName,
                                standardNumber,
                                standardName,
                                publishDate: moment(publishDateString).toDate(),
                                status,
                                infoUrl,
                                purchaseInfo
                            })
                        }
                    })

                })
                console.log($cContentElement)
            })
    }

})();