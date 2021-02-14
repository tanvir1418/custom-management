// ===/////=== OPTION 4 LIST1 ITEM START ===/////===
const optfourmodala_list = document.querySelector(".optfourmodala-list");
// Added by ASHIQ
const optfourmodalalistmodal = [
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

(function optfourmodalAListModal() {
  let htmloptfourmodalalistmodal = "", htmlDataModal = "";
  optfourmodalalistmodal.forEach((item, index) => {
    htmloptfourmodalalistmodal += `<li class="modaloptfourmodalalist-item-${index + 1}">
    <p>${item}</p>
    <div class="green-check-box display-none">
      <i class="fas fa-check"></i>
    </div>
    <div class="arrow-li-box arrow-li-box-background-color-1">
      <i class="fas fa-caret-right arrow-li-box-i-color-1"></i>
    </div>
    </li>`;
    /* Update this function By Ashiq */
    let modallistoptfourmodala_data1 = "",
      modallistoptfourmodala_data2 = "",
      modallistoptfourmodala_data3 = "",
      length = 72;
    for (let i = 1; i <= length; i++) {
      let elementHtml = `<li class="option-optfourmodalamodallist-${index + 1}-${i}">
      <p>Level ${index + 1} - Item ${i}</p>
      <div class="sublist-check-box checkbox_hide">
        <i class="fas fa-check"></i>
      </div>
      <div class="sublist-cancel-box checkbox_show" data-toggle="modal" data-target="#delet-optfourmodala-modal">
        <i class="fas fa-times"></i>
      </div>
      </li>`;
      if (length < 61) {
        if (i <= 20) {
          modallistoptfourmodala_data1 += elementHtml;
        } else if (i >= 21 && i <= 40) {
          modallistoptfourmodala_data2 += elementHtml;
        } else {
          modallistoptfourmodala_data3 += elementHtml;
        }
      } else {
        let divide = Math.floor(length / 3),
          len = divide + (length % 3);
        if (i <= len) {
          modallistoptfourmodala_data1 += elementHtml;
        } else if (i > len && i <= len + divide) {
          modallistoptfourmodala_data2 += elementHtml;
        } else {
          modallistoptfourmodala_data3 += elementHtml;
        }
      }
    }
    
    htmlDataModal +=
    `<ul class="submodal-list checkbox_hide" style="margin-left: 300px;" id="optfourmodala-submodal-div-list-1-${index + 1}">
      ${modallistoptfourmodala_data1}
    </ul>
    <ul class="submodal-list checkbox_hide" style="margin-left: 600px;" id="optfourmodala-submodal-div-list-2-${index + 1}">
      ${modallistoptfourmodala_data2}
    </ul>
    <ul class="submodal-list checkbox_hide" style="margin-left: 900px;" id="optfourmodala-submodal-div-list-3-${index + 1}">
      ${modallistoptfourmodala_data3}
    </ul>`;
    /* Update End By Ashiq */
  });
  optfourmodala_list.innerHTML = htmloptfourmodalalistmodal;
  document.querySelector("#sub-ul-optfourmodala-modallist").innerHTML = htmlDataModal;
})();

/* New Function Start */
let optfourmodala_submodal_div_list_id1_old = "",
  optfourmodala_submodal_div_list_id2_old = "",
  optfourmodala_submodal_div_list_id3_old = "";

function optfourmodala_modalitem_click_handle(listClassName) {
  let level_no = listClassName.match(/\d+/g);
  if (level_no != null) {
    const optfourmodala_submodal_div_list_id1 = "#optfourmodala-submodal-div-list-1-" + level_no,
      optfourmodala_submodal_div_list_id2 = "#optfourmodala-submodal-div-list-2-" + level_no,
      optfourmodala_submodal_div_list_id3 = "#optfourmodala-submodal-div-list-3-" + level_no;
    if (optfourmodala_submodal_div_list_id1 !== optfourmodala_submodal_div_list_id1_old) {
      $(optfourmodala_submodal_div_list_id1_old).toggleClass("checkbox_hide checkbox_show");
      $(optfourmodala_submodal_div_list_id1).toggleClass("checkbox_hide checkbox_show");
      optfourmodala_submodal_div_list_id1_old = optfourmodala_submodal_div_list_id1;
    } else {
      $(optfourmodala_submodal_div_list_id1_old).toggleClass("checkbox_hide checkbox_show");
      optfourmodala_submodal_div_list_id1_old = "";
    }

    if (optfourmodala_submodal_div_list_id2 !== optfourmodala_submodal_div_list_id2_old) {
      $(optfourmodala_submodal_div_list_id2_old).toggleClass("checkbox_hide checkbox_show");
      $(optfourmodala_submodal_div_list_id2).toggleClass("checkbox_hide checkbox_show");
      optfourmodala_submodal_div_list_id2_old = optfourmodala_submodal_div_list_id2;
    } else {
      $(optfourmodala_submodal_div_list_id2_old).toggleClass("checkbox_hide checkbox_show");
      optfourmodala_submodal_div_list_id2_old = "";
    }

    if (optfourmodala_submodal_div_list_id3 !== optfourmodala_submodal_div_list_id3_old) {
      $(optfourmodala_submodal_div_list_id3_old).toggleClass("checkbox_hide checkbox_show");
      $(optfourmodala_submodal_div_list_id3).toggleClass("checkbox_hide checkbox_show");
      optfourmodala_submodal_div_list_id3_old = optfourmodala_submodal_div_list_id3;
    } else {
      $(optfourmodala_submodal_div_list_id3_old).toggleClass("checkbox_hide checkbox_show");
      optfourmodala_submodal_div_list_id3_old = "";
    }
  }
}
/* New Function End */
let optfourmodala_left_list = "";
(function manTempaLeftListControl() {
  let oldTarget = "";
  optfourmodala_list.addEventListener("click", function (e) {
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

    optfourmodala_left_list = target.childNodes[1].innerHTML;
    optfourmodala_modalitem_click_handle(target.classList[0]);
  });
})();

let optfourmodala_oldLIClassnameModal = "";
const sub_ul_optfourmodalamodallist = document.querySelector("#sub-ul-optfourmodala-modallist");
sub_ul_optfourmodalamodallist.addEventListener("click", function (e) {
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
    if (target.className.indexOf("sublist-cancel-box")!=-1) {
      deleteListClassName = target.parentNode.classList[0];
      return;
    } else target = target.parentNode;
  } else if (target.tagName !== "LI") return;

  $(target).children(".sublist-check-box").toggleClass("checkbox_hide checkbox_show");
  $(target).children(".sublist-cancel-box").toggleClass("checkbox_hide checkbox_show");

  // optfourmodala_oldLIClassnameModal = target.classList[0];
});

