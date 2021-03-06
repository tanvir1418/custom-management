// option 1 MODAL list item start

const select_item_main = document.querySelector(".select-item-main");

// Added by ASHIQ
let listItemDatamodal = []
for (let i = 1; i <= 29; i++) {
	let files = []
	for (let j = 1; j <= 72; j++) {
		files.push({
			id: `option-modallist-${i}-${j}`,
			item: `Level ${i} - Item ${j}`
		});
	}
	listItemDatamodal.push({
		id: `modallist-item-${i}`,
		item: `Item ${i}`,
		files
	})
}

function findFileList(_id) {
	for (let val of listItemDatamodal) {
		for (let file of val.files) {
			if (file.id == _id) return { id: val.id, item: val.item };
			else if (file.item == _id) return { id: file.id, item: file.item };
		}
	}
	return false;
}

(function modalListWithCount() {
	let htmllistmodal = "", htmlDataModal = "";
	listItemDatamodal.forEach(({ id, item, files }, index) => {
		htmllistmodal += `<li class="${id}">
		<p>${item}</p>
		<div class="green-check-box display-none">
			<i class="fas fa-check"></i>
		</div>
		<div class="grey-times-box display-none" flow="down" tooltip="Click to Delete" onclick="leftItemDeleteClick(this, 'op1')">
			<i class="fas fa-times"></i>
		</div>
		<div class="arrow-li-box arrow-li-box-background-color-1">
			<i class="fas fa-caret-right arrow-li-box-i-color-1"></i>
		</div>
		</li>`;
		/* Update this function By Ashiq */
		let modallist_data1 = "",
			modallist_data2 = "",
			modallist_data3 = "",
			length = files.length;
		files.forEach(({ id: _id, item }, idx) => {
			let i = idx + 1;
			let elementHtml = `<li class="${_id}">
			<p>${item}</p>
			<div class="sublist-info-box" customTooltip="${item}" onclick="levelInfoTooltipShow(this)">
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
		});

		htmlDataModal +=
			`<ul class="submodal-list checkbox_hide" style="margin-left: 300px;" id="submodal-div-list-1-${index + 1}">
			${modallist_data1}
		</ul>
		<ul class="submodal-list checkbox_hide" style="margin-left: 585px;" id="submodal-div-list-2-${index + 1}">
			${modallist_data2}
		</ul>
		<ul class="submodal-list checkbox_hide" style="margin-left: 870px;" id="submodal-div-list-3-${index + 1}">
			${modallist_data3}
		</ul>`;

	});
	select_item_main.innerHTML = htmllistmodal;
	document.querySelector("#sub-ul-modallist").innerHTML = htmlDataModal;
	/* Update End By Ashiq */
})();

/* New Function Start */
let submodal_div_list_id1_old = "",
	submodal_div_list_id2_old = "",
	submodal_div_list_id3_old = "";

let oldSelectedListOp1 = "";

function modalitem_click_handle(listClassName) {
	let level_no = listClassName.match(/\d+/g);
	if (level_no != null) {
		const submodal_div_list_id1 = "#submodal-div-list-1-" + level_no,
			submodal_div_list_id2 = "#submodal-div-list-2-" + level_no,
			submodal_div_list_id3 = "#submodal-div-list-3-" + level_no;
		if (submodal_div_list_id1 !== submodal_div_list_id1_old) {
			$(submodal_div_list_id1_old).toggleClass("checkbox_hide checkbox_show");
			$(submodal_div_list_id1).toggleClass("checkbox_hide checkbox_show");
			submodal_div_list_id1_old = submodal_div_list_id1;
		} else {
			$(submodal_div_list_id1_old).toggleClass("checkbox_hide checkbox_show");
			submodal_div_list_id1_old = "";
		}

		if (submodal_div_list_id2 !== submodal_div_list_id2_old) {
			$(submodal_div_list_id2_old).toggleClass("checkbox_hide checkbox_show");
			$(submodal_div_list_id2).toggleClass("checkbox_hide checkbox_show");
			submodal_div_list_id2_old = submodal_div_list_id2;
		} else {
			$(submodal_div_list_id2_old).toggleClass("checkbox_hide checkbox_show");
			submodal_div_list_id2_old = "";
		}

		if (submodal_div_list_id3 !== submodal_div_list_id3_old) {
			$(submodal_div_list_id3_old).toggleClass("checkbox_hide checkbox_show");
			$(submodal_div_list_id3).toggleClass("checkbox_hide checkbox_show");
			submodal_div_list_id3_old = submodal_div_list_id3;
		} else {
			$(submodal_div_list_id3_old).toggleClass("checkbox_hide checkbox_show");
			submodal_div_list_id3_old = "";
		}

		if(oldSelectedListOp1 == ""){
			$("#level_item_loading_op1").css("display", "block");
			$("#sub-ul-modallist").css("display", "none");
			oldSelectedListOp1 = "";
			setTimeout(() => {
				$("#level_item_loading_op1").css("display", "none");
				$("#sub-ul-modallist").css("display", "block");
			}, 1000);
		}
		
	}
}
/* New Function End */
let opt1_left_list = "";
(function opt1ModalLeftListControl() {
	let oldTarget = ""
	select_item_main.addEventListener("click", function (e) {
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

			$(oldTarget).children(".grey-times-box").removeClass("display-block");
			$(oldTarget).children(".grey-times-box").addClass("display-none");

			$(oldTarget).children(".arrow-li-box").removeClass("arrow-li-box-background-color-2");
			$(oldTarget).children(".arrow-li-box").addClass("arrow-li-box-background-color-1");
			$(oldTarget).children(".arrow-li-box").children(".fa-caret-right").removeClass("arrow-li-box-i-color-2");
			$(oldTarget).children(".arrow-li-box").children(".fa-caret-right").addClass("arrow-li-box-i-color-1");
		}
		$(target).toggleClass("highlight_li");

		$(target).children(".grey-times-box").toggleClass("display-none display-block");

		$(target).children(".arrow-li-box").toggleClass("arrow-li-box-background-color-1 arrow-li-box-background-color-2");
		$(target).children(".arrow-li-box").children(".fa-caret-right").toggleClass("arrow-li-box-i-color-1 arrow-li-box-i-color-2");
		
		if(oldTarget == target){
			oldSelectedListOp1 = "hideLoadingAnimation";
		}else{
			oldSelectedListOp1 = "";
		}

		oldTarget = target;

		opt1_left_list = target.childNodes[1].innerHTML;
		modalitem_click_handle(target.classList[0]);
	});
})();

let oldLIClassnameModal = "";
const sub_ul_modallist = document.querySelector("#sub-ul-modallist");
sub_ul_modallist.addEventListener("click", function (e) {
	let target = e.target;
	if (target.tagName === "DIV") {
		if (target.className.indexOf("sublist-cancel-box") != -1) {
			manageResultDeleteListClassName = target.parentNode.classList[0];

			let op1List1_itemName = target.parentNode.childNodes[1].innerHTML;
			document.querySelector("#deletlistopt2 .chart-delete-name").innerHTML = op1List1_itemName;

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

			let op1List1_itemName = target.parentNode.childNodes[1].innerHTML;
			document.querySelector("#deletlistopt2 .chart-delete-name").innerHTML = op1List1_itemName;

			return;
		}
		else if((target.className.indexOf("sublist-info-box") != -1) || (target.className.indexOf("sublist-pen-box") != -1)){
		 	return;
		} 
		else target = target.parentNode;
	} else if (target.tagName !== "LI") return;

	$(target).children(".sublist-check-box").toggleClass("checkbox_hide checkbox_show");
	$(target).children(".sublist-cancel-box").toggleClass("checkbox_hide checkbox_show");

	// oldLIClassnameModal = target.classList[0];
	markLeftOnRight(target);
});


function countOpt1ListModal(e) {
	event.preventDefault();
	let countItem = $(e).parent().parent().parent().find("#sub-ul-modallist .sublist-check-box.checkbox_show").length;
	$("#op1-list-item-count").html(`${countItem} Items Selected`);
	
	$('body').addClass("disable-pointer");
	$('#myopt1listData').modal({
		backdrop:'static', 
		keyboard:false
	});
	$('#myopt1listData .modal-body').addClass("disable-pointer");
	let initState = $(e).html();
	$(e).html('<i class="fa fa-spinner fa-spin"></i> Done');
	$(e).prop("disabled", true);
	let $this = $(e);

	setTimeout(function() {
		$('body').removeClass("disable-pointer");
		$('#myopt1listData').modal({
			backdrop:true, 
			keyboard:true
		});
		$('#myopt1listData .modal-body').removeClass("disable-pointer");
		$this.prop("disabled", false);
		$this.html(initState);

		$("#op1-list-item-count").html(`${countItem} Items Selected`);
		$("#myopt1listData").modal("hide");
	}, 2000);

}

function resetOpt1ListModal(e) {
	let checkItem = $(e).parent().parent().parent().find("#sub-ul-modallist .sublist-check-box.checkbox_show");
	let uncheckItem = $(e).parent().parent().parent().find("#sub-ul-modallist .sublist-cancel-box.checkbox_hide");

	$('body').addClass("disable-pointer");
	$('#myopt1listData').modal({
		backdrop:'static', 
		keyboard:false
	});
	$('#myopt1listData .modal-body').addClass("disable-pointer");
	let initState = $(e).html();
	$(e).html('<i class="fa fa-spinner fa-spin"></i> Reset');
	$(e).prop("disabled", true);
	let $this = $(e);

	setTimeout(function() {
		$('body').removeClass("disable-pointer");
		$('#myopt1listData').modal({
			backdrop:true, 
			keyboard:true
		});
		$('#myopt1listData .modal-body').removeClass("disable-pointer");
		$this.prop("disabled", false);
		$this.html(initState);

		checkItem.toggleClass("checkbox_show checkbox_hide");
		uncheckItem.toggleClass("checkbox_show checkbox_hide");
		$("#op1-list-item-count").html(`0 Items Selected`);
	}, 2000);

}

function markLeftOnRight(target) {
	let _id = $(target).parent().attr("id");
	let len = $(target).parent().parent().find(".submodal-list.checkbox_show div.sublist-check-box.checkbox_show").length;
	if (len > 0) {
		let markItem = $(`ul.select-item-main li.modallist-item-${_id.split("-").splice(-1)[0]}`)
			.children("div.green-check-box");
		markItem.addClass("display-block");
		markItem.removeClass("display-none");
	} else {
		let markItem = $(`ul.select-item-main li.modallist-item-${_id.split("-").splice(-1)[0]}`)
			.children("div.green-check-box");
		markItem.addClass("display-none");
		markItem.removeClass("display-block");
	}
}
/* ================ Scroll Down START ============== */
$(document).ready(function () {
	$(".myscrollbtn-op1").click(function () {
		const scroll5564windrow = document.querySelector(".scroll5564windrow");
		$(".scroll5564windrow").animate({
			scrollTop: scroll5564windrow.scrollTop + 100,
		},
			250
		);
	});
});

/* ================ Scroll Down END ============== */
// ===/////=== option 1 MODAL list item end ===/////===


// ===/////=== STYLE 2 COPY TO ROW select items modal START ===/////===

const copytorow_list = document.querySelector(".copytorow-list");
// Added by ASHIQ
const copytolistmodal = [
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
(function toCopyListModal() {
	let htmlcopytolistmodal = "", htmlDataModal = "";
	copytolistmodal.forEach((item, index) => {
		htmlcopytolistmodal += `<li class="modalcopytolist-item-${index + 1}">
		<p>${item}</p>
		<div class="green-check-box display-none">
			<i class="fas fa-check"></i>
		</div>
		<div class="grey-times-box display-none" flow="down" tooltip="Click to Delete" onclick="leftItemDeleteClick(this, 'copyTo')">
			<i class="fas fa-times"></i>
		</div>
		<div class="arrow-li-box arrow-li-box-background-color-1">
			<i class="fas fa-caret-right arrow-li-box-i-color-1"></i>
		</div>
		</li>`;
		/* Update this function By Ashiq */
		let modallistcopyto_data1 = "",
			modallistcopyto_data2 = "",
			modallistcopyto_data3 = "",
			length = 72;
		for (let i = 1; i <= length; i++) {
			let elementHtml = `<li class="option-copytomodallist-${index + 1}-${i}">
			<p>Level ${index + 1} - Item ${i}</p>
			<div class="sublist-info-box" customTooltip="Level ${index + 1} - Item ${i}" onclick="levelInfoTooltipShow(this, 2)">
				<i class="fas fa-info"></i>
			</div>
			<div class="sublist-pen-box" tooltip="Click to Rename" flow="down" onclick="confirmListName(this)">
				<i class="fas fa-pen"></i>
			</div>
			<div class="sublist-check-box checkbox_hide">
				<i class="fas fa-check"></i>
			</div>
			<div class="sublist-cancel-box checkbox_show" tooltip="Click to Delete" flow="down" data-toggle="modal" data-target="#delet-copytolistopt2">
				<i class="fas fa-times"></i>
			</div>
			</li>`;
			if (length < 61) {
				if (i <= 20) {
					modallistcopyto_data1 += elementHtml;
				} else if (i >= 21 && i <= 40) {
					modallistcopyto_data2 += elementHtml;
				} else {
					modallistcopyto_data3 += elementHtml;
				}
			} else {
				let divide = Math.floor(length / 3),
					len = divide + (length % 3);
				if (i <= len) {
					modallistcopyto_data1 += elementHtml;
				} else if (i > len && i <= len + divide) {
					modallistcopyto_data2 += elementHtml;
				} else {
					modallistcopyto_data3 += elementHtml;
				}
			}
		}

		htmlDataModal +=
			`<ul class="submodal-list checkbox_hide" style="margin-left: 300px;" id="copyto-submodal-div-list-1-${index + 1}">
				${modallistcopyto_data1}
			</ul>
			<ul class="submodal-list checkbox_hide" style="margin-left: 585px;" id="copyto-submodal-div-list-2-${index + 1}">
				${modallistcopyto_data2}
			</ul>
			<ul class="submodal-list checkbox_hide" style="margin-left: 870px;" id="copyto-submodal-div-list-3-${index + 1}">
				${modallistcopyto_data3}
			</ul>`;
		/* Update End By Ashiq */
	});
	copytorow_list.innerHTML = htmlcopytolistmodal;
	document.querySelector("#sub-ul-copyto-modallist").innerHTML = htmlDataModal;
})();

/* New Function Start */
let copyto_submodal_div_list_id1_old = "",
	copyto_submodal_div_list_id2_old = "",
	copyto_submodal_div_list_id3_old = "";

let oldSelectListCopyRow = "";

function copyto_modalitem_click_handle(listClassName) {
	let level_no = listClassName.match(/\d+/g);
	if (level_no != null) {
		const copyto_submodal_div_list_id1 = "#copyto-submodal-div-list-1-" + level_no,
			copyto_submodal_div_list_id2 = "#copyto-submodal-div-list-2-" + level_no,
			copyto_submodal_div_list_id3 = "#copyto-submodal-div-list-3-" + level_no;
		if (copyto_submodal_div_list_id1 !== copyto_submodal_div_list_id1_old) {
			$(copyto_submodal_div_list_id1_old).toggleClass("checkbox_hide checkbox_show");
			$(copyto_submodal_div_list_id1).toggleClass("checkbox_hide checkbox_show");
			copyto_submodal_div_list_id1_old = copyto_submodal_div_list_id1;
		} else {
			$(copyto_submodal_div_list_id1_old).toggleClass("checkbox_hide checkbox_show");
			copyto_submodal_div_list_id1_old = "";
		}

		if (copyto_submodal_div_list_id2 !== copyto_submodal_div_list_id2_old) {
			$(copyto_submodal_div_list_id2_old).toggleClass("checkbox_hide checkbox_show");
			$(copyto_submodal_div_list_id2).toggleClass("checkbox_hide checkbox_show");
			copyto_submodal_div_list_id2_old = copyto_submodal_div_list_id2;
		} else {
			$(copyto_submodal_div_list_id2_old).toggleClass("checkbox_hide checkbox_show");
			copyto_submodal_div_list_id2_old = "";
		}

		if (copyto_submodal_div_list_id3 !== copyto_submodal_div_list_id3_old) {
			$(copyto_submodal_div_list_id3_old).toggleClass("checkbox_hide checkbox_show");
			$(copyto_submodal_div_list_id3).toggleClass("checkbox_hide checkbox_show");
			copyto_submodal_div_list_id3_old = copyto_submodal_div_list_id3;
		} else {
			$(copyto_submodal_div_list_id3_old).toggleClass("checkbox_hide checkbox_show");
			copyto_submodal_div_list_id3_old = "";
		}

		if(oldSelectListCopyRow == ""){
			$("#copyrow_list_level_item_loading").css("display", "block");
			$("#sub-ul-copyto-modallist").css("display", "none");
			oldSelectListCopyRow = "";
			setTimeout(() => {
				$("#copyrow_list_level_item_loading").css("display", "none");
				$("#sub-ul-copyto-modallist").css("display", "block");
			}, 1000);
		}

	}
}
/* New Function End */
let opt_copyto_left_list = "";
(function copyToLeftListControl() {
	let oldTarget = ""
	copytorow_list.addEventListener("click", function (e) {
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

			$(oldTarget).children(".arrow-li-box").removeClass("arrow-li-box-background-color-2");
			$(oldTarget).children(".arrow-li-box").addClass("arrow-li-box-background-color-1");
			$(oldTarget).children(".arrow-li-box").children(".fa-caret-right").removeClass("arrow-li-box-i-color-2");
			$(oldTarget).children(".arrow-li-box").children(".fa-caret-right").addClass("arrow-li-box-i-color-1");
		}
		$(target).toggleClass("highlight_li");

		$(target).children(".green-check-box").toggleClass("display-none display-block");
		
		$(target).children(".grey-times-box").toggleClass("display-none display-block");

		$(target).children(".arrow-li-box").toggleClass("arrow-li-box-background-color-1 arrow-li-box-background-color-2");
		$(target).children(".arrow-li-box").children(".fa-caret-right").toggleClass("arrow-li-box-i-color-1 arrow-li-box-i-color-2");
		
		if(oldTarget == target){
			oldSelectListCopyRow = "hideLoadingAnimation";
		}else{
			oldSelectListCopyRow = "";
		}

		oldTarget = target;

		opt_copyto_left_list = target.childNodes[1].innerHTML;
		copyto_modalitem_click_handle(target.classList[0]);
	});
})();

let copyto_oldLIClassnameModal = "";
const sub_ul_copytomodallist = document.querySelector("#sub-ul-copyto-modallist");
sub_ul_copytomodallist.addEventListener("click", function (e) {
	let target = e.target;
	if (target.tagName === "DIV") {
		if (target.className.indexOf("sublist-cancel-box") != -1) {
			deleteListClassName = target.parentNode.classList[0];

			let dataCopyToS1_Itag = target.parentNode.childNodes[1].innerHTML;
			document.querySelector("#delet-copytolistopt2 .copyToS1-item-name").innerHTML = dataCopyToS1_Itag;

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
			deleteListClassName = target.parentNode.classList[0];

			let dataCopyToS1_Itag = target.parentNode.childNodes[1].innerHTML;
			document.querySelector("#delet-copytolistopt2 .copyToS1-item-name").innerHTML = dataCopyToS1_Itag;

			return;
		}
		else if((target.className.indexOf("sublist-info-box") != -1) || (target.className.indexOf("sublist-pen-box") != -1)){
		 	return;
		} 
		else target = target.parentNode;
	} else if (target.tagName !== "LI") return;

	let dataCopyToStyle1 = target.childNodes[1].innerHTML;

	// console.log(target);
	// console.dir(target);
	// $(target).children(".sublist-check-box").toggleClass("checkbox_hide checkbox_show");
	// $(target).children(".sublist-cancel-box").toggleClass("checkbox_hide checkbox_show");

	copyto_oldLIClassnameModal = target.classList[0];
	confirmModalCopyMove(target.className, dataCopyToStyle1);
});

$("#copyto-mng-opt2-delete").click(function () {
	$('body').addClass("disable-pointer");
	$('#delet-copytolistopt2').modal({
		backdrop:'static', 
		keyboard:false
	});
	$('#delet-copytolistopt2 .modal-body').addClass("disable-pointer");
	let initState = $(this).html();
	$(this).html('<i class="fa fa-spinner fa-spin"></i> Confirm');
	$(this).prop("disabled", true);
	let $this = $(this);
  
	setTimeout(function() {
		$('body').removeClass("disable-pointer");
		$('#delet-copytolistopt2').modal({
			backdrop:true, 
			keyboard:true
		});
		$('#delet-copytolistopt2 .modal-body').removeClass("disable-pointer");
		$this.prop("disabled", false);
		$this.html(initState);

		$(`.${deleteListClassName}`).remove();

		$("#delet-copytolistopt2").modal("hide");
    
	}, 2000);
});

/* ================ Scroll Down START ============== */
$(document).ready(function () {
	$(".copytoscrollbtn").click(function () {
		const copytoscrollwindow = document.querySelector(".copytoscrollwindow");
		$(".copytoscrollwindow").animate({
			scrollTop: copytoscrollwindow.scrollTop + 100,
		},
			250
		);
	});
});
/* ================ Scroll Down END ============== */

// ===/////=== STYLE 2 COPY TO ROW select items modal START ===/////===


// ===/////=== STYLE 2 MOVE TO ROW select items modal START ===/////===

const movetorow_list = document.querySelector(".movetorow-list");
// Added by ASHIQ
const movetolistmodal = [
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
(function toMoveListModal() {
	let htmlmovetolistmodal = "", htmlDataModal = "";
	movetolistmodal.forEach((item, index) => {
		htmlmovetolistmodal += `<li class="modalmovetolist-item-${index + 1}">
		<p>${item}</p>
		<div class="green-check-box display-none">
			<i class="fas fa-check"></i>
		</div>
		<div class="grey-times-box display-none" flow="down" tooltip="Click to Delete" onclick="leftItemDeleteClick(this, 'moveTo')">
			<i class="fas fa-times"></i>
		</div>
		<div class="arrow-li-box arrow-li-box-background-color-1">
			<i class="fas fa-caret-right arrow-li-box-i-color-1"></i>
		</div>
		</li>`;
		/* Update this function By Ashiq */
		let modallistmoveto_data1 = "",
			modallistmoveto_data2 = "",
			modallistmoveto_data3 = "",
			length = 72;
		for (let i = 1; i <= length; i++) {
			let elementHtml = `<li class="option-movetomodallist-${index + 1}-${i}">
			<p>Level ${index + 1} - Item ${i}</p>
			<div class="sublist-info-box" customTooltip="Level ${index + 1} - Item ${i}" onclick="levelInfoTooltipShow(this, 2)">
				<i class="fas fa-info"></i>
			</div>
			<div class="sublist-pen-box" tooltip="Click to Rename" flow="down" onclick="confirmListName(this)">
				<i class="fas fa-pen"></i>
			</div>
			<div class="sublist-check-box checkbox_hide">
				<i class="fas fa-check"></i>
			</div>
			<div class="sublist-cancel-box checkbox_show" tooltip="Click to Delete" flow="down" data-toggle="modal" data-target="#delet-movetolistopt2">
				<i class="fas fa-times"></i>
			</div>
			</li>`;
			if (length < 61) {
				if (i <= 20) {
					modallistmoveto_data1 += elementHtml;
				} else if (i >= 21 && i <= 40) {
					modallistmoveto_data2 += elementHtml;
				} else {
					modallistmoveto_data3 += elementHtml;
				}
			} else {
				let divide = Math.floor(length / 3),
					len = divide + (length % 3);
				if (i <= len) {
					modallistmoveto_data1 += elementHtml;
				} else if (i > len && i <= len + divide) {
					modallistmoveto_data2 += elementHtml;
				} else {
					modallistmoveto_data3 += elementHtml;
				}
			}
		}

		htmlDataModal +=
			`<ul class="submodal-list checkbox_hide" style="margin-left: 300px;" id="moveto-submodal-div-list-1-${index + 1}">
			${modallistmoveto_data1}
		</ul>
		<ul class="submodal-list checkbox_hide" style="margin-left: 585px;" id="moveto-submodal-div-list-2-${index + 1}">
			${modallistmoveto_data2}
		</ul>
		<ul class="submodal-list checkbox_hide" style="margin-left: 870px;" id="moveto-submodal-div-list-3-${index + 1}">
			${modallistmoveto_data3}
		</ul>`;
	});
	movetorow_list.innerHTML = htmlmovetolistmodal;
	document.querySelector("#sub-ul-moveto-modallist").innerHTML = htmlDataModal;
	/* Update End By Ashiq */
})();

/* New Function Start */
let moveto_submodal_div_list_id1_old = "",
	moveto_submodal_div_list_id2_old = "",
	moveto_submodal_div_list_id3_old = "";

let oldSelectListMoveRow = "";

function moveto_modalitem_click_handle(listClassName) {
	let level_no = listClassName.match(/\d+/g);
	if (level_no != null) {
		const moveto_submodal_div_list_id1 = "#moveto-submodal-div-list-1-" + level_no,
			moveto_submodal_div_list_id2 = "#moveto-submodal-div-list-2-" + level_no,
			moveto_submodal_div_list_id3 = "#moveto-submodal-div-list-3-" + level_no;
		if (moveto_submodal_div_list_id1 !== moveto_submodal_div_list_id1_old) {
			$(moveto_submodal_div_list_id1_old).toggleClass("checkbox_hide checkbox_show");
			$(moveto_submodal_div_list_id1).toggleClass("checkbox_hide checkbox_show");
			moveto_submodal_div_list_id1_old = moveto_submodal_div_list_id1;
		} else {
			$(moveto_submodal_div_list_id1_old).toggleClass("checkbox_hide checkbox_show");
			moveto_submodal_div_list_id1_old = "";
		}

		if (moveto_submodal_div_list_id2 !== moveto_submodal_div_list_id2_old) {
			$(moveto_submodal_div_list_id2_old).toggleClass("checkbox_hide checkbox_show");
			$(moveto_submodal_div_list_id2).toggleClass("checkbox_hide checkbox_show");
			moveto_submodal_div_list_id2_old = moveto_submodal_div_list_id2;
		} else {
			$(moveto_submodal_div_list_id2_old).toggleClass("checkbox_hide checkbox_show");
			moveto_submodal_div_list_id2_old = "";
		}

		if (moveto_submodal_div_list_id3 !== moveto_submodal_div_list_id3_old) {
			$(moveto_submodal_div_list_id3_old).toggleClass("checkbox_hide checkbox_show");
			$(moveto_submodal_div_list_id3).toggleClass("checkbox_hide checkbox_show");
			moveto_submodal_div_list_id3_old = moveto_submodal_div_list_id3;
		} else {
			$(moveto_submodal_div_list_id3_old).toggleClass("checkbox_hide checkbox_show");
			moveto_submodal_div_list_id3_old = "";
		}

		if(oldSelectListMoveRow == ""){
			$("#moverow_list_level_item_loading").css("display", "block");
			$("#sub-ul-moveto-modallist").css("display", "none");
			oldSelectListMoveRow = "";
			setTimeout(() => {
				$("#moverow_list_level_item_loading").css("display", "none");
				$("#sub-ul-moveto-modallist").css("display", "block");
			}, 1000);
		}

	}
}
/* New Function End */
let opt_moveto_left_list = "";
(function moveToLeftListControl() {
	let oldTarget = ""
	movetorow_list.addEventListener("click", function (e) {
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

			$(oldTarget).children(".arrow-li-box").removeClass("arrow-li-box-background-color-2");
			$(oldTarget).children(".arrow-li-box").addClass("arrow-li-box-background-color-1");
			$(oldTarget).children(".arrow-li-box").children(".fa-caret-right").removeClass("arrow-li-box-i-color-2");
			$(oldTarget).children(".arrow-li-box").children(".fa-caret-right").addClass("arrow-li-box-i-color-1");
		}
		$(target).toggleClass("highlight_li");

		$(target).children(".green-check-box").toggleClass("display-none display-block");

		$(target).children(".grey-times-box").toggleClass("display-none display-block");

		$(target).children(".arrow-li-box").toggleClass("arrow-li-box-background-color-1 arrow-li-box-background-color-2");
		$(target).children(".arrow-li-box").children(".fa-caret-right").toggleClass("arrow-li-box-i-color-1 arrow-li-box-i-color-2");

		if(oldTarget == target){
			oldSelectListMoveRow = "hideLoadingAnimation";
		}else{
			oldSelectListMoveRow = "";
		}

		oldTarget = target;

		opt_moveto_left_list = target.childNodes[1].innerHTML;
		moveto_modalitem_click_handle(target.classList[0]);
	});
})();

let moveto_oldLIClassnameModal = "";
const sub_ul_movetomodallist = document.querySelector("#sub-ul-moveto-modallist");
sub_ul_movetomodallist.addEventListener("click", function (e) {
	let target = e.target;
	if (target.tagName === "DIV") {
		if (target.className.indexOf("sublist-cancel-box") != -1) {
			deleteListClassName = target.parentNode.classList[0];

			let dataMoveToStyle1 = target.parentNode.childNodes[1].innerHTML;
			document.querySelector("#delet-movetolistopt2 .moveToS1-item-name").innerHTML = dataMoveToStyle1;

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
			deleteListClassName = target.parentNode.classList[0];

			let dataMoveToStyle1 = target.parentNode.childNodes[1].innerHTML;
			document.querySelector("#delet-movetolistopt2 .moveToS1-item-name").innerHTML = dataMoveToStyle1;

			return;
		}
		else if((target.className.indexOf("sublist-info-box") != -1) || (target.className.indexOf("sublist-pen-box") != -1)){
		 	return;
		} 
		else target = target.parentNode;
	} else if (target.tagName !== "LI") return;

	let dataMoveToStyle1 = target.childNodes[1].innerHTML;

	// $(target).children(".sublist-check-box").toggleClass("checkbox_hide checkbox_show");
	// $(target).children(".sublist-cancel-box").toggleClass("checkbox_hide checkbox_show");
	confirmModalCopyMove(target.className, dataMoveToStyle1);
	// moveto_oldLIClassnameModal = target.classList[0];
});

$("#moveto-mng-opt2-delete").click(function () {
	$('body').addClass("disable-pointer");
	$('#delet-movetolistopt2').modal({
		backdrop:'static', 
		keyboard:false
	});
	$('#delet-movetolistopt2 .modal-body').addClass("disable-pointer");
	let initState = $(this).html();
	$(this).html('<i class="fa fa-spinner fa-spin"></i> Confirm');
	$(this).prop("disabled", true);
	let $this = $(this);
  
	setTimeout(function() {
		$('body').removeClass("disable-pointer");
		$('#delet-movetolistopt2').modal({
			backdrop:true, 
			keyboard:true
		});
		$('#delet-movetolistopt2 .modal-body').removeClass("disable-pointer");
		$this.prop("disabled", false);
		$this.html(initState);

		$(`.${deleteListClassName}`).remove();

		$("#delet-movetolistopt2").modal("hide");
    
	}, 2000);
});

/* ================ Scroll Down START ============== */
$(document).ready(function () {
	$(".movetoscrollbtn").click(function () {
		const movetoscrollwindow = document.querySelector(".movetoscrollwindow");
		$(".movetoscrollwindow").animate({
			scrollTop: movetoscrollwindow.scrollTop + 100,
		},
			250
		);
	});
});
/* ================ Scroll Down END ============== */

// ===/////=== STYLE 2 MOVE TO ROW select items modal START ===/////===