/* =======Added by TANVIR (Copy Paste full file)====== */

$(".multistep-container .form-box .button-row .next").click(function () {
  $(this).parents(".form-box").hide();
  $(this).parents(".form-box").next().show();
});
$(".multistep-container .form-box .button-row .previous").click(function () {
  $(this).parents(".form-box").hide();
  $(this).parents(".form-box").prev().show();
});

// const listSingle = document.querySelectorAll(".single-list-item-design");
const listSingleImg = document.querySelectorAll(".single-list-item-help");
const listSingleLink = document.querySelectorAll(".skip-link-container");
const listSingleTick = document.querySelectorAll(".green-tik-container");
const getTickContainer = document.querySelectorAll(".green-tik-and-skip-link");
// const selectItemText = document.querySelectorAll(".selected-text-danger");
const fileBackgroundColor = document.querySelectorAll(".single-list-item-file-container");
// const fileContainer = document.querySelectorAll(".single-list-item-file");
// const pTopText = document.querySelectorAll(".pTopText");

const targetPopUpImg = document.querySelectorAll(".single-list-item-file-container img");
const imageHoverYellow = document.querySelectorAll(".single-list-item-wrapper");
for (let i = 0; i < targetPopUpImg.length; i++) {
  targetPopUpImg[i].addEventListener("click", function () {
    imageHoverYellow[i].classList.add("imageClickBackground");
  });
  targetPopUpImg[i].addEventListener("mouseover", function () {
    listSingleImg[i].classList.toggle("imageVisibilityHide");
    imageHoverYellow[i].classList.toggle("imageHoverYellowStyle");
  });
  targetPopUpImg[i].addEventListener("mouseout", function () {
    listSingleImg[i].classList.toggle("imageVisibilityHide");
    imageHoverYellow[i].classList.toggle("imageHoverYellowStyle");
  });
}

$("#op-skip1").click(function () {
  $("#op-single-list1").removeClass('imageClickBackground');
  $("#op-single-list2").addClass('imageClickBackground');
});
$("#op-skip2").click(function () {
  $("#op-single-list2").removeClass('imageClickBackground');
  $("#op-single-list3").addClass('imageClickBackground');
});
$("#op-skip3").click(function () {
  $("#op-single-list3").removeClass('imageClickBackground');
  $("#op-single-list4").addClass('imageClickBackground');
});
$("#op-skip4").click(function () {
  $("#op-single-list4").removeClass('imageClickBackground');
});

$("#temp-skip1").click(function () {
  $("#temp-single-list1").removeClass('imageClickBackground');
  $("#temp-single-list2").addClass('imageClickBackground');
});
$("#temp-skip2").click(function () {
  $("#temp-single-list2").removeClass('imageClickBackground');
  $("#temp-single-list3").addClass('imageClickBackground');
});
$("#temp-skip3").click(function () {
  $("#temp-single-list3").removeClass('imageClickBackground');
  $("#temp-single-list4").addClass('imageClickBackground');
});
$("#temp-skip4").click(function () {
  $("#temp-single-list4").removeClass('imageClickBackground');
});

// for (let i = 0; i < listSingle.length; i++) {
//   listSingle[i].addEventListener("click", function () {
//     listSingleLink[i].classList.toggle("hideListDiv");
//     listSingleTick[i].classList.toggle("hideListDiv");
//     // fileContainer[i].classList.toggle("avoid-clicks");
//     fileBackgroundColor[i].classList.toggle("fileContainerColor");
//     // selectItemText[i].classList.toggle("hideListDiv");
//     // pTopText[i].classList.toggle("hideListDiv");
//   });
//   listSingle[i].addEventListener("mouseover", function () {
//     getTickContainer[i].classList.toggle("imageVisibilityHide");
//     listSingleImg[i].classList.toggle("imageVisibilityHide");
//   });
//   listSingle[i].addEventListener("mouseout", function () {
//     getTickContainer[i].classList.toggle("imageVisibilityHide");
//     listSingleImg[i].classList.toggle("imageVisibilityHide");
//   });
// }


// prevent from add/remove style (modal)
//const preventListStyle = document.querySelectorAll(".single-list-item-file-container");
// single-list-item-file-container
//for (let i = 0; i < preventListStyle.length; i++) {
// preventListStyle[i].addEventListener("click", function () {
//   listSingleLink[i].classList.toggle("hideListDiv");
//   listSingleTick[i].classList.toggle("hideListDiv");
//   fileBackgroundColor[i].classList.toggle("fileContainerColor");
// selectItemText[i].classList.toggle("hideListDiv");
// pTopText[i].classList.toggle("hideListDiv");

