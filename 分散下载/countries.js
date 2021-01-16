// 国家字典
let country_dir = [
    {
        "id": 1,
        "country_name": "阿鲁巴",
        "country_code": "ABW",
        "region": "",
        "income_group": "高收入国家"
    },
    {
        "id": 2,
        "country_name": "阿富汗",
        "country_code": "AFG",
        "region": "南亚",
        "income_group": "低收入国家"
    },
    {
        "id": 3,
        "country_name": "安哥拉",
        "country_code": "AGO",
        "region": "撒哈拉以南非洲地区（不包括高收入）",
        "income_group": "中低等收入国家"
    },
    {
        "id": 4,
        "country_name": "阿尔巴尼亚",
        "country_code": "ALB",
        "region": "欧洲与中亚地区（不包括高收入）",
        "income_group": "中高等收入国家"
    },
    {
        "id": 5,
        "country_name": "安道尔共和国",
        "country_code": "AND",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 6,
        "country_name": "阿拉伯联盟国家",
        "country_code": "ARB",
        "region": null,
        "income_group": null
    },
    {
        "id": 7,
        "country_name": "阿拉伯联合酋长国",
        "country_code": "ARE",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 8,
        "country_name": "阿根廷",
        "country_code": "ARG",
        "region": "拉丁美洲与加勒比海地区（不包括高收入）",
        "income_group": "中高等收入国家"
    },
    {
        "id": 9,
        "country_name": "亚美尼亚",
        "country_code": "ARM",
        "region": "欧洲与中亚地区（不包括高收入）",
        "income_group": "中高等收入国家"
    },
    {
        "id": 10,
        "country_name": "美属萨摩亚",
        "country_code": "ASM",
        "region": "东亚与太平洋地区（不包括高收入）",
        "income_group": "中高等收入国家"
    },
    {
        "id": 11,
        "country_name": "安提瓜和巴布达",
        "country_code": "ATG",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 12,
        "country_name": "澳大利亚",
        "country_code": "AUS",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 13,
        "country_name": "奥地利",
        "country_code": "AUT",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 14,
        "country_name": "阿塞拜疆",
        "country_code": "AZE",
        "region": "欧洲与中亚地区（不包括高收入）",
        "income_group": "中高等收入国家"
    },
    {
        "id": 15,
        "country_name": "布隆迪",
        "country_code": "BDI",
        "region": "撒哈拉以南非洲地区（不包括高收入）",
        "income_group": "低收入国家"
    },
    {
        "id": 16,
        "country_name": "比利时",
        "country_code": "BEL",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 17,
        "country_name": "贝宁",
        "country_code": "BEN",
        "region": "撒哈拉以南非洲地区（不包括高收入）",
        "income_group": "中低等收入国家"
    },
    {
        "id": 18,
        "country_name": "布基纳法索",
        "country_code": "BFA",
        "region": "撒哈拉以南非洲地区（不包括高收入）",
        "income_group": "低收入国家"
    },
    {
        "id": 19,
        "country_name": "孟加拉国",
        "country_code": "BGD",
        "region": "南亚",
        "income_group": "中低等收入国家"
    },
    {
        "id": 20,
        "country_name": "保加利亚",
        "country_code": "BGR",
        "region": "欧洲与中亚地区（不包括高收入）",
        "income_group": "中高等收入国家"
    },
    {
        "id": 21,
        "country_name": "巴林",
        "country_code": "BHR",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 22,
        "country_name": "巴哈马",
        "country_code": "BHS",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 23,
        "country_name": "波斯尼亚和黑塞哥维那",
        "country_code": "BIH",
        "region": "欧洲与中亚地区（不包括高收入）",
        "income_group": "中高等收入国家"
    },
    {
        "id": 24,
        "country_name": "白俄罗斯",
        "country_code": "BLR",
        "region": "欧洲与中亚地区（不包括高收入）",
        "income_group": "中高等收入国家"
    },
    {
        "id": 25,
        "country_name": "伯利兹",
        "country_code": "BLZ",
        "region": "拉丁美洲与加勒比海地区（不包括高收入）",
        "income_group": "中高等收入国家"
    },
    {
        "id": 26,
        "country_name": "百慕大",
        "country_code": "BMU",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 27,
        "country_name": "玻利维亚",
        "country_code": "BOL",
        "region": "拉丁美洲与加勒比海地区（不包括高收入）",
        "income_group": "中低等收入国家"
    },
    {
        "id": 28,
        "country_name": "巴西",
        "country_code": "BRA",
        "region": "拉丁美洲与加勒比海地区（不包括高收入）",
        "income_group": "中高等收入国家"
    },
    {
        "id": 29,
        "country_name": "巴巴多斯",
        "country_code": "BRB",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 30,
        "country_name": "文莱达鲁萨兰国",
        "country_code": "BRN",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 31,
        "country_name": "不丹",
        "country_code": "BTN",
        "region": "南亚",
        "income_group": "中低等收入国家"
    },
    {
        "id": 32,
        "country_name": "博茨瓦纳",
        "country_code": "BWA",
        "region": "撒哈拉以南非洲地区（不包括高收入）",
        "income_group": "中高等收入国家"
    },
    {
        "id": 33,
        "country_name": "中非共和国",
        "country_code": "CAF",
        "region": "撒哈拉以南非洲地区（不包括高收入）",
        "income_group": "低收入国家"
    },
    {
        "id": 34,
        "country_name": "加拿大",
        "country_code": "CAN",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 35,
        "country_name": "中�W和波�_的海\n",
        "country_code": "CEB",
        "region": null,
        "income_group": null
    },
    {
        "id": 36,
        "country_name": "瑞士",
        "country_code": "CHE",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 37,
        "country_name": "海峡群岛",
        "country_code": "CHI",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 38,
        "country_name": "智利",
        "country_code": "CHL",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 39,
        "country_name": "中国",
        "country_code": "CHN",
        "region": "东亚与太平洋地区（不包括高收入）",
        "income_group": "中高等收入国家"
    },
    {
        "id": 40,
        "country_name": "科特迪瓦",
        "country_code": "CIV",
        "region": "撒哈拉以南非洲地区（不包括高收入）",
        "income_group": "中低等收入国家"
    },
    {
        "id": 41,
        "country_name": "喀麦隆",
        "country_code": "CMR",
        "region": "撒哈拉以南非洲地区（不包括高收入）",
        "income_group": "中低等收入国家"
    },
    {
        "id": 42,
        "country_name": "刚果（金）",
        "country_code": "COD",
        "region": "撒哈拉以南非洲地区（不包括高收入）",
        "income_group": "低收入国家"
    },
    {
        "id": 43,
        "country_name": "刚果（布）",
        "country_code": "COG",
        "region": "撒哈拉以南非洲地区（不包括高收入）",
        "income_group": "中低等收入国家"
    },
    {
        "id": 44,
        "country_name": "哥伦比亚",
        "country_code": "COL",
        "region": "拉丁美洲与加勒比海地区（不包括高收入）",
        "income_group": "中高等收入国家"
    },
    {
        "id": 45,
        "country_name": "科摩罗",
        "country_code": "COM",
        "region": "撒哈拉以南非洲地区（不包括高收入）",
        "income_group": "中低等收入国家"
    },
    {
        "id": 46,
        "country_name": "佛得角",
        "country_code": "CPV",
        "region": "撒哈拉以南非洲地区（不包括高收入）",
        "income_group": "中低等收入国家"
    },
    {
        "id": 47,
        "country_name": "哥斯达黎加",
        "country_code": "CRI",
        "region": "拉丁美洲与加勒比海地区（不包括高收入）",
        "income_group": "中高等收入国家"
    },
    {
        "id": 48,
        "country_name": "加勒比小国",
        "country_code": "CSS",
        "region": null,
        "income_group": null
    },
    {
        "id": 49,
        "country_name": "古巴",
        "country_code": "CUB",
        "region": "拉丁美洲与加勒比海地区（不包括高收入）",
        "income_group": "中高等收入国家"
    },
    {
        "id": 50,
        "country_name": "库拉索",
        "country_code": "CUW",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 51,
        "country_name": "开曼群岛",
        "country_code": "CYM",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 52,
        "country_name": "塞浦路斯",
        "country_code": "CYP",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 53,
        "country_name": "捷克共和国",
        "country_code": "CZE",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 54,
        "country_name": "德国",
        "country_code": "DEU",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 55,
        "country_name": "吉布提",
        "country_code": "DJI",
        "region": "中东与北非地区（不包括高收入）",
        "income_group": "中低等收入国家"
    },
    {
        "id": 56,
        "country_name": "多米尼克",
        "country_code": "DMA",
        "region": "拉丁美洲与加勒比海地区（不包括高收入）",
        "income_group": "中高等收入国家"
    },
    {
        "id": 57,
        "country_name": "丹麦",
        "country_code": "DNK",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 58,
        "country_name": "多米尼加共和国",
        "country_code": "DOM",
        "region": "拉丁美洲与加勒比海地区（不包括高收入）",
        "income_group": "中高等收入国家"
    },
    {
        "id": 59,
        "country_name": "阿尔及利亚",
        "country_code": "DZA",
        "region": "中东与北非地区（不包括高收入）",
        "income_group": "中低等收入国家"
    },
    {
        "id": 60,
        "country_name": "东亚与太平洋地区（不包括高收入）",
        "country_code": "EAP",
        "region": null,
        "income_group": null
    },
    {
        "id": 61,
        "country_name": "早人口�t利",
        "country_code": "EAR",
        "region": null,
        "income_group": null
    },
    {
        "id": 62,
        "country_name": "东亚与太平洋地区",
        "country_code": "EAS",
        "region": null,
        "income_group": null
    },
    {
        "id": 63,
        "country_name": "欧洲与中亚地区（不包括高收入）",
        "country_code": "ECA",
        "region": null,
        "income_group": null
    },
    {
        "id": 64,
        "country_name": "欧洲与中亚地区",
        "country_code": "ECS",
        "region": null,
        "income_group": null
    },
    {
        "id": 65,
        "country_name": "厄瓜多尔",
        "country_code": "ECU",
        "region": "拉丁美洲与加勒比海地区（不包括高收入）",
        "income_group": "中高等收入国家"
    },
    {
        "id": 66,
        "country_name": "阿拉伯埃及共和国",
        "country_code": "EGY",
        "region": "中东与北非地区（不包括高收入）",
        "income_group": "中低等收入国家"
    },
    {
        "id": 67,
        "country_name": "欧洲货币联盟",
        "country_code": "EMU",
        "region": null,
        "income_group": null
    },
    {
        "id": 68,
        "country_name": "厄立特里亚",
        "country_code": "ERI",
        "region": "撒哈拉以南非洲地区（不包括高收入）",
        "income_group": "低收入国家"
    },
    {
        "id": 69,
        "country_name": "西班牙",
        "country_code": "ESP",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 70,
        "country_name": "爱沙尼亚",
        "country_code": "EST",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 71,
        "country_name": "埃塞俄比亚",
        "country_code": "ETH",
        "region": "撒哈拉以南非洲地区（不包括高收入）",
        "income_group": "低收入国家"
    },
    {
        "id": 72,
        "country_name": "欧洲联盟",
        "country_code": "EUU",
        "region": null,
        "income_group": null
    },
    {
        "id": 73,
        "country_name": "脆弱和受�n突影�的情�r下\n",
        "country_code": "FCS",
        "region": null,
        "income_group": null
    },
    {
        "id": 74,
        "country_name": "芬兰",
        "country_code": "FIN",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 75,
        "country_name": "斐济",
        "country_code": "FJI",
        "region": "东亚与太平洋地区（不包括高收入）",
        "income_group": "中高等收入国家"
    },
    {
        "id": 76,
        "country_name": "法国",
        "country_code": "FRA",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 77,
        "country_name": "法罗群岛",
        "country_code": "FRO",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 78,
        "country_name": "密克罗尼西亚联邦",
        "country_code": "FSM",
        "region": "东亚与太平洋地区（不包括高收入）",
        "income_group": "中低等收入国家"
    },
    {
        "id": 79,
        "country_name": "加蓬",
        "country_code": "GAB",
        "region": "撒哈拉以南非洲地区（不包括高收入）",
        "income_group": "中高等收入国家"
    },
    {
        "id": 80,
        "country_name": "英国",
        "country_code": "GBR",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 81,
        "country_name": "格鲁吉亚",
        "country_code": "GEO",
        "region": "欧洲与中亚地区（不包括高收入）",
        "income_group": "中高等收入国家"
    },
    {
        "id": 82,
        "country_name": "加纳",
        "country_code": "GHA",
        "region": "撒哈拉以南非洲地区（不包括高收入）",
        "income_group": "中低等收入国家"
    },
    {
        "id": 83,
        "country_name": "直布罗陀",
        "country_code": "GIB",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 84,
        "country_name": "几内亚",
        "country_code": "GIN",
        "region": "撒哈拉以南非洲地区（不包括高收入）",
        "income_group": "低收入国家"
    },
    {
        "id": 85,
        "country_name": "冈比亚",
        "country_code": "GMB",
        "region": "撒哈拉以南非洲地区（不包括高收入）",
        "income_group": "低收入国家"
    },
    {
        "id": 86,
        "country_name": "几内亚比绍共和国",
        "country_code": "GNB",
        "region": "撒哈拉以南非洲地区（不包括高收入）",
        "income_group": "低收入国家"
    },
    {
        "id": 87,
        "country_name": "赤道几内亚",
        "country_code": "GNQ",
        "region": "撒哈拉以南非洲地区（不包括高收入）",
        "income_group": "中高等收入国家"
    },
    {
        "id": 88,
        "country_name": "希腊",
        "country_code": "GRC",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 89,
        "country_name": "格林纳达",
        "country_code": "GRD",
        "region": "拉丁美洲与加勒比海地区（不包括高收入）",
        "income_group": "中高等收入国家"
    },
    {
        "id": 90,
        "country_name": "格陵兰",
        "country_code": "GRL",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 91,
        "country_name": "危地马拉",
        "country_code": "GTM",
        "region": "拉丁美洲与加勒比海地区（不包括高收入）",
        "income_group": "中高等收入国家"
    },
    {
        "id": 92,
        "country_name": "关岛",
        "country_code": "GUM",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 93,
        "country_name": "圭亚那",
        "country_code": "GUY",
        "region": "拉丁美洲与加勒比海地区（不包括高收入）",
        "income_group": "中高等收入国家"
    },
    {
        "id": 94,
        "country_name": "高收入国家",
        "country_code": "HIC",
        "region": null,
        "income_group": null
    },
    {
        "id": 95,
        "country_name": "中国香港特别行政区",
        "country_code": "HKG",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 96,
        "country_name": "洪都拉斯",
        "country_code": "HND",
        "region": "拉丁美洲与加勒比海地区（不包括高收入）",
        "income_group": "中低等收入国家"
    },
    {
        "id": 97,
        "country_name": "重债穷国 (HIPC)",
        "country_code": "HPC",
        "region": null,
        "income_group": null
    },
    {
        "id": 98,
        "country_name": "克罗地亚",
        "country_code": "HRV",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 99,
        "country_name": "海地",
        "country_code": "HTI",
        "region": "拉丁美洲与加勒比海地区（不包括高收入）",
        "income_group": "低收入国家"
    },
    {
        "id": 100,
        "country_name": "匈牙利",
        "country_code": "HUN",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 101,
        "country_name": "只有IBRD",
        "country_code": "IBD",
        "region": null,
        "income_group": null
    },
    {
        "id": 102,
        "country_name": "IBRD与IDA",
        "country_code": "IBT",
        "region": null,
        "income_group": null
    },
    {
        "id": 103,
        "country_name": "IDA�",
        "country_code": "IDA",
        "region": null,
        "income_group": null
    },
    {
        "id": 104,
        "country_name": "IDA混合",
        "country_code": "IDB",
        "region": null,
        "income_group": null
    },
    {
        "id": 105,
        "country_name": "印度尼西亚",
        "country_code": "IDN",
        "region": "东亚与太平洋地区（不包括高收入）",
        "income_group": "中高等收入国家"
    },
    {
        "id": 106,
        "country_name": "只有IDA",
        "country_code": "IDX",
        "region": null,
        "income_group": null
    },
    {
        "id": 107,
        "country_name": "马恩岛",
        "country_code": "IMN",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 108,
        "country_name": "印度",
        "country_code": "IND",
        "region": "南亚",
        "income_group": "中低等收入国家"
    },
    {
        "id": 109,
        "country_name": "未分类国家",
        "country_code": "INX",
        "region": null,
        "income_group": null
    },
    {
        "id": 110,
        "country_name": "爱尔兰",
        "country_code": "IRL",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 111,
        "country_name": "伊朗伊斯兰共和国 ",
        "country_code": "IRN",
        "region": "中东与北非地区（不包括高收入）",
        "income_group": "中高等收入国家"
    },
    {
        "id": 112,
        "country_name": "伊拉克",
        "country_code": "IRQ",
        "region": "中东与北非地区（不包括高收入）",
        "income_group": "中高等收入国家"
    },
    {
        "id": 113,
        "country_name": "冰岛",
        "country_code": "ISL",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 114,
        "country_name": "以色列",
        "country_code": "ISR",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 115,
        "country_name": "意大利",
        "country_code": "ITA",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 116,
        "country_name": "牙买加",
        "country_code": "JAM",
        "region": "拉丁美洲与加勒比海地区（不包括高收入）",
        "income_group": "中高等收入国家"
    },
    {
        "id": 117,
        "country_name": "约旦",
        "country_code": "JOR",
        "region": "中东与北非地区（不包括高收入）",
        "income_group": "中高等收入国家"
    },
    {
        "id": 118,
        "country_name": "日本",
        "country_code": "JPN",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 119,
        "country_name": "哈萨克斯坦",
        "country_code": "KAZ",
        "region": "欧洲与中亚地区（不包括高收入）",
        "income_group": "中高等收入国家"
    },
    {
        "id": 120,
        "country_name": "肯尼亚",
        "country_code": "KEN",
        "region": "撒哈拉以南非洲地区（不包括高收入）",
        "income_group": "中低等收入国家"
    },
    {
        "id": 121,
        "country_name": "吉尔吉斯斯坦",
        "country_code": "KGZ",
        "region": "欧洲与中亚地区（不包括高收入）",
        "income_group": "中低等收入国家"
    },
    {
        "id": 122,
        "country_name": "柬埔寨",
        "country_code": "KHM",
        "region": "东亚与太平洋地区（不包括高收入）",
        "income_group": "中低等收入国家"
    },
    {
        "id": 123,
        "country_name": "基里巴斯",
        "country_code": "KIR",
        "region": "东亚与太平洋地区（不包括高收入）",
        "income_group": "中低等收入国家"
    },
    {
        "id": 124,
        "country_name": "圣基茨和尼维斯",
        "country_code": "KNA",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 125,
        "country_name": "大韩民国",
        "country_code": "KOR",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 126,
        "country_name": "科威特",
        "country_code": "KWT",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 127,
        "country_name": "拉丁美洲与加勒比海地区（不包括高收入）",
        "country_code": "LAC",
        "region": null,
        "income_group": null
    },
    {
        "id": 128,
        "country_name": "老挝",
        "country_code": "LAO",
        "region": "东亚与太平洋地区（不包括高收入）",
        "income_group": "中低等收入国家"
    },
    {
        "id": 129,
        "country_name": "黎巴嫩",
        "country_code": "LBN",
        "region": "中东与北非地区（不包括高收入）",
        "income_group": "中高等收入国家"
    },
    {
        "id": 130,
        "country_name": "利比里亚",
        "country_code": "LBR",
        "region": "撒哈拉以南非洲地区（不包括高收入）",
        "income_group": "低收入国家"
    },
    {
        "id": 131,
        "country_name": "利比亚",
        "country_code": "LBY",
        "region": "中东与北非地区（不包括高收入）",
        "income_group": "中高等收入国家"
    },
    {
        "id": 132,
        "country_name": "圣卢西亚",
        "country_code": "LCA",
        "region": "拉丁美洲与加勒比海地区（不包括高收入）",
        "income_group": "中高等收入国家"
    },
    {
        "id": 133,
        "country_name": "拉丁美洲与加勒比海地区",
        "country_code": "LCN",
        "region": null,
        "income_group": null
    },
    {
        "id": 134,
        "country_name": "最不发达国家：联合国分类",
        "country_code": "LDC",
        "region": null,
        "income_group": null
    },
    {
        "id": 135,
        "country_name": "低收入国家",
        "country_code": "LIC",
        "region": null,
        "income_group": null
    },
    {
        "id": 136,
        "country_name": "列支敦士登",
        "country_code": "LIE",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 137,
        "country_name": "斯里兰卡",
        "country_code": "LKA",
        "region": "南亚",
        "income_group": "中低等收入国家"
    },
    {
        "id": 138,
        "country_name": "中低等收入国家",
        "country_code": "LMC",
        "region": null,
        "income_group": null
    },
    {
        "id": 139,
        "country_name": "中低收入国家",
        "country_code": "LMY",
        "region": null,
        "income_group": null
    },
    {
        "id": 140,
        "country_name": "莱索托",
        "country_code": "LSO",
        "region": "撒哈拉以南非洲地区（不包括高收入）",
        "income_group": "中低等收入国家"
    },
    {
        "id": 141,
        "country_name": "後期人口�t利",
        "country_code": "LTE",
        "region": null,
        "income_group": null
    },
    {
        "id": 142,
        "country_name": "立陶宛",
        "country_code": "LTU",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 143,
        "country_name": "卢森堡",
        "country_code": "LUX",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 144,
        "country_name": "拉脱维亚",
        "country_code": "LVA",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 145,
        "country_name": "中国澳门特别行政区",
        "country_code": "MAC",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 146,
        "country_name": "圣马丁（法属）",
        "country_code": "MAF",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 147,
        "country_name": "摩洛哥",
        "country_code": "MAR",
        "region": "中东与北非地区（不包括高收入）",
        "income_group": "中低等收入国家"
    },
    {
        "id": 148,
        "country_name": "摩纳哥",
        "country_code": "MCO",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 149,
        "country_name": "摩尔多瓦",
        "country_code": "MDA",
        "region": "欧洲与中亚地区（不包括高收入）",
        "income_group": "中低等收入国家"
    },
    {
        "id": 150,
        "country_name": "马达加斯加",
        "country_code": "MDG",
        "region": "撒哈拉以南非洲地区（不包括高收入）",
        "income_group": "低收入国家"
    },
    {
        "id": 151,
        "country_name": "马尔代夫",
        "country_code": "MDV",
        "region": "南亚",
        "income_group": "中高等收入国家"
    },
    {
        "id": 152,
        "country_name": "中东与北非地区",
        "country_code": "MEA",
        "region": null,
        "income_group": null
    },
    {
        "id": 153,
        "country_name": "墨西哥",
        "country_code": "MEX",
        "region": "拉丁美洲与加勒比海地区（不包括高收入）",
        "income_group": "中高等收入国家"
    },
    {
        "id": 154,
        "country_name": "马绍尔群岛",
        "country_code": "MHL",
        "region": "东亚与太平洋地区（不包括高收入）",
        "income_group": "中高等收入国家"
    },
    {
        "id": 155,
        "country_name": "中等收入国家",
        "country_code": "MIC",
        "region": null,
        "income_group": null
    },
    {
        "id": 156,
        "country_name": "北马其顿",
        "country_code": "MKD",
        "region": "欧洲与中亚地区（不包括高收入）",
        "income_group": "中高等收入国家"
    },
    {
        "id": 157,
        "country_name": "马里",
        "country_code": "MLI",
        "region": "撒哈拉以南非洲地区（不包括高收入）",
        "income_group": "低收入国家"
    },
    {
        "id": 158,
        "country_name": "马耳他",
        "country_code": "MLT",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 159,
        "country_name": "缅甸",
        "country_code": "MMR",
        "region": "东亚与太平洋地区（不包括高收入）",
        "income_group": "中低等收入国家"
    },
    {
        "id": 160,
        "country_name": "中东与北非地区（不包括高收入）",
        "country_code": "MNA",
        "region": null,
        "income_group": null
    },
    {
        "id": 161,
        "country_name": "黑山",
        "country_code": "MNE",
        "region": "欧洲与中亚地区（不包括高收入）",
        "income_group": "中高等收入国家"
    },
    {
        "id": 162,
        "country_name": "蒙古",
        "country_code": "MNG",
        "region": "东亚与太平洋地区（不包括高收入）",
        "income_group": "中低等收入国家"
    },
    {
        "id": 163,
        "country_name": "北马里亚纳群岛",
        "country_code": "MNP",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 164,
        "country_name": "莫桑比克",
        "country_code": "MOZ",
        "region": "撒哈拉以南非洲地区（不包括高收入）",
        "income_group": "低收入国家"
    },
    {
        "id": 165,
        "country_name": "毛里塔尼亚",
        "country_code": "MRT",
        "region": "撒哈拉以南非洲地区（不包括高收入）",
        "income_group": "中低等收入国家"
    },
    {
        "id": 166,
        "country_name": "毛里求斯",
        "country_code": "MUS",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 167,
        "country_name": "马拉维",
        "country_code": "MWI",
        "region": "撒哈拉以南非洲地区（不包括高收入）",
        "income_group": "低收入国家"
    },
    {
        "id": 168,
        "country_name": "马来西亚",
        "country_code": "MYS",
        "region": "东亚与太平洋地区（不包括高收入）",
        "income_group": "中高等收入国家"
    },
    {
        "id": 169,
        "country_name": "北美",
        "country_code": "NAC",
        "region": null,
        "income_group": null
    },
    {
        "id": 170,
        "country_name": "纳米比亚",
        "country_code": "NAM",
        "region": "撒哈拉以南非洲地区（不包括高收入）",
        "income_group": "中高等收入国家"
    },
    {
        "id": 171,
        "country_name": "新喀里多尼亚",
        "country_code": "NCL",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 172,
        "country_name": "尼日尔",
        "country_code": "NER",
        "region": "撒哈拉以南非洲地区（不包括高收入）",
        "income_group": "低收入国家"
    },
    {
        "id": 173,
        "country_name": "尼日利亚",
        "country_code": "NGA",
        "region": "撒哈拉以南非洲地区（不包括高收入）",
        "income_group": "中低等收入国家"
    },
    {
        "id": 174,
        "country_name": "尼加拉瓜",
        "country_code": "NIC",
        "region": "拉丁美洲与加勒比海地区（不包括高收入）",
        "income_group": "中低等收入国家"
    },
    {
        "id": 175,
        "country_name": "荷兰",
        "country_code": "NLD",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 176,
        "country_name": "挪威",
        "country_code": "NOR",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 177,
        "country_name": "尼泊尔",
        "country_code": "NPL",
        "region": "南亚",
        "income_group": "中低等收入国家"
    },
    {
        "id": 178,
        "country_name": "瑙�",
        "country_code": "NRU",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 179,
        "country_name": "新西兰",
        "country_code": "NZL",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 180,
        "country_name": "经合组织成员",
        "country_code": "OED",
        "region": null,
        "income_group": null
    },
    {
        "id": 181,
        "country_name": "阿曼",
        "country_code": "OMN",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 182,
        "country_name": "其他小国",
        "country_code": "OSS",
        "region": null,
        "income_group": null
    },
    {
        "id": 183,
        "country_name": "巴基斯坦",
        "country_code": "PAK",
        "region": "南亚",
        "income_group": "中低等收入国家"
    },
    {
        "id": 184,
        "country_name": "巴拿马",
        "country_code": "PAN",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 185,
        "country_name": "秘鲁",
        "country_code": "PER",
        "region": "拉丁美洲与加勒比海地区（不包括高收入）",
        "income_group": "中高等收入国家"
    },
    {
        "id": 186,
        "country_name": "菲律宾",
        "country_code": "PHL",
        "region": "东亚与太平洋地区（不包括高收入）",
        "income_group": "中低等收入国家"
    },
    {
        "id": 187,
        "country_name": "帕劳",
        "country_code": "PLW",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 188,
        "country_name": "巴布亚新几内亚",
        "country_code": "PNG",
        "region": "东亚与太平洋地区（不包括高收入）",
        "income_group": "中低等收入国家"
    },
    {
        "id": 189,
        "country_name": "波兰",
        "country_code": "POL",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 190,
        "country_name": "�A人口�t利",
        "country_code": "PRE",
        "region": null,
        "income_group": null
    },
    {
        "id": 191,
        "country_name": "波多黎各",
        "country_code": "PRI",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 192,
        "country_name": "朝鲜民主主义人民共和国",
        "country_code": "PRK",
        "region": "东亚与太平洋地区（不包括高收入）",
        "income_group": "低收入国家"
    },
    {
        "id": 193,
        "country_name": "葡萄牙",
        "country_code": "PRT",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 194,
        "country_name": "巴拉圭",
        "country_code": "PRY",
        "region": "拉丁美洲与加勒比海地区（不包括高收入）",
        "income_group": "中高等收入国家"
    },
    {
        "id": 195,
        "country_name": "约旦河西岸和加沙",
        "country_code": "PSE",
        "region": "中东与北非地区（不包括高收入）",
        "income_group": "中低等收入国家"
    },
    {
        "id": 196,
        "country_name": "太平洋岛国",
        "country_code": "PSS",
        "region": null,
        "income_group": null
    },
    {
        "id": 197,
        "country_name": "人口�t利之後",
        "country_code": "PST",
        "region": null,
        "income_group": null
    },
    {
        "id": 198,
        "country_name": "法属波利尼西亚",
        "country_code": "PYF",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 199,
        "country_name": "卡塔尔",
        "country_code": "QAT",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 200,
        "country_name": "罗马尼亚",
        "country_code": "ROU",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 201,
        "country_name": "俄罗斯联邦",
        "country_code": "RUS",
        "region": "欧洲与中亚地区（不包括高收入）",
        "income_group": "中高等收入国家"
    },
    {
        "id": 202,
        "country_name": "卢旺达",
        "country_code": "RWA",
        "region": "撒哈拉以南非洲地区（不包括高收入）",
        "income_group": "低收入国家"
    },
    {
        "id": 203,
        "country_name": "南亚",
        "country_code": "SAS",
        "region": null,
        "income_group": null
    },
    {
        "id": 204,
        "country_name": "沙特阿拉伯",
        "country_code": "SAU",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 205,
        "country_name": "苏丹",
        "country_code": "SDN",
        "region": "撒哈拉以南非洲地区（不包括高收入）",
        "income_group": "低收入国家"
    },
    {
        "id": 206,
        "country_name": "塞内加尔",
        "country_code": "SEN",
        "region": "撒哈拉以南非洲地区（不包括高收入）",
        "income_group": "中低等收入国家"
    },
    {
        "id": 207,
        "country_name": "新加坡",
        "country_code": "SGP",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 208,
        "country_name": "所罗门群岛",
        "country_code": "SLB",
        "region": "东亚与太平洋地区（不包括高收入）",
        "income_group": "中低等收入国家"
    },
    {
        "id": 209,
        "country_name": "塞拉利昂",
        "country_code": "SLE",
        "region": "撒哈拉以南非洲地区（不包括高收入）",
        "income_group": "低收入国家"
    },
    {
        "id": 210,
        "country_name": "萨尔瓦多",
        "country_code": "SLV",
        "region": "拉丁美洲与加勒比海地区（不包括高收入）",
        "income_group": "中低等收入国家"
    },
    {
        "id": 211,
        "country_name": "圣马力诺",
        "country_code": "SMR",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 212,
        "country_name": "索马里",
        "country_code": "SOM",
        "region": "撒哈拉以南非洲地区（不包括高收入）",
        "income_group": "低收入国家"
    },
    {
        "id": 213,
        "country_name": "塞尔维亚",
        "country_code": "SRB",
        "region": "欧洲与中亚地区（不包括高收入）",
        "income_group": "中高等收入国家"
    },
    {
        "id": 214,
        "country_name": "撒哈拉以南非洲地区（不包括高收入）",
        "country_code": "SSA",
        "region": null,
        "income_group": null
    },
    {
        "id": 215,
        "country_name": "南苏丹",
        "country_code": "SSD",
        "region": "撒哈拉以南非洲地区（不包括高收入）",
        "income_group": "低收入国家"
    },
    {
        "id": 216,
        "country_name": "撒哈拉以南非洲地区",
        "country_code": "SSF",
        "region": null,
        "income_group": null
    },
    {
        "id": 217,
        "country_name": "小国",
        "country_code": "SST",
        "region": null,
        "income_group": null
    },
    {
        "id": 218,
        "country_name": "圣多美和普林西比",
        "country_code": "STP",
        "region": "撒哈拉以南非洲地区（不包括高收入）",
        "income_group": "中低等收入国家"
    },
    {
        "id": 219,
        "country_name": "苏里南",
        "country_code": "SUR",
        "region": "拉丁美洲与加勒比海地区（不包括高收入）",
        "income_group": "中高等收入国家"
    },
    {
        "id": 220,
        "country_name": "斯洛伐克共和国",
        "country_code": "SVK",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 221,
        "country_name": "斯洛文尼亚",
        "country_code": "SVN",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 222,
        "country_name": "瑞典",
        "country_code": "SWE",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 223,
        "country_name": "斯威士兰",
        "country_code": "SWZ",
        "region": "撒哈拉以南非洲地区（不包括高收入）",
        "income_group": "中低等收入国家"
    },
    {
        "id": 224,
        "country_name": "圣马丁(荷属)",
        "country_code": "SXM",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 225,
        "country_name": "塞舌尔",
        "country_code": "SYC",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 226,
        "country_name": "阿拉伯叙利亚共和国",
        "country_code": "SYR",
        "region": "中东与北非地区（不包括高收入）",
        "income_group": "低收入国家"
    },
    {
        "id": 227,
        "country_name": "特克斯科斯群岛",
        "country_code": "TCA",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 228,
        "country_name": "乍得",
        "country_code": "TCD",
        "region": "撒哈拉以南非洲地区（不包括高收入）",
        "income_group": "低收入国家"
    },
    {
        "id": 229,
        "country_name": "东亚与太平洋地区 (IBRD与IDA)",
        "country_code": "TEA",
        "region": null,
        "income_group": null
    },
    {
        "id": 230,
        "country_name": "欧洲与中亚地区 (IBRD与IDA)",
        "country_code": "TEC",
        "region": null,
        "income_group": null
    },
    {
        "id": 231,
        "country_name": "多哥",
        "country_code": "TGO",
        "region": "撒哈拉以南非洲地区（不包括高收入）",
        "income_group": "低收入国家"
    },
    {
        "id": 232,
        "country_name": "泰国",
        "country_code": "THA",
        "region": "东亚与太平洋地区（不包括高收入）",
        "income_group": "中高等收入国家"
    },
    {
        "id": 233,
        "country_name": "塔吉克斯坦",
        "country_code": "TJK",
        "region": "欧洲与中亚地区（不包括高收入）",
        "income_group": "低收入国家"
    },
    {
        "id": 234,
        "country_name": "土库曼斯坦",
        "country_code": "TKM",
        "region": "欧洲与中亚地区（不包括高收入）",
        "income_group": "中高等收入国家"
    },
    {
        "id": 235,
        "country_name": "拉丁美洲与加勒比海地区 (IBRD与IDA)",
        "country_code": "TLA",
        "region": null,
        "income_group": null
    },
    {
        "id": 236,
        "country_name": "东帝汶",
        "country_code": "TLS",
        "region": "东亚与太平洋地区（不包括高收入）",
        "income_group": "中低等收入国家"
    },
    {
        "id": 237,
        "country_name": "中东与北非地区 (IBRD与IDA)",
        "country_code": "TMN",
        "region": null,
        "income_group": null
    },
    {
        "id": 238,
        "country_name": "汤加",
        "country_code": "TON",
        "region": "东亚与太平洋地区（不包括高收入）",
        "income_group": "中高等收入国家"
    },
    {
        "id": 239,
        "country_name": "南亚 (IBRD与IDA)",
        "country_code": "TSA",
        "region": null,
        "income_group": null
    },
    {
        "id": 240,
        "country_name": "撒哈拉以南非洲地区 (IBRD与IDA)",
        "country_code": "TSS",
        "region": null,
        "income_group": null
    },
    {
        "id": 241,
        "country_name": "特立尼达和多巴哥",
        "country_code": "TTO",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 242,
        "country_name": "突尼斯",
        "country_code": "TUN",
        "region": "中东与北非地区（不包括高收入）",
        "income_group": "中低等收入国家"
    },
    {
        "id": 243,
        "country_name": "土耳其",
        "country_code": "TUR",
        "region": "欧洲与中亚地区（不包括高收入）",
        "income_group": "中高等收入国家"
    },
    {
        "id": 244,
        "country_name": "图瓦卢",
        "country_code": "TUV",
        "region": "东亚与太平洋地区（不包括高收入）",
        "income_group": "中高等收入国家"
    },
    {
        "id": 245,
        "country_name": "坦桑尼亚",
        "country_code": "TZA",
        "region": "撒哈拉以南非洲地区（不包括高收入）",
        "income_group": "中低等收入国家"
    },
    {
        "id": 246,
        "country_name": "乌干达",
        "country_code": "UGA",
        "region": "撒哈拉以南非洲地区（不包括高收入）",
        "income_group": "低收入国家"
    },
    {
        "id": 247,
        "country_name": "乌克兰",
        "country_code": "UKR",
        "region": "欧洲与中亚地区（不包括高收入）",
        "income_group": "中低等收入国家"
    },
    {
        "id": 248,
        "country_name": "中高等收入国家",
        "country_code": "UMC",
        "region": null,
        "income_group": null
    },
    {
        "id": 249,
        "country_name": "乌拉圭",
        "country_code": "URY",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 250,
        "country_name": "美国",
        "country_code": "USA",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 251,
        "country_name": "乌兹别克斯坦",
        "country_code": "UZB",
        "region": "欧洲与中亚地区（不包括高收入）",
        "income_group": "中低等收入国家"
    },
    {
        "id": 252,
        "country_name": "圣文森特和格林纳丁斯",
        "country_code": "VCT",
        "region": "拉丁美洲与加勒比海地区（不包括高收入）",
        "income_group": "中高等收入国家"
    },
    {
        "id": 253,
        "country_name": "委内瑞拉玻利瓦尔共和国",
        "country_code": "VEN",
        "region": "拉丁美洲与加勒比海地区（不包括高收入）",
        "income_group": "中高等收入国家"
    },
    {
        "id": 254,
        "country_name": "英�倬S��京群�u",
        "country_code": "VGB",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 255,
        "country_name": "美属维京群岛",
        "country_code": "VIR",
        "region": null,
        "income_group": "高收入国家"
    },
    {
        "id": 256,
        "country_name": "越南",
        "country_code": "VNM",
        "region": "东亚与太平洋地区（不包括高收入）",
        "income_group": "中低等收入国家"
    },
    {
        "id": 257,
        "country_name": "瓦努阿图",
        "country_code": "VUT",
        "region": "东亚与太平洋地区（不包括高收入）",
        "income_group": "中低等收入国家"
    },
    {
        "id": 258,
        "country_name": "世界",
        "country_code": "WLD",
        "region": null,
        "income_group": null
    },
    {
        "id": 259,
        "country_name": "萨摩亚",
        "country_code": "WSM",
        "region": "东亚与太平洋地区（不包括高收入）",
        "income_group": "中高等收入国家"
    },
    {
        "id": 260,
        "country_name": "科索沃",
        "country_code": "XKX",
        "region": "欧洲与中亚地区（不包括高收入）",
        "income_group": "中高等收入国家"
    },
    {
        "id": 261,
        "country_name": "也门共和国",
        "country_code": "YEM",
        "region": "中东与北非地区（不包括高收入）",
        "income_group": "低收入国家"
    },
    {
        "id": 262,
        "country_name": "南非",
        "country_code": "ZAF",
        "region": "撒哈拉以南非洲地区（不包括高收入）",
        "income_group": "中高等收入国家"
    },
    {
        "id": 263,
        "country_name": "赞比亚",
        "country_code": "ZMB",
        "region": "撒哈拉以南非洲地区（不包括高收入）",
        "income_group": "中低等收入国家"
    },
    {
        "id": 264,
        "country_name": "津巴布韦",
        "country_code": "ZWE",
        "region": "撒哈拉以南非洲地区（不包括高收入）",
        "income_group": "中低等收入国家"
    }
];

