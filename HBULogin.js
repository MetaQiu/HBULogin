// ==UserScript==
// @author       MetaQiu
// @name         盒带自动登录
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  盒带WebVpn自动登录 鸡肋的小插件
// @match        https://v.hbu.cn/login
// ==/UserScript==

(function() {
    'use strict';
    //usr 学号
    //pwd 密码
    let user=''
    let pwd=''
    document.querySelector('div.el-input.password-input').innerHTML="\n <input autocomplete=\"off\" placeholder=\"密码\" type=\"password\" name=\"password\" id=\"password\">\n"
    document.querySelector("#user_name").value=user;
    document.querySelector("#password").value=pwd;
    document.querySelector("#login").click();

})();
