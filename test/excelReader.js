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

function getExcelData() {
    var excelObj = xlsx.parse('./去重后的标准（删减版）.xlsx');
    var data = []

    for (var sheet in excelObj) {
        console.log(excelObj[sheet].name)
        if (excelObj.hasOwnProperty(sheet)) { // sheet is '0', '1', ...
            var sheetData = excelObj[sheet].data; // data inside a sheet, which is an two-dimention array
            var rowCount = sheetData.length;
            // activityCountDic[sheet] = rowCount;
            for (var i = 0; i < rowCount; i++) {
                let cellCount = sheetData[i].length;
                for(var j = 0;j<cellCount;j++){
                    let sheetDatumElement = sheetData[i][j];
                    if(sheetDatumElement == '' || sheetDatumElement === '无效'){
                        data.push({i,j})
                    }
                }
            }
        }
    }

    console.log(data)
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