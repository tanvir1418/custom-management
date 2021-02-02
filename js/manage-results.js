// MANAGE RESULTS list item start

// const sub_ul_list_11 = document.querySelector(".sub-ul-list-11");
// const sub_ul_list_22 = document.querySelector(".sub-ul-list-22");
// const sub_ul_list_33 = document.querySelector(".sub-ul-list-33");
const left_list_404 = document.querySelector(".left-list-404");

// Added by ASHIQ
const listItemData404 = [
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

listItemData404.forEach((item, index) => {
    let htmllist = `<li class="list-item-404-${index + 1}">
    <p>${item}</p>
    <div class="tik-box display-none">
      <i class="fas fa-check"></i>
    </div>
    <div class="arrow-404 arrow-404-background-color-1">
      <i class="fas fa-caret-right arrow-404-i-color-1"></i>
    </div>
    </li>`;
    left_list_404.innerHTML += htmllist;
    /* Update this function By Ashiq */
    let list_data1 = "",
        list_data2 = "",
        list_data3 = "",
        length = 60;
    for (let i = 1; i <= length; i++) {
        if (length < 61) {
            if (i <= 20) {
                list_data1 += `<li class="result-list-1-${i}">
                    <p>Level ${index + 1} - Item ${i}</p>
                    <div class="sublist-check-box-404">
                        <i class="fas fa-check"></i>
                    </div>
                    <div class="sublist-cancel-box-404">
                        <i class="fas fa-times"></i>
                    </div>
                </li>`;
            } else if (i >= 21 && i <= 40) {
                list_data2 += `<li class="result-list-2-${i}">
                    <p>Level ${index + 1} - Item ${i}</p>
                    <div class="sublist-check-box-404">
                        <i class="fas fa-check"></i>
                    </div>
                    <div class="sublist-cancel-box-404">
                        <i class="fas fa-times"></i>
                    </div>
                </li>`;
            } else {
                list_data3 += `<li class="result-list-3-${i}">
                    <p>Level ${index + 1} - Item ${i}</p>
                    <div class="sublist-check-box-404">
                        <i class="fas fa-check"></i>
                    </div>
                    <div class="sublist-cancel-box-404">
                        <i class="fas fa-times"></i>
                    </div>
                </li>`;
            }
        } else {
            let divide = Math.floor(length / 3);
            let len = divide + (length % 3);
            if (i <= len) {
                list_data1 += `<li class="result-list-1-${i}">
                    <p>Level ${index + 1} - Item ${i}</p>
                    <div class="sublist-check-box-404">
                        <i class="fas fa-check"></i>
                    </div>
                    <div class="sublist-cancel-box-404">
                        <i class="fas fa-times"></i>
                    </div>
                </li>`;
            } else if (i > len && i <= len + divide) {
                list_data2 += `<li class="result-list-2-${i}">
                    <p>Level ${index + 1} - Item ${i}</p>
                    <div class="sublist-check-box-404">
                        <i class="fas fa-check"></i>
                    </div>
                    <div class="sublist-cancel-box-404">
                        <i class="fas fa-times"></i>
                    </div>
                </li>`;
            } else {
                list_data3 += `<li class="result-list-3-${i}">
                    <p>Level ${index + 1} - Item ${i}</p>
                    <div class="sublist-check-box-404">
                        <i class="fas fa-check"></i>
                    </div>
                    <div class="sublist-cancel-box-404">
                        <i class="fas fa-times"></i>
                    </div>
                </li>`;
            }
        }
    }

    const div_sub_ul_li_list = document.querySelector("#div-sub-ul-li-list");
    div_sub_ul_li_list.innerHTML += `<ul class="right-list-404" id="sub-ul-list-1-${index + 1}">
        ${list_data1}
    </ul>
    <ul class="right-list-404" id="sub-ul-list-2-${index + 1}">
        ${list_data2}
    </ul>
    <ul class="right-list-404" id="sub-ul-list-3-${index + 1}">
        ${list_data3}
    </ul>`;

    let sub_ul_list_id1 = document.getElementById("sub-ul-list-1-" + (index + 1));
    sub_ul_list_id1.style.display = "none";
    sub_ul_list_id1.style.marginLeft = "300px";

    let sub_ul_list_id2 = document.getElementById("sub-ul-list-2-" + (index + 1));
    sub_ul_list_id2.style.display = "none";
    sub_ul_list_id2.style.marginLeft = "580px";

    let sub_ul_list_id3 = document.getElementById("sub-ul-list-3-" + (index + 1));
    sub_ul_list_id3.style.display = "none";
    sub_ul_list_id3.style.marginLeft = "860px";
    /* Update End By Ashiq */
});
/* New Function Start */
let sub_ul_list_id1_old = "",
    sub_ul_list_id2_old = "",
    sub_ul_list_id3_old = "";

function item_li_click_handle(listClassName) {
    let level_no = listClassName.match(/\d+/g)[1];
    if (level_no != null) {
        const sub_ul_list_id1 = "#sub-ul-list-1-" + level_no,
            sub_ul_list_id2 = "#sub-ul-list-2-" + level_no,
            sub_ul_list_id3 = "#sub-ul-list-3-" + level_no;
        if (sub_ul_list_id1 !== sub_ul_list_id1_old) {
            $(sub_ul_list_id1_old).toggle();
            $(sub_ul_list_id1).toggle();
            sub_ul_list_id1_old = sub_ul_list_id1;
        } else {
            $(sub_ul_list_id1_old).toggle();
            sub_ul_list_id1_old = "";
        }

        if (sub_ul_list_id2 !== sub_ul_list_id2_old) {
            $(sub_ul_list_id2_old).toggle();
            $(sub_ul_list_id2).toggle();
            sub_ul_list_id2_old = sub_ul_list_id2;
        } else {
            $(sub_ul_list_id2_old).toggle();
            sub_ul_list_id2_old = "";
        }

        if (sub_ul_list_id3 !== sub_ul_list_id3_old) {
            $(sub_ul_list_id3_old).toggle();
            $(sub_ul_list_id3).toggle();
            sub_ul_list_id3_old = sub_ul_list_id3;
        } else {
            $(sub_ul_list_id3_old).toggle();
            sub_ul_list_id3_old = "";
        }
    }
}
/* New Function End */
var left_list_data = "";

left_list_404.addEventListener("click", function (e) {
    let target = e.target;
    const elementName = ["DIV", "P"];
    if (elementName.includes(target.tagName)) {
        target = target.parentNode;
    } else if (target.tagName === "I") {
        target = target.parentNode.parentNode;
    }

    $(".highlight_404 .arrow-404-i-color-2").addClass("arrow-404-i-color-1");
    $(".highlight_404 .arrow-404-i-color-2").removeClass(
        "arrow-404-i-color-2"
    );
    $(".highlight_404 .display-block").addClass("display-none");
    $(".highlight_404 .display-block").removeClass("display-block");
    $(".highlight_404 .arrow-404-background-color-2").addClass(
        "arrow-404-background-color-1"
    );
    $(".highlight_404 .arrow-404-background-color-2").removeClass(
        "arrow-404-background-color-2"
    );
    $(".highlight_404").removeClass("highlight_404");

    target.classList.add("highlight_404");
    target.childNodes[3].classList.remove("display-none");
    target.childNodes[3].classList.add("display-block");
    target.childNodes[5].classList.remove("arrow-404-background-color-1");
    target.childNodes[5].classList.add("arrow-404-background-color-2");
    target.childNodes[5].childNodes[1].classList.remove("arrow-404-i-color-1");
    target.childNodes[5].childNodes[1].classList.add("arrow-404-i-color-2");
    left_list_data = target.childNodes[1].innerHTML;
    item_li_click_handle(target.classList[0]);
});

const list_left_item_1 = document.querySelector(".list-item-404-1");
// End here by ASHIQ


const tik_box = document.querySelector(".tik-box");
const sublist_check_box_404 = document.querySelector(".right-list-404 .sublist-check-box-404");
const sublist_cancel_box_404 = document.querySelector(".right-list-404 .sublist-cancel-box-404");
// const result_list_1 = document.querySelector(".result-list-1");
const arrow_404 = document.querySelector(".left-list-404 li .arrow-404");
const arrow_icon = document.querySelector(".left-list-404 li .arrow-404 i");

// sub_ul_list_11.style.display = "none";
// sub_ul_list_22.style.display = "none";
// sub_ul_list_33.style.display = "none";

// $(list_left_item_1).click(function () {

//     $(sub_ul_list_11).toggle();
//     sub_ul_list_11.style.marginLeft = "300px";

//     $(sub_ul_list_22).toggle();
//     sub_ul_list_22.style.marginLeft = "580px";

//     $(sub_ul_list_33).toggle();
//     sub_ul_list_33.style.marginLeft = "860px";

// });

// result_list_1.onclick = () => {
//     sublist_cancel_box_404.style.display = "none";
//     sublist_check_box_404.style.display = "block";
//     $(sublist_cancel_box_404).toggle();
//     $(sublist_check_box_404).toggle();
// };


/* ================ Scroll Down START ============== */
$(document).ready(function () {
    $(".results-scroll-down").click(function () {
        const table_scroll_404 = document.querySelector(".table-scroll-404");
        $(".table-scroll-404").animate({
                scrollTop: table_scroll_404.scrollTop + 100,
            },
            250
        );
    });
});

/* ================ Scroll Down END ============== */

// MANAGE RESULTS list item end

// ====== LIST ITEM TO CHART PAGE START ============

const select_table = document.querySelector(".select-item-table");
const chartPage = document.querySelector("#chartPage");
chartPage.style.display = "none";
chartPage.style.opacity = "0";

$("#div-sub-ul-li-list").click(function (e) {
    let target = e.target;
    const elementName = ["DIV", "P"];
    if (elementName.includes(target.tagName)) {
        target = target.parentNode;
    } else if (target.tagName === "I") {
        target = target.parentNode.parentNode;
    } else if(target.tagName!=="LI"){
        return;
    }
    // console.log(target.childNodes[1].innerHTML);
    let dataList = target.childNodes[1].innerHTML;
    gotoChartPage(dataList, left_list_data);
});

// result_list_1.onclick = () => { ASHIQ
function gotoChartPage(dataList,left_data) {
    select_table.style.display = "none";
    chartPage.style.display = "block";
    chartPage.style.opacity = "1";

    document.querySelector("#chartPage .chart-title .left-item").innerHTML=left_data;
    document.querySelector("#chartPage .chart-title .right-item").innerHTML=dataList;

    /*============----------ASHIQ----------=============*/
    // let obj1 = document.getElementById("scorer-meter-1");
    // let p_element1 = document.getElementById("value-of-scorer-meter-1");
    // window.setInterval(function () {
    //     let matrix = getComputedStyle(obj1).getPropertyValue("transform");
    //     let values = matrix.split("(")[1].split(")")[0].split(",");
    //     let angle = Math.round(
    //         Math.atan2(values[1], values[0]) * (180 / Math.PI)
    //     );
    //     p_element1.innerHTML = `${parseFloat(angle / 1.8).toFixed(2)}%`;
    //     // console.log(angle);
    // }, 100);

    // let obj2 = document.getElementById("scorer-meter-2");
    // let p_element2 = document.getElementById("value-of-scorer-meter-2");
    // window.setInterval(function () {
    //     let matrix = getComputedStyle(obj2).getPropertyValue("transform");
    //     let values = matrix.split("(")[1].split(")")[0].split(",");
    //     let angle = Math.round(
    //         Math.atan2(values[1], values[0]) * (180 / Math.PI)
    //     );
    //     p_element2.innerHTML = `${parseFloat(angle / 1.8).toFixed(2)}%`;
    //     // console.log(angle);
    // }, 100);

    // let obj3 = document.getElementById("scorer-meter-3");
    // let p_element3 = document.getElementById("value-of-scorer-meter-3");
    // window.setInterval(function () {
    //     let matrix = getComputedStyle(obj3).getPropertyValue("transform");
    //     let values = matrix.split("(")[1].split(")")[0].split(",");
    //     let angle = Math.round(
    //         Math.atan2(values[1], values[0]) * (180 / Math.PI)
    //     );
    //     p_element3.innerHTML = `${parseFloat(angle / 1.8).toFixed(2)}%`;
    //     // console.log(angle);
    // }, 100);
    /* --------- END ----------- */
};
// ====== LIST ITEM TO CHART PAGE END ============

// ======= TABS START ======

function openPage(pageName, elmnt) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";

}