$("#optfourmodala-mng-opt2-delete").click(function () {
  let delObj = document.querySelector(`.${deleteListClassName}`);
  delObj.remove();
});

function countoptfourmodalaListModal(e) {
  let countItem = $(e).parent().parent().find("#sub-ul-optfourmodala-modallist .sublist-check-box.checkbox_show").length;
  $("#optfourmodala-list-count").html(`${countItem} Items Selected`);
}

function resetoptfourmodalaListModal(e) {
  let checkItem = $(e).parent().parent().find("#sub-ul-optfourmodala-modallist .sublist-check-box.checkbox_show");
  let uncheckItem = $(e).parent().parent().find("#sub-ul-optfourmodala-modallist .sublist-cancel-box.checkbox_hide");
  checkItem.toggleClass("checkbox_show checkbox_hide");
  uncheckItem.toggleClass("checkbox_show checkbox_hide");
  $("#optfourmodala-list-count").html(`0 Items Selected`);
}
/* ================ Scroll Down START ============== */
$(document).ready(function () {
  $(".optfourmodala-scroll-btn").click(function () {
    const optfourmodala_scroll_window = document.querySelector(".optfourmodala-scroll-window");
    $(".optfourmodala-scroll-window").animate({
        scrollTop: optfourmodala_scroll_window.scrollTop + 100,
      },
      250
    );
  });
});
/* ================ Scroll Down END ============== */


// ===/////=== OPTION 4 LIST1 ITEM END ===/////===