// comtrade.un.org 的国家选择器数据
let countrys = [
    {
        "id": "all",
        "text": "All"
    },
    {
        "id": "4",
        "text": "Afghanistan"
    },
    {
        "id": "8",
        "text": "Albania"
    },
    {
        "id": "12",
        "text": "Algeria"
    },
    {
        "id": "20",
        "text": "Andorra"
    },
    {
        "id": "24",
        "text": "Angola"
    },
    {
        "id": "660",
        "text": "Anguilla"
    },
    {
        "id": "28",
        "text": "Antigua and Barbuda"
    },
    {
        "id": "32",
        "text": "Argentina"
    },
    {
        "id": "51",
        "text": "Armenia"
    },
    {
        "id": "533",
        "text": "Aruba"
    },
    {
        "id": "36",
        "text": "Australia"
    },
    {
        "id": "40",
        "text": "Austria"
    },
    {
        "id": "31",
        "text": "Azerbaijan"
    },
    {
        "id": "44",
        "text": "Bahamas"
    },
    {
        "id": "48",
        "text": "Bahrain"
    },
    {
        "id": "50",
        "text": "Bangladesh"
    },
    {
        "id": "52",
        "text": "Barbados"
    },
    {
        "id": "112",
        "text": "Belarus"
    },
    {
        "id": "56",
        "text": "Belgium"
    },
    {
        "id": "58",
        "text": "Belgium-Luxembourg"
    },
    {
        "id": "84",
        "text": "Belize"
    },
    {
        "id": "204",
        "text": "Benin"
    },
    {
        "id": "60",
        "text": "Bermuda"
    },
    {
        "id": "64",
        "text": "Bhutan"
    },
    {
        "id": "68",
        "text": "Bolivia (Plurinational State of)"
    },
    {
        "id": "535",
        "text": "Bonaire"
    },
    {
        "id": "70",
        "text": "Bosnia Herzegovina"
    },
    {
        "id": "72",
        "text": "Botswana"
    },
    {
        "id": "92",
        "text": "Br. Virgin Isds"
    },
    {
        "id": "76",
        "text": "Brazil"
    },
    {
        "id": "96",
        "text": "Brunei Darussalam"
    },
    {
        "id": "100",
        "text": "Bulgaria"
    },
    {
        "id": "854",
        "text": "Burkina Faso"
    },
    {
        "id": "108",
        "text": "Burundi"
    },
    {
        "id": "132",
        "text": "Cabo Verde"
    },
    {
        "id": "116",
        "text": "Cambodia"
    },
    {
        "id": "120",
        "text": "Cameroon"
    },
    {
        "id": "124",
        "text": "Canada"
    },
    {
        "id": "136",
        "text": "Cayman Isds"
    },
    {
        "id": "140",
        "text": "Central African Rep."
    },
    {
        "id": "148",
        "text": "Chad"
    },
    {
        "id": "152",
        "text": "Chile"
    },
    {
        "id": "156",
        "text": "China"
    },
    {
        "id": "344",
        "text": "China, Hong Kong SAR"
    },
    {
        "id": "446",
        "text": "China, Macao SAR"
    },
    {
        "id": "170",
        "text": "Colombia"
    },
    {
        "id": "174",
        "text": "Comoros"
    },
    {
        "id": "178",
        "text": "Congo"
    },
    {
        "id": "184",
        "text": "Cook Isds"
    },
    {
        "id": "188",
        "text": "Costa Rica"
    },
    {
        "id": "384",
        "text": "Côte d'Ivoire"
    },
    {
        "id": "191",
        "text": "Croatia"
    },
    {
        "id": "192",
        "text": "Cuba"
    },
    {
        "id": "531",
        "text": "Curaçao"
    },
    {
        "id": "196",
        "text": "Cyprus"
    },
    {
        "id": "203",
        "text": "Czechia"
    },
    {
        "id": "200",
        "text": "Czechoslovakia"
    },
    {
        "id": "408",
        "text": "Dem. People's Rep. of Korea"
    },
    {
        "id": "180",
        "text": "Dem. Rep. of the Congo"
    },
    {
        "id": "208",
        "text": "Denmark"
    },
    {
        "id": "262",
        "text": "Djibouti"
    },
    {
        "id": "212",
        "text": "Dominica"
    },
    {
        "id": "214",
        "text": "Dominican Rep."
    },
    {
        "id": "588",
        "text": "East and West Pakistan"
    },
    {
        "id": "218",
        "text": "Ecuador"
    },
    {
        "id": "818",
        "text": "Egypt"
    },
    {
        "id": "222",
        "text": "El Salvador"
    },
    {
        "id": "226",
        "text": "Equatorial Guinea"
    },
    {
        "id": "232",
        "text": "Eritrea"
    },
    {
        "id": "233",
        "text": "Estonia"
    },
    {
        "id": "231",
        "text": "Ethiopia"
    },
    {
        "id": "97",
        "text": "EU-28"
    },
    {
        "id": "234",
        "text": "Faeroe Isds"
    },
    {
        "id": "238",
        "text": "Falkland Isds (Malvinas)"
    },
    {
        "id": "242",
        "text": "Fiji"
    },
    {
        "id": "246",
        "text": "Finland"
    },
    {
        "id": "886",
        "text": "Fmr Arab Rep. of Yemen"
    },
    {
        "id": "278",
        "text": "Fmr Dem. Rep. of Germany"
    },
    {
        "id": "866",
        "text": "Fmr Dem. Rep. of Vietnam"
    },
    {
        "id": "720",
        "text": "Fmr Dem. Yemen"
    },
    {
        "id": "230",
        "text": "Fmr Ethiopia"
    },
    {
        "id": "280",
        "text": "Fmr Fed. Rep. of Germany"
    },
    {
        "id": "582",
        "text": "Fmr Pacific Isds"
    },
    {
        "id": "590",
        "text": "Fmr Panama, excl.Canal Zone"
    },
    {
        "id": "592",
        "text": "Fmr Panama-Canal-Zone"
    },
    {
        "id": "868",
        "text": "Fmr Rep. of Vietnam"
    },
    {
        "id": "717",
        "text": "Fmr Rhodesia Nyas"
    },
    {
        "id": "736",
        "text": "Fmr Sudan"
    },
    {
        "id": "835",
        "text": "Fmr Tanganyika"
    },
    {
        "id": "810",
        "text": "Fmr USSR"
    },
    {
        "id": "890",
        "text": "Fmr Yugoslavia"
    },
    {
        "id": "836",
        "text": "Fmr Zanzibar and Pemba Isd"
    },
    {
        "id": "251",
        "text": "France"
    },
    {
        "id": "254",
        "text": "French Guiana"
    },
    {
        "id": "258",
        "text": "French Polynesia"
    },
    {
        "id": "583",
        "text": "FS Micronesia"
    },
    {
        "id": "266",
        "text": "Gabon"
    },
    {
        "id": "270",
        "text": "Gambia"
    },
    {
        "id": "268",
        "text": "Georgia"
    },
    {
        "id": "276",
        "text": "Germany"
    },
    {
        "id": "288",
        "text": "Ghana"
    },
    {
        "id": "292",
        "text": "Gibraltar"
    },
    {
        "id": "300",
        "text": "Greece"
    },
    {
        "id": "304",
        "text": "Greenland"
    },
    {
        "id": "308",
        "text": "Grenada"
    },
    {
        "id": "312",
        "text": "Guadeloupe"
    },
    {
        "id": "320",
        "text": "Guatemala"
    },
    {
        "id": "324",
        "text": "Guinea"
    },
    {
        "id": "624",
        "text": "Guinea-Bissau"
    },
    {
        "id": "328",
        "text": "Guyana"
    },
    {
        "id": "332",
        "text": "Haiti"
    },
    {
        "id": "336",
        "text": "Holy See (Vatican City State)"
    },
    {
        "id": "340",
        "text": "Honduras"
    },
    {
        "id": "348",
        "text": "Hungary"
    },
    {
        "id": "352",
        "text": "Iceland"
    },
    {
        "id": "699",
        "text": "India"
    },
    {
        "id": "356",
        "text": "India, excl. Sikkim"
    },
    {
        "id": "360",
        "text": "Indonesia"
    },
    {
        "id": "364",
        "text": "Iran"
    },
    {
        "id": "368",
        "text": "Iraq"
    },
    {
        "id": "372",
        "text": "Ireland"
    },
    {
        "id": "376",
        "text": "Israel"
    },
    {
        "id": "381",
        "text": "Italy"
    },
    {
        "id": "388",
        "text": "Jamaica"
    },
    {
        "id": "392",
        "text": "Japan"
    },
    {
        "id": "400",
        "text": "Jordan"
    },
    {
        "id": "398",
        "text": "Kazakhstan"
    },
    {
        "id": "404",
        "text": "Kenya"
    },
    {
        "id": "296",
        "text": "Kiribati"
    },
    {
        "id": "414",
        "text": "Kuwait"
    },
    {
        "id": "417",
        "text": "Kyrgyzstan"
    },
    {
        "id": "418",
        "text": "Lao People's Dem. Rep."
    },
    {
        "id": "428",
        "text": "Latvia"
    },
    {
        "id": "422",
        "text": "Lebanon"
    },
    {
        "id": "426",
        "text": "Lesotho"
    },
    {
        "id": "430",
        "text": "Liberia"
    },
    {
        "id": "434",
        "text": "Libya"
    },
    {
        "id": "440",
        "text": "Lithuania"
    },
    {
        "id": "442",
        "text": "Luxembourg"
    },
    {
        "id": "450",
        "text": "Madagascar"
    },
    {
        "id": "454",
        "text": "Malawi"
    },
    {
        "id": "458",
        "text": "Malaysia"
    },
    {
        "id": "462",
        "text": "Maldives"
    },
    {
        "id": "466",
        "text": "Mali"
    },
    {
        "id": "470",
        "text": "Malta"
    },
    {
        "id": "584",
        "text": "Marshall Isds"
    },
    {
        "id": "474",
        "text": "Martinique"
    },
    {
        "id": "478",
        "text": "Mauritania"
    },
    {
        "id": "480",
        "text": "Mauritius"
    },
    {
        "id": "175",
        "text": "Mayotte"
    },
    {
        "id": "484",
        "text": "Mexico"
    },
    {
        "id": "496",
        "text": "Mongolia"
    },
    {
        "id": "499",
        "text": "Montenegro"
    },
    {
        "id": "500",
        "text": "Montserrat"
    },
    {
        "id": "504",
        "text": "Morocco"
    },
    {
        "id": "508",
        "text": "Mozambique"
    },
    {
        "id": "104",
        "text": "Myanmar"
    },
    {
        "id": "580",
        "text": "N. Mariana Isds"
    },
    {
        "id": "516",
        "text": "Namibia"
    },
    {
        "id": "524",
        "text": "Nepal"
    },
    {
        "id": "530",
        "text": "Neth. Antilles"
    },
    {
        "id": "532",
        "text": "Neth. Antilles and Aruba"
    },
    {
        "id": "528",
        "text": "Netherlands"
    },
    {
        "id": "540",
        "text": "New Caledonia"
    },
    {
        "id": "554",
        "text": "New Zealand"
    },
    {
        "id": "558",
        "text": "Nicaragua"
    },
    {
        "id": "562",
        "text": "Niger"
    },
    {
        "id": "566",
        "text": "Nigeria"
    },
    {
        "id": "579",
        "text": "Norway"
    },
    {
        "id": "512",
        "text": "Oman"
    },
    {
        "id": "490",
        "text": "Other Asia, nes"
    },
    {
        "id": "586",
        "text": "Pakistan"
    },
    {
        "id": "585",
        "text": "Palau"
    },
    {
        "id": "591",
        "text": "Panama"
    },
    {
        "id": "598",
        "text": "Papua New Guinea"
    },
    {
        "id": "600",
        "text": "Paraguay"
    },
    {
        "id": "459",
        "text": "Peninsula Malaysia"
    },
    {
        "id": "604",
        "text": "Peru"
    },
    {
        "id": "608",
        "text": "Philippines"
    },
    {
        "id": "616",
        "text": "Poland"
    },
    {
        "id": "620",
        "text": "Portugal"
    },
    {
        "id": "634",
        "text": "Qatar"
    },
    {
        "id": "410",
        "text": "Rep. of Korea"
    },
    {
        "id": "498",
        "text": "Rep. of Moldova"
    },
    {
        "id": "638",
        "text": "Réunion"
    },
    {
        "id": "642",
        "text": "Romania"
    },
    {
        "id": "643",
        "text": "Russian Federation"
    },
    {
        "id": "646",
        "text": "Rwanda"
    },
    {
        "id": "647",
        "text": "Ryukyu Isd"
    },
    {
        "id": "461",
        "text": "Sabah"
    },
    {
        "id": "652",
        "text": "Saint Barthelemy"
    },
    {
        "id": "654",
        "text": "Saint Helena"
    },
    {
        "id": "659",
        "text": "Saint Kitts and Nevis"
    },
    {
        "id": "658",
        "text": "Saint Kitts, Nevis and Anguilla"
    },
    {
        "id": "662",
        "text": "Saint Lucia"
    },
    {
        "id": "534",
        "text": "Saint Maarten"
    },
    {
        "id": "666",
        "text": "Saint Pierre and Miquelon"
    },
    {
        "id": "670",
        "text": "Saint Vincent and the Grenadines"
    },
    {
        "id": "882",
        "text": "Samoa"
    },
    {
        "id": "674",
        "text": "San Marino"
    },
    {
        "id": "678",
        "text": "Sao Tome and Principe"
    },
    {
        "id": "457",
        "text": "Sarawak"
    },
    {
        "id": "682",
        "text": "Saudi Arabia"
    },
    {
        "id": "686",
        "text": "Senegal"
    },
    {
        "id": "688",
        "text": "Serbia"
    },
    {
        "id": "891",
        "text": "Serbia and Montenegro"
    },
    {
        "id": "690",
        "text": "Seychelles"
    },
    {
        "id": "694",
        "text": "Sierra Leone"
    },
    {
        "id": "702",
        "text": "Singapore"
    },
    {
        "id": "703",
        "text": "Slovakia"
    },
    {
        "id": "705",
        "text": "Slovenia"
    },
    {
        "id": "711",
        "text": "So. African Customs Union"
    },
    {
        "id": "90",
        "text": "Solomon Isds"
    },
    {
        "id": "706",
        "text": "Somalia"
    },
    {
        "id": "710",
        "text": "South Africa"
    },
    {
        "id": "728",
        "text": "South Sudan"
    },
    {
        "id": "724",
        "text": "Spain"
    },
    {
        "id": "144",
        "text": "Sri Lanka"
    },
    {
        "id": "275",
        "text": "State of Palestine"
    },
    {
        "id": "729",
        "text": "Sudan"
    },
    {
        "id": "740",
        "text": "Suriname"
    },
    {
        "id": "748",
        "text": "Swaziland"
    },
    {
        "id": "752",
        "text": "Sweden"
    },
    {
        "id": "757",
        "text": "Switzerland"
    },
    {
        "id": "760",
        "text": "Syria"
    },
    {
        "id": "762",
        "text": "Tajikistan"
    },
    {
        "id": "807",
        "text": "North Macedonia"
    },
    {
        "id": "764",
        "text": "Thailand"
    },
    {
        "id": "626",
        "text": "Timor-Leste"
    },
    {
        "id": "768",
        "text": "Togo"
    },
    {
        "id": "772",
        "text": "Tokelau"
    },
    {
        "id": "776",
        "text": "Tonga"
    },
    {
        "id": "780",
        "text": "Trinidad and Tobago"
    },
    {
        "id": "788",
        "text": "Tunisia"
    },
    {
        "id": "792",
        "text": "Turkey"
    },
    {
        "id": "795",
        "text": "Turkmenistan"
    },
    {
        "id": "796",
        "text": "Turks and Caicos Isds"
    },
    {
        "id": "798",
        "text": "Tuvalu"
    },
    {
        "id": "800",
        "text": "Uganda"
    },
    {
        "id": "804",
        "text": "Ukraine"
    },
    {
        "id": "784",
        "text": "United Arab Emirates"
    },
    {
        "id": "826",
        "text": "United Kingdom"
    },
    {
        "id": "834",
        "text": "United Rep. of Tanzania"
    },
    {
        "id": "858",
        "text": "Uruguay"
    },
    {
        "id": "850",
        "text": "US Virgin Isds"
    },
    {
        "id": "842",
        "text": "USA"
    },
    {
        "id": "841",
        "text": "USA (before 1981)"
    },
    {
        "id": "860",
        "text": "Uzbekistan"
    },
    {
        "id": "548",
        "text": "Vanuatu"
    },
    {
        "id": "862",
        "text": "Venezuela"
    },
    {
        "id": "704",
        "text": "Viet Nam"
    },
    {
        "id": "876",
        "text": "Wallis and Futuna Isds"
    },
    {
        "id": "887",
        "text": "Yemen"
    },
    {
        "id": "894",
        "text": "Zambia"
    },
    {
        "id": "716",
        "text": "Zimbabwe"
    },
    {
        "id": "975",
        "text": "ASEAN"
    }
]