document.getElementById("defaultOpen").click();

$("#defaultOpen").addClass("active-tab-81");
$(".tablink").click(function () {

    $(".tablink").removeClass("active-tab-81");
    $(this).addClass("active-tab-81");
})

// ======= TABS END ======

// ======= INNER TABS START ======

function openPage(innerpageName, elmnt) {
    var j, inner_tabcontent, inner_tablinks;
    inner_tabcontent = document.getElementsByClassName("inner-tabcontent");
    for (j = 0; j < inner_tabcontent.length; j++) {
        inner_tabcontent[j].style.display = "none";
    }
    inner_tablinks = document.getElementsByClassName("inner-tablink");
    for (j = 0; j < inner_tablinks.length; j++) {
        inner_tablinks[j].style.backgroundColor = "";
    }
    document.getElementById(innerpageName).style.display = "block";

}

document.getElementById("firstOpen").click();

$("#firstOpen").addClass("inner-active-tab-81");
$(".inner-tablink").click(function () {

    $(".inner-tablink").removeClass("inner-active-tab-81");
    $(this).addClass("inner-active-tab-81");
})

// ======= INNER TABS END ======

// ============== DISPLAY 2 SPEEDOMETER START ====================

$(".progressmeter").each(function () {

    var $bar = $(this).find(".bar");
    var $val = $(this).find(".progress-value");
    var perc = parseInt($val.text(), 10);
    $({
        p: 0
    }).animate({
        p: perc
    }, {
        duration: 3000,
        easing: "swing",
        step: function (p) {
            $bar.css({
                transform: "rotate(" + (45.00 + (p * 1.8)) +
                    "deg)", // 100%=180° so: ° = % * 1.8
                // 45 is to add the needed rotation to have the green borders at the bottom
            });
            $val.text(p | 0);
        }
    });
});