// ===/////=== OPTION 4 LIST2 ITEM START ===/////===
const optfourmodalb_list = document.querySelector(".optfourmodalb-list");
// Added by ASHIQ
const optfourmodalblistmodal = [
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

(function optfourmodalbListModal() {
  let htmloptfourmodalblistmodal = "", htmlDataModal = "";
  optfourmodalblistmodal.forEach((item, index) => {
    htmloptfourmodalblistmodal += `<li class="modaloptfourmodalblist-item-${index + 1}">
    <p>${item}</p>
    <div class="green-check-box display-none">
      <i class="fas fa-check"></i>
    </div>
    <div class="arrow-li-box arrow-li-box-background-color-1">
      <i class="fas fa-caret-right arrow-li-box-i-color-1"></i>
    </div>
    </li>`;
    /* Update this function By Ashiq */
    let modallistoptfourmodalb_data1 = "",
      modallistoptfourmodalb_data2 = "",
      modallistoptfourmodalb_data3 = "",
      length = 72;
    for (let i = 1; i <= length; i++) {
      let elementHtml = `<li class="option-optfourmodalbmodallist-${index + 1}-${i}">
      <p>Level ${index + 1} - Item ${i}</p>
      <div class="sublist-check-box checkbox_hide">
        <i class="fas fa-check"></i>
      </div>
      <div class="sublist-cancel-box checkbox_show" data-toggle="modal" data-target="#delet-optfourmodalb-modal">
        <i class="fas fa-times"></i>
      </div>
      </li>`;
      if (length < 61) {
        if (i <= 20) {
          modallistoptfourmodalb_data1 += elementHtml;
        } else if (i >= 21 && i <= 40) {
          modallistoptfourmodalb_data2 += elementHtml;
        } else {
          modallistoptfourmodalb_data3 += elementHtml;
        }
      } else {
        let divide = Math.floor(length / 3),
          len = divide + (length % 3);
        if (i <= len) {
          modallistoptfourmodalb_data1 += elementHtml;
        } else if (i > len && i <= len + divide) {
          modallistoptfourmodalb_data2 += elementHtml;
        } else {
          modallistoptfourmodalb_data3 += elementHtml;
        }
      }
    }
    
    htmlDataModal +=
    `<ul class="submodal-list checkbox_hide" style="margin-left: 300px;" id="optfourmodalb-submodal-div-list-1-${index + 1}">
      ${modallistoptfourmodalb_data1}
    </ul>
    <ul class="submodal-list checkbox_hide" style="margin-left: 600px;" id="optfourmodalb-submodal-div-list-2-${index + 1}">
      ${modallistoptfourmodalb_data2}
    </ul>
    <ul class="submodal-list checkbox_hide" style="margin-left: 900px;" id="optfourmodalb-submodal-div-list-3-${index + 1}">
      ${modallistoptfourmodalb_data3}
    </ul>`;
    /* Update End By Ashiq */
  });
  optfourmodalb_list.innerHTML = htmloptfourmodalblistmodal;
  document.querySelector("#sub-ul-optfourmodalb-modallist").innerHTML = htmlDataModal;
})();

/* New Function Start */
let optfourmodalb_submodal_div_list_id1_old = "",
  optfourmodalb_submodal_div_list_id2_old = "",
  optfourmodalb_submodal_div_list_id3_old = "";

function optfourmodalb_modalitem_click_handle(listClassName) {
  let level_no = listClassName.match(/\d+/g);
  if (level_no != null) {
    const optfourmodalb_submodal_div_list_id1 = "#optfourmodalb-submodal-div-list-1-" + level_no,
      optfourmodalb_submodal_div_list_id2 = "#optfourmodalb-submodal-div-list-2-" + level_no,
      optfourmodalb_submodal_div_list_id3 = "#optfourmodalb-submodal-div-list-3-" + level_no;
    if (optfourmodalb_submodal_div_list_id1 !== optfourmodalb_submodal_div_list_id1_old) {
      $(optfourmodalb_submodal_div_list_id1_old).toggleClass("checkbox_hide checkbox_show");
      $(optfourmodalb_submodal_div_list_id1).toggleClass("checkbox_hide checkbox_show");
      optfourmodalb_submodal_div_list_id1_old = optfourmodalb_submodal_div_list_id1;
    } else {
      $(optfourmodalb_submodal_div_list_id1_old).toggleClass("checkbox_hide checkbox_show");
      optfourmodalb_submodal_div_list_id1_old = "";
    }

    if (optfourmodalb_submodal_div_list_id2 !== optfourmodalb_submodal_div_list_id2_old) {
      $(optfourmodalb_submodal_div_list_id2_old).toggleClass("checkbox_hide checkbox_show");
      $(optfourmodalb_submodal_div_list_id2).toggleClass("checkbox_hide checkbox_show");
      optfourmodalb_submodal_div_list_id2_old = optfourmodalb_submodal_div_list_id2;
    } else {
      $(optfourmodalb_submodal_div_list_id2_old).toggleClass("checkbox_hide checkbox_show");
      optfourmodalb_submodal_div_list_id2_old = "";
    }

    if (optfourmodalb_submodal_div_list_id3 !== optfourmodalb_submodal_div_list_id3_old) {
      $(optfourmodalb_submodal_div_list_id3_old).toggleClass("checkbox_hide checkbox_show");
      $(optfourmodalb_submodal_div_list_id3).toggleClass("checkbox_hide checkbox_show");
      optfourmodalb_submodal_div_list_id3_old = optfourmodalb_submodal_div_list_id3;
    } else {
      $(optfourmodalb_submodal_div_list_id3_old).toggleClass("checkbox_hide checkbox_show");
      optfourmodalb_submodal_div_list_id3_old = "";
    }
  }
}
/* New Function End */
let optfourmodalb_left_list = "";
(function manTempaLeftListControl() {
  let oldTarget = "";
  optfourmodalb_list.addEventListener("click", function (e) {
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

    optfourmodalb_left_list = target.childNodes[1].innerHTML;
    optfourmodalb_modalitem_click_handle(target.classList[0]);
  });
})();

let optfourmodalb_oldLIClassnameModal = "";
const sub_ul_optfourmodalbmodallist = document.querySelector("#sub-ul-optfourmodalb-modallist");
sub_ul_optfourmodalbmodallist.addEventListener("click", function (e) {
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
    if (target.className.indexOf("sublist-cancel-box")!=-1) {
      deleteListClassName = target.parentNode.classList[0];
      return;
    } else target = target.parentNode;
  } else if (target.tagName !== "LI") return;

  $(target).children(".sublist-check-box").toggleClass("checkbox_hide checkbox_show");
  $(target).children(".sublist-cancel-box").toggleClass("checkbox_hide checkbox_show");

  // optfourmodalb_oldLIClassnameModal = target.classList[0];
});

