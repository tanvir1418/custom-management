// document.addEventListener('keydown', function() {
//   if (event.keyCode == 123) {
//     // alert("This function has been disabled to prevent you from stealing my code!");
//     return false;
//   } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
//     // alert("This function has been disabled to prevent you from stealing my code!");
//     return false;
//   } else if (event.ctrlKey && event.keyCode == 85) {
//     // alert("This function has been disabled to prevent you from stealing my code!");
//     return false;
//   }
// }, false);

// if (document.addEventListener) {
//   document.addEventListener('contextmenu', function(e) {
//     // alert("This function has been disabled to prevent you from stealing my code!");
//     e.preventDefault();
//   }, false);
// } else {
//   document.attachEvent('oncontextmenu', function() {
//     // alert("This function has been disabled to prevent you from stealing my code!");
//     window.event.returnValue = false;
//   });
// }

// document.onkeydown = function (e) {
//   if (e.ctrlKey &&
//     (e.keyCode === 67 ||
//       e.keyCode === 86 ||
//       e.keyCode === 85 ||
//       e.keyCode === 117)) {
//     return false;
//   }
//    else {
//     return true;
//   }
// };
// //////////////////===========================================================

// Global file for this Site
var deleteListClassName = "";
var manageResultDeleteListClassName = "";

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

// MAIN TAB START
// $(".content .tab_content").hide();
// $(".content .tab_content:nth-child(2)").show();

$("#tabs_ul li").click(function () {
	let loginStat = localStorage.getItem("loginStatus");
	if (loginStat == "LOGGED_IN") {
		$("#tabs_ul li").removeClass("active");
		$(this).addClass("active");

		var current_tab = $(this).attr("data-list");
		$(".content .tab_content").hide();
		$("." + current_tab).show();
	}
});

var ul = document.getElementById("tabs_ul");
var li_tabs = ul.getElementsByTagName("li");
for (var i = 0; i < li_tabs.length; i++) {
	li_tabs[i].addEventListener("click", function () {

		let loginStatus = localStorage.getItem("loginStatus");
		if (loginStatus == "LOGGED_IN") {
			var current = ul.getElementsByClassName("active");
			current[0].className = current[0].className.replace("active", "");
			this.className += "active";

			var current_tab_value = this.getAttribute("data-list");
			//console.log(current_tab_value);
			if (current_tab_value == "tab_1" || current_tab_value == "tab_2" || current_tab_value == "tab_3" || current_tab_value == "tab_5") {
				
				hideStyleOneAllPopup();
				hideStyleTwoAllPopup();

				$("#col8Filter").css("display", "none");

				// const rotateIcon = document.querySelectorAll(
				// 	"#Main .outer-table-style12-box i.fa-caret-down.down-animation-icon"
				// );
				const rotateIcon = document.querySelectorAll(".outer-table-style12-box i.fa-caret-down.down-animation-icon");
				for (let i = 0; i < rotateIcon.length; i++) {
					$(rotateIcon[i]).removeClass("down-animation-icon");
				}
			}
			if (current_tab_value == "tab_1") {
				$("#dropBtnModal").css('display', 'none');

				$("#account_form_loading").css('display', 'block');
				$("#account_form_content").css('display', 'none');

				setTimeout(() => {
					$("#account_form_loading").css('display', 'none');
					$("#account_form_content").css('display', 'block');
				}, 2000);

			}
			if (current_tab_value == "tab_2") {
				$(".content .tab_2 .option_box").addClass("box-loading-animation");
				setTimeout(() => {
					$(".content .tab_2 .box-loading-animation").removeClass("box-loading-animation");
				}, 2000);
			}
			if (current_tab_value == "tab_3") {
				$("#dropBtnModal").css('display', 'none');
				$(".content .tab_3 .template_box").addClass("mnTemp-box-loading-animation");
				setTimeout(() => {
					$(".content .tab_3 .mnTemp-box-loading-animation").removeClass("mnTemp-box-loading-animation");
				}, 2000);
			}
			if (current_tab_value == "tab_4") {
				$("#dropBtnModal").css('display', 'none');
				$(".content").addClass("sfsf");

				$("#mnRes_list_item_loading").css("display", "block");
				$("#mnRes_scrollWindow").css("display", "none");
				
				setTimeout(() => {
					$("#mnRes_list_item_loading").css("display", "none");
					$("#mnRes_scrollWindow").css("display", "block");
				}, 2000);

			}
			if (current_tab_value != "tab_4") {
				$(".content").removeClass("sfsf");
			}
			if (current_tab_value == "tab_5") {
				$("#dropBtnModal").css('display', 'none');
				$(".content").addClass("tvtv");
				makeTableHeadAlert("manage-alert-table-exist");
				alertTableExist("manage-alert-table-exist", 7, "pagination-manage-alert", "manage_alert_data_table", "manage_alert_loading_table", "pagination_mnAlert", "loading_pagination_mnAlert");
				alertTableHeadClick("manage-alert-table-exist");
			}
			if (current_tab_value != "tab_5") {
				$(".content").removeClass("tvtv");
			}
		} else {
			$('#loginRequired').modal('show');
		}

	});
}
// MAIN TAB END

// CHOOSE OPTION SECTION START
function openOption(evt, optionName) {
	let loginStatus = localStorage.getItem("loginStatus");
	let targetContentBox = document.querySelector(`#${optionName}_box`).classList.value;
	if (loginStatus == "LOGGED_IN") {
		if (!targetContentBox.includes("box-loading-animation")) {
			var i, tabcontent, tablinks;
			tabcontent = document.getElementsByClassName("option");
			for (i = 0; i < tabcontent.length; i++) {
				tabcontent[i].style.display = "none";
			}
			tablinks = document.getElementsByClassName("option_box");
			for (i = 0; i < tablinks.length; i++) {
				tablinks[i].className = tablinks[i].className.replace(" active", "");
			}
			document.getElementById(optionName).style.display = "block";
			document.getElementById("hide559").style.display = "none";
			document.getElementById("tab_2").style.paddingTop = "0px";
			document.getElementById("opt-content").style.marginTop = "0px";
			evt.currentTarget.className += " active";

			if (optionName == "option_2") {
				$("#item_loading_op2").css("display", "block");
				$(".scrollable-list-op2").css("display", "none");
				$(".myscrollbtn-op2").css("display", "none");
				
				setTimeout(() => {
					$("#item_loading_op2").css("display", "none");
					$(".scrollable-list-op2").css("display", "block");
					$(".myscrollbtn-op2").css("display", "block");
				  }, 2000);
			}
			if(optionName == "option_3"){
				$("#op3_dataTable_wrap").css("display", "none");
				$("#op3_table_loading").css("display", "block");
				
				setTimeout(() => {
					$("#op3_dataTable_wrap").css("display", "block");
					$("#op3_table_loading").css("display", "none");
				  }, 2000);
			}
			if(optionName == "option_4"){
				$("#op4_belowBtn_container input").val("");
				$("#op4_belowBtn_container .option4-below-control-input").removeClass("border-red");
				$("#op4_belowBtn_container .error-message").remove();
			}
		}
	} else {
		$('#loginRequired').modal('show');
	}
}
// CHOOSE OPTION SECTION END

// BACK BTN
$("#back-manage").click(function (event) {
	event.preventDefault();
	$('body').addClass("disable-pointer");

	let initState = $(this).html();
	$(this).html('<i class="fa fa-spinner fa-spin"></i> Back');
	$(this).prop("disabled", true);
	let $this = $(this);

	setTimeout(function() {
		$('body').removeClass("disable-pointer");
		$this.prop("disabled", false);
		$this.html(initState);

		document.getElementById("option_1").style.display = "none";
		document.getElementById("hide559").style.display = "block";
		document.getElementById("tab_2").style.paddingTop = "60px";
		document.getElementById("opt-content").style.marginTop = "50px";
	}, 2000);
});

// Back Btn: Return to Select A Data Type To Manage 
function backToSelectDataType(backThis){
	$('body').addClass("disable-pointer");
	let initState = $(backThis).html();
	$(backThis).html('<i class="fa fa-spinner fa-spin"></i> Back');
	$(backThis).prop("disabled", true);
	let $this = $(backThis);
	setTimeout(function() {
		$('body').removeClass("disable-pointer");
		$this.prop("disabled", false);
		$this.html(initState);

		document.getElementById("option_1").style.display = "none";
		document.getElementById("option_2").style.display = "none";
		document.getElementById("option_3").style.display = "none";
		document.getElementById("option_4").style.display = "none";
		document.getElementById("option_5").style.display = "none";
		document.getElementById("hide559").style.display = "block";
		document.getElementById("tab_2").style.paddingTop = "60px";
		document.getElementById("opt-content").style.marginTop = "50px";
	}, 2000);
}

// CREATE & MANAGE TAB START

// for option 1

$(".tab-39").click(function () {
	$(".mytab-39").removeClass("tab-active-39");
	
	$("#dropBtnModal").css('display', 'none');

	let dataId = $(this).attr("data-id");
	if (dataId == "tab40") {
		makeTableHead("man-data-opt1-exist");
		manDtOpt1Exist("man-data-opt1-exist", 7, "pagination-op1-data", `tabChangeOpt1(this)`, "mnData-opt1-dataWrapper", "mnData-opt1-loadingWrapper", "pagination_mnDataOp1", "loading_pagination_mnDataOp1", "table_details_op1");
		ExistTableHeadClick("man-data-opt1-exist", "mnData-opt1-dataWrapper", "mnData-opt1-loadingWrapper", "pagination_mnDataOp1", "loading_pagination_mnDataOp1", "table_details_op1");
	}

	$(".mytab-39[data-id='" + $(this).attr("data-id") + "']").addClass("tab-active-39");

	$(".tab-39").removeClass("active-39");
	$(this).parent().find(".tab-39").addClass("active-39");
});


$("#my567").addClass("createGreen");

$(".zas").click(function () {
	$("#my567").addClass("createGreen");
	$("#my998").removeClass("manageGreen");
});

$(".pas").click(function () {
	$("#my998").addClass("manageGreen");
	$("#my567").removeClass("createGreen");
});

// for option three
$(".tab-43").click(function () {
	$(".mytab-43").removeClass("tab-active-43");

	$("#dropBtnModal").css('display', 'none');

	let dataId = $(this).attr("data-id");
	if (dataId == "tab44") {
		makeTableHead("man-data-opt3-exist");
		manDtOpt1Exist("man-data-opt3-exist", 7, "pagination-op3-data", `tabChangeOpt3(this)`, "mnData-opt3-dataWrapper", "mnData-opt3-loadingWrapper", "pagination_mnDataOp3", "loading_pagination_mnDataOp3", "table_details_op3");
		ExistTableHeadClick("man-data-opt3-exist", "mnData-opt3-dataWrapper", "mnData-opt3-loadingWrapper", "pagination_mnDataOp3", "loading_pagination_mnDataOp3", "table_details_op3");
	}

	$(".mytab-43[data-id='" + $(this).attr("data-id") + "']").addClass(
		"tab-active-43"
	);
	$(".tab-43").removeClass("active-43");
	$(this).parent().find(".tab-43").addClass("active-43");
});


$("#my745").addClass("createGreen");

$(".zas43").click(function () {
	$("#my745").addClass("createGreen");
	$("#my746").removeClass("manageGreen");
});

$(".pas43").click(function () {
	$("#my746").addClass("manageGreen");
	$("#my745").removeClass("createGreen");
});