// ============== DISPLAY 2 SPEEDOMETER END ====================

// ================ DISPLAY 3 CHART PAGE START ================

// ================ DISPLAY 3 CHART PAGE END ================


// ================ DISPLAY 4 TABLE DATA START ================
var array = [
        ["2019", "100%", "-58.63%", "15.14%", "54.1%", "-76.32%", "24.08%", "23.64%", "-92.86%", "53.59%", "49.4%",
            "-56.54%", "87.45%"
        ],
        ["2018", "-100%", "58.63%", "-15.14%", "54.1%", "-76.32%", "24.08%", "-23.64%", "92.86%", "-53.59%", "-49.4%",
            "56.54%", "-87.45%"
        ],
        ["2017", "100%", "-58.63%", "15.14%", "", "76.32%", "24.08%", "23.64%", "-92.86%", "53.59%", "49.4%", "-56.54%",
            "87.45%"
        ],
        ["2016", "-100%", "58.63%", "-15.14%", "54.1%", "-76.32%", "24.08%", "-23.64%", "", "-53.59%", "49.4%",
            "-56.54%", "-87.45%"
        ],
        ["2015", "100%", "-58.63%", "15.14%", "-54.1%", "76.32%", "-24.08%", "23.64%", "-92.86%", "53.59%", "49.4%",
            "56.54%", "-87.45%"
        ],
        ["2014", "-100%", "58.63%", "-15.14%", "54.1%", "-76.32%", "24.08%", "-23.64%", "92.86%", "-53.59%", "-49.4%",
            "56.54%", "-87.45%"
        ],
        ["2013", "-100%", "-58.63%", "15.14%", "-54.1%", "76.32%", "24.08%", "23.64%", "-92.86%", "53.59%", "49.4%",
            "-56.54%", "87.45%"
        ],
        ["2012", "", "58.63%", "-15.14%", "-54.1%", "-76.32%", "24.08%", "-23.64%", "92.86%", "-53.59%", "-49.4%",
            "56.54%", "-87.45%"
        ],
        ["2011", "100%", "-58.63%", "-15.14%", "-54.1%", "-76.32%", "24.08%", "23.64%", "-92.86%", "53.59%", "49.4%",
            "-56.54%", "87.45%"
        ],
        ["2010", "-100%", "-58.63%", "15.14%", "54.1%", "76.32%", "-24.08%", "23.64%", "92.86%", "-53.59%", "-49.4%",
            "56.54%", "-87.45%"
        ],
        ["2009", "100%", "58.63%", "15.14%", "54.1%", "-76.32%", "24.08%", "-23.64%", "-92.86%", "53.59%", "49.4%",
            "56.54%", "-87.45%"
        ],
        ["2008", "100%", "58.63%", "-15.14%", "54.1%", "76.32%", "-24.08%", "23.64%", "92.86%", "-53.59%", "-49.4%",
            "56.54%", "-87.45%"
        ],
        ["2007", "-100%", "-58.63%", "15.14%", "-54.1%", "76.32%", "24.08%", "23.64%", "-92.86%", "53.59%", "49.4%",
            "-56.54%", "87.45%"
        ],
        ["2006", "100%", "58.63%", "-15.14%", "54.1%", "-76.32%", "-24.08%", "-23.64%", "-92.86%", "-53.59%", "-49.4%",
            "56.54%", "-87.45%"
        ],
        ["2005", "-100%", "58.63%", "15.14%", "54.1%", "-76.32%", "24.08%", "23.64%", "92.86%", "53.59%", "49.4%",
            "56.54%", "-87.45%"
        ],
        ["2004", "-100%", "-58.63%", "15.14%", "-54.1%", "76.32%", "-24.08%", "23.64%", "-92.86%", "53.59%", "49.4%",
            "-56.54%", "87.45%"
        ],
        ["2003", "100%", "58.63%", "-15.14%", "54.1%", "", "-24.08%", "-23.64%", "-92.86%", "-53.59%", "-49.4%",
            "56.54%", "-87.45%"
        ],
        ["2002", "100%", "-58.63%", "", "36.1%", "-76.32%", "24.08%", "23.64%", "92.86%", "53.59%", "-49.4%",
            "56.54%", "-87.45%"
        ],
        ["2001", "-100%", "58.63%", "-15.14%", "-54.1%", "-76.32%", "-24.08%", "-23.64%", "-92.86%", "-53.59%", "49.4%",
            "56.54%", "-87.45%"
        ],
        ["2000", "-100%", "58.63%", "15.14%", "54.1%", "76.32%", "24.08%", "23.64%", "92.86%", "-53.59%", "-49.4%",
            "56.54%", "-87.45%"
        ]
    ],
    display_data_table = document.getElementById("display-data-table");

