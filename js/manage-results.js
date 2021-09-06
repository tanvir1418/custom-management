// MANAGE RESULTS list item start

// const sub_ul_list_11 = document.querySelector(".sub-ul-list-11");
// const sub_ul_list_22 = document.querySelector(".sub-ul-list-22");
// const sub_ul_list_33 = document.querySelector(".sub-ul-list-33");

// Header Index Where Click is happened.
let headerIndexClick = "";
let mnResultActiveTabID = "Main";
let mnResultActiveTabSty1TableID = "resizable554";


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
(function listDataMan404() {
    let htmllist = "", htmlDataModal = "";
    listItemData404.forEach((item, index) => {
        htmllist += `<li class="list-item-404-${index + 1}">
        <p>${item}</p>
        <div class="tik-box display-none">
            <i class="fas fa-check"></i>
        </div>
        <div class="grey-times-box display-none">
			<i class="fas fa-times"></i>
		</div>
        <div class="arrow-404 arrow-404-background-color-1">
            <i class="fas fa-caret-right arrow-404-i-color-1"></i>
        </div>
        </li>`;
        /* Update this function By Ashiq */
        let list_data1 = "",
            list_data2 = "",
            list_data3 = "",
            length = 60;
        for (let i = 1; i <= length; i++) {
            let elementHtml = `<li class="result-list-${index + 1}-${i}">
            <p>Level ${index + 1} - Item ${i}</p>
            <div class="sublist-info-box" flow="down" tooltip="Level ${index + 1} - Item ${i}">
				<i class="fas fa-info"></i>
			</div>
			<div class="sublist-pen-box" tooltip="Click to Rename" flow="down" onclick="confirmListName(this)">
				<i class="fas fa-pen"></i>
			</div>
            <div class="sublist-check-box-404">
                <i class="fas fa-check"></i>
            </div>
            <div class="sublist-cancel-box-404" tooltip="Click to Delete" flow="down" data-toggle="modal" data-target="#deletlistopt2">
                <i class="fas fa-times"></i>
            </div>
            </li>`;
            if (length < 61) {
                if (i <= 20) {
                    list_data1 += elementHtml;
                } else if (i >= 21 && i <= 40) {
                    list_data2 += elementHtml;
                } else {
                    list_data3 += elementHtml;
                }
            } else {
                let divide = Math.floor(length / 3);
                let len = divide + (length % 3);
                if (i <= len) {
                    list_data1 += elementHtml;
                } else if (i > len && i <= len + divide) {
                    list_data2 += elementHtml;
                } else {
                    list_data3 += elementHtml;
                }
            }
        }
        htmlDataModal +=
            `<ul class="right-list-404 right-list-4041" style=" display: none" id="sub-ul-list-1-${index + 1}">
        ${list_data1}
        </ul>
        <ul class="right-list-404 right-list-4042" style=" display: none" id="sub-ul-list-2-${index + 1}">
            ${list_data2}
        </ul>
        <ul class="right-list-404 right-list-4043" style=" display: none" id="sub-ul-list-3-${index + 1}">
            ${list_data3}
        </ul>`;
    });
    left_list_404.innerHTML = htmllist;
    document.querySelector("#div-sub-ul-li-list").innerHTML = htmlDataModal;
    /* Update End By Ashiq */
})();
/* New Function Start */
let sub_ul_list_id1_old = "",
    sub_ul_list_id2_old = "",
    sub_ul_list_id3_old = "";

let oldSelectListMnRes = "";

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

        if(oldSelectListMnRes == ""){
			$("#mnRes_list_level_item_loading").css("display", "block");
			$("#div-sub-ul-li-list").css("display", "none");
			oldSelectListMnRes = "";
			setTimeout(() => {
				$("#mnRes_list_level_item_loading").css("display", "none");
				$("#div-sub-ul-li-list").css("display", "block");
			}, 1000);
		}

    }
}
/* New Function End */
var left_list_data = "";
(function resultLeftListControl() {
    let oldTarget = "";
    left_list_404.addEventListener("click", function (e) {
        let target = e.target;
        const elementName = ["DIV", "P"];
        if (elementName.includes(target.tagName)) {
            target = target.parentNode;
        } else if (target.tagName === "I") {
            target = target.parentNode.parentNode;
        }

        if (oldTarget != "" && oldTarget !== target) {
            $(oldTarget).removeClass("highlight_404");

            $(oldTarget).children(".tik-box").removeClass("display-block");
            $(oldTarget).children(".tik-box").addClass("display-none");

            $(oldTarget).children(".grey-times-box").removeClass("display-block");
            $(oldTarget).children(".grey-times-box").addClass("display-none");

            $(oldTarget).children(".arrow-404").removeClass("arrow-404-background-color-2");
            $(oldTarget).children(".arrow-404").addClass("arrow-404-background-color-1");
            $(oldTarget).children(".arrow-404").children(".fa-caret-right").removeClass("arrow-404-i-color-2");
            $(oldTarget).children(".arrow-404").children(".fa-caret-right").addClass("arrow-404-i-color-1");
        }
        $(target).toggleClass("highlight_404");

        $(target).children(".tik-box").toggleClass("display-none display-block");

        $(target).children(".grey-times-box").toggleClass("display-none display-block");

        $(target).children(".arrow-404").toggleClass("arrow-404-background-color-1 arrow-404-background-color-2");
        $(target).children(".arrow-404").children(".fa-caret-right").toggleClass("arrow-404-i-color-1 arrow-404-i-color-2");

        if(oldTarget == target){
            oldSelectListMnRes = "hideLoadingAnimation";
        }else{
            oldSelectListMnRes = "";
        }

        oldTarget = target;

        left_list_data = target.childNodes[1].innerHTML;
        item_li_click_handle(target.classList[0]);
    });
})();

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

// $("#mnRes_list_item_loading").css("display", "block");
// $("#mnRes_scrollWindow").css("display", "none");
// $("#mnRes_scrollDownBtn").css("display", "none");

setTimeout(() => {
    $("#mnRes_list_item_loading").css("display", "none");
    $("#mnRes_scrollWindow").css("display", "block");
    $("#mnRes_scrollDownBtn").css("display", "block");
}, 4000);

// MANAGE RESULTS list item end

// ====== LIST ITEM TO CHART PAGE START ============

const chartPage = document.querySelector("#chartPage");
chartPage.style.display = "none";
// chartPage.style.opacity = "0";