// for option four

$(".tab-45").click(function () {
	$(".mytab-45").removeClass("tab-active-45");

	$("#dropBtnModal").css('display', 'none');

	let dataId = $(this).attr("data-id");
	if (dataId == "tab46") {
		makeTableHead("man-data-opt4-exist");
		manDtOpt1Exist("man-data-opt4-exist", 7, "pagination-op4-data", `tabChangeOpt4(this)`, "mnData-opt4-dataWrapper", "mnData-opt4-loadingWrapper", "pagination_mnDataOp4", "loading_pagination_mnDataOp4", "table_details_op4");
		ExistTableHeadClick("man-data-opt4-exist", "mnData-opt4-dataWrapper", "mnData-opt4-loadingWrapper", "pagination_mnDataOp4", "loading_pagination_mnDataOp4", "table_details_op4");
	}

	$(".mytab-45[data-id='" + $(this).attr("data-id") + "']").addClass(
		"tab-active-45"
	);
	$(".tab-45").removeClass("active-45");
	$(this).parent().find(".tab-45").addClass("active-45");
});


$("#my444").addClass("createGreen");

$(".zas45").click(function () {
	$("#my444").addClass("createGreen");
	$("#my445").removeClass("manageGreen");
});

$(".pas45").click(function () {
	$("#my445").addClass("manageGreen");
	$("#my444").removeClass("createGreen");
});

// for option five
$(".tab-41").click(function () {
	$(".mytab-41").removeClass("tab-active-41");

	$("#dropBtnModal").css('display', 'none');

	let dataId = $(this).attr("data-id");
	if (dataId == "tab42") {
		makeTableHead("man-data-opt5-exist");
		manDtOpt1Exist("man-data-opt5-exist", 7, "pagination-op5-data", `tabChangeOpt5(this)`, "mnData-opt5-dataWrapper", "mnData-opt5-loadingWrapper", "pagination_mnDataOp5", "loading_pagination_mnDataOp5", "table_details_op5");
		ExistTableHeadClick("man-data-opt5-exist", "mnData-opt5-dataWrapper", "mnData-opt5-loadingWrapper", "pagination_mnDataOp5", "loading_pagination_mnDataOp5", "table_details_op5");
	}

	$(".mytab-41[data-id='" + $(this).attr("data-id") + "']").addClass(
		"tab-active-41"
	);
	$(".tab-41").removeClass("active-41");
	$(this).parent().find(".tab-41").addClass("active-41");
});


$("#my399").addClass("createGreen");

$(".zas41").click(function () {
	$("#my399").addClass("createGreen");
	$("#my993").removeClass("manageGreen");
});

$(".pas41").click(function () {
	$("#my993").addClass("manageGreen");
	$("#my399").removeClass("createGreen");
});

// Remove List Box Animation Effect 
setTimeout(() => {
	$(".content .tab_2 .box-loading-animation").removeClass("box-loading-animation");
}, 4000);


// CREATE & MANAGE TAB END

// option 2 list item start

// const sub_ul_list_1 = document.querySelector(".sub-ul-list-1");
// const sub_ul_list_2 = document.querySelector(".sub-ul-list-2");
// const sub_ul_list_3 = document.querySelector(".sub-ul-list-3");
const main_list = document.querySelector(".main-list");

// Added by ASHIQ
const listItemData = [
	"Item 1",
	"Item 2",
	"Item 3",
	"Item 4",
	"Item 5",
	"Item 6",
	"Item 7",
	"Item 8",
	"Item 9",
	"Item 10",
	"Item 11",
	"Item 12",
	"Item 13",
	"Item 14",
	"Item 15",
	"Item 16",
	"Item 17",
	"Item 18",
	"Item 19",
	"Item 20",
	"Item 21",
	"Item 22",
	"Item 23",
	"Item 24",
	"Item 25",
	"Item 26",
	"Item 27",
	"Item 28",
	"Item 29",
];
(function listDataOptTwo() {
	let htmllist = "",
		htmlDataModal = "";
	listItemData.forEach((item, index) => {
		htmllist += `<li class="list-item-${index + 1}">
		<p>${item}</p>
		<div class="green-check-box display-none">
			<i class="fas fa-check"></i>
		</div>
		<div class="grey-times-box display-none" flow="down" tooltip="Click to Delete" onclick="leftItemDeleteClick(this, 'op2')">
			<i class="fas fa-times"></i>
		</div>
		<div class="arrow-li-box arrow-li-box-background-color-1">
			<i class="fas fa-caret-right arrow-li-box-i-color-1"></i>
		</div>
		</li>`;
		/* Update this function By Ashiq */
		let list_data1 = "",
			list_data2 = "",
			list_data3 = "",
			length = 72;
		for (let i = 1; i <= length; i++) {
			let elementHtml = `<li class="option-list-${index + 1}-${i}">
			<p>Level ${index + 1} - Item ${i}</p>
			<div class="sublist-info-box" customTooltip="Level ${index + 1} - Item ${i}" onclick="levelInfoTooltipShow(this)">
				<i class="fas fa-info"></i>
			</div>
			<div class="sublist-pen-box" tooltip="Click to Rename" flow="down" onclick="confirmListName(this)">
				<i class="fas fa-pen"></i>
			</div>
			<div class="sublist-check-box checkbox_hide">
				<i class="fas fa-check"></i>
			</div>
			<div class="sublist-cancel-box checkbox_show" tooltip="Click to Delete" flow="down" data-toggle="modal" data-target="#deletlistopt2">
				<i class="fas fa-times"></i>
			</div>
			</li>`;
			if (length < 61) {
				if (i <= 20) {
					list_data1 += elementHtml;
				} else if (i >= 21 && i <= 40) {
					list_data2 += elementHtml;
				} else {
					list_data3 += elementHtml;
				}
			} else {
				let divide = Math.floor(length / 3),
					len = divide + (length % 3);
				if (i <= len) {
					list_data1 += elementHtml;
				} else if (i > len && i <= len + divide) {
					list_data2 += elementHtml;
				} else {
					list_data3 += elementHtml;
				}
			}
		}
		htmlDataModal += `<ul class="sub-list checkbox_hide" style="margin-left: 300px;" id="sub-div-list-1-${index + 1
			}">
			${list_data1}
		</ul>
		<ul class="sub-list checkbox_hide" style="margin-left: 600px;" id="sub-div-list-2-${index + 1
			}">
			${list_data2}
		</ul>
		<ul class="sub-list checkbox_hide" style="margin-left: 900px;" id="sub-div-list-3-${index + 1
			}">
			${list_data3}
		</ul>`;
		/* Update End By Ashiq */
	});
	main_list.innerHTML = htmllist;
	document.querySelector("#sub-ul-list").innerHTML = htmlDataModal;
})();

/* New Function Start */
let sub_div_list_id1_old = "",
	sub_div_list_id2_old = "",
	sub_div_list_id3_old = "";

let oldSelectedListOp2 = "";

function item_click_handle(listClassName) {
	let level_no = listClassName.match(/\d+/g);
	if (level_no != null) {
		const sub_div_list_id1 = "#sub-div-list-1-" + level_no,
			sub_div_list_id2 = "#sub-div-list-2-" + level_no,
			sub_div_list_id3 = "#sub-div-list-3-" + level_no;
		if (sub_div_list_id1 !== sub_div_list_id1_old) {
			$(sub_div_list_id1_old).toggleClass("checkbox_hide checkbox_show");
			$(sub_div_list_id1).toggleClass("checkbox_hide checkbox_show");
			sub_div_list_id1_old = sub_div_list_id1;
		} else {
			$(sub_div_list_id1_old).toggleClass("checkbox_hide checkbox_show");
			sub_div_list_id1_old = "";
		}

		if (sub_div_list_id2 !== sub_div_list_id2_old) {
			$(sub_div_list_id2_old).toggleClass("checkbox_hide checkbox_show");
			$(sub_div_list_id2).toggleClass("checkbox_hide checkbox_show");
			sub_div_list_id2_old = sub_div_list_id2;
		} else {
			$(sub_div_list_id2_old).toggleClass("checkbox_hide checkbox_show");
			sub_div_list_id2_old = "";
		}

		if (sub_div_list_id3 !== sub_div_list_id3_old) {
			$(sub_div_list_id3_old).toggleClass("checkbox_hide checkbox_show");
			$(sub_div_list_id3).toggleClass("checkbox_hide checkbox_show");
			sub_div_list_id3_old = sub_div_list_id3;
		} else {
			$(sub_div_list_id3_old).toggleClass("checkbox_hide checkbox_show");
			sub_div_list_id3_old = "";
		}

		if(oldSelectedListOp2 == ""){
			$("#level_item_loading_op2").css("display", "block");
			$("#sub-ul-list").css("display", "none");
			oldSelectedListOp2 = "";
			setTimeout(() => {
				$("#level_item_loading_op2").css("display", "none");
				$("#sub-ul-list").css("display", "block");
			}, 1000);
		}
	}
}
/* New Function End */
var opt2_left_list = "";
(function opt2LeftListControl() {
	let oldTarget = "";
	main_list.addEventListener("click", function (e) {
		let target = e.target;
		const elementName = ["DIV", "P"];
		if (elementName.includes(target.tagName)) {
			if(target.className.includes("grey-times-box")){
				console.log("Div Clicked: Grey Times Box");
				return;
			}else {
				target = target.parentNode;
			}
		} else if (target.tagName === "I") {
			if(target.parentNode.className.includes("grey-times-box")){
				console.log("Icon Clicked: Grey Times Box");
				return;
			}else{
				target = target.parentNode.parentNode;
			}
		}

		if (oldTarget != "" && oldTarget !== target) {
			$(oldTarget).removeClass("highlight_li");

			$(oldTarget).children(".green-check-box").removeClass("display-block");
			$(oldTarget).children(".green-check-box").addClass("display-none");

			$(oldTarget).children(".grey-times-box").removeClass("display-block");
			$(oldTarget).children(".grey-times-box").addClass("display-none");

			$(oldTarget)
				.children(".arrow-li-box")
				.removeClass("arrow-li-box-background-color-2");
			$(oldTarget)
				.children(".arrow-li-box")
				.addClass("arrow-li-box-background-color-1");
			$(oldTarget)
				.children(".arrow-li-box")
				.children(".fa-caret-right")
				.removeClass("arrow-li-box-i-color-2");
			$(oldTarget)
				.children(".arrow-li-box")
				.children(".fa-caret-right")
				.addClass("arrow-li-box-i-color-1");
		}
		$(target).toggleClass("highlight_li");

		$(target).children(".green-check-box").toggleClass("display-none display-block");

		$(target).children(".grey-times-box").toggleClass("display-none display-block");

		$(target)
			.children(".arrow-li-box")
			.toggleClass(
				"arrow-li-box-background-color-1 arrow-li-box-background-color-2"
			);
		$(target)
			.children(".arrow-li-box")
			.children(".fa-caret-right")
			.toggleClass("arrow-li-box-i-color-1 arrow-li-box-i-color-2");
		
		if(oldTarget == target){
			oldSelectedListOp2 = "hideLoadingAnimation";
		}else{
			oldSelectedListOp2 = "";
		}
		
		oldTarget = target;

		opt2_left_list = target.childNodes[1].innerHTML;
		item_click_handle(target.classList[0]);
	});
})();

