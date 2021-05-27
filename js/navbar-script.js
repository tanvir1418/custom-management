// TOGGLE TRIANGLE
function myFunction() {
    var x = document.getElementById("triangle");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// TOGGLE MENU
$(function () {
    var b = $(".toggle-btn");
    var w = $("#collapsemenu");
    var l = $(".wrapper");

    w.height(l.outerHeight(true));

    b.click(function () {
        if (w.hasClass("open")) {
            w.removeClass("open");
            w.height(0);
        } else {
            w.addClass("open");
            w.height(l.outerHeight(true));
        }
    });
});

// MAIN TAB START
// $(".content .tab_content").hide();
// $(".content .tab_content:nth-child(2)").show();

$("#tabs_ul li").click(function () {
    $("#tabs_ul li").removeClass("active");
    $(this).addClass("active");

    var current_tab = $(this).attr("data-list");
    $(".content .tab_content").hide();
    $("." + current_tab).show();
});

var ul = document.getElementById("tabs_ul");
var li_tabs = ul.getElementsByTagName("li");
for (var i = 0; i < li_tabs.length; i++) {
    li_tabs[i].addEventListener("click", function () {
        var current = ul.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", "");
        this.className += "active";

        var current_tab_value = this.getAttribute("data-list");
    });
}
// MAIN TAB END
//   On click Tab Set the active tab and content 
function setAccountTab() {
    localStorage.setItem("manageTabVisibility", "showAccount");
    window.location.href = "main.html";
}

function setDataTab() {
    let loginCondition = localStorage.getItem("loginStatus");
    if (loginCondition == "LOGGED_IN") {
        localStorage.setItem("manageTabVisibility", "showData");
        window.location.href = "main.html";
    } else {
        localStorage.setItem("manageTabVisibility", "showAccount");
        window.location.href = "main.html";
    }
}

function setTemplateTab() {
    let loginCondition = localStorage.getItem("loginStatus");
    if (loginCondition == "LOGGED_IN") {
        localStorage.setItem("manageTabVisibility", "showTemplate");
        window.location.href = "main.html";
    } else {
        localStorage.setItem("manageTabVisibility", "showAccount");
        window.location.href = "main.html";
    }
}

function setResultTab() {
    let loginCondition = localStorage.getItem("loginStatus");
    if (loginCondition == "LOGGED_IN") {
        localStorage.setItem("manageTabVisibility", "showResult");
        window.location.href = "main.html";
    } else {
        localStorage.setItem("manageTabVisibility", "showAccount");
        window.location.href = "main.html";
    }
}

function setAlertTab() {
    let loginCondition = localStorage.getItem("loginStatus");
    if (loginCondition == "LOGGED_IN") {
        localStorage.setItem("manageTabVisibility", "showAlert");
        window.location.href = "main.html";
    } else {
        localStorage.setItem("manageTabVisibility", "showAccount");
        window.location.href = "main.html";
    }
}

function checkMailIcon() {
    let loginCondition = localStorage.getItem("loginStatus");
    if (loginCondition == "LOGGED_IN") {
        window.location.href = "email.html";
    } else {
        $('#loginRequired').modal('show');
    }
}

function linkTermsConditions() {
    let loginCondition = localStorage.getItem("loginStatus");
    if (loginCondition == "LOGGED_IN") {
        window.location.href = "terms.html";
    } else {
        $('#loginRequired').modal('show');
    }
}

function linkAllServices() {
    let loginCondition = localStorage.getItem("loginStatus");
    if (loginCondition == "LOGGED_IN") {
        window.location.href = "allservices.html";
    } else {
        $('#loginRequired').modal('show');
    }
}

function linkPolicy() {
    let loginCondition = localStorage.getItem("loginStatus");
    if (loginCondition == "LOGGED_IN") {
        window.location.href = "policy.html";
    } else {
        $('#loginRequired').modal('show');
    }
}

function loggingOut() {
    // let loginCondition = localStorage.setItem("loginStatus", "");
    localStorage.removeItem('loginStatus');
    window.location.href = "index.html";
}

function gotoSystemStatus() {
    localStorage.setItem("emailTabShowing", "systemStatus");
    window.location.href = "email.html";
}

function gotoContactStatus() {
    localStorage.setItem("emailTabShowing", "contactStatus");
    window.location.href = "email.html";
}