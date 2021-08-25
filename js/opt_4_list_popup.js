// ===/////=== OPTION 4 LIST1 ITEM START ===/////===
const optfourmodala_list = document.querySelector(".optfourmodala-list");
// Added by ASHIQ
let optfourmodalalistmodal = [];
for (let i = 1; i <= 29; i++) {
  let files = []
  for (let j = 1; j <= 72; j++) {
    files.push({
      id: `option-optfourmodalamodallist-${i}-${j}`,
      item: `Level ${i} - Item ${j}`
    });
  }
  optfourmodalalistmodal.push({
    id: `modaloptfourmodallist-item-${i}`,
    item: `Item ${i}`,
    files
  });
}

(function optfourmodalAListModal() {
  let htmloptfourmodalalistmodal = "", htmlDataModal = "";
  optfourmodalalistmodal.forEach(({ id, item, files }, index) => {
    htmloptfourmodalalistmodal += `<li class="${id}">
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
      length = files.length;
    files.forEach(({ id: _id, item }, idx) => {
      let i = idx + 1;
      let elementHtml = `<li class="${_id}">
      <p>${item}</p>
      <div class="sublist-check-box checkbox_hide">
        <i class="fas fa-check"></i>
      </div>
      <div class="sublist-cancel-box checkbox_show" tooltip="Click to Delete" flow="down" data-toggle="modal" data-target="#delet-optfourmodala-modal">
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
    });

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
  document.querySelector("div#opt4a-list-modal div.sub-ul-optfourmodal-modallist").innerHTML = htmlDataModal;
})();

/* New Function Start */
let optfourmodala_submodal_div_list_id1_old = "",
  optfourmodala_submodal_div_list_id2_old = "",
  optfourmodala_submodal_div_list_id3_old = "";

let oldSelectListOpt4a = "";
let oldSelectListOpt4b = "";
let oldSelectListOpt4c = "";
let oldSelectListOpt4d = "";

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

    if(oldSelectListOpt4a == ""){
			$("#opt4a_list_level_item_loading").css("display", "block");
			$("#sub_ul_opt4a_modallist").css("display", "none");
			oldSelectListOpt4a = "";
			setTimeout(() => {
				$("#opt4a_list_level_item_loading").css("display", "none");
				$("#sub_ul_opt4a_modallist").css("display", "block");
			}, 1000);
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
    
    if(oldTarget == target){
      oldSelectListOpt4a = "hideLoadingAnimation";
		}else{
      oldSelectListOpt4a = "";
		}
    
    oldTarget = target;

    optfourmodala_left_list = target.childNodes[1].innerHTML;
    optfourmodala_modalitem_click_handle(target.classList[0]);
  });
})();

let optfourmodala_oldLIClassnameModal = "";
const sub_ul_optfourmodalamodallist = document.querySelector("div#opt4a-list-modal div.sub-ul-optfourmodal-modallist");
sub_ul_optfourmodalamodallist.addEventListener("click", function (e) {
  let target = e.target;
  if (target.tagName === "DIV") {
    if (target.className.indexOf("sublist-cancel-box") != -1) {
      deleteListClassName = target.parentNode.classList[0];

      let opt4ModalListA_rowName = target.parentNode.childNodes[1].innerHTML;
      document.querySelector("#delet-optfourmodala-modal .opt4-list1-row-name").innerHTML = opt4ModalListA_rowName;

      return;
    }
    target = target.parentNode;
  } else if (target.tagName === "P") {
    target = target.parentNode;
  } else if (target.tagName === "I") {
    target = target.parentNode;
    if (target.className.indexOf("sublist-cancel-box") != -1) {
      deleteListClassName = target.parentNode.classList[0];

      let opt4ModalListA_rowName = target.parentNode.childNodes[1].innerHTML;
      document.querySelector("#delet-optfourmodala-modal .opt4-list1-row-name").innerHTML = opt4ModalListA_rowName;

      return;
    } else target = target.parentNode;
  } else if (target.tagName !== "LI") return;

  $(target).children(".sublist-check-box").toggleClass("checkbox_hide checkbox_show");
  $(target).children(".sublist-cancel-box").toggleClass("checkbox_hide checkbox_show");

  // optfourmodala_oldLIClassnameModal = target.classList[0];
  opt4ALeftOnRight(target);
});

