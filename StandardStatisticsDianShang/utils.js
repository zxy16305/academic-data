// $("#searchitem_trade_c > div.filter_option > span").toArray().map(it=>$(it).attr("title")).map(it=> it.split(" ")).filter(it=>it.length > 1).reduce((pre, val)=> {pre[val[0]] = val[1].split("(")[0]; return pre;}, {})
var hangYe = {
    "QB": "轻工",
    "HB": "航空",
    "LS": "粮食",
    "NB": "能源",
    "TY": "体育",
    "TB": "铁路运输",
    "WW": "文物保护",
    "ZY": "中医药",
    "LD": "劳动和劳动安全",
    "DB": "地震",
    "CJ": "城镇建设",
    "TD": "土地管理",
    "GY": "广播电影电视",
    "YS": "有色金属",
    "YB": "黑色冶金",
    "HS": "海关",
    "JY": "教育",
    "SL": "水利",
    "SF": "司法",
    "JC": "建材",
    "SJ": "电子",
    "EJ": "核工业",
    "QC": "汽车",
    "SB": "国内贸易",
    "SY": "石油天然气",
    "QJ": "航天",
    "DL": "电力",
    "MZ": "民政",
    "SC": "水产",
    "XF": "消防救援",
    "MH": "民用航空",
    "XB": "稀土",
    "SH": "石油化工",
    "YD": "通信",
    "JB": "机械",
    "DA": "档案",
    "RB": "认证认可",
    "YC": "烟草",
    "JT": "交通",
    "NY": "农业",
    "GH": "供销合作",
    "BB": "包装",
    "FZ": "纺织",
    "GA": "公共安全",
    "WJ": "兵工民品",
    "LY": "林业",
    "MT": "煤炭",
    "SN": "出入境检验检疫",
    "WM": "外经贸",
    "LB": "旅游",
    "QX": "气象",
    "DZ": "地质矿产",
    "HG": "化工",
    "GM": "国密",
    "SW": "税务",
    "CY": "新闻出版",
    "YY": "医药",
    "WS": "卫生",
    "YJ": "减灾救灾与综合性应急管理",
    "AQ": "安全生产",
    "JG": "建筑工程",
    "CH": "测绘",
    "HY": "海洋",
    "DY": "电影",
    "CB": "船舶",
    "WB": "物资管理",
    "GC": "国家物资储备",
    "YZ": "邮政",
    "HJ": "环境保护",
    "WH": "文化",
    "JR": "金融"
}

function range(size, startAt = 0) {
    return [...Array(size).keys()].map(i => i + startAt);
}

let gbSerialRegexp = /GB(\/T)?\s/
let dbSerialRegexp = /DB\d{2}(\/T)?\s/
let qySerialRegexp = /Q\/.*\s/
let ttSerialRegexp = /T\/.*\s/

function parseName(serialNumber) {
    if (gbSerialRegexp.test(serialNumber)) {
        return "国家标准"
    } else if (dbSerialRegexp.test(serialNumber)) {
        return "地方标准"
    } else if (qySerialRegexp.test(serialNumber)) {
        return "企业标准"
    } else if (ttSerialRegexp.test(serialNumber)) {
        return "团体标准"
    } else {
        return "行业标准"
    }
    // if (serialNumber.startsWith("GB")) {
    //     return "国家标准"
    // }/*else if(serialNumber.startsWith("GM/T")){
    //     return "行业标准"
    // }*/ else if (serialNumber.startsWith("DB")) {
    //     return "地方标准"
    // } else if (serialNumber.startsWith("Q ")) {
    //     return "企业标准"
    // } else if (serialNumber.startsWith("T ")) {
    //     return "团体标准"
    // } else {
    //     return "行业标准"
    // }
}

function parseHangYe(serialNumber) {
    if (parseName(serialNumber) !== "行业标准") {
        return undefined;
    }
    for (let key of Object.keys(hangYe)) {
        if (serialNumber.startsWith(key)) {
            return hangYe[key]
        }
    }
}

var r = /\s+/g;
function resolveFileName(name) {
    return name
        .replace('\\', ' ')
        .replace('\/', ' ')
        .replace('\\', ' ')
        .replace(':', ' ')
        .replace('?', ' ')
        .replace(':', ' ')
        .replace('\"', ' ')
        .replace('<', ' ')
        .replace('>', ' ')
        .replace('|', ' ')
        .replace(r, ' ')
}

Object.defineProperty(Array.prototype, 'flat', {
    value: function (depth = 1) {
        return this.reduce(function (flat, toFlatten) {
            return flat.concat((Array.isArray(toFlatten) && (depth > 1)) ? toFlatten.flat(depth - 1) : toFlatten);
        }, []);
    }
});


module.exports = {
    range,
    parseName,
    resolveFileName,
    parseHangYe
}