$("#optfourmodalb-mng-opt2-delete").click(function () {
  let delObj = document.querySelector(`.${deleteListClassName}`);
  delObj.remove();
});

function countoptfourmodalbListModal(e) {
  let countItem = $(e).parent().parent().find("#sub-ul-optfourmodalb-modallist .sublist-check-box.checkbox_show").length;
  $("#optfourmodalb-list-count").html(`${countItem} Items Selected`);
}

function resetoptfourmodalbListModal(e) {
  let checkItem = $(e).parent().parent().find("#sub-ul-optfourmodalb-modallist .sublist-check-box.checkbox_show");
  let uncheckItem = $(e).parent().parent().find("#sub-ul-optfourmodalb-modallist .sublist-cancel-box.checkbox_hide");
  checkItem.toggleClass("checkbox_show checkbox_hide");
  uncheckItem.toggleClass("checkbox_show checkbox_hide");
  $("#optfourmodalb-list-count").html(`0 Items Selected`);
}
/* ================ Scroll Down START ============== */
$(document).ready(function () {
  $(".optfourmodalb-scroll-btn").click(function () {
    const optfourmodalb_scroll_window = document.querySelector(".optfourmodalb-scroll-window");
    $(".optfourmodalb-scroll-window").animate({
        scrollTop: optfourmodalb_scroll_window.scrollTop + 100,
      },
      250
    );
  });
});
/* ================ Scroll Down END ============== */


// ===/////=== OPTION 4 LIST2 ITEM END ===/////===