$("#optfourmodala-mng-opt2-delete").click(function () {
  let delObj = document.querySelector(`.${deleteListClassName}`);
  delObj.remove();
});

function countoptfourmodalaListModal(e) {
  let countItem = $(e).parent().parent().find("div.sub-ul-optfourmodal-modallist .sublist-check-box.checkbox_show").length;
  $("#optfourmodala-list-count").html(`${countItem} Items Selected`);
  $("#optfourmodala-list-count").removeClass('hideListDiv');
  if (countItem > 0) {
    $("#op1-first-skip").addClass('hideListDiv');
    $("#op1-first-check").removeClass('hideListDiv');
    $("#op1-first-fileColor").addClass('fileContainerColor');
  } else {
    $("#op1-first-skip").removeClass('hideListDiv');
    $("#op1-first-check").addClass('hideListDiv');
    $("#op1-first-fileColor").removeClass('fileContainerColor');
  }
  $("#op-single-list1").removeClass('imageClickBackground');
  $("#op-single-list2").addClass('imageClickBackground');
}

function resetoptfourmodalaListModal(e) {
  let checkItem = $(e).parent().parent().find("div.sub-ul-optfourmodal-modallist .sublist-check-box.checkbox_show");
  let uncheckItem = $(e).parent().parent().find("div.sub-ul-optfourmodal-modallist .sublist-cancel-box.checkbox_hide");
  checkItem.toggleClass("checkbox_show checkbox_hide");
  uncheckItem.toggleClass("checkbox_show checkbox_hide");
  $("#optfourmodala-list-count").html(`0 Items Selected`);
  let leftItem = $(e).parent().parent().find("ul.optfourmodala-list li div.green-check-box.display-block");
  leftItem.toggleClass("display-block display-none");
}

function opt4ALeftOnRight(target) {
  let _id = $(target).parent().attr("id");
  let pos = _id.length;
  let len = $(target).parent().parent().find(".submodal-list.checkbox_show div.sublist-check-box.checkbox_show").length;
  if (len > 0) {
    let markItem = $(`ul.optfourmodala-list li.modaloptfourmodallist-item-${_id.split("-").splice(-1)[0]}`)
      .children("div.green-check-box");
    markItem.addClass("display-block");
    markItem.removeClass("display-none");
  } else {
    let markItem = $(`ul.optfourmodala-list li.modaloptfourmodallist-item-${_id.split("-").splice(-1)[0]}`)
      .children("div.green-check-box");
    markItem.addClass("display-none");
    markItem.removeClass("display-block");
  }
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
let optfourmodalblistmodal = []
for (let i = 1; i <= 29; i++) {
  let files = []
  for (let j = 1; j <= 72; j++) {
    files.push({
      id: `option-optfourmodalbmodallist-${i}-${j}`,
      item: `Level ${i} - Item ${j}`
    });
  }
  optfourmodalblistmodal.push({
    id: `modaloptfourmodallist-item-${i}`,
    item: `Item ${i}`,
    files
  })
}

(function optfourmodalbListModal() {
  let htmloptfourmodalblistmodal = "", htmlDataModal = "";
  optfourmodalblistmodal.forEach(({ id, item, files }, index) => {
    htmloptfourmodalblistmodal += `<li class="${id}">
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
      length = files.length;
    files.forEach(({ id: _id, item }, idx) => {
      let i = idx + 1;
      let elementHtml = `<li class="${_id}">
			<p>${item}</p>
      <div class="sublist-check-box checkbox_hide">
        <i class="fas fa-check"></i>
      </div>
      <div class="sublist-cancel-box checkbox_show" tooltip="Click to Delete" flow="down" data-toggle="modal" data-target="#delet-optfourmodalb-modal">
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
    });

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
  document.querySelector("div#opt4b-list-modal div.sub-ul-optfourmodal-modallist").innerHTML = htmlDataModal;
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

    if(oldSelectListOpt4b == ""){
			$("#opt4b_list_level_item_loading").css("display", "block");
			$("#sub_ul_opt4b_modallist").css("display", "none");
			oldSelectListOpt4b = "";
			setTimeout(() => {
				$("#opt4b_list_level_item_loading").css("display", "none");
				$("#sub_ul_opt4b_modallist").css("display", "block");
			}, 1000);
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

    if(oldTarget == target){
      oldSelectListOpt4b = "hideLoadingAnimation";
		}else{
      oldSelectListOpt4b = "";
		}

    oldTarget = target;

    optfourmodalb_left_list = target.childNodes[1].innerHTML;
    optfourmodalb_modalitem_click_handle(target.classList[0]);
  });
})();