const main_check_box = document.querySelector(".green-check-box");
const sublist_check_box = document.querySelector(
	".sub-list .sublist-check-box"
);
const sublist_cancel_box = document.querySelector(
	".sub-list .sublist-cancel-box"
);
const sub_list_1 = document.querySelector(".sub-list-1");
const arrow_right_box = document.querySelector(".main-list li .arrow-li-box");
const arrow_right = document.querySelector(".main-list li .arrow-li-box i");

// option 2 list item end

// NEXT BUTTON CLICK TO OPEN RECORD PAGE OPTION 2 ===START===

const option_2_list = document.querySelector(".op2-listing-items");
const option_2_record = document.querySelector(".option-2-records");
option_2_record.style.display = "none";

$(".op3-resetBtn-both").click(function () {
	$('body').addClass("disable-pointer");
	let initState = $(this).html();
	$(this).html('<i class="fa fa-spinner fa-spin"></i> Reset');
	$(this).prop("disabled", true);
	let $this = $(this);
	setTimeout(function() {
		$('body').removeClass("disable-pointer");
		$this.prop("disabled", false);
		$this.html(initState);
	}, 2000);
});

$("#op2NextBtn").click(function () {
	$('body').addClass("disable-pointer");
	let initState = $(this).html();
	$(this).html('<i class="fa fa-spinner fa-spin"></i> Next');
	$(this).prop("disabled", true);
	let $this = $(this);
	setTimeout(function() {
		$('body').removeClass("disable-pointer");

		$this.prop("disabled", false);
		$this.html(initState);

		option_2_record.style.display = "block";
		option_2_list.style.display = "none";
		$("#op2_record_data").css("display", "none");
		$("#records_data_loading").css("display", "block");
	}, 2000);
	
	setTimeout(() => {
		$("#op2_record_data").css("display", "block");
		$("#records_data_loading").css("display", "none");
	}, 4000);
});

$("#op2BackBtn").click(function () {
	$('body').addClass("disable-pointer");
	let initState = $(this).html();
	$(this).html('<i class="fa fa-spinner fa-spin"></i> Back');
	$(this).prop("disabled", true);
	let $this = $(this);
	setTimeout(function() {
		$('body').removeClass("disable-pointer");
		$this.prop("disabled", false);
		$this.html(initState);

		option_2_record.style.display = "none";
		option_2_list.style.display = "block";
	}, 2000);
	
});

$("#op2DoneBtn").click(function () {
	$('body').addClass("disable-pointer");
	let initState = $(this).html();
	$(this).html('<i class="fa fa-spinner fa-spin"></i> Done');
	$(this).prop("disabled", true);
	let $this = $(this);
	setTimeout(function() {
		$('body').removeClass("disable-pointer");
		$this.prop("disabled", false);
		$this.html(initState);

		document.getElementById("option_1").style.display = "none";
		document.getElementById("option_2").style.display = "none";
		document.getElementById("option_3").style.display = "none";
		document.getElementById("option_4").style.display = "none";
		document.getElementById("option_5").style.display = "none";
		document.getElementById("hide559").style.display = "block";
		document.getElementById("tab_2").style.paddingTop = "60px";
		document.getElementById("opt-content").style.marginTop = "50px";
	}, 2000);
});
// NEXT BUTTON CLICK TO OPEN RECORD PAGE OPTION 2 ===END===

/* ================ Scroll Down START ============== */
$(document).ready(function () {
	$(".scroll-down").click(function () {
		const scrollable_list = document.querySelector(".scrollable-list");
		$(".scrollable-list").animate(
			{
				scrollTop: scrollable_list.scrollTop + 100,
			},
			250
		);
	});
});

/* ================ Scroll Down END ============== */

// OPTION 5 DRAG AND DROP START

document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
	const dropZoneElement = inputElement.closest(".drop-zone");

	dropZoneElement.addEventListener("click", (e) => {
		inputElement.click();
	});

	inputElement.addEventListener("change", (e) => {
		if (inputElement.files.length) {
			updateThumbnail(dropZoneElement, inputElement.files[0]);
		}
	});

	dropZoneElement.addEventListener("dragover", (e) => {
		e.preventDefault();
		dropZoneElement.classList.add("drop-zone--over");
	});

	["dragleave", "dragend"].forEach((type) => {
		dropZoneElement.addEventListener(type, (e) => {
			dropZoneElement.classList.remove("drop-zone--over");
		});
	});

	dropZoneElement.addEventListener("drop", (e) => {
		e.preventDefault();

		if (e.dataTransfer.files.length) {
			inputElement.files = e.dataTransfer.files;
			updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
		}

		dropZoneElement.classList.remove("drop-zone--over");
	});
});

/**
 * Updates the thumbnail on a drop zone element.
 *
 * @param {HTMLElement} dropZoneElement
 * @param {File} file
 */
function updateThumbnail(dropZoneElement, file) {
	let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");

	// First time - remove the prompt
	if (dropZoneElement.querySelector(".drop-zone__prompt")) {
		dropZoneElement.querySelector(".drop-zone__prompt").remove();
	}

	// First time - there is no thumbnail element, so lets create it
	if (!thumbnailElement) {
		thumbnailElement = document.createElement("div");
		thumbnailElement.classList.add("drop-zone__thumb");
		dropZoneElement.appendChild(thumbnailElement);
	}

	thumbnailElement.dataset.label = file.name;

	// Show thumbnail for image files
	if (file.type.startsWith("image/")) {
		const reader = new FileReader();

		reader.readAsDataURL(file);
		reader.onload = () => {
			thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
		};
	} else {
		thumbnailElement.style.backgroundImage = null;
	}
}

// OPTION 5 DRAG AND DROP END

// OPTION 3 DATE PICKER START
$(function () {
	let dateFormat_Opt3 = "mm/dd/yy";
	let opt3_from_date = $("#datepicker-1").datepicker({
		defaultDate: "+1w",
		// changeMonth: true,
		numberOfMonths: 1
	}).on("change", function () {
		opt3_to_date.datepicker("option", "minDate", getDateOpt3(this));
	});
	let opt3_to_date = $("#datepicker-2").datepicker({
		defaultDate: "+1w",
		// changeMonth: true,
		numberOfMonths: 1
	}).on("change", function () {
		opt3_from_date.datepicker("option", "maxDate", getDateOpt3(this));
	});

	function getDateOpt3(element) {
		let date_opt3;
		try {
			date_opt3 = $.datepicker.parseDate(dateFormat_Opt3, element.value);
		} catch (error) {
			date_opt3 = null;
		}
		return date_opt3;
	}
});

$("#datePicker1_Icon").click(function () {
	$("#datepicker-1").focus();
});
$("#datePicker2_Icon").click(function () {
	$("#datepicker-2").focus();
});

// OPTION 3 DATE PICKER END

// OPTION 4 DATE PICKER END
let opt2_right_list = "",
	oldLIClassname = "";
const sub_ul_list = document.querySelector("#sub-ul-list");
sub_ul_list.addEventListener("click", function (e) {
	let target = e.target;
	if (target.tagName === "DIV") {
		if (target.className.indexOf("sublist-cancel-box") != -1) {
			manageResultDeleteListClassName = target.parentNode.classList[0];
			return;
		}
		else if((target.className.indexOf("sublist-info-box") != -1) || (target.className.indexOf("sublist-pen-box") != -1)){
		 	return;
		}
		target = target.parentNode;
	} else if (target.tagName === "P") {
		target = target.parentNode;
	} else if (target.tagName === "I") {
		target = target.parentNode;
		if (target.className.indexOf("sublist-cancel-box") != -1) {
			manageResultDeleteListClassName = target.parentNode.classList[0];
			return;
		}
		else if((target.className.indexOf("sublist-info-box") != -1) || (target.className.indexOf("sublist-pen-box") != -1)){
		 	return;
		} 
		else target = target.parentNode;
	} else if (target.tagName !== "LI") return;

	if (oldLIClassname !== "" && oldLIClassname !== target.classList[0]) {
		$(`.${oldLIClassname}`)
			.children(".sublist-check-box")
			.addClass("checkbox_hide");
		$(`.${oldLIClassname}`)
			.children(".sublist-check-box")
			.removeClass("checkbox_show");
		$(`.${oldLIClassname}`)
			.children(".sublist-cancel-box")
			.removeClass("checkbox_hide");
		$(`.${oldLIClassname}`)
			.children(".sublist-cancel-box")
			.addClass("checkbox_show");
	}

	$(target)
		.children(".sublist-check-box")
		.toggleClass("checkbox_hide checkbox_show");
	$(target)
		.children(".sublist-cancel-box")
		.toggleClass("checkbox_hide checkbox_show");

	oldLIClassname = target.classList[0];
	if (opt2_right_list == target.childNodes[1].innerHTML) {
		opt2_right_list = "";
	} else {
		opt2_right_list = target.childNodes[1].innerHTML;
	}
	$("#opt2-left").html(opt2_left_list);
	$("#opt2-right").html(opt2_right_list);
});

// Manage Data Option 3 Start
function opt3Reset(op3This) {
	$('body').addClass("disable-pointer");
	let initState = $(op3This).html();
	$(op3This).html('<i class="fa fa-spinner fa-spin"></i> Reset');
	$(op3This).prop("disabled", true);
	let $this = $(op3This);
	setTimeout(function() {
		$('body').removeClass("disable-pointer");
		$this.prop("disabled", false);
		$this.html(initState);

		$("#opt3-textarea-1").val("");
		$("#datepicker-1").val("");
		$("#datepicker-2").val("");
	}, 2000);
}
// Manage Data Option 3 End

// Manage Data Option 5 Start
function opt5ResetBtn(e) {
	$('body').addClass("disable-pointer");
	let element = $(e).parent().parent().parent();

	let initState = $("#op5ResetBtn").html();
	$("#op5ResetBtn").html('<i class="fa fa-spinner fa-spin"></i> Reset');
	$("#op5ResetBtn").prop("disabled", true);
	let $this = $("#op5ResetBtn");

	setTimeout(function() {
		$('body').removeClass("disable-pointer");
		$this.prop("disabled", false);
		$this.html(initState);

		element.find(".select-plus .custome-select select").val("0");
		element.find(".col-5").children("input[type=text]").val("");
		element.find(".col-7 .drop-zone input.drop-zone__input").val("");
		let fileDrop = element.find(".col-7 .drop-zone .drop-zone__thumb");
		if (fileDrop.length > 0) {
			let htmlData = `<p class="drop-zone__prompt">Drag and Drop File Here</p>
		<p class="drop-zone__formats">Acceptable File Formats <span>txt & csv</span></p>`;
			fileDrop.remove();
			element.find(".col-7 .drop-zone .txt-box").html(htmlData);
		}
	}, 2000);
	
	
}

function addCategory(e) {
	let inpVal = $(e).parent().parent().find("input.plus-input").val();
	
	$('#plusBtnModal .modal-body').addClass("disable-pointer");
	let initState = $(e).html();
	$(e).html('<i class="fa fa-spinner fa-spin"></i> Done');
	$(e).prop("disabled", true);
	let $this = $(e);
	setTimeout(function() {
		$('#plusBtnModal .modal-body').removeClass("disable-pointer");
		$this.prop("disabled", false);
		$this.html(initState);
		
		if (inpVal != "") {
			let selectCat = $("#opt5-select-category");
			let opt = `<option value="${inpVal}">${inpVal}</option>`;
			selectCat.append(opt);
		}
		$("#plusBtnModal").modal("hide");
  	}, 2000);
}
// Manage Data Option 5 End