// ===/////=== OPTION 4 LIST3 ITEM START ===/////===
const optfourmodalc_list = document.querySelector(".optfourmodalc-list");
// Added by ASHIQ
const optfourmodalclistmodal = [
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

(function optfourmodalcListModal() {
  let htmloptfourmodalclistmodal = "", htmlDataModal = "";
  optfourmodalclistmodal.forEach((item, index) => {
    htmloptfourmodalclistmodal += `<li class="modaloptfourmodalclist-item-${index + 1}">
    <p>${item}</p>
    <div class="green-check-box display-none">
      <i class="fas fa-check"></i>
    </div>
    <div class="arrow-li-box arrow-li-box-background-color-1">
      <i class="fas fa-caret-right arrow-li-box-i-color-1"></i>
    </div>
    </li>`;
    /* Update this function By Ashiq */
    let modallistoptfourmodalc_data1 = "",
      modallistoptfourmodalc_data2 = "",
      modallistoptfourmodalc_data3 = "",
      length = 72;
    for (let i = 1; i <= length; i++) {
      let elementHtml = `<li class="option-optfourmodalcmodallist-${index + 1}-${i}">
      <p>Level ${index + 1} - Item ${i}</p>
      <div class="sublist-check-box checkbox_hide">
        <i class="fas fa-check"></i>
      </div>
      <div class="sublist-cancel-box checkbox_show" data-toggle="modal" data-target="#delet-optfourmodalc-modal">
        <i class="fas fa-times"></i>
      </div>
      </li>`;
      if (length < 61) {
        if (i <= 20) {
          modallistoptfourmodalc_data1 += elementHtml;
        } else if (i >= 21 && i <= 40) {
          modallistoptfourmodalc_data2 += elementHtml;
        } else {
          modallistoptfourmodalc_data3 += elementHtml;
        }
      } else {
        let divide = Math.floor(length / 3),
          len = divide + (length % 3);
        if (i <= len) {
          modallistoptfourmodalc_data1 += elementHtml;
        } else if (i > len && i <= len + divide) {
          modallistoptfourmodalc_data2 += elementHtml;
        } else {
          modallistoptfourmodalc_data3 += elementHtml;
        }
      }
    }
    
    htmlDataModal +=
    `<ul class="submodal-list checkbox_hide" style="margin-left: 300px;" id="optfourmodalc-submodal-div-list-1-${index + 1}">
      ${modallistoptfourmodalc_data1}
    </ul>
    <ul class="submodal-list checkbox_hide" style="margin-left: 600px;" id="optfourmodalc-submodal-div-list-2-${index + 1}">
      ${modallistoptfourmodalc_data2}
    </ul>
    <ul class="submodal-list checkbox_hide" style="margin-left: 900px;" id="optfourmodalc-submodal-div-list-3-${index + 1}">
      ${modallistoptfourmodalc_data3}
    </ul>`;
    /* Update End By Ashiq */
  });
  optfourmodalc_list.innerHTML = htmloptfourmodalclistmodal;
  document.querySelector("#sub-ul-optfourmodalc-modallist").innerHTML = htmlDataModal;
})();

/* New Function Start */
let optfourmodalc_submodal_div_list_id1_old = "",
  optfourmodalc_submodal_div_list_id2_old = "",
  optfourmodalc_submodal_div_list_id3_old = "";

function optfourmodalc_modalitem_click_handle(listClassName) {
  let level_no = listClassName.match(/\d+/g);
  if (level_no != null) {
    const optfourmodalc_submodal_div_list_id1 = "#optfourmodalc-submodal-div-list-1-" + level_no,
      optfourmodalc_submodal_div_list_id2 = "#optfourmodalc-submodal-div-list-2-" + level_no,
      optfourmodalc_submodal_div_list_id3 = "#optfourmodalc-submodal-div-list-3-" + level_no;
    if (optfourmodalc_submodal_div_list_id1 !== optfourmodalc_submodal_div_list_id1_old) {
      $(optfourmodalc_submodal_div_list_id1_old).toggleClass("checkbox_hide checkbox_show");
      $(optfourmodalc_submodal_div_list_id1).toggleClass("checkbox_hide checkbox_show");
      optfourmodalc_submodal_div_list_id1_old = optfourmodalc_submodal_div_list_id1;
    } else {
      $(optfourmodalc_submodal_div_list_id1_old).toggleClass("checkbox_hide checkbox_show");
      optfourmodalc_submodal_div_list_id1_old = "";
    }

    if (optfourmodalc_submodal_div_list_id2 !== optfourmodalc_submodal_div_list_id2_old) {
      $(optfourmodalc_submodal_div_list_id2_old).toggleClass("checkbox_hide checkbox_show");
      $(optfourmodalc_submodal_div_list_id2).toggleClass("checkbox_hide checkbox_show");
      optfourmodalc_submodal_div_list_id2_old = optfourmodalc_submodal_div_list_id2;
    } else {
      $(optfourmodalc_submodal_div_list_id2_old).toggleClass("checkbox_hide checkbox_show");
      optfourmodalc_submodal_div_list_id2_old = "";
    }

    if (optfourmodalc_submodal_div_list_id3 !== optfourmodalc_submodal_div_list_id3_old) {
      $(optfourmodalc_submodal_div_list_id3_old).toggleClass("checkbox_hide checkbox_show");
      $(optfourmodalc_submodal_div_list_id3).toggleClass("checkbox_hide checkbox_show");
      optfourmodalc_submodal_div_list_id3_old = optfourmodalc_submodal_div_list_id3;
    } else {
      $(optfourmodalc_submodal_div_list_id3_old).toggleClass("checkbox_hide checkbox_show");
      optfourmodalc_submodal_div_list_id3_old = "";
    }
  }
}
/* New Function End */
let optfourmodalc_left_list = "";
(function manTempaLeftListControl() {
  let oldTarget = "";
  optfourmodalc_list.addEventListener("click", function (e) {
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

    optfourmodalc_left_list = target.childNodes[1].innerHTML;
    optfourmodalc_modalitem_click_handle(target.classList[0]);
  });
})();

let optfourmodalc_oldLIClassnameModal = "";
const sub_ul_optfourmodalcmodallist = document.querySelector("#sub-ul-optfourmodalc-modallist");
sub_ul_optfourmodalcmodallist.addEventListener("click", function (e) {
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
    if (target.className.indexOf("sublist-cancel-box")!=-1) {
      deleteListClassName = target.parentNode.classList[0];
      return;
    } else target = target.parentNode;
  } else if (target.tagName !== "LI") return;

  $(target).children(".sublist-check-box").toggleClass("checkbox_hide checkbox_show");
  $(target).children(".sublist-cancel-box").toggleClass("checkbox_hide checkbox_show");

  // optfourmodalc_oldLIClassnameModal = target.classList[0];
});

