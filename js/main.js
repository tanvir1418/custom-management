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
var deleteListClassName = ""

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

		if (w.hasClass('open')) {
			w.removeClass('open');
			w.height(0);
		} else {
			w.addClass('open');
			w.height(l.outerHeight(true));
		}

	});
});



// MAIN TAB START
$(".content .tab_content").hide();
$(".content .tab_content:nth-child(2)").show();

$("#tabs_ul li").click(function () {

	$("#tabs_ul li").removeClass("active");
	$(this).addClass("active");

	var current_tab = $(this).attr("data-list");
	$(".content .tab_content").hide();
	$("." + current_tab).show();
})


var ul = document.getElementById("tabs_ul");
var li_tabs = ul.getElementsByTagName("li");
for (var i = 0; i < li_tabs.length; i++) {
	li_tabs[i].addEventListener("click", function () {
		var current = ul.getElementsByClassName("active");
		current[0].className = current[0].className.replace("active", "");
		this.className += "active";

		var current_tab_value = this.getAttribute("data-list");
		document.getElementById(current_tab_value).style.display = "none";
		document.getElementById(current_tab_value).style.display = "block";

	});
}
// MAIN TAB END

// CHOOSE OPTION SECTION START
function openOption(evt, optionName) {
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
	// document.getElementById("hide559").style.display = "none";
	// document.getElementById("tab_2").style.paddingTop = "0px";
	// document.getElementById("opt-content").style.marginTop = "0px";
	evt.currentTarget.className += " active";
}
// CHOOSE OPTION SECTION END

// BACK BTN
$("#back-manage").click(function () {
	document.getElementById("option_1").style.display = "none";
	document.getElementById("hide559").style.display = "block";
	document.getElementById("tab_2").style.paddingTop="60px";
	document.getElementById("opt-content").style.marginTop="50px";
});


// CREATE & MANAGE TAB START

// for option 1
$(document).ready(function () {
	$('.tab-39').click(function () {
		$(".mytab-39").removeClass('tab-active-39');
		$(".mytab-39[data-id='" + $(this).attr('data-id') + "']").addClass("tab-active-39");
		$(".tab-39").removeClass('active-39');
		$(this).parent().find(".tab-39").addClass('active-39');
	});
});

$(document).ready(function () {
	$('#my567').addClass('createGreen');

	$('.zas').click(function () {
		$('#my567').addClass('createGreen');
		$('#my998').removeClass('manageGreen');
	});

	$('.pas').click(function () {
		$('#my998').addClass('manageGreen');
		$('#my567').removeClass('createGreen');
	});
});

// for option three
$(document).ready(function () {
	$('.tab-43').click(function () {
		$(".mytab-43").removeClass('tab-active-43');
		$(".mytab-43[data-id='" + $(this).attr('data-id') + "']").addClass("tab-active-43");
		$(".tab-43").removeClass('active-43');
		$(this).parent().find(".tab-43").addClass('active-43');
	});
});

$(document).ready(function () {
	$('#my745').addClass('createGreen');

	$('.zas43').click(function () {
		$('#my745').addClass('createGreen');
		$('#my746').removeClass('manageGreen');


	});

	$('.pas43').click(function () {
		$('#my746').addClass('manageGreen');
		$('#my745').removeClass('createGreen');

	});
});
// for option four
$(document).ready(function () {
	$('.tab-45').click(function () {
		$(".mytab-45").removeClass('tab-active-45');
		$(".mytab-45[data-id='" + $(this).attr('data-id') + "']").addClass("tab-active-45");
		$(".tab-45").removeClass('active-45');
		$(this).parent().find(".tab-45").addClass('active-45');
	});
});

$(document).ready(function () {
	$('#my444').addClass('createGreen');

	$('.zas45').click(function () {
		$('#my444').addClass('createGreen');
		$('#my445').removeClass('manageGreen');


	});

	$('.pas45').click(function () {
		$('#my445').addClass('manageGreen');
		$('#my444').removeClass('createGreen');

	});
});

// for option five
$(document).ready(function () {
	$('.tab-41').click(function () {
		$(".mytab-41").removeClass('tab-active-41');
		$(".mytab-41[data-id='" + $(this).attr('data-id') + "']").addClass("tab-active-41");
		$(".tab-41").removeClass('active-41');
		$(this).parent().find(".tab-41").addClass('active-41');
	});
});

$(document).ready(function () {
	$('#my399').addClass('createGreen');

	$('.zas41').click(function () {
		$('#my399').addClass('createGreen');
		$('#my993').removeClass('manageGreen');


	});

	$('.pas41').click(function () {
		$('#my993').addClass('manageGreen');
		$('#my399').removeClass('createGreen');

	});
});

// CREATE & MANAGE TAB END


