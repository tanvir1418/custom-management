// ============== STYLE 2 COPY2 2ND EDITION START =================
const copytorow_list_style2 = document.querySelector(".copytorow-list_style2");
// Added by ASHIQ
const copytolistmodal_style2 = [
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
(function toCopyListModal_style2() {
    let htmlcopytolistmodal_style2 = "",
        htmlDataModal = "";
    copytolistmodal_style2.forEach((item, index) => {
        htmlcopytolistmodal_style2 += `<li class="modalcopytolist-item-${index + 1}">
		<p>${item}</p>
		<div class="green-check-box display-none">
			<i class="fas fa-check"></i>
		</div>
        <div class="grey-times-box display-none" flow="down" tooltip="Click to Delete">
			<i class="fas fa-times"></i>
		</div>
		<div class="arrow-li-box arrow-li-box-background-color-1">
			<i class="fas fa-caret-right arrow-li-box-i-color-1"></i>
		</div>
		</li>`;
        /* Update this function By Ashiq */
        let modallistcopyto_data1_style2 = "",
            modallistcopyto_data2_style2 = "",
            modallistcopyto_data3_style2 = "",
            length = 72;
        for (let i = 1; i <= length; i++) {
            let elementHtml = `<li class="option-copytomodallist_style2-${index + 1}-${i}">
			<p>Level ${index + 1} - Item ${i}</p>
            <div class="sublist-info-box" flow="down" tooltip="Level ${index + 1} - Item ${i}">
				<i class="fas fa-info"></i>
			</div>
			<div class="sublist-pen-box" tooltip="Click to Rename" flow="down" onclick="confirmListName(this)">
				<i class="fas fa-pen"></i>
			</div>
			<div class="sublist-check-box checkbox_hide">
				<i class="fas fa-check"></i>
			</div>
			<div class="sublist-cancel-box checkbox_show" tooltip="Click to Delete" flow="down" data-toggle="modal" data-target="#delet-copytolistopt2_style2">
				<i class="fas fa-times"></i>
			</div>
			</li>`;
            if (length < 61) {
                if (i <= 20) {
                    modallistcopyto_data1_style2 += elementHtml;
                } else if (i >= 21 && i <= 40) {
                    modallistcopyto_data2_style2 += elementHtml;
                } else {
                    modallistcopyto_data3_style2 += elementHtml;
                }
            } else {
                let divide = Math.floor(length / 3),
                    len = divide + (length % 3);
                if (i <= len) {
                    modallistcopyto_data1_style2 += elementHtml;
                } else if (i > len && i <= len + divide) {
                    modallistcopyto_data2_style2 += elementHtml;
                } else {
                    modallistcopyto_data3_style2 += elementHtml;
                }
            }
        }

        htmlDataModal +=
            `<ul class="submodal-list checkbox_hide" style="margin-left: 300px;" id="copyto-submodal_style2-div-list-1-${index + 1}">
				${modallistcopyto_data1_style2}
			</ul>
			<ul class="submodal-list checkbox_hide" style="margin-left: 600px;" id="copyto-submodal_style2-div-list-2-${index + 1}">
				${modallistcopyto_data2_style2}
			</ul>
			<ul class="submodal-list checkbox_hide" style="margin-left: 900px;" id="copyto-submodal_style2-div-list-3-${index + 1}">
				${modallistcopyto_data3_style2}
			</ul>`;
        /* Update End By Ashiq */
    });
    copytorow_list_style2.innerHTML = htmlcopytolistmodal_style2;
    document.querySelector("#sub-ul-copyto-modallist_style2").innerHTML = htmlDataModal;
})();

/* New Function Start */
let copyto_submodal_div_list_id1_style2_old = "",
    copyto_submodal_div_list_id2_style2_old = "",
    copyto_submodal_div_list_id3_style2_old = "";

let oldSelectListCopyRowS2 = "";

function copyto_modalitem_click_handle_style2(listClassName) {
    let level_no = listClassName.match(/\d+/g);
    if (level_no != null) {
        const copyto_submodal_div_list_id1_style2 = "#copyto-submodal_style2-div-list-1-" + level_no,
            copyto_submodal_div_list_id2_style2 = "#copyto-submodal_style2-div-list-2-" + level_no,
            copyto_submodal_div_list_id3_style2 = "#copyto-submodal_style2-div-list-3-" + level_no;
        if (copyto_submodal_div_list_id1_style2 !== copyto_submodal_div_list_id1_style2_old) {
            $(copyto_submodal_div_list_id1_style2_old).toggleClass("checkbox_hide checkbox_show");
            $(copyto_submodal_div_list_id1_style2).toggleClass("checkbox_hide checkbox_show");
            copyto_submodal_div_list_id1_style2_old = copyto_submodal_div_list_id1_style2;
        } else {
            $(copyto_submodal_div_list_id1_style2_old).toggleClass("checkbox_hide checkbox_show");
            copyto_submodal_div_list_id1_style2_old = "";
        }

        if (copyto_submodal_div_list_id2_style2 !== copyto_submodal_div_list_id2_style2_old) {
            $(copyto_submodal_div_list_id2_style2_old).toggleClass("checkbox_hide checkbox_show");
            $(copyto_submodal_div_list_id2_style2).toggleClass("checkbox_hide checkbox_show");
            copyto_submodal_div_list_id2_style2_old = copyto_submodal_div_list_id2_style2;
        } else {
            $(copyto_submodal_div_list_id2_style2_old).toggleClass("checkbox_hide checkbox_show");
            copyto_submodal_div_list_id2_style2_old = "";
        }

        if (copyto_submodal_div_list_id3_style2 !== copyto_submodal_div_list_id3_style2_old) {
            $(copyto_submodal_div_list_id3_style2_old).toggleClass("checkbox_hide checkbox_show");
            $(copyto_submodal_div_list_id3_style2).toggleClass("checkbox_hide checkbox_show");
            copyto_submodal_div_list_id3_style2_old = copyto_submodal_div_list_id3_style2;
        } else {
            $(copyto_submodal_div_list_id3_style2_old).toggleClass("checkbox_hide checkbox_show");
            copyto_submodal_div_list_id3_style2_old = "";
        }

        if(oldSelectListCopyRowS2 == ""){
			$("#copyrowS2_list_level_item_loading").css("display", "block");
			$("#sub-ul-copyto-modallist_style2").css("display", "none");
			oldSelectListCopyRowS2 = "";
			setTimeout(() => {
				$("#copyrowS2_list_level_item_loading").css("display", "none");
				$("#sub-ul-copyto-modallist_style2").css("display", "block");
			}, 1000);
		}

    }
}
/* New Function End */
let opt_copyto_left_list_style2 = "";
(function copyToLeftListControl_style2() {
    let oldTarget = ""
    copytorow_list_style2.addEventListener("click", function (e) {
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
			oldSelectListCopyRowS2 = "hideLoadingAnimation";
		}else{
			oldSelectListCopyRowS2 = "";
		}

        oldTarget = target;

        opt_copyto_left_list_style2 = target.childNodes[1].innerHTML;
        copyto_modalitem_click_handle_style2(target.classList[0]);
    });
})();