for (var dt = 0; dt < array.length; dt++) {
    // create a new row
    var newRow = display_data_table.insertRow(display_data_table.length);
    for (var idt = 0; idt < array[dt].length; idt++) {
        // create a new cell
        var cell = newRow.insertCell(idt);

        // add value to the cell
        cell.innerHTML = array[dt][idt];
    }
}

var cell = $('#display-data-table td');

cell.each(function () {

    var cell_mainvalue = $(this).html(); //get the value
    cell_value = parseFloat(cell_mainvalue) / 100.0;

    if (cell_value < 0) //if then for if value is negative
        $(this).css({
            'background': '#FD0000'
        }); // changes td to red.

    if (cell_value > 0) //if then for if value is negative
        $(this).css({
            'background': '#00B903'
        }); // changes td to red.

    if (cell_mainvalue === "") //if then for if value is negative
        $(this).css({
            'background': '#B8B8B8'
        }); // changes td to red.

    if (cell_mainvalue > 1000)
        $(this).css({
            'background': '#FBFBFD'
        }); // changes td to red.
});

// ================ DISPLAY 4 TABLE DATA END ================


// ================ DISPLAY 5 SCROLL BAR START ================

$(document).ready(function () {
    const table001122 = document.querySelector("#table001122");
    $("#Display5 .right-slider5").click(function () {
        $("#table001122").animate({
                scrollLeft: table001122.scrollLeft + 250,
            },
            250
        );
    });
    $("#Display5 .left-slider5").click(function () {
        $("#table001122").animate({
                scrollLeft: table001122.scrollLeft - 250,
            },
            250
        );
    });
});
// ///////////////////////////////////////////
$(document).ready(function () {
    const mytablesty12 = document.querySelector(".mytablesty12");
    $("#style1Table .right-slider5").click(function () {
        $(".mytablesty12").animate({
                scrollLeft: mytablesty12.scrollLeft + 250,
            },
            250
        );
    });
    $("#style1Table .left-slider5").click(function () {
        $(".mytablesty12").animate({
                scrollLeft: mytablesty12.scrollLeft - 250,
            },
            250
        );
    });
});