// Manage Data Option 1 Existing Pagination Start
let manExisTable = [];

for (let i = 1; i <= 100; i++) {
	manExisTable.push({
		id: `md-ex-${i}`,
		serial: i,
		recordsCount: 1234 + i,
		savedName: `Sample 1234${i}`,
		CDateTime: {
			date: "01/01/2021",
			time: "12:36 AM",
		},
		LUDateTime: {
			date: "03/01/2021",
			time: "12:40 AM",
		},
	});
}

function makeTableHead(tableID) {
	let tableHead = `<tr>
		<th scope="col">
			ROW
		</th>
		<th scope="col">
			<span class="header-title" tooltip="Click to Sort" flow="down">RECORDS COUNT</span>
			<span class="tooltip-container" tooltip="RECORDS COUNT" flow="down">
				<i class="fas fa-question-circle"></i>
			</span>
			<span class="table-head-updown tooltip-container">
				<i class="fas fa-chevron-up"></i>
            </span>
			<div class="head-filter cross-exists">
				<i class="fas fa-times"></i>
			</div>
			<div class="drop-filter" >
				<i class="fas fa-caret-down"></i>
			</div>
		</th>
		<th scope="col">
			<span class="header-title" tooltip="Click to Sort" flow="down">SAVED NAME</span>
			<span class="tooltip-container" tooltip="SAVED NAME" flow="down">
				<i class="fas fa-question-circle"></i>
			</span>
			<span class="table-head-updown tooltip-container">
				<i class="fas fa-chevron-up"></i>
            </span>
			<div class="head-filter cross-exists">
				<i class="fas fa-times"></i>
			</div>
			<div class="drop-filter" >
				<i class="fas fa-caret-down"></i>
			</div>
		</th>
		<th scope="col">
			<span class="header-title" tooltip="Click to Sort" flow="down">CREATED DATE TIME</span>
			<span class="tooltip-container" tooltip="CREATED DATE TIME" flow="down">
				<i class="fas fa-question-circle"></i>
			</span>
			<span class="table-head-updown tooltip-container">
				<i class="fas fa-chevron-up"></i>
            </span>
			<div class="head-filter cross-exists">
				<i class="fas fa-times"></i>
			</div>
			<div class="drop-filter" >
				<i class="fas fa-caret-down"></i>
			</div>
		</th>
		<th scope="col">
			<span class="header-title" tooltip="Click to Sort" flow="down">LAST UPDATE DATE TIME</span>
			<span class="tooltip-container" tooltip="LAST UPDATE DATE TIME" flow="down">
				<i class="fas fa-question-circle"></i>
			</span>
			<span class="table-head-updown tooltip-container">
				<i class="fas fa-chevron-up"></i>
            </span>
			<div class="head-filter cross-exists">
				<i class="fas fa-times"></i>
			</div>
			<div class="drop-filter">
				<i class="fas fa-caret-down"></i>
			</div>
		</th>
		<th scope="col">ACTIONS
    </th>
	</tr>`;
	$(`#${tableID} thead`).html(tableHead);
}


function ExistTableHeadClick(tableId, dataTableId, loadingTableId, paginationId, loadingPaginationId, tableDetailsId) {
	$(`#${tableId} th`).click(function (e) {
		let target = e.target;
		let index = $(this).index() + 1;
		if(target.tagName === "SPAN" && target.className === "header-title"){
			$("#dropBtnModal").css('display', 'none');
            $(`#${tableId} th:nth-child(${index}) .table-head-updown i`).toggleClass("fa-chevron-up fa-chevron-down");
            
            $(`#${dataTableId}`).css("display", "none");
			$(`#${paginationId}`).css("display", "none");
			$(`#${loadingTableId}`).css("display", "block");
			$(`#${loadingPaginationId}`).css("display", "block");

			$(`#${tableDetailsId} .table-records-wrap`).css("display", "none");
			$(`#${tableDetailsId} .table-records-loading`).css("display", "block");

			setTimeout(() => {
				$(`#${loadingTableId}`).css("display", "none");
				$(`#${loadingPaginationId}`).css("display", "none");
				$(`#${dataTableId}`).css("display", "block");
				$(`#${paginationId}`).css("display", "block");

				$(`#${tableDetailsId} .table-records-wrap`).css("display", "block");
				$(`#${tableDetailsId} .table-records-loading`).css("display", "none");
			}, 2000);

        }else{

			if (target.tagName === "I") {
				target = target.parentNode;
			}
			let regex = /cross/g;
			let regexD = /drop-filter/g;
			if (target.tagName === "DIV" && regex.test(target.className)) {
				$(`#${tableId} th:nth-child(${index})`).addClass("th-dis-none");
				$(`#${tableId} td:nth-child(${index})`).addClass("th-dis-none");
			} else if (target.tagName === "DIV" && regexD.test(target.className)) {
				let dataP = $(`#${tableId} td:nth-child(${index}) .mn-exists-data`);
				// console.log(dataP);
				let headingPop = $(`#${tableId} th:nth-child(${index})`)[0].textContent;
				$(
					`#${tableId} th:nth-child(${index}) .drop-filter .fa-caret-down`
				).addClass("down-animation-icon");

				$("#dropBtnModal #mnExistsThPop").html(headingPop);
				let targetModal = $("#dropBtnModal #checkbox-table-exist tbody");
				const dataC = new Set();
				for (let i = 0; i < dataP.length; i++) {
					if (dataP[i].tagName == "INPUT") {
						dataC.add(dataP[i].value);
					} else {
						dataC.add(dataP[i].textContent);
					}
					// console.log(dataP[i].tagName);
				}
				let tableTr = "";
				for (const item of dataC) {
					tableTr += `<tr>
						<td>
							<div class="popup__checkbox__page__toggle">
								<label class="popup__checkbox__toggle">
									<input class="popup__checkbox__toggle__input" type="checkbox">
									<span class="popup__checkbox__toggle__label">
										<span class="popup__checkbox__toggle__text">${item}</span>
									</span>
								</label>
							</div>
						</td>
					</tr>`;
				}
				targetModal.html(tableTr);

				let elementPositionMain = e.target.getBoundingClientRect();
				$("#dropBtnModal").css('display', 'none');
				$("#dropBtnModal").css({
					top: ((elementPositionMain.y) + window.scrollY + 25),
					left: ((elementPositionMain.x) - 235),
					position: "absolute"
				});
				$("#dropBtnModal").css('display', 'block');

				$("#dropBtnModal .checkbox-table-loading").css("display", "block");
				$("#dropBtnModal .checkbox-table-scroll").css("display", "none");

				setTimeout(() => {
					$("#dropBtnModal .checkbox-table-loading").css("display", "none");
					$("#dropBtnModal .checkbox-table-scroll").css("display", "block");
				}, 2000);
				// $("#dropBtnModal .modal-dialog").css({
				// 	top: e.clientY + 15,
				// 	left: e.clientX - 240,
				// });
				// $("#dropBtnModal").modal("toggle");
			}
		}
	});
}


function manDtOpt1Exist(tableID, noRow, pagiId, tabChange, dataTableId, loadingTableId, paginationId, loadingPaginationId, tableDetailsId) {
	let options = {
		dataSource: manExisTable,
		pageSize: noRow,
		showGoInput: true,
		showGoButton: true,
		callback: function (data, pagination) {

			let currentPageNumber = pagination.pageNumber;
			let dataRowPerPage = pagination.pageSize;
			let totalDataRows = pagination.totalNumber;
			let totalPageNumber = Math.ceil(totalDataRows / dataRowPerPage);
			let dataShowingFrom = ((currentPageNumber - 1) * dataRowPerPage) + 1;
			let dataShowingTo = ((currentPageNumber * dataRowPerPage) < totalDataRows) ? (currentPageNumber * dataRowPerPage) : totalDataRows;

			$(`#${tableDetailsId} .current_page`).html(currentPageNumber);
			$(`#${tableDetailsId} .total_pages`).html(totalPageNumber);
			$(`#${tableDetailsId} .record_showingFrom`).html(dataShowingFrom);
			$(`#${tableDetailsId} .record_showingTo`).html(dataShowingTo);


			$(`#${dataTableId}`).css("display", "none");
			$(`#${paginationId}`).css("display", "none");
			$(`#${loadingTableId}`).css("display", "block");
			$(`#${loadingPaginationId}`).css("display", "block");

			$(`#${tableDetailsId} .table-records-wrap`).css("display", "none");
			$(`#${tableDetailsId} .table-records-loading`).css("display", "block");

			setTimeout(() => {
				$(`#${loadingTableId}`).css("display", "none");
				$(`#${loadingPaginationId}`).css("display", "none");
				$(`#${dataTableId}`).css("display", "block");
				$(`#${paginationId}`).css("display", "block");

				$(`#${tableDetailsId} .table-records-wrap`).css("display", "block");
				$(`#${tableDetailsId} .table-records-loading`).css("display", "none");
			}, 2000);

			let tableTr = "";
			data.forEach(({ id, serial, recordsCount, savedName, CDateTime, LUDateTime }, index) => {
				let tabHd = $(`#${tableID} thead th`);
				let len = tabHd.length;
				let classList = [];
				for (let i = 1; i < len - 1; i++) {
					classList.push(tabHd[i].className);
				}
				tableTr += `<tr id="${id}">
					<th class="row-data" scope="row">${serial}</th>
					<td class="records-count ${classList[0]}">
						<a data-toggle="modal" data-target="#hyperTextModal1" style="color: black" onclick="showHyperTextModal1(this)">
							<p class="mn-exists-data">${recordsCount}</p>
						</a>
					</td>
					<td class="${classList[1]}">
						<input class="save-name mn-exists-data" value="${savedName}" type="text" />
					</td>
					<td class="${classList[2]}">
						<div class="create-date-time date-time-39">
							<p class="mn-exists-data">${CDateTime.date} ${CDateTime.time}</p>
						</div>
					</td>
					<td class="${classList[3]}">
						<div class="last-date-time date-time-39">
							<p class="mn-exists-data">${LUDateTime.date} ${LUDateTime.time}</p>
						</div>
					</td>
					<td>
						<div class="actions39">
							<button onclick="${tabChange}">Click To View/Update</button>
							<div class="cancel-box" onclick="universalConfirmModalDelete(this)">
								<i class="fas fa-times"></i>
							</div>
						</div>
					</td>
				</tr>`;
			}
			);
			$(`#${tableID} tbody`).html(tableTr);

		},
	};
	let container = $(`#${pagiId}`);
	container.pagination(options);
}

function showHyperTextModal1(e) {
	let nameD = $(e).children("p").html();
	let modalodal = $(
		"#hyperTextModal1 .modal-body .hyper-text-popup-header-title p"
	);
	modalodal.html(`Sample ${nameD} Data`);
}

function tabChangeOpt1(e) {
	let tabMain = $(e)
		.parent()
		.parent()
		.parent()
		.parent()
		.parent()
		.parent()
		.parent()
		.parent();
	let createNew = tabMain.find(
		"div.create-manage-tab div.create-new-content.zas"
	);

	$('body').addClass("disable-pointer");
	let initState = $(e).html();
	$(e).html('<i class="fa fa-spinner fa-spin"></i> Click To View/Update');
	$(e).prop("disabled", true);
	let $this = $(e);
	setTimeout(function() {
		$('body').removeClass("disable-pointer");
		$this.prop("disabled", false);
		$this.html(initState);

		createNew.find("div.createpera p").html("View/Update");
		createNew.click();
	}, 2000);
}

