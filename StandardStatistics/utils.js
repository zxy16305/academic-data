function range(size, startAt = 0) {
    return [...Array(size).keys()].map(i => i + startAt);
}

function parseName(serialNumber) {
    if (serialNumber.startsWith("GB")) {
        return "国家标准"
    }/*else if(serialNumber.startsWith("GM/T")){
        return "行业标准"
    }*/ else if (serialNumber.startsWith("DB")) {
        return "地方标准"
    } else if (serialNumber.startsWith("Q ")) {
        return "企业标准"
    } else if (serialNumber.startsWith("T ")) {
        return "团体标准"
    } else {
        return "行业标准"
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

module.exports = {
    range,
    parseName,
    resolveFileName
}