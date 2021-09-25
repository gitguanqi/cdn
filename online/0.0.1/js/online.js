/*
 * @Author: fegq
 * @Date: 2021-09-25 12:06:33
 * @LastEditors: fegq
 * @LastEditTime: 2021-09-25 12:07:39
 * @Description: This is a check online status!
 * @Version: 0.0.1
 */

handleNetWork();
window.addEventListener('online', function (e) {
    handleNetWork(true);
}, false);
window.addEventListener('offline', function (e) {
    handleNetWork(false);
}, false);

function handleNetWork(status) {
    let onlineDiv = document.createElement('div');
    onlineDiv.className = 'online';
    onlineDiv.innerHTML = '<p><i class="fa fa-wifi"></i> 对不起，你的网络已断开，请点击<a href="">重新刷新</a>试试看！</p>';
    let bodyFirst = document.body.firstChild;
    let onlineElem = document.querySelector('.online');
    if (onlineElem == null) {
        document.body.insertBefore(onlineDiv, bodyFirst);
    }
    let onlineBox = document.querySelector('.online');
    let online = status ? status : navigator.onLine;
    onlineBox.className = online ? 'online' : 'online active';
}