let copyto_oldLIClassnameModal_style2 = "";
const sub_ul_copytomodallist_style2 = document.querySelector("#sub-ul-copyto-modallist_style2");
sub_ul_copytomodallist_style2.addEventListener("click", function (e) {
    let target = e.target;
    if (target.tagName === "DIV") {
        if (target.className.indexOf("sublist-cancel-box") != -1) {
            deleteListClassName = target.parentNode.classList[0];

            let dataCopyToS2_Itag = target.parentNode.childNodes[1].innerHTML;
            document.querySelector("#delet-copytolistopt2_style2 .copyToS2-item-name").innerHTML = dataCopyToS2_Itag;

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

            let dataCopyToS2_Itag = target.parentNode.childNodes[1].innerHTML;
            document.querySelector("#delet-copytolistopt2_style2 .copyToS2-item-name").innerHTML = dataCopyToS2_Itag;

            return;
        }
        else if((target.className.indexOf("sublist-info-box") != -1) || (target.className.indexOf("sublist-pen-box") != -1)){
		 	return;
		} 
        else target = target.parentNode;
    } else if (target.tagName !== "LI") return;

    let dataCopyToStyle2 = target.childNodes[1].innerHTML;

    // $(target).children(".sublist-check-box").toggleClass("checkbox_hide checkbox_show");
    // $(target).children(".sublist-cancel-box").toggleClass("checkbox_hide checkbox_show");

    copyto_oldLIClassnameModal_style2 = target.classList[0];
    confirmModalCopyMove(target.className, dataCopyToStyle2);
});

$("#copyto-mng-opt2-delete_style2").click(function () {
    let delObj_style2 = document.querySelector(`.${deleteListClassName}`);
    delObj_style2.remove();
});

/* ================ Scroll Down START ============== */
$(document).ready(function () {
    $(".copytoscrollbtn_style2").click(function () {
        const copytoscrollwindow_style2 = document.querySelector(".copytoscrollwindow_style2");
        $(".copytoscrollwindow_style2").animate({
            scrollTop: copytoscrollwindow_style2.scrollTop + 100,
        },
            250
        );
    });
});
/* ================ Scroll Down END ============== */
// ============== STYLE 2 COPY2 2ND EDITION START =================