function tabChangeOpt3(e) {
	let tabMain = $(e)
		.parent()
		.parent()
		.parent()
		.parent()
		.parent()
		.parent()
		.parent()
		.parent();
	let createNew = tabMain.find(
		"div.create-manage-tab div.create-new-content.zas43"
	);

	$('body').addClass("disable-pointer");
	let initState = $(e).html();
	$(e).html('<i class="fa fa-spinner fa-spin"></i> Click To View/Update');
	$(e).prop("disabled", true);
	let $this = $(e);
	setTimeout(function() {
		$('body').removeClass("disable-pointer");
		$this.prop("disabled", false);
		$this.html(initState);

		createNew.find("div.createpera p").html("View/Update");
		createNew.click();
	}, 2000);
}

function tabChangeOpt4(e) {
	let tabMain = $(e)
		.parent()
		.parent()
		.parent()
		.parent()
		.parent()
		.parent()
		.parent()
		.parent();
	let createNew = tabMain.find(
		"div.create-manage-tab div.create-new-content.zas45"
	);

	$('body').addClass("disable-pointer");
	let initState = $(e).html();
	$(e).html('<i class="fa fa-spinner fa-spin"></i> Click To View/Update');
	$(e).prop("disabled", true);
	let $this = $(e);
	setTimeout(function() {
		$('body').removeClass("disable-pointer");
		$this.prop("disabled", false);
		$this.html(initState);

		createNew.find("div.createpera p").html("View/Update");
		createNew.click();
	}, 2000);

}

function tabChangeOpt5(e) {
	let tabMain = $(e)
		.parent()
		.parent()
		.parent()
		.parent()
		.parent()
		.parent()
		.parent()
		.parent();
	let createNew = tabMain.find(
		"div.create-manage-tab div.create-new-content.zas41"
	);
	
	$('body').addClass("disable-pointer");
	let initState = $(e).html();
	$(e).html('<i class="fa fa-spinner fa-spin"></i> Click To View/Update');
	$(e).prop("disabled", true);
	let $this = $(e);
	setTimeout(function() {
		$('body').removeClass("disable-pointer");
		$this.prop("disabled", false);
		$this.html(initState);

		createNew.find("div.createpera p").html("View/Update");
		createNew.click();
	}, 2000);
	
}


$("#row-no1").change(function (e) {
	let noRow = e.target.value;
	manDtOpt1Exist("man-data-opt1-exist", noRow, "pagination-op1-data", `tabChangeOpt1(this)`, "mnData-opt1-dataWrapper", "mnData-opt1-loadingWrapper", "pagination_mnDataOp1", "loading_pagination_mnDataOp1", "table_details_op1");
});

$("#row-no3").change(function (e) {
	let noRow = e.target.value;
	manDtOpt1Exist("man-data-opt3-exist", noRow, "pagination-op3-data", `tabChangeOpt3(this)`, "mnData-opt3-dataWrapper", "mnData-opt3-loadingWrapper", "pagination_mnDataOp3", "loading_pagination_mnDataOp3", "table_details_op3");
});

$("#row-no4").change(function (e) {
	let noRow = e.target.value;
	manDtOpt1Exist("man-data-opt4-exist", noRow, "pagination-op4-data", `tabChangeOpt4(this)`, "mnData-opt4-dataWrapper", "mnData-opt4-loadingWrapper", "pagination_mnDataOp4", "loading_pagination_mnDataOp4", "table_details_op4");
});

$("#row-no5").change(function (e) {
	let noRow = e.target.value;
	manDtOpt1Exist("man-data-opt5-exist", noRow, "pagination-op5-data", `tabChangeOpt5(this)`, "mnData-opt5-dataWrapper", "mnData-opt5-loadingWrapper", "pagination_mnDataOp5", "loading_pagination_mnDataOp5", "table_details_op5");
});

// Manage Data Option 1 Existing Pagination End

$("#closeDropBtnModal").click(function () {
    $("#dropBtnModal").css('display', 'none');

    const rotateIcon = document.querySelectorAll("#tab_2 i.fa-caret-down.down-animation-icon");
    for (let i = 0; i < rotateIcon.length; i++) {
        $(rotateIcon[i]).removeClass("down-animation-icon");
    }

	const rotateIconTab5 = document.querySelectorAll("#tab_5 i.fa-caret-down.down-animation-icon");
    for (let i = 0; i < rotateIconTab5.length; i++) {
        $(rotateIconTab5[i]).removeClass("down-animation-icon");
    }
});

$("#selectDropBtnModal").click(function () {
    $("#dropBtnModal").css('display', 'none');

	let alertTab = window.getComputedStyle(document.querySelector('.tab_content.tab_5'));
	if (alertTab.display == "block") {
		$(`#manage_alert_data_table`).css("display", "none");
		$(`#pagination_mnAlert`).css("display", "none");
		$(`#manage_alert_loading_table`).css("display", "block");
		$(`#loading_pagination_mnAlert`).css("display", "block");

		$("#table_details_mnAlert .table-records-wrap").css("display", "none");
		$("#table_details_mnAlert .table-records-loading").css("display", "block");

		setTimeout(() => {
			$(`#manage_alert_loading_table`).css("display", "none");
			$(`#loading_pagination_mnAlert`).css("display", "none");
			$(`#manage_alert_data_table`).css("display", "block");
			$(`#pagination_mnAlert`).css("display", "block");

			$("#table_details_mnAlert .table-records-wrap").css("display", "block");
			$("#table_details_mnAlert .table-records-loading").css("display", "none");
		}, 2000);
		
    } else {
		let displayTab = "";
		let optTab1 = window.getComputedStyle(document.querySelector('#opt-content #option_1'));
		let optTab3 = window.getComputedStyle(document.querySelector('#opt-content #option_3'));
		let optTab4 = window.getComputedStyle(document.querySelector('#opt-content #option_4'));

		if (optTab1.display == "block") {
			displayTab = 1;
		} else if (optTab3.display == "block") {
			displayTab = 3;
		} else if (optTab4.display == "block") {
			displayTab = 4;
		} else {
			displayTab = 5;
		}
		
		$(`#mnData-opt${displayTab}-dataWrapper`).css("display", "none");
		$(`#pagination_mnDataOp${displayTab}`).css("display", "none");
		$(`#mnData-opt${displayTab}-loadingWrapper`).css("display", "block");
		$(`#loading_pagination_mnDataOp${displayTab}`).css("display", "block");

		$(`#table_details_op${displayTab} .table-records-wrap`).css("display", "none");
		$(`#table_details_op${displayTab} .table-records-loading`).css("display", "block");

		setTimeout(() => {
			$(`#mnData-opt${displayTab}-loadingWrapper`).css("display", "none");
			$(`#loading_pagination_mnDataOp${displayTab}`).css("display", "none");
			$(`#mnData-opt${displayTab}-dataWrapper`).css("display", "block");
			$(`#pagination_mnDataOp${displayTab}`).css("display", "block");

			$(`#table_details_op${displayTab} .table-records-wrap`).css("display", "block");
			$(`#table_details_op${displayTab} .table-records-loading`).css("display", "none");
		}, 2000);
    }

    const rotateIcon = document.querySelectorAll("#tab_2 i.fa-caret-down.down-animation-icon");
    for (let i = 0; i < rotateIcon.length; i++) {
        $(rotateIcon[i]).removeClass("down-animation-icon");
    }

	const rotateIconTab5 = document.querySelectorAll("#tab_5 i.fa-caret-down.down-animation-icon");
    for (let i = 0; i < rotateIconTab5.length; i++) {
        $(rotateIconTab5[i]).removeClass("down-animation-icon");
    }
});

// modal background
$('#delet-optfourmodala-modal').on('show.bs.modal', function (e) {
	$('body').addClass("modal-list-open");
})
$('#delet-optfourmodalb-modal').on('show.bs.modal', function (e) {
	$('body').addClass("modal-list-open");
})
$('#delet-optfourmodalc-modal').on('show.bs.modal', function (e) {
	$('body').addClass("modal-list-open");
})
$('#delet-optfourmodald-modal').on('show.bs.modal', function (e) {
	$('body').addClass("modal-list-open");
})

$('#delet-manage-tempa-list-modal').on('show.bs.modal', function (e) {
	$('body').addClass("modal-list-open");
})
$('#delet-manage-tempb-list-modal').on('show.bs.modal', function (e) {
	$('body').addClass("modal-list-open");
})
$('#delet-manage-tempc-list-modal').on('show.bs.modal', function (e) {
	$('body').addClass("modal-list-open");
})
$('#delet-manage-tempd-list-modal').on('show.bs.modal', function (e) {
	$('body').addClass("modal-list-open");
})

$("#opt4a-list-modal").on('hide.bs.modal', function (e) {
	$('body').removeClass("modal-list-open");
})
$("#opt4b-list-modal").on('hide.bs.modal', function (e) {
	$('body').removeClass("modal-list-open");
})
$("#opt4c-list-modal").on('hide.bs.modal', function (e) {
	$('body').removeClass("modal-list-open");
})
$("#opt4d-list-modal").on('hide.bs.modal', function (e) {
	$('body').removeClass("modal-list-open");
})

$("#manage-tempa-list-modal").on('hide.bs.modal', function (e) {
	$('body').removeClass("modal-list-open");
})
$("#manage-tempb-list-modal").on('hide.bs.modal', function (e) {
	$('body').removeClass("modal-list-open");
})
$("#manage-tempc-list-modal").on('hide.bs.modal', function (e) {
	$('body').removeClass("modal-list-open");
})
$("#manage-tempd-list-modal").on('hide.bs.modal', function (e) {
	$('body').removeClass("modal-list-open");
})

// myopt1listData
// deletlistopt2
$('#deletlistopt2').on('show.bs.modal', function (e) {
	let opt1ListDataStyles = window.getComputedStyle(document.querySelector('#myopt1listData'));
	if (opt1ListDataStyles.display == "block") {
		$('body').addClass("modal-list-open");
	}
})

$("#myopt1listData").on('hide.bs.modal', function (e) {
	$('body').removeClass("modal-list-open");
})

// manage data op3 create new table Start
let opt3TableData1 = [];
for (let i = 1; i <= 15; i++) {
	opt3TableData1.push({
		id: "op3-mnd-o1-" + i,
		name: "Option 1 - Text " + i,
	});
}

let opt3TableData2 = [];
for (let i = 1; i <= 15; i++) {
	opt3TableData2.push({
		id: "op3-mnd-o2-" + i,
		name: "Option 2 - Text " + i,
	});
}

function op3TableRender(tableData) {
	let htmlRen = "";
	tableData.forEach(({ id, name }) => {
		htmlRen += `<tr id="${id}" onclick="clickAddClass(this)">
			<td>${name}</td>
		</tr>`;
	});
	$("#man-data-op3-table tbody").html(htmlRen);
}
op3TableRender(opt3TableData1);
let opt3TableData = opt3TableData1;

$(".radio input[type = 'radio'][name = 'data-set-radio-button']").change(
	function () {
		if (this.value == "option-1") {
			op3TableRender(opt3TableData1);
			opt3TableData = opt3TableData1;
		} else if (this.value == "option-2") {
			op3TableRender(opt3TableData2);
			opt3TableData = opt3TableData2;
		}
	}
);
// manage data op3 create new table End