$("#div-sub-ul-li-list").click(function (e) {
    let target = e.target;
    if (target.tagName === "DIV") {
        if (target.className === "sublist-cancel-box-404") {

            let chart_deleteName = target.parentNode.childNodes[1].innerHTML;
            document.querySelector("#deletlistopt2 .chart-delete-name").innerHTML = chart_deleteName;

            manageResultDeleteListClassName = target.parentNode.classList[0];
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
        if (target.className === "sublist-cancel-box-404") {

            let chart_deleteName = target.parentNode.childNodes[1].innerHTML;
            document.querySelector("#deletlistopt2 .chart-delete-name").innerHTML = chart_deleteName;

            manageResultDeleteListClassName = target.parentNode.classList[0];
            return;
        }
        else if((target.className.indexOf("sublist-info-box") != -1) || (target.className.indexOf("sublist-pen-box") != -1)){
		 	return;
		}
        else target = target.parentNode;
    } else if (target.tagName !== "LI") return;

    let dataList = target.childNodes[1].innerHTML;

    // console.log(left_list_data);
    // console.log(dataList);

    displayChartManageResult(left_list_data, dataList);
});


$("#mng-opt2-delete").click(function () {
	
	$(`.${manageResultDeleteListClassName}`).remove();

	// let initState = $(this).html();
	// $(this).html('<i class="fa fa-spinner fa-spin"></i> Confirm');
	// $(this).prop("disabled", true);
	// let $this = $(this);
	// setTimeout(function() {
	// 	$this.prop("disabled", false);
	// 	$this.html(initState);

	// 	$(`.${manageResultDeleteListClassName}`).remove();

	// 	$("#deletlistopt2").modal("hide");
	// }, 2000);
});


// ----------- ASHIQ -------------- 
function calAngle(obj) {
    let matrix = getComputedStyle(obj).getPropertyValue("transform");
    let values = matrix.split("(")[1].split(")")[0].split(",");
    let angle = Math.round(Math.atan2(values[1], values[0]) * (180 / Math.PI));
    return angle;
}

function maintainRotation(degreeVal, meterId){

    let meter1_input = degreeVal;
    let obj1 = document.getElementById(`${meterId}`);
    obj1.classList.add("scorer-1-tick-animation");
    let p_element1 = document.getElementById(`value-of-${meterId}`);
    let intervalId1 = window.setInterval(function () {
        try {
            let angle = calAngle(obj1);
            let percent = parseFloat(angle / 1.8).toFixed(2);
            p_element1.innerHTML = `${percent}%`;
            if (percent >= meter1_input) {
                obj1.classList.remove("scorer-1-tick-animation");
                obj1.style.transformOrigin = "right center";
                obj1.style.transform = `rotate(${angle}deg)`;
                p_element1.innerHTML = `${meter1_input}%`;
                clearInterval(intervalId1);
            }
        } catch (err) {
            clearInterval(intervalId1);
        }
    }, 50);
}

function gotoChartPage(selectedTab, meterOneId, meterTwoId, meterThreeId) {
    // Math.floor(Math.random() * (100 - 1 + 1)) + 1; //Random Integer Value between (1-100)
    $(`#${selectedTab} .Display1 .meter_outer_box .main-chart`).css("display", "none");
    $(`#${selectedTab} .Display1 .meter_outer_box .loading-chart`).css("display", "block");

    setTimeout(() => {
        $(`#${selectedTab} .Display1 .meter_outer_box .main-chart`).css("display", "block");
        $(`#${selectedTab} .Display1 .meter_outer_box .loading-chart`).css("display", "none");

        maintainRotation(34, meterOneId);
        maintainRotation(90, meterTwoId);
        maintainRotation(55, meterThreeId);
    }, 2000);

};
// ====== LIST ITEM TO CHART PAGE END ============

// ======= TABS START ======
let tabTableIdData = [
    {
        "tabId": "Main", 
        "tableStyle1ID" : "resizable554",
    }
];

let tableResizerData = {
    "column-header-1" : "50px",
    "column-header-2" : "154px",
    "column-header-3" : "140px",
    "column-header-4" : "110px",
    "column-header-5" : "110px",
    "column-header-6" : "155px",
    "column-header-7" : "155px",
    "column-header-8" : "240px",
    "column-header-9" : "180px",
    "column-header-10" : "120px",
    "column-header-11" : "120px",
    "column-header-12" : "120px",
    "column-header-13" : "120px",
    "column-header-14" : "120px",
    "column-header-15" : "120px",
    "column-header-16" : "145px",
    "column-header-17" : "145px",
    "column-header-18" : "145px",
    "column-header-19" : "145px",
    "column-header-20" : "145px",
    "column-header-21" : "145px",
    "column-header-22" : "145px",
    "column-header-23" : "145px",
    "column-header-24" : "145px",
    "column-header-25" : "145px",
    "column-header-26" : "145px",
    "column-header-27" : "145px",
    "column-header-28" : "145px",
    "column-header-29" : "145px",
    "column-header-30" : "145px",
    "column-header-31" : "145px",
    "column-header-32" : "145px",
    "column-header-33" : "145px",
    "column-header-34" : "145px",
    "column-header-35" : "145px",
    "column-header-36" : "145px",
    "column-header-37" : "145px",
    "column-header-38" : "145px",
    "column-header-39" : "145px",
    "column-header-40" : "145px",
    "column-header-41" : "145px",
    "column-header-42" : "145px",
    "column-header-43" : "145px",
    "column-header-44" : "145px",
    "column-header-45" : "145px",
    "column-header-46" : "145px",
    "column-header-47" : "145px",
    "column-header-48" : "145px",
    "column-header-49" : "145px",
    "column-header-50" : "145px",
    "column-header-51" : "145px",
    "column-header-52" : "145px",
    "column-header-53" : "145px",
    "column-header-54" : "145px",
    "column-header-55" : "145px",
    "column-header-56" : "145px",
    "column-header-57" : "150px",
    "column-header-58" : "145px",
    "column-header-59" : "145px",
    "column-header-60" : "145px",
    "column-header-61" : "145px",
    "column-header-62" : "145px",
    "column-header-63" : "145px",
    "column-header-64" : "450px",
    "column-header-65" : "600px",
    "column-header-66" : "800px"
};

// Controlling Main and Dynamic Tab Creation
function openTabPage(pageName, elmnt) {
    $(`.outer-table-style12-box .right-slider5`).css("display", "none");
    $(`.outer-table-style12-box .left-slider5`).css("display", "none");

    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    console.log(`Tabcontent Length: ${tabcontent.length}`);
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    console.log(`Tablinks Length: ${tablinks.length}`);
    document.getElementById(pageName).style.display = "block";
    console.log("Click Happened On Button");

    for ( let index=0; index<tabTableIdData.length; index++ ) {
        if ( tabTableIdData[index].tabId == pageName ) {
            mnResultActiveTabID = tabTableIdData[index].tabId;
            mnResultActiveTabSty1TableID = tabTableIdData[index].tableStyle1ID;
        }
    }

    let compStyles = window.getComputedStyle(document.querySelector(`#${mnResultActiveTabSty1TableID} thead`));
    $(`#${pageName} .outer-table-style12-box .style1-table-wrap .clone-head-table-wrap`).css({
        width: compStyles.width,
        height: "44px"
    });

    for (let columnNum = 3; columnNum <= 66; columnNum++) {
        let columnHeaderWidth = tableResizerData[`column-header-${columnNum}`];

        $(`#${mnResultActiveTabSty1TableID} thead tr .column-header-${columnNum} .column-header-${columnNum}-sizer`).attr("style", `width: ${columnHeaderWidth}`);
        $(`#${mnResultActiveTabSty1TableID} tbody tr td .column-header-${columnNum}-resizer`).attr("style", `width: ${columnHeaderWidth}`);
        $(`#${mnResultActiveTabID} .outer-table-style12-box .style1-table-wrap .clone-head-table-wrap .mytablesty12 thead tr .column-header-${columnNum} .column-header-${columnNum}-sizer`).attr("style", `width: ${columnHeaderWidth}`);
    }
}

// Force Clicking Main Tab 
document.getElementById("defaultTabOpen").click();
$("#defaultTabOpen").addClass("active-tab-81");

// Handling Click On Main and Dynamic Tab
function handlingClickOnMainDynamicTab(){
    $(".tablink").click(function () {
        $(".tablink").removeClass("active-tab-81");
        $(this).addClass("active-tab-81");
    });
}
handlingClickOnMainDynamicTab();
// ======= TABS END ======

// ======= INNER TABS START ======

function openFiveChartTab(mainTabId, innerPageName, elmnt) {
    var j, inner_tabcontent, inner_tablinks;
    
    inner_tabcontent = document.querySelectorAll(`#${mainTabId} .inner-tabcontent`);
    for (j = 0; j < inner_tabcontent.length; j++) {
        inner_tabcontent[j].style.display = "none";
    }

    inner_tablinks = document.querySelectorAll(`#${mainTabId} .inner-tablink`);
    for (j = 0; j < inner_tablinks.length; j++) {
        inner_tablinks[j].style.backgroundColor = "";
    }

    $(`#${mainTabId} .${innerPageName}`).css("display", "block");

}

$("#firstOpen").addClass("inner-active-tab-81");
function fiveChartBtnClick(targetedTab){
    $(`#${targetedTab} .inner-tablink`).click(function () {
        $(`#${targetedTab} .inner-tablink`).removeClass("inner-active-tab-81");
        $(this).addClass("inner-active-tab-81");
    });
}
fiveChartBtnClick("Main");
// ======= INNER TABS END ======

// ============== DISPLAY 2 SPEEDOMETER START ====================
function gotoChartPage2(selectedTab) {

    $(`#${selectedTab} .Display2 .gauge_outer_box .main-progress`).css("display", "none");
    $(`#${selectedTab} .Display2 .gauge_outer_box .loading-progress`).css("display", "block");

    setTimeout(() => {
        
        $(`#${selectedTab} .Display2 .gauge_outer_box .main-progress`).css("display", "block");
        $(`#${selectedTab} .Display2 .gauge_outer_box .loading-progress`).css("display", "none");
    
        $(".progressmeter").each(function () {
            let $bar = $(this).find(".bar");
            let $val = $(this).find(".progress-value");
            let perc = parseInt($val.text());
            $({
                p: 0
            }).animate({
                p: perc
            }, {
                duration: 3000,
                easing: "swing",
                step: function (p) {
                    $bar.css({
                        transform: "rotate(" + (45.00 + (p * 1.8)) + "deg)", // 100%=180° so: ° = % * 1.8
                        // 45 is to add the needed rotation to have the green borders at the bottom
                    });
                    $val.text(p | 0);
                }
            });
        });

    }, 2000);
}

// ============== DISPLAY 2 SPEEDOMETER END ====================

// ================ DISPLAY 3 CHART PAGE START ================

function scrollDisplayChartThree(targetedTab){
    $(`#${targetedTab} .chart_main_box .right-slider5`).click(function () {
        $(`#${targetedTab} .chartAreaWrapper`).animate({
            scrollLeft: document.querySelector(`#${targetedTab} .chartAreaWrapper`).scrollLeft + 250,
        },250);
    });
    $(`#${targetedTab} .chart_main_box .left-slider5`).click(function () {
        $(`#${targetedTab} .chartAreaWrapper`).animate({
            scrollLeft: document.querySelector(`#${targetedTab} .chartAreaWrapper`).scrollLeft - 250,
        },250);
    });   
}

scrollDisplayChartThree('Main');

// ================ DISPLAY 3 CHART PAGE END ================


// ================ DISPLAY 4 TABLE DATA START ================

function gotoChartCalender(selectedTab, targetedCalender){
    var calenderData = new Array(20);
  
    for (let i = 0; i < calenderData.length; i++) {
        calenderData[i] = new Array(13);
    }
      
    var calenderYear = 2020;
    var randomEmptyValue;
      
    // Loop to initialize 2D array elements.
    for (let i = 0; i < 20; i++) {
        randomEmptyValue = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
        for (let j = 0; j < 13; j++) {
          if(j==0){
            calenderData[i][j] = calenderYear--;
          }else if(j==randomEmptyValue){
            calenderData[i][j] = "";
          }
          else{
            calenderData[i][j] = `${(Math.random() * (100 + 100) - 100).toFixed(2)}%`;
          }
        }
    }
    
    let display_data_table = document.getElementById(`${targetedCalender}`);
    
    for (var dt = 0; dt < calenderData.length; dt++) {
        // create a new row
        var newRow = display_data_table.insertRow(display_data_table.length);
        for (var idt = 0; idt < calenderData[dt].length; idt++) {
            // create a new cell
            var cell = newRow.insertCell(idt);
    
            // add value to the cell
            cell.innerHTML = calenderData[dt][idt];
        }
    }
    
    
    $(`#${targetedCalender} td`).each(function () {
    
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

    $(`#${selectedTab} .Display4 .data-table-wrapper`).css("display", "none");
    $(`#${selectedTab} .Display4 .loading-table-chart4`).css("display", "block");
    setTimeout(() => {
        $(`#${selectedTab} .Display4 .data-table-wrapper`).css("display", "block");
        $(`#${selectedTab} .Display4 .loading-table-chart4`).css("display", "none");
    }, 2000);
}

// ================ DISPLAY 4 TABLE DATA END ================


// ================ ARROW SCROLL BAR START ================

function scrollDisplayChartFive(targetedTab, targetedTable){
    $(`#${targetedTab} .Display5 .right-slider5`).click(function () {
        $(`#${targetedTable}`).animate({
            scrollLeft: document.querySelector(`#${targetedTable}`).scrollLeft + 250,
        },250);
    });
    $(`#${targetedTab} .Display5 .left-slider5`).click(function () {
        $(`#${targetedTable}`).animate({
            scrollLeft: document.querySelector(`#${targetedTable}`).scrollLeft - 250,
        },250);
    });
}

scrollDisplayChartFive('Main','table001122');

// ///////////////////////////////////////////
// ============== DISPLAY 5 SHOW DATE/TIME START =========

const dateOfToday = new Date();
let yearOfNewDate = dateOfToday.getFullYear();
let monthOfNewDate = dateOfToday.getMonth() + 1;
let dayOfNewDate = dateOfToday.getDate();

function displayDateForChart5(){
    let dis_date = document.querySelectorAll(".dis_date");
    dis_date.forEach((element) => {
        element.innerHTML = monthOfNewDate + "/" + dayOfNewDate + "/" + yearOfNewDate;
    });
}

displayDateForChart5();


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

// Display the time section in Display Chart Style 5
DisplayCurrentTime();

// ============== DISPLAY 5 SHOW DATE/TIME END =========


// ============== DISPLAY 5 PROGRESS START =========
// the range of the value is 30 to -30
function animationPositiveDiv(posProgVal, posProgTarget, posTextTarget) {
    var elem = document.querySelector(`${posProgTarget}`);
    var elemPara = document.querySelector(`${posTextTarget}`);   
    var height = 0;
    var id = setInterval(frame, 50);
    function frame() {
      if (height >= posProgVal) {
        clearInterval(id);
      } else {
        height++; 
        elem.style.height = height + '%';
        // elemPara.style.bottom = height * 0.85 + 'px';
        elemPara.innerHTML = height * 1  + '%';
      }
    }
}

function animationNegativeDiv(negProgVal, negProgTarget, negTextTarget) {
    var elem = document.querySelector(`${negProgTarget}`);
    var elemPara = document.querySelector(`${negTextTarget}`);   
    var height = 0;
    var id = setInterval(frame, 50);
    function frame() {
      if (height >= negProgVal) {
        clearInterval(id);
      } else {
        height++; 
        elem.style.height = height + '%';
        // elemPara.style.top = height * 1.07 + 'px';
        elemPara.innerHTML = height * -1  + '%';
      }
    }
  }

function gotoChartFive(targetedTab){

    $(`#${targetedTab} .Display5 .progress-range-box`).css("display", "none");
    $(`#${targetedTab} .Display5 .progress-loading-box`).css("display", "block");

    setTimeout(() => {
        $(`#${targetedTab} .Display5 .progress-range-box`).css("display", "block");
        $(`#${targetedTab} .Display5 .progress-loading-box`).css("display", "none");

        $(`#${targetedTab} .pos-bar-status`).removeAttr("style");
        $(`#${targetedTab} .allpos_value`).html("");
        $(`#${targetedTab} .neg-bar-status`).removeAttr("style");
        $(`#${targetedTab} .allneg_value`).html("");

        let chartFiveValues = new Array(10);
        for(let i=0; i<10; i++){
            chartFiveValues[i] = Math.floor(Math.random() * (100 + 100 + 1)) - 100;
        }

        for(let j=0; j < chartFiveValues.length; j++){
            let progValue, progTarget, progText;
            if(chartFiveValues[j] >= 0){
                progValue = chartFiveValues[j];
                progTarget = `#${targetedTab} .dis5_plusProgress_value${j+1}`;
                progText = `#${targetedTab} .dis5_pos_value${j+1}`;
                animationPositiveDiv(progValue, progTarget, progText);
            }else{
                progValue = chartFiveValues[j] * -1;
                progTarget = `#${targetedTab} .dis5_minusProgress_value${j+1}`;
                progText = `#${targetedTab} .dis5_neg_value${j+1}`;
                animationNegativeDiv(progValue, progTarget, progText);
            }
        }

    }, 2000);
}

// gotoChartFive();

// ============== DISPLAY 5 PROGRESS END =========

// ============== STYLE 1 STYLE 2 START ==============


// ///////////////////////////////////////////
function style1TableScroller(selectedTab) {
    const style1TableScroll = document.querySelector(`#${selectedTab} .style1-table-wrap`);
    $(`#${selectedTab} .outer-table-style12-box .right-slider5`).click(function () {
        $(`#${selectedTab} .style1-table-wrap`).animate({
            scrollLeft: style1TableScroll.scrollLeft + 800,
        },
            0
        );
        hideStyleOneAllPopup();
        resetDownArrow();
    }).dblclick(function () {
        $(`#${selectedTab} .style1-table-wrap`).animate({
            scrollLeft: style1TableScroll.scrollLeft + 800,
        },
            0
        );
        hideStyleOneAllPopup();
        resetDownArrow();
    });

    $(`#${selectedTab} .outer-table-style12-box .left-slider5`).click(function () {
        $(`#${selectedTab} .style1-table-wrap`).animate({
            scrollLeft: style1TableScroll.scrollLeft - 800,
        },
            0
        );
        hideStyleOneAllPopup();
        resetDownArrow();
    }).dblclick(function () {
        $(`#${selectedTab} .style1-table-wrap`).animate({
            scrollLeft: style1TableScroll.scrollLeft - 800,
        },
            0
        );
        hideStyleOneAllPopup();
        resetDownArrow();
    });
}

// ================ ARROW SCROLL BAR END ================




// PROGRESS BAR START
function tableProgressBarAnimation(targetedMainTab, progressVal, progWidthTarget, progTextTarget) {
    var elem = document.querySelector(`#${targetedMainTab} .${progWidthTarget}`);
    var elemPara = document.querySelector(`#${targetedMainTab} .${progTextTarget}`);
    var width = 0;
    var id = setInterval(frame, 50);
    function frame() {
      if (width >= progressVal) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%';
        elemPara.innerHTML = 'Progress ' + width * 1 + '%';
      }
    }
}

// tableProgressBarAnimation('Main', Math.floor(Math.random() * (100 - 0 + 1)), 'inner-progress-style12', 'inner-progress-text-style12');

// PROGRESS BAR END

// CLICL TO TOGGLE STYLE1 & STYLE2 START =====
function styleIconSwitcherOperation(selectedTab, sty1TableId){
    $(`#${selectedTab} .style2-table-wrap`).addClass("displayNone");
    $(`#${selectedTab} .double-click-style2`).addClass("displayNone");
    $(`#${selectedTab} .style1-box`).addClass("clickstylebg");
    $(`#${selectedTab} .style2-box`).addClass("clickstylebrdr");

    $(`#${selectedTab} .style1-box`).click(function () {
        $(`#${selectedTab} .style1-table-wrap`).removeClass("displayNone");
        $(`#${selectedTab} .style2-table-wrap`).addClass("displayNone");

        $(`#${selectedTab} .style1-box`).addClass("clickstylebg");
        $(`#${selectedTab} .style1-box`).removeClass("clickstylebrdr");

        $(`#${selectedTab} .style2-box`).addClass("clickstylebrdr");
        $(`#${selectedTab} .style2-box`).removeClass("clickstylebg");

        $(`#${selectedTab} .double-click-style1`).removeClass("displayNone");
        $(`#${selectedTab} .double-click-style2`).addClass("displayNone");

        let rowNumber = $(`#${selectedTab} .style1-table-wrap #${sty1TableId} tbody tr`);
        if (rowNumber.length > 0) {
            $(`#${selectedTab} .outer-table-style12-box .right-slider5`).css("display", "block");
            $(`#${selectedTab} .outer-table-style12-box .left-slider5`).css("display", "block");

            $(`#${selectedTab} .main-table-design`).css("display", "none");
            $(`#${selectedTab} .pagination-container`).css("display", "none");
            $(`#${selectedTab} .page-number12-wrap`).css("display", "none");
            $(`#${selectedTab} .style_date_time_wrap`).css("display", "none");

            $(`#${selectedTab} .loading-style1-table`).css("display", "block");
            $(`#${selectedTab} .pagination-loading-handler`).css("display", "block");
            $(`#${selectedTab} .page-number-loading`).css("display", "block");
            $(`#${selectedTab} .loading_date_time_update`).css("display", "block");


            setTimeout(() => {
                $(`#${selectedTab} .loading-style1-table`).css("display", "none");
                $(`#${selectedTab} .pagination-loading-handler`).css("display", "none");
                $(`#${selectedTab} .page-number-loading`).css("display", "none");
                $(`#${selectedTab} .loading_date_time_update`).css("display", "none");

                $(`#${selectedTab} .main-table-design`).css("display", "block");
                $(`#${selectedTab} .pagination-container`).css("display", "block");
                $(`#${selectedTab} .page-number12-wrap`).css("display", "block");
                $(`#${selectedTab} .style_date_time_wrap`).css("display", "block");
            }, 2000);

        } else {

            $(`#${selectedTab} .style12-section .box-style12 .no-result`).css("display", "block");

        }

        hideStyleTwoAllPopup();

    });

    $(`#${selectedTab} .style2-box`).click(function () {
        $(`#${selectedTab} .style1-table-wrap`).addClass("displayNone");
        $(`#${selectedTab} .style2-table-wrap`).removeClass("displayNone");

        $(`#${selectedTab} .style2-box`).addClass("clickstylebg");
        $(`#${selectedTab} .style2-box`).removeClass("clickstylebrdr");

        $(`#${selectedTab} .style1-box`).addClass("clickstylebrdr");
        $(`#${selectedTab} .style1-box`).removeClass("clickstylebg");

        $(`#${selectedTab} .double-click-style1`).addClass("displayNone");
        $(`#${selectedTab} .double-click-style2`).removeClass("displayNone");

        let rowNumber = $(`#${selectedTab} .style1-table-wrap #${sty1TableId} tbody tr`);
        if (rowNumber.length > 0) {
            $(`#${selectedTab} .outer-table-style12-box .right-slider5`).css("display", "none");
            $(`#${selectedTab} .outer-table-style12-box .left-slider5`).css("display", "none");


            $(`#${selectedTab} .style2-table-wrap .style2-table-content`).css("display", "none");
            $(`#${selectedTab} .pagination-container`).css("display", "none");
            $(`#${selectedTab} .page-number12-wrap`).css("display", "none");
            $(`#${selectedTab} .style_date_time_wrap`).css("display", "none");

            $(`#${selectedTab} .loading-style2-table`).css("display", "block");
            $(`#${selectedTab} .pagination-loading-handler`).css("display", "block");
            $(`#${selectedTab} .page-number-loading`).css("display", "block");
            $(`#${selectedTab} .loading_date_time_update`).css("display", "block");
            

            setTimeout(() => {
                $(`#${selectedTab} .loading-style2-table`).css("display", "none");
                $(`#${selectedTab} .pagination-loading-handler`).css("display", "none");
                $(`#${selectedTab} .page-number-loading`).css("display", "none");
                $(`#${selectedTab} .loading_date_time_update`).css("display", "none");

                $(`#${selectedTab} .style2-table-wrap .style2-table-content`).css("display", "block");
                $(`#${selectedTab} .pagination-container`).css("display", "block");
                $(`#${selectedTab} .page-number12-wrap`).css("display", "block");
                $(`#${selectedTab} .style_date_time_wrap`).css("display", "block");
            }, 2000);
        } else {

            $(`#${selectedTab} .style12-section .box-style12 .no-result`).css("display", "block");
            
        }

        hideStyleOneAllPopup();

    });
}


styleIconSwitcherOperation("Main", "resizable554");

// CLICL TO TOGGLE STYLE1 & STYLE2 END =====

// ============== STYLE 1 STYLE 2 END ==============

// X CLICK TO REMOVE COLUMN START ==============
// Arguments (headClick):
// 1. Selected TAB ID
// 2. Style1 Table ID
// Arguments (manResTableRender): 
// 1. Style1 Table ID,
// 2. Style1 DoubleClick To Display Left List ID
// 3. Style1 DoubleClick To Remove Right List ID
// 4. Style1 DoubleClick Every List ID (res-id-table-)
function headClick(target, index, selectedTab, sty1TableId, sty1dblClickLeftListId, sty1dblClickRightListId, sty1AllListIdPrefix) {
    let regex = /cross/g;
    let regexD = /drop-filter/g;
    if (target.tagName === "DIV" && regex.test(target.id)) {
        $(`#${sty1TableId} th:nth-child(${index})`).addClass("th-dis-none");
        $(`#${sty1TableId} td:nth-child(${index})`).addClass("th-dis-none");
        $(`#${selectedTab} .outer-table-style12-box .style1-table-wrap .clone-head-table-wrap .mytablesty12 th:nth-child(${index})`).addClass("th-dis-none");
        manResTableRender(selectedTab, sty1TableId, sty1dblClickLeftListId, sty1dblClickRightListId, sty1AllListIdPrefix);
        $("#col8Filter").css('display', 'none');
        resetDownArrow();
        return "hidePopup";

    } else if (target.tagName === "DIV" && regexD.test(target.className)) {

        headerIndexClick = index;
        let hideFilterWhenClick = $(`#${sty1TableId} th:nth-child(${index}) .drop-filter .fa-caret-down`).hasClass("down-animation-icon");
        let filterTargeting = document.querySelector('#col8Filter');
        let filterStyles = window.getComputedStyle(filterTargeting);

        if (hideFilterWhenClick == true && filterStyles.display == "block") {
            const rotateIcon = document.querySelectorAll(`#${selectedTab} .outer-table-style12-box i.fa-caret-down.down-animation-icon`);
            for (let i = 0; i < rotateIcon.length; i++) {
                $(rotateIcon[i]).removeClass("down-animation-icon");
            }
            $("#col8Filter").css('display', 'none');

            return "hidePopup";
        }
        else {
            let dataP = $(`#${sty1TableId} td:nth-child(${index}) .mr-tableData`);
            let headingPop = $(`#${sty1TableId} th:nth-child(${index})`)[0].textContent;

            const rotateIcon = document.querySelectorAll(`#${selectedTab} .outer-table-style12-box i.fa-caret-down.down-animation-icon`);
            for (let i = 0; i < rotateIcon.length; i++) {
                $(rotateIcon[i]).removeClass("down-animation-icon");
            }

            // this code add the down-animation-icon to the drop filter
            $(`#${sty1TableId} th:nth-child(${index}) .drop-filter .fa-caret-down`).addClass("down-animation-icon");
            $(`.clone-head-table-wrap .mytablesty12 th:nth-child(${index}) .drop-filter .fa-caret-down`).addClass("down-animation-icon");

            $("#col8Filter #tableHeaderPop").html(headingPop);
            let targetModal = $("#col8Filter #checkbox-table-first tbody");
            const dataC = new Set();
            for (let i = 0; i < dataP.length; i++) {
                dataC.add(dataP[i].textContent);
            }
            let tableTr = "";
            for (const item of dataC) {
                tableTr +=
                    `<tr>
                    <td>
                        <div class="popup__checkbox__page__toggle">
                            <label class="popup__checkbox__toggle">
                                <input class="popup__checkbox__toggle__input" type="checkbox">
                                <span class="popup__checkbox__toggle__label">
                                    <span class="popup__checkbox__toggle__text">${item}</span>
                                </span>
                            </label>
                        </div>
                    </td>
                </tr>`;
            }
            targetModal.html(tableTr);

            return "showPopup";
        }
    }
}


// Arguments (table1HeadClick):
// 1. Selected TAB ID
// 2. Style1 Table ID
function table1HeadClick(selectedTab, sty1TableId, sty1dblClickLeftListId, sty1dblClickRightListId, sty1AllListIdPrefix) {
    $(`#${sty1TableId} th`).click(function (e) {
        
        let target = e.target;
        let index = $(this).index() + 1;
        if(target.tagName === "SPAN" && target.className === "header-title"){
            $("#col8Filter").css('display', 'none');
            const rotateIcon = document.querySelectorAll(".outer-table-style12-box i.fa-caret-down.down-animation-icon");
            for (let i = 0; i < rotateIcon.length; i++) {
                $(rotateIcon[i]).removeClass("down-animation-icon");
            }
            $(`#${sty1TableId} th:nth-child(${index}) .table-head-updown i`).toggleClass("fa-chevron-up fa-chevron-down");
            $(`#${selectedTab} .clone-head-table-wrap .mytablesty12 th:nth-child(${index}) .table-head-updown i`).toggleClass("fa-chevron-up fa-chevron-down");
            
            $(`#${selectedTab} .main-table-design`).css("display", "none");
            $(`#${selectedTab} .pagination-container`).css("display", "none");
            $(`#${selectedTab} .page-number12-wrap`).css("display", "none");
            $(`#${selectedTab} .style_date_time_wrap`).css("display", "none");

            $(`#${selectedTab} .loading-style1-table`).css("display", "block");
            $(`#${selectedTab} .pagination-loading-handler`).css("display", "block");
            $(`#${selectedTab} .page-number-loading`).css("display", "block");
            $(`#${selectedTab} .loading_date_time_update`).css("display", "block");

            // $(`#${sty1dblClickRightListId} .double_click_selection_box`).css('display', 'none');
            // $(`#${sty1dblClickRightListId} .checkbox-table-loading`).css('display', 'block');

            // $(`#${sty1dblClickLeftListId} .double_click_selection_box`).css('display', 'none');
            // $(`#${sty1dblClickLeftListId} .checkbox-table-loading`).css('display', 'block');

            setTimeout(() => {
                $(`#${selectedTab} .loading-style1-table`).css("display", "none");
                $(`#${selectedTab} .pagination-loading-handler`).css("display", "none");
                $(`#${selectedTab} .page-number-loading`).css("display", "none");
                $(`#${selectedTab} .loading_date_time_update`).css("display", "none");
                
                $(`#${selectedTab} .main-table-design`).css("display", "block");
                $(`#${selectedTab} .pagination-container`).css("display", "block");
                $(`#${selectedTab} .page-number12-wrap`).css("display", "block");
                $(`#${selectedTab} .style_date_time_wrap`).css("display", "block");

                // $(`#${sty1dblClickRightListId} .double_click_selection_box`).css('display', 'block');
                // $(`#${sty1dblClickRightListId} .checkbox-table-loading`).css('display', 'none');

                // $(`#${sty1dblClickLeftListId} .double_click_selection_box`).css('display', 'block');
                // $(`#${sty1dblClickLeftListId} .checkbox-table-loading`).css('display', 'none');
            }, 2000);

        }else{
            if (target.tagName === "I") {
                target = target.parentNode;
            }
            let popupDecision = headClick(target, index, selectedTab, sty1TableId, sty1dblClickLeftListId, sty1dblClickRightListId, sty1AllListIdPrefix);

            if (target.className == "drop-filter" && popupDecision == "showPopup") {
                let elementPositionMain = e.target.getBoundingClientRect();;
                $("#col8Filter").css('display', 'none');
                $("#col8Filter").css({
                    top: ((elementPositionMain.y) + window.scrollY + 35),
                    left: ((elementPositionMain.x) - 235),
                    position: "absolute"
                });
                $("#col8Filter").css('display', 'block');

                $("#col8Filter .checkbox-table-loading").css("display", "block");
                $("#col8Filter .checkbox-table-scroll").css("display", "none");

                setTimeout(() => {
                    $("#col8Filter .checkbox-table-loading").css("display", "none");
                    $("#col8Filter .checkbox-table-scroll").css("display", "block");
                }, 2000);
            }
        }

    });

    $(`#${selectedTab} .outer-table-style12-box .style1-table-wrap .clone-head-table-wrap .mytablesty12 th`).click(function (e) {
        let target = e.target;
        let index = $(this).index() + 1;
        if(target.tagName === "SPAN" && target.className === "header-title"){
            $("#col8Filter").css('display', 'none');
            const rotateIcon = document.querySelectorAll(".outer-table-style12-box i.fa-caret-down.down-animation-icon");
            for (let i = 0; i < rotateIcon.length; i++) {
                $(rotateIcon[i]).removeClass("down-animation-icon");
            }
            $(`#${sty1TableId} th:nth-child(${index}) .table-head-updown i`).toggleClass("fa-chevron-up fa-chevron-down");
            $(`#${selectedTab} .clone-head-table-wrap .mytablesty12 th:nth-child(${index}) .table-head-updown i`).toggleClass("fa-chevron-up fa-chevron-down");
            
            $(`#${selectedTab} .main-table-design`).css("display", "none");
            $(`#${selectedTab} .pagination-container`).css("display", "none");
            $(`#${selectedTab} .page-number12-wrap`).css("display", "none");
            $(`#${selectedTab} .style_date_time_wrap`).css("display", "none");

            $(`#${selectedTab} .loading-style1-table`).css("display", "block");
            $(`#${selectedTab} .pagination-loading-handler`).css("display", "block");
            $(`#${selectedTab} .page-number-loading`).css("display", "block");
            $(`#${selectedTab} .loading_date_time_update`).css("display", "block");

            
            setTimeout(() => {
                $(`#${selectedTab} .loading-style1-table`).css("display", "none");
                $(`#${selectedTab} .pagination-loading-handler`).css("display", "none");
                $(`#${selectedTab} .page-number-loading`).css("display", "none");
                $(`#${selectedTab} .loading_date_time_update`).css("display", "none");
                
                $(`#${selectedTab} .main-table-design`).css("display", "block");
                $(`#${selectedTab} .pagination-container`).css("display", "block");
                $(`#${selectedTab} .page-number12-wrap`).css("display", "block");
                $(`#${selectedTab} .style_date_time_wrap`).css("display", "block");
            }, 2000);
        }else{
            if (target.tagName === "I") {
                target = target.parentNode;
            }
            let popupDecision = headClick(target, index, selectedTab, sty1TableId, sty1dblClickLeftListId, sty1dblClickRightListId, sty1AllListIdPrefix);

            if (target.className == "drop-filter" && popupDecision == "showPopup") {
                let elementPositionMain = e.target.getBoundingClientRect();;
                $("#col8Filter").css('display', 'none');
                $("#col8Filter").css({
                    // top: ((elementPositionMain.y) + window.scrollY + 30),
                    top: (51),
                    left: ((elementPositionMain.x) - 235),
                    position: "fixed"
                });
                $("#col8Filter").css('display', 'block');

                $("#col8Filter .checkbox-table-loading").css("display", "block");
                $("#col8Filter .checkbox-table-scroll").css("display", "none");

                setTimeout(() => {
                    $("#col8Filter .checkbox-table-loading").css("display", "none");
                    $("#col8Filter .checkbox-table-scroll").css("display", "block");
                }, 2000);
            }
        }

    });
}

// ---------- ======= Double Click to ADD or REMOVE Start ======= -------------
// Arguments (manResTableRender): 
// 1. Style1 Table ID,
// 2. Style1 DoubleClick To Display Left List ID
// 3. Style1 DoubleClick To Remove Right List ID
// 4. Style1 DoubleClick Every List ID (res-id-table-)

function manResTableRender(selectedTab, sty1TableId, sty1dblClickLeftListId, sty1dblClickRightListId, sty1AllListIdPrefix) {
    
    let tabHD = $(`#${sty1TableId} thead th`);
    let len = tabHD.length;
    let htmlTableR = "";
    let htmlTableL = "";
    for (let i = 2; i < len; i++) {
        let className = tabHD[i].className.match(/column-header-\d+/g)[0];
        let pos = className.match(/\d+/g)[0];
        // let _id = "res-id-table-" + pos;
        let _id = `${sty1AllListIdPrefix}${pos}`;
        let content = tabHD[i].textContent.trim();
        let regex = /th-dis-none/g;
        if (regex.test(tabHD[i].className)) {
            htmlTableL += `<tr id="${_id}" ondblclick="dblclickResMove(this, '${selectedTab}', '${sty1TableId}', '${sty1dblClickLeftListId}', '${sty1dblClickRightListId}', '${sty1AllListIdPrefix}')" onclick="clickAddClass(this)">
                <td>${content}</td>
            </tr>`;
        } else {
            htmlTableR += `<tr id="${_id}" ondblclick="dblclickResMove(this, '${selectedTab}', '${sty1TableId}', '${sty1dblClickLeftListId}', '${sty1dblClickRightListId}', '${sty1AllListIdPrefix}')" onclick="clickAddClass(this)">
                <td>${content}</td>
            </tr>`;
        }
    }
    $(`#${sty1dblClickRightListId} table`).html(htmlTableR);

    $(`#${sty1dblClickLeftListId} table`).html(htmlTableL);

    $(`#${sty1dblClickRightListId} .double_click_selection_box`).css('display', 'none');
    $(`#${sty1dblClickRightListId} .checkbox-table-loading`).css('display', 'block');

	$(`#${sty1dblClickLeftListId} .double_click_selection_box`).css('display', 'none');
	$(`#${sty1dblClickLeftListId} .checkbox-table-loading`).css('display', 'block');

	setTimeout(() => {
		$(`#${sty1dblClickRightListId} .double_click_selection_box`).css('display', 'block');
        $(`#${sty1dblClickRightListId} .checkbox-table-loading`).css('display', 'none');

	    $(`#${sty1dblClickLeftListId} .double_click_selection_box`).css('display', 'block');
	    $(`#${sty1dblClickLeftListId} .checkbox-table-loading`).css('display', 'none');
	}, 1000);
}


// Arguments (dblclickResMove):
// 1. Style1 Table ID
// 2. Style1 DoubleClick To Display Left List ID
// 3. Style1 DoubleClick To Remove Right List ID 
// 4. Selected TAB ID
// Arguments (manResTableRender): 
// 1. Style1 Table ID
// 2. Style1 DoubleClick To Display Left List ID
// 3. Style1 DoubleClick To Remove Right List ID
// 4. Style1 DoubleClick Every List ID (res-id-table-)
function dblclickResMove(e, selectedTab, sty1TableId, sty1dblClickLeftListId, sty1dblClickRightListId, sty1AllListIdPrefix) {
    let _id = $(e).parent().parent().parent().attr("id");
    let index = $(e).attr("id").match(/\d+/g)[0];
    if (_id == sty1dblClickLeftListId) {
        $(e).remove();
        $(`#${sty1TableId} th.column-header-${index}`).removeClass("th-dis-none");
        $(`#${sty1TableId} td.column-header-${index}`).removeClass("th-dis-none");
        $(`#${selectedTab} .outer-table-style12-box .style1-table-wrap .clone-head-table-wrap .mytablesty12 th.column-header-${index}`).removeClass("th-dis-none");
        manResTableRender(selectedTab, sty1TableId, sty1dblClickLeftListId, sty1dblClickRightListId, sty1AllListIdPrefix);
    }
    else if (_id == sty1dblClickRightListId) {
        $(e).remove();
        $(`#${sty1TableId} th.column-header-${index}`).addClass("th-dis-none");
        $(`#${sty1TableId} td.column-header-${index}`).addClass("th-dis-none");
        $(`#${selectedTab} .outer-table-style12-box .style1-table-wrap .clone-head-table-wrap .mytablesty12 th.column-header-${index}`).addClass("th-dis-none");
        manResTableRender(selectedTab, sty1TableId, sty1dblClickLeftListId, sty1dblClickRightListId, sty1AllListIdPrefix);
    }
}


// Arguments (moveResLeftToRight):
// 1. Style1 Table ID
// 2. Style1 DoubleClick To Display Left List ID 
// 3. Selected TAB ID
// Arguments (manResTableRender): 
// 1. Style1 Table ID,
// 2. Style1 DoubleClick To Display Left List ID
// 3. Style1 DoubleClick To Remove Right List ID
// 4. Style1 DoubleClick Every List ID (res-id-table-)
function moveResLeftToRight(selectedTab, sty1TableId, sty1dblClickLeftListId, sty1dblClickRightListId, sty1AllListIdPrefix) {
    let tr = $(`#${sty1dblClickLeftListId} table tr.mark-table-data`);
    let len = tr.length;
    for (let i = 0; i < len; i++) {
        let index = $(tr[i]).attr("id").match(/\d+/g)[0];
        $(tr[i]).remove();
        $(`#${sty1TableId} th.column-header-${index}`).removeClass("th-dis-none");
        $(`#${sty1TableId} td.column-header-${index}`).removeClass("th-dis-none");
        $(`#${selectedTab} .outer-table-style12-box .style1-table-wrap .clone-head-table-wrap .mytablesty12 th.column-header-${index}`).removeClass("th-dis-none");
        manResTableRender(selectedTab, sty1TableId, sty1dblClickLeftListId, sty1dblClickRightListId, sty1AllListIdPrefix);
    }
}


// Arguments (moveResRightToLeft):
// 1. Style1 Table ID
// 2. Style1 DoubleClick To Remove Right List ID 
// 3. Selected TAB ID
// Arguments (manResTableRender): 
// 1. Style1 Table ID,
// 2. Style1 DoubleClick To Display Left List ID
// 3. Style1 DoubleClick To Remove Right List ID
// 4. Style1 DoubleClick Every List ID (res-id-table-)
function moveResRightToLeft(selectedTab, sty1TableId, sty1dblClickLeftListId, sty1dblClickRightListId, sty1AllListIdPrefix) {
    let tr = $(`#${sty1dblClickRightListId} table tr.mark-table-data`);
    let len = tr.length;
    for (let i = 0; i < len; i++) {
        let index = $(tr[i]).attr("id").match(/\d+/g)[0];
        $(tr[i]).remove();
        $(`#${sty1TableId} th.column-header-${index}`).addClass("th-dis-none");
        $(`#${sty1TableId} td.column-header-${index}`).addClass("th-dis-none");
        $(`#${selectedTab} .outer-table-style12-box .style1-table-wrap .clone-head-table-wrap .mytablesty12 th.column-header-${index}`).addClass("th-dis-none");
        manResTableRender(selectedTab, sty1TableId, sty1dblClickLeftListId, sty1dblClickRightListId, sty1AllListIdPrefix);
    }
}



// Arguments (ResorderUp): 
// 1. Style1 DoubleClick To Remove Right List ID
// Arguments (columnMove): 
// 1. Style1 Table ID
// 2. Selected TAB ID
function ResorderUp(selectedTab, sty1TableId, sty1dblClickRightListId) {
    let row = $(`#${sty1dblClickRightListId} table tr.mark-table-data`);
    let rowFirst = $(`#${sty1dblClickRightListId} table tr`)[0];
    if (rowFirst != row[0]) {
        row.each(function () {
            let rw = $(this).closest("tr.mark-table-data");
            let index = $(rw).attr("id").match(/\d+/g)[0];
            rw.insertBefore(rw.prev());
            columnMove(index, "up", selectedTab, sty1TableId);
        });
    }
}


// Arguments (ResorderDown): 
// 1. Style1 DoubleClick To Remove Right List ID
// Arguments (columnMove): 
// 1. Style1 Table ID
// 2. Selected TAB ID
function ResorderDown(selectedTab, sty1TableId, sty1dblClickRightListId) {
    let row = $(`#${sty1dblClickRightListId} table tr.mark-table-data`);
    row.each(function () {
        let rw = $(this).closest("tr.mark-table-data");
        let index = $(rw).attr("id").match(/\d+/g)[0];
        for (let i = 0; i < row.length; i++) {
            rw.insertAfter(rw.next());
            columnMove(index, "down", selectedTab, sty1TableId);
        }
    });
}



function findVisible(element, pos) {
    let regex = /th-dis-none/g;
    if (pos == "prev" && regex.test(element.attr("class"))) {
        return findVisible(element.prev(), "prev");
    } else if (pos == "next" && regex.test(element.attr("class"))) {
        return findVisible(element.next(), "next");
    }
    else return element;
}


// Arguments (columnMove): 
// 1. Style1 Table ID
// 2. Selected TAB ID
function columnMove(index, direc, selectedTab, sty1TableId) {
    let tHead = $(`#${sty1TableId} th.column-header-${index}`);
    let tBody = $(`#${sty1TableId} td.column-header-${index}`);
    let tvHead = $(`#${selectedTab} .outer-table-style12-box .style1-table-wrap .clone-head-table-wrap .mytablesty12 th.column-header-${index}`);
    let len = tBody.length;
    if (direc == "up") {
        let eleH = findVisible(tHead.prev(), "prev");
        tHead.insertBefore(eleH);
        let eleHV = findVisible(tvHead.prev(), "prev");
        tvHead.insertBefore(eleHV);
        for (let i = 0; i < len; i++) {
            let tbCell = $(tBody[i]);
            let eleC = findVisible(tbCell.prev(), "prev");
            tbCell.insertBefore(eleC);
        }
    } else if (direc == "down") {
        let eleH = findVisible(tHead.next(), "next");
        tHead.insertAfter(eleH);
        let eleHV = findVisible(tvHead.next(), "next");
        tvHead.insertAfter(eleHV);
        for (let i = 0; i < len; i++) {
            let tbCell = $(tBody[i]);
            let eleC = findVisible(tbCell.next(), "next");
            tbCell.insertAfter(eleC);
        }
    }
}
// ---------- ======= Double Click to ADD or REMOVE End ======= -------------

// ======== STYLE 2 Table =========
// Arguments (table2HeadClickCall): 
// 1. Selected TAB ID
function table2HeadClickCall(selectedTab, sty2dblClickLeftListId, sty2dblClickRightListId, sty2AllListIdPrefix) {
    table2HeadClick("sty2table2", selectedTab, sty2dblClickLeftListId, sty2dblClickRightListId, sty2AllListIdPrefix);
    table2HeadClick("sty2table3", selectedTab, sty2dblClickLeftListId, sty2dblClickRightListId, sty2AllListIdPrefix);
    table2HeadClick("sty2table4", selectedTab, sty2dblClickLeftListId, sty2dblClickRightListId, sty2AllListIdPrefix);
    table2HeadClick("sty2table5", selectedTab, sty2dblClickLeftListId, sty2dblClickRightListId, sty2AllListIdPrefix);
    table2HeadClick("sty2table6", selectedTab, sty2dblClickLeftListId, sty2dblClickRightListId, sty2AllListIdPrefix);
    table2HeadClick("sty2table7", selectedTab, sty2dblClickLeftListId, sty2dblClickRightListId, sty2AllListIdPrefix);
    table2HeadClick("sty2table8", selectedTab, sty2dblClickLeftListId, sty2dblClickRightListId, sty2AllListIdPrefix);
    table2HeadClick("sty2table9", selectedTab, sty2dblClickLeftListId, sty2dblClickRightListId, sty2AllListIdPrefix);
}

// Arguments (table2HeadClick): 
// 1. Selected TAB ID
function table2HeadClick(tName, selectedTab, sty2dblClickLeftListId, sty2dblClickRightListId, sty2AllListIdPrefix) {
    $(`#${selectedTab} .style2-table-wrap .table.${tName} th`).click(function (e) {
        let target = e.target;
        let index = $(this).index() + 1;
        if (target.tagName === "I") {
            target = target.parentNode;
        }
        let regex = /style2_cross\d+/g;
        if (target.tagName === "DIV" && regex.test(target.className)) {
            $(`#${selectedTab} .style2-table-wrap .table.${tName} th:nth-child(${index})`).addClass("th-dis-none");
            $(`#${selectedTab} .style2-table-wrap .table.${tName} td:nth-child(${index})`).addClass("th-dis-none");
            allHeadTable2Call(selectedTab, sty2dblClickLeftListId, sty2dblClickRightListId, sty2AllListIdPrefix);
            $("#col8Filter").css('display', 'none');
        }
    });
}

// Arguments (allHeadTable2Call): 
// 1. Selected TAB ID
// 2. Style2 DoubleClick To Display Left List ID
// 3. Style2 DoubleClick To Display Right List ID
// Arguments (allHeadTable2): 
// 1. Selected TAB ID
// 2. Style1 DoubleClick Every List ID (res-table-two-)
function allHeadTable2Call(selectedTab, sty2dblClickLeftListId, sty2dblClickRightListId, sty2AllListIdPrefix) {
    let { htmlTableL: L2, htmlTableR: R2 } = allHeadTable2("sty2table2", selectedTab, sty2dblClickLeftListId, sty2dblClickRightListId, sty2AllListIdPrefix);
    let { htmlTableL: L3, htmlTableR: R3 } = allHeadTable2("sty2table3", selectedTab, sty2dblClickLeftListId, sty2dblClickRightListId, sty2AllListIdPrefix);
    let { htmlTableL: L4, htmlTableR: R4 } = allHeadTable2("sty2table4", selectedTab, sty2dblClickLeftListId, sty2dblClickRightListId, sty2AllListIdPrefix);
    let { htmlTableL: L5, htmlTableR: R5 } = allHeadTable2("sty2table5", selectedTab, sty2dblClickLeftListId, sty2dblClickRightListId, sty2AllListIdPrefix);
    let { htmlTableL: L6, htmlTableR: R6 } = allHeadTable2("sty2table6", selectedTab, sty2dblClickLeftListId, sty2dblClickRightListId, sty2AllListIdPrefix);
    let { htmlTableL: L7, htmlTableR: R7 } = allHeadTable2("sty2table7", selectedTab, sty2dblClickLeftListId, sty2dblClickRightListId, sty2AllListIdPrefix);
    let { htmlTableL: L8, htmlTableR: R8 } = allHeadTable2("sty2table8", selectedTab, sty2dblClickLeftListId, sty2dblClickRightListId, sty2AllListIdPrefix);
    let { htmlTableL: L9, htmlTableR: R9 } = allHeadTable2("sty2table9", selectedTab, sty2dblClickLeftListId, sty2dblClickRightListId, sty2AllListIdPrefix);
    $(`#${sty2dblClickRightListId} table`).html(R2 + R3 + R4 + R5 + R6 + R7 + R8 + R9);
    $(`#${sty2dblClickLeftListId} table`).html(L2 + L3 + L4 + L5 + L6 + L7 + L8 + L9);

    $(`#${sty2dblClickRightListId} .double_click_selection_box`).css('display', 'none');
    $(`#${sty2dblClickRightListId} .checkbox-table-loading`).css('display', 'block');

	$(`#${sty2dblClickLeftListId} .double_click_selection_box`).css('display', 'none');
	$(`#${sty2dblClickLeftListId} .checkbox-table-loading`).css('display', 'block');

	setTimeout(() => {
		$(`#${sty2dblClickRightListId} .double_click_selection_box`).css('display', 'block');
        $(`#${sty2dblClickRightListId} .checkbox-table-loading`).css('display', 'none');

	    $(`#${sty2dblClickLeftListId} .double_click_selection_box`).css('display', 'block');
	    $(`#${sty2dblClickLeftListId} .checkbox-table-loading`).css('display', 'none');
	}, 1000);
}


// Arguments (allHeadTable2): 
// 1. Selected TAB ID
// 2. Style1 DoubleClick Every List ID (res-table-two-)
function allHeadTable2(tName, selectedTab, sty2dblClickLeftListId, sty2dblClickRightListId, sty2AllListIdPrefix) {
    let head = $(`#${selectedTab} .style2-table-wrap .table.${tName}`)[0];
    let th = $(head).find("th");
    let len = th.length;
    let htmlTableR = "";
    let htmlTableL = "";
    for (let i = 0; i < len; i++) {
        let className = th[i].className.match(/style-two-head-\d+/g)[0];
        let pos = className.match(/\d+/g)[0];
        // let _id = "res-table-two-" + pos;
        let _id = `${sty2AllListIdPrefix}${pos}`;
        let content = th[i].textContent.trim();
        let regex = /th-dis-none/g;
        if (regex.test(th[i].className)) {
            htmlTableL += `<tr id="${_id}" ondblclick="dblclickRes2Move(this, '${selectedTab}', '${sty2dblClickLeftListId}', '${sty2dblClickRightListId}', '${sty2AllListIdPrefix}')" onclick="clickAddClass(this)">
                <td>${content}</td>
            </tr>`;
        } else {
            htmlTableR += `<tr id="${_id}" ondblclick="dblclickRes2Move(this, '${selectedTab}', '${sty2dblClickLeftListId}', '${sty2dblClickRightListId}', '${sty2AllListIdPrefix}')" onclick="clickAddClass(this)">
                <td>${content}</td>
            </tr>`;
        }
    }
    return {
        htmlTableL,
        htmlTableR,
    }
}


// Arguments (dblclickRes2Move): 
// 1. Selected TAB ID
// 2. Style2 DoubleClick To Display Left List ID
// 3. Style2 DoubleClick To Display Right List ID
// Arguments (allHeadTable2Call): 
// 1. Selected TAB ID
// 2. Style2 DoubleClick To Display Left List ID
// 3. Style2 DoubleClick To Display Right List ID
// Arguments (allHeadTable2): 
// 1. Selected TAB ID
// 2. Style1 DoubleClick Every List ID (res-table-two-)
function dblclickRes2Move(e, selectedTab, sty2dblClickLeftListId, sty2dblClickRightListId, sty2AllListIdPrefix) {
    let _id = $(e).parent().parent().parent().attr("id");
    let index = $(e).attr("id").match(/\d+/g)[0];
    if (_id == sty2dblClickLeftListId) {
        $(e).remove();
        $(`#${selectedTab} .style2-table-wrap .table th.style-two-head-${index}`).removeClass("th-dis-none");
        $(`#${selectedTab} .style2-table-wrap .table td.style-two-head-${index}`).removeClass("th-dis-none");
        allHeadTable2Call(selectedTab, sty2dblClickLeftListId, sty2dblClickRightListId, sty2AllListIdPrefix);
    }
    else if (_id == sty2dblClickRightListId) {
        $(e).remove();
        $(`#${selectedTab} .style2-table-wrap .table th.style-two-head-${index}`).addClass("th-dis-none");
        $(`#${selectedTab} .style2-table-wrap .table td.style-two-head-${index}`).addClass("th-dis-none");
        allHeadTable2Call(selectedTab, sty2dblClickLeftListId, sty2dblClickRightListId, sty2AllListIdPrefix);
    }
}


// Arguments (pagiHideHead): 
// 1. Selected TAB ID
// 2. Style2 DoubleClick To Display Left List ID
function pagiHideHead(selectedTab, sty2dblClickLeftListId) {
    let tr = $(`#${sty2dblClickLeftListId} tr`);
    let len = tr.length;
    for (let i = 0; i < len; i++) {
        let index = $(tr[i]).attr("id").match(/\d+/g)[0];
        $(`#${selectedTab} .style2-table-wrap .table th.style-two-head-${index}`).addClass("th-dis-none");
        $(`#${selectedTab} .style2-table-wrap .table td.style-two-head-${index}`).addClass("th-dis-none");
    }
}



// Arguments (moveRes2LeftToRight): 
// 1. Selected TAB ID
// 2. Style2 DoubleClick To Display Left List ID
// Arguments (allHeadTable2Call): 
// 1. Selected TAB ID
// 2. Style2 DoubleClick To Display Left List ID
// 3. Style2 DoubleClick To Display Right List ID
function moveRes2LeftToRight(selectedTab, sty2dblClickLeftListId, sty2dblClickRightListId, sty2AllListIdPrefix) {
    let tr = $(`#${sty2dblClickLeftListId} table tr.mark-table-data`);
    let len = tr.length;
    for (let i = 0; i < len; i++) {
        let index = $(tr[i]).attr("id").match(/\d+/g)[0];
        $(tr[i]).remove();
        $(`#${selectedTab} .style2-table-wrap .table th.style-two-head-${index}`).removeClass("th-dis-none");
        $(`#${selectedTab} .style2-table-wrap .table td.style-two-head-${index}`).removeClass("th-dis-none");
        allHeadTable2Call(selectedTab, sty2dblClickLeftListId, sty2dblClickRightListId, sty2AllListIdPrefix);
    }
}


// Arguments (moveRes2RightToLeft): 
// 1. Selected TAB ID
// 2. Style2 DoubleClick To Display Right List ID
// Arguments (allHeadTable2Call): 
// 1. Selected TAB ID
// 2. Style2 DoubleClick To Display Left List ID
// 3. Style2 DoubleClick To Display Right List ID
function moveRes2RightToLeft(selectedTab, sty2dblClickLeftListId, sty2dblClickRightListId, sty2AllListIdPrefix) {
    let tr = $(`#${sty2dblClickRightListId} table tr.mark-table-data`);
    let len = tr.length;
    for (let i = 0; i < len; i++) {
        let index = $(tr[i]).attr("id").match(/\d+/g)[0];
        $(tr[i]).remove();
        $(`#${selectedTab} .style2-table-wrap .table th.style-two-head-${index}`).addClass("th-dis-none");
        $(`#${selectedTab} .style2-table-wrap .table td.style-two-head-${index}`).addClass("th-dis-none");
        allHeadTable2Call(selectedTab, sty2dblClickLeftListId, sty2dblClickRightListId, sty2AllListIdPrefix);
    }
}
// X CLICK TO REMOVE COLUMN END ==============

// TABLE RESIZEABLE START ===////////////////===
function resizeWithUi(sty1TableId, tQuery, thHeight) {
    $(tQuery).resizable({
        handles: "e",
        minHeight: thHeight,
        maxHeight: thHeight,
        minWidth: 40,
        resize: function (event, ui) {
            let sizerID = "." + event.target.classList[0] + "-sizer";
            let valueSize = ui.size.width;
            $(sizerID).width(valueSize);
            let resizer = event.target.classList[0] + "-resizer";
            let shrinkWidth = `#${sty1TableId} tbody .${resizer}`;
            let gettingWidth = parseInt($(sizerID).css('width'), 10);
            $(shrinkWidth).width(gettingWidth + "px");

            let changedHeaderClass = event.target.classList[0];
            let changedHeaderWidth = ui.size.width;
            tableResizerData[changedHeaderClass] = changedHeaderWidth + "px";

        }
    });
}
function resizableTable1(selectedTab, sty1TableId) {
    let thHeight = $(`table#${sty1TableId} th:first`).height();
    resizeWithUi(sty1TableId, `table#${sty1TableId} th`, thHeight);
    resizeWithUi(sty1TableId, `#${selectedTab} .outer-table-style12-box .style1-table-wrap .clone-head-table-wrap .mytablesty12 th`, thHeight);
}
// TABLE RESIZEABLE END ===////////////////===
///// Update Clear-Filter Clear Sorting Button Starts

let headerTextOfSubmitAnimation = '';

function threeBtnConfirmModal(decideSelection){
    let headerText = "CONFIRM";
	let detailsText = "Confirm to proceed!";

    if (decideSelection == "updateNowBtn") {
		headerText = "UPDATE NOW";
		detailsText = "Confirm to update data?";
        headerTextOfSubmitAnimation = "Updating";
	} else if (decideSelection == "clearFilterBtn") {
		headerText = "CLEAR FILTER";
		detailsText = "Confirm to clear filter?";
        headerTextOfSubmitAnimation = "Clearing Filters";
	} else if (decideSelection == "clearSortingBtn") {
		headerText = "CLEAR SORTING";
		detailsText = "Confirm to clear sorting?";
        headerTextOfSubmitAnimation = "Clearing Sorting";
	}

    $("#threeBtn_confirm_modal #threeBtn_confirm_header p").html(headerText);
	$("#threeBtn_confirm_modal #threeBtn_confirm_deatis p").html(detailsText);
	$('#threeBtn_confirm_modal').modal('show');
}

function threeBtnConfirmButton(globThreeBtn){
    $('#threeBtn_confirm_modal').modal('hide');

    $('body').addClass("modal-force-open");
    $("#submitting_Info .submit-title").html(`${headerTextOfSubmitAnimation}...`);
	$('#submitting_Info').modal('show');

	let $targetingTextSubmit = $("#submitting_file_info");
	$targetingTextSubmit.html("Need 5 Second to Finish...");
	let submitFileInfo = [ 
			"Need 4 Second to Finish...",
			"Need 3 Second to Finish...", 
			"Need 1 Second to Finish...",
			"Finishing..."];
  
	for (let i = 1; i <= 4; ++i) {
	  (function(index) {
		setTimeout(function() { 
		  $targetingTextSubmit.html(submitFileInfo[index-1]);
		}, i * 2000);
	  })(i);
	}
	
    setTimeout(function() { 
        $('#submitting_Info').modal('hide');
		$('body').removeClass("modal-force-open");

		$('#filterThankYouModal').modal('show');
    
	}, 10000);
}

///// Update Clear-Filter Clear Sorting Button Ends

//----------====== Manage result filter modal ======--------------------
let colOfFilterModal = "";
for (let iCol = 1; iCol <= 66; iCol++) {
    colOfFilterModal += `
    <li id="filter_row${iCol}">
        <div class="right-list-wrap">
            <div class="cursor-box">
                <span>|||</span>
            </div>
            <div class="name-box">
                <span>Column ${iCol}</span>
            </div>
        </div>
    </li>`;
}
document.querySelector("#right_side_filter_lists").innerHTML = colOfFilterModal;

$("#right_side_filter_lists").sortable();
$("#right_side_filter_lists").disableSelection();

$("#left_side_filter_details").sortable();
$("#left_side_filter_details").disableSelection();

$( "#right_side_filter_lists" ).droppable({hoverClass : 'droppableStyle'});
$( "#right_side_filter_lists" ).on('drop',function(event,ui){
    if($(ui.draggable)[0].tagName == "DIV"){
        let dataIdOfDiv = $(ui.draggable).attr("data-id");
        console.log("Data Id: " + dataIdOfDiv);
        $(`#${dataIdOfDiv}`).removeClass("hideFilterRow");
        ui.draggable.remove();
    }
});

$( "#left_side_filter_details" ).droppable({hoverClass : 'droppableStyle'});
$( "#left_side_filter_details" ).on('drop',function(event,ui){
    if($(ui.draggable)[0].tagName === "LI"){
        let listTarget = $(ui.draggable)[0];
        let idOfColumnList = $(ui.draggable).attr("id");
        $("#left_side_filter_details").append(
            `<div class="valdata-box" id="left_${idOfColumnList}" data-id="${idOfColumnList}">
                <p class="filter-col-name">${listTarget.querySelector(".name-box span").innerHTML}</p>
                <div class="valinput">
                    <div class="arrow-equal">
                        <select>
                            <option value="lessThan">&lt;</option>
                            <option value="greaterThan">&gt;</option>
                            <option value="greaterEqual">&gt;=</option>
                            <option value="lessEqual">&lt;=</option>
                            <option value="equalEqual">==</option>
                        </select>
                    </div>
                    <input type="text" class="myzap-input">
                    <div class="delete-mydata" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Click to Delete This Filter" onclick="deleteFilterRowMnRes(this, '${idOfColumnList}')">
                        <i class="fas fa-times"></i>
                    </div>
                </div>
            </div>`
        );
        ui.draggable.addClass("hideFilterRow");
        tooltipForFILTERS();
    }
});

let filtersTargetColumn = '';
function deleteFilterRowMnRes(globThis, targetColumn){
    filtersTargetColumn = targetColumn;
    let filterDeleteRowName = $(`#left_${targetColumn}`).find(".filter-col-name").html();
    $("#filters_confirm_modal #filters_confirm_header p").html("DELETE FILTER");
	$("#filters_confirm_modal #filters_confirm_deatis p").html(`Confirm to delete ${filterDeleteRowName} filter?`);
	$('#filters_confirm_modal').modal('show');
    
}

function filtersConfirmButton(filtersGlob){
    $(`#left_${filtersTargetColumn}`).remove();
    $(`#${filtersTargetColumn}`).removeClass("hideFilterRow");
    $('#filters_confirm_modal').modal('hide');
}

$('#filters_confirm_modal').on('shown.bs.modal', function (e) {
	$('body').addClass("modal-filters-force");
}).on('hidden.bs.modal', function (e) {
    $('body').addClass("modal-open");
});

$('#filter-modal').on('hidden.bs.modal', function (e) {
	$('body').removeClass("modal-open modal-filters-force");
});

function tooltipForFILTERS() {
	$('[data-toggle="tooltip"]').tooltip(
		{
			container: 'body',
			trigger: 'hover',
			placement: 'bottom'
		}
	);
};

//----------====== Manage result filter modal End ======----------------

// ----------- Manage Result Filter Start ------------------
function resetResFilter(e) {
    let inpBox = $(e).parent().parent().children(".outer-data7").find("div.valdata-box div.valinput input.myzap-input");
    inpBox.val("");
}
// ----------- Manage Result Filter End --------------------


function IconModalClick() {
    let viewModalList = document.getElementsByClassName('view-modal-click');
    for (let i = 0; i < viewModalList.length; i++) {
        viewModalList[i].addEventListener("click", function (event) {
            let elementPositionMain = forceEventTargetDiv(event);

            hideStyleOneAllPopup();

            $("#viewtwo").css({
                top: ((elementPositionMain.y) + window.scrollY + 33),
                left: ((elementPositionMain.x) - 10)
            });

            $("#viewtwo").css('display', 'block');

            $("#viewtwo .scrollmodal").css('display', 'none');
            $("#viewtwo .checkbox-table-loading").css('display', 'block');
            
            setTimeout(() => {
                $("#viewtwo .scrollmodal").css('display', 'block');
                $("#viewtwo .checkbox-table-loading").css('display', 'none');
            }, 2000);

        });
    }

    let rowModalClick = document.getElementsByClassName('row-modal-click');
    for (let i = 0; i < rowModalClick.length; i++) {
        rowModalClick[i].addEventListener("click", function (event) {
            let elementPositionMain = forceEventTargetDiv(event);

            hideStyleOneAllPopup();

            $("#rowdetails").css({
                top: ((elementPositionMain.y) + window.scrollY + 33),
                left: ((elementPositionMain.x) - 10)
            });

            $("#rowdetails").css('display', 'block');

            $("#rowdetails .scrollmodal").css('display', 'none');
            $("#rowdetails .checkbox-table-loading").css('display', 'block');
            
            setTimeout(() => {
                $("#rowdetails .scrollmodal").css('display', 'block');
                $("#rowdetails .checkbox-table-loading").css('display', 'none');
            }, 2000);

        });
    }

    let noteModalClick = document.getElementsByClassName('note-modal-click');
    for (let i = 0; i < noteModalClick.length; i++) {
        noteModalClick[i].addEventListener("click", function (event) {
            let elementPositionMain = forceEventTargetDiv(event);

            hideStyleOneAllPopup();

            $("#noteswindow").css({
                top: ((elementPositionMain.y) + window.scrollY + 33),
                left: ((elementPositionMain.x) - 10)
            });

            $("#noteswindow").css('display', 'block');

            $("#noteswindow .scrollmodal").css('display', 'none');
            $("#noteswindow .checkbox-table-loading").css('display', 'block');
            
            setTimeout(() => {
                $("#noteswindow .scrollmodal").css('display', 'block');
                $("#noteswindow .checkbox-table-loading").css('display', 'none');
            }, 2000);

        });
    }

    let copyModalClick = document.getElementsByClassName('copyrowlist-modal-click');
    for (let i = 0; i < copyModalClick.length; i++) {
        copyModalClick[i].addEventListener("click", function (event) {
            let elementPositionMain = forceEventTargetDiv(event);

            hideStyleOneAllPopup();

            $("#copyrowlist").css({
                top: ((elementPositionMain.y) + window.scrollY + 33),
                left: ((elementPositionMain.x) - 10)
            });

            $("#copyrow_list_item_loading").css("display", "block");
            $(".copytoscrollwindow").css("display", "none");
            $(".copytoscrollbtn").css("display", "none");
            
            setTimeout(() => {
                $("#copyrow_list_item_loading").css("display", "none");
                $(".copytoscrollwindow").css("display", "block");
                $(".copytoscrollbtn").css("display", "block");
            }, 2000);

            $("#copyrowlist").css('display', 'block');

        });
    }

    let moveModalClick = document.getElementsByClassName('moverowlist-modal-click');
    for (let i = 0; i < moveModalClick.length; i++) {
        moveModalClick[i].addEventListener("click", function (event) {
            let elementPositionMain = forceEventTargetDiv(event);

            hideStyleOneAllPopup();

            $("#moverowlist").css({
                top: ((elementPositionMain.y) + window.scrollY + 33),
                left: ((elementPositionMain.x) - 10)
            });

            $("#moverow_list_item_loading").css("display", "block");
            $(".movetoscrollwindow").css("display", "none");
            $(".movetoscrollbtn").css("display", "none");
            
            setTimeout(() => {
                $("#moverow_list_item_loading").css("display", "none");
                $(".movetoscrollwindow").css("display", "block");
                $(".movetoscrollbtn").css("display", "block");
            }, 2000);

            $("#moverowlist").css('display', 'block');

        });
    }

    let alertModalClick = document.getElementsByClassName('alertswindow-modal-click');
    for (let i = 0; i < alertModalClick.length; i++) {
        alertModalClick[i].addEventListener("click", function (event) {
            let elementPositionMain = forceEventTargetDiv(event);

            hideStyleOneAllPopup();

            $("#alertswindow").css({
                top: ((elementPositionMain.y) + window.scrollY + 33),
                left: ((elementPositionMain.x) - 10)
            });

            $("#alertswindow").css('display', 'block');

            $("#alertswindow .alert-table-wrap").css('display', 'none');
            $("#alertswindow .loading-alert-table-wrap").css('display', 'block');
            
            setTimeout(() => {
                $("#alertswindow .alert-table-wrap").css('display', 'block');
                $("#alertswindow .loading-alert-table-wrap").css('display', 'none');
            }, 2000);

        });
    }

    let viewModalListSty2 = document.getElementsByClassName('view-modal-click-style2');
    for (let i = 0; i < viewModalListSty2.length; i++) {
        viewModalListSty2[i].addEventListener("click", function (event) {
            let elementPositionMain = forceEventTargetDiv(event);

            hideStyleTwoAllPopup();

            $("#col8Filter").css('display', 'none');

            $("#viewtwo_style2").css({
                top: ((elementPositionMain.y) + window.scrollY + 62),
                left: ((elementPositionMain.x) + 2)
            });

            $("#viewtwo_style2").css('display', 'block');

            $("#viewtwo_style2 .scrollmodal").css('display', 'none');
            $("#viewtwo_style2 .checkbox-table-loading").css('display', 'block');
            
            setTimeout(() => {
                $("#viewtwo_style2 .scrollmodal").css('display', 'block');
                $("#viewtwo_style2 .checkbox-table-loading").css('display', 'none');
            }, 2000);
    
        });
    }

    let rowModalClickSty2 = document.getElementsByClassName('row-modal-click-style2');
    for (let i = 0; i < rowModalClickSty2.length; i++) {
        rowModalClickSty2[i].addEventListener("click", function (event) {
            let elementPositionMain = forceEventTargetDiv(event);

            hideStyleTwoAllPopup();

            $("#col8Filter").css('display', 'none');

            $("#rowdetails_style2").css({
                top: ((elementPositionMain.y) + window.scrollY + 62),
                left: ((elementPositionMain.x) + 2)
            });

            $("#rowdetails_style2").css('display', 'block');

            $("#rowdetails_style2 .scrollmodal").css('display', 'none');
            $("#rowdetails_style2 .checkbox-table-loading").css('display', 'block');
            
            setTimeout(() => {
                $("#rowdetails_style2 .scrollmodal").css('display', 'block');
                $("#rowdetails_style2 .checkbox-table-loading").css('display', 'none');
            }, 2000);

        });
    }

    let noteModalClickSty2 = document.getElementsByClassName('note-modal-click-style2');
    for (let i = 0; i < noteModalClickSty2.length; i++) {
        noteModalClickSty2[i].addEventListener("click", function (event) {
            let elementPositionMain = forceEventTargetDiv(event);

            hideStyleTwoAllPopup();

            $("#col8Filter").css('display', 'none');

            $("#noteswindow_style2").css({
                top: ((elementPositionMain.y) + window.scrollY + 62),
                left: ((elementPositionMain.x) + 2)
            });

            $("#noteswindow_style2").css('display', 'block');

            $("#noteswindow_style2 .scrollmodal").css('display', 'none');
            $("#noteswindow_style2 .checkbox-table-loading").css('display', 'block');
            
            setTimeout(() => {
                $("#noteswindow_style2 .scrollmodal").css('display', 'block');
                $("#noteswindow_style2 .checkbox-table-loading").css('display', 'none');
            }, 2000);

        });
    }

    let copyModalClickSty2 = document.getElementsByClassName('copyrowlist-modal-click-style2');
    for (let i = 0; i < copyModalClickSty2.length; i++) {
        copyModalClickSty2[i].addEventListener("click", function (event) {
            let elementPositionMain = forceEventTargetDiv(event);

            hideStyleTwoAllPopup();

            $("#col8Filter").css('display', 'none');

            $("#copyrowlist_style2").css({
                top: ((elementPositionMain.y) + window.scrollY + 62),
                left: ((elementPositionMain.x) - 804)
            });

            $("#copyrowS2_list_item_loading").css("display", "block");
            $(".copytoscrollwindow_style2").css("display", "none");
            $(".copytoscrollbtn_style2").css("display", "none");
            
            setTimeout(() => {
                $("#copyrowS2_list_item_loading").css("display", "none");
                $(".copytoscrollwindow_style2").css("display", "block");
                $(".copytoscrollbtn_style2").css("display", "block");
            }, 2000);

            $("#copyrowlist_style2").css('display', 'block');

        });
    }

    let moveModalClickSty2 = document.getElementsByClassName('moverowlist-modal-click-style2');
    for (let i = 0; i < moveModalClickSty2.length; i++) {
        moveModalClickSty2[i].addEventListener("click", function (event) {
            let elementPositionMain = forceEventTargetDiv(event);

            hideStyleTwoAllPopup();

            $("#col8Filter").css('display', 'none');

            $("#moverowlist_style2").css({
                top: ((elementPositionMain.y) + window.scrollY + 62),
                left: ((elementPositionMain.x) - 804)
            });

            $("#moverowS2_list_item_loading").css("display", "block");
            $(".movetoscrollwindow_style29").css("display", "none");
            $(".movetoscrollbtn_style29").css("display", "none");
            
            setTimeout(() => {
                $("#moverowS2_list_item_loading").css("display", "none");
                $(".movetoscrollwindow_style29").css("display", "block");
                $(".movetoscrollbtn_style29").css("display", "block");
            }, 2000);

            $("#moverowlist_style2").css('display', 'block');

        });
    }

    let alertModalClickSty2 = document.getElementsByClassName('alertswindow-modal-click-style2');
    for (let i = 0; i < alertModalClickSty2.length; i++) {
        alertModalClickSty2[i].addEventListener("click", function (event) {
            let elementPositionMain = forceEventTargetDiv(event);

            hideStyleTwoAllPopup();

            $("#col8Filter").css('display', 'none');

            $("#alertswindow_style2").css({
                top: ((elementPositionMain.y) + window.scrollY + 62),
                left: ((elementPositionMain.x) - 804)
            });

            $("#alertswindow_style2").css('display', 'block');

            $("#alertswindow_style2 .alert-table-wrap").css('display', 'none');
            $("#alertswindow_style2 .loading-alert-table-wrap").css('display', 'block');
            
            setTimeout(() => {
                $("#alertswindow_style2 .alert-table-wrap").css('display', 'block');
                $("#alertswindow_style2 .loading-alert-table-wrap").css('display', 'none');
            }, 2000);

        });
    }

}

function Style2DropFilterPos() {
    let style2FilterPosition = document.getElementsByClassName('style2-filterPosition');
    for (let i = 0; i < style2FilterPosition.length; i++) {
        style2FilterPosition[i].addEventListener("click", function (event) {
            
            let elementPositionMain = event.target.getBoundingClientRect();
            $("#col8Filter").css('display', 'none');
            $("#col8Filter").css({
                top: ((elementPositionMain.y) + window.scrollY + 30),
                left: ((elementPositionMain.x) - 235)
            });
            $("#col8Filter").css('display', 'block');

            $("#col8Filter .checkbox-table-loading").css("display", "block");
            $("#col8Filter .checkbox-table-scroll").css("display", "none");

            setTimeout(() => {
                $("#col8Filter .checkbox-table-loading").css("display", "none");
                $("#col8Filter .checkbox-table-scroll").css("display", "block");
            }, 2000);
        });
    }
}

// This Function will trigger when col8Filter is closed
$('#col8Filter').on('hidden.bs.modal', function (e) {
    $("i.fa-caret-down.down-animation-icon").removeClass("down-animation-icon");
});
$('#dropBtnModal').on('hidden.bs.modal', function (e) {
    $("i.fa-caret-down.down-animation-icon").removeClass("down-animation-icon");
});


// Forcing Event Target To div for Dynamic PopUp Position 
function forceEventTargetDiv(e) {
    let elementPosition = "";
    let targetName = e.target.nodeName.toLowerCase();
    //console.log("Tag Name: " + targetName);
    if (targetName == "i") {
        elementPosition = e.target.parentElement.getBoundingClientRect();
    } else {
        if (targetName == "path") {
            let pathFinder = e.target.parentElement.nodeName.toLowerCase();
            if (pathFinder == "g") {
                elementPosition = e.target.parentElement.parentElement.parentElement.getBoundingClientRect();
            } else {
                elementPosition = e.target.parentElement.parentElement.getBoundingClientRect();
            }
        }
        else if (targetName == "g") {
            elementPosition = e.target.parentElement.parentElement.getBoundingClientRect();
        }
        else if (targetName == "svg") {
            elementPosition = e.target.parentElement.getBoundingClientRect();
        }
        else {
            elementPosition = e.target.getBoundingClientRect();
        }
    }
    return elementPosition;
}

$("#viewtwo_close").click(function () {
    $("#viewtwo").css('display', 'none');
});
$("#viewtwo_s2_close").click(function () {
    $("#viewtwo_style2").css('display', 'none');
});

$("#rowdetails_close").click(function () {
    $("#rowdetails").css('display', 'none');
});
$("#rowdetails_s2_close").click(function () {
    $("#rowdetails_style2").css('display', 'none');
});

$("#note_close").click(function () {
    $("#noteswindow").css('display', 'none');
});
$("#note_s2_close").click(function () {
    $("#noteswindow_style2").css('display', 'none');
});

$("#alert_close").click(function () {
    $("#alertswindow").css('display', 'none');
    resetInputFieldAlert("alertswindow");
});
$("#alert_s2_close").click(function () {
    $("#alertswindow_style2").css('display', 'none');
    resetInputFieldAlert("alertswindow_style2");
});

$("#copyRow_close").click(function () {
    $("#copyrowlist").css('display', 'none');
});
$("#copyRow_s2_close").click(function () {
    $("#copyrowlist_style2").css('display', 'none');
});

$("#moveRow_close").click(function () {
    $("#moverowlist").css('display', 'none');
});
$("#moveRow_s2_close").click(function () {
    $("#moverowlist_style2").css('display', 'none');
});



$("#closeCol8Filter").click(function () {
    $("#col8Filter").css('display', 'none');

    // const rotateIcon = document.querySelectorAll("#Main .outer-table-style12-box i.fa-caret-down.down-animation-icon");
    const rotateIcon = document.querySelectorAll(".outer-table-style12-box i.fa-caret-down.down-animation-icon");
    for (let i = 0; i < rotateIcon.length; i++) {
        $(rotateIcon[i]).removeClass("down-animation-icon");
    }
});


$("#resetAlert").click(function () {
    resetInputFieldAlert("alertswindow");
});

$("#resetAlertS2").click(function () {
    resetInputFieldAlert("alertswindow_style2");
});

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    // console.log(scroll);
    // if (scroll > 1400) {
    if (scroll > 1000) {
        let arrowShowing = $(`#${mnResultActiveTabID} .style1-box`).hasClass("clickstylebg");
        if (arrowShowing) {
            $(`#${mnResultActiveTabID} .outer-table-style12-box .left-slider5`).css('display', 'block');
            $(`#${mnResultActiveTabID} .outer-table-style12-box .right-slider5`).css('display', 'block');
        }
    } else {
        $(`#${mnResultActiveTabID} .outer-table-style12-box .left-slider5`).css('display', 'none');
        $(`#${mnResultActiveTabID} .outer-table-style12-box .right-slider5`).css('display', 'none');
    }

    if (scroll > 1200) {
        let arrowShowing = $(`#${mnResultActiveTabID} .style1-box`).hasClass("clickstylebg");

        let filterTargeting = document.querySelector('#col8Filter');
        let filterStyles = window.getComputedStyle(filterTargeting);

        if (arrowShowing == true && filterStyles.display == "block" && headerIndexClick != "") {
            let virtualHeader = document.querySelector(`#${mnResultActiveTabID} .outer-table-style12-box .style1-table-wrap .clone-head-table-wrap`);
            let compStyles = window.getComputedStyle(virtualHeader);

            if (compStyles.visibility == "visible") {
                $("#col8Filter").css({
                    top: (50),
                    position: "fixed"
                });
            }

            if (compStyles.visibility == "hidden") {
                // let actualHeaderTarget = document.querySelector(`#resizable554 th:nth-child(${headerIndexClick})`);
                let actualHeaderTarget = document.querySelector(`#${mnResultActiveTabSty1TableID} th:nth-child(${headerIndexClick})`);
                let elementPositionMain = actualHeaderTarget.getBoundingClientRect();
                $("#col8Filter").css({
                    top: ((elementPositionMain.y) + window.scrollY + 60),
                    position: "absolute"
                });
            }
        }
    }
});