// ================= STYLE 2 MOVE2 2ND EDITION START =====================
const movetorow_list_style29 = document.querySelector(".movetorow-list_style29");
// Added by ASHIQ
const movetolistmodal_style29 = [
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
(function toMoveListModal_style29() {
    let htmlmovetolistmodal_style29 = "",
        htmlDataModal = "";
    movetolistmodal_style29.forEach((item, index) => {
        htmlmovetolistmodal_style29 += `<li class="modalmovetolist-item-${index + 1}">
		<p>${item}</p>
		<div class="green-check-box display-none">
			<i class="fas fa-check"></i>
		</div>
        <div class="grey-times-box display-none" flow="down" tooltip="Click to Delete">
			<i class="fas fa-times"></i>
		</div>
		<div class="arrow-li-box arrow-li-box-background-color-1">
			<i class="fas fa-caret-right arrow-li-box-i-color-1"></i>
		</div>
		</li>`;
        /* Update this function By Ashiq */
        let modallistmoveto_data1_style29 = "",
            modallistmoveto_data2_style29 = "",
            modallistmoveto_data3_style29 = "",
            length = 72;
        for (let i = 1; i <= length; i++) {
            let elementHtml = `<li class="option-movetomodallist_style29-${index + 1}-${i}">
			<p>Level ${index + 1} - Item ${i}</p>
            <div class="sublist-info-box" flow="down" tooltip="Level ${index + 1} - Item ${i}">
				<i class="fas fa-info"></i>
			</div>
			<div class="sublist-pen-box" tooltip="Click to Rename" flow="down" onclick="confirmListName(this)">
				<i class="fas fa-pen"></i>
			</div>
			<div class="sublist-check-box checkbox_hide">
				<i class="fas fa-check"></i>
			</div>
			<div class="sublist-cancel-box checkbox_show" tooltip="Click to Delete" flow="down" data-toggle="modal" data-target="#delet-movetolistopt2_style29">
				<i class="fas fa-times"></i>
			</div>
			</li>`;
            if (length < 61) {
                if (i <= 20) {
                    modallistmoveto_data1_style29 += elementHtml;
                } else if (i >= 21 && i <= 40) {
                    modallistmoveto_data2_style29 += elementHtml;
                } else {
                    modallistmoveto_data3_style29 += elementHtml;
                }
            } else {
                let divide = Math.floor(length / 3),
                    len = divide + (length % 3);
                if (i <= len) {
                    modallistmoveto_data1_style29 += elementHtml;
                } else if (i > len && i <= len + divide) {
                    modallistmoveto_data2_style29 += elementHtml;
                } else {
                    modallistmoveto_data3_style29 += elementHtml;
                }
            }
        }

        htmlDataModal +=
            `<ul class="submodal-list checkbox_hide" style="margin-left: 300px;" id="moveto-submodal_style29-div-list-1-${index + 1}">
			${modallistmoveto_data1_style29}
		</ul>
		<ul class="submodal-list checkbox_hide" style="margin-left: 600px;" id="moveto-submodal_style29-div-list-2-${index + 1}">
			${modallistmoveto_data2_style29}
		</ul>
		<ul class="submodal-list checkbox_hide" style="margin-left: 900px;" id="moveto-submodal_style29-div-list-3-${index + 1}">
			${modallistmoveto_data3_style29}
		</ul>`;
    });
    movetorow_list_style29.innerHTML = htmlmovetolistmodal_style29;
    document.querySelector("#sub-ul-moveto-modallist_style29").innerHTML = htmlDataModal;
    /* Update End By Ashiq */
})();

/* New Function Start */
let moveto_submodal_div_list_id1_style29_old = "",
    moveto_submodal_div_list_id2_style29_old = "",
    moveto_submodal_div_list_id3_style29_old = "";

let oldSelectListMoveRowS2 = "";

function moveto_modalitem_click_handle_style29(listClassName) {
    let level_no = listClassName.match(/\d+/g);
    if (level_no != null) {
        const moveto_submodal_div_list_id1_style29 = "#moveto-submodal_style29-div-list-1-" + level_no,
            moveto_submodal_div_list_id2_style29 = "#moveto-submodal_style29-div-list-2-" + level_no,
            moveto_submodal_div_list_id3_style29 = "#moveto-submodal_style29-div-list-3-" + level_no;
        if (moveto_submodal_div_list_id1_style29 !== moveto_submodal_div_list_id1_style29_old) {
            $(moveto_submodal_div_list_id1_style29_old).toggleClass("checkbox_hide checkbox_show");
            $(moveto_submodal_div_list_id1_style29).toggleClass("checkbox_hide checkbox_show");
            moveto_submodal_div_list_id1_style29_old = moveto_submodal_div_list_id1_style29;
        } else {
            $(moveto_submodal_div_list_id1_style29_old).toggleClass("checkbox_hide checkbox_show");
            moveto_submodal_div_list_id1_style29_old = "";
        }

        if (moveto_submodal_div_list_id2_style29 !== moveto_submodal_div_list_id2_style29_old) {
            $(moveto_submodal_div_list_id2_style29_old).toggleClass("checkbox_hide checkbox_show");
            $(moveto_submodal_div_list_id2_style29).toggleClass("checkbox_hide checkbox_show");
            moveto_submodal_div_list_id2_style29_old = moveto_submodal_div_list_id2_style29;
        } else {
            $(moveto_submodal_div_list_id2_style29_old).toggleClass("checkbox_hide checkbox_show");
            moveto_submodal_div_list_id2_style29_old = "";
        }

        if (moveto_submodal_div_list_id3_style29 !== moveto_submodal_div_list_id3_style29_old) {
            $(moveto_submodal_div_list_id3_style29_old).toggleClass("checkbox_hide checkbox_show");
            $(moveto_submodal_div_list_id3_style29).toggleClass("checkbox_hide checkbox_show");
            moveto_submodal_div_list_id3_style29_old = moveto_submodal_div_list_id3_style29;
        } else {
            $(moveto_submodal_div_list_id3_style29_old).toggleClass("checkbox_hide checkbox_show");
            moveto_submodal_div_list_id3_style29_old = "";
        }

        if(oldSelectListMoveRowS2 == ""){
			$("#moverowS2_list_level_item_loading").css("display", "block");
			$("#sub-ul-moveto-modallist_style29").css("display", "none");
			oldSelectListMoveRowS2 = "";
			setTimeout(() => {
				$("#moverowS2_list_level_item_loading").css("display", "none");
				$("#sub-ul-moveto-modallist_style29").css("display", "block");
			}, 1000);
		}

    }
}
/* New Function End */
let opt_moveto_left_list_style29 = "";
(function moveToLeftListControl_style29() {
    let oldTarget = ""
    movetorow_list_style29.addEventListener("click", function (e) {
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
			oldSelectListMoveRowS2 = "hideLoadingAnimation";
		}else{
			oldSelectListMoveRowS2 = "";
		}
        
        oldTarget = target;

        opt_moveto_left_list_style29 = target.childNodes[1].innerHTML;
        moveto_modalitem_click_handle_style29(target.classList[0]);
    });
})();