let optfourmodalb_oldLIClassnameModal = "";
const sub_ul_optfourmodalbmodallist = document.querySelector("div#opt4b-list-modal div.sub-ul-optfourmodal-modallist");
sub_ul_optfourmodalbmodallist.addEventListener("click", function (e) {
  let target = e.target;
  if (target.tagName === "DIV") {
    if (target.className.indexOf("sublist-cancel-box") != -1) {
      deleteListClassName = target.parentNode.classList[0];

      let opt4ModalListB_rowName = target.parentNode.childNodes[1].innerHTML;
      document.querySelector("#delet-optfourmodalb-modal .opt4-list2-row-name").innerHTML = opt4ModalListB_rowName;

      return;
    }
    target = target.parentNode;
  } else if (target.tagName === "P") {
    target = target.parentNode;
  } else if (target.tagName === "I") {
    target = target.parentNode;
    if (target.className.indexOf("sublist-cancel-box") != -1) {
      deleteListClassName = target.parentNode.classList[0];

      let opt4ModalListB_rowName = target.parentNode.childNodes[1].innerHTML;
      document.querySelector("#delet-optfourmodalb-modal .opt4-list2-row-name").innerHTML = opt4ModalListB_rowName;

      return;
    } else target = target.parentNode;
  } else if (target.tagName !== "LI") return;

  $(target).children(".sublist-check-box").toggleClass("checkbox_hide checkbox_show");
  $(target).children(".sublist-cancel-box").toggleClass("checkbox_hide checkbox_show");

  // optfourmodalb_oldLIClassnameModal = target.classList[0];
  opt4BLeftOnRight(target);
});

$("#optfourmodalb-mng-opt2-delete").click(function () {
  let delObj = document.querySelector(`.${deleteListClassName}`);
  delObj.remove();
});

function countoptfourmodalbListModal(e) {
  let countItem = $(e).parent().parent().find("div.sub-ul-optfourmodal-modallist .sublist-check-box.checkbox_show").length;
  $("#optfourmodalb-list-count").html(`${countItem} Items Selected`);
  $("#optfourmodalb-list-count").removeClass('hideListDiv');
  if (countItem > 0) {
    $("#op1-sec-skip").addClass('hideListDiv');
    $("#op1-sec-check").removeClass('hideListDiv');
    $("#op1-sec-fileColor").addClass('fileContainerColor');
  } else {
    $("#op1-sec-skip").removeClass('hideListDiv');
    $("#op1-sec-check").addClass('hideListDiv');
    $("#op1-sec-fileColor").removeClass('fileContainerColor');
  }
  $("#op-single-list2").removeClass('imageClickBackground');
  $("#op-single-list3").addClass('imageClickBackground');
}

function resetoptfourmodalbListModal(e) {
  let checkItem = $(e).parent().parent().find("div.sub-ul-optfourmodal-modallist .sublist-check-box.checkbox_show");
  let uncheckItem = $(e).parent().parent().find("div.sub-ul-optfourmodal-modallist .sublist-cancel-box.checkbox_hide");
  checkItem.toggleClass("checkbox_show checkbox_hide");
  uncheckItem.toggleClass("checkbox_show checkbox_hide");
  $("#optfourmodalb-list-count").html(`0 Items Selected`);
  let leftItem = $(e).parent().parent().find("ul.optfourmodalb-list li div.green-check-box.display-block");
  leftItem.toggleClass("display-block display-none");
}

