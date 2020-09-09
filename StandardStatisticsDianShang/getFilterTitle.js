// 按照归口单位
const groupBy = require("./StandardExcelParse").groupBy;
const getExcelData = require("./StandardExcelParse").getExcelData;
var xlsx = require('node-xlsx');
var fs = require('fs');


{
    let title = ["移动支付", "移动金融", "手机支付"]
    let data = getExcelData();

    let excelData = data.filter(it =>
        title.some(item => it.title.includes(item)))
        .map(item =>
            [item.title, item.standardNumber, item.focalUnit, item.executeUnit, item.Administration, item.draftingUnit, item.publishDate, item.executeDate, item.url]
        );

    var buffer = xlsx.build([{
        name: "标题过滤",
        data: [["标准名", "标准编号", "归口单位", "执行单位", "主管部门", "起草单位", "发布日期", "执行日期", "网页地址"]].concat(excelData)
    }]);
    fs.writeFileSync('标题过滤.xlsx', buffer, {'flag': 'w'});
}