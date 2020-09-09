const cheerio = require('cheerio');
var xlsx = require('node-xlsx');
var fs = require('fs');


function groupBy(array, f) {
    let groups = {};
    array.forEach(function (o) {
        let group = JSON.stringify(f(o));
        groups[group] = groups[group] || [];
        groups[group].push(o);
    });
    return Object.keys(groups).map(function (group) {
        return groups[group];
    });
}

function getExcelData(excel ='./去重后的标准（删减版）.xlsx') {
    var excelObj = xlsx.parse(excel);
    var data = []

    for (var sheet in excelObj) {
        console.log(excelObj[sheet].name)
        if (excelObj.hasOwnProperty(sheet)) { // sheet is '0', '1', ...
            var sheetData = excelObj[sheet].data; // data inside a sheet, which is an two-dimention array
            var rowCount = sheetData.length;
            // activityCountDic[sheet] = rowCount;
            for (var i = 1; i < rowCount; i++) {
                var [title, standardNumber, focalUnit, executeUnit, Administration, draftingUnit, publishDate, executeDate, url] = sheetData[i]; // data inside one row, which is an one-dimention array
                if (title && !data.find(it => it.standardNumber === standardNumber)) {
                    data.push({
                        //标准名
                        title,
                        //标准编号
                        standardNumber,
                        //归口单位
                        focalUnit,
                        // 执行单位
                        executeUnit,
                        //主管单位
                        Administration,
                        //起草单位
                        draftingUnit,
                        // 发布日期
                        publishDate,
                        //执行日期
                        executeDate,
                        // 网页地址
                        url
                    })
                }
            }
        }
    }

    return data;
}

module.exports = {
    getExcelData,
    groupBy
}


// // 按照名字
// {
//     groupBy(data.map(it => {
//         let flag = "";
//         if (it.title.includes("移动支付")) {
//             flag = "移动支付"
//         } else if (it.title.includes("移动金融")) {
//             flag = "移动金融"
//         } else if (it.title.includes("手机支付")) {
//             flag = "手机支付"
//         } else {
//             flag = "其他"
//         }
//         return {
//             ...it,
//             flag
//         }
//     }), it => it.flag).map(it=> )
//
// }