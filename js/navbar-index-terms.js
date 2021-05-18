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

    w.height(0);

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

// $("#tabs_ul li").click(function () {
//     $("#tabs_ul li").removeClass("active");
//     $(this).addClass("active");

//     var current_tab = $(this).attr("data-list");
//     $(".content .tab_content").hide();
//     $("." + current_tab).show();
// });

// var ul = document.getElementById("tabs_ul");
// var li_tabs = ul.getElementsByTagName("li");
// for (var i = 0; i < li_tabs.length; i++) {
//     li_tabs[i].addEventListener("click", function () {
//         var current = ul.getElementsByClassName("active");
//         current[0].className = current[0].className.replace("active", "");
//         this.className += "active";

//         var current_tab_value = this.getAttribute("data-list");
//     });
// }
// MAIN TAB END

function setAccountTab() {
    localStorage.setItem("manageTabVisibility", "showAccount");
    window.location.href = "/main.html";
}

function checkMailIcon() {
    let loginCondition = localStorage.getItem("loginStatus");
    if (loginCondition == "LOGGED_IN") {
        window.location.href = "/email.html";
    } else {
        $('#loginRequired').modal('show');
    }
}

function linkTermsConditions() {
    let loginCondition = localStorage.getItem("loginStatus");
    if (loginCondition == "LOGGED_IN") {
        window.location.href = "/terms.html";
    } else {
        $('#loginRequired').modal('show');
    }
}

function linkAllServices() {
    let loginCondition = localStorage.getItem("loginStatus");
    if (loginCondition == "LOGGED_IN") {
        window.location.href = "/allservices.html";
    } else {
        $('#loginRequired').modal('show');
    }
}

function linkPolicy() {
    let loginCondition = localStorage.getItem("loginStatus");
    if (loginCondition == "LOGGED_IN") {
        window.location.href = "/policy.html";
    } else {
        $('#loginRequired').modal('show');
    }
}

// Show hide Password Field Icon and text (Manage Account)
$(".toggle-password").click(function () {
    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
        input.attr("type", "text");
    } else {
        input.attr("type", "password");
    }
});