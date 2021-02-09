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

managetempalistmodal.forEach((item, index) => {
  let htmlmanagetempalistmodal = `<li class="modalmanagetempalist-item-${index + 1}">
	<p>${item}</p>
	<div class="green-check-box display-none">
		<i class="fas fa-check"></i>
	</div>
	<div class="arrow-li-box arrow-li-box-background-color-1">
		<i class="fas fa-caret-right arrow-li-box-i-color-1"></i>
	</div>
	</li>`;
  managetempa_list.innerHTML += htmlmanagetempalistmodal;
  /* Update this function By Ashiq */
  let modallistmanagetempa_data1 = "",
    modallistmanagetempa_data2 = "",
    modallistmanagetempa_data3 = "",
    length = 72;
  for (let i = 1; i <= length; i++) {
    let elementHtml = `<li class="option-managetempamodallist-${index + 1}-${i}">
		<p>Level ${index + 1} - Item ${i}</p>
		<div class="sublist-check-box">
			<i class="fas fa-check"></i>
		</div>
		<div class="sublist-cancel-box" data-toggle="modal" data-target="#delet-manage-tempa-list-modal">
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
  const sub_ul_managetempamodallist = document.querySelector("#sub-ul-managetempa-modallist");
  sub_ul_managetempamodallist.innerHTML += `
		<ul class="submodal-list" id="managetempa-submodal-div-list-1-${index + 1}">
			${modallistmanagetempa_data1}
		</ul>
		<ul class="submodal-list" id="managetempa-submodal-div-list-2-${index + 1}">
			${modallistmanagetempa_data2}
		</ul>
		<ul class="submodal-list" id="managetempa-submodal-div-list-3-${index + 1}">
			${modallistmanagetempa_data3}
		</ul>`;

  let managetempa_submodal_div_list_id1 = document.getElementById("managetempa-submodal-div-list-1-" + (index + 1));
  managetempa_submodal_div_list_id1.style.display = "none";
  managetempa_submodal_div_list_id1.style.marginLeft = "300px";

  let managetempa_submodal_div_list_id2 = document.getElementById("managetempa-submodal-div-list-2-" + (index + 1));
  managetempa_submodal_div_list_id2.style.display = "none";
  managetempa_submodal_div_list_id2.style.marginLeft = "600px";

  let managetempa_sub_div_list_id3 = document.getElementById("managetempa-submodal-div-list-3-" + (index + 1));
  managetempa_sub_div_list_id3.style.display = "none";
  managetempa_sub_div_list_id3.style.marginLeft = "900px";
  /* Update End By Ashiq */
});

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
      $(managetempa_submodal_div_list_id1_old).toggle();
      $(managetempa_submodal_div_list_id1).toggle();
      managetempa_submodal_div_list_id1_old = managetempa_submodal_div_list_id1;
    } else {
      $(managetempa_submodal_div_list_id1_old).toggle();
      managetempa_submodal_div_list_id1_old = "";
    }

    if (managetempa_submodal_div_list_id2 !== managetempa_submodal_div_list_id2_old) {
      $(managetempa_submodal_div_list_id2_old).toggle();
      $(managetempa_submodal_div_list_id2).toggle();
      managetempa_submodal_div_list_id2_old = managetempa_submodal_div_list_id2;
    } else {
      $(managetempa_submodal_div_list_id2_old).toggle();
      managetempa_submodal_div_list_id2_old = "";
    }

    if (managetempa_submodal_div_list_id3 !== managetempa_submodal_div_list_id3_old) {
      $(managetempa_submodal_div_list_id3_old).toggle();
      $(managetempa_submodal_div_list_id3).toggle();
      managetempa_submodal_div_list_id3_old = managetempa_submodal_div_list_id3;
    } else {
      $(managetempa_submodal_div_list_id3_old).toggle();
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

let opt1_managetempa_right_list = "";
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


  target.childNodes.forEach((element) => {
    if (element.className === "sublist-check-box") {
      $(element).toggle();
    }
    if (element.className === "sublist-cancel-box") {
      $(element).toggle();
    }
  });

  managetempa_oldLIClassnameModal = target.classList[0];
  if (opt1_managetempa_right_list == target.childNodes[1].innerHTML) {
    opt1_managetempa_right_list = "";
  } else {
    opt1_managetempa_right_list = target.childNodes[1].innerHTML;
  }
  // $("#opt1-left").html(opt1_left_list);
  // $("#opt1-right").html(opt1_managetempa_right_list);
});

function managetempa_deleteOpt1Modal(className) {
  let managetempa_mng_opt2_delete = document.querySelector("#managetempa-mng-opt2-delete");
  managetempa_mng_opt2_delete.addEventListener("click", function () {
    let managetempa_delObj = document.querySelector(`.${className}`);
    managetempa_delObj.remove();
  });
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

managetempblistmodal.forEach((item, index) => {
  let htmlmanagetempblistmodal = `<li class="modalmanagetempblist-item-${index + 1}">
	<p>${item}</p>
	<div class="green-check-box display-none">
		<i class="fas fa-check"></i>
	</div>
	<div class="arrow-li-box arrow-li-box-background-color-1">
		<i class="fas fa-caret-right arrow-li-box-i-color-1"></i>
	</div>
	</li>`;
  managetempb_list.innerHTML += htmlmanagetempblistmodal;
  /* Update this function By Ashiq */
  let modallistmanagetempb_data1 = "",
    modallistmanagetempb_data2 = "",
    modallistmanagetempb_data3 = "",
    length = 72;
  for (let i = 1; i <= length; i++) {
    let elementHtml = `<li class="option-managetempbmodallist-${index + 1}-${i}">
		<p>Level ${index + 1} - Item ${i}</p>
		<div class="sublist-check-box">
			<i class="fas fa-check"></i>
		</div>
		<div class="sublist-cancel-box" data-toggle="modal" data-target="#delet-manage-tempb-list-modal">
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
  const sub_ul_managetempbmodallist = document.querySelector("#sub-ul-managetempb-modallist");
  sub_ul_managetempbmodallist.innerHTML += `
		<ul class="submodal-list" id="managetempb-submodal-div-list-1-${index + 1}">
			${modallistmanagetempb_data1}
		</ul>
		<ul class="submodal-list" id="managetempb-submodal-div-list-2-${index + 1}">
			${modallistmanagetempb_data2}
		</ul>
		<ul class="submodal-list" id="managetempb-submodal-div-list-3-${index + 1}">
			${modallistmanagetempb_data3}
		</ul>`;

  let managetempb_submodal_div_list_id1 = document.getElementById("managetempb-submodal-div-list-1-" + (index + 1));
  managetempb_submodal_div_list_id1.style.display = "none";
  managetempb_submodal_div_list_id1.style.marginLeft = "300px";

  let managetempb_submodal_div_list_id2 = document.getElementById("managetempb-submodal-div-list-2-" + (index + 1));
  managetempb_submodal_div_list_id2.style.display = "none";
  managetempb_submodal_div_list_id2.style.marginLeft = "600px";

  let managetempb_sub_div_list_id3 = document.getElementById("managetempb-submodal-div-list-3-" + (index + 1));
  managetempb_sub_div_list_id3.style.display = "none";
  managetempb_sub_div_list_id3.style.marginLeft = "900px";
  /* Update End By Ashiq */
});

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
      $(managetempb_submodal_div_list_id1_old).toggle();
      $(managetempb_submodal_div_list_id1).toggle();
      managetempb_submodal_div_list_id1_old = managetempb_submodal_div_list_id1;
    } else {
      $(managetempb_submodal_div_list_id1_old).toggle();
      managetempb_submodal_div_list_id1_old = "";
    }

    if (managetempb_submodal_div_list_id2 !== managetempb_submodal_div_list_id2_old) {
      $(managetempb_submodal_div_list_id2_old).toggle();
      $(managetempb_submodal_div_list_id2).toggle();
      managetempb_submodal_div_list_id2_old = managetempb_submodal_div_list_id2;
    } else {
      $(managetempb_submodal_div_list_id2_old).toggle();
      managetempb_submodal_div_list_id2_old = "";
    }

    if (managetempb_submodal_div_list_id3 !== managetempb_submodal_div_list_id3_old) {
      $(managetempb_submodal_div_list_id3_old).toggle();
      $(managetempb_submodal_div_list_id3).toggle();
      managetempb_submodal_div_list_id3_old = managetempb_submodal_div_list_id3;
    } else {
      $(managetempb_submodal_div_list_id3_old).toggle();
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

let opt1_managetempb_right_list = "";
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


  target.childNodes.forEach((element) => {
    if (element.className === "sublist-check-box") {
      $(element).toggle();
    }
    if (element.className === "sublist-cancel-box") {
      $(element).toggle();
    }
  });

  managetempb_oldLIClassnameModal = target.classList[0];
  if (opt1_managetempb_right_list == target.childNodes[1].innerHTML) {
    opt1_managetempb_right_list = "";
  } else {
    opt1_managetempb_right_list = target.childNodes[1].innerHTML;
  }
  // $("#opt1-left").html(opt1_left_list);
  // $("#opt1-right").html(opt1_managetempb_right_list);
});

