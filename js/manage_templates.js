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

// ROW DETAILS WINDOWO DROPDOWN START

// ROW DETAILS WINDOWO DROPDOWN END