$(document).keydown(function (e) {
    let arrowShowing = $(`#${mnResultActiveTabID} .style1-box`).hasClass("clickstylebg");
    let filterTargeting = document.querySelector('#col8Filter');
    let filterStyles = window.getComputedStyle(filterTargeting);
    if (e.which == 37 && arrowShowing == true) {
        hideStyleOneAllPopup();
        resetDownArrow();
        //    return false;
    }
    if (e.which == 39 && arrowShowing == true) {
        hideStyleOneAllPopup();
        resetDownArrow();
        //    return false;
    }

    let universalConfirm = window.getComputedStyle(document.querySelector('#universal_confirm_modal'));
    let mnResDispConfirm = window.getComputedStyle(document.querySelector('#manageResultChartDisplay_modal'));
    let uniThankYou = window.getComputedStyle(document.querySelector('#universalThankDraftModal'));

    if (e.which == 27 && (universalConfirm.display == "block" || mnResDispConfirm.display == "block") && uniThankYou.display == "none") {
        $('#universal_confirm_modal').modal('hide');
        $('#manageResultChartDisplay_modal').modal('hide');

        $("#universalThankDraftModal #thank_draft_header p").html("CANCELLATION");
        $("#universalThankDraftModal #thank_draft_details p").html("The Request has been Canceled!");
        $('#universalThankDraftModal').modal('show');
    }
});