// let modalId = fileBackgroundColor[i].getAttribute("id");
// if(!$(`#${modalId}`).hasClass("fileContainerColor")){
//   // console.log("File color Class Exists:"+ $(`#${modalId}`).hasClass("fileContainerColor"));
//   $(`#${modalId}-modal`).modal('show'); 
// }
//   });
// }

//code below working fine
$(document).ready(function () {
  $('#my42567').addClass('createGreen');

  $('.zas').click(function () {
    $('#my42567').addClass('createGreen');
    $('#my42998').removeClass('manageGreen');


  });

  $('.pas').click(function () {
    $('#my42998').addClass('manageGreen');
    $('#my42567').removeClass('createGreen');

  });
});



// for Manage Template Page
// Not Working
$(document).ready(function () {
  $('.tab-239').click(function () {
    $(".mytab-239").removeClass('tab-active-239');
    $(".mytab-239[data-id='" + $(this).attr('data-id') + "']").addClass("tab-active-239");
    $(".tab-239").removeClass('active-239');
    $(this).parent().find(".tab-239").addClass('active-239');
  });
});

//code below working fine
$(document).ready(function () {
  $('#my2567').addClass('createGreen');

  $('.zas').click(function () {
    $('#my2567').addClass('createGreen');
    $('#my2998').removeClass('manageGreen');


  });

  $('.pas').click(function () {
    $('#my2998').addClass('manageGreen');
    $('#my2567').removeClass('createGreen');

  });
});


// CHECK BOX GREEN BORDER

var span1 = document.querySelector('span.toggle__select1');
span1.addEventListener('click', function (e) {
  document.getElementById("fieldset_id1").classList.toggle('borderGreen');

  let resetting = $("fieldset#fieldset_id1 legend input[type=checkbox]").prop("checked");
  if (resetting) {
    $("#fieldset_id1 .data-form input")[0].value = "";
    $("#fieldset_id1 .data-form input")[1].value = "";
  }

});

var span2 = document.querySelector('span.toggle__select2');
span2.addEventListener('click', function (e) {
  document.getElementById("fieldset_id2").classList.toggle('borderGreen');

  let resetting = $("fieldset#fieldset_id2 legend input[type=checkbox]").prop("checked");
  if (resetting) {
    $("#fieldset_id2 .data-form input")[0].value = "";
    $("#fieldset_id2 .data-form input")[1].value = "";
  }

});

var span3 = document.querySelector('span.toggle__select3');
span3.addEventListener('click', function (e) {
  document.getElementById("fieldset_id3").classList.toggle('borderGreen');

  let resetting = $("fieldset#fieldset_id3 legend input[type=checkbox]").prop("checked");
  if (resetting) {
    $("#fieldset_id3 .data-form select")[0].selectedIndex = 0;
    $("#fieldset_id3 .data-form select")[1].selectedIndex = 0;
    $("#fieldset_id3 .data-form select")[2].selectedIndex = 0;
    $("#fieldset_id3 .data-form select")[3].selectedIndex = 0;
  }

});


var span4 = document.querySelector('span.toggle__select4');
span4.addEventListener('click', function (e) {
  document.getElementById("fieldset_id4").classList.toggle('borderGreen');

  let resetting = $("fieldset#fieldset_id4 legend input[type=checkbox]").prop("checked");
  if (resetting) {
    $("#fieldset_id4 .data-form input")[0].value = "";
    $("#fieldset_id4 .data-form input")[1].value = "";
  }

});

var span5 = document.querySelector('span.toggle__select5');
span5.addEventListener('click', function (e) {
  document.getElementById("fieldset_id5").classList.toggle('borderGreen');

  let resetting = $("fieldset#fieldset_id5 legend input[type=checkbox]").prop("checked");
  if (resetting) {
    $("#fieldset_id5 .data-form input")[0].value = "";
    $("#fieldset_id5 .data-form input")[1].value = "";
  }

});