// ================ DISPLAY 5 SCROLL BAR END ================

// ============== DISPLAY 5 SHOW DATE/TIME START =========

newdate5 = new Date();
y = newdate5.getFullYear();
m = newdate5.getMonth() + 1;
d = newdate5.getDate();

let dis_date = document.querySelectorAll(".dis_date");

dis_date.forEach((element) => {

    element.innerHTML = d + "/" + m + "/" + y;

});


window.onload = function () {
    DisplayCurrentTime();
};

function DisplayCurrentTime() {
    var date555 = new Date();
    var hours555 = date555.getHours() > 12 ? date555.getHours() - 12 : date555.getHours();
    var am_pm = date555.getHours() >= 12 ? "PM" : "AM";
    hours555 = hours555 < 10 ? "0" + hours555 : hours555;
    var minutes555 = date555.getMinutes() < 10 ? "0" + date555.getMinutes() : date555.getMinutes();
    var sec555 = date555.getSeconds() < 10 ? "0" + date555.getSeconds() : date555.getSeconds();

    time555 = hours555 + ":" + minutes555 + ":" + sec555 + " " + am_pm;
    time222 = hours555 + ":" + minutes555 + " " + am_pm;

    let dis_time = document.querySelectorAll(".dis_time");
    let dis_time22 = document.querySelectorAll(".dis_time22");

    dis_time.forEach((element) => {

        element.innerHTML = time555;
    });
    dis_time22.forEach((element) => {

        element.innerHTML = time222;
    });
};
// ============== DISPLAY 5 SHOW DATE/TIME END =========


// ============== DISPLAY 5 PROGRESS START =========
// the range of the value is 30 to -30
var pos_value_sub1 = 20.17;
var neg_value_sub1 = 0;

var pos_value_sub2 = 1.09;
var neg_value_sub2 = 0;

var pos_value_sub3 = 2.4;
var neg_value_sub3 = 0;

var pos_value_sub4 = 9.31;
var neg_value_sub4 = 0;

var pos_value_sub5 = 0;
var neg_value_sub5 = -22.49;

var pos_value_sub6 = 0;
var neg_value_sub6 = -1.75;

var pos_value_sub7 = 12.5;
var neg_value_sub7 = 0;

var pos_value_sub8 = 0;
var neg_value_sub8 = -17.36;

var pos_value_sub9 = 0;
var neg_value_sub9 = -4.95;

var pos_value_sub10 = 22.55;
var neg_value_sub10 = 0;



pos_value1 = pos_value_sub1 * 3.34;
pos_value2 = pos_value_sub2 * 3.34;
pos_value3 = pos_value_sub3 * 3.34;
pos_value4 = pos_value_sub4 * 3.34;
pos_value5 = pos_value_sub5 * 3.34;
pos_value6 = pos_value_sub6 * 3.34;
pos_value7 = pos_value_sub7 * 3.34;
pos_value8 = pos_value_sub8 * 3.34;
pos_value9 = pos_value_sub9 * 3.34;
pos_value10 = pos_value_sub10 * 3.34;

neg_value1 = -neg_value_sub1 * 3.34;
neg_value2 = -neg_value_sub2 * 3.34;
neg_value3 = -neg_value_sub3 * 3.34;
neg_value4 = -neg_value_sub4 * 3.34;
neg_value5 = -neg_value_sub5 * 3.34;
neg_value6 = -neg_value_sub6 * 3.34;
neg_value7 = -neg_value_sub7 * 3.34;
neg_value8 = -neg_value_sub8 * 3.34;
neg_value9 = -neg_value_sub9 * 3.34;
neg_value10 = -neg_value_sub10 * 3.34;

var dis5_pos_value1 = pos_value1 * 0.7;
var dis5_pos_value2 = pos_value2 * 0.7;
var dis5_pos_value3 = pos_value3 * 0.7;
var dis5_pos_value4 = pos_value4 * 0.7;
var dis5_pos_value5 = pos_value5 * 0.7;
var dis5_pos_value6 = pos_value6 * 0.7;
var dis5_pos_value7 = pos_value7 * 0.7;
var dis5_pos_value8 = pos_value8 * 0.7;
var dis5_pos_value9 = pos_value9 * 0.7;
var dis5_pos_value10 = pos_value10 * 0.7;