// Arguments (resetDownArrow):
// 1. Selected TAB ID

function resetDownArrow() {
    // const rotateIcon = document.querySelectorAll("#Main .outer-table-style12-box i.fa-caret-down.down-animation-icon");
    const rotateIcon = document.querySelectorAll(".outer-table-style12-box i.fa-caret-down.down-animation-icon");
    for (let i = 0; i < rotateIcon.length; i++) {
        $(rotateIcon[i]).removeClass("down-animation-icon");
    }
}

// Manage Result : Alert PopUps (Changing Placeholder and Icon Color)

function alertWindowIconHandling(alertsPopupId){
    let mailIconAlert = $(`#${alertsPopupId} .mail_icons`);
    for (let i = 0; i < mailIconAlert.length; i++) {
        mailIconAlert[i].addEventListener("click", function (event) {
            // let elementPositionMain = event.target;
            if (event.target.nodeName == "I") {
                let iconClassName = event.target.classList[1];
                if (iconClassName == "fa-envelope") {
                    $(mailIconAlert[i].children[0]).addClass("iconActive");
                    $(mailIconAlert[i].children[1]).removeClass("iconActive");
                    $(mailIconAlert[i].children[2]).removeClass("iconActive");

                    $(mailIconAlert[i].parentNode.lastElementChild).attr("placeholder", "Enter a Email Address").attr("type", "email");
                }
                else if (iconClassName == "fa-phone-alt") {
                    $(mailIconAlert[i].children[0]).removeClass("iconActive");
                    $(mailIconAlert[i].children[1]).addClass("iconActive");
                    $(mailIconAlert[i].children[2]).removeClass("iconActive");

                    $(mailIconAlert[i].parentNode.lastElementChild).attr("placeholder", "Enter a Phone Number").attr("type", "number");
                }
                else if (iconClassName == "fa-comment-alt") {
                    $(mailIconAlert[i].children[0]).removeClass("iconActive");
                    $(mailIconAlert[i].children[1]).removeClass("iconActive");
                    $(mailIconAlert[i].children[2]).addClass("iconActive");

                    $(mailIconAlert[i].parentNode.lastElementChild).attr("placeholder", "Enter a Text Message").attr("type", "text");
                }

            }
        });
    }
}

