// TOGGLE TRIANGLE
function myFunction() {
    let triangleLoginStatus = localStorage.getItem("loginStatus");
	if(triangleLoginStatus =="LOGGED_IN"){
		var x = document.getElementById("triangle");
		if (x.style.display === "none") {
			x.style.display = "block";
		} else {
			x.style.display = "none";
		}
	}
}

// TOGGLE MENU
$(function () {
	var b = $(".toggle-btn");
	var w = $("#collapsemenu");
	var l = $(".wrapper");

	let loginCondition = localStorage.getItem("loginStatus");
	if (loginCondition == "LOGGED_IN") {
		w.height(l.outerHeight(true));
	}

	b.click(function () {
		let toggleBtnLoginStatus = localStorage.getItem("loginStatus");
		if(toggleBtnLoginStatus !="LOGGED_IN"){
			$('#loginRequired').modal('show');
		}else{
			if (w.hasClass("open")) {
				w.removeClass("open");
				w.height(0);
			} else {
				w.addClass("open");
				w.height(l.outerHeight(true));
			}
		}
		
	});
});

function setAccountTab() {
    localStorage.setItem("manageTabVisibility", "showAccount");
    window.location.href = "main.html";
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