// 按照归口单位
const groupBy = require("./StandardExcelParse").groupBy;
const getExcelData = require("./StandardExcelParse").getExcelData;
var xlsx = require('node-xlsx');
var fs = require('fs');


{
    let data = getExcelData();


    let groupBy1 = groupBy(data, (item) => item.focalUnit);

    let reduces = groupBy1.reduce(function (result, item) {
        if (item.length > 0) {
            result[item[0].focalUnit] = item
        }
        return result;
    }, {});

    let excelData = groupBy1.sort((a, b) => b.length - a.length).map(it => ({
        name: it[0].focalUnit,
        data: it
    })).slice(0, 20)
        .map(it => ({
            name: it.name, data: [["标准名", "标准编号", "归口单位", "执行单位", "主管部门", "起草单位", "发布日期", "执行日期", "网页地址"]].concat(
                it.data.map(item => [item.title, item.standardNumber, item.focalUnit, item.executeUnit, item.Administration, item.draftingUnit, item.publishDate, item.executeDate, item.url])
            )
        }));

    var buffer = xlsx.build(excelData);
    fs.writeFileSync('stat1.xlsx', buffer, {'flag': 'w'});
}