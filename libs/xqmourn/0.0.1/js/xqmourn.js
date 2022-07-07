/*
 * @Author: fegq
 * @Date: 2021-11-28 11:48:04
 * @LastEditors: fegq
 * @LastEditTime: 2021-12-13 10:03:32
 * @Description: This is a mourn js!
 * @Version: 0.0.1
 */
(function xqMourn () {
    let now = new Date();
    let mouth = now.getMonth()+1;
    let day = now.getDate();
    let date = mouth.toString()+'.'+day.toString();
    let mourns = ['12.13', '7.7', 'all'];

    // 南京大屠杀国家公祭日
    if (mourns.includes(date) ||
    mourns.includes('all')) {
        document.documentElement.style = 'filter: gray; filter: grayscale(1)';
    } else {
        document.documentElement.style = '';
    }
})();