// LOGIN DATA PASS START
const currentUser = localStorage.getItem("currentUser");
const user_div = document.getElementById("username_div");
if (currentUser != null && currentUser != "") {
	user_div.innerHTML = `<p class="name m-0">${currentUser}</p>`;
} else { }
// LOGIN DATA PASS END


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
	let htmllist = "", htmlDataModal = "";
	listItemData.forEach((item, index) => {
		htmllist += `<li class="list-item-${index + 1}">
		<p>${item}</p>
		<div class="green-check-box display-none">
			<i class="fas fa-check"></i>
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
			<div class="sublist-check-box checkbox_hide">
				<i class="fas fa-check"></i>
			</div>
			<div class="sublist-cancel-box checkbox_show" data-toggle="modal" data-target="#deletlistopt2">
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
		htmlDataModal += 
		`<ul class="sub-list checkbox_hide" style="margin-left: 300px;" id="sub-div-list-1-${index + 1}">
			${list_data1}
		</ul>
		<ul class="sub-list checkbox_hide" style="margin-left: 600px;" id="sub-div-list-2-${index + 1}">
			${list_data2}
		</ul>
		<ul class="sub-list checkbox_hide" style="margin-left: 900px;" id="sub-div-list-3-${index + 1}">
			${list_data3}
		</ul>`;
		/* Update End By Ashiq */
	});
	main_list.innerHTML += htmllist;
	document.querySelector("#sub-ul-list").innerHTML = htmlDataModal;
})();

/* New Function Start */
let sub_div_list_id1_old = "",
	sub_div_list_id2_old = "",
	sub_div_list_id3_old = "";

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
			target = target.parentNode;
		} else if (target.tagName === "I") {
			target = target.parentNode.parentNode;
		}
	
		if (oldTarget != "" && oldTarget !== target) {
			$(oldTarget).removeClass("highlight_li");
			$(oldTarget).children(".green-check-box").removeClass("display-block");
			$(oldTarget).children(".green-check-box").addClass("display-none");
			$(oldTarget).children(".arrow-li-box").removeClass("arrow-li-box-background-color-2");
			$(oldTarget).children(".arrow-li-box").addClass("arrow-li-box-background-color-1");
			$(oldTarget).children(".arrow-li-box").children(".fa-caret-right").removeClass("arrow-li-box-i-color-2");
			$(oldTarget).children(".arrow-li-box").children(".fa-caret-right").addClass("arrow-li-box-i-color-1");
		}
		$(target).toggleClass("highlight_li");
		$(target).children(".green-check-box").toggleClass("display-none display-block");
		$(target).children(".arrow-li-box").toggleClass("arrow-li-box-background-color-1 arrow-li-box-background-color-2");
		$(target).children(".arrow-li-box").children(".fa-caret-right").toggleClass("arrow-li-box-i-color-1 arrow-li-box-i-color-2");
		oldTarget = target;

		opt2_left_list = target.childNodes[1].innerHTML;
		item_click_handle(target.classList[0]);
	});
})();


const main_check_box = document.querySelector(".green-check-box");
const sublist_check_box = document.querySelector(".sub-list .sublist-check-box");
const sublist_cancel_box = document.querySelector(".sub-list .sublist-cancel-box");
const sub_list_1 = document.querySelector(".sub-list-1");
const arrow_right_box = document.querySelector(".main-list li .arrow-li-box");
const arrow_right = document.querySelector(".main-list li .arrow-li-box i");

// option 2 list item end


// NEXT BUTTON CLICK TO OPEN RECORD PAGE OPTION 2 ===START===

const option_2_list = document.querySelector(".listing");
const option_2_record = document.querySelector(".option-2-records");
option_2_record.style.display = "none";

$('#submit_list').click(function () {
	option_2_record.style.display = "block";
	option_2_list.style.display = "none"
});

$('#back-list').click(function () {
	option_2_record.style.display = "none";
	option_2_list.style.display = "block"
});

// NEXT BUTTON CLICK TO OPEN RECORD PAGE OPTION 2 ===END===

/* ================ Scroll Down START ============== */
$(document).ready(function () {
	$(".scroll-down").click(function () {
		const scrollable_list = document.querySelector(".scrollable-list");
		$(".scrollable-list").animate({
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

	// Set Datepicker
	// $("#datepicker-1").datepicker({
	//   beforeShow: function (input, inst) {
	//       setTimeout(function () {
	//           inst.dpDiv.css({
	//               bottom: $(".datepicker").offset().top + 35,
	//               left: $(".datepicker").offset().left
	//           });
	//       }, 0);
	//   }
	// });
	$("#datepicker-1").datepicker();
	//$("#datepicker-1").datepicker("setDate", "10w+1");
	$("#datepicker-1").datepicker("option", "dateFormat", "DD, MM d, yy");

	$("#datepicker-2").datepicker();
	//$("#datepicker-2").datepicker("setDate", "10w+1");
	$("#datepicker-2").datepicker("option", "dateFormat", "DD, MM d, yy");
});
// OPTION 3 DATE PICKER END

// OPTION 4 DATE PICKER END
let opt2_right_list = "",
	oldLIClassname = "";
const sub_ul_list = document.querySelector("#sub-ul-list");
sub_ul_list.addEventListener("click", function (e) {
	let target = e.target;
	if (target.tagName === "DIV") {
		if (target.className.indexOf("sublist-cancel-box")!=-1) {
			deleteListClassName = target.parentNode.classList[0];
			return;
		}
		target = target.parentNode;
	} else if (target.tagName === "P") {
		target = target.parentNode;
	} else if (target.tagName === "I") {
		target = target.parentNode;
		if (target.className.indexOf("sublist-cancel-box") != -1) {
			deleteListClassName = target.parentNode.classList[0];
			return;
		}
		else target = target.parentNode;
	} else if (target.tagName !== "LI") return;

	if (oldLIClassname !== "" && oldLIClassname !== target.classList[0]) {
		$(`.${oldLIClassname}`).children(".sublist-check-box").addClass("checkbox_hide");
		$(`.${oldLIClassname}`).children(".sublist-check-box").removeClass("checkbox_show");
		$(`.${oldLIClassname}`).children(".sublist-cancel-box").removeClass("checkbox_hide");
		$(`.${oldLIClassname}`).children(".sublist-cancel-box").addClass("checkbox_show");
	}

	$(target).children(".sublist-check-box").toggleClass("checkbox_hide checkbox_show");
	$(target).children(".sublist-cancel-box").toggleClass("checkbox_hide checkbox_show");

	oldLIClassname = target.classList[0];
	if (opt2_right_list == target.childNodes[1].innerHTML) {
		opt2_right_list = "";
	} else {
		opt2_right_list = target.childNodes[1].innerHTML;
	}
	$("#opt2-left").html(opt2_left_list);
	$("#opt2-right").html(opt2_right_list);
});


$("#mng-opt2-delete").click(function () {
	let delObj = document.querySelector(`.${deleteListClassName}`);
	delObj.remove();
});

// Manage Data Option 3 Start
function opt3Reset(e) {
	let element = $(e).parent().parent().parent().children(".content-43");
	element.find("#opt3-textarea-1").val("");
	element.find(".datepicker #datepicker-1").val("");
	element.find(".datepicker #datepicker-2").val("");
}
// Manage Data Option 3 End

// Manage Data Option 5 Start
function opt5ResetBtn(e){
	let element = $(e).parent().parent().parent();
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
}

function addCategory(e) {
	let inpVal= $(e).parent().parent().find("input.plus-input").val();
	if (inpVal != "") {
		let selectCat = $("#opt5-select-category");
		let opt = `<option value="${inpVal}">${inpVal}</option>`;
		selectCat.append(opt);
	}
}
// Manage Data Option 5 End

// Manage Data Option 1 Existing Pagination Start
// let
(function manDtOpt1Exist() {
	let tableDes =
	`<thead>
		<tr>
			<th scope="col">
				ROW
				<div class="head-filter">
					<i class="fas fa-times"></i>
				</div>
				<div class="drop-filter">
					<i class="fas fa-caret-down"></i>
				</div>
			</th>
			<th scope="col">
				RECORDS COUNT
				<div class="head-filter">
					<i class="fas fa-times"></i>
				</div>
				<div class="drop-filter">
					<i class="fas fa-caret-down"></i>
				</div>
			</th>
			<th scope="col">
				SAVED NAME
				<div class="head-filter">
					<i class="fas fa-times"></i>
				</div>
				<div class="drop-filter">
					<i class="fas fa-caret-down"></i>
				</div>
			</th>
			<th scope="col">
				CREATED DATE TIME
				<div class="head-filter">
					<i class="fas fa-times"></i>
				</div>
				<div class="drop-filter">
					<i class="fas fa-caret-down"></i>
				</div>
			</th>
			<th scope="col">
				LAST UPDATE DATE TIME
				<div class="head-filter">
					<i class="fas fa-times"></i>
				</div>
				<div class="drop-filter" data-toggle="modal" data-target="#dropBtnModal">
					<i class="fas fa-caret-down"></i>
				</div>
			</th>
			<th scope="col">ACTIONS</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th class="row-data" scope="row">1</th>
			<td class="records-count">
				<a href="#" data-toggle="modal" data-target="#hyperTextModal1" style="color: black" >
					<p>1234</p>
				</a>
			</td>
			<td>
				<input class="save-name" placeholder="Sample 1234" type="text" />
			</td>
			<td>
				<div class="create-date-time date-time-39">
					<p>01/01/2021</p>
					<p>12:36 AM</p>
				</div>
			</td>
			<td>
				<div class="last-date-time date-time-39">
					<p>01/01/2021</p>
					<p>12:36 AM</p>
				</div>
			</td>
			<td>
				<div class="actions39">
					<a onclick="tabChange(this)">Click To View/Update</a>
					<div class="cancel-box">
						<i class="fas fa-times"></i>
					</div>
				</div>
			</td>
		</tr>
	</tbody>`;
	$("#man-data-opt1-exist").html(tableDes);
})();

function tabChange(e) {
	let tabMain = $(e).parent().parent().parent().parent().parent().parent().parent();
	let createNew = tabMain.find("div.create-manage-tab div.create-new-content.zas");
	createNew.find("div.createpera p").html("View/Update");
	createNew.click();
}
// Manage Data Option 1 Existing Pagination End