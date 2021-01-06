

// /* 开发环境  start -----------------------------------------------------------------------*/
// /* 内网  start =============*/
const dev_inner = {
    comminIp: "http://10.1.28.201:6001", // 公共ip
    comminFileIp: "http://10.1.28.55:2810", // 文件ip
}
// /* 外网  start =============*/
const dev_outer = {
    comminIp: "https://mall-dev.botu.com", // 公共ip
    comminFileIp: "http://app-web.botu.com:2810", // 文件ip
}
// /* 开发环境  end */


/* 测试环境  start -----------------------------------------------------------------------*/
/* 内网  start =============*/
const test_inner = {
    comminIp: "http://10.1.24.143:6001", // 公共ip
    comminFileIp: "http://10.1.28.55:2810", // 文件ip
}
/* 外网  start =============*/
const test_outer = {
    comminIp: "https://mall-test.botu.com", // 公共ip
    comminFileIp: "http://app-web.botu.com:2810", // 文件ip
}
/* 测试环境  end */



// /* 预发布环境  start -----------------------------------------------------------------------*/
// /* 内网  start =============*/
const pre_production_inner = {
    comminIp: "http://10.1.28.218:6001", // 公共ip
    comminFileIp: "http://10.1.24.186:2820", // 文件ip

}
// /* 外网  start =============*/
const pre_production_outer = {
    comminIp: "https://mall-uat.botu.com", // 公共ip
    comminFileIp: "http://app-web.botu.com:2820", // 文件ip
}
// /* 预发布环境  end */


// /* 正式环境  start -----------------------------------------------------------------------*/
// /* 内网  start =============*/
const production_inner = {
    comminIp: "http://10.1.24.15:6001", // 公共ip
    comminFileIp: "http://10.1.24.186:2820", // 文件ip
}
// /* 外网  start =============*/
const production_outer = {
    comminIp: "https://mall.botu.com", // 公共ip
    comminFileIp: "http://app-web.botu.com:2820", // 文件ip
}
// /* 正式环境  end */



// /* 特殊处理  start -----------------------------------------------------------------------*/
/* 内网  start =============*/
const special_inner = {
    comminIp: "http://10.1.28.198:41000", // 行政区域

}
/* 内网  end */
/* 外网  start =============*/
const special_outer = {
    comminIp: "https://area.botu.com", // 行政区域
}
/* 特殊处理  end */



// 开发环境 内网   dev_inner
// 开发环境 外网   dev_outer

// 测试环境 内网   test_inner
// 测试环境 外网   test_outer


// 预发布环境 内网   pre_production_inner
// 预发布环境 外网   pre_production_outer


// 正式环境 内网   production_inner
// 正式环境 外网   production_outer


// 特殊处理 内网   special_inner
// 特殊处理 外网   special_outer

// 公共
const BASE_IP = {
    ...dev_inner
}

const special_IP = {
    ...special_inner
}


export const baseIp = BASE_IP.comminIp
export const basePort = ''