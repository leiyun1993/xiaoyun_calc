"use strict";
/**
 * 生成随机整数
 * @param {*} max 
 */
const ranInt = function (max) {
    return Math.floor(Math.random() * 5) + 1;
}

/**
 * 比较
 * @param {*} max 
 */
export const compareFunc = function (max) {

    let arg1 = ranInt(max);
    let arg2 = ranInt(max);
    let result = "";
    if (arg1 > arg2) {
        result = ">";
    } else if (arg1 < arg2) {
        result = "<";
    } else {
        result = "=";
    }

    return {
        arg1: arg1,
        arg2: arg2,
        result: result,
        formula: `${arg1} ◯ ${arg2}`
    }
}


/**
 * 加法
 */
export const addFunc = function (max) {
    let arg1 = ranInt(max);
    let arg2 = ranInt(max);
    
    if(arg1 + arg2>max){
        return addFunc(max);
    }
    return {
        arg1: arg1,
        arg2: arg2,
        result: arg1 + arg2,
        formula: `${arg1} + ${arg2} = `
    }
}



/**
 * 获取列表json
 * @param {*} list 
 */
export const getJsonList = function (list) {
    let h = 3508 - 420 - 400;
    let itemH = h / Math.floor(list.length / 5);
    let itemW = 496;
    let jsonList = [];
    list.forEach((item, index) => {
        let col = index % 5;
        let row = Math.floor(index / 5);
        let itemJson = {
            type: 'text',
            text: item.formula,
            css: {
                top: `${itemH*row+500}px`,
                left: `${itemW*col+66}px`,
                width: `${itemW}px`,
                height: "66px",
                color: "#333333",
                fontSize: "66px",
                textAlign: 'left',
            }
        };
        jsonList.push(itemJson);
    })
    return jsonList;
}