/**
 * 获取起草单位分类的excel
 * @type {groupBy}
 */
const groupBy = require("../StandardExcelParse").groupBy;
const getExcelData = require("../StandardExcelParse").getExcelData;
var xlsx = require('node-xlsx');
var fs = require('fs');
var moment = require('moment');
var ncp = require("copy-paste");
const {parseHangYe} = require("../utils");

function exportExcelGroupData(originalExcel){
    let data = getExcelData(originalExcel);
    var sheets = [];

    function GroupByAndCount(array, groupKeyFun) {
        return groupBy(array, groupKeyFun).map(it => ({
            key: groupKeyFun(it[0]),
            count: it.length
        })).sort((a, b) => b.count - a.count)
    }

    function getSheet(name, countData) {
        return {
            name,
            data:
                [['分类依据', '分类数量']].concat(
                    countData.map(it => [it.key, it.count])
                )
        }
    }

    sheets.push(getSheet("按归口单位", GroupByAndCount(data, it => it.focalUnit)))
    sheets.push(getSheet("按主管单位", GroupByAndCount(data, it => it.Administration)))
    sheets.push(getSheet("按发布日期", GroupByAndCount(data.map(it => ({
        ...it,
        publishYear: moment(it.publishDate, "YYYY-MM-DD").year()
    })), it => it.publishYear)))
    sheets.push(getSheet("按行业类型", GroupByAndCount(data.map(it => ({
        ...it,
        hangYe: parseHangYe(it.standardNumber)
    })).filter(it => it.hangYe !== undefined && it.hangYe !== null), it => it.hangYe)))
    sheets.push(getSheet("按起草单位", GroupByAndCount(data.map(it => {
            let split = it.draftingUnit.split(",");
            if (split.length === 0) {
                split.push("")
            }
            return split.map(s => ({
                ...it,
                splitDraftingUnit: s
            }))
        }
    ).flat(), it => it.splitDraftingUnit)))

    var buffer = xlsx.build(sheets);
    fs.writeFileSync(originalExcel.substring(0, originalExcel.lastIndexOf(".")) + "数据统计" + ".xlsx", buffer, {'flag': 'w'});
}

module.exports = {
    exportExcelGroupData
}