function managetempb_deleteOpt1Modal(className) {
  let managetempb_mng_opt2_delete = document.querySelector("#managetempb-mng-opt2-delete");
  managetempb_mng_opt2_delete.addEventListener("click", function () {
    let managetempb_delObj = document.querySelector(`.${className}`);
    managetempb_delObj.remove();
  });
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

managetempclistmodal.forEach((item, index) => {
  let htmlmanagetempclistmodal = `<li class="modalmanagetempclist-item-${index + 1}">
	<p>${item}</p>
	<div class="green-check-box display-none">
		<i class="fas fa-check"></i>
	</div>
	<div class="arrow-li-box arrow-li-box-background-color-1">
		<i class="fas fa-caret-right arrow-li-box-i-color-1"></i>
	</div>
	</li>`;
  managetempc_list.innerHTML += htmlmanagetempclistmodal;
  /* Update this function By Ashiq */
  let modallistmanagetempc_data1 = "",
    modallistmanagetempc_data2 = "",
    modallistmanagetempc_data3 = "",
    length = 72;
  for (let i = 1; i <= length; i++) {
    let elementHtml = `<li class="option-managetempcmodallist-${index + 1}-${i}">
		<p>Level ${index + 1} - Item ${i}</p>
		<div class="sublist-check-box">
			<i class="fas fa-check"></i>
		</div>
		<div class="sublist-cancel-box" data-toggle="modal" data-target="#delet-manage-tempc-list-modal">
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
  const sub_ul_managetempcmodallist = document.querySelector("#sub-ul-managetempc-modallist");
  sub_ul_managetempcmodallist.innerHTML += `
		<ul class="submodal-list" id="managetempc-submodal-div-list-1-${index + 1}">
			${modallistmanagetempc_data1}
		</ul>
		<ul class="submodal-list" id="managetempc-submodal-div-list-2-${index + 1}">
			${modallistmanagetempc_data2}
		</ul>
		<ul class="submodal-list" id="managetempc-submodal-div-list-3-${index + 1}">
			${modallistmanagetempc_data3}
		</ul>`;

  let managetempc_submodal_div_list_id1 = document.getElementById("managetempc-submodal-div-list-1-" + (index + 1));
  managetempc_submodal_div_list_id1.style.display = "none";
  managetempc_submodal_div_list_id1.style.marginLeft = "300px";

  let managetempc_submodal_div_list_id2 = document.getElementById("managetempc-submodal-div-list-2-" + (index + 1));
  managetempc_submodal_div_list_id2.style.display = "none";
  managetempc_submodal_div_list_id2.style.marginLeft = "600px";

  let managetempc_sub_div_list_id3 = document.getElementById("managetempc-submodal-div-list-3-" + (index + 1));
  managetempc_sub_div_list_id3.style.display = "none";
  managetempc_sub_div_list_id3.style.marginLeft = "900px";
  /* Update End By Ashiq */
});

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
      $(managetempc_submodal_div_list_id1_old).toggle();
      $(managetempc_submodal_div_list_id1).toggle();
      managetempc_submodal_div_list_id1_old = managetempc_submodal_div_list_id1;
    } else {
      $(managetempc_submodal_div_list_id1_old).toggle();
      managetempc_submodal_div_list_id1_old = "";
    }

    if (managetempc_submodal_div_list_id2 !== managetempc_submodal_div_list_id2_old) {
      $(managetempc_submodal_div_list_id2_old).toggle();
      $(managetempc_submodal_div_list_id2).toggle();
      managetempc_submodal_div_list_id2_old = managetempc_submodal_div_list_id2;
    } else {
      $(managetempc_submodal_div_list_id2_old).toggle();
      managetempc_submodal_div_list_id2_old = "";
    }

    if (managetempc_submodal_div_list_id3 !== managetempc_submodal_div_list_id3_old) {
      $(managetempc_submodal_div_list_id3_old).toggle();
      $(managetempc_submodal_div_list_id3).toggle();
      managetempc_submodal_div_list_id3_old = managetempc_submodal_div_list_id3;
    } else {
      $(managetempc_submodal_div_list_id3_old).toggle();
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

let opt1_managetempc_right_list = "";
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


  target.childNodes.forEach((element) => {
    if (element.className === "sublist-check-box") {
      $(element).toggle();
    }
    if (element.className === "sublist-cancel-box") {
      $(element).toggle();
    }
  });

  managetempc_oldLIClassnameModal = target.classList[0];
  if (opt1_managetempc_right_list == target.childNodes[1].innerHTML) {
    opt1_managetempc_right_list = "";
  } else {
    opt1_managetempc_right_list = target.childNodes[1].innerHTML;
  }
  // $("#opt1-left").html(opt1_left_list);
  // $("#opt1-right").html(opt1_managetempc_right_list);
});

function managetempc_deleteOpt1Modal(className) {
  let managetempc_mng_opt2_delete = document.querySelector("#managetempc-mng-opt2-delete");
  managetempc_mng_opt2_delete.addEventListener("click", function () {
    let managetempc_delObj = document.querySelector(`.${className}`);
    managetempc_delObj.remove();
  });
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

managetempdlistmodal.forEach((item, index) => {
  let htmlmanagetempdlistmodal = `<li class="modalmanagetempdlist-item-${index + 1}">
	<p>${item}</p>
	<div class="green-check-box display-none">
		<i class="fas fa-check"></i>
	</div>
	<div class="arrow-li-box arrow-li-box-background-color-1">
		<i class="fas fa-caret-right arrow-li-box-i-color-1"></i>
	</div>
	</li>`;
  managetempd_list.innerHTML += htmlmanagetempdlistmodal;
  /* Update this function By Ashiq */
  let modallistmanagetempd_data1 = "",
    modallistmanagetempd_data2 = "",
    modallistmanagetempd_data3 = "",
    length = 72;
  for (let i = 1; i <= length; i++) {
    let elementHtml = `<li class="option-managetempdmodallist-${index + 1}-${i}">
		<p>Level ${index + 1} - Item ${i}</p>
		<div class="sublist-check-box">
			<i class="fas fa-check"></i>
		</div>
		<div class="sublist-cancel-box" data-toggle="modal" data-target="#delet-manage-tempd-list-modal">
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
  const sub_ul_managetempdmodallist = document.querySelector("#sub-ul-managetempd-modallist");
  sub_ul_managetempdmodallist.innerHTML += `
		<ul class="submodal-list" id="managetempd-submodal-div-list-1-${index + 1}">
			${modallistmanagetempd_data1}
		</ul>
		<ul class="submodal-list" id="managetempd-submodal-div-list-2-${index + 1}">
			${modallistmanagetempd_data2}
		</ul>
		<ul class="submodal-list" id="managetempd-submodal-div-list-3-${index + 1}">
			${modallistmanagetempd_data3}
		</ul>`;

  let managetempd_submodal_div_list_id1 = document.getElementById("managetempd-submodal-div-list-1-" + (index + 1));
  managetempd_submodal_div_list_id1.style.display = "none";
  managetempd_submodal_div_list_id1.style.marginLeft = "300px";

  let managetempd_submodal_div_list_id2 = document.getElementById("managetempd-submodal-div-list-2-" + (index + 1));
  managetempd_submodal_div_list_id2.style.display = "none";
  managetempd_submodal_div_list_id2.style.marginLeft = "600px";

  let managetempd_sub_div_list_id3 = document.getElementById("managetempd-submodal-div-list-3-" + (index + 1));
  managetempd_sub_div_list_id3.style.display = "none";
  managetempd_sub_div_list_id3.style.marginLeft = "900px";
  /* Update End By Ashiq */
});

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
      $(managetempd_submodal_div_list_id1_old).toggle();
      $(managetempd_submodal_div_list_id1).toggle();
      managetempd_submodal_div_list_id1_old = managetempd_submodal_div_list_id1;
    } else {
      $(managetempd_submodal_div_list_id1_old).toggle();
      managetempd_submodal_div_list_id1_old = "";
    }

    if (managetempd_submodal_div_list_id2 !== managetempd_submodal_div_list_id2_old) {
      $(managetempd_submodal_div_list_id2_old).toggle();
      $(managetempd_submodal_div_list_id2).toggle();
      managetempd_submodal_div_list_id2_old = managetempd_submodal_div_list_id2;
    } else {
      $(managetempd_submodal_div_list_id2_old).toggle();
      managetempd_submodal_div_list_id2_old = "";
    }

    if (managetempd_submodal_div_list_id3 !== managetempd_submodal_div_list_id3_old) {
      $(managetempd_submodal_div_list_id3_old).toggle();
      $(managetempd_submodal_div_list_id3).toggle();
      managetempd_submodal_div_list_id3_old = managetempd_submodal_div_list_id3;
    } else {
      $(managetempd_submodal_div_list_id3_old).toggle();
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

let opt1_managetempd_right_list = "";
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


  target.childNodes.forEach((element) => {
    if (element.className === "sublist-check-box") {
      $(element).toggle();
    }
    if (element.className === "sublist-cancel-box") {
      $(element).toggle();
    }
  });

  managetempd_oldLIClassnameModal = target.classList[0];
  if (opt1_managetempd_right_list == target.childNodes[1].innerHTML) {
    opt1_managetempd_right_list = "";
  } else {
    opt1_managetempd_right_list = target.childNodes[1].innerHTML;
  }
  // $("#opt1-left").html(opt1_left_list);
  // $("#opt1-right").html(opt1_managetempd_right_list);
});

function managetempd_deleteOpt1Modal(className) {
  let managetempd_mng_opt2_delete = document.querySelector("#managetempd-mng-opt2-delete");
  managetempd_mng_opt2_delete.addEventListener("click", function () {
    let managetempd_delObj = document.querySelector(`.${className}`);
    managetempd_delObj.remove();
  });
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