function opt4BLeftOnRight(target) {
  let _id = $(target).parent().attr("id");
  let pos = _id.length;
  let len = $(target).parent().parent().find(".submodal-list.checkbox_show div.sublist-check-box.checkbox_show").length;
  if (len > 0) {
    let markItem = $(`ul.optfourmodalb-list li.modaloptfourmodallist-item-${_id.split("-").splice(-1)[0]}`)
      .children("div.green-check-box");
    markItem.addClass("display-block");
    markItem.removeClass("display-none");
  } else {
    let markItem = $(`ul.optfourmodalb-list li.modaloptfourmodallist-item-${_id.split("-").splice(-1)[0]}`)
      .children("div.green-check-box");
    markItem.addClass("display-none");
    markItem.removeClass("display-block");
  }
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
let optfourmodalclistmodal = []
for (let i = 1; i <= 29; i++) {
  let files = []
  for (let j = 1; j <= 72; j++) {
    files.push({
      id: `option-optfourmodalcmodallist-${i}-${j}`,
      item: `Level ${i} - Item ${j}`
    });
  }
  optfourmodalclistmodal.push({
    id: `modaloptfourmodallist-item-${i}`,
    item: `Item ${i}`,
    files
  })
}

(function optfourmodalcListModal() {
  let htmloptfourmodalclistmodal = "", htmlDataModal = "";
  optfourmodalclistmodal.forEach(({ id, item, files }, index) => {
    htmloptfourmodalclistmodal += `<li class="${id}">
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
      length = files.length;
    files.forEach(({ id: _id, item }, idx) => {
      let i = idx + 1;
      let elementHtml = `<li class="${_id}">
			<p>${item}</p>
      <div class="sublist-check-box checkbox_hide">
        <i class="fas fa-check"></i>
      </div>
      <div class="sublist-cancel-box checkbox_show" tooltip="Click to Delete" flow="down" data-toggle="modal" data-target="#delet-optfourmodalc-modal">
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
    });

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
  document.querySelector("div#opt4c-list-modal div.sub-ul-optfourmodal-modallist").innerHTML = htmlDataModal;
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

    if(oldSelectListOpt4c == ""){
			$("#opt4c_list_level_item_loading").css("display", "block");
			$("#sub_ul_opt4c_modallist").css("display", "none");
			oldSelectListOpt4c = "";
			setTimeout(() => {
				$("#opt4c_list_level_item_loading").css("display", "none");
				$("#sub_ul_opt4c_modallist").css("display", "block");
			}, 1000);
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

    if(oldTarget == target){
      oldSelectListOpt4c = "hideLoadingAnimation";
		}else{
      oldSelectListOpt4c = "";
		}

    oldTarget = target;

    optfourmodalc_left_list = target.childNodes[1].innerHTML;
    optfourmodalc_modalitem_click_handle(target.classList[0]);
  });
})();

let optfourmodalc_oldLIClassnameModal = "";
const sub_ul_optfourmodalcmodallist = document.querySelector("div#opt4c-list-modal div.sub-ul-optfourmodal-modallist");
sub_ul_optfourmodalcmodallist.addEventListener("click", function (e) {
  let target = e.target;
  if (target.tagName === "DIV") {
    if (target.className.indexOf("sublist-cancel-box") != -1) {
      deleteListClassName = target.parentNode.classList[0];

      let opt4ModalListC_rowName = target.parentNode.childNodes[1].innerHTML;
      document.querySelector("#delet-optfourmodalc-modal .opt4-list3-row-name").innerHTML = opt4ModalListC_rowName;

      return;
    }
    target = target.parentNode;
  } else if (target.tagName === "P") {
    target = target.parentNode;
  } else if (target.tagName === "I") {
    target = target.parentNode;
    if (target.className.indexOf("sublist-cancel-box") != -1) {
      deleteListClassName = target.parentNode.classList[0];

      let opt4ModalListC_rowName = target.parentNode.childNodes[1].innerHTML;
      document.querySelector("#delet-optfourmodalc-modal .opt4-list3-row-name").innerHTML = opt4ModalListC_rowName;

      return;
    } else target = target.parentNode;
  } else if (target.tagName !== "LI") return;

  $(target).children(".sublist-check-box").toggleClass("checkbox_hide checkbox_show");
  $(target).children(".sublist-cancel-box").toggleClass("checkbox_hide checkbox_show");

  // optfourmodalc_oldLIClassnameModal = target.classList[0];
  opt4CLeftOnRight(target);
});