function manDatacheckEmptyDiff(e) {
	if (e.value !== "") {
		$(e).parent().addClass("custom-input-success");
	} else {
		$(e).parent().removeClass("custom-input-success");
	}
}

function passwordEmptyCheck(e) {
	if (e.value !== "") {
		$(e).parent().addClass("success-border");
		$(e).parent().removeClass("danger-border");
		$(e).parent().parent().children(".error-message").remove();
	} else {
		$(e).parent().addClass("danger-border");
		$(e).parent().removeClass("success-border");
		let errorMessage = `<div class="error-message">
      <p>A value must be entered</p>
    </div>`;
		let errPos = $(e).parent().parent();
		if (!errPos.children("div.error-message").length) {
			errPos.append(errorMessage);
		}
	}
}

function resetAccountFormFields() {
	$('body').addClass("disable-pointer");
	$(".ac-button-row .reset").html('<i class="fa fa-spinner fa-spin"></i> Resetting');
	$(".ac-button-row .reset").addClass('disabled');
	let $thisBtn = $(".ac-button-row .reset");

	setTimeout(function() {
		$('body').removeClass("disable-pointer");
		$thisBtn.removeClass('disabled');
		$thisBtn.html("Reset");

		$("#tab_1 .account-form-container .custome-select select")[0].selectedIndex = 0;
		let formInputContainer = $(".account-form-container .custom-input-only");
		let formInputs = $(".account-form-container .custom-input-only input");
		for (i = 0; i < formInputContainer.length; i++) {
			$(formInputContainer[i])
				.removeClass("custom-input-danger")
				.removeClass("custom-input-success");
			formInputs[i].value = "";
			$(formInputContainer[i]).parent().children(".error-message").remove();
		}
	}, 2000);
}

// User Icon Click on Navbar Redirect to Manage Account 
$("#userAvatar").click(function () {
	$("#tabs_ul li").removeClass("active");
	$("#tabs_ul li:nth-child(1)").addClass("active");

	$(".content .tab_content").hide();
	$(".content .tab_content:nth-child(1)").show();

	$("#dropBtnModal").css('display', 'none');

	$("#account_form_loading").css('display', 'block');
	$("#account_form_content").css('display', 'none');

	setTimeout(() => {
		$("#account_form_loading").css('display', 'none');
		$("#account_form_content").css('display', 'block');
	}, 2000);
});


function universalConfirmModalDelete(globalVariable) {
	let headerText = "DELETE ROW";
	let detailsText = "Remove this item permanently?";

	if (globalVariable.className.includes("deleteTableRow")) {
		headerText = "DELETE ROW";
		detailsText = "Remove this item permanently?";
	} else if (globalVariable.className.includes("mnResFilterSaveBtn")) {
		headerText = "SAVE FILTER";
		detailsText = "Confirm to save filter data?";
	} else if (globalVariable.className.includes("deleteRowLayout12")) {
		headerText = "DELETE TABLE ROW";
		detailsText = "Remove this row permanently?";
	} else if (globalVariable.className.includes("submitSaveNote")) {
		headerText = "SAVE NOTES";
		detailsText = "Confirm to save notes?";
	} else if (globalVariable.className.includes("saveAlerts")) {
		headerText = "SAVE ALERTS";
		detailsText = "Confirm to save alerts?";
	} else if (globalVariable.className.includes("addToBookMark")) {
		headerText = "ADD TO BOOKMARKS";
		detailsText = "Confirm to add to bookmark?";
	} else if (globalVariable.className.includes("clickViewDetails")) {
		headerText = "VIEW DETAILS";
		detailsText = "Confirm to view details?";
	}
	$("#universal_confirm_modal #confirm_header p").html(headerText);
	$("#universal_confirm_modal #confirm_deatis p").html(detailsText);
	$('#universal_confirm_modal').modal('show');
}

function op1ResetBtnConfirm(resetGlobal) {
	$('body').addClass("disable-pointer");
	let initState = $(resetGlobal).html();
	$(resetGlobal).html('<i class="fa fa-spinner fa-spin"></i> Reset');
	$(resetGlobal).prop("disabled", true);
	let $this = $(resetGlobal);
	if (($("#leftSideDrag_op1").html() != "") || ($("#rightSideDrag_op1").html() != "")) {
		setTimeout(function() {
			$("#universal_confirm_modal #confirm_header p").html("RESET FIELDS");
			$("#universal_confirm_modal #confirm_deatis p").html("Confirm to reset input fields?");
			$('#universal_confirm_modal').modal('show');
		}, 2000);
	}
	setTimeout(function() {
		$('body').removeClass("disable-pointer");
		$this.prop("disabled", false);
		$this.html(initState);
	}, 2000);
}

function universalThankDraft(globalThankVar) {
	let thankHeaderText = "THANK YOU";
	let thankDetailsText = "Your Request has been Successfully Processed";
	if (globalThankVar.className.includes("btn-save-draft")) {
		thankDetailsText = "The Draft Form has been Successfully Saved";
	}
	$("#universalThankDraftModal #thank_draft_header p").html(thankHeaderText);
	$("#universalThankDraftModal #thank_draft_details p").html(thankDetailsText);
	$('#universalThankDraftModal').modal('show');
}

let targetCopyMoveElement = "";

function uniConfirmButton(uniConfirmThis) {
	$('#universal_confirm_modal .modal-body').addClass("disable-pointer");
	let initState = $(uniConfirmThis).html();
	$(uniConfirmThis).html('<i class="fa fa-spinner fa-spin"></i> Confirm');
	$(uniConfirmThis).prop("disabled", true);
	let $this = $(uniConfirmThis);
	setTimeout(function() {
        $('#universal_confirm_modal .modal-body').removeClass("disable-pointer");
		$this.prop("disabled", false);
		$this.html(initState);

		$('#universal_confirm_modal').modal('hide');
		let manageDataTab = window.getComputedStyle(document.querySelector('#tab_2'));
		let createNewActive = $("#my567").hasClass("createGreen");
		if (manageDataTab.display == "block" && createNewActive == true) {
			resetLeftRightBox();
		}


		if (targetCopyMoveElement != "") {
			$(`.${targetCopyMoveElement}`).children(".sublist-check-box").toggleClass("checkbox_hide checkbox_show");
			$(`.${targetCopyMoveElement}`).children(".sublist-cancel-box").toggleClass("checkbox_hide checkbox_show");
			targetCopyMoveElement = "";
		}

		$("#universalThankDraftModal #thank_draft_header p").html("THANK YOU");
		$("#universalThankDraftModal #thank_draft_details p").html("Your Request has been Successfully Processed");
		$('#universalThankDraftModal').modal('show');

	}, 2000);
	
}

// Universal Thank Draft Modal (on show/hide event)
$('#universalThankDraftModal').on('show.bs.modal', function (e) {
	$('body').addClass("modal-force-open");
}).on('hide.bs.modal', function (e) {
	$('body').removeClass("modal-force-open");

	$("#viewtwo").css("display", "none");
	$("#rowdetails").css("display", "none");
	$("#noteswindow").css("display", "none");
	$("#alertswindow").css("display", "none");
	$("#copyrowlist").css("display", "none");
	$("#moverowlist").css("display", "none");

	$("#viewtwo_style2").css("display", "none");
	$("#rowdetails_style2").css("display", "none");
	$("#noteswindow_style2").css("display", "none");
	$("#alertswindow_style2").css("display", "none");
	$("#copyrowlist_style2").css("display", "none");
	$("#moverowlist_style2").css("display", "none");

	$("#col8Filter").css('display', 'none');

})

function confirmModalCopyMove(targetELEMENT, targetRowName) {
	targetCopyMoveElement = targetELEMENT;

	let headerCopyMoveText = "CONFIRM BOX";
	let detailsCopyMoveText = "Please confirm to proceed?";

	let unCheckRow = $(`.${targetELEMENT}`).children(".sublist-check-box").hasClass("checkbox_show");

	if (targetELEMENT.includes("copyto")) {
		headerCopyMoveText = "COPY ROW";
		detailsCopyMoveText = `Confirm to copy ${targetRowName} row?`;
	} else if (targetELEMENT.includes("moveto")) {
		headerCopyMoveText = "MOVE ROW";
		detailsCopyMoveText = `Confirm to move ${targetRowName} row?`;
	}

	if (unCheckRow) {
		headerCopyMoveText = "UNCHECK ROW";
		detailsCopyMoveText = `Confirm to uncheck ${targetRowName} row?`;
	}

	$("#universal_confirm_modal #confirm_header p").html(headerCopyMoveText);
	$("#universal_confirm_modal #confirm_deatis p").html(detailsCopyMoveText);
	$('#universal_confirm_modal').modal('show');

}

let mnResultTitle = "";
let mnResultSubTitle = "";

function displayChartManageResult(itemTitle, itemSubTitle) {
	mnResultTitle = itemTitle;
	mnResultSubTitle = itemSubTitle;
	$('#manageResultChartDisplay_modal').modal('show');
	document.querySelector("#manageResultChartDisplay_modal .question-delete .chart-name").innerHTML = mnResultSubTitle;
}

function chartDispConfirmButton(thisChart) {

	
	$('#manageResultChartDisplay_modal .modal-body').addClass("disable-pointer");
	let initState = $(thisChart).html();
	$(thisChart).html('<i class="fa fa-spinner fa-spin"></i> Confirm');
	$(thisChart).prop("disabled", true);
	let $this = $(thisChart);
	setTimeout(function() {
		
		$('#manageResultChartDisplay_modal .modal-body').removeClass("disable-pointer");
		$this.prop("disabled", false);
		$this.html(initState);

		$('#manageResultChartDisplay_modal').modal('hide');

		document.querySelector("#chartPage .chart-title .left-item").innerHTML = mnResultTitle;
		document.querySelector("#chartPage .chart-title .right-item").innerHTML = mnResultSubTitle;

		// Will Remove On Final Implement
		// document.getElementById("firstOpen").click();
		
		
		$(".select-item-table").css("display", "none");
		$(`#chartPage`).css("display", "block");

		$(`#actual_item_title`).css("display", "none");
		$(`#actual_subitem_title`).css("display", "none");
		$(`#loading_item_title`).css("display", "block");
		$(`#loading_subitem_title`).css("display", "block");
		
		setTimeout(() => {
			$(`#actual_item_title`).css("display", "block");
			$(`#actual_subitem_title`).css("display", "block");
			$(`#loading_item_title`).css("display", "none");
			$(`#loading_subitem_title`).css("display", "none");
		}, 2000);

		
		// Will Remove On Final Implement
		// gotoChartPage('Main', 'scorer-meter-1', 'scorer-meter-2', 'scorer-meter-3');


		tableProgressBarAnimation('Main', Math.floor(Math.random() * (100 - 0 + 1)), 'inner-progress-style12', 'inner-progress-text-style12');
		$(`#Main .style12-section .box-style12 .no-result`).css("display", "block");

		mnResultTitle = "";
		mnResultSubTitle = "";

	}, 2000);

}

