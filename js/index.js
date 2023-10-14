"use strict";
var _lhref = window.location.href,
    checkurl = _lhref.indexOf("'") > -1 || _lhref.indexOf("<") > -1 || _lhref.indexOf(">") > -1 || _lhref.indexOf('"') > -1;

function getCurrentLanguage() {
    var e = window.location.href.split("/");
    return -1 !== ["fr", "de", "es"].indexOf(e[3]) ? e[3] : "en";
}

function createCookie(e, t) {
    var n = document.cookie.indexOf(e) >= 0,
        o = document.referrer;
    if (!n && o) {
        var s = new Date;
        s.setTime(s.getTime() + 2592e6);
        var i = "; expires=" + s.toUTCString() + "; domain=.zoho.com; path=/";
        document.cookie = e + "=" + encodeURIComponent(o) + i, document.cookie = t + "=" + encodeURIComponent(location.href) + i;
    }
}

function showUserInfo() {
    var e = window.zohouser.DISPLAY_NAME,
        t = getHostNameForURL();
    if (e) {
        var n = getCurrentLanguage();
        e = decodeHexString(e);
        $(".signin").css("display", "none");
        $(".signup").css("display", "none");
        $(".signup-box").html('<div style="text-align: center"><h3 class="signup-header">Ha iniciado sesión</h3><a class="btn logged-in" href="https://expense.' + t + '/home">Comience ahora</a></div>');
        $(".ze-access").html("Acceso a Zoho Expense");
        $(".ze-access").attr("href", "https://expense." + t + "/home");
        
        if (n === "fr") {
            $(".ZE-form").html('<div style="text-align: center"><a class="btn btn-primary" href="https://expense.' + t + '/home">ACCEDER A Zoho Expense</a></div>');
            $(".ze-access").html("ACCEDER A Zoho Expense");
            $(".signing .goto-link").html("ACCEDER A Zoho Expense");
        } else if (n === "de") {
            $(".ZE-form").html('<div style="text-align: center"><a class="btn btn-primary" href="https://expense.' + t + '/home">ACCEDER A Zoho Expense</a></div>');
            $(".ze-access").html("ACCEDER A Zoho Expense");
            $(".signing .goto-link").html("ACCEDER A Zoho Expense");
        } else if (n === "es") {
            $(".ZE-form").html('<div style="text-align: center"><a class="btn btn-primary" href="https://expense.' + t + '/home">ACCEDER A Zoho Expense</a></div>');
            $(".ze-access").html("ACCEDER A Zoho Expense");
            $(".signing .goto-link").html("ACCEDER A Zoho Expense");
        }
    }
}

function isUserLoggedIn() {
    return !!(window.zohouser || {}).DISPLAY_NAME;
}

function decodeHexString(e) {
    return e = (e = e.replace(/\\x([0-9A-Fa-f]{2})/g, function() {
        return String.fromCharCode(parseInt(arguments[1], 16));
    })).replace(/\\u([\d\w]{4})/gi, function() {
        return String.fromCharCode(parseInt(arguments[1], 16));
    });
}

function getHostNameForURL() {
    var e = window.location.hostname;
    return e = e.replace("www.", "");
}

function setSelectedTab(e) {
    $("." + e + " > a").addClass("selected");
}

function setSelectedFeature(e) {
    $("#" + e).addClass("selected");
}

checkurl && (window.location = _lhref.replace(/'/g, "%27").replace(/"/g, "%22").replace(/</g, "%3C").replace(/>/g, "%3E"));
$(document).ready(function() {
    var e = document.createElement("script"),
        t = getHostNameForURL();
    e.src = "https://accounts." + t + "/u/info";
    e.onload = showUserInfo;
    document.getElementsByTagName("head")[0].appendChild(e);
    var n = document.querySelector("#footer-terms > a");
    n && (n.href = "/expense/terms.html");
});

var isMouseOnList = false;

function selectListAction() {
    var e = $(".edition-select-list");
    e.hasClass("open") ? hideSelectList() : (e.addClass("open"), $("#zb-edition").focus(), e.css("display", "inherit"), $("#select-caret").addClass("open-caret"));
}

function hideSelectList(e) {
    isMouseOnList || ((e = $(".edition-select-list")).removeClass("open"), e.css("display", "none"), $("#select-caret").removeClass("open-caret"));
}

$(".edition-select-list").mouseover(function() {
    isMouseOnList = true;
});

$(".edition-select-list").mouseout(function() {
    isMouseOnList = false;
});

document.getElementById('fyear').innerHTML = new Date().getFullYear() + '';