let moveto_oldLIClassnameModal_style29 = "";
const sub_ul_movetomodallist_style29 = document.querySelector("#sub-ul-moveto-modallist_style29");
sub_ul_movetomodallist_style29.addEventListener("click", function (e) {
    let target = e.target;
    if (target.tagName === "DIV") {
        if (target.className.indexOf("sublist-cancel-box") != -1) {
            deleteListClassName = target.parentNode.classList[0];

            let dataMoveToStyle2 = target.parentNode.childNodes[1].innerHTML;
            document.querySelector("#delet-movetolistopt2_style29 .moveToS2-item-name").innerHTML = dataMoveToStyle2;

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

            let dataMoveToStyle2 = target.parentNode.childNodes[1].innerHTML;
            document.querySelector("#delet-movetolistopt2_style29 .moveToS2-item-name").innerHTML = dataMoveToStyle2;

            return;
        }
        else if((target.className.indexOf("sublist-info-box") != -1) || (target.className.indexOf("sublist-pen-box") != -1)){
		 	return;
		} 
        else target = target.parentNode;
    } else if (target.tagName !== "LI") return;


    let dataMoveToStyle2 = target.childNodes[1].innerHTML;

    // $(target).children(".sublist-check-box").toggleClass("checkbox_hide checkbox_show");
    // $(target).children(".sublist-cancel-box").toggleClass("checkbox_hide checkbox_show");
    confirmModalCopyMove(target.className, dataMoveToStyle2);
    // moveto_oldLIClassnameModal_style29 = target.classList[0];
});

$("#moveto-mng-opt2-delete_style29").click(function () {
    let delObj_style29 = document.querySelector(`.${deleteListClassName}`);
    delObj_style29.remove();
});

/* ================ Scroll Down START ============== */
$(document).ready(function () {
    $(".movetoscrollbtn_style29").click(function () {
        const movetoscrollwindow_style29 = document.querySelector(".movetoscrollwindow_style29");
        $(".movetoscrollwindow_style29").animate({
            scrollTop: movetoscrollwindow_style29.scrollTop + 100,
        },
            250
        );
    });
});
/* ================ Scroll Down END ============== */
// ================= STYLE 2 MOVE2 2ND EDITION END =====================