var dis5_neg_value1 = neg_value1 * 1.11;
var dis5_neg_value2 = neg_value2 * 1.11;
var dis5_neg_value3 = neg_value3 * 1.11;
var dis5_neg_value4 = neg_value4 * 1.11;
var dis5_neg_value5 = neg_value5 * 1.11;
var dis5_neg_value6 = neg_value6 * 1.11;
var dis5_neg_value7 = neg_value7 * 1.11;
var dis5_neg_value8 = neg_value8 * 1.11;
var dis5_neg_value9 = neg_value9 * 1.11;
var dis5_neg_value10 = neg_value10 * 1.11;

if (neg_value_sub1 <= -25) {
    var dis5_neg_value1 = neg_value1 * .98;
}
if (neg_value_sub2 <= -25) {
    var dis5_neg_value2 = neg_value2 * .98;
}
if (neg_value_sub3 <= -25) {
    var dis5_neg_value3 = neg_value3 * .98;
}
if (neg_value_sub4 <= -25) {
    var dis5_neg_value4 = neg_value4 * .98;
}
if (neg_value_sub5 <= -25) {
    var dis5_neg_value5 = neg_value5 * .98;
}
if (neg_value_sub6 <= -25) {
    var dis5_neg_value6 = neg_value6 * .98;
}
if (neg_value_sub7 <= -25) {
    var dis5_neg_value7 = neg_value7 * .98;
}
if (neg_value_sub8 <= -25) {
    var dis5_neg_value8 = neg_value8 * .98;
}
if (neg_value_sub9 <= -25) {
    var dis5_neg_value9 = neg_value9 * .98;
}
if (neg_value_sub10 <= -25) {
    var dis5_neg_value10 = neg_value10 * .98;
}

// ==============================================

if (pos_value_sub1 > 0) {
    document.querySelector(".dis5_pos_value1").innerHTML = pos_value_sub1 + "%";
} else if (neg_value_sub1 < 0) {
    document.querySelector(".dis5_neg_value1").innerHTML = neg_value_sub1 + "%";
} else {
    document.querySelector(".dis5_pos_value1").innerHTML = "";
    document.querySelector(".dis5_neg_value1").innerHTML = "";
}
// =======================
if (pos_value_sub2 > 0) {
    document.querySelector(".dis5_pos_value2").innerHTML = pos_value_sub2 + "%";
} else if (neg_value_sub2 < 0) {
    document.querySelector(".dis5_neg_value2").innerHTML = neg_value_sub2 + "%";
} else {
    document.querySelector(".dis5_pos_value2").innerHTML = "";
    document.querySelector(".dis5_neg_value2").innerHTML = "";
}
// =======================
if (pos_value_sub3 > 0) {
    document.querySelector(".dis5_pos_value3").innerHTML = pos_value_sub3 + "%";
} else if (neg_value_sub3 < 0) {
    document.querySelector(".dis5_neg_value3").innerHTML = neg_value_sub3 + "%";
} else {
    document.querySelector(".dis5_pos_value3").innerHTML = "";
    document.querySelector(".dis5_neg_value3").innerHTML = "";
}
// =======================
if (pos_value_sub4 > 0) {
    document.querySelector(".dis5_pos_value4").innerHTML = pos_value_sub4 + "%";
} else if (neg_value_sub4 < 0) {
    document.querySelector(".dis5_neg_value4").innerHTML = neg_value_sub4 + "%";
} else {
    document.querySelector(".dis5_pos_value4").innerHTML = "";
    document.querySelector(".dis5_neg_value4").innerHTML = "";
}
// =======================
if (pos_value_sub5 > 0) {
    document.querySelector(".dis5_pos_value5").innerHTML = pos_value_sub5 + "%";
} else if (neg_value_sub5 < 0) {
    document.querySelector(".dis5_neg_value5").innerHTML = neg_value_sub5 + "%";
} else {
    document.querySelector(".dis5_pos_value5").innerHTML = "";
    document.querySelector(".dis5_neg_value5").innerHTML = "";
}
// =======================
if (pos_value_sub6 > 0) {
    document.querySelector(".dis5_pos_value6").innerHTML = pos_value_sub6 + "%";
} else if (neg_value_sub6 < 0) {
    document.querySelector(".dis5_neg_value6").innerHTML = neg_value_sub6 + "%";
} else {
    document.querySelector(".dis5_pos_value6").innerHTML = "";
    document.querySelector(".dis5_neg_value6").innerHTML = "";
}
// =======================
if (pos_value_sub7 > 0) {
    document.querySelector(".dis5_pos_value7").innerHTML = pos_value_sub7 + "%";
} else if (neg_value_sub7 < 0) {
    document.querySelector(".dis5_neg_value7").innerHTML = neg_value_sub7 + "%";
} else {
    document.querySelector(".dis5_pos_value7").innerHTML = "";
    document.querySelector(".dis5_neg_value7").innerHTML = "";
}
// =======================
if (pos_value_sub8 > 0) {
    document.querySelector(".dis5_pos_value8").innerHTML = pos_value_sub8 + "%";
} else if (neg_value_sub8 < 0) {
    document.querySelector(".dis5_neg_value8").innerHTML = neg_value_sub8 + "%";
} else {
    document.querySelector(".dis5_pos_value8").innerHTML = "";
    document.querySelector(".dis5_neg_value8").innerHTML = "";
}
// =======================
if (pos_value_sub9 > 0) {
    document.querySelector(".dis5_pos_value9").innerHTML = pos_value_sub9 + "%";
} else if (neg_value_sub9 < 0) {
    document.querySelector(".dis5_neg_value9").innerHTML = neg_value_sub9 + "%";
} else {
    document.querySelector(".dis5_pos_value9").innerHTML = "";
    document.querySelector(".dis5_neg_value9").innerHTML = "";
}
// =======================
if (pos_value_sub10 > 0) {
    document.querySelector(".dis5_pos_value10").innerHTML = pos_value_sub10 + "%";
} else if (neg_value_sub10 < 0) {
    document.querySelector(".dis5_neg_value10").innerHTML = neg_value_sub10 + "%";
} else {
    document.querySelector(".dis5_pos_value10").innerHTML = "";
    document.querySelector(".dis5_neg_value10").innerHTML = "";
}
// ==================================================