var span6 = document.querySelector('span.toggle__select6');
span6.addEventListener('click', function (e) {
  document.getElementById("fieldset_id6").classList.toggle('borderGreen');

  let resetting = $("fieldset#fieldset_id6 legend input[type=checkbox]").prop("checked");
  if (resetting) {
    $("#fieldset_id6 .data-form select")[0].selectedIndex = 0;
    $("#fieldset_id6 .data-form select")[1].selectedIndex = 0;
  }

});

var span7 = document.querySelector('span.toggle__select7');
span7.addEventListener('click', function (e) {
  document.getElementById("fieldset_id7").classList.toggle('borderGreen');

  let resetting = $("fieldset#fieldset_id7 legend input[type=checkbox]").prop("checked");
  if (resetting) {
    $("#fieldset_id7 .data-form select")[0].selectedIndex = 0;
    $("#fieldset_id7 .data-form select")[1].selectedIndex = 0;
  }

});

var span8 = document.querySelector('span.toggle__select8');
span8.addEventListener('click', function (e) {
  document.getElementById("fieldset_id8").classList.toggle('borderGreen');

  let resetting = $("fieldset#fieldset_id8 legend input[type=checkbox]").prop("checked");
  if (resetting) {
    $("#fieldset_id8 .data-form input")[0].value = "";
    $("#fieldset_id8 .data-form input")[1].value = "";
  }

});

var span9 = document.querySelector('span.toggle__select9');
span9.addEventListener('click', function (e) {
  document.getElementById("fieldset_id9").classList.toggle('borderGreen');

  let resetting = $("fieldset#fieldset_id9 legend input[type=checkbox]").prop("checked");
  if (resetting) {
    $("#fieldset_id9 .data-form input")[0].value = "";
    $("#fieldset_id9 .data-form input")[1].value = "";
  }

});

var span10 = document.querySelector('span.toggle__select10');
span10.addEventListener('click', function (e) {
  document.getElementById("fieldset_id10").classList.toggle('borderGreen');
});

var span11 = document.querySelector('span.toggle__select11');
span11.addEventListener('click', function (e) {
  document.getElementById("fieldset_id11").classList.toggle('borderGreen');
});

// MANAGE TEMPLATE CHECK BOX GREEN BORDER
var span21 = document.querySelector('span.toggle__select21');
span21.addEventListener('click', function (e) {
  document.getElementById("fieldset_id21").classList.toggle('borderGreen');

  let resetting = $("fieldset#fieldset_id21 legend input[type=checkbox]").prop("checked");
  if (resetting) {
    $("#fieldset_id21 .data-form input")[0].value = "";
    $("#fieldset_id21 .data-form input")[1].value = "";
  }

});

var span22 = document.querySelector('span.toggle__select22');
span22.addEventListener('click', function (e) {
  document.getElementById("fieldset_id22").classList.toggle('borderGreen');

  let resetting = $("fieldset#fieldset_id22 legend input[type=checkbox]").prop("checked");
  if (resetting) {
    $("#fieldset_id22 .data-form input")[0].value = "";
    $("#fieldset_id22 .data-form input")[1].value = "";
  }

});

var span23 = document.querySelector('span.toggle__select23');
span23.addEventListener('click', function (e) {
  document.getElementById("fieldset_id23").classList.toggle('borderGreen');

  let resetting = $("fieldset#fieldset_id23 legend input[type=checkbox]").prop("checked");
  if (resetting) {
    $("#fieldset_id23 .data-form select")[0].selectedIndex = 0;
    $("#fieldset_id23 .data-form select")[1].selectedIndex = 0;
    $("#fieldset_id23 .data-form select")[2].selectedIndex = 0;
    $("#fieldset_id23 .data-form select")[3].selectedIndex = 0;
  }

});


var span24 = document.querySelector('span.toggle__select24');
span24.addEventListener('click', function (e) {
  document.getElementById("fieldset_id24").classList.toggle('borderGreen');

  let resetting = $("fieldset#fieldset_id24 legend input[type=checkbox]").prop("checked");
  if (resetting) {
    $("#fieldset_id24 .data-form input")[0].value = "";
    $("#fieldset_id24 .data-form input")[1].value = "";
  }

});

var span25 = document.querySelector('span.toggle__select25');
span25.addEventListener('click', function (e) {
  document.getElementById("fieldset_id25").classList.toggle('borderGreen');

  let resetting = $("fieldset#fieldset_id25 legend input[type=checkbox]").prop("checked");
  if (resetting) {
    $("#fieldset_id25 .data-form input")[0].value = "";
    $("#fieldset_id25 .data-form input")[1].value = "";
  }

});