$("#optfourmodalc-mng-opt2-delete").click(function () {
  let delObj = document.querySelector(`.${deleteListClassName}`);
  delObj.remove();
});

function countoptfourmodalcListModal(e) {
  let countItem = $(e).parent().parent().find("div.sub-ul-optfourmodal-modallist .sublist-check-box.checkbox_show").length;
  $("#optfourmodalc-list-count").html(`${countItem} Items Selected`);
  $("#optfourmodalc-list-count").removeClass('hideListDiv');
  if (countItem > 0) {
    $("#op1-third-skip").addClass('hideListDiv');
    $("#op1-third-check").removeClass('hideListDiv');
    $("#op1-third-fileColor").addClass('fileContainerColor');
  } else {
    $("#op1-third-skip").removeClass('hideListDiv');
    $("#op1-third-check").addClass('hideListDiv');
    $("#op1-third-fileColor").removeClass('fileContainerColor');
  }
  $("#op-single-list3").removeClass('imageClickBackground');
  $("#op-single-list4").addClass('imageClickBackground');
}

function resetoptfourmodalcListModal(e) {
  let checkItem = $(e).parent().parent().find("div.sub-ul-optfourmodal-modallist .sublist-check-box.checkbox_show");
  let uncheckItem = $(e).parent().parent().find("div.sub-ul-optfourmodal-modallist .sublist-cancel-box.checkbox_hide");
  checkItem.toggleClass("checkbox_show checkbox_hide");
  uncheckItem.toggleClass("checkbox_show checkbox_hide");
  $("#optfourmodalc-list-count").html(`0 Items Selected`);
  let leftItem = $(e).parent().parent().find("ul.optfourmodalc-list li div.green-check-box.display-block");
  leftItem.toggleClass("display-block display-none");
}