function op4SaveStartBtn(thisStart){
	if($("#op4_belowBtn_container input").val().trim() == ""){
		$("#op4_belowBtn_container .option4-below-control-input").addClass("border-red");
		if (!$("#op4_belowBtn_container").children("div.error-message").length) {
		  $("#op4_belowBtn_container").append(`<div class="error-message">
			<p>A value must be entered</p>
		  </div>`);
		}
	} else {
		$('body').addClass("disable-pointer");
		let initState = $(thisStart).html();
		$(thisStart).html('<i class="fa fa-spinner fa-spin"></i> Save & Start');
		$(thisStart).prop("disabled", true);
		let $this = $(thisStart);
		setTimeout(function() {
			$('body').removeClass("disable-pointer");
			$this.prop("disabled", false);
			$this.html(initState);

			$("#mnTemp_saveStart").modal("show");
		}, 2000);
	}
}

function mnTempSaveStartBtn(thisStart){
	if($("#mnTemp_belowBtn_container input").val().trim() == ""){
		$("#mnTemp_belowBtn_container .option4-below-control-input").addClass("border-red");
		if (!$("#mnTemp_belowBtn_container").children("div.error-message").length) {
		  $("#mnTemp_belowBtn_container").append(`<div class="error-message">
			<p>A value must be entered</p>
		  </div>`);
		}
	} else {
		$('body').addClass("disable-pointer");
		let initState = $(thisStart).html();
		$(thisStart).html('<i class="fa fa-spinner fa-spin"></i> Save & Start');
		$(thisStart).prop("disabled", true);
		let $this = $(thisStart);
		setTimeout(function() {
			$('body').removeClass("disable-pointer");
			$this.prop("disabled", false);
			$this.html(initState);

			$("#mnTemp_saveStart").modal("show");
		}, 2000);
	}
}

function mnTempSaveStartBackBtn(thisBack){
	$('#mnTemp_saveStart .modal-body').addClass("disable-pointer");
	let initState = $(thisBack).html();
	$(thisBack).html('<i class="fa fa-spinner fa-spin"></i> Back');
	$(thisBack).prop("disabled", true);
	let $this = $(thisBack);

	setTimeout(function() {
		$('#mnTemp_saveStart .modal-body').removeClass("disable-pointer");
		$this.prop("disabled", false);
		$this.html(initState);

		$("#mnTemp_saveStart").modal("hide");
  	}, 2000);
}

function showConfirmSample4StartBtn(thisDone) {
	$('#mnTemp_saveStart .modal-body').addClass("disable-pointer");
	let initState = $(thisDone).html();
	$(thisDone).html('<i class="fa fa-spinner fa-spin"></i> Done');
	$(thisDone).prop("disabled", true);
	let $this = $(thisDone);

	setTimeout(function() {
		$('#mnTemp_saveStart .modal-body').removeClass("disable-pointer");
		$this.prop("disabled", false);
		$this.html(initState);

		$('#mnTemp_saveStart').modal('hide');
		$('#sample4SaveStart_confirm_modal').modal('show');
  	}, 2000);
}

function sample4StartCancelBtn() {
	$('#mnTemp_saveStart').modal('show');
	$('body').addClass("modal-force-open-sample4");
}

function sample4StartConfirmBtn() {
	$('body').addClass("modal-force-open");
	$("#submitting_Info .submit-title").html("Submitting...");
	$('#submitting_Info').modal('show');

	let initStateBtn = $(".btn-save-start").html();
	$(".btn-save-start").html('<i class="fa fa-spinner fa-spin"></i> Submitting...');
	$(".btn-save-start").addClass('disabled');
	let $thisBtn = $(".btn-save-start");
	setTimeout(function() {
		$thisBtn.removeClass('disabled');
		$thisBtn.html(initStateBtn);
	}, 10000);

	// Option 4 save start information
	let $targetingTextSubmit = $("#submitting_file_info");
	$targetingTextSubmit.html("Saving sample 1 information...");
	let submitFileInfo = [ 
			"Saving sample 2 information...",
			"Saving sample 3 information...", 
			"Saving sample 4 information...",
			"Finishing..."];
  
	for (let i = 1; i <= 4; ++i) {
	  (function(index) {
		setTimeout(function() { 
		  $targetingTextSubmit.html(submitFileInfo[index-1]);
		}, i * 2000);
	  })(i);
	}
	
    setTimeout(function() { 
        $('#submitting_Info').modal('hide');
		$('body').removeClass("modal-force-open");

        $("#universalThankDraftModal #thank_draft_header p").html("THANK YOU");
		$("#universalThankDraftModal #thank_draft_details p").html("Your Request has been Successfully Processed");
		$('#universalThankDraftModal').modal('show');
    
	}, 10000);
}

$('#mnTemp_saveStart').on('show.bs.modal', function (e) {
	// $('body').addClass("modal-force-open-sample4");
}).on('hide.bs.modal', function (e) {
	$('body').removeClass("modal-force-open-sample4");
});

$('#sample4SaveStart_confirm_modal').on('show.bs.modal', function (e) {
	$('body').addClass("modal-force-open-confirm");
}).on('hide.bs.modal', function (e) {
	$('body').removeClass("modal-force-open-confirm");
});

if ($(".tab_4").hasClass("active")) {
	$(".content").style.backgroundColor = "#000";
}

function checkMailIcon() {
	let loginCondition = localStorage.getItem("loginStatus");
	if (loginCondition == "LOGGED_IN") {
		window.location.href = "email.html";
	} else {
		$('#loginRequired').modal('show');
	}
}

function controlFilterConfirmModal(filterSaveThis) {
	
	$('#filter-modal .modal-body').addClass("disable-pointer");
    let initState = $(filterSaveThis).html();
	$(filterSaveThis).html('<i class="fa fa-spinner fa-spin"></i> Save');
	$(filterSaveThis).prop("disabled", true);
	let $this = $(filterSaveThis);

	setTimeout(function() {
        $('#filter-modal .modal-body').removeClass("disable-pointer");
		$this.prop("disabled", false);
		$this.html(initState);

        $('#filter_confirm_modal').modal('show');
    }, 2000);
}

function filterThankModal(filterTnkThis) {
	$('#filter_confirm_modal .modal-body').addClass("disable-pointer");
    let initState = $(filterTnkThis).html();
	$(filterTnkThis).html('<i class="fa fa-spinner fa-spin"></i> Confirm');
	$(filterTnkThis).prop("disabled", true);
	let $this = $(filterTnkThis);

	setTimeout(function() {
        $('#filter_confirm_modal .modal-body').removeClass("disable-pointer");
		$this.prop("disabled", false);
		$this.html(initState);

        $('#filter_confirm_modal').modal('hide');
		$('#filterThankYouModal').modal('show');
    }, 2000);
}

$('#filter-modal').on('show.bs.modal', function (e) {
	// $('body').addClass("modal-open-filter");
}).on('hide.bs.modal', function (e) {
	$('body').removeClass("modal-open-filter");
});

$('#filter_confirm_modal').on('show.bs.modal', function (e) {
	$('body').addClass("modal-open-filter-confirm").addClass("modal-open-filter");;
}).on('hide.bs.modal', function (e) {
	$('body').removeClass("modal-open-filter-confirm");
});

$('#filterThankYouModal').on('show.bs.modal', function (e) {
	$('body').addClass("modal-open-filter-thanks");
}).on('hide.bs.modal', function (e) {
	$('body').removeClass("modal-open-filter-thanks");
	filterThankCloseBtn();
});

$('#mnAccountThankModal').on('show.bs.modal', function (e) {
	$('body').addClass("modal-open-filter-thanks");
}).on('hide.bs.modal', function (e) {
	$('body').addClass("modal-open-filter-thanks");
	window.location.href = 'index.html';
});

function saveAccountInfo(){
	$("#submitting_file_info").html("Submitting account information");
	$("#submitting_Info .submit-title").html("Submitting...");
	$('#submitting_Info').modal('show');
	$("#main_acSave").css("display", "none");
    $("#loading_acSave").css("display", "block");

	setTimeout(function() { 
		$("#submitting_file_info").html("Finishing...");
	}, 2000);

    setTimeout(function() { 
        $('#submitting_Info').modal('hide');
		$("#loading_acSave").css("display", "none");
    	$("#main_acSave").css("display", "block");

        $('#mnAccountThankModal').modal('show');
    }, 4000);
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

function controlGenerateBtn(){
	$("#submitting_file_info").html("Submitting information...");
	$("#submitting_Info .submit-title").html("Submitting...");
	$('#submitting_Info').modal('show');
	setTimeout(function() { 
        $("#submitting_file_info").html("Finishing...");
    }, 2000);
    setTimeout(function() { 
        $('#submitting_Info').modal('hide');

        $('#onlyThankModal').modal('show');
    }, 4000);
}

$('#onlyThankModal').on('show.bs.modal', function (e) {
	$('body').addClass("modal-force-generate-btn");
}).on('hide.bs.modal', function (e) {
	$('body').removeClass("modal-force-generate-btn");
});

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
	$('#submitting_Info').modal('show');
	$("#submitting_Info .submit-title").html("Logging out...");
	setTimeout(function() { 
		$('#submitting_Info').modal('hide');
		localStorage.removeItem('loginStatus');
		window.location.href = "index.html";
	}, 4000);
}

function gotoSystemStatus() {
	let loginCondition = localStorage.getItem("loginStatus");
	if (loginCondition == "LOGGED_IN") {
		localStorage.setItem("emailTabShowing", "systemStatus");
		window.location.href = "email.html";
	} else {
		$('#loginRequired').modal('show');
	}

}

function gotoContactStatus() {
	let loginCondition = localStorage.getItem("loginStatus");
	if (loginCondition == "LOGGED_IN") {
		localStorage.setItem("emailTabShowing", "contactStatus");
		window.location.href = "email.html";
	} else {
		$('#loginRequired').modal('show');
	}
}

$('#textEditorThankModal').on('show.bs.modal', function (e) {
	$('body').addClass("modal-open-filter-thanks");
}).on('hide.bs.modal', function (e) {
	$('body').removeClass("modal-open-filter-thanks");
});


$('#saveDraftThankYouModal').on('show.bs.modal', function (e) {
	$('body').addClass("modal-save-draft-thanks");
}).on('hide.bs.modal', function (e) {
	$('body').removeClass("modal-save-draft-thanks");
});

function rotateLoadingBar(selector)
{
	$(selector).animate( { left: $('.loading-bar').width() }, 2000, function(){
		$(selector).css("left", -($(selector).width()) + "px");
		rotateLoadingBar(selector);
	});
}

rotateLoadingBar('.bar-animation');


$(".btn-generate").click(function() {
	let initState = $(this).html();
	$(this).html('<i class="fa fa-spinner fa-spin"></i> Submitting...');
	$(this).addClass('disabled');
	let $this = $(this);
	setTimeout(function() {
		$this.removeClass('disabled');
		$this.html(initState);
	}, 4000);
});

$(".btn-done").click(function() {
	let initState = $(this).html();
	$(this).html('<i class="fa fa-spinner fa-spin"></i> Submitting...');
	$(this).addClass('disabled');
	let $this = $(this);
	setTimeout(function() {
		$this.removeClass('disabled');
		$this.html(initState);
	}, 4000);
});

$("#dropBtnInput").keyup(function(){
    $("#dropBtnModal .checkbox-table-loading").css("display", "block");
    $("#dropBtnModal .checkbox-table-scroll").css("display", "none");

    setTimeout(() => {
        $("#dropBtnModal .checkbox-table-loading").css("display", "none");
        $("#dropBtnModal .checkbox-table-scroll").css("display", "block");
    }, 1000);
});