document.querySelector(".dis5_progress_pos1").style.height = pos_value1 + "%";
document.querySelector(".dis5_progress_neg1").style.height = neg_value1 + "%";
document.querySelector(".dis5_pos_value1").style.bottom = dis5_pos_value1 + "%";
document.querySelector(".dis5_neg_value1").style.top = dis5_neg_value1 + "%";

// ====================
document.querySelector(".dis5_progress_pos2").style.height = pos_value2 + "%";
document.querySelector(".dis5_progress_neg2").style.height = neg_value2 + "%";
document.querySelector(".dis5_pos_value2").style.bottom = dis5_pos_value2 + "%";
document.querySelector(".dis5_neg_value2").style.top = dis5_neg_value2 + "%";
// ====================
document.querySelector(".dis5_progress_pos3").style.height = pos_value3 + "%";
document.querySelector(".dis5_progress_neg3").style.height = neg_value3 + "%";
document.querySelector(".dis5_pos_value3").style.bottom = dis5_pos_value3 + "%";
document.querySelector(".dis5_neg_value3").style.top = dis5_neg_value3 + "%";
// ====================
document.querySelector(".dis5_progress_pos4").style.height = pos_value4 + "%";
document.querySelector(".dis5_progress_neg4").style.height = neg_value4 + "%";
document.querySelector(".dis5_pos_value4").style.bottom = dis5_pos_value4 + "%";
document.querySelector(".dis5_neg_value4").style.top = dis5_neg_value4 + "%";
// ====================
document.querySelector(".dis5_progress_pos5").style.height = pos_value5 + "%";
document.querySelector(".dis5_progress_neg5").style.height = neg_value5 + "%";
document.querySelector(".dis5_pos_value5").style.bottom = dis5_pos_value5 + "%";
document.querySelector(".dis5_neg_value5").style.top = dis5_neg_value5 + "%";
// ====================
document.querySelector(".dis5_progress_pos6").style.height = pos_value6 + "%";
document.querySelector(".dis5_progress_neg6").style.height = neg_value6 + "%";
document.querySelector(".dis5_pos_value6").style.bottom = dis5_pos_value6 + "%";
document.querySelector(".dis5_neg_value6").style.top = dis5_neg_value6 + "%";
// ====================
document.querySelector(".dis5_progress_pos7").style.height = pos_value7 + "%";
document.querySelector(".dis5_progress_neg7").style.height = neg_value7 + "%";
document.querySelector(".dis5_pos_value7").style.bottom = dis5_pos_value7 + "%";
document.querySelector(".dis5_neg_value7").style.top = dis5_neg_value7 + "%";
// ====================
document.querySelector(".dis5_progress_pos8").style.height = pos_value8 + "%";
document.querySelector(".dis5_progress_neg8").style.height = neg_value8 + "%";
document.querySelector(".dis5_pos_value8").style.bottom = dis5_pos_value8 + "%";
document.querySelector(".dis5_neg_value8").style.top = dis5_neg_value8 + "%";
// ====================
document.querySelector(".dis5_progress_pos9").style.height = pos_value9 + "%";
document.querySelector(".dis5_progress_neg9").style.height = neg_value9 + "%";
document.querySelector(".dis5_pos_value9").style.bottom = dis5_pos_value9 + "%";
document.querySelector(".dis5_neg_value9").style.top = dis5_neg_value9 + "%";
// ====================
document.querySelector(".dis5_progress_pos10").style.height = pos_value10 + "%";
document.querySelector(".dis5_progress_neg10").style.height = neg_value10 + "%";
document.querySelector(".dis5_pos_value10").style.bottom = dis5_pos_value10 + "%";
document.querySelector(".dis5_neg_value10").style.top = dis5_neg_value10 + "%";



// ============== DISPLAY 5 PROGRESS END =========

// ============== STYLE 1 STYLE 2 START ==============


// PROGRESS BAR START
var style12_progress = 75;

document.querySelector("#syle12_section .inner-progress-style12").style.width = style12_progress + "%";
document.querySelector(".tab_filter-style12 .progress-style12 p").innerHTML = "Progress " + style12_progress + "%";
// PROGRESS BAR END

// CLICL TO TOGGLE STYLE1 & STYLE2 START =====
$("#style2Con").addClass("displayNone");
$(".style1-box").addClass("clickstylebg");
$(".style2-box").addClass("clickstylebrdr");

