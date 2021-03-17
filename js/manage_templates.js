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
let managetempalistmodal = [];
for (let i = 1; i <= 29; i++) {
  let files = []
  for (let j = 1; j <= 72; j++) {
    files.push({
      id: `option-managetempamodallist-${i}-${j}`,
      item: `Level ${i} - Item ${j}`
    });
  }
  managetempalistmodal.push({
    id: `modalmanagetemplist-item-${i}`,
    item: `Item ${i}`,
    files
  });
}

(function manageAListModal() {
  let htmlmanagetempalistmodal = "", htmlDataModal = "";
  managetempalistmodal.forEach(({ id, item, files }, index) => {
    htmlmanagetempalistmodal += `<li class="${id}">
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
      length = files.length;
    files.forEach(({ id: _id, item }, idx) => {
      let i = idx + 1;
      let elementHtml = `<li class="${_id}">
      <p>${item}</p>
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
    });

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
  document.querySelector("#manage-tempa-list-modal div.sub-ul-managetemp-modallist").innerHTML = htmlDataModal;
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
(function manTempaLeftListControl() {
  let oldTarget = "";
  managetempa_list.addEventListener("click", function (e) {
    let target = e.target;
    const elementName = ["DIV", "P"];
    if (elementName.includes(target.tagName)) {
      target = target.parentNode;
    } else if (target.tagName === "I") {
      target = target.parentNode.parentNode;
    }

    if (oldTarget != "" && oldTarget !== target) {
      $(oldTarget).removeClass("highlight_li");
      // $(oldTarget).children(".green-check-box").removeClass("display-block");
      // $(oldTarget).children(".green-check-box").addClass("display-none");
      $(oldTarget).children(".arrow-li-box").removeClass("arrow-li-box-background-color-2");
      $(oldTarget).children(".arrow-li-box").addClass("arrow-li-box-background-color-1");
      $(oldTarget).children(".arrow-li-box").children(".fa-caret-right").removeClass("arrow-li-box-i-color-2");
      $(oldTarget).children(".arrow-li-box").children(".fa-caret-right").addClass("arrow-li-box-i-color-1");
    }
    $(target).toggleClass("highlight_li");
    // $(target).children(".green-check-box").toggleClass("display-none display-block");
    $(target).children(".arrow-li-box").toggleClass("arrow-li-box-background-color-1 arrow-li-box-background-color-2");
    $(target).children(".arrow-li-box").children(".fa-caret-right").toggleClass("arrow-li-box-i-color-1 arrow-li-box-i-color-2");
    oldTarget = target;

    opt_managetempa_left_list = target.childNodes[1].innerHTML;
    managetempa_modalitem_click_handle(target.classList[0]);
  });
})();

let managetempa_oldLIClassnameModal = "";
const sub_ul_managetempamodallist = document.querySelector("#manage-tempa-list-modal div.sub-ul-managetemp-modallist");
sub_ul_managetempamodallist.addEventListener("click", function (e) {
  let target = e.target;
  if (target.tagName === "DIV") {
    if (target.className.indexOf("sublist-cancel-box") != -1) {
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
    } else target = target.parentNode;
  } else if (target.tagName !== "LI") return;

  $(target).children(".sublist-check-box").toggleClass("checkbox_hide checkbox_show");
  $(target).children(".sublist-cancel-box").toggleClass("checkbox_hide checkbox_show");

  // managetempa_oldLIClassnameModal = target.classList[0];
  manTemALeftOnRight(target);
});

$("#managetempa-mng-opt2-delete").click(function () {
  let delObj = document.querySelector(`.${deleteListClassName}`);
  delObj.remove();
});

function countTempAListModal(e) {
  let countItem = $(e).parent().parent().find("div.sub-ul-managetemp-modallist .sublist-check-box.checkbox_show").length;
  $("#managetempa-list-count").html(`${countItem} Items Selected`);
  $("#managetempa-list-count").removeClass('hideListDiv');
  if(countItem > 0){
    $("#temp-first-skip").addClass('hideListDiv');
    $("#temp-first-check").removeClass('hideListDiv');
    $("#temp-first-fileColor").addClass('fileContainerColor');
  }else{
    $("#temp-first-skip").removeClass('hideListDiv');
    $("#temp-first-check").addClass('hideListDiv');
    $("#temp-first-fileColor").removeClass('fileContainerColor');
  }
  $("#temp-single-list1").removeClass('imageClickBackground');
  $("#temp-single-list2").addClass('imageClickBackground');
}

function resetTempAListModal(e) {
  let checkItem = $(e).parent().parent().find("div.sub-ul-managetemp-modallist .sublist-check-box.checkbox_show");
  let uncheckItem = $(e).parent().parent().find("div.sub-ul-managetemp-modallist .sublist-cancel-box.checkbox_hide");
  checkItem.toggleClass("checkbox_show checkbox_hide");
  uncheckItem.toggleClass("checkbox_show checkbox_hide");
  $("#managetempa-list-count").html(`0 Items Selected`);
  let leftItem = $(e).parent().parent().find("ul.managetempa-list li div.green-check-box.display-block");
  leftItem.toggleClass("display-block display-none");
}

function manTemALeftOnRight(target) {
  let _id = $(target).parent().attr("id");
  let len = $(target).parent().parent().find(".submodal-list.checkbox_show div.sublist-check-box.checkbox_show").length;
  if (len > 0) {
    let markItem = $(`ul.managetempa-list li.modalmanagetemplist-item-${_id.split("-").splice(-1)[0]}`)
      .children("div.green-check-box");
    markItem.addClass("display-block");
    markItem.removeClass("display-none");
  } else {
    let markItem = $(`ul.managetempa-list li.modalmanagetemplist-item-${_id.split("-").splice(-1)[0]}`)
      .children("div.green-check-box");
    markItem.addClass("display-none");
    markItem.removeClass("display-block");
  }
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
let managetempblistmodal = [];
for (let i = 1; i <= 29; i++) {
  let files = []
  for (let j = 1; j <= 72; j++) {
    files.push({
      id: `option-managetempbmodallist-${i}-${j}`,
      item: `Level ${i} - Item ${j}`
    });
  }
  managetempblistmodal.push({
    id: `modalmanagetemplist-item-${i}`,
    item: `Item ${i}`,
    files
  });
}

(function manageBListModal() {
  let htmlmanagetempblistmodal = "", htmlDataModal = "";
  managetempblistmodal.forEach(({ id, item, files }, index) => {
    htmlmanagetempblistmodal += `<li class="${id}">
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
      length = files.length;
    files.forEach(({ id: _id, item }, idx) => {
      let i = idx + 1;
      let elementHtml = `<li class="${_id}">
      <p>${item}</p>
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
    });
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
  document.querySelector("#manage-tempb-list-modal div.sub-ul-managetemp-modallist").innerHTML = htmlDataModal;
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
(function manTempbLeftListControl() {
  let oldTarget = "";
  managetempb_list.addEventListener("click", function (e) {
    let target = e.target;
    const elementName = ["DIV", "P"];
    if (elementName.includes(target.tagName)) {
      target = target.parentNode;
    } else if (target.tagName === "I") {
      target = target.parentNode.parentNode;
    }

    if (oldTarget != "" && oldTarget !== target) {
      $(oldTarget).removeClass("highlight_li");
      // $(oldTarget).children(".green-check-box").removeClass("display-block");
      // $(oldTarget).children(".green-check-box").addClass("display-none");
      $(oldTarget).children(".arrow-li-box").removeClass("arrow-li-box-background-color-2");
      $(oldTarget).children(".arrow-li-box").addClass("arrow-li-box-background-color-1");
      $(oldTarget).children(".arrow-li-box").children(".fa-caret-right").removeClass("arrow-li-box-i-color-2");
      $(oldTarget).children(".arrow-li-box").children(".fa-caret-right").addClass("arrow-li-box-i-color-1");
    }
    $(target).toggleClass("highlight_li");
    // $(target).children(".green-check-box").toggleClass("display-none display-block");
    $(target).children(".arrow-li-box").toggleClass("arrow-li-box-background-color-1 arrow-li-box-background-color-2");
    $(target).children(".arrow-li-box").children(".fa-caret-right").toggleClass("arrow-li-box-i-color-1 arrow-li-box-i-color-2");
    oldTarget = target;

    opt_managetempb_left_list = target.childNodes[1].innerHTML;
    managetempb_modalitem_click_handle(target.classList[0]);
  });
})();

let managetempb_oldLIClassnameModal = "";
const sub_ul_managetempbmodallist = document.querySelector("#manage-tempb-list-modal div.sub-ul-managetemp-modallist");
sub_ul_managetempbmodallist.addEventListener("click", function (e) {
  let target = e.target;
  if (target.tagName === "DIV") {
    if (target.className.indexOf("sublist-cancel-box") != -1) {
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
    } else target = target.parentNode;
  } else if (target.tagName !== "LI") return;

  $(target).children(".sublist-check-box").toggleClass("checkbox_hide checkbox_show");
  $(target).children(".sublist-cancel-box").toggleClass("checkbox_hide checkbox_show");

  // managetempb_oldLIClassnameModal = target.classList[0];
  manTemBLeftOnRight(target);
});

$("#managetempb-mng-opt2-delete").click(function () {
  let delObj = document.querySelector(`.${deleteListClassName}`);
  delObj.remove();
});

function countTempBListModal(e) {
  let countItem = $(e).parent().parent().find("div.sub-ul-managetemp-modallist .sublist-check-box.checkbox_show").length;
  $("#managetempb-list-count").html(`${countItem} Items Selected`);
  $("#managetempb-list-count").removeClass('hideListDiv');
  if(countItem > 0){
    $("#temp-sec-skip").addClass('hideListDiv');
    $("#temp-sec-check").removeClass('hideListDiv');
    $("#temp-sec-fileColor").addClass('fileContainerColor');
  }else{
    $("#temp-sec-skip").removeClass('hideListDiv');
    $("#temp-sec-check").addClass('hideListDiv');
    $("#temp-sec-fileColor").removeClass('fileContainerColor');
  }
  $("#temp-single-list2").removeClass('imageClickBackground');
  $("#temp-single-list3").addClass('imageClickBackground');
}

function resetTempBListModal(e) {
  let checkItem = $(e).parent().parent().find("div.sub-ul-managetemp-modallist .sublist-check-box.checkbox_show");
  let uncheckItem = $(e).parent().parent().find("div.sub-ul-managetemp-modallist .sublist-cancel-box.checkbox_hide");
  checkItem.toggleClass("checkbox_show checkbox_hide");
  uncheckItem.toggleClass("checkbox_show checkbox_hide");
  $("#managetempb-list-count").html(`0 Items Selected`);
  let leftItem = $(e).parent().parent().find("ul.managetempb-list li div.green-check-box.display-block");
  leftItem.toggleClass("display-block display-none");
}

function manTemBLeftOnRight(target) {
  let _id = $(target).parent().attr("id");
  let len = $(target).parent().parent().find(".submodal-list.checkbox_show div.sublist-check-box.checkbox_show").length;
  if (len > 0) {
    let markItem = $(`ul.managetempb-list li.modalmanagetemplist-item-${_id.split("-").splice(-1)[0]}`)
      .children("div.green-check-box");
    markItem.addClass("display-block");
    markItem.removeClass("display-none");
  } else {
    let markItem = $(`ul.managetempb-list li.modalmanagetemplist-item-${_id.split("-").splice(-1)[0]}`)
      .children("div.green-check-box");
    markItem.addClass("display-none");
    markItem.removeClass("display-block");
  }
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
let managetempclistmodal = [];
for (let i = 1; i <= 29; i++) {
  let files = []
  for (let j = 1; j <= 72; j++) {
    files.push({
      id: `option-managetempcmodallist-${i}-${j}`,
      item: `Level ${i} - Item ${j}`
    });
  }
  managetempclistmodal.push({
    id: `modalmanagetemplist-item-${i}`,
    item: `Item ${i}`,
    files
  });
}

(function manageCListModal() {
  let htmlmanagetempclistmodal = "", htmlDataModal = "";
  managetempclistmodal.forEach(({ id, item, files }, index) => {
    htmlmanagetempclistmodal += `<li class="${id}">
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
      length = files.length;
    files.forEach(({ id: _id, item }, idx) => {
      let i = idx + 1;
      let elementHtml = `<li class="${_id}">
      <p>${item}</p>
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
    });
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
  document.querySelector("#manage-tempc-list-modal div.sub-ul-managetemp-modallist").innerHTML = htmlDataModal;
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
(function manTempcLeftListControl() {
  let oldTarget = "";
  managetempc_list.addEventListener("click", function (e) {
    let target = e.target;
    const elementName = ["DIV", "P"];
    if (elementName.includes(target.tagName)) {
      target = target.parentNode;
    } else if (target.tagName === "I") {
      target = target.parentNode.parentNode;
    }

    if (oldTarget != "" && oldTarget !== target) {
      $(oldTarget).removeClass("highlight_li");
      // $(oldTarget).children(".green-check-box").removeClass("display-block");
      // $(oldTarget).children(".green-check-box").addClass("display-none");
      $(oldTarget).children(".arrow-li-box").removeClass("arrow-li-box-background-color-2");
      $(oldTarget).children(".arrow-li-box").addClass("arrow-li-box-background-color-1");
      $(oldTarget).children(".arrow-li-box").children(".fa-caret-right").removeClass("arrow-li-box-i-color-2");
      $(oldTarget).children(".arrow-li-box").children(".fa-caret-right").addClass("arrow-li-box-i-color-1");
    }
    $(target).toggleClass("highlight_li");
    // $(target).children(".green-check-box").toggleClass("display-none display-block");
    $(target).children(".arrow-li-box").toggleClass("arrow-li-box-background-color-1 arrow-li-box-background-color-2");
    $(target).children(".arrow-li-box").children(".fa-caret-right").toggleClass("arrow-li-box-i-color-1 arrow-li-box-i-color-2");
    oldTarget = target;

    opt_managetempc_left_list = target.childNodes[1].innerHTML;
    managetempc_modalitem_click_handle(target.classList[0]);
  });
})();

let managetempc_oldLIClassnameModal = "";
const sub_ul_managetempcmodallist = document.querySelector("#manage-tempc-list-modal div.sub-ul-managetemp-modallist");
sub_ul_managetempcmodallist.addEventListener("click", function (e) {
  let target = e.target;
  if (target.tagName === "DIV") {
    if (target.className.indexOf("sublist-cancel-box") != -1) {
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
    } else target = target.parentNode;
  } else if (target.tagName !== "LI") return;


  $(target).children(".sublist-check-box").toggleClass("checkbox_hide checkbox_show");
  $(target).children(".sublist-cancel-box").toggleClass("checkbox_hide checkbox_show");

  // managetempc_oldLIClassnameModal = target.classList[0];
  manTemCLeftOnRight(target);
});

$("#managetempc-mng-opt2-delete").click(function () {
  let delObj = document.querySelector(`.${deleteListClassName}`);
  delObj.remove();
});

function countTempCListModal(e) {
  let countItem = $(e).parent().parent().find("div.sub-ul-managetemp-modallist .sublist-check-box.checkbox_show").length;
  $("#managetempc-list-count").html(`${countItem} Items Selected`);
  $("#managetempc-list-count").removeClass('hideListDiv');
  if(countItem > 0){
    $("#temp-third-skip").addClass('hideListDiv');
    $("#temp-third-check").removeClass('hideListDiv');
    $("#temp-third-fileColor").addClass('fileContainerColor');
  }else{
    $("#temp-third-skip").removeClass('hideListDiv');
    $("#temp-third-check").addClass('hideListDiv');
    $("#temp-third-fileColor").removeClass('fileContainerColor');
  }
  $("#temp-single-list3").removeClass('imageClickBackground');
  $("#temp-single-list4").addClass('imageClickBackground');
}

function resetTempCListModal(e) {
  let checkItem = $(e).parent().parent().find("div.sub-ul-managetemp-modallist .sublist-check-box.checkbox_show");
  let uncheckItem = $(e).parent().parent().find("div.sub-ul-managetemp-modallist .sublist-cancel-box.checkbox_hide");
  checkItem.toggleClass("checkbox_show checkbox_hide");
  uncheckItem.toggleClass("checkbox_show checkbox_hide");
  $("#managetempc-list-count").html(`0 Items Selected`);
  let leftItem = $(e).parent().parent().find("ul.managetempc-list li div.green-check-box.display-block");
  leftItem.toggleClass("display-block display-none");
}

function manTemCLeftOnRight(target) {
  let _id = $(target).parent().attr("id");
  let len = $(target).parent().parent().find(".submodal-list.checkbox_show div.sublist-check-box.checkbox_show").length;
  if (len > 0) {
    let markItem = $(`ul.managetempc-list li.modalmanagetemplist-item-${_id.split("-").splice(-1)[0]}`)
      .children("div.green-check-box");
    markItem.addClass("display-block");
    markItem.removeClass("display-none");
  } else {
    let markItem = $(`ul.managetempc-list li.modalmanagetemplist-item-${_id.split("-").splice(-1)[0]}`)
      .children("div.green-check-box");
    markItem.addClass("display-none");
    markItem.removeClass("display-block");
  }
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
let managetempdlistmodal = [];
for (let i = 1; i <= 29; i++) {
  let files = []
  for (let j = 1; j <= 72; j++) {
    files.push({
      id: `option-managetempdmodallist-${i}-${j}`,
      item: `Level ${i} - Item ${j}`
    });
  }
  managetempdlistmodal.push({
    id: `modalmanagetemplist-item-${i}`,
    item: `Item ${i}`,
    files
  });
}
function findFileListMS1(_id, name) {
  if (name == "LIST 1") {
    for (let val of managetempalistmodal) {
      for (let file of val.files) {
        if (file.id == _id) return { id: val.id, item: val.item };
        else if (file.item == _id) return { id: file.id, item: file.item };
      }
    }
  } else if (name == "LIST 2") {
    for (let val of managetempblistmodal) {
      for (let file of val.files) {
        if (file.id == _id) return { id: val.id, item: val.item };
        else if (file.item == _id) return { id: file.id, item: file.item };
      }
    }
  } else if (name == "LIST 3") {
    for (let val of managetempclistmodal) {
      for (let file of val.files) {
        if (file.id == _id) return { id: val.id, item: val.item };
        else if (file.item == _id) return { id: file.id, item: file.item };
      }
    }
  } else if (name == "LIST 4") {
    for (let val of managetempdlistmodal) {
      for (let file of val.files) {
        if (file.id == _id) return { id: val.id, item: val.item };
        else if (file.item == _id) return { id: file.id, item: file.item };
      }
    }
  }
  return false;
}

(function manageDListModal() {
  let htmlmanagetempdlistmodal = "", htmlDataModal = "";
  managetempdlistmodal.forEach(({ id, item, files }, index) => {
    htmlmanagetempdlistmodal += `<li class="${id}">
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
      length = files.length;
    files.forEach(({ id: _id, item }, idx) => {
      let i = idx + 1;
      let elementHtml = `<li class="${_id}">
      <p>${item}</p>
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
    });
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
  document.querySelector("#manage-tempd-list-modal div.sub-ul-managetemp-modallist").innerHTML = htmlDataModal;
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
(function manTempdLeftListControl() {
  let oldTarget = "";
  managetempd_list.addEventListener("click", function (e) {
    let target = e.target;
    const elementName = ["DIV", "P"];
    if (elementName.includes(target.tagName)) {
      target = target.parentNode;
    } else if (target.tagName === "I") {
      target = target.parentNode.parentNode;
    }

    if (oldTarget != "" && oldTarget !== target) {
      $(oldTarget).removeClass("highlight_li");
      // $(oldTarget).children(".green-check-box").removeClass("display-block");
      // $(oldTarget).children(".green-check-box").addClass("display-none");
      $(oldTarget).children(".arrow-li-box").removeClass("arrow-li-box-background-color-2");
      $(oldTarget).children(".arrow-li-box").addClass("arrow-li-box-background-color-1");
      $(oldTarget).children(".arrow-li-box").children(".fa-caret-right").removeClass("arrow-li-box-i-color-2");
      $(oldTarget).children(".arrow-li-box").children(".fa-caret-right").addClass("arrow-li-box-i-color-1");
    }
    $(target).toggleClass("highlight_li");
    // $(target).children(".green-check-box").toggleClass("display-none display-block");
    $(target).children(".arrow-li-box").toggleClass("arrow-li-box-background-color-1 arrow-li-box-background-color-2");
    $(target).children(".arrow-li-box").children(".fa-caret-right").toggleClass("arrow-li-box-i-color-1 arrow-li-box-i-color-2");
    oldTarget = target;

    opt_managetempd_left_list = target.childNodes[1].innerHTML;
    managetempd_modalitem_click_handle(target.classList[0]);
  });
})();

let managetempd_oldLIClassnameModal = "";
const sub_ul_managetempdmodallist = document.querySelector("#manage-tempd-list-modal div.sub-ul-managetemp-modallist");
sub_ul_managetempdmodallist.addEventListener("click", function (e) {
  let target = e.target;
  if (target.tagName === "DIV") {
    if (target.className.indexOf("sublist-cancel-box") != -1) {
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
    } else target = target.parentNode;
  } else if (target.tagName !== "LI") return;

  $(target).children(".sublist-check-box").toggleClass("checkbox_hide checkbox_show");
  $(target).children(".sublist-cancel-box").toggleClass("checkbox_hide checkbox_show");

  // managetempd_oldLIClassnameModal = target.classList[0];
  manTemDLeftOnRight(target);
});

$("#managetempd-mng-opt2-delete").click(function () {
  let delObj = document.querySelector(`.${deleteListClassName}`);
  delObj.remove();
});

function countTempDListModal(e) {
  let countItem = $(e).parent().parent().find("div.sub-ul-managetemp-modallist .sublist-check-box.checkbox_show").length;
  $("#managetempd-list-count").html(`${countItem} Items Selected`);
  $("#managetempd-list-count").removeClass('hideListDiv');
  if(countItem > 0){
    $("#temp-forth-skip").addClass('hideListDiv');
    $("#temp-forth-check").removeClass('hideListDiv');
    $("#temp-forth-fileColor").addClass('fileContainerColor');
  }else{
    $("#temp-forth-skip").removeClass('hideListDiv');
    $("#temp-forth-check").addClass('hideListDiv');
    $("#temp-forth-fileColor").removeClass('fileContainerColor');
  }
  $("#temp-single-list4").removeClass('imageClickBackground');
}

function resetTempDListModal(e) {
  let checkItem = $(e).parent().parent().find("div.sub-ul-managetemp-modallist .sublist-check-box.checkbox_show");
  let uncheckItem = $(e).parent().parent().find("div.sub-ul-managetemp-modallist .sublist-cancel-box.checkbox_hide");
  checkItem.toggleClass("checkbox_show checkbox_hide");
  uncheckItem.toggleClass("checkbox_show checkbox_hide");
  $("#managetempd-list-count").html(`0 Items Selected`);
  let leftItem = $(e).parent().parent().find("ul.managetempd-list li div.green-check-box.display-block");
  leftItem.toggleClass("display-block display-none");
}

function manTemDLeftOnRight(target) {
  let _id = $(target).parent().attr("id");
  let len = $(target).parent().parent().find(".submodal-list.checkbox_show div.sublist-check-box.checkbox_show").length;
  if (len > 0) {
    let markItem = $(`ul.managetempd-list li.modalmanagetemplist-item-${_id.split("-").splice(-1)[0]}`)
      .children("div.green-check-box");
    markItem.addClass("display-block");
    markItem.removeClass("display-none");
  } else {
    let markItem = $(`ul.managetempd-list li.modalmanagetemplist-item-${_id.split("-").splice(-1)[0]}`)
      .children("div.green-check-box");
    markItem.addClass("display-none");
    markItem.removeClass("display-block");
  }
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

// Manage template Sample 2 Start
let manTemRightData = [
  {
    "id": "rsa-mntem-1",
    "name": "R-Options 1",
    "type": "one",
  },
  {
    "id": "rsa-mntem-2",
    "name": "R-Options 2",
    "type": "one",
  },
  {
    "id": "rsa-mntem-3",
    "name": "R-Options 3",
    "type": "two",
  },
  {
    "id": "rsa-mntem-4",
    "name": "R-Options 4",
    "type": "three",
  },
  {
    "id": "rsa-mntem-5",
    "name": "R-Options 5",
    "type": "four",
  },
  {
    "id": "rsa-mntem-6",
    "name": "R-Options 6",
    "type": "four",
  },
  {
    "id": "rsa-mntem-7",
    "name": "R-Options 7",
    "type": "four",
  },
  {
    "id": "rsa-mntem-8",
    "name": "R-Options 8",
    "type": "four",
  },
  {
    "id": "rsa-mntem-9",
    "name": "R-Options 9",
    "type": "two",
  },
  {
    "id": "rsa-mntem-10",
    "name": "R-Options 10",
    "type": "four",
  },
  {
    "id": "rsa-mntem-11",
    "name": "R-Options 11",
    "type": "five",
  }
];

let manTemLeftData = [
  {
    "id": "lsa-mntem-1",
    "name": "L-Options 1",
    "type": "one",
  },
  {
    "id": "lsa-mntem-2",
    "name": "L-Options 2",
    "type": "one",
  },
  {
    "id": "lsa-mntem-3",
    "name": "L-Options 3",
    "type": "two",
  },
  {
    "id": "lsa-mntem-4",
    "name": "L-Options 4",
    "type": "three",
  },
  {
    "id": "lsa-mntem-5",
    "name": "L-Options 5",
    "type": "four",
  },
  {
    "id": "lsa-mntem-6",
    "name": "L-Options 6",
    "type": "four",
  },
  {
    "id": "lsa-mntem-7",
    "name": "L-Options 7",
    "type": "four",
  },
  {
    "id": "lsa-mntem-8",
    "name": "L-Options 8",
    "type": "four",
  },
  {
    "id": "lsa-mntem-9",
    "name": "L-Options 9",
    "type": "two",
  },
  {
    "id": "lsa-mntem-10",
    "name": "L-Options 10",
    "type": "four",
  },
  {
    "id": "lsa-mntem-11",
    "name": "L-Options 11",
    "type": "five",
  },
];

function listRenderManTemp(id, name, addNewRow) {
  let ele = `<tr ondblclick="${addNewRow}" onclick="clickAddClassSgl(this)" class="cursor-pointer" id="${id}">
    <td colspan="2">${name}</td>
    <td><i class="fas fa-question-circle"></i></td>
    <td></td>
  </tr>`;
  return ele;
}

function leftSideTableManTemp() {
  let leftTable = "";
  manTemLeftData.forEach(({ id, name }) => {
    let addNewRowL = `manTemSam2Rend(this,'mnTemp_leftSideDrag')`;
    leftTable += listRenderManTemp(id, name, addNewRowL);
  });
  $("#mnTemp-table-left-list").html(leftTable);
}
leftSideTableManTemp();

function rightSideTableManTemp() {
  let rightTable = "";
  manTemRightData.forEach(({ id, name }) => {
    let addNewRowR = `manTemSam2Rend(this, 'mnTemp_rightSideDrag')`;
    rightTable += listRenderManTemp(id, name, addNewRowR);
  });
  $("#mnTemp-table-right-list").html(rightTable);
}
rightSideTableManTemp();

function manTemSam2Rend(e, divId) {
  let _id = $(e).attr("id");
  let title = "", dataType = "", manTemSwapSeq = "", manTemResetValue = "";
  if (divId == "mnTemp_leftSideDrag") {
    let { name, type } = manTemLeftData.filter((a) => a.id == _id)[0];
    title = name;
    dataType = type;
    manTemSwapSeq = "manTemSwapSeqL(this)";
    manTemResetValue = "manTemResetValueL(this)";
  }
  else if (divId == "mnTemp_rightSideDrag") {
    let { name, type } = manTemRightData.filter((a) => a.id == _id)[0];
    title = name;
    dataType = type;
    manTemSwapSeq = "manTemSwapSeqR(this)";
    manTemResetValue = "manTemResetValueR(this)";
  }
  let lOptOne =
    `<div class="width-12">
    <div class="custome-select">
      <select class="add-set">
        <option value="add/set">Add/Set</option>
        <option value="set">Set</option>
        <option value="add">Add</option>
      </select>
    </div>
  </div>
  <div class="width-22">
    <div class="custome-select">
      <select class="sequence" onchange="${manTemSwapSeq}">
        <option value="0">SEQUENCE</option>
      </select>
    </div>
  </div>
  <div class="width-22">
    <div class="custom-input-only">
      <input type="text" onfocus="onFocus(this)" onfocusout="manTemcheckEmpty(this)" oninput="manTemcheckEmpty(this)"/>
    </div>
  </div>
  <div class="width-22">
    <div class="custom-input-only">
      <input type="text" onfocus="onFocus(this)" onfocusout="manTemcheckEmpty(this)" oninput="manTemcheckEmpty(this)"/>
    </div>
  </div>`;

  let lOptTwo =
    `<div class="width-12"></div>
  <div class="width-22">
    <div class="custome-select">
      <select class="sequence" onchange="${manTemSwapSeq}">
        <option value="0">SEQUENCE</option>
      </select>
    </div>
  </div>
  <div class="width-22">
    <div class="custome-select">
      <select class="user-inp" onfocus="onFocus(this)">
        <option value="abc">abc</option>
        <option value="cde">cde</option>
        <option value="fgh">fgh</option>
      </select>
    </div>
  </div>
  <div class="width-22">
    <div class="custome-select">
      <select class="user-inp" onfocus="onFocus(this)">
        <option value="ijk">ijk</option>
        <option value="lmn">lmn</option>
        <option value="opq">opq</option>
      </select>
    </div>
  </div>`;

  let lOptThree =
    `<div class="width-12">
    <div class="custome-select">
      <select class="add-set">
        <option value="add/set">Add/Set</option>
        <option value="set">Set</option>
        <option value="add">Add</option>
      </select>
    </div>
  </div>
  <div class="width-22">
    <div class="custome-select">
      <select class="sequence" onchange="${manTemSwapSeq}">
        <option value="0">SEQUENCE</option>
      </select>
    </div>
  </div>
  <div class="width-22">
    <div class="custome-select">
      <select class="user-inp" onfocus="onFocus(this)">
        <option value="abc">abc</option>
        <option value="cde">cde</option>
        <option value="fgh">fgh</option>
      </select>
    </div>
  </div>
  <div class="width-22">
    <div class="custome-select">
      <select class="user-inp" onfocus="onFocus(this)">
        <option value="ijk">ijk</option>
        <option value="lmn">lmn</option>
        <option value="opq">opq</option>
      </select>
    </div>
  </div>`;

  let lOptFour =
    `<div class="width-12"></div>
  <div class="width-22">
    <div class="custome-select">
      <select class="sequence" onchange="${manTemSwapSeq}">
        <option value="0">SEQUENCE</option>
      </select>
    </div>
  </div>
  <div class="width-22">
    <div class="custom-input-only">
      <input type="text" onfocus="onFocus(this)"  onfocusout="manTemcheckEmpty(this)" oninput="manTemcheckEmpty(this)"/>
    </div>
  </div>
  <div class="width-22">
    <div class="custom-input-only">
      <input type="text" onfocus="onFocus(this)"  onfocusout="manTemcheckEmpty(this)" oninput="manTemcheckEmpty(this)"/>
    </div>
  </div>`;

  let lOptFive =
    `<div class="width-12"></div>
  <div class="width-22">
    <div class="custome-select">
      <select class="sequence" onchange="${manTemSwapSeq}">
        <option value="0">SEQUENCE</option>
      </select>
    </div>
  </div>
  <div class="width-22">
    <div class="custom-input-only">
      <input type="number" onfocus="onFocus(this)" onfocusout="manTemcheckNum(this)" oninput="manTemcheckNum(this)"/>
    </div>
  </div>
  <div class="width-22">
    <div class="custom-input-only">
      <input type="number" onfocus="onFocus(this)" onfocusout="manTemcheckNum(this)" oninput="manTemcheckNum(this)"/>
    </div>
  </div>`;

  let manType = "";
  if (dataType == "one") manType = lOptOne;
  else if (dataType == "two") manType = lOptTwo;
  else if (dataType == "three") manType = lOptThree;
  else if (dataType == "four") manType = lOptFour;
  else if (dataType == "five") manType = lOptFive;

  let renderLeftSite =
    `<div class="d-flex mb-2" id="${_id}">
    <div class="width-5 align-items-baseline">
      <div class="threebar">
        <span>|||</span>
      </div>
    </div>
    <div class="width-26">
      <div class="page__toggle">
        <label class="toggle">
          <input class="toggle__input" type="checkbox" onchange="${manTemResetValue}"/>
          <span class="toggle__label">
            <span class="toggle__text">${title}</span>
          </span>
        </label>
      </div>
    </div>
    ${manType}
  </div>`;

  $(`#${divId}`).append(renderLeftSite);
  $(e).remove();
}

var manTemSeqListL = [];
var manTemSeqListR = [];

function manTemResetValueL(e) {
  let pid = $(e).parent().parent().parent().parent().attr("id");
  if ($(`#${pid} .sequence`).length == 0) return true;
  if (e.checked == false) {
    $(`#${pid} input, #${pid} select`).val("");
    manTemSeqListL = manTemSeqListL.filter(function (id) {
      $(`#${id} .sequence`).children(`option:last-child`).remove();
      return pid != id;
    });
    manTemSeqListL.forEach(function (val, index) {
      $(`#${val} .sequence`).val(index + 1);
    });
    $(`#${pid} .sequence`).html(`<option value='0'>SEQUENCE</option>`);
    $(`#${pid} .add-set`).val("Add/Set");
    // remove error message
    let errP = $(`#${pid} .width-22 .error-message`);
    let errC = $(`#${pid} .width-22 .custom-input-danger`);
    let errS = $(`#${pid} .width-22 .custom-input-success`);
    if (errP.length) errP.remove();
    if (errC.length) {
      errC.addClass("custom-input-only");
      errC.removeClass("custom-input-danger");
    }
    if (errS.length) {
      errS.addClass("custom-input-only");
      errS.removeClass("custom-input-success");
    }
  } else {
    let inW = inWords(manTemSeqListL.length + 1).toUpperCase();
    manTemSeqListL.forEach(function (val, index) {
      $(`#${val} .sequence`).append(
        `<option value="${(manTemSeqListL.length + 1)}">${inW}</option>`
      );
      $(`#${val} .sequence`).val(index + 1);
    });
    manTemSeqListL.push(pid);
    if (manTemSeqListL.length == 1) {
      $(`#${pid} .sequence`).html(`<option value='1'>FIRST</option>`);
    }
    else {
      $(`#${pid} .sequence`).html($(`#${manTemSeqListL[0]} .sequence`).html());
    }
    $(`#${pid} .sequence`).val(manTemSeqListL.length);
  }
}
function manTemResetValueR(e) {
  let pid = $(e).parent().parent().parent().parent().attr("id");
  if ($(`#${pid} .sequence`).length == 0) return true;
  if (e.checked == false) {
    $(`#${pid} input, #${pid} select`).val("");
    manTemSeqListR = manTemSeqListR.filter(function (id) {
      $(`#${id} .sequence`).children(`option:last-child`).remove();
      return pid != id;
    });
    manTemSeqListR.forEach(function (val, index) {
      $(`#${val} .sequence`).val(index + 1);
    });
    $(`#${pid} .sequence`).html(`<option value='0'>SEQUENCE</option>`);
    $(`#${pid} .add-set`).val("Add/Set");
    // remove error message
    let errP = $(`#${pid} .width-22 .error-message`);
    let errC = $(`#${pid} .width-22 .custom-input-danger`);
    let errS = $(`#${pid} .width-22 .custom-input-success`);
    if (errP.length) errP.remove();
    if (errC.length) {
      errC.addClass("custom-input-only");
      errC.removeClass("custom-input-danger");
    }
    if (errS.length) {
      errS.addClass("custom-input-only");
      errS.removeClass("custom-input-success");
    }
  } else {
    let inW = inWords(manTemSeqListR.length + 1).toUpperCase();
    manTemSeqListR.forEach(function (val, index) {
      $(`#${val} .sequence`).append(
        `<option value="${(manTemSeqListR.length + 1)}">${inW}</option>`
      );
      $(`#${val} .sequence`).val(index + 1);
    });
    manTemSeqListR.push(pid);
    if (manTemSeqListR.length == 1) {
      $(`#${pid} .sequence`).html(`<option value='1'>FIRST</option>`);
    }
    else {
      $(`#${pid} .sequence`).html($(`#${manTemSeqListR[0]} .sequence`).html());
    }
    $(`#${pid} .sequence`).val(manTemSeqListR.length);
  }
}

function manTemSwapSeqL(e) {
  let pid = $(e).parent().parent().parent().attr("id");
  let val = $(e).val();
  if (parseInt(val) > manTemSeqListL.length) val = (manTemSeqListL.length + 1).toString();
  if (val == "0")
    manTemSeqListL = manTemSeqListL.filter(function (id) {
      return pid != id;
    });
  else {
    let index = manTemSeqListL.indexOf(pid);
    if (index == -1) {
      manTemSeqListL[val - 1] = pid;
    } else if (manTemSeqListL.length >= val) {
      manTemSeqListL[index] = manTemSeqListL[val - 1];
      manTemSeqListL[val - 1] = pid;
    }
    $(`#${manTemSeqListL[index]} .sequence`).val(index + 1);
    $(`#${pid} .sequence`).val(val);
  }
}
function manTemSwapSeqR(e) {
  let pid = $(e).parent().parent().parent().attr("id");
  let val = $(e).val();
  if (parseInt(val) > manTemSeqListR.length) val = (manTemSeqListR.length + 1).toString();
  if (val == "0")
    manTemSeqListR = manTemSeqListR.filter(function (id) {
      return pid != id;
    });
  else {
    let index = manTemSeqListR.indexOf(pid);
    if (index == -1) {
      manTemSeqListR[val - 1] = pid;
    } else if (manTemSeqListR.length >= val) {
      manTemSeqListR[index] = manTemSeqListR[val - 1];
      manTemSeqListR[val - 1] = pid;
    }
    $(`#${manTemSeqListR[index]} .sequence`).val(index + 1);
    $(`#${pid} .sequence`).val(val);
  }
}

function manTemcheckEmpty(e) {
  if (e.value !== "") {
    $(e).parent().addClass("custom-input-success");
    $(e).parent().removeClass("custom-input-danger");
    $(e).parent().parent().children(".error-message").remove();
  } else {
    $(e).parent().addClass("custom-input-danger");
    $(e).parent().removeClass("custom-input-success");
    let errorMessage = `<div class="error-message">
      <p>A value must be entered</p>
    </div>`;
    let errPos = $(e).parent().parent();
    if (!errPos.children("div.error-message").length) {
      errPos.append(errorMessage);
    }
  }
}

function manTemcheckNum(e) {
  if (e.value !== "") {
    $(e).parent().parent().children(".error-message").remove();
  } else {
    let errorMessage = `<div class="error-message">
      <p>A value must be entered</p>
    </div>`;
    let errPos = $(e).parent().parent();
    if (!errPos.children("div.error-message").length) {
      errPos.append(errorMessage);
    }
  }
}

// Form by text editor start
function findInputIdMS2(title) {
  let searchArr = manTemLeftData.concat(manTemRightData);
  let res = searchArr.filter((a) => a.name == title).map((b) => b.id);
  if (res.length) return res[0];
  else return false;
}

function formToWindowMS2(e) {
  let tBody = $(e).parent().parent().parent()
    .children(".text-editor-popup-body")
    .find("#ms2_text_editor");
  let renHtml = "";
  let manTemSeqList = manTemSeqListL.concat(manTemSeqListR);
  manTemSeqList.forEach((pid) => {
    let title = $(`#${pid} span.toggle__text`).html();
    let addSet = $(`#${pid} .add-set`).find(":selected").text();
    let seqTitle = $(`#${pid} .sequence`).find(":selected").text();
    let inpObj = $(`#${pid} .custom-input-only input`), inpDiv = "";
    let inpSel = $(`#${pid} .user-inp`);
    for (let i = 0; i < inpObj.length; i++) {
      let uni_id = inpObj.length > 1 ? "_" + (i + 1) : "";
      let inpText = inpObj[i].value;
      inpDiv += `<div class="form-text-design data-div">
        ${title}${uni_id}: ${inpText}
      </div>`;
    }
    for (let i = 0; i < inpSel.length; i++) {
      let uni_id = inpSel.length > 1 ? "_" + (i + 1) : "";
      let inpText = $(inpSel[i]).find(":selected").text();
      inpDiv += `<div class="form-text-design data-div">
        ${title}${uni_id}: ${inpText}
      </div>`;
    }
    if (addSet != "") {
      renHtml += `<div class="form-text-design data-div">
        ${title}: Set: ${addSet}
      </div>`;
    }
    renHtml += `<div class="form-text-design data-div">
      ${title}: Sequence: ${seqTitle}
    </div>
    ${inpDiv}`;
  });
  tBody.html(renHtml);
}

function windowToFormMS2(e) {
  let tRow = $(e).parent().parent().parent()
    .children(".text-editor-popup-body")
    .find("#ms2_text_editor div.form-text-design.data-div");
  let len = tRow.length;
  for (let i = 0; i < len; i++) {
    let divData = $(tRow[i])[0].innerText.split(":");
    let [title, no] = divData[0].trim().split("_");
    let pid = findInputIdMS2(title);
    if (pid && divData.length == 3) {
      let checkbox = $(`#${pid} input[type='checkbox'].toggle__input`)[0];
      if (checkbox && checkbox.checked == false) {
        checkbox.click();
      } else {
        $(`tr#${pid}`).dblclick();
        let afterCheck = $(`#${pid} input[type='checkbox'].toggle__input`)[0];
        if (afterCheck && afterCheck.checked == false) afterCheck.click();
      }

      if (divData[1].trim().toUpperCase() == "SET") {
        $(`#${pid} .add-set`).val(divData[2].trim().toLowerCase());
      } else if (divData[1].trim().toUpperCase() == "SEQUENCE") {
        let seqVal = 0;
        let len = Math.max(manTemLeftData.length, manTemRightData.length);
        for (let k = 1; k <= len; k++) {
          if (divData[2].trim().toUpperCase() == inWords(k).toUpperCase()) {
            seqVal = k;
          }
        }
        $(`#${pid} .sequence`).val(seqVal);
      }
    } else if (pid && divData.length == 2) {
      let inp = $(`#${pid} .custom-input-only input`);
      let inpSel = $(`#${pid} .user-inp`);
      if (inp.length > 0) {
        inp[no - 1].value = divData[1].trim();
      }

      if (inpSel.length > 0) {
        inpSel[no - 1].value = divData[1].trim();
      }
    }
  }
}

function checkingMS2(e) {
  $("#adder").remove(); // adder contains our auto correct select box
  // if key is enter key
  let nd = getCaretPosition();
  let nd2 = nd.nodeType == 3 ? $(nd).parent()[0] : nd;
  if (e.keyCode == 13) {
    // same algorithm as we see in updateActualForm() function
    let nd = getCaretPosition();
    $("#temp").attr("id", "");
    if (nd.nodeType != 3 && nd.getAttribute("id") == "ms2_text_editor") return false;
    if (
      nd.textContent.substr(0, nd.textContent.indexOf(": ")) != -1 &&
      nd.textContent != ""
    ) {
      let nd2 = nd.nodeType == 3 ? $(nd).parent()[0] : nd;
      let extra = getCaretPosition2(nd2);
      let starting = nd.textContent.substr(0, extra);
      let inpData = starting.split(":");
      if (
        starting != "" &&
        (!findInputIdMS2(inpData[0].trim().split("_")[0].trim()) ||
          (inpData.length == 3 && (inpData[2].trim() == "\r" || inpData[2].trim() == "")) ||
          (
            inpData.length == 3 &&
            inpData[1].trim() != "Set" &&
            inpData[1].trim() != "Sequence" &&
            inpData[1].trim() != "Form" &&
            inpData[1].trim() != "To"
          )
        )
      ) {
        if (extra == nd.textContent.length) {
          $(nd).replaceWith(
            `<div class="form-text-design-invalid data-div">${nd.textContent}</div><br id="temp">`
          );
          setCaret($("#temp")[0]);
        } else {
          $(nd).replaceWith(
            (extra != 0
              ? `<div class="form-text-design-invalid data-div">
              ${nd.textContent.substr(0, extra)}
              </div>`
              : "<br>") +
            `<div id="temp">
            ${nd.textContent.substr(extra)}
            </div>`
          );
          setCaret($("#temp")[0]);
        }
        document.getElementById("temp").removeAttribute("id");
      } else {
        if (extra == nd.textContent.length) {
          $(nd).replaceWith(
            `<div class="form-text-design data-div">
            ${nd.textContent}
            </div>
            <br id="temp">`
          );
          //setEndOfContenteditable(document.getElementById("temp"));
          setCaret($("#temp")[0]);
        } else {
          $(nd).replaceWith(
            (extra != 0
              ? `<div class="form-text-design data-div">
              ${nd.textContent.substr(0, extra)}
              </div>`
              : "<br>") +
            `<div id="temp">
              ${nd.textContent.substr(extra)}
            </div>
            <br>`
          );
          setCaret($("#temp")[0]);
        }
        document.getElementById("temp").removeAttribute("id");
      }
    }
    return false;
  }
  // this will add autocorrect box
  setTimeout(autoCorrectMS2, 100);
}

function autoCorrectMS2() {
  let pos = getCaretPosition();
  if ($(pos).find("#adder").length == 1) $("#adder").remove();
  while (document.getElementById("temp")) {
    document.getElementById("temp").removeAttribute("id");
  }
  let x = pos.textContent;
  let editor = document.getElementById("text_editor_p");

  let m = "";
  let first = 1;
  if (x.indexOf(":") == -1) {
    let sugName = manTemLeftData.concat(manTemRightData);
    sugName.forEach(({ name }) => {
      if (name.toLowerCase().indexOf(x.toLowerCase()) == 0) {
        if (first) {
          m += `<option selected value="${name}">${name}</option><br>`;
        }
        else {
          m += `<option value="${name}">${name}</option><br>`;
        }
        first = 0;
      }
    });
  }
  else if ((x.split(":").length - 1) == 1) {
    setSugArray.forEach((set) => {
      let inp = x.split(":")[1].trim().toLowerCase();
      if (inp != "" && set.toLowerCase().indexOf(inp) == 0) {
        if (first) {
          m += `<option selected value="${set}">${set}</option><br>`;
        }
        else {
          m += `<option value="${set}">${set}</option><br>`;
        }
        first = 0;
      }
    });
  }
  else if ((x.split(":").length - 1) == 2) {
    setSugArray.forEach((set) => {
      let inp = x.split(":")[2].trim().toLowerCase();
      if (inp != "" && set.toLowerCase().indexOf(inp) == 0) {
        if (first) {
          m += `<option selected value="${set}">${set}</option><br>`;
        }
        else {
          m += `<option value="${set}">${set}</option><br>`;
        }
        first = 0;
      }
    });
  }

  let y =
    `<select onfocus="this.size=3" onblur="this.size=1" onkeydown="keyHandler(event, this)" onclick="event.stopPropagation();if(clicked) addField(this.value); clicked = true;">
    ${m}
    </select>`;
  // add auto correct ... only if there is atleast one match
  if (m != "") {
    if (x.indexOf(":") == -1) {
      $(pos).replaceWith(
        `<div id="temp">${x}</div>
        <div id="adder" class="set-name"></div>`
      );
    } else {
      $(pos).replaceWith(
        `<div id="temp">${x}</div>
        <div id="adder" class="set-sug"></div>`
      );
    }
    document.getElementById("adder").innerHTML = y;
    document.getElementById("adder").style.display = "block";
    $("#adder select").focus();
  } else {
    $("#adder").remove();
    // setEndOfContenteditable(document.getElementById("temp"));
    // document.getElementById("temp").removeAttribute("id");
  }
}

function pasteEventMS2(e) {
  let caretPos = getCaretPosition();
  let editorPos = document.getElementById("ms2_text_editor");
  let editor = editorPos == caretPos ? editorPos : caretPos;
  let clipboardData = e.clipboardData || window.clipboardData;
  let pD = clipboardData.getData("Text").split("\n");
  let x = "";
  for (let i = 0; i < pD.length; i++) {
    let nbe = pD[i];
    if (i == 0 && !editor.tagName) {
      replaceSelectedText(nbe);
      continue;
    }
    let inpData = nbe.split(":");
    if (nbe.substr(0, nbe.indexOf(": ")) != -1 && nbe != "") {
      if (
        !findInputIdMS2(inpData[0].trim().split("_")[0].trim()) ||
        (inpData.length == 3 && (inpData[2].trim() == "\r" || inpData[2].trim() == "")) ||
        (
          inpData.length == 3 &&
          inpData[1].trim() != "Set" &&
          inpData[1].trim() != "Sequence" &&
          inpData[1].trim() != "Form" &&
          inpData[1].trim() != "To"
        )
      ) {
        x += `<div class="form-text-design-invalid data-div">
        ${nbe}
        </div>`;
      } else {
        x += `<div class="form-text-design data-div">
        ${nbe}
        </div>`;
      }
    }
  }
  if (editor.tagName) editor.innerHTML += x;
  else {
    caretPos = caretPos.parentElement;
    caretPos.innerHTML += x;
  }
  removeExtraLines(editor);
  if (editorPos == caretPos) {
    editor.innerHTML += "<br>";
    setEndOfContenteditable(editor);
  } else if (!editor.tagName && pD.length == 1) {
    setEndOfContenteditable(getCaretPosition());
  }
  else {
    $(editorPos).find("br").remove();
    setEndOfContenteditable(caretPos);
  }
  return false;
}
// Form by text editor End
// Manage template Sample 2 End

// Manage template Sample 4 Start
let sam4DataArray = [
  {
    id: "sam-id-1",
    name: "Option 1 - Text abc",
    dataType: "inputText",
  },
  {
    id: "sam-id-2",
    name: "Option 2 - Text abd",
    dataType: "range",
  },
  {
    id: "sam-id-3",
    name: "Option 3 - Text abef",
    dataType: "date",
  },
  {
    id: "sam-id-4",
    name: "Option 4 - Text abc12",
    dataType: "select",
  },
  {
    id: "sam-id-5",
    name: "Option 5 - Text abc12",
    dataType: "inputText",
  },
  {
    id: "sam-id-6",
    name: "Option 6 - Text abd56",
    dataType: "range",
  },
  {
    id: "sam-id-7",
    name: "Option 7 - Text abef67",
    dataType: "date",
  },
  {
    id: "sam-id-8",
    name: "Option 8 - Text abc12fd",
    dataType: "select",
  },
];

(function temSam4firstTable() {
  let htmlTable = "";
  sam4DataArray.forEach(({ id, name }) => {
    htmlTable += `<tr id="${id}" ondblclick="dblclickMove(this)" onclick="clickAddClass(this)">
      <td>${name}</td>
    </tr>`;
  });

  $("#tem-sample4-first tbody").html(htmlTable)
})();

function clickAddClass(e) {
  $(e).toggleClass("mark-table-data");
}

function moveLeftToRight() {
  let tr = $("#tem-sample4-first tr.mark-table-data");
  tr.removeClass("mark-table-data");
  $("#tem-sample4-second tbody").append(tr);
  for (let i = 0; i < tr.length; i++) {
    let _id = $(tr[i]).attr("id");
    manTemInpBuild(_id);
  }
}
function moveRightToLeft() {
  let tr = $("#tem-sample4-second tr.mark-table-data");
  tr.removeClass("mark-table-data");
  $("#tem-sample4-first tbody").append(tr);
  for (let i = 0; i < tr.length; i++) {
    let _id = $(tr[i]).attr("id");
    removeElement(_id);
  }
}

function dblclickMove(e) {
  let _id = $(e).parent().parent().attr("id");
  let id = $(e).attr("id");
  if (_id == "tem-sample4-first") {
    $(e).removeClass("mark-table-data");
    $("#tem-sample4-second tbody").append(e);
    manTemInpBuild(id);
  }
  else if (_id == "tem-sample4-second") {
    $(e).removeClass("mark-table-data");
    $("#tem-sample4-first tbody").append(e);
    removeElement(id);
  }
}

function orderUp() {
  let row = $("#tem-sample4-second tbody tr.mark-table-data");
  row.each(function () {
    let rw = $(this).closest("tr.mark-table-data");
    rw.insertBefore(rw.prev());
    let _id = rw.attr("id");
    elementMove(_id, "up");
  });
}
function orderDown() {
  let row = $("#tem-sample4-second tbody tr.mark-table-data");
  row.each(function () {
    let rw = $(this).closest("tr");
    for (let i = 0; i < row.length; i++) {
      rw.insertAfter(rw.next());
      let _id = rw.attr("id");
      elementMove(_id, "down");
    }
  });
}

function manTemInpBuild(_id) {
  let { name, dataType } = sam4DataArray.filter(a => a.id == _id)[0];
  let htmlData = "";
  if (name && dataType) {
    let nameArr = name.split("-");
    let nameArr2 = nameArr.length > 1 ? nameArr[1] : "";
    if (dataType == "inputText") {
      htmlData = `<div class="input-group-wrap-s4 margin-bottom-for-group" id="${_id}">
        <div class="width-option-15">
          <div class="title-section-sample4">
            <p>${nameArr[0]}</p>
          </div>
        </div>
        <div class="width-title-15">
          <div class="title-section-sample4">
            <p>${nameArr2}</p>
          </div>
        </div>
        <div class="width-input-group-35">
          <div class="input-section-sample4 right-side-input">
            <input type="text" width="100" />
          </div>
        </div>
        <div class="width-input-group-35">
          <div class="input-section-sample4 left-side-input">
            <input type="text" width="100" />
          </div>
        </div>
      </div>`;
    } else if (dataType == "range") {
      htmlData = `<div class="input-group-wrap-s4 margin-bottom-for-group" id="${_id}">
        <div class="width-option-15">
          <div class="title-section-sample4">
            <p>${nameArr[0]}</p>
          </div>
        </div>
        <div class="width-title-15">
          <div class="title-section-sample4">
            <p>${nameArr2}</p>
          </div>
        </div>
        <div class="width-custom-range-70 d-flex">
          <span class="min">0</span>
          <div class="range-wrapper-sample-4">
            <input class="range-example-input-2" type="text" min="0" max="100" value="10,40" name="points" step="1" width="100" />
          </div>
          <span class="max">100</span>
        </div>
      </div>`;
    } else if (dataType == "date") {
      htmlData = `<div class="input-group-wrap-s4 margin-bottom-for-group" id="${_id}">
        <div class="width-option-15">
          <div class="title-section-sample4">
            <p>${nameArr[0]}</p>
          </div>
        </div>
        <div class="width-title-15">
          <div class="title-section-sample4">
            <p>${nameArr2}</p>
          </div>
        </div>
        <div class="width-input-group-35">
          <div class="input-section-sample4 right-side-input" onclick="calenderPop(this)">
            <input class="date-pick-style-sample4 datepicker_mn" type="text"/>
            <i class="far fa-calendar-alt icon-sample4 datepicker_mn_Icon"></i>
          </div>
        </div>
        <div class="width-input-group-35">
          <div class="input-section-sample4 left-side-input" onclick="calenderPop(this)">
            <input class="date-pick-style-sample4 datepicker_mn" type="text"/>
            <i class="far fa-calendar-alt icon-sample4 datepicker_mn_Icon"></i>
          </div>
        </div>
      </div>`;
    } else if (dataType == "select") {
      htmlData = `<div class="input-group-wrap-s4 margin-bottom-for-group" id="${_id}">
        <div class="width-option-15">
          <div class="title-section-sample4">
            <p>${nameArr[0]}</p>
          </div>
        </div>
        <div class="width-title-15">
          <div class="title-section-sample4">
            <p>${nameArr2}</p>
          </div>
        </div>
        <div class="width-input-group-35">
          <div class="input-section-sample4 right-side-input">
            <div class="custom-select-sample4">
              <select>
                <option value="Option Text 1">Option Text 1</option>
                <option value="Option Text 2">Option Text 2</option>
                <option value="Option Text 3">Option Text 3</option>
              </select>
            </div>
          </div>
        </div>
        <div class="width-input-group-35">
          <div class="input-section-sample4 left-side-input">
            <div class="custom-select-sample4">
              <select>
                <option value="Option Text 1">Option Text 1</option>
                <option value="Option Text 2">Option Text 2</option>
                <option value="Option Text 3">Option Text 3</option>
              </select>
            </div>
          </div>
        </div>
      </div>`;
    }
    $("#man-tem-sam4-input-data").append(htmlData);
  }
  $(".range-example-input-2").asRange({
    range: true,
    limit: false
  });

  // Manage Template Sample 4 DATE PICKER START
  $(".datepicker_mn").datepicker();
  $(".datepicker_mn").datepicker("option", "dateFormat", "DD - MM d, yy");

}

function calenderPop(e) {
  $(e).children("input").focus();
}

function removeElement(_id) {
  $(`#man-tem-sam4-input-data #${_id}`).remove();
}

function elementMove(_id, direc) {
  let div = $(`#man-tem-sam4-input-data #${_id}`);
  if (direc == "up") {
    div.insertBefore(div.prev());
  } else if (direc == "down") {
    div.insertAfter(div.next());
  }
}

// Form by Text Editor Start
function findInputIdMS4(title) {
  let res = sam4DataArray.filter(a => a.name == title);
  if (res.length) return res[0];
  else return false;
}

function formToWindowMS4(e) {
  let tBody = $(e).parent().parent().parent()
    .children(".text-editor-popup-body")
    .find("#ms4_text_editor");
  let renHtml = "";

  let idFromTable = $(`#tem-sample4-second tbody tr`);
  let len = idFromTable.length;
  for (let i = 0; i < len; i++) {
    let { id, name, dataType } = sam4DataArray.filter(a => a.id == idFromTable[i].id)[0];
    if (dataType == "inputText" || dataType == "range" || dataType == "date") {
      let inpD = $(`#man-tem-sam4-input-data div#${id} input[type=text]`);
      let len = inpD.length;
      for (let j = 0; j < len; j++) {
        let uni_id = len > 1 ? "_" + (j + 1) : "";
        renHtml += `<div class="form-text-design data-div">
          ${name}${uni_id} : ${inpD[j].value}
        </div>`;
      }
    } else if (dataType == "select") {
      let inpD = $(`#man-tem-sam4-input-data div#${id} select`);
      let len = inpD.length;
      for (let j = 0; j < len; j++) {
        let uni_id = len > 1 ? "_" + (j + 1) : "";
        renHtml += `<div class="form-text-design data-div">
          ${name}${uni_id} : ${$(inpD[j]).find(":selected").text()}
        </div>`;
      }
    }
  }
  tBody.html(renHtml);
}

function windowToFormMS4(e) {
  let tRow = $(e).parent().parent().parent()
    .children(".text-editor-popup-body")
    .find("#ms4_text_editor div.form-text-design.data-div");
  let len = tRow.length;
  for (let i = 0; i < len; i++) {
    let divData = $(tRow[i])[0].innerText.split(":");
    let [title, no] = divData[0].trim().split("_");
    no = no != undefined ? no : 1;
    let { id, dataType } = findInputIdMS4(title);
    if (id && divData.length == 2) {
      let comDiv = $(`#man-tem-sam4-input-data div#${id}`);
      if (!(comDiv && comDiv.length)) {
        $(`tr#${id}`).dblclick();
      }
      if (dataType == "range") {
        let rangeDiv = $(`#man-tem-sam4-input-data div#${id} div.width-custom-range-70.d-flex`);
        let rangeDes =
          `<span class="min">0</span>
        <div class="range-wrapper-sample-4">
          <input class="range-example-input-2" type="text" min="0" max="100" value="${divData[1].trim()}" name="points" step="1" width="100" />
        </div>
        <span class="max">100</span>`;
        rangeDiv.html(rangeDes);
        $(".range-example-input-2").asRange({
          range: true,
          limit: false
        });
      } else if (dataType == "select") {
        let inpD = $(`#man-tem-sam4-input-data div#${id} select`);
        inpD[no - 1].value = divData[1].trim();
      } else if (dataType == "inputText" || dataType == "date") {
        let inpD = $(`#man-tem-sam4-input-data div#${id} input[type=text]`);
        inpD[no - 1].value = divData[1].trim();
      }
    }
  }
}

function checkingMS4(e) {
  $("#adder").remove();
  // let nd = getCaretPosition();
  // let nd2 = nd.nodeType == 3 ? $(nd).parent()[0] : nd;
  if (e.keyCode == 13) {
    let nd = getCaretPosition();
    $("#temp").attr("id", "");
    if (nd.nodeType != 3 && nd.getAttribute("id") == "ms4_text_editor") return false;
    if (
      nd.textContent.substr(0, nd.textContent.indexOf(": ")) != -1 &&
      nd.textContent != ""
    ) {
      let nd2 = nd.nodeType == 3 ? $(nd).parent()[0] : nd;
      let extra = getCaretPosition2(nd2);
      let starting = nd.textContent.substr(0, extra);
      let inpData = starting.split(":");
      if (
        starting != "" &&
        (!findInputIdMS4(inpData[0].trim().split("_")[0].trim()) ||
          (inpData.length == 3 && (inpData[2].trim() == "\r" || inpData[2].trim() == "")) ||
          (inpData.length == 2 && (inpData[1].trim() == "\r" || inpData[1].trim() == ""))
        )
      ) {
        if (extra == nd.textContent.length) {
          $(nd).replaceWith(
            `<div class="form-text-design-invalid data-div">${nd.textContent}</div><br id="temp">`
          );
          setCaret($("#temp")[0]);
        } else {
          $(nd).replaceWith(
            (extra != 0
              ? `<div class="form-text-design-invalid data-div">
              ${nd.textContent.substr(0, extra)}
              </div>`
              : "<br>") +
            `<div id="temp">
            ${nd.textContent.substr(extra)}
            </div>`
          );
          setCaret($("#temp")[0]);
        }
        document.getElementById("temp").removeAttribute("id");
      } else {
        if (extra == nd.textContent.length) {
          $(nd).replaceWith(
            `<div class="form-text-design data-div">
            ${nd.textContent}
            </div>
            <br id="temp">`
          );
          //setEndOfContenteditable(document.getElementById("temp"));
          setCaret($("#temp")[0]);
        } else {
          $(nd).replaceWith(
            (extra != 0
              ? `<div class="form-text-design data-div">
              ${nd.textContent.substr(0, extra)}
              </div>`
              : "<br>") +
            `<div id="temp">
              ${nd.textContent.substr(extra)}
            </div>
            <br>`
          );
          setCaret($("#temp")[0]);
        }
        document.getElementById("temp").removeAttribute("id");
      }
    }
    return false;
  }
  // this will add autocorrect box
  setTimeout(autoCorrectMS4, 100);
}

function autoCorrectMS4() {
  let pos = getCaretPosition();
  if ($(pos).find("#adder").length == 1) $("#adder").remove();
  while (document.getElementById("temp")) {
    document.getElementById("temp").removeAttribute("id");
  }
  let x = pos.textContent;
  let editor = document.getElementById("text_editor_p");

  let m = "";
  let first = 1;
  if (x.indexOf(":") == -1) {
    $("#adder").addClass("set-name");
    sam4DataArray.forEach(({ name }) => {
      if (name.toLowerCase().indexOf(x.toLowerCase()) == 0) {
        if (first) {
          m += `<option selected value="${name}">${name}</option><br>`;
        }
        else {
          m += `<option value="${name}">${name}</option><br>`;
        }
        first = 0;
      }
    });
  }

  let y =
    `<select onfocus="this.size=3" onblur="this.size=1" onkeydown="keyHandler(event, this)" onclick="event.stopPropagation();if(clicked) addField(this.value); clicked = true;">
    ${m}
    </select>`;
  // add auto correct ... only if there is atleast one match
  if (m != "") {
    if (x.indexOf(":") == -1) {
      $(pos).replaceWith(
        `<div id="temp">${x}</div>
        <div id="adder" class="set-name"></div>`
      );
    } else {
      $(pos).replaceWith(
        `<div id="temp">${x}</div>
        <div id="adder" class="set-sug"></div>`
      );
    }
    document.getElementById("adder").innerHTML = y;
    document.getElementById("adder").style.display = "block";
    $("#adder select").focus();
  } else {
    $("#adder").remove();
    // setEndOfContenteditable(document.getElementById("temp"));
    // document.getElementById("temp").removeAttribute("id");
  }
}

function pasteEventMS4(e) {
  let caretPos = getCaretPosition();
  let editorPos = document.getElementById("ms4_text_editor");
  let editor = editorPos == caretPos ? editorPos : caretPos;
  let clipboardData = e.clipboardData || window.clipboardData;
  let pD = clipboardData.getData("Text").split("\n");
  let x = "";
  for (let i = 0; i < pD.length; i++) {
    let nbe = pD[i];
    if (i == 0 && !editor.tagName) {
      replaceSelectedText(nbe);
      continue;
    }
    let inpData = nbe.split(":");
    if (nbe.substr(0, nbe.indexOf(": ")) != -1 && nbe != "") {
      if (
        !findInputIdMS4(inpData[0].trim().split("_")[0].trim()) ||
        (inpData.length == 3 && (inpData[2].trim() == "\r" || inpData[2].trim() == "")) ||
        (inpData.length == 2 && (inpData[1].trim() == "\r" || inpData[1].trim() == ""))
      ) {
        x += `<div class="form-text-design-invalid data-div">
        ${nbe}
        </div>`;
      } else {
        x += `<div class="form-text-design data-div">
        ${nbe}
        </div>`;
      }
    }
  }
  if (editor.tagName) editor.innerHTML += x;
  else {
    caretPos = caretPos.parentElement;
    caretPos.innerHTML += x;
  }
  removeExtraLines(editor);
  if (editorPos == caretPos) {
    editor.innerHTML += "<br>";
    setEndOfContenteditable(editor);
  } else if (!editor.tagName && pD.length == 1) {
    setEndOfContenteditable(getCaretPosition());
  } else {
    $(editorPos).find("br").remove();
    setEndOfContenteditable(caretPos);
  }
  return false;
}
// Form by Text Editor End
// Manage template Sample 4 End

// Manage template Sample 3 Start
// Form by text editor Start
let sectionMS3 = [
  {
    id: "fieldset_id21",
    name: "sectionA",
    type: "input",
  },
  {
    id: "fieldset_id22",
    name: "sectionB",
    type: "input",
  },
  {
    id: "fieldset_id23",
    name: "sectionC",
    type: "option",
  },
  {
    id: "fieldset_id24",
    name: "sectionD",
    type: "input",
  },
  {
    id: "fieldset_id25",
    name: "sectionE",
    type: "input",
  },
  {
    id: "fieldset_id26",
    name: "sectionF",
    type: "option",
  },
  {
    id: "fieldset_id27",
    name: "sectionG",
    type: "option",
  },
  {
    id: "fieldset_id28",
    name: "sectionH",
    type: "input",
  },
  {
    id: "fieldset_id29",
    name: "sectionI",
    type: "input",
  },
];
function findInputIdMS3(title) {
  let res = sectionMS3.filter(a => a.name == title);
  if (res.length) return res[0];
  else return false;
}
function checkingMS3(e) {
  $("#adder").remove();
  // let nd = getCaretPosition();
  // let nd2 = nd.nodeType == 3 ? $(nd).parent()[0] : nd;
  if (e.keyCode == 13) {
    let nd = getCaretPosition();
    $("#temp").attr("id", "");
    if (nd.nodeType != 3 && nd.getAttribute("id") == "ms3_text_editor") return false;
    if (
      nd.textContent.substr(0, nd.textContent.indexOf(": ")) != -1 &&
      nd.textContent != ""
    ) {
      let nd2 = nd.nodeType == 3 ? $(nd).parent()[0] : nd;
      let extra = getCaretPosition2(nd2);
      let starting = nd.textContent.substr(0, extra);
      let inpData = starting.split(":");
      if (
        starting != "" && !findInputIdMS3(inpData[0].trim())
      ) {
        if (extra == nd.textContent.length) {
          $(nd).replaceWith(
            `<div class="form-text-design-invalid data-div">${nd.textContent}</div><br id="temp">`
          );
          setCaret($("#temp")[0]);
        } else {
          $(nd).replaceWith(
            (extra != 0
              ? `<div class="form-text-design-invalid data-div">
              ${nd.textContent.substr(0, extra)}
              </div>`
              : "<br>") +
            `<div id="temp">
            ${nd.textContent.substr(extra)}
            </div>`
          );
          setCaret($("#temp")[0]);
        }
        document.getElementById("temp").removeAttribute("id");
      } else {
        if (extra == nd.textContent.length) {
          $(nd).replaceWith(
            `<div class="form-text-design data-div">
            ${nd.textContent}
            </div>
            <br id="temp">`
          );
          //setEndOfContenteditable(document.getElementById("temp"));
          setCaret($("#temp")[0]);
        } else {
          $(nd).replaceWith(
            (extra != 0
              ? `<div class="form-text-design data-div">
              ${nd.textContent.substr(0, extra)}
              </div>`
              : "<br>") +
            `<div id="temp">
              ${nd.textContent.substr(extra)}
            </div>
            <br>`
          );
          setCaret($("#temp")[0]);
        }
        document.getElementById("temp").removeAttribute("id");
      }
    }
    return false;
  }
  // this will add autocorrect box
  setTimeout(autoCorrectMS3, 100);
}
function autoCorrectMS3() {
  let pos = getCaretPosition();
  if ($(pos).find("#adder").length == 1) $("#adder").remove();
  while (document.getElementById("temp")) {
    document.getElementById("temp").removeAttribute("id");
  }
  let x = pos.textContent;
  let editor = document.getElementById("text_editor_p");

  let m = "";
  let first = 1;
  if (x.indexOf(":") == -1) {
    $("#adder").addClass("set-name");
    sectionMS3.forEach(({ name }) => {
      if (name.toLowerCase().indexOf(x.toLowerCase()) == 0) {
        if (first) {
          m += `<option selected value="${name}">${name}</option><br>`;
        }
        else {
          m += `<option value="${name}">${name}</option><br>`;
        }
        first = 0;
      }
    });
  }

  let y =
    `<select onfocus="this.size=3" onblur="this.size=1" onkeydown="keyHandler(event, this)" onclick="event.stopPropagation();if(clicked) addField(this.value); clicked = true;">
    ${m}
    </select>`;
  // add auto correct ... only if there is atleast one match
  if (m != "") {
    if (x.indexOf(":") == -1) {
      $(pos).replaceWith(
        `<div id="temp">${x}</div>
        <div id="adder" class="set-name"></div>`
      );
    } else {
      $(pos).replaceWith(
        `<div id="temp">${x}</div>
        <div id="adder" class="set-sug"></div>`
      );
    }
    document.getElementById("adder").innerHTML = y;
    document.getElementById("adder").style.display = "block";
    $("#adder select").focus();
  } else {
    $("#adder").remove();
    // setEndOfContenteditable(document.getElementById("temp"));
    // document.getElementById("temp").removeAttribute("id");
  }
}
function pasteEventMS3(e) {
  let caretPos = getCaretPosition();
  let editorPos = document.getElementById("ms3_text_editor");
  let editor = editorPos == caretPos ? editorPos : caretPos;
  let clipboardData = e.clipboardData || window.clipboardData;
  let pD = clipboardData.getData("Text").split("\n");
  let x = "";
  for (let i = 0; i < pD.length; i++) {
    let nbe = pD[i];
    if (i == 0 && !editor.tagName) {
      replaceSelectedText(nbe);
      continue;
    }
    let inpData = nbe.split(":");
    if (nbe.substr(0, nbe.indexOf(": ")) != -1 && nbe != "") {
      if (
        !findInputIdMS3(inpData[0].trim())
      ) {
        x += `<div class="form-text-design-invalid data-div">
        ${nbe}
        </div>`;
      } else {
        x += `<div class="form-text-design data-div">
        ${nbe}
        </div>`;
      }
    }
  }
  if (editor.tagName) editor.innerHTML += x;
  else {
    caretPos = caretPos.parentElement;
    caretPos.innerHTML += x;
  }
  removeExtraLines(editor);
  if (editorPos == caretPos) {
    editor.innerHTML += "<br>";
    setEndOfContenteditable(editor);
  } else if (!editor.tagName && pD.length == 1) {
    setEndOfContenteditable(getCaretPosition());
  } else {
    $(editorPos).find("br").remove();
    setEndOfContenteditable(caretPos);
  }
  return false;
}
function windowToFormMS3(e) {
  let tRow = $(e).parent().parent().parent()
    .children(".text-editor-popup-body")
    .find("#ms3_text_editor div.form-text-design.data-div");
  let len = tRow.length;
  for (let i = 0; i < len; i++) {
    let divData = $(tRow[i])[0].innerText.split(":");
    let { id, name, type } = findInputIdMS3(divData[0].trim());
    if (type == "input") {
      let inp = $(`fieldset#${id} .data-form input[type=text]`);
      for (let j = 0; j < inp.length; j++) {
        let title = $(inp[j]).parent().parent().find(".title-section p")[0].textContent;
        if (title == divData[1].trim()) {
          let abc = divData.splice(2).join(":").trim();
          $(inp[j]).val(abc);
        }
      }
    } else if (type == "option") {
      let selt = $(`fieldset#${id} .custome-select`);
      for (let j = 0; j < selt.length; j++) {
        let titleE = $(selt[j]).parent().parent();
        let title = titleE.find(".title-section p")[0] != undefined ?
          titleE.find(".title-section p")[0] : titleE.find(".custom-title-section p")[0];
        if (title.textContent == divData[1].trim()) {
          let abc = divData.splice(2).join(":").trim();
          $(selt[j]).find("select").val(abc);
        }
      }
    }
  }
}
function formToWindowMS3(e) {
  let tBody = $(e).parent().parent().parent()
    .children(".text-editor-popup-body")
    .find("#ms3_text_editor");
  let renHtml = "";

  // Section All
  sectionMS3.forEach(({ id, name, type }) => {
    if (type == "input") {
      let section = $(`fieldset#${id}`);
      let inp = section.find(".data-form input[type=text]");
      for (let i = 0; i < inp.length; i++) {
        let title = $(inp[i]).parent().parent().find(".title-section p")[0].textContent;
        if (inp[i].value != "") {
          renHtml += `<div class="form-text-design data-div">
            ${name} : ${title} : ${inp[i].value}
          </div>`;
        }
      }
    }
    else if (type == "option") {
      let selt = $(`fieldset#${id} .custome-select`);
      for (let i = 0; i < selt.length; i++) {
        let titleE = $(selt[i]).parent().parent();
        let title = titleE.find(".title-section p")[0] != undefined ?
          titleE.find(".title-section p")[0] : titleE.find(".custom-title-section p")[0];
        let selVal = $(selt[i]).find("select :selected").text();
        if (selVal != "") {
          renHtml += `<div class="form-text-design data-div">
            ${name} : ${title.textContent} : ${selVal}
          </div>`;
        }
      }
    }
  });

  tBody.html(renHtml);
}
// Form by text editor End
// Manage template Sample 3 End

// Manage template Sample 1 Start
// Form by text editor Start
let listMS1 = [
  {
    id: "manage-tempa-list-modal",
    name: "LIST 1",
  },
  {
    id: "manage-tempb-list-modal",
    name: "LIST 2",
  },
  {
    id: "manage-tempc-list-modal",
    name: "LIST 3",
  },
  {
    id: "manage-tempd-list-modal",
    name: "LIST 4",
  },
];
function findInputIdMS1(title) {
  let res = listMS1.filter((a) => a.name == title);
  if (res.length) return res[0];
  else return false;
}
function checkingMS1(e) {
  $("#adder").remove();
  // let nd = getCaretPosition();
  // let nd2 = nd.nodeType == 3 ? $(nd).parent()[0] : nd;
  if (e.keyCode == 13) {
    let nd = getCaretPosition();
    $("#temp").attr("id", "");
    if (nd.nodeType != 3 && nd.getAttribute("id") == "ms1_text_editor") return false;
    if (
      nd.textContent.substr(0, nd.textContent.indexOf(": ")) != -1 &&
      nd.textContent != ""
    ) {
      let nd2 = nd.nodeType == 3 ? $(nd).parent()[0] : nd;
      let extra = getCaretPosition2(nd2);
      let starting = nd.textContent.substr(0, extra);
      let inpData = starting.split(":");
      if (
        starting != "" && !findInputIdMS1(inpData[0].trim())
      ) {
        if (extra == nd.textContent.length) {
          $(nd).replaceWith(
            `<div class="form-text-design-invalid data-div">${nd.textContent}</div><br id="temp">`
          );
          setCaret($("#temp")[0]);
        } else {
          $(nd).replaceWith(
            (extra != 0
              ? `<div class="form-text-design-invalid data-div">
              ${nd.textContent.substr(0, extra)}
              </div>`
              : "<br>") +
            `<div id="temp">
            ${nd.textContent.substr(extra)}
            </div>`
          );
          setCaret($("#temp")[0]);
        }
        document.getElementById("temp").removeAttribute("id");
      } else {
        if (extra == nd.textContent.length) {
          $(nd).replaceWith(
            `<div class="form-text-design data-div">
            ${nd.textContent}
            </div>
            <br id="temp">`
          );
          //setEndOfContenteditable(document.getElementById("temp"));
          setCaret($("#temp")[0]);
        } else {
          $(nd).replaceWith(
            (extra != 0
              ? `<div class="form-text-design data-div">
              ${nd.textContent.substr(0, extra)}
              </div>`
              : "<br>") +
            `<div id="temp">
              ${nd.textContent.substr(extra)}
            </div>
            <br>`
          );
          setCaret($("#temp")[0]);
        }
        document.getElementById("temp").removeAttribute("id");
      }
    }
    return false;
  }
  // this will add autocorrect box
  setTimeout(autoCorrectMS1, 100);
}
function autoCorrectMS1() {
  let pos = getCaretPosition();
  if ($(pos).find("#adder").length == 1) $("#adder").remove();
  while (document.getElementById("temp")) {
    document.getElementById("temp").removeAttribute("id");
  }
  let x = pos.textContent;
  let editor = document.getElementById("text_editor_p");

  let m = "";
  let first = 1;
  if (x.indexOf(":") == -1) {
    listMS1.forEach(({ name }) => {
      if (name.toLowerCase().indexOf(x.toLowerCase()) == 0) {
        if (first) {
          m += `<option selected value="${name}">${name}</option><br>`;
        }
        else {
          m += `<option value="${name}">${name}</option><br>`;
        }
        first = 0;
      }
    });
  }

  let y =
    `<select onfocus="this.size=3" onblur="this.size=1" onkeydown="keyHandler(event, this)" onclick="event.stopPropagation();if(clicked) addField(this.value); clicked = true;">
    ${m}
    </select>`;
  // add auto correct ... only if there is atleast one match
  if (m != "") {
    if (x.indexOf(":") == -1) {
      $(pos).replaceWith(
        `<div id="temp">${x}</div>
        <div id="adder" class="set-name"></div>`
      );
    } else {
      $(pos).replaceWith(
        `<div id="temp">${x}</div>
        <div id="adder" class="set-sug"></div>`
      );
    }
    document.getElementById("adder").innerHTML = y;
    document.getElementById("adder").style.display = "block";
    $("#adder select").focus();
  } else {
    $("#adder").remove();
    // setEndOfContenteditable(document.getElementById("temp"));
    // document.getElementById("temp").removeAttribute("id");
  }
}
function pasteEventMS1(e) {
  let caretPos = getCaretPosition();
  let editorPos = document.getElementById("ms1_text_editor");
  let editor = editorPos == caretPos ? editorPos : caretPos;
  let clipboardData = e.clipboardData || window.clipboardData;
  let pD = clipboardData.getData("Text").split("\n");
  let x = "";
  for (let i = 0; i < pD.length; i++) {
    let nbe = pD[i];
    if (i == 0 && !editor.tagName) {
      replaceSelectedText(nbe);
      continue;
    }
    let inpData = nbe.split(":");
    if (nbe.substr(0, nbe.indexOf(": ")) != -1 && nbe != "") {
      if (
        !findInputIdMS1(inpData[0].trim())
      ) {
        x += `<div class="form-text-design-invalid data-div">
        ${nbe}
        </div>`;
      } else {
        x += `<div class="form-text-design data-div">
        ${nbe}
        </div>`;
      }
    }
  }
  if (editor.tagName) editor.innerHTML += x;
  else {
    caretPos = caretPos.parentElement;
    caretPos.innerHTML += x;
  }
  removeExtraLines(editor);
  if (editorPos == caretPos) {
    editor.innerHTML += "<br>";
    setEndOfContenteditable(editor);
  } else if (!editor.tagName && pD.length == 1) {
    setEndOfContenteditable(getCaretPosition());
  } else {
    $(editorPos).find("br").remove();
    setEndOfContenteditable(caretPos);
  }
  return false;
}
function windowToFormMS1(e) {
  let tRow = $(e).parent().parent().parent()
    .children(".text-editor-popup-body")
    .find("#ms1_text_editor div.form-text-design.data-div");
  let len = tRow.length;
  for (let i = 0; i < len; i++) {
    let divData = $(tRow[i])[0].innerText.split(":");
    let { id, name } = findInputIdMS1(divData[0].trim());
    let dataLi = divData.length > 2 ? findFileListMS1(divData[2].trim(), name) : false;
    if (dataLi) {
      let { id: id2 } = dataLi;
      let liList = document.querySelector(`div#${id} div.sub-ul-managetemp-modallist ul li.${id2}`);
      let checkBox = $(liList).children(`div.sublist-check-box`);
      let cancelBox = $(liList).children(`div.sublist-cancel-box`);
      if (divData[3].trim() == "checked") {
        checkBox.addClass("checkbox_show");
        checkBox.removeClass("checkbox_hide");
        cancelBox.removeClass("checkbox_show");
        cancelBox.addClass("checkbox_hide");
      } else if (divData[3].trim() == "unchecked") {
        checkBox.addClass("checkbox_hide");
        checkBox.removeClass("checkbox_show");
        cancelBox.addClass("checkbox_show");
        cancelBox.removeClass("checkbox_hide");
      }

      let _id = $(liList).parent().attr("id");
      let markItem = $(`div#${id} ul.left-list-box li.modalmanagetemplist-item-${_id.split("-").splice(-1)[0]} div.green-check-box`);
      let abcd = name == "LIST 1" ? "a" : name == "LIST 2" ? "b" : name == "LIST 3" ? "c" : name == "LIST 4" ? "d" : "";
      let count = $(`div#${id} ul#managetemp${abcd}-submodal-div-list-1-${_id.split("-").splice(-1)[0]} li div.sublist-check-box.checkbox_show`).length;
      count += $(`div#${id} ul#managetemp${abcd}-submodal-div-list-2-${_id.split("-").splice(-1)[0]} li div.sublist-check-box.checkbox_show`).length;
      count += $(`div#${id} ul#managetemp${abcd}-submodal-div-list-3-${_id.split("-").splice(-1)[0]} li div.sublist-check-box.checkbox_show`).length;
      if (count > 0) {
        markItem.addClass("display-block");
        markItem.removeClass("display-none");
      } else {
        markItem.addClass("display-none");
        markItem.removeClass("display-block");
      }

      $(`div#${id} a#submit_list`).click();
    }
  }
}
function formToWindowMS1(e) {
  let tBody = $(e).parent().parent().parent()
    .children(".text-editor-popup-body")
    .find("#ms1_text_editor");
  let renHtml = "";
  listMS1.forEach(({ id, name }) => {
    let checkList = $(`div#${id} div.sub-ul-managetemp-modallist .submodal-list div.sublist-check-box.checkbox_show`);
    let len = checkList.length;
    for (let i = 0; i < len; i++) {
      let li = $(checkList[i]).parent();
      let listName = li.children("p")[0].textContent.trim();
      let className = li.attr("class");
      let dataLi = findFileListMS1(className, name);
      if (dataLi) {
        renHtml += `<div class="form-text-design data-div">
          ${name}: ${dataLi.item}: ${listName}: checked
        </div>`;
      }
    }
  });

  tBody.html(renHtml);
}
// Form by text editor End
// Manage template Sample 1 End
$("#datepicker_field_set21").datepicker();
$("#datepicker_field_set21").datepicker("option", "dateFormat", "DD - MM d, yy");
$("#datepicker_field_set22").datepicker();
$("#datepicker_field_set22").datepicker("option", "dateFormat", "DD - MM d, yy");


$("#datepicker_field_set21_icon").click(function () {
  $("#datepicker_field_set21").focus();
});
$("#datepicker_field_set22_icon").click(function () {
  $("#datepicker_field_set22").focus();
});