$("#dropBtnFind").click(function () {
    $("#dropBtnModal .checkbox-table-loading").css("display", "block");
    $("#dropBtnModal .checkbox-table-scroll").css("display", "none");

    setTimeout(() => {
        $("#dropBtnModal .checkbox-table-loading").css("display", "none");
        $("#dropBtnModal .checkbox-table-scroll").css("display", "block");
    }, 1000);
});

$("#dropBtnSort").click(function () {
    $("#dropBtnModal .checkbox-table-loading").css("display", "block");
    $("#dropBtnModal .checkbox-table-scroll").css("display", "none");

    setTimeout(() => {
        $("#dropBtnModal .checkbox-table-loading").css("display", "none");
        $("#dropBtnModal .checkbox-table-scroll").css("display", "block");
    }, 1000);
});


// Manage Data Option 3: Radio Button Click Animation
$(".radio-selection-option input[type = 'radio'][name = 'data-set-radio-button']").click(function(){
    $("#op3_dataTable_wrap").css("display", "none");
	$("#op3_table_loading").css("display", "block");
	setTimeout(() => {
		$("#op3_dataTable_wrap").css("display", "block");
		$("#op3_table_loading").css("display", "none");
	}, 2000);

	let optionSelection = 1;
	if($(".radio input[type = 'radio'][name = 'data-set-radio-button']:checked").val() == "Source Option 2"){
		optionSelection = 2;
	}

	let option3TableLength = $("#man-data-op3-table tbody tr").length;

	for(textNo=0; textNo<option3TableLength; textNo++){
		$(`#man-data-op3-table tbody tr:nth-child(${textNo+1}) td`).html(`Option ${optionSelection} - Text ${textNo + 1}`);
	}

	// Ashiq coding (Also exists on the top: 1450 No Line)
	// if (optionSelection == 1) {
	// 	op3TableRender(opt3TableData1);
	// 	opt3TableData = opt3TableData1;
	// } else if (optionSelection == 2) {
	// 	op3TableRender(opt3TableData2);
	// 	opt3TableData = opt3TableData2;
	// }
});

$(document).mouseup(function(e) {
	// Manage Template Box Info Tooltip Mouse Up
    var infoTooltips = $('.template_box .info_box[data-toggle="tooltip"]');
    // if the target of the click isn't the container nor a descendant of the container
    if (!infoTooltips.is(e.target) && infoTooltips.has(e.target).length === 0) {
      infoTooltips.tooltip('hide');
    }

	// Mouse Up Condition For All The Manage Existing Table FILTER
    var mainTableFilterModal = $('#dropBtnModal');
    if (!mainTableFilterModal.is(e.target) && mainTableFilterModal.has(e.target).length === 0 && (e.target != $('html').get(0))) {
        mainTableFilterModal.css("display", "none");
        $("i.fa-caret-down.down-animation-icon").removeClass("down-animation-icon");
    }

	// Mouse Up Condition For Manage Result Table FILTER
    var mnResFilterModal = $('#col8Filter');
    if (!mnResFilterModal.is(e.target) && mnResFilterModal.has(e.target).length === 0 && (e.target != $('html').get(0))) {
		mnResFilterModal.css("display", "none");
		const rotateIcon = document.querySelectorAll(".outer-table-style12-box i.fa-caret-down.down-animation-icon");
		for (let i = 0; i < rotateIcon.length; i++) {
			$(rotateIcon[i]).removeClass("down-animation-icon");
		}
    }

	// Mouse Up Condition For Manage Result ALL POPUPS
    var mnResViewTwo = $('#viewtwo');
    var mnResViewTwo_style2 = $('#viewtwo_style2');
    var mnResRowDetails = $('#rowdetails');
    var mnResRowDetails_style2 = $('#rowdetails_style2');
    var mnResNoteWindow = $('#noteswindow');
    var mnResNoteWindow_style2 = $('#noteswindow_style2');
    var mnResAlertWindow = $('#alertswindow');
    var mnResAlertWindow_style2 = $('#alertswindow_style2');
    var mnResMoveTo = $('#moverowlist');
    var mnResMoveTo_style2 = $('#moverowlist_style2');
    var mnResCopyTo = $('#copyrowlist');
    var mnResCopyTo_style2 = $('#copyrowlist_style2');

    if (!mnResViewTwo.is(e.target) && mnResViewTwo.has(e.target).length === 0 && (e.target != $('html').get(0))) {
        mnResViewTwo.css("display", "none");
    }

	if (!mnResViewTwo_style2.is(e.target) && mnResViewTwo_style2.has(e.target).length === 0 && (e.target != $('html').get(0))) {
        mnResViewTwo_style2.css("display", "none");
    }

	if (!mnResRowDetails.is(e.target) && mnResRowDetails.has(e.target).length === 0 && (e.target != $('html').get(0))) {
        mnResRowDetails.css("display", "none");
    }

	if (!mnResRowDetails_style2.is(e.target) && mnResRowDetails_style2.has(e.target).length === 0 && (e.target != $('html').get(0))) {
        mnResRowDetails_style2.css("display", "none");
    }

	if (!mnResNoteWindow.is(e.target) && mnResNoteWindow.has(e.target).length === 0 && (e.target != $('html').get(0))) {
        mnResNoteWindow.css("display", "none");
    }
	if (!mnResNoteWindow_style2.is(e.target) && mnResNoteWindow_style2.has(e.target).length === 0 && (e.target != $('html').get(0))) {
        mnResNoteWindow_style2.css("display", "none");
    }
	if (!mnResAlertWindow.is(e.target) && mnResAlertWindow.has(e.target).length === 0 && (e.target != $('html').get(0))) {
		let alertRowDeleteConfirm = window.getComputedStyle(document.querySelector(`#universal_confirm_modal`));
		let alertRowDeleteThank = window.getComputedStyle(document.querySelector(`#universalThankDraftModal`));
		if((alertRowDeleteConfirm.display == "none") && (alertRowDeleteThank.display == "none")){
			mnResAlertWindow.css("display", "none");
		}
    }

	if (!mnResAlertWindow_style2.is(e.target) && mnResAlertWindow_style2.has(e.target).length === 0 && (e.target != $('html').get(0))) {
		let alertRowDeleteConfirm = window.getComputedStyle(document.querySelector(`#universal_confirm_modal`));
		let alertRowDeleteThank = window.getComputedStyle(document.querySelector(`#universalThankDraftModal`));
		if((alertRowDeleteConfirm.display == "none") && (alertRowDeleteThank.display == "none")){
			mnResAlertWindow_style2.css("display", "none");
		}
    }

	if (!mnResMoveTo.is(e.target) && mnResMoveTo.has(e.target).length === 0 && (e.target != $('html').get(0))) {
		let itemRenamePopupStyle = window.getComputedStyle(document.querySelector(`#remaneAllLevelItem`));
		let itemRenameThank = window.getComputedStyle(document.querySelector(`#thankAfterAllListRename`));
		let listInfoTooltip = window.getComputedStyle(document.querySelector(`#list_info_tooltip`));
		let deleteLeftItemList = window.getComputedStyle(document.querySelector(`#delete_leftItem_list`));
		let deleteRightLevelList = window.getComputedStyle(document.querySelector(`#delet-movetolistopt2`));
		
		if((itemRenamePopupStyle.display == "none") && (itemRenameThank.display == "none") && (listInfoTooltip.display == "none") && (deleteLeftItemList.display == "none") && (deleteRightLevelList.display == "none")){
			mnResMoveTo.css("display", "none");
		}
    }
	if (!mnResMoveTo_style2.is(e.target) && mnResMoveTo_style2.has(e.target).length === 0 && (e.target != $('html').get(0))) {
		let itemRenamePopupStyle = window.getComputedStyle(document.querySelector(`#remaneAllLevelItem`));
		let itemRenameThank = window.getComputedStyle(document.querySelector(`#thankAfterAllListRename`));
		let listInfoTooltip = window.getComputedStyle(document.querySelector(`#list_info_tooltip`));
		let deleteLeftItemList = window.getComputedStyle(document.querySelector(`#delete_leftItem_list`));
		let deleteRightLevelList = window.getComputedStyle(document.querySelector(`#delet-movetolistopt2_style29`));
		
		if((itemRenamePopupStyle.display == "none") && (itemRenameThank.display == "none") && (listInfoTooltip.display == "none") && (deleteLeftItemList.display == "none") && (deleteRightLevelList.display == "none")){
			mnResMoveTo_style2.css("display", "none");
		}
    }
	if (!mnResCopyTo.is(e.target) && mnResCopyTo.has(e.target).length === 0 && (e.target != $('html').get(0))) {
		let itemRenamePopupStyle = window.getComputedStyle(document.querySelector(`#remaneAllLevelItem`));
		let itemRenameThank = window.getComputedStyle(document.querySelector(`#thankAfterAllListRename`));
		let listInfoTooltip = window.getComputedStyle(document.querySelector(`#list_info_tooltip`));
		let deleteLeftItemList = window.getComputedStyle(document.querySelector(`#delete_leftItem_list`));
		let deleteRightLevelList = window.getComputedStyle(document.querySelector(`#delet-copytolistopt2`));
		
		
		if((itemRenamePopupStyle.display == "none") && (itemRenameThank.display == "none") && (listInfoTooltip.display == "none") && (deleteLeftItemList.display == "none") && (deleteRightLevelList.display == "none")){
			mnResCopyTo.css("display", "none");
		}
    }
	if (!mnResCopyTo_style2.is(e.target) && mnResCopyTo_style2.has(e.target).length === 0 && (e.target != $('html').get(0))) {
		let itemRenamePopupStyle = window.getComputedStyle(document.querySelector(`#remaneAllLevelItem`));
		let itemRenameThank = window.getComputedStyle(document.querySelector(`#thankAfterAllListRename`));
		let listInfoTooltip = window.getComputedStyle(document.querySelector(`#list_info_tooltip`));
		let deleteLeftItemList = window.getComputedStyle(document.querySelector(`#delete_leftItem_list`));
		let deleteRightLevelList = window.getComputedStyle(document.querySelector(`#delet-copytolistopt2_style2`));
		
		if((itemRenamePopupStyle.display == "none") && (itemRenameThank.display == "none") && (listInfoTooltip.display == "none") && (deleteLeftItemList.display == "none") && (deleteRightLevelList.display == "none")){
			mnResCopyTo_style2.css("display", "none");
		}
    }

	var listInfoTooltip = $('#list_info_tooltip');
    if (!listInfoTooltip.is(e.target) && listInfoTooltip.has(e.target).length === 0 && (e.target != $('html').get(0))) {
        listInfoTooltip.css("display", "none");
    }

});

function formByTextEditOpener(formThis, formTarget){
	let initState = $(formThis).html();
	$('body').addClass("disable-pointer");
	$(formThis).html('<i class="fa fa-spinner fa-spin"></i> Form By Text Editor <span><i class="fas fa-arrow-right" id="arrow-icon"></i></span>');
	$(formThis).prop("disabled", true);
	$(formThis).addClass("padding-left-25");
	let $this = $(formThis);

	setTimeout(function() {
		$('body').removeClass("disable-pointer");
		$this.prop("disabled", false);
		$this.removeClass("padding-left-25");
		$this.html(initState);

		$(`#${formTarget}`).modal('show');
	}, 2000);
}