$(".style1-box").click(function () {
    $("#style1Table").removeClass("displayNone");
    $("#style2Con").addClass("displayNone");

    $(".style1-box").addClass("clickstylebg");
    $(".style1-box").removeClass("clickstylebrdr");

    $(".style2-box").addClass("clickstylebrdr");
    $(".style2-box").removeClass("clickstylebg");
});

$(".style2-box").click(function () {
    $("#style1Table").addClass("displayNone");
    $("#style2Con").removeClass("displayNone");

    $(".style2-box").addClass("clickstylebg");
    $(".style2-box").removeClass("clickstylebrdr");

    $(".style1-box").addClass("clickstylebrdr");
    $(".style1-box").removeClass("clickstylebg");
});


// CLICL TO TOGGLE STYLE1 & STYLE2 END =====

// ============== STYLE 1 STYLE 2 END ==============

// X CLICK TO REMOVE COLUMN START ==============

$("#cross2").click(function () {
    $("#resizable554 th:nth-child(2)").addClass("th-dis-none");
    $("#resizable554 td:nth-child(2)").addClass("th-dis-none");
});

$("#cross3").click(function () {
    $("#resizable554 th:nth-child(3)").addClass("th-dis-none");
    $("#resizable554 td:nth-child(3)").addClass("th-dis-none");
});


$("#cross4").click(function () {
    $("#resizable554 th:nth-child(4)").addClass("th-dis-none");
    $("#resizable554 td:nth-child(4)").addClass("th-dis-none");
});

$("#cross5").click(function () {
    $("#resizable554 th:nth-child(5)").addClass("th-dis-none");
    $("#resizable554 td:nth-child(5)").addClass("th-dis-none");
});

$("#cross6").click(function () {
    $("#resizable554 th:nth-child(6)").addClass("th-dis-none");
    $("#resizable554 td:nth-child(6)").addClass("th-dis-none");
});

$("#cross7").click(function () {
    $("#resizable554 th:nth-child(7)").addClass("th-dis-none");
    $("#resizable554 td:nth-child(7)").addClass("th-dis-none");
});

$("#cross8").click(function () {
    $("#resizable554 th:nth-child(8)").addClass("th-dis-none");
    $("#resizable554 td:nth-child(8)").addClass("th-dis-none");
});

$("#cross9").click(function () {
    $("#resizable554 th:nth-child(9)").addClass("th-dis-none");
    $("#resizable554 td:nth-child(9)").addClass("th-dis-none");
});

$("#cross10").click(function () {
    $("#resizable554 th:nth-child(10)").addClass("th-dis-none");
    $("#resizable554 td:nth-child(10)").addClass("th-dis-none");
});

$("#cross10").click(function () {
    $("#resizable554 th:nth-child(11)").addClass("th-dis-none");
    $("#resizable554 td:nth-child(11)").addClass("th-dis-none");
});

$("#cross12").click(function () {
    $("#resizable554 th:nth-child(12)").addClass("th-dis-none");
    $("#resizable554 td:nth-child(12)").addClass("th-dis-none");
});

$("#cross13").click(function () {
    $("#resizable554 th:nth-child(13)").addClass("th-dis-none");
    $("#resizable554 td:nth-child(13)").addClass("th-dis-none");
});


$("#cross14").click(function () {
    $("#resizable554 th:nth-child(14)").addClass("th-dis-none");
    $("#resizable554 td:nth-child(14)").addClass("th-dis-none");
});

$("#cross15").click(function () {
    $("#resizable554 th:nth-child(15)").addClass("th-dis-none");
    $("#resizable554 td:nth-child(15)").addClass("th-dis-none");
});

$("#cross16").click(function () {
    $("#resizable554 th:nth-child(16)").addClass("th-dis-none");
    $("#resizable554 td:nth-child(16)").addClass("th-dis-none");
});

$("#cross17").click(function () {
    $("#resizable554 th:nth-child(17)").addClass("th-dis-none");
    $("#resizable554 td:nth-child(17)").addClass("th-dis-none");
});

$("#cross18").click(function () {
    $("#resizable554 th:nth-child(18)").addClass("th-dis-none");
    $("#resizable554 td:nth-child(18)").addClass("th-dis-none");
});

$("#cross19").click(function () {
    $("#resizable554 th:nth-child(19)").addClass("th-dis-none");
    $("#resizable554 td:nth-child(19)").addClass("th-dis-none");
});


// X CLICK TO REMOVE COLUMN END ==============

// TABLE RESIZEABLE START ===////////////////===
$(document).ready(function() {
    var thHeight = $("table#resizable554 th:first").height();
    $("table#resizable554 th").resizable({
        handles: "e",
        minHeight: thHeight,
        maxHeight: thHeight,
        minWidth: 40,
        resize: function (event, ui) {
            var sizerID = "#" + $(event.target).attr("id") + "-sizer";
            $(sizerID).width(ui.size.width);
        }
    });
})
// TABLE RESIZEABLE END ===////////////////===

// Drag and Drop Start
$(document).ready(function () {
    $("table#resizable554").dragableColumns();
});
// Drag and Drop END