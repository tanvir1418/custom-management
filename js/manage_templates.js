$('.carousel').carousel({
  interval: false,
});

// CLICK LOAD TEMPLATE TO OPEN SAMPLE START
$(document).ready(function () {
  $(".template_box").click(function () {
    let abc = document.querySelector(".sample_options");
    abc.classList.remove("dispaly_hide");

    $("#load_temp_slider").addClass("dispaly_hide");
  });
});
// CLICK LOAD TEMPLATE TO OPEN SAMPLE START



// ===/////=== MANAGE TEMP LIST1 ITEM START ===/////===
const managetempa_list = document.querySelector(".managetempa-list");
// Added by ASHIQ
const managetempalistmodal = [
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

(function manageAListModal() {
  let htmlmanagetempalistmodal = "", htmlDataModal = "";
  managetempalistmodal.forEach((item, index) => {
    htmlmanagetempalistmodal += `<li class="modalmanagetempalist-item-${index + 1}">
    <p>${item}</p>
    <div class="green-check-box display-none">
      <i class="fas fa-check"></i>
    </div>
    <div class="arrow-li-box arrow-li-box-background-color-1">
      <i class="fas fa-caret-right arrow-li-box-i-color-1"></i>
    </div>
    </li>`;
    /* Update this function By Ashiq */
    let modallistmanagetempa_data1 = "",
      modallistmanagetempa_data2 = "",
      modallistmanagetempa_data3 = "",
      length = 72;
    for (let i = 1; i <= length; i++) {
      let elementHtml = `<li class="option-managetempamodallist-${index + 1}-${i}">
      <p>Level ${index + 1} - Item ${i}</p>
      <div class="sublist-check-box checkbox_hide">
        <i class="fas fa-check"></i>
      </div>
      <div class="sublist-cancel-box checkbox_show" data-toggle="modal" data-target="#delet-manage-tempa-list-modal">
        <i class="fas fa-times"></i>
      </div>
      </li>`;
      if (length < 61) {
        if (i <= 20) {
          modallistmanagetempa_data1 += elementHtml;
        } else if (i >= 21 && i <= 40) {
          modallistmanagetempa_data2 += elementHtml;
        } else {
          modallistmanagetempa_data3 += elementHtml;
        }
      } else {
        let divide = Math.floor(length / 3),
          len = divide + (length % 3);
        if (i <= len) {
          modallistmanagetempa_data1 += elementHtml;
        } else if (i > len && i <= len + divide) {
          modallistmanagetempa_data2 += elementHtml;
        } else {
          modallistmanagetempa_data3 += elementHtml;
        }
      }
    }
    
    htmlDataModal +=
    `<ul class="submodal-list checkbox_hide" style="margin-left: 300px;" id="managetempa-submodal-div-list-1-${index + 1}">
      ${modallistmanagetempa_data1}
    </ul>
    <ul class="submodal-list checkbox_hide" style="margin-left: 600px;" id="managetempa-submodal-div-list-2-${index + 1}">
      ${modallistmanagetempa_data2}
    </ul>
    <ul class="submodal-list checkbox_hide" style="margin-left: 900px;" id="managetempa-submodal-div-list-3-${index + 1}">
      ${modallistmanagetempa_data3}
    </ul>`;
    /* Update End By Ashiq */
  });
  managetempa_list.innerHTML = htmlmanagetempalistmodal;
  document.querySelector("#sub-ul-managetempa-modallist").innerHTML = htmlDataModal;
})();

/* New Function Start */
let managetempa_submodal_div_list_id1_old = "",
  managetempa_submodal_div_list_id2_old = "",
  managetempa_submodal_div_list_id3_old = "";

function managetempa_modalitem_click_handle(listClassName) {
  let level_no = listClassName.match(/\d+/g);
  if (level_no != null) {
    const managetempa_submodal_div_list_id1 = "#managetempa-submodal-div-list-1-" + level_no,
      managetempa_submodal_div_list_id2 = "#managetempa-submodal-div-list-2-" + level_no,
      managetempa_submodal_div_list_id3 = "#managetempa-submodal-div-list-3-" + level_no;
    if (managetempa_submodal_div_list_id1 !== managetempa_submodal_div_list_id1_old) {
      $(managetempa_submodal_div_list_id1_old).toggleClass("checkbox_hide checkbox_show");
      $(managetempa_submodal_div_list_id1).toggleClass("checkbox_hide checkbox_show");
      managetempa_submodal_div_list_id1_old = managetempa_submodal_div_list_id1;
    } else {
      $(managetempa_submodal_div_list_id1_old).toggleClass("checkbox_hide checkbox_show");
      managetempa_submodal_div_list_id1_old = "";
    }

    if (managetempa_submodal_div_list_id2 !== managetempa_submodal_div_list_id2_old) {
      $(managetempa_submodal_div_list_id2_old).toggleClass("checkbox_hide checkbox_show");
      $(managetempa_submodal_div_list_id2).toggleClass("checkbox_hide checkbox_show");
      managetempa_submodal_div_list_id2_old = managetempa_submodal_div_list_id2;
    } else {
      $(managetempa_submodal_div_list_id2_old).toggleClass("checkbox_hide checkbox_show");
      managetempa_submodal_div_list_id2_old = "";
    }

    if (managetempa_submodal_div_list_id3 !== managetempa_submodal_div_list_id3_old) {
      $(managetempa_submodal_div_list_id3_old).toggleClass("checkbox_hide checkbox_show");
      $(managetempa_submodal_div_list_id3).toggleClass("checkbox_hide checkbox_show");
      managetempa_submodal_div_list_id3_old = managetempa_submodal_div_list_id3;
    } else {
      $(managetempa_submodal_div_list_id3_old).toggleClass("checkbox_hide checkbox_show");
      managetempa_submodal_div_list_id3_old = "";
    }
  }
}
/* New Function End */
let opt_managetempa_left_list = "";
managetempa_list.addEventListener("click", function (e) {
  let target = e.target;
  const elementName = ["DIV", "P"];
  if (elementName.includes(target.tagName)) {
    target = target.parentNode;
  } else if (target.tagName === "I") {
    target = target.parentNode.parentNode;
  }

  $(".highlight_li .arrow-li-box-i-color-2").addClass("arrow-li-box-i-color-1");
  $(".highlight_li .arrow-li-box-i-color-2").removeClass("arrow-li-box-i-color-2");
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

  opt_managetempa_left_list = target.childNodes[1].innerHTML;
  managetempa_modalitem_click_handle(target.classList[0]);
});

let managetempa_oldLIClassnameModal = "";
const sub_ul_managetempamodallist = document.querySelector("#sub-ul-managetempa-modallist");
sub_ul_managetempamodallist.addEventListener("click", function (e) {
  let target = e.target;
  if (target.tagName === "DIV") {
    if (target.className === "sublist-cancel-box") {
      managetempa_deleteOpt1Modal(target.parentNode.classList[0]);
      return;
    }
    target = target.parentNode;
  } else if (target.tagName === "P") {
    target = target.parentNode;
  } else if (target.tagName === "I") {
    target = target.parentNode;
    if (target.className === "sublist-cancel-box") {
      managetempa_deleteOpt1Modal(target.parentNode.classList[0]);
      return;
    } else target = target.parentNode;
  } else if (target.tagName !== "LI") return;

  $(target).children(".sublist-check-box").toggleClass("checkbox_hide checkbox_show");
  $(target).children(".sublist-cancel-box").toggleClass("checkbox_hide checkbox_show");

  // managetempa_oldLIClassnameModal = target.classList[0];
});

function managetempa_deleteOpt1Modal(className) {
  let managetempa_mng_opt2_delete = document.querySelector("#managetempa-mng-opt2-delete");
  managetempa_mng_opt2_delete.addEventListener("click", function () {
    let managetempa_delObj = document.querySelector(`.${className}`);
    managetempa_delObj.remove();
  });
}

function countTempAListModal(e) {
  let countItem = $(e).parent().parent().find("#sub-ul-managetempa-modallist .sublist-check-box.checkbox_show").length;
  $("#managetempa-list-count").html(`${countItem} Items Selected`);
}

function resetTempAListModal(e) {
  let checkItem = $(e).parent().parent().find("#sub-ul-managetempa-modallist .sublist-check-box.checkbox_show");
  let uncheckItem = $(e).parent().parent().find("#sub-ul-managetempa-modallist .sublist-cancel-box.checkbox_hide");
  checkItem.toggleClass("checkbox_show checkbox_hide");
  uncheckItem.toggleClass("checkbox_show checkbox_hide");
  $("#managetempa-list-count").html(`0 Items Selected`);
}
/* ================ Scroll Down START ============== */
$(document).ready(function () {
  $(".managetempa-scroll-btn").click(function () {
    const managetempa_scroll_window = document.querySelector(".managetempa-scroll-window");
    $(".managetempa-scroll-window").animate({
        scrollTop: managetempa_scroll_window.scrollTop + 100,
      },
      250
    );
  });
});
/* ================ Scroll Down END ============== */

// ===/////=== MANAGE TEMP LIST1 ITEM END ===/////===




// ===/////=== MANAGE TEMP LIST2 ITEM START ===/////===
const managetempb_list = document.querySelector(".managetempb-list");
// Added by ASHIQ
const managetempblistmodal = [
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
(function manageBListModal() {
  let htmlmanagetempblistmodal = "", htmlDataModal = "";
  managetempblistmodal.forEach((item, index) => {
    htmlmanagetempblistmodal += `<li class="modalmanagetempblist-item-${index + 1}">
    <p>${item}</p>
    <div class="green-check-box display-none">
      <i class="fas fa-check"></i>
    </div>
    <div class="arrow-li-box arrow-li-box-background-color-1">
      <i class="fas fa-caret-right arrow-li-box-i-color-1"></i>
    </div>
    </li>`;
    /* Update this function By Ashiq */
    let modallistmanagetempb_data1 = "",
      modallistmanagetempb_data2 = "",
      modallistmanagetempb_data3 = "",
      length = 72;
    for (let i = 1; i <= length; i++) {
      let elementHtml = `<li class="option-managetempbmodallist-${index + 1}-${i}">
      <p>Level ${index + 1} - Item ${i}</p>
      <div class="sublist-check-box checkbox_hide">
        <i class="fas fa-check"></i>
      </div>
      <div class="sublist-cancel-box checkbox_show" data-toggle="modal" data-target="#delet-manage-tempb-list-modal">
        <i class="fas fa-times"></i>
      </div>
      </li>`;
      if (length < 61) {
        if (i <= 20) {
          modallistmanagetempb_data1 += elementHtml;
        } else if (i >= 21 && i <= 40) {
          modallistmanagetempb_data2 += elementHtml;
        } else {
          modallistmanagetempb_data3 += elementHtml;
        }
      } else {
        let divide = Math.floor(length / 3),
          len = divide + (length % 3);
        if (i <= len) {
          modallistmanagetempb_data1 += elementHtml;
        } else if (i > len && i <= len + divide) {
          modallistmanagetempb_data2 += elementHtml;
        } else {
          modallistmanagetempb_data3 += elementHtml;
        }
      }
    }
    htmlDataModal += `
    <ul class="submodal-list checkbox_hide" style="margin-left: 300px;" id="managetempb-submodal-div-list-1-${index + 1}">
      ${modallistmanagetempb_data1}
    </ul>
    <ul class="submodal-list checkbox_hide" style="margin-left: 600px;" id="managetempb-submodal-div-list-2-${index + 1}">
      ${modallistmanagetempb_data2}
    </ul>
    <ul class="submodal-list checkbox_hide" style="margin-left: 900px;" id="managetempb-submodal-div-list-3-${index + 1}">
      ${modallistmanagetempb_data3}
    </ul>`;
  });
  managetempb_list.innerHTML = htmlmanagetempblistmodal;
  document.querySelector("#sub-ul-managetempb-modallist").innerHTML = htmlDataModal;
  /* Update End By Ashiq */
})();

/* New Function Start */
let managetempb_submodal_div_list_id1_old = "",
  managetempb_submodal_div_list_id2_old = "",
  managetempb_submodal_div_list_id3_old = "";

function managetempb_modalitem_click_handle(listClassName) {
  let level_no = listClassName.match(/\d+/g);
  if (level_no != null) {
    const managetempb_submodal_div_list_id1 = "#managetempb-submodal-div-list-1-" + level_no,
      managetempb_submodal_div_list_id2 = "#managetempb-submodal-div-list-2-" + level_no,
      managetempb_submodal_div_list_id3 = "#managetempb-submodal-div-list-3-" + level_no;
    if (managetempb_submodal_div_list_id1 !== managetempb_submodal_div_list_id1_old) {
      $(managetempb_submodal_div_list_id1_old).toggleClass("checkbox_hide checkbox_show");
      $(managetempb_submodal_div_list_id1).toggleClass("checkbox_hide checkbox_show");
      managetempb_submodal_div_list_id1_old = managetempb_submodal_div_list_id1;
    } else {
      $(managetempb_submodal_div_list_id1_old).toggleClass("checkbox_hide checkbox_show");
      managetempb_submodal_div_list_id1_old = "";
    }

    if (managetempb_submodal_div_list_id2 !== managetempb_submodal_div_list_id2_old) {
      $(managetempb_submodal_div_list_id2_old).toggleClass("checkbox_hide checkbox_show");
      $(managetempb_submodal_div_list_id2).toggleClass("checkbox_hide checkbox_show");
      managetempb_submodal_div_list_id2_old = managetempb_submodal_div_list_id2;
    } else {
      $(managetempb_submodal_div_list_id2_old).toggleClass("checkbox_hide checkbox_show");
      managetempb_submodal_div_list_id2_old = "";
    }

    if (managetempb_submodal_div_list_id3 !== managetempb_submodal_div_list_id3_old) {
      $(managetempb_submodal_div_list_id3_old).toggleClass("checkbox_hide checkbox_show");
      $(managetempb_submodal_div_list_id3).toggleClass("checkbox_hide checkbox_show");
      managetempb_submodal_div_list_id3_old = managetempb_submodal_div_list_id3;
    } else {
      $(managetempb_submodal_div_list_id3_old).toggleClass("checkbox_hide checkbox_show");
      managetempb_submodal_div_list_id3_old = "";
    }
  }
}
/* New Function End */
let opt_managetempb_left_list = "";
managetempb_list.addEventListener("click", function (e) {
  let target = e.target;
  const elementName = ["DIV", "P"];
  if (elementName.includes(target.tagName)) {
    target = target.parentNode;
  } else if (target.tagName === "I") {
    target = target.parentNode.parentNode;
  }

  $(".highlight_li .arrow-li-box-i-color-2").addClass("arrow-li-box-i-color-1");
  $(".highlight_li .arrow-li-box-i-color-2").removeClass("arrow-li-box-i-color-2");
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

  opt_managetempb_left_list = target.childNodes[1].innerHTML;
  managetempb_modalitem_click_handle(target.classList[0]);
});

let managetempb_oldLIClassnameModal = "";
const sub_ul_managetempbmodallist = document.querySelector("#sub-ul-managetempb-modallist");
sub_ul_managetempbmodallist.addEventListener("click", function (e) {
  let target = e.target;
  if (target.tagName === "DIV") {
    if (target.className === "sublist-cancel-box") {
      managetempb_deleteOpt1Modal(target.parentNode.classList[0]);
      return;
    }
    target = target.parentNode;
  } else if (target.tagName === "P") {
    target = target.parentNode;
  } else if (target.tagName === "I") {
    target = target.parentNode;
    if (target.className === "sublist-cancel-box") {
      managetempb_deleteOpt1Modal(target.parentNode.classList[0]);
      return;
    } else target = target.parentNode;
  } else if (target.tagName !== "LI") return;

  $(target).children(".sublist-check-box").toggleClass("checkbox_hide checkbox_show");
  $(target).children(".sublist-cancel-box").toggleClass("checkbox_hide checkbox_show");

  // managetempb_oldLIClassnameModal = target.classList[0];
});

function managetempb_deleteOpt1Modal(className) {
  let managetempb_mng_opt2_delete = document.querySelector("#managetempb-mng-opt2-delete");
  managetempb_mng_opt2_delete.addEventListener("click", function () {
    let managetempb_delObj = document.querySelector(`.${className}`);
    managetempb_delObj.remove();
  });
}

function countTempBListModal(e) {
  let countItem = $(e).parent().parent().find("#sub-ul-managetempb-modallist .sublist-check-box.checkbox_show").length;
  $("#managetempb-list-count").html(`${countItem} Items Selected`);
}

function resetTempBListModal(e) {
  let checkItem = $(e).parent().parent().find("#sub-ul-managetempb-modallist .sublist-check-box.checkbox_show");
  let uncheckItem = $(e).parent().parent().find("#sub-ul-managetempb-modallist .sublist-cancel-box.checkbox_hide");
  checkItem.toggleClass("checkbox_show checkbox_hide");
  uncheckItem.toggleClass("checkbox_show checkbox_hide");
  $("#managetempb-list-count").html(`0 Items Selected`);
}
/* ================ Scroll Down START ============== */
$(document).ready(function () {
  $(".managetempb-scroll-btn").click(function () {
    const managetempb_scroll_window = document.querySelector(".managetempb-scroll-window");
    $(".managetempb-scroll-window").animate({
        scrollTop: managetempb_scroll_window.scrollTop + 100,
      },
      250
    );
  });
});
/* ================ Scroll Down END ============== */

// ===/////=== MANAGE TEMP LIST2 ITEM END ===/////===


// ===/////=== MANAGE TEMP LIST3 ITEM START ===/////===
const managetempc_list = document.querySelector(".managetempc-list");
// Added by ASHIQ
const managetempclistmodal = [
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
(function manageCListModal() {
  let htmlmanagetempclistmodal = "", htmlDataModal = "";
  managetempclistmodal.forEach((item, index) => {
    htmlmanagetempclistmodal += `<li class="modalmanagetempclist-item-${index + 1}">
    <p>${item}</p>
    <div class="green-check-box display-none">
      <i class="fas fa-check"></i>
    </div>
    <div class="arrow-li-box arrow-li-box-background-color-1">
      <i class="fas fa-caret-right arrow-li-box-i-color-1"></i>
    </div>
    </li>`;
    /* Update this function By Ashiq */
    let modallistmanagetempc_data1 = "",
      modallistmanagetempc_data2 = "",
      modallistmanagetempc_data3 = "",
      length = 72;
    for (let i = 1; i <= length; i++) {
      let elementHtml = `<li class="option-managetempcmodallist-${index + 1}-${i}">
      <p>Level ${index + 1} - Item ${i}</p>
      <div class="sublist-check-box checkbox_hide">
        <i class="fas fa-check"></i>
      </div>
      <div class="sublist-cancel-box checkbox_show" data-toggle="modal" data-target="#delet-manage-tempc-list-modal">
        <i class="fas fa-times"></i>
      </div>
      </li>`;
      if (length < 61) {
        if (i <= 20) {
          modallistmanagetempc_data1 += elementHtml;
        } else if (i >= 21 && i <= 40) {
          modallistmanagetempc_data2 += elementHtml;
        } else {
          modallistmanagetempc_data3 += elementHtml;
        }
      } else {
        let divide = Math.floor(length / 3),
          len = divide + (length % 3);
        if (i <= len) {
          modallistmanagetempc_data1 += elementHtml;
        } else if (i > len && i <= len + divide) {
          modallistmanagetempc_data2 += elementHtml;
        } else {
          modallistmanagetempc_data3 += elementHtml;
        }
      }
    }
    htmlDataModal += 
    `<ul class="submodal-list checkbox_hide" style="margin-left: 300px;" id="managetempc-submodal-div-list-1-${index + 1}">
			${modallistmanagetempc_data1}
		</ul>
		<ul class="submodal-list checkbox_hide" style="margin-left: 600px;" id="managetempc-submodal-div-list-2-${index + 1}">
			${modallistmanagetempc_data2}
		</ul>
		<ul class="submodal-list checkbox_hide" style="margin-left: 900px;" id="managetempc-submodal-div-list-3-${index + 1}">
			${modallistmanagetempc_data3}
		</ul>`;
  });
  managetempc_list.innerHTML += htmlmanagetempclistmodal;
  document.querySelector("#sub-ul-managetempc-modallist").innerHTML = htmlDataModal;
  /* Update End By Ashiq */
})();

/* New Function Start */
let managetempc_submodal_div_list_id1_old = "",
  managetempc_submodal_div_list_id2_old = "",
  managetempc_submodal_div_list_id3_old = "";

function managetempc_modalitem_click_handle(listClassName) {
  let level_no = listClassName.match(/\d+/g);
  if (level_no != null) {
    const managetempc_submodal_div_list_id1 = "#managetempc-submodal-div-list-1-" + level_no,
      managetempc_submodal_div_list_id2 = "#managetempc-submodal-div-list-2-" + level_no,
      managetempc_submodal_div_list_id3 = "#managetempc-submodal-div-list-3-" + level_no;
    if (managetempc_submodal_div_list_id1 !== managetempc_submodal_div_list_id1_old) {
      $(managetempc_submodal_div_list_id1_old).toggleClass("checkbox_hide checkbox_show");
      $(managetempc_submodal_div_list_id1).toggleClass("checkbox_hide checkbox_show");
      managetempc_submodal_div_list_id1_old = managetempc_submodal_div_list_id1;
    } else {
      $(managetempc_submodal_div_list_id1_old).toggleClass("checkbox_hide checkbox_show");
      managetempc_submodal_div_list_id1_old = "";
    }

    if (managetempc_submodal_div_list_id2 !== managetempc_submodal_div_list_id2_old) {
      $(managetempc_submodal_div_list_id2_old).toggleClass("checkbox_hide checkbox_show");
      $(managetempc_submodal_div_list_id2).toggleClass("checkbox_hide checkbox_show");
      managetempc_submodal_div_list_id2_old = managetempc_submodal_div_list_id2;
    } else {
      $(managetempc_submodal_div_list_id2_old).toggleClass("checkbox_hide checkbox_show");
      managetempc_submodal_div_list_id2_old = "";
    }

    if (managetempc_submodal_div_list_id3 !== managetempc_submodal_div_list_id3_old) {
      $(managetempc_submodal_div_list_id3_old).toggleClass("checkbox_hide checkbox_show");
      $(managetempc_submodal_div_list_id3).toggleClass("checkbox_hide checkbox_show");
      managetempc_submodal_div_list_id3_old = managetempc_submodal_div_list_id3;
    } else {
      $(managetempc_submodal_div_list_id3_old).toggleClass("checkbox_hide checkbox_show");
      managetempc_submodal_div_list_id3_old = "";
    }
  }
}
/* New Function End */
let opt_managetempc_left_list = "";
managetempc_list.addEventListener("click", function (e) {
  let target = e.target;
  const elementName = ["DIV", "P"];
  if (elementName.includes(target.tagName)) {
    target = target.parentNode;
  } else if (target.tagName === "I") {
    target = target.parentNode.parentNode;
  }

  $(".highlight_li .arrow-li-box-i-color-2").addClass("arrow-li-box-i-color-1");
  $(".highlight_li .arrow-li-box-i-color-2").removeClass("arrow-li-box-i-color-2");
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

  opt_managetempc_left_list = target.childNodes[1].innerHTML;
  managetempc_modalitem_click_handle(target.classList[0]);
});

let managetempc_oldLIClassnameModal = "";
const sub_ul_managetempcmodallist = document.querySelector("#sub-ul-managetempc-modallist");
sub_ul_managetempcmodallist.addEventListener("click", function (e) {
  let target = e.target;
  if (target.tagName === "DIV") {
    if (target.className === "sublist-cancel-box") {
      managetempc_deleteOpt1Modal(target.parentNode.classList[0]);
      return;
    }
    target = target.parentNode;
  } else if (target.tagName === "P") {
    target = target.parentNode;
  } else if (target.tagName === "I") {
    target = target.parentNode;
    if (target.className === "sublist-cancel-box") {
      managetempc_deleteOpt1Modal(target.parentNode.classList[0]);
      return;
    } else target = target.parentNode;
  } else if (target.tagName !== "LI") return;


  $(target).children(".sublist-check-box").toggleClass("checkbox_hide checkbox_show");
  $(target).children(".sublist-cancel-box").toggleClass("checkbox_hide checkbox_show");

  // managetempc_oldLIClassnameModal = target.classList[0];
});

function managetempc_deleteOpt1Modal(className) {
  let managetempc_mng_opt2_delete = document.querySelector("#managetempc-mng-opt2-delete");
  managetempc_mng_opt2_delete.addEventListener("click", function () {
    let managetempc_delObj = document.querySelector(`.${className}`);
    managetempc_delObj.remove();
  });
}

function countTempCListModal(e) {
  let countItem = $(e).parent().parent().find("#sub-ul-managetempc-modallist .sublist-check-box.checkbox_show").length;
  $("#managetempc-list-count").html(`${countItem} Items Selected`);
}

function resetTempCListModal(e) {
  let checkItem = $(e).parent().parent().find("#sub-ul-managetempc-modallist .sublist-check-box.checkbox_show");
  let uncheckItem = $(e).parent().parent().find("#sub-ul-managetempc-modallist .sublist-cancel-box.checkbox_hide");
  checkItem.toggleClass("checkbox_show checkbox_hide");
  uncheckItem.toggleClass("checkbox_show checkbox_hide");
  $("#managetempc-list-count").html(`0 Items Selected`);
}
/* ================ Scroll Down START ============== */
$(document).ready(function () {
  $(".managetempc-scroll-btn").click(function () {
    const managetempc_scroll_window = document.querySelector(".managetempc-scroll-window");
    $(".managetempc-scroll-window").animate({
        scrollTop: managetempc_scroll_window.scrollTop + 100,
      },
      250
    );
  });
});
/* ================ Scroll Down END ============== */

// ===/////=== MANAGE TEMP LIST3 ITEM END ===/////===



// ===/////=== MANAGE TEMP LIST4 ITEM START ===/////===
const managetempd_list = document.querySelector(".managetempd-list");
// Added by ASHIQ
const managetempdlistmodal = [
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

(function manageDListModal() {
  let htmlmanagetempdlistmodal = "", htmlDataModal = "";
  managetempdlistmodal.forEach((item, index) => {
    htmlmanagetempdlistmodal += `<li class="modalmanagetempdlist-item-${index + 1}">
    <p>${item}</p>
    <div class="green-check-box display-none">
      <i class="fas fa-check"></i>
    </div>
    <div class="arrow-li-box arrow-li-box-background-color-1">
      <i class="fas fa-caret-right arrow-li-box-i-color-1"></i>
    </div>
    </li>`;
    /* Update this function By Ashiq */
    let modallistmanagetempd_data1 = "",
      modallistmanagetempd_data2 = "",
      modallistmanagetempd_data3 = "",
      length = 72;
    for (let i = 1; i <= length; i++) {
      let elementHtml = `<li class="option-managetempdmodallist-${index + 1}-${i}">
      <p>Level ${index + 1} - Item ${i}</p>
      <div class="sublist-check-box checkbox_hide">
        <i class="fas fa-check"></i>
      </div>
      <div class="sublist-cancel-box checkbox_show" data-toggle="modal" data-target="#delet-manage-tempd-list-modal">
        <i class="fas fa-times"></i>
      </div>
      </li>`;
      if (length < 61) {
        if (i <= 20) {
          modallistmanagetempd_data1 += elementHtml;
        } else if (i >= 21 && i <= 40) {
          modallistmanagetempd_data2 += elementHtml;
        } else {
          modallistmanagetempd_data3 += elementHtml;
        }
      } else {
        let divide = Math.floor(length / 3),
          len = divide + (length % 3);
        if (i <= len) {
          modallistmanagetempd_data1 += elementHtml;
        } else if (i > len && i <= len + divide) {
          modallistmanagetempd_data2 += elementHtml;
        } else {
          modallistmanagetempd_data3 += elementHtml;
        }
      }
    }
    htmlDataModal += 
    `<ul class="submodal-list checkbox_hide" style="margin-left: 300px;" id="managetempd-submodal-div-list-1-${index + 1}">
      ${modallistmanagetempd_data1}
    </ul>
    <ul class="submodal-list checkbox_hide" style="margin-left: 600px;" id="managetempd-submodal-div-list-2-${index + 1}">
      ${modallistmanagetempd_data2}
    </ul>
    <ul class="submodal-list checkbox_hide" style="margin-left: 900px;" id="managetempd-submodal-div-list-3-${index + 1}">
      ${modallistmanagetempd_data3}
    </ul>`;
  });
  managetempd_list.innerHTML = htmlmanagetempdlistmodal;
  document.querySelector("#sub-ul-managetempd-modallist").innerHTML = htmlDataModal;
  /* Update End By Ashiq */
})();

/* New Function Start */
let managetempd_submodal_div_list_id1_old = "",
  managetempd_submodal_div_list_id2_old = "",
  managetempd_submodal_div_list_id3_old = "";

function managetempd_modalitem_click_handle(listClassName) {
  let level_no = listClassName.match(/\d+/g);
  if (level_no != null) {
    const managetempd_submodal_div_list_id1 = "#managetempd-submodal-div-list-1-" + level_no,
      managetempd_submodal_div_list_id2 = "#managetempd-submodal-div-list-2-" + level_no,
      managetempd_submodal_div_list_id3 = "#managetempd-submodal-div-list-3-" + level_no;
    if (managetempd_submodal_div_list_id1 !== managetempd_submodal_div_list_id1_old) {
      $(managetempd_submodal_div_list_id1_old).toggleClass("checkbox_hide checkbox_show");
      $(managetempd_submodal_div_list_id1).toggleClass("checkbox_hide checkbox_show");
      managetempd_submodal_div_list_id1_old = managetempd_submodal_div_list_id1;
    } else {
      $(managetempd_submodal_div_list_id1_old).toggleClass("checkbox_hide checkbox_show");
      managetempd_submodal_div_list_id1_old = "";
    }

    if (managetempd_submodal_div_list_id2 !== managetempd_submodal_div_list_id2_old) {
      $(managetempd_submodal_div_list_id2_old).toggleClass("checkbox_hide checkbox_show");
      $(managetempd_submodal_div_list_id2).toggleClass("checkbox_hide checkbox_show");
      managetempd_submodal_div_list_id2_old = managetempd_submodal_div_list_id2;
    } else {
      $(managetempd_submodal_div_list_id2_old).toggleClass("checkbox_hide checkbox_show");
      managetempd_submodal_div_list_id2_old = "";
    }

    if (managetempd_submodal_div_list_id3 !== managetempd_submodal_div_list_id3_old) {
      $(managetempd_submodal_div_list_id3_old).toggleClass("checkbox_hide checkbox_show");
      $(managetempd_submodal_div_list_id3).toggleClass("checkbox_hide checkbox_show");
      managetempd_submodal_div_list_id3_old = managetempd_submodal_div_list_id3;
    } else {
      $(managetempd_submodal_div_list_id3_old).toggleClass("checkbox_hide checkbox_show");
      managetempd_submodal_div_list_id3_old = "";
    }
  }
}
/* New Function End */
let opt_managetempd_left_list = "";
managetempd_list.addEventListener("click", function (e) {
  let target = e.target;
  const elementName = ["DIV", "P"];
  if (elementName.includes(target.tagName)) {
    target = target.parentNode;
  } else if (target.tagName === "I") {
    target = target.parentNode.parentNode;
  }

  $(".highlight_li .arrow-li-box-i-color-2").addClass("arrow-li-box-i-color-1");
  $(".highlight_li .arrow-li-box-i-color-2").removeClass("arrow-li-box-i-color-2");
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

  opt_managetempd_left_list = target.childNodes[1].innerHTML;
  managetempd_modalitem_click_handle(target.classList[0]);
});

let managetempd_oldLIClassnameModal = "";
const sub_ul_managetempdmodallist = document.querySelector("#sub-ul-managetempd-modallist");
sub_ul_managetempdmodallist.addEventListener("click", function (e) {
  let target = e.target;
  if (target.tagName === "DIV") {
    if (target.className === "sublist-cancel-box") {
      managetempd_deleteOpt1Modal(target.parentNode.classList[0]);
      return;
    }
    target = target.parentNode;
  } else if (target.tagName === "P") {
    target = target.parentNode;
  } else if (target.tagName === "I") {
    target = target.parentNode;
    if (target.className === "sublist-cancel-box") {
      managetempd_deleteOpt1Modal(target.parentNode.classList[0]);
      return;
    } else target = target.parentNode;
  } else if (target.tagName !== "LI") return;

  $(target).children(".sublist-check-box").toggleClass("checkbox_hide checkbox_show");
  $(target).children(".sublist-cancel-box").toggleClass("checkbox_hide checkbox_show");

  // managetempd_oldLIClassnameModal = target.classList[0];
});

function managetempd_deleteOpt1Modal(className) {
  let managetempd_mng_opt2_delete = document.querySelector("#managetempd-mng-opt2-delete");
  managetempd_mng_opt2_delete.addEventListener("click", function () {
    let managetempd_delObj = document.querySelector(`.${className}`);
    managetempd_delObj.remove();
  });
}

function countTempDListModal(e) {
  let countItem = $(e).parent().parent().find("#sub-ul-managetempd-modallist .sublist-check-box.checkbox_show").length;
  $("#managetempd-list-count").html(`${countItem} Items Selected`);
}

function resetTempDListModal(e) {
  let checkItem = $(e).parent().parent().find("#sub-ul-managetempd-modallist .sublist-check-box.checkbox_show");
  let uncheckItem = $(e).parent().parent().find("#sub-ul-managetempd-modallist .sublist-cancel-box.checkbox_hide");
  checkItem.toggleClass("checkbox_show checkbox_hide");
  uncheckItem.toggleClass("checkbox_show checkbox_hide");
  $("#managetempd-list-count").html(`0 Items Selected`);
}
/* ================ Scroll Down START ============== */
$(document).ready(function () {
  $(".managetempd-scroll-btn").click(function () {
    const managetempd_scroll_window = document.querySelector(".managetempd-scroll-window");
    $(".managetempd-scroll-window").animate({
        scrollTop: managetempd_scroll_window.scrollTop + 100,
      },
      250
    );
  });
});
/* ================ Scroll Down END ============== */

// ===/////=== MANAGE TEMP LIST4 ITEM END ===/////===
