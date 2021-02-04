/* =======Added by TANVIR (Copy Paste full file)====== */

$(".multistep-container .form-box .button-row .next").click(function () {
  //$(this).parents(".form-box").fadeOut('fast');
  //$(this).parents(".form-box").next().fadeIn('fast');
  $(this).parents(".form-box").hide();
  $(this).parents(".form-box").next().show();
});
$(".multistep-container .form-box .button-row .previous").click(function () {
  //$(this).parents(".form-box").fadeOut('fast');
  //$(this).parents(".form-box").prev().fadeIn('fast');
  $(this).parents(".form-box").hide();
  $(this).parents(".form-box").prev().show();
});
// $("#datepicker-3").click(function () {
//     $("#datepicker-3").datepicker();
//     $("#datepicker-3").datepicker("setDate", "10w+1");
// });

const listSingle = document.querySelectorAll(".single-list-item-design");
const listSingleImg = document.querySelectorAll(".single-list-item-help");
const listSingleLink = document.querySelectorAll(".skip-link-container");
const listSingleTick = document.querySelectorAll(".green-tik-container");
const getTickContainer = document.querySelectorAll(".green-tik-and-skip-link");
const selectItemText = document.querySelectorAll(".selected-text-danger");
const fileBackgroundColor = document.querySelectorAll(".single-list-item-file-container");
const pTopText = document.querySelectorAll(".pTopText");

for (let i = 0; i < listSingle.length; i++) {
  listSingle[i].addEventListener("click", function () {
    listSingleLink[i].classList.toggle("hideListDiv");
    listSingleTick[i].classList.toggle("hideListDiv");
    fileBackgroundColor[i].classList.toggle("fileContainerColor");
    selectItemText[i].classList.toggle("hideListDiv");
    pTopText[i].classList.toggle("hideListDiv");
  });
  listSingle[i].addEventListener("mouseover", function () {
    getTickContainer[i].classList.toggle("imageVisibilityHide");
    listSingleImg[i].classList.toggle("imageVisibilityHide");
  });
  listSingle[i].addEventListener("mouseout", function () {
    getTickContainer[i].classList.toggle("imageVisibilityHide");
    listSingleImg[i].classList.toggle("imageVisibilityHide");
  });
}

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
  });

  var span2 = document.querySelector('span.toggle__select2');
  span2.addEventListener('click', function (e) {
    document.getElementById("fieldset_id2").classList.toggle('borderGreen');
  });

  var span3 = document.querySelector('span.toggle__select3');
  span3.addEventListener('click', function (e) {
    document.getElementById("fieldset_id3").classList.toggle('borderGreen');
  });

  
  var span4 = document.querySelector('span.toggle__select4');
  span4.addEventListener('click', function (e) {
    document.getElementById("fieldset_id4").classList.toggle('borderGreen');
  });

  var span5 = document.querySelector('span.toggle__select5');
  span5.addEventListener('click', function (e) {
    document.getElementById("fieldset_id5").classList.toggle('borderGreen');
  });

  var span6 = document.querySelector('span.toggle__select6');
  span6.addEventListener('click', function (e) {
    document.getElementById("fieldset_id6").classList.toggle('borderGreen');
  });

  var span7 = document.querySelector('span.toggle__select7');
  span7.addEventListener('click', function (e) {
    document.getElementById("fieldset_id7").classList.toggle('borderGreen');
  });

  var span8 = document.querySelector('span.toggle__select8');
  span8.addEventListener('click', function (e) {
    document.getElementById("fieldset_id8").classList.toggle('borderGreen');
  });

  var span9 = document.querySelector('span.toggle__select9');
  span9.addEventListener('click', function (e) {
    document.getElementById("fieldset_id9").classList.toggle('borderGreen');
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
});

var span22 = document.querySelector('span.toggle__select22');
span22.addEventListener('click', function (e) {
  document.getElementById("fieldset_id22").classList.toggle('borderGreen');
});

var span23 = document.querySelector('span.toggle__select23');
span23.addEventListener('click', function (e) {
  document.getElementById("fieldset_id23").classList.toggle('borderGreen');
});


var span24 = document.querySelector('span.toggle__select24');
span24.addEventListener('click', function (e) {
  document.getElementById("fieldset_id24").classList.toggle('borderGreen');
});

var span25 = document.querySelector('span.toggle__select25');
span25.addEventListener('click', function (e) {
  document.getElementById("fieldset_id25").classList.toggle('borderGreen');
});

var span26 = document.querySelector('span.toggle__select26');
span26.addEventListener('click', function (e) {
  document.getElementById("fieldset_id26").classList.toggle('borderGreen');
});

var span27 = document.querySelector('span.toggle__select27');
span27.addEventListener('click', function (e) {
  document.getElementById("fieldset_id27").classList.toggle('borderGreen');
});

var span28 = document.querySelector('span.toggle__select28');
span28.addEventListener('click', function (e) {
  document.getElementById("fieldset_id28").classList.toggle('borderGreen');
});

var span29 = document.querySelector('span.toggle__select29');
span29.addEventListener('click', function (e) {
  document.getElementById("fieldset_id29").classList.toggle('borderGreen');
});

var span210 = document.querySelector('span.toggle__select210');
span210.addEventListener('click', function (e) {
  document.getElementById("fieldset_id210").classList.toggle('borderGreen');
});

var span211 = document.querySelector('span.toggle__select211');
span211.addEventListener('click', function (e) {
  document.getElementById("fieldset_id211").classList.toggle('borderGreen');
});