alertWindowIconHandling("alertswindow");
alertWindowIconHandling("alertswindow_style2");

// Manage Result : Alert PopUps (Resetting Inputs and Icon Color)
function resetInputFieldAlert(alertsPopupId) {
    const inputInterval = document.querySelectorAll(`#${alertsPopupId} td.inpalertval input`);
    for (let i = 0; i < inputInterval.length; i++) {
        inputInterval[i].value = "";
    }

    const inputMail = document.querySelectorAll(`#${alertsPopupId} td.inpumail input`);
    for (let i = 0; i < inputMail.length; i++) {
        inputMail[i].value = "";
        // Resetting the Input Placeholder into default state
        $(inputMail[i]).attr("placeholder", "Enter a Email Addres").attr("type", "email");
    }

    // Resetting the icon into default state
    let emailAlert = $(`#${alertsPopupId} .mail_icons .fa-envelope`);
    let phoneAlert = $(`#${alertsPopupId} .mail_icons .fa-phone-alt`);
    let textAlert = $(`#${alertsPopupId} .mail_icons .fa-comment-alt`);

    for (i = 0; i < emailAlert.length; i++) {
        $(emailAlert[i]).addClass("iconActive");
        $(phoneAlert[i]).removeClass("iconActive");
        $(textAlert[i]).removeClass("iconActive");
    }

}