$("#optfourmodalc-mng-opt2-delete").click(function () {
  let delObj = document.querySelector(`.${deleteListClassName}`);
  delObj.remove();
});

function countoptfourmodalcListModal(e) {
  let countItem = $(e).parent().parent().find("#sub-ul-optfourmodalc-modallist .sublist-check-box.checkbox_show").length;
  $("#optfourmodalc-list-count").html(`${countItem} Items Selected`);
}

function resetoptfourmodalcListModal(e) {
  let checkItem = $(e).parent().parent().find("#sub-ul-optfourmodalc-modallist .sublist-check-box.checkbox_show");
  let uncheckItem = $(e).parent().parent().find("#sub-ul-optfourmodalc-modallist .sublist-cancel-box.checkbox_hide");
  checkItem.toggleClass("checkbox_show checkbox_hide");
  uncheckItem.toggleClass("checkbox_show checkbox_hide");
  $("#optfourmodalc-list-count").html(`0 Items Selected`);
}
/* ================ Scroll Down START ============== */
$(document).ready(function () {
  $(".optfourmodalc-scroll-btn").click(function () {
    const optfourmodalc_scroll_window = document.querySelector(".optfourmodalc-scroll-window");
    $(".optfourmodalc-scroll-window").animate({
        scrollTop: optfourmodalc_scroll_window.scrollTop + 100,
      },
      250
    );
  });
});
/* ================ Scroll Down END ============== */


