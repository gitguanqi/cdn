/**
 * author: fegq
 * name: xqloading
 * version: 0.0.1
 * create: 2021-12-01
 * update: 2021-12-01
 * @param {*} icon 图标 fa fa-
 */
function xqLoading(icon) {
  let loading = document.createElement("div");
  loading.className = "loading";
  let content =
    '<div class="loading-inner">' +
    '<span class="loading-circle"></span>' +
    '<i class="fa fa-' +
    icon +
    '"></i>' +
    "</div>";
  loading.innerHTML = content;
  document.body.appendChild(loading);
}

window.onload = function () {
  document.querySelector(".loading").className = "loading active";
};
