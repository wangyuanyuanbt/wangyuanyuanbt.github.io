/*
 * action 类型
 */

export const COUNT = 'COUNT';
/*
 * 初始值
 */

export const config = {
    count: 500
};


/*
 * action 创建函数
 */

export function setCount(value) {
    return { type: COUNT, value }
}