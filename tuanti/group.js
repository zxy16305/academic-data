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

class Group extends Model {}
Group.init({
    groupName: DataTypes.STRING,
    url: DataTypes.STRING,
    statementDate: DataTypes.DATE,
}, { sequelize, modelName: 'Group' ,charset: "utf8mb4"});

(async () => {
    await sequelize.sync();

    var pageNum = await superagentPipe.get(`http://www.ttbz.org.cn/Home/ActGroupList/?t=%E5%B9%B3%E5%8F%B0%E6%88%90%E5%91%98%E5%9B%A2%E4%BD%93&tdsourcetag=s_pctim_aiomsg&page=1`).then(({err, res})=>{
        let $ = cheerio.load(res.text);
        return new Promise(resolve => resolve(parseInt($("#PageCount").val())));
    })

    let page = 1;
    for (let page = 1; page < pageNum + 1; page++) {
        superagentPipe.get(`http://www.ttbz.org.cn/Home/ActGroupList/?t=%E5%B9%B3%E5%8F%B0%E6%88%90%E5%91%98%E5%9B%A2%E4%BD%93&tdsourcetag=s_pctim_aiomsg&page=${page}`)
            .then(({err, res}) => {
                let $ = cheerio.load(res.text);
                // console.log(res.text);

                let list = $("#main_content > div.listpage_mainbox.bigboxborder > div.listpage_newsbox > ul > li").toArray().filter((_, i)=>i>0).map(it=>({
                    groupName: $(it).find("a").attr("href"),
                    url: $(it).find("a").text(),
                    statementDate: moment($(it).find("span").text().substring(1, $(it).find("span").text().length -1)),
                }))

                list.forEach((obj)=>{
                    Group.count({
                        where: {
                            groupName: obj.groupName
                        }
                    }).then(c => {
                        if (c === 0) {
                            Group.create(obj)
                        }
                    })
                })
            })
    }

})();