// ==UserScript==
// @name         盒带教务系统登录
// @namespace    http://tampermonkey.net/
// @version      1.0
// @author       MetaQiu
// @match        https://v.hbu.cn/http/77726476706e69737468656265737421eaff4b8b69386a45300b87/login
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    //usr 学号
    //pwd 密码
    let user=''
    let pwd=''
    document.querySelector("#username").value=user;
    document.querySelector("#password").value=pwd;
    document.querySelector("#cas").submit();

})();