// ===/////=== OPTION 4 LIST3 ITEM END ===/////===


// ===/////=== OPTION 4 LIST4 ITEM START ===/////===
const optfourmodald_list = document.querySelector(".optfourmodald-list");
// Added by ASHIQ
const optfourmodaldlistmodal = [
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

(function optfourmodaldListModal() {
  let htmloptfourmodaldlistmodal = "", htmlDataModal = "";
  optfourmodaldlistmodal.forEach((item, index) => {
    htmloptfourmodaldlistmodal += `<li class="modaloptfourmodaldlist-item-${index + 1}">
    <p>${item}</p>
    <div class="green-check-box display-none">
      <i class="fas fa-check"></i>
    </div>
    <div class="arrow-li-box arrow-li-box-background-color-1">
      <i class="fas fa-caret-right arrow-li-box-i-color-1"></i>
    </div>
    </li>`;
    /* Update this function By Ashiq */
    let modallistoptfourmodald_data1 = "",
      modallistoptfourmodald_data2 = "",
      modallistoptfourmodald_data3 = "",
      length = 72;
    for (let i = 1; i <= length; i++) {
      let elementHtml = `<li class="option-optfourmodaldmodallist-${index + 1}-${i}">
      <p>Level ${index + 1} - Item ${i}</p>
      <div class="sublist-check-box checkbox_hide">
        <i class="fas fa-check"></i>
      </div>
      <div class="sublist-cancel-box checkbox_show" data-toggle="modal" data-target="#delet-optfourmodald-modal">
        <i class="fas fa-times"></i>
      </div>
      </li>`;
      if (length < 61) {
        if (i <= 20) {
          modallistoptfourmodald_data1 += elementHtml;
        } else if (i >= 21 && i <= 40) {
          modallistoptfourmodald_data2 += elementHtml;
        } else {
          modallistoptfourmodald_data3 += elementHtml;
        }
      } else {
        let divide = Math.floor(length / 3),
          len = divide + (length % 3);
        if (i <= len) {
          modallistoptfourmodald_data1 += elementHtml;
        } else if (i > len && i <= len + divide) {
          modallistoptfourmodald_data2 += elementHtml;
        } else {
          modallistoptfourmodald_data3 += elementHtml;
        }
      }
    }
    
    htmlDataModal +=
    `<ul class="submodal-list checkbox_hide" style="margin-left: 300px;" id="optfourmodald-submodal-div-list-1-${index + 1}">
      ${modallistoptfourmodald_data1}
    </ul>
    <ul class="submodal-list checkbox_hide" style="margin-left: 600px;" id="optfourmodald-submodal-div-list-2-${index + 1}">
      ${modallistoptfourmodald_data2}
    </ul>
    <ul class="submodal-list checkbox_hide" style="margin-left: 900px;" id="optfourmodald-submodal-div-list-3-${index + 1}">
      ${modallistoptfourmodald_data3}
    </ul>`;
    /* Update End By Ashiq */
  });
  optfourmodald_list.innerHTML = htmloptfourmodaldlistmodal;
  document.querySelector("#sub-ul-optfourmodald-modallist").innerHTML = htmlDataModal;
})();

/* New Function Start */
let optfourmodald_submodal_div_list_id1_old = "",
  optfourmodald_submodal_div_list_id2_old = "",
  optfourmodald_submodal_div_list_id3_old = "";

function optfourmodald_modalitem_click_handle(listClassName) {
  let level_no = listClassName.match(/\d+/g);
  if (level_no != null) {
    const optfourmodald_submodal_div_list_id1 = "#optfourmodald-submodal-div-list-1-" + level_no,
      optfourmodald_submodal_div_list_id2 = "#optfourmodald-submodal-div-list-2-" + level_no,
      optfourmodald_submodal_div_list_id3 = "#optfourmodald-submodal-div-list-3-" + level_no;
    if (optfourmodald_submodal_div_list_id1 !== optfourmodald_submodal_div_list_id1_old) {
      $(optfourmodald_submodal_div_list_id1_old).toggleClass("checkbox_hide checkbox_show");
      $(optfourmodald_submodal_div_list_id1).toggleClass("checkbox_hide checkbox_show");
      optfourmodald_submodal_div_list_id1_old = optfourmodald_submodal_div_list_id1;
    } else {
      $(optfourmodald_submodal_div_list_id1_old).toggleClass("checkbox_hide checkbox_show");
      optfourmodald_submodal_div_list_id1_old = "";
    }

    if (optfourmodald_submodal_div_list_id2 !== optfourmodald_submodal_div_list_id2_old) {
      $(optfourmodald_submodal_div_list_id2_old).toggleClass("checkbox_hide checkbox_show");
      $(optfourmodald_submodal_div_list_id2).toggleClass("checkbox_hide checkbox_show");
      optfourmodald_submodal_div_list_id2_old = optfourmodald_submodal_div_list_id2;
    } else {
      $(optfourmodald_submodal_div_list_id2_old).toggleClass("checkbox_hide checkbox_show");
      optfourmodald_submodal_div_list_id2_old = "";
    }

    if (optfourmodald_submodal_div_list_id3 !== optfourmodald_submodal_div_list_id3_old) {
      $(optfourmodald_submodal_div_list_id3_old).toggleClass("checkbox_hide checkbox_show");
      $(optfourmodald_submodal_div_list_id3).toggleClass("checkbox_hide checkbox_show");
      optfourmodald_submodal_div_list_id3_old = optfourmodald_submodal_div_list_id3;
    } else {
      $(optfourmodald_submodal_div_list_id3_old).toggleClass("checkbox_hide checkbox_show");
      optfourmodald_submodal_div_list_id3_old = "";
    }
  }
}
/* New Function End */
let optfourmodald_left_list = "";
(function manTempaLeftListControl() {
  let oldTarget = "";
  optfourmodald_list.addEventListener("click", function (e) {
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

    optfourmodald_left_list = target.childNodes[1].innerHTML;
    optfourmodald_modalitem_click_handle(target.classList[0]);
  });
})();

let optfourmodald_oldLIClassnameModal = "";
const sub_ul_optfourmodaldmodallist = document.querySelector("#sub-ul-optfourmodald-modallist");
sub_ul_optfourmodaldmodallist.addEventListener("click", function (e) {
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
    if (target.className.indexOf("sublist-cancel-box")!=-1) {
      deleteListClassName = target.parentNode.classList[0];
      return;
    } else target = target.parentNode;
  } else if (target.tagName !== "LI") return;

  $(target).children(".sublist-check-box").toggleClass("checkbox_hide checkbox_show");
  $(target).children(".sublist-cancel-box").toggleClass("checkbox_hide checkbox_show");

  // optfourmodald_oldLIClassnameModal = target.classList[0];
});