// Insert Row to Alerts Window
function insertRowToAlertTable(activeLayout){
    let alertswindowId = "alertswindow";

    if(activeLayout == "style2"){
        alertswindowId = "alertswindow_style2";
    }

    let lastRowNum = $(`#${alertswindowId} .alert-table-wrap .alert-table tbody tr:last-child td:nth-child(1)`).text();
    lastRowNum = parseInt(lastRowNum.trim()) + 1;

    $(`#${alertswindowId} .alert-table-wrap .alert-table tbody`).append(`<tr>
            <td>${lastRowNum}</td>
            <td class="selectaltype">
                <select name="" id="">
                    <option value="">Precent Change
                        Greather...
                    </option>
                    <option value="">Precent Change
                        Greather...
                    </option>
                    <option value="">Precent Change
                        Greather...
                    </option>
                    <option value="">Precent Change
                        Greather...
                    </option>
                </select>
                <div class="selectarrow">
                    <i class="fas fa-caret-down"></i>
                </div>
            </td>
            <td class="inpalertval">
                <input type="text">
            </td>
            <td class="selectalfreq">
                <select name="" id="">
                    <option value="">Anytime</option>
                    <option value="">Anytime</option>
                    <option value="">Anytime</option>
                    <option value="">Anytime</option>
                </select>
                <div class="selectarrow">
                    <i class="fas fa-caret-down"></i>
                </div>
            </td>
            <td class="inpumail">
                <div class="mail_enter">
                    <div class="mail_icons">
                        <i class="fas fa-envelope iconActive"></i>
                        <i class="fas fa-phone-alt"></i>
                        <i class="fas fa-comment-alt"></i>
                    </div>
                    <input type="email" placeholder="Enter a Email Address">
                </div>
            </td>
            <td class="removenull">
                <div class="circle_550" onclick="insertRowToAlertTable('${activeLayout}')">
                    <i class="fas fa-plus"></i>
                </div>
                <div class="circle_550 deleteTableRow" onclick="universalConfirmModalDelete(this)">
                    <i class="fas fa-times"></i>
                </div>
            </td>
        </tr>`);
    
        alertWindowIconHandling(alertswindowId);
}