var span26 = document.querySelector('span.toggle__select26');
span26.addEventListener('click', function (e) {
  document.getElementById("fieldset_id26").classList.toggle('borderGreen');

  let resetting = $("fieldset#fieldset_id26 legend input[type=checkbox]").prop("checked");
  if (resetting) {
    $("#fieldset_id26 .data-form select")[0].selectedIndex = 0;
    $("#fieldset_id26 .data-form select")[1].selectedIndex = 0;
  }

});

var span27 = document.querySelector('span.toggle__select27');
span27.addEventListener('click', function (e) {
  document.getElementById("fieldset_id27").classList.toggle('borderGreen');

  let resetting = $("fieldset#fieldset_id27 legend input[type=checkbox]").prop("checked");
  if (resetting) {
    $("#fieldset_id27 .data-form select")[0].selectedIndex = 0;
    $("#fieldset_id27 .data-form select")[1].selectedIndex = 0;
  }

});

var span28 = document.querySelector('span.toggle__select28');
span28.addEventListener('click', function (e) {
  document.getElementById("fieldset_id28").classList.toggle('borderGreen');

  let resetting = $("fieldset#fieldset_id28 legend input[type=checkbox]").prop("checked");
  if (resetting) {
    $("#fieldset_id28 .data-form input")[0].value = "";
    $("#fieldset_id28 .data-form input")[1].value = "";
  }

});

var span29 = document.querySelector('span.toggle__select29');
span29.addEventListener('click', function (e) {
  document.getElementById("fieldset_id29").classList.toggle('borderGreen');

  let resetting = $("fieldset#fieldset_id29 legend input[type=checkbox]").prop("checked");
  if (resetting) {
    $("#fieldset_id29 .data-form input")[0].value = "";
    $("#fieldset_id29 .data-form input")[1].value = "";
  }

});

var span210 = document.querySelector('span.toggle__select210');
span210.addEventListener('click', function (e) {
  document.getElementById("fieldset_id210").classList.toggle('borderGreen');
});

var span211 = document.querySelector('span.toggle__select211');
span211.addEventListener('click', function (e) {
  document.getElementById("fieldset_id211").classList.toggle('borderGreen');
});

// =========================================
// Below Section will be added by Tanvir 
// =========================================

// Option 1 Name Sortable (drag drop) 
//Left side drag
$(function () {
  $("#leftSideDrag_op1").sortable();
  $("#leftSideDrag_op1").disableSelection();
});

//Right side drag
$(function () {
  $("#rightSideDrag_op1").sortable();
  $("#rightSideDrag_op1").disableSelection();
});

// Manage Data Sortable (drag drop) 
//Left side drag
$(function () {
  $("#mnDt_LfSide").sortable();
  $("#mnDt_LfSide").disableSelection();
});
//Right side drag
$(function () {
  $("#mnDt_RtSide").sortable();
  $("#mnDt_RtSide").disableSelection();
});

// Manage Template Sortable (drag drop) 
//Left side drag
$(function () {
  $("#mnTemp_leftSideDrag").sortable();
  $("#mnTemp_leftSideDrag").disableSelection();
});
//Right side drag
$(function () {
  $("#mnTemp_rightSideDrag").sortable();
  $("#mnTemp_rightSideDrag").disableSelection();
});

// Manage Template Popup Scripts starts 
// Save start close button operation
$("#close-btn").on("click", function () {
  // $("#save_start_button_popup").hide();
  $('#mnTemp_saveStart').modal('hide');
});


// Manage Template Time Picker Icon Click Operation Starts
$("#time_picker_close-btn").on("click", function () {
  // $("#time_picker_button_popup").hide();
  $('#mnTemp_timePicker').modal('hide');
});

function setInputFilter(textbox, inputFilter) {
  [
    "input",
    "keydown",
    "keyup",
  ].forEach(function (event) {
    textbox.addEventListener(event, function () {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
      } else {
        this.value = "";
      }
    });
  });
}

function inputHour(hour) {
  const hour_input = document.querySelector("#hour_input");
  let regexH = /^(0?[1-9]{1})$|^(1[0-2]{1})$/g;
  let timeH = +hour_input.value + hour;
  if (regexH.test(timeH)) {
    hour_input.value = timeH;
    if (timeH < 10) {
      hour_input.value = `0${timeH}`
    }
  }
}
setInputFilter(document.querySelector("#hour_input"), function (value) {
  let regexH = /^(0?[1-9]{1})$|^(1[0-2]{1})$|^(\S?)$/g;
  return regexH.test(value);
});
document.querySelector("#hour_up").addEventListener("click", function () {
  inputHour(1)
});
document.querySelector("#hour_down").addEventListener("click", function () {
  inputHour(-1)
});