function opt4CLeftOnRight(target) {
  let _id = $(target).parent().attr("id");
  let pos = _id.length;
  let len = $(target).parent().parent().find(".submodal-list.checkbox_show div.sublist-check-box.checkbox_show").length;
  if (len > 0) {
    let markItem = $(`ul.optfourmodalc-list li.modaloptfourmodallist-item-${_id.split("-").splice(-1)[0]}`)
      .children("div.green-check-box");
    markItem.addClass("display-block");
    markItem.removeClass("display-none");
  } else {
    let markItem = $(`ul.optfourmodalc-list li.modaloptfourmodallist-item-${_id.split("-").splice(-1)[0]}`)
      .children("div.green-check-box");
    markItem.addClass("display-none");
    markItem.removeClass("display-block");
  }
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
let optfourmodaldlistmodal = [];
for (let i = 1; i <= 29; i++) {
  let files = [];
  for (let j = 1; j <= 72; j++) {
    files.push({
      id: `option-optfourmodaldmodallist-${i}-${j}`,
      item: `Level ${i} - Item ${j}`
    });
  }
  optfourmodaldlistmodal.push({
    id: `modaloptfourmodallist-item-${i}`,
    item: `Item ${i}`,
    files
  })
}

function findFileListOpt4(_id, name) {
  if (name == "LIST 1") {
    for (let val of optfourmodalalistmodal) {
      for (let file of val.files) {
        if (file.id == _id) return { id: val.id, item: val.item };
        else if (file.item == _id) return { id: file.id, item: file.item };
      }
    }
  } else if (name == "LIST 2") {
    for (let val of optfourmodalblistmodal) {
      for (let file of val.files) {
        if (file.id == _id) return { id: val.id, item: val.item };
        else if (file.item == _id) return { id: file.id, item: file.item };
      }
    }
  } else if (name == "LIST 3") {
    for (let val of optfourmodalclistmodal) {
      for (let file of val.files) {
        if (file.id == _id) return { id: val.id, item: val.item };
        else if (file.item == _id) return { id: file.id, item: file.item };
      }
    }
  } else if (name == "LIST 4") {
    for (let val of optfourmodaldlistmodal) {
      for (let file of val.files) {
        if (file.id == _id) return { id: val.id, item: val.item };
        else if (file.item == _id) return { id: file.id, item: file.item };
      }
    }
  }
  return false;
}

(function optfourmodaldListModal() {
  let htmloptfourmodaldlistmodal = "", htmlDataModal = "";
  optfourmodaldlistmodal.forEach(({ id, item, files }, index) => {
    htmloptfourmodaldlistmodal += `<li class="${id}">
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
      length = files.length;
    files.forEach(({ id: _id, item }, idx) => {
      let i = idx + 1;
      let elementHtml = `<li class="${_id}">
			<p>${item}</p>
      <div class="sublist-check-box checkbox_hide">
        <i class="fas fa-check"></i>
      </div>
      <div class="sublist-cancel-box checkbox_show" tooltip="Click to Delete" flow="down" data-toggle="modal" data-target="#delet-optfourmodald-modal">
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
    });

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
  document.querySelector("div#opt4d-list-modal div.sub-ul-optfourmodal-modallist").innerHTML = htmlDataModal;
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

    if(oldSelectListOpt4d == ""){
			$("#opt4d_list_level_item_loading").css("display", "block");
			$("#sub_ul_opt4d_modallist").css("display", "none");
			oldSelectListOpt4d = "";
			setTimeout(() => {
				$("#opt4d_list_level_item_loading").css("display", "none");
				$("#sub_ul_opt4d_modallist").css("display", "block");
			}, 1000);
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

    if(oldTarget == target){
      oldSelectListOpt4d = "hideLoadingAnimation";
		}else{
      oldSelectListOpt4d = "";
		}

    oldTarget = target;

    optfourmodald_left_list = target.childNodes[1].innerHTML;
    optfourmodald_modalitem_click_handle(target.classList[0]);
  });
})();

let optfourmodald_oldLIClassnameModal = "";
const sub_ul_optfourmodaldmodallist = document.querySelector("div#opt4d-list-modal div.sub-ul-optfourmodal-modallist");
sub_ul_optfourmodaldmodallist.addEventListener("click", function (e) {
  let target = e.target;
  if (target.tagName === "DIV") {
    if (target.className.indexOf("sublist-cancel-box") != -1) {
      deleteListClassName = target.parentNode.classList[0];

      let opt4ModalListD_rowName = target.parentNode.childNodes[1].innerHTML;
      document.querySelector("#delet-optfourmodald-modal .opt4-list4-row-name").innerHTML = opt4ModalListD_rowName;

      return;
    }
    target = target.parentNode;
  } else if (target.tagName === "P") {
    target = target.parentNode;
  } else if (target.tagName === "I") {
    target = target.parentNode;
    if (target.className.indexOf("sublist-cancel-box") != -1) {
      deleteListClassName = target.parentNode.classList[0];

      let opt4ModalListD_rowName = target.parentNode.childNodes[1].innerHTML;
      document.querySelector("#delet-optfourmodald-modal .opt4-list4-row-name").innerHTML = opt4ModalListD_rowName;

      return;
    } else target = target.parentNode;
  } else if (target.tagName !== "LI") return;

  $(target).children(".sublist-check-box").toggleClass("checkbox_hide checkbox_show");
  $(target).children(".sublist-cancel-box").toggleClass("checkbox_hide checkbox_show");

  // optfourmodald_oldLIClassnameModal = target.classList[0];
  opt4DLeftOnRight(target);
});

$("#optfourmodald-mng-opt2-delete").click(function () {
  let delObj = document.querySelector(`.${deleteListClassName}`);
  delObj.remove();
});

