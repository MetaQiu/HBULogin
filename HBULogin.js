// ==UserScript==
// @author       MetaQiu
// @name         盒带自动登录
// @namespace    http://metaqiu.art/
// @version      1.1
// @description  盒带教务系统自动登录
// @match        *://v.hbu.cn/*
// ==/UserScript==

(function() {
    'use strict';
    //usr 学号
    //pwd 密码
    let user=''
    let pwd=''
    let url = window.location.href
    let webvpn = /v.hbu.cn.login/
    let URP =/v.hbu.cn.http.77726476706e69737468656265737421eaff4b8b69386a45300b87.login/
    if (webvpn.test(url)) {
    (function() {
    document.querySelector('div.el-input.password-input').innerHTML="\n <input autocomplete=\"off\" placeholder=\"密码\" type=\"password\" name=\"password\" id=\"password\">\n"
    document.querySelector("#user_name").value=user;
    document.querySelector("#password").value=pwd;
    document.querySelector("#login").click();
     })();
    }else if(URP.test(url)) {
    (function() {
    document.querySelector("#username").value=user;
    document.querySelector("#password").value=pwd;
    document.querySelector("#cas").submit();
    })();
    }

})();