function inputMinute(min) {
  const min_input = document.querySelector("#min_input");
  let regexM = /^([0-5]?[0-9]{1})$/g;
  let timeM = +min_input.value + min;
  if (regexM.test(timeM)) {
    min_input.value = timeM;
    if (timeM < 10) {
      min_input.value = `0${timeM}`
    }
  }
}
setInputFilter(document.querySelector("#min_input"), function (value) {
  let regexM = /^([0-5]?[0-9]{1})$|^(\S?)$/g;
  return regexM.test(value);
});
document.querySelector("#min_up").addEventListener("click", function () {
  inputMinute(1)
});
document.querySelector("#min_down").addEventListener("click", function () {
  inputMinute(-1)
});

let inputId = "#timepicker_mnTemp1";
function setTimeValue() {
  let timeButton = document.querySelector("#timeButton");
  timeButton.addEventListener("click", function () {
    let formatTime = formatAMPM(new Date());
    let hours = document.querySelector("#hour_input").value === "" ? formatTime.hours : document.querySelector("#hour_input").value;
    let mins = document.querySelector("#min_input").value === "" ? formatTime.minutes : document.querySelector("#min_input").value;
    let ampm_check = document.querySelector("#ampmInputValue").value;
    document.querySelector(inputId).value = `${hours}:${mins} ${ampm_check.toLowerCase()}`;
    $('#mnTemp_timePicker').modal('hide');
  });
}

$("#TP_time1").click(function () {
  inputId = "#timepicker_mnTemp1";
  let currentTime = new Date();
  let formatTime = formatAMPM(currentTime);
  document.querySelector("#hour_input").value = formatTime.hours;
  document.querySelector("#min_input").value = formatTime.minutes;
  document.querySelector("#ampmInputValue").value = formatTime.ampm;
  setTimeValue();
  $('.ampm-picker .period').click();

  let divPosition = document.querySelector("#TP_time1").getBoundingClientRect();
  $("#mnTemp_timePicker .modal-dialog").css({
    top: ((divPosition.bottom) + 3),
    left: ((divPosition.left) + 3)
  });

});

$("#TP_time2").click(function () {
  inputId = "#timepicker_mnTemp2";
  let currentTime = new Date();
  let formatTime = formatAMPM(currentTime);
  document.querySelector("#hour_input").value = formatTime.hours;
  document.querySelector("#min_input").value = formatTime.minutes;
  setTimeValue();
  $('.ampm-picker .period').click();

  let divPosition = document.querySelector("#TP_time2").getBoundingClientRect();
  $("#mnTemp_timePicker .modal-dialog").css({
    top: ((divPosition.bottom) + 3),
    left: ((divPosition.left) + 3)
  });

});

$("#TP_time1_mData").click(function () {
  inputId = "#timepicker_mData1";
  let currentTime = new Date();
  let formatTime = formatAMPM(currentTime);
  document.querySelector("#hour_input").value = formatTime.hours;
  document.querySelector("#min_input").value = formatTime.minutes;
  document.querySelector("#ampmInputValue").value = formatTime.ampm;
  setTimeValue();
  $('.ampm-picker .period').click();

  let divPosition = document.querySelector("#TP_time1_mData").getBoundingClientRect();
  $("#mnTemp_timePicker .modal-dialog").css({
    top: ((divPosition.bottom) + 3),
    left: ((divPosition.left) + 3)
  });

});

$("#TP_time2_mData").click(function () {
  inputId = "#timepicker_mData2";
  let currentTime = new Date();
  let formatTime = formatAMPM(currentTime);
  document.querySelector("#hour_input").value = formatTime.hours;
  document.querySelector("#min_input").value = formatTime.minutes;
  setTimeValue();
  $('.ampm-picker .period').click();

  let divPosition = document.querySelector("#TP_time2_mData").getBoundingClientRect();
  $("#mnTemp_timePicker .modal-dialog").css({
    top: ((divPosition.bottom) + 3),
    left: ((divPosition.left) + 3)
  });

});