function countoptfourmodaldListModal(e) {
  let countItem = $(e).parent().parent().find("div.sub-ul-optfourmodal-modallist .sublist-check-box.checkbox_show").length;
  $("#optfourmodald-list-count").html(`${countItem} Items Selected`);
  $("#optfourmodald-list-count").removeClass('hideListDiv');
  if (countItem > 0) {
    $("#op1-forth-skip").addClass('hideListDiv');
    $("#op1-forth-check").removeClass('hideListDiv');
    $("#op1-forth-fileColor").addClass('fileContainerColor');
  } else {
    $("#op1-forth-skip").removeClass('hideListDiv');
    $("#op1-forth-check").addClass('hideListDiv');
    $("#op1-forth-fileColor").removeClass('fileContainerColor');
  }
  $("#op-single-list4").removeClass('imageClickBackground');
}

function resetoptfourmodaldListModal(e) {
  let checkItem = $(e).parent().parent().find("div.sub-ul-optfourmodal-modallist .sublist-check-box.checkbox_show");
  let uncheckItem = $(e).parent().parent().find("div.sub-ul-optfourmodal-modallist .sublist-cancel-box.checkbox_hide");
  checkItem.toggleClass("checkbox_show checkbox_hide");
  uncheckItem.toggleClass("checkbox_show checkbox_hide");
  $("#optfourmodald-list-count").html(`0 Items Selected`);
  let leftItem = $(e).parent().parent().find("ul.optfourmodald-list li div.green-check-box.display-block");
  leftItem.toggleClass("display-block display-none");
}

function opt4DLeftOnRight(target) {
  let _id = $(target).parent().attr("id");
  let pos = _id.length;
  let len = $(target).parent().parent().find(".submodal-list.checkbox_show div.sublist-check-box.checkbox_show").length;
  if (len > 0) {
    let markItem = $(`ul.optfourmodald-list li.modaloptfourmodallist-item-${_id.split("-").splice(-1)[0]}`)
      .children("div.green-check-box");
    markItem.addClass("display-block");
    markItem.removeClass("display-none");
  } else {
    let markItem = $(`ul.optfourmodald-list li.modaloptfourmodallist-item-${_id.split("-").splice(-1)[0]}`)
      .children("div.green-check-box");
    markItem.addClass("display-none");
    markItem.removeClass("display-block");
  }
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

function opt4aListModalClick(){
  $('#opt4a-list-modal').modal('show');

  $("#opt4a_list_item_loading").css("display", "block");
  $(".optfourmodala-scroll-window").css("display", "none");
  $(".optfourmodala-scroll-btn").css("display", "none");
  
  setTimeout(() => {
    $("#opt4a_list_item_loading").css("display", "none");
    $(".optfourmodala-scroll-window").css("display", "block");
    $(".optfourmodala-scroll-btn").css("display", "block");
  }, 2000);
}

function opt4bListModalClick(){
  $('#opt4b-list-modal').modal('show');

  $("#opt4b_list_item_loading").css("display", "block");
  $(".optfourmodalb-scroll-window").css("display", "none");
  $(".optfourmodalb-scroll-btn").css("display", "none");
  
  setTimeout(() => {
    $("#opt4b_list_item_loading").css("display", "none");
    $(".optfourmodalb-scroll-window").css("display", "block");
    $(".optfourmodalb-scroll-btn").css("display", "block");
  }, 2000);
}

function opt4cListModalClick(){
  $('#opt4c-list-modal').modal('show');

  $("#opt4c_list_item_loading").css("display", "block");
  $(".optfourmodalc-scroll-window").css("display", "none");
  $(".optfourmodalc-scroll-btn").css("display", "none");
  
  setTimeout(() => {
    $("#opt4c_list_item_loading").css("display", "none");
    $(".optfourmodalc-scroll-window").css("display", "block");
    $(".optfourmodalc-scroll-btn").css("display", "block");
  }, 2000);
}

function opt4dListModalClick(){
  $('#opt4d-list-modal').modal('show');

  $("#opt4d_list_item_loading").css("display", "block");
  $(".optfourmodald-scroll-window").css("display", "none");
  $(".optfourmodald-scroll-btn").css("display", "none");
  
  setTimeout(() => {
    $("#opt4d_list_item_loading").css("display", "none");
    $(".optfourmodald-scroll-window").css("display", "block");
    $(".optfourmodald-scroll-btn").css("display", "block");
  }, 2000);
}