$("#optfourmodald-mng-opt2-delete").click(function () {
  let delObj = document.querySelector(`.${deleteListClassName}`);
  delObj.remove();
});

function countoptfourmodaldListModal(e) {
  let countItem = $(e).parent().parent().find("#sub-ul-optfourmodald-modallist .sublist-check-box.checkbox_show").length;
  $("#optfourmodald-list-count").html(`${countItem} Items Selected`);
}

function resetoptfourmodaldListModal(e) {
  let checkItem = $(e).parent().parent().find("#sub-ul-optfourmodald-modallist .sublist-check-box.checkbox_show");
  let uncheckItem = $(e).parent().parent().find("#sub-ul-optfourmodald-modallist .sublist-cancel-box.checkbox_hide");
  checkItem.toggleClass("checkbox_show checkbox_hide");
  uncheckItem.toggleClass("checkbox_show checkbox_hide");
  $("#optfourmodald-list-count").html(`0 Items Selected`);
}
/* ================ Scroll Down START ============== */
$(document).ready(function () {
  $(".optfourmodald-scroll-btn").click(function () {
    const optfourmodald_scroll_window = document.querySelector(".optfourmodald-scroll-window");
    $(".optfourmodald-scroll-window").animate({
        scrollTop: optfourmodald_scroll_window.scrollTop + 100,
      },
      250
    );
  });
});
/* ================ Scroll Down END ============== */


// ===/////=== OPTION 4 LIST4 ITEM END ===/////===