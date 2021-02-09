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
	document.getElementById("hide559").style.display = "none";
	document.getElementById("tab_2").style.paddingTop = "0px";
	document.getElementById("opt-content").style.marginTop = "0px";
	evt.currentTarget.className += " active";
}
// CHOOSE OPTION SECTION END


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

listItemData.forEach((item, index) => {
	let htmllist = `<li class="list-item-${index + 1}">
	<p>${item}</p>
	<div class="green-check-box display-none">
		<i class="fas fa-check"></i>
	</div>
	<div class="arrow-li-box arrow-li-box-background-color-1">
		<i class="fas fa-caret-right arrow-li-box-i-color-1"></i>
	</div>
	</li>`;
	main_list.innerHTML += htmllist;
	/* Update this function By Ashiq */
	let list_data1 = "",
		list_data2 = "",
		list_data3 = "",
		length = 72;
	// modal ashiq
	for (let i = 1; i <= length; i++) {
		let elementHtml = `<li class="option-list-${index + 1}-${i}">
		<p>Level ${index + 1} - Item ${i}</p>
		<div class="sublist-check-box">
			<i class="fas fa-check"></i>
		</div>
		<div class="sublist-cancel-box" data-toggle="modal" data-target="#deletlistopt2">
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
	const sub_ul_list = document.querySelector("#sub-ul-list");
	sub_ul_list.innerHTML += `
		<ul class="sub-list" id="sub-div-list-1-${index + 1}">
			${list_data1}
		</ul>
		<ul class="sub-list" id="sub-div-list-2-${index + 1}">
			${list_data2}
		</ul>
		<ul class="sub-list" id="sub-div-list-3-${index + 1}">
			${list_data3}
		</ul>`;

	let sub_div_list_id1 = document.getElementById("sub-div-list-1-" + (index + 1));
	sub_div_list_id1.style.display = "none";
	sub_div_list_id1.style.marginLeft = "300px";

	let sub_div_list_id2 = document.getElementById("sub-div-list-2-" + (index + 1));
	sub_div_list_id2.style.display = "none";
	sub_div_list_id2.style.marginLeft = "600px";

	let sub_div_list_id3 = document.getElementById("sub-div-list-3-" + (index + 1));
	sub_div_list_id3.style.display = "none";
	sub_div_list_id3.style.marginLeft = "900px";
	/* Update End By Ashiq */
});

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
			$(sub_div_list_id1_old).toggle();
			$(sub_div_list_id1).toggle();
			sub_div_list_id1_old = sub_div_list_id1;
		} else {
			$(sub_div_list_id1_old).toggle();
			sub_div_list_id1_old = "";
		}

		if (sub_div_list_id2 !== sub_div_list_id2_old) {
			$(sub_div_list_id2_old).toggle();
			$(sub_div_list_id2).toggle();
			sub_div_list_id2_old = sub_div_list_id2;
		} else {
			$(sub_div_list_id2_old).toggle();
			sub_div_list_id2_old = "";
		}

		if (sub_div_list_id3 !== sub_div_list_id3_old) {
			$(sub_div_list_id3_old).toggle();
			$(sub_div_list_id3).toggle();
			sub_div_list_id3_old = sub_div_list_id3;
		} else {
			$(sub_div_list_id3_old).toggle();
			sub_div_list_id3_old = "";
		}
	}
}
/* New Function End */
var opt2_left_list = "";
main_list.addEventListener("click", function (e) {
	let target = e.target;
	const elementName = ["DIV", "P"];
	if (elementName.includes(target.tagName)) {
		target = target.parentNode;
	} else if (target.tagName === "I") {
		target = target.parentNode.parentNode;
	}

	$(".highlight_li .arrow-li-box-i-color-2").addClass("arrow-li-box-i-color-1");
	$(".highlight_li .arrow-li-box-i-color-2").removeClass(
		"arrow-li-box-i-color-2"
	);
	$(".highlight_li .display-block").addClass("display-none");
	$(".highlight_li .display-block").removeClass("display-block");
	$(".highlight_li .arrow-li-box-background-color-2").addClass("arrow-li-box-background-color-1");
	$(".highlight_li .arrow-li-box-background-color-2").removeClass("arrow-li-box-background-color-2");
	$(".highlight_li").removeClass("highlight_li");

	target.classList.add("highlight_li");
	target.childNodes[3].classList.remove("display-none");
	target.childNodes[3].classList.add("display-block");
	target.childNodes[5].classList.remove("arrow-li-box-background-color-1");
	target.childNodes[5].classList.add("arrow-li-box-background-color-2");
	target.childNodes[5].childNodes[1].classList.remove("arrow-li-box-i-color-1");
	target.childNodes[5].childNodes[1].classList.add("arrow-li-box-i-color-2");

	opt2_left_list = target.childNodes[1].innerHTML;
	item_click_handle(target.classList[0]);
});
// End here by ASHIQ


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
		if (target.className === "sublist-cancel-box") {
			deleteOpt2Modal(target.parentNode.classList[0]);
			return;
		}
		target = target.parentNode;
	} else if (target.tagName === "P") {
		target = target.parentNode;
	} else if (target.tagName === "I") {
		target = target.parentNode;
		if (target.className === "sublist-cancel-box") {
			deleteOpt2Modal(target.parentNode.classList[0]);
			return;
		}
		else target = target.parentNode;
	} else if (target.tagName !== "LI") return;

	if (oldLIClassname !== "" && oldLIClassname !== target.classList[0]) {
		let oldElement = document.querySelector(`.${oldLIClassname}`);
		oldElement.childNodes.forEach((element) => {
			if (element.className === "sublist-check-box") {
				element.style.display = "none";
			}
			if (element.className === "sublist-cancel-box") {
				element.style.display = "block";
			}
		});
	}


	target.childNodes.forEach((element) => {
		if (element.className === "sublist-check-box") {
			$(element).toggle();
		}
		if (element.className === "sublist-cancel-box") {
			$(element).toggle();
		}
	});

	oldLIClassname = target.classList[0];
	if (opt2_right_list == target.childNodes[1].innerHTML) {
		opt2_right_list = "";
	} else {
		opt2_right_list = target.childNodes[1].innerHTML;
	}
	$("#opt2-left").html(opt2_left_list);
	$("#opt2-right").html(opt2_right_list);
});

function deleteOpt2Modal(className) {
	let mng_opt2_delete = document.querySelector("#mng-opt2-delete");
	mng_opt2_delete.addEventListener("click", function () {
		let delObj = document.querySelector(`.${className}`);
		delObj.remove();
	});
}