let get = (country) => countrys.find(it => it.text === country)

let allId = countrys.filter(it => it.id !== 'all').map(it => it.id)

let countryList = ["南非", "印度", "越南", "尼日利亚", "卢旺达", "希腊", "乌克兰", "奥地利", "巴拿马", "匈牙利", "拉脱维亚", "乌兹别克斯坦",
    "阿拉伯埃及共和国", "俄罗斯联邦", "马来西亚", "新加坡", "新西兰", "波兰", "土耳其", "大韩民国", "冈比亚", "纳米比亚", "意大利", "乌拉圭",
    "突尼斯", "以色列", "埃塞俄比亚", "塞尔维亚", "沙特阿拉伯", "阿联酋", "印度尼西亚",]


let yidaiyilu = [
    'South Africa', 'India', 'Viet Nam', 'Nigeria', 'Rwanda', 'Greece', 'Ukraine', 'Austria', 'Panama', 'Hungary', 'Latvia', 'Uzbekistan',
    'Egypt', 'Russian Federation', 'Malaysia', 'Singapore', 'New Zealand', 'Poland', 'Turkey', 'Rep. of Korea', 'Gambia', 'Namibia', 'Italy', 'Uruguay',
    'Tunisia', 'Israel', 'Ethiopia', 'Serbia', 'Saudi Arabia', 'United Arab Emirates', 'Indonesia'
]

let yidaiyiluIds = countrys.filter(it => yidaiyilu.includes(it.text)).map(it => it.id)

let findByCode  = (code)=>{
    return country_dir.find(it=>it.country_code === code)
}

module.exports = {
    countrys,
    get,
    allId,
    yidaiyiluIds,
    yidaiyilu,
    findByCode,
    countryList
}