function formatAMPM(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours %= 12;
  hours = hours || 12;
  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  const strTime = {
    hours, minutes, ampm
  };
  return strTime;
};


// added by Tanvir (6-2-21) 
$('.ampm-picker .period').click(function (e) {
  let clicked = e.target.innerHTML;
  let selected = document.querySelector(".chosen-period").innerHTML;
  if (clicked !== selected) {
    // highlight the choice (de-highlight any previous choice)
    $('.chosen-period').removeClass('chosen-period');
    $(this).addClass('chosen-period');

    let period_am = document.querySelector(".am");
    let period_pm = document.querySelector(".pm");
    period_am.classList.add("pm");
    period_am.classList.remove("am");
    period_pm.classList.add("am");
    period_pm.classList.remove("pm");
    let ampmInputValue = document.querySelector("#ampmInputValue");
    ampmInputValue.value = clicked;
  }
});


$(".set_select").mouseenter(function (event) {
  var element = document.getElementById("sub2__table");
  element.classList.toggle("dispHideShow");
});

$(document).click(function (e) {
  if (!$(e.target).closest('.text-editor-table-wrapper').length) {
    // alert('click outside!');
    $("#sub__table").addClass("dispHideShow");
    $("#sub2__table").addClass("dispHideShow");
  }
});

// $("#sub2-editor-table td").click(function() {
//   alert(this.id); // or alert($(this).attr('id'));
// });

// manage template hide show save start button 
$("#next-show-save-start-mnTemp").click(function () {
  $('#saveStartTarget-mnTemp').removeClass('save-start-class-hide-show-mnTemp');
});

$("#prev-hide-save-start-mnTemp").click(function () {
  $('#saveStartTarget-mnTemp').addClass('save-start-class-hide-show-mnTemp');
});

// Manage data Option 4 template hide show save start button 
$("#next-show-save-start-op4").click(function () {
  $('#saveStartTarget-op4').removeClass('save-start-class-hide-show-op4');
});

$("#prev-hide-save-start-op4").click(function () {
  $('#saveStartTarget-op4').addClass('save-start-class-hide-show-op4');
});


let dateFormat_sm3 = "mm/dd/yy";
let sm3SecA_from_date = $("#datepicker_field_set11").datepicker({
  defaultDate: "+1w",
  numberOfMonths: 1
}).on("change", function () {
  sm3SecA_to_date.datepicker("option", "minDate", getDateSm3(this));
});

let sm3SecA_to_date = $("#datepicker_field_set12").datepicker({
  defaultDate: "+1w",
  numberOfMonths: 1
}).on("change", function () {
  sm3SecA_from_date.datepicker("option", "maxDate", getDateSm3(this));
});

function getDateSm3(element) {
  let date_sm3;
  try {
    date_sm3 = $.datepicker.parseDate(dateFormat_sm3, element.value);
  } catch (error) {
    date_sm3 = null;
  }
  return date_sm3;
}

$("#datepicker_field_set11_icon").click(function () {
  $("#datepicker_field_set11").focus();
});
$("#datepicker_field_set12_icon").click(function () {
  $("#datepicker_field_set12").focus();
});

// Option 4 Save Draft Button Controlling (Loading Popup and Thank You Modal)
function saveDraftLoadingThankOp4(){
  $('#submitting_Info').modal('show');

  // Option 4 submitting draft information
  let $targetingTextSubmit = $("#submitting_file_info");
  $targetingTextSubmit.html("Submitting section 1 information...");
  let submitFileInfo = [ 
          "Submitting section 2 information...",
          "Submitting section 3 information...", 
          "Submitting section 4 information...",
          "Submitting section 5 information...",
          "Finishing..."];

  for (let i = 1; i <= 5; ++i) {
    (function(index) {
      setTimeout(function() { 
        $targetingTextSubmit.html(submitFileInfo[index-1]);
      }, i * 2000);
    })(i);
  }

  setTimeout(function() { 
    $('#submitting_Info').modal('hide');
    $('#saveDraftThankYouModal').modal('show');
  }, 12000);

}

$(".btn-save-draft").click(function() {
  let initState = $(this).html();
  $(this).html('<i class="fa fa-spinner fa-spin"></i> Submitting...');
  $(this).addClass('disabled');
  let $this = $(this);
  setTimeout(function() {
      $this.removeClass('disabled');
      $this.html(initState);
  }, 12000);
});