function hideStyleOneAllPopup(){
    $("#viewtwo").css("display", "none");
    $("#rowdetails").css("display", "none");
    $("#noteswindow").css("display", "none");
    $("#alertswindow").css("display", "none");
    $("#copyrowlist").css("display", "none");
    $("#moverowlist").css("display", "none");

    $("#col8Filter").css('display', 'none');
}
function hideStyleTwoAllPopup(){
    $("#viewtwo_style2").css("display", "none");
    $("#rowdetails_style2").css("display", "none");
    $("#noteswindow_style2").css("display", "none");
    $("#alertswindow_style2").css("display", "none");
    $("#copyrowlist_style2").css("display", "none");
    $("#moverowlist_style2").css("display", "none");
    $("#col8Filter").css('display', 'none');
}

function customFilterClick(){
    $("#col8Filter").css('display', 'none');
    $('#filter-modal').modal('show');
    const rotateIcon = document.querySelectorAll(".outer-table-style12-box i.fa-caret-down.down-animation-icon");
    for (let i = 0; i < rotateIcon.length; i++) {
        $(rotateIcon[i]).removeClass("down-animation-icon");
    }
}

function filterSelectBtnClick(){
    $("#col8Filter").css('display', 'none');

    const rotateIcon = document.querySelectorAll(".outer-table-style12-box i.fa-caret-down.down-animation-icon");
    for (let i = 0; i < rotateIcon.length; i++) {
        $(rotateIcon[i]).removeClass("down-animation-icon");
    }

    $(`#${mnResultActiveTabSty1TableID}`).css("display", "none");
    $(`#${mnResultActiveTabID} .pagination-container`).css("display", "none");
    $(`#${mnResultActiveTabID} .page-number12-wrap`).css("display", "none");
    $(`#${mnResultActiveTabID} .style_date_time_wrap`).css("display", "none");

    $(`#${mnResultActiveTabID} .loading-style1-table`).css("display", "block");
    $(`#${mnResultActiveTabID} .pagination-loading-handler`).css("display", "block");
    $(`#${mnResultActiveTabID} .page-number-loading`).css("display", "block");
    $(`#${mnResultActiveTabID} .loading_date_time_update`).css("display", "block");

    

    $(`#${mnResultActiveTabID} .style2-table-wrap .style2-table-content`).css("display", "none");
    $(`#${mnResultActiveTabID} .loading-style2-table`).css("display", "block");

    setTimeout(() => {
        $(`#${mnResultActiveTabID} .loading-style1-table`).css("display", "none");
        $(`#${mnResultActiveTabID} .pagination-loading-handler`).css("display", "none");
        $(`#${mnResultActiveTabID} .page-number-loading`).css("display", "none");
        $(`#${mnResultActiveTabID} .loading_date_time_update`).css("display", "none");
        
        $(`#${mnResultActiveTabSty1TableID}`).css("display", "block");
        $(`#${mnResultActiveTabID} .pagination-container`).css("display", "block");
        $(`#${mnResultActiveTabID} .page-number12-wrap`).css("display", "block");
        $(`#${mnResultActiveTabID} .style_date_time_wrap`).css("display", "block");

        $(`#${mnResultActiveTabID} .loading-style2-table`).css("display", "none");
        $(`#${mnResultActiveTabID} .style2-table-wrap .style2-table-content`).css("display", "block");
    }, 3000);
}

function filterThankCloseBtn(){
    $('#filter-modal').modal('hide');

    let tableRowNumber = $(`#${mnResultActiveTabID} .style1-table-wrap #${mnResultActiveTabSty1TableID} tbody tr`);
    if (tableRowNumber.length > 0) {
        $(`#${mnResultActiveTabSty1TableID}`).css("display", "none");
        $(`#${mnResultActiveTabID} .pagination-container`).css("display", "none");
        $(`#${mnResultActiveTabID} .page-number12-wrap`).css("display", "none");
        $(`#${mnResultActiveTabID} .style_date_time_wrap`).css("display", "none");
    
        $(`#${mnResultActiveTabID} .loading-style1-table`).css("display", "block");
        $(`#${mnResultActiveTabID} .pagination-loading-handler`).css("display", "block");
        $(`#${mnResultActiveTabID} .page-number-loading`).css("display", "block");
        $(`#${mnResultActiveTabID} .loading_date_time_update`).css("display", "block");
    
        $(`#${mnResultActiveTabID} .style2-table-wrap .style2-table-content`).css("display", "none");
        $(`#${mnResultActiveTabID} .loading-style2-table`).css("display", "block");
    
        setTimeout(() => {
            $(`#${mnResultActiveTabID} .loading-style1-table`).css("display", "none");
            $(`#${mnResultActiveTabID} .pagination-loading-handler`).css("display", "none");
            $(`#${mnResultActiveTabID} .page-number-loading`).css("display", "none");
            $(`#${mnResultActiveTabID} .loading_date_time_update`).css("display", "none");
            
            $(`#${mnResultActiveTabSty1TableID}`).css("display", "block");
            $(`#${mnResultActiveTabID} .pagination-container`).css("display", "block");
            $(`#${mnResultActiveTabID} .page-number12-wrap`).css("display", "block");
            $(`#${mnResultActiveTabID} .style_date_time_wrap`).css("display", "block");
    
            $(`#${mnResultActiveTabID} .loading-style2-table`).css("display", "none");
            $(`#${mnResultActiveTabID} .style2-table-wrap .style2-table-content`).css("display", "block");
        }, 3000);
    }
}


$("#col8FilterInput").keyup(function(){
    $("#col8Filter .checkbox-table-loading").css("display", "block");
    $("#col8Filter .checkbox-table-scroll").css("display", "none");

    setTimeout(() => {
        $("#col8Filter .checkbox-table-loading").css("display", "none");
        $("#col8Filter .checkbox-table-scroll").css("display", "block");
    }, 1000);
});

$("#col8FilterFind").click(function () {
    $("#col8Filter .checkbox-table-loading").css("display", "block");
    $("#col8Filter .checkbox-table-scroll").css("display", "none");

    setTimeout(() => {
        $("#col8Filter .checkbox-table-loading").css("display", "none");
        $("#col8Filter .checkbox-table-scroll").css("display", "block");
    }, 1000);
});

$("#col8FilterSort").click(function () {
    $("#col8Filter .checkbox-table-loading").css("display", "block");
    $("#col8Filter .checkbox-table-scroll").css("display", "none");

    setTimeout(() => {
        $("#col8Filter .checkbox-table-loading").css("display", "none");
        $("#col8Filter .checkbox-table-scroll").css("display", "block");
    }, 1000);
});


// let targetCheckBox = $("#resizable554 thead th.column-header-1 input[type='checkbox'].toggle__input");
//   if (targetCheckBox.checked == false) {
//     targetCheckBox.click();
//   }

function controlCheckboxOfTableHead(sty1TableId, selectedTab){
    $(`#${sty1TableId} thead th.column-header-1 input[type='checkbox'].toggle__input`).change(function(){
        let tableTotalRow = $(`#${sty1TableId} tbody tr`).length;
        if($(this).prop('checked') === true){
            for(i=1; i<=tableTotalRow; i++){
                $(`#${sty1TableId} tbody tr:nth-child(${i}) td.column-header-1 input[type='checkbox'].toggle__input`).prop('checked',true);
            }
            $(`#${selectedTab} .outer-table-style12-box .style1-table-wrap .clone-head-table-wrap .mytablesty12 thead th.column-header-1 input[type='checkbox'].toggle__input`).prop('checked',true);
        }else{
            for(i=1; i<=tableTotalRow; i++){
                $(`#${sty1TableId} tbody tr:nth-child(${i}) td.column-header-1 input[type='checkbox'].toggle__input`).prop('checked', false);
            }
            $(`#${selectedTab} .outer-table-style12-box .style1-table-wrap .clone-head-table-wrap .mytablesty12 thead th.column-header-1 input[type='checkbox'].toggle__input`).prop('checked', false);
        }
    });

    $(`#${selectedTab} .outer-table-style12-box .style1-table-wrap .clone-head-table-wrap .mytablesty12 thead th.column-header-1 input[type='checkbox'].toggle__input`).change(function(){
        let tableTotalRow = $(`#${sty1TableId} tbody tr`).length;
        if($(this).prop('checked') === true){
            for(i=1; i<=tableTotalRow; i++){
                $(`#${sty1TableId} tbody tr:nth-child(${i}) td.column-header-1 input[type='checkbox'].toggle__input`).prop('checked',true);
            }
            $(`#${sty1TableId} thead th.column-header-1 input[type='checkbox'].toggle__input`).prop('checked',true);
        }else{
            for(i=1; i<=tableTotalRow; i++){
                $(`#${sty1TableId} tbody tr:nth-child(${i}) td.column-header-1 input[type='checkbox'].toggle__input`).prop('checked', false);
            }
            $(`#${sty1TableId} thead th.column-header-1 input[type='checkbox'].toggle__input`).prop('checked', false);
        }
    });
}