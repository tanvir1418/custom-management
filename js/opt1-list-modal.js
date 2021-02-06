// option 1 MODAL list item start

const select_item_main = document.querySelector(".select-item-main");

// Added by ASHIQ
const listItemDatamodal = [
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

listItemDatamodal.forEach((item, index) => {
	let htmllistmodal = `<li class="modallist-item-${index + 1}">
	<p>${item}</p>
	<div class="green-check-box display-none">
		<i class="fas fa-check"></i>
	</div>
	<div class="arrow-li-box arrow-li-box-background-color-1">
		<i class="fas fa-caret-right arrow-li-box-i-color-1"></i>
	</div>
	</li>`;
	select_item_main.innerHTML += htmllistmodal;
	/* Update this function By Ashiq */
	let modallist_data1 = "",
		modallist_data2 = "",
		modallist_data3 = "",
		length = 72;
		// modal ashiq
	for (let i = 1; i <= length; i++) {
		let elementHtml = `<li class="option-list-${index + 1}-${i}">
		<p>Level ${index + 1} - Item ${i}</p>
		<div class="sublist-check-box">
			<i class="fas fa-check"></i>
		</div>
		<div class="sublist-cancel-box" data-toggle="modal" data-target="#popupModal">
			<i class="fas fa-times"></i>
		</div>
		</li>`;
		if (length < 61) {
			if (i <= 20) {
				modallist_data1 += elementHtml;
			} else if (i >= 21 && i <= 40) {
				modallist_data2 += elementHtml;
			} else {
				modallist_data3 += elementHtml;
			}
		} else {
			let divide = Math.floor(length / 3),
				len = divide + (length % 3);
			if (i <= len) {
				modallist_data1 += elementHtml;
			} else if (i > len && i <= len + divide) {
				modallist_data2 += elementHtml;
			} else {
				modallist_data3 += elementHtml;
			}
		}
	}
	const sub_ul_modallist = document.querySelector("#sub-ul-modallist");
	sub_ul_modallist.innerHTML += `
		<ul class="submodal-list" id="submodal-div-list-1-${index + 1}">
			${modallist_data1}
		</ul>
		<ul class="submodal-list" id="submodal-div-list-2-${index + 1}">
			${modallist_data2}
		</ul>
		<ul class="submodal-list" id="submodal-div-list-3-${index + 1}">
			${modallist_data3}
		</ul>`;

	let submodal_div_list_id1 = document.getElementById("submodal-div-list-1-" + (index + 1));
	submodal_div_list_id1.style.display = "none";
	submodal_div_list_id1.style.marginLeft = "300px";

	let submodal_div_list_id2 = document.getElementById("submodal-div-list-2-" + (index + 1));
	submodal_div_list_id2.style.display = "none";
	submodal_div_list_id2.style.marginLeft = "580px";

	let sub_div_list_id3 = document.getElementById("submodal-div-list-3-" + (index + 1));
	sub_div_list_id3.style.display = "none";
	sub_div_list_id3.style.marginLeft = "860px";
	/* Update End By Ashiq */
});

/* New Function Start */
let submodal_div_list_id1_old = "",
	submodal_div_list_id2_old = "",
	sub_div_list_id3_old = "";

function item_click_handle(listClassName) {
	let level_no = listClassName.match(/\d+/g);
	if (level_no != null) {
		const submodal_div_list_id1 = "#submodal-div-list-1-" + level_no,
			submodal_div_list_id2 = "#submodal-div-list-2-" + level_no,
			sub_div_list_id3 = "#submodal-div-list-3-" + level_no;
		if (submodal_div_list_id1 !== submodal_div_list_id1_old) {
			$(submodal_div_list_id1_old).toggle();
			$(submodal_div_list_id1).toggle();
			submodal_div_list_id1_old = submodal_div_list_id1;
		} else {
			$(submodal_div_list_id1_old).toggle();
			submodal_div_list_id1_old = "";
		}

		if (submodal_div_list_id2 !== submodal_div_list_id2_old) {
			$(submodal_div_list_id2_old).toggle();
			$(submodal_div_list_id2).toggle();
			submodal_div_list_id2_old = submodal_div_list_id2;
		} else {
			$(submodal_div_list_id2_old).toggle();
			submodal_div_list_id2_old = "";
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
select_item_main.addEventListener("click", function (e) {
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
	item_click_handle(target.classList[0]); // update
});

// option 1 MODAL list item end