

function createDynamicTabRow(dynamicThis){
    
    let dynamicTabTitle = dynamicThis.id;
    let dynamicTabToolTip = dynamicThis.attributes[4].textContent;
    let dynamicTabBtnId = `btn_${dynamicTabTitle.substring(3)}`;
    let dynamicTabContentId = `content_${dynamicTabTitle.substring(3)}`;
    let randomSixDigit = Math.floor(100000 + Math.random() * 900000);
    let randomPrefix = randomRangeString(5);
    // console.dir(dynamicThis);
    // console.log("Tab Tooltip: " + dynamicThis.attributes[4].textContent);
    // console.log("Tab Title: " + dynamicThis.id);
    
    mnResultActiveTabID = `${dynamicTabContentId}`;
    mnResultActiveTabSty1TableID = `resizable554${randomSixDigit}`;
    tabTableIdData.push({"tabId": `${dynamicTabContentId}`, "tableStyle1ID" : `resizable554${randomSixDigit}`});

    $("#chartPage .chart-page-tab").append(
        `<button class="tablink" onclick="openTabPage('${dynamicTabContentId}', this)" id="${dynamicTabBtnId}">${dynamicTabTitle} 
            <span class="tab-info-box" tooltip="${dynamicTabToolTip}" flow="down">
                <i class="fas fa-info"></i>
            </span>
            <span class="tab-cross-box" tooltip="Click to Delete" flow="down" onclick="deleteDynamicTab(this)">
                <i class="fas fa-times"></i>
            </span>
        </button>`);
    $("#chartPage").append(`
    <div id="${dynamicTabContentId}" class="tabcontent">
        <div class="chart-page-inner-tab">
            <button class="inner-tablink" onclick="openFiveChartTab('${dynamicTabContentId}', 'Display1', this); gotoChartPage('scorer-meter-1${randomSixDigit}', 'scorer-meter-2${randomSixDigit}', 'scorer-meter-3${randomSixDigit}');"
                id="firstOpen${randomSixDigit}">
                Display Chart Style 1
                <i class="fas fa-caret-down"></i>
            </button>
            <button class="inner-tablink" onclick="openFiveChartTab('${dynamicTabContentId}', 'Display2', this); gotoChartPage2();">
                Display Chart Style 2
                <i class="fas fa-caret-down"></i>
            </button>
            <button class="inner-tablink" onclick="openFiveChartTab('${dynamicTabContentId}', 'Display3', this); gotoLinearChart('lineChart${randomSixDigit}','axisY-lineChart${randomSixDigit}');">
                Display Chart Style 3
                <i class="fas fa-caret-down"></i>
            </button>
            <button class="inner-tablink" onclick="openFiveChartTab('${dynamicTabContentId}', 'Display4', this); gotoChartCalender('${dynamicTabContentId}', 'display-data-table${randomSixDigit}')">
                Display Chart Style 4
                <i class="fas fa-caret-down"></i>
            </button>
            <button class="inner-tablink" onclick="openFiveChartTab('${dynamicTabContentId}', 'Display5', this); gotoChartFive('${dynamicTabContentId}')">
                Display Chart Style 5
                <i class="fas fa-caret-down"></i>
            </button>
        </div>
        <div class="inner-tabcontent Display1">
            <div class="row meter_outer_box">
                <div class="col-4">
                    <div class="circleWrapper speedometer1">
                        <div class="sector-3O sector0"></div>
                        <div class="sector-3O sector10"></div>
                        <div class="sector-3O sector20"></div>
                        <div class="sector-3O sector30"></div>
                        <div class="sector-3O sector40"></div>
                        <div class="sector-3O sector50"></div>
                        <div class="sector-3O sector60"></div>
                        <div class="sector-3O sector70"></div>
                        <div class="sector-3O sector80"></div>
                        <div class="sector-3O sector90"></div>
                        <div class="sector-3O sector100"></div>
                        <div class="sector-3O sector111"></div>
                        <div class="background-half-round">
                            <div class="speed-number-wapper">
                                <div class="speed-number speed-0">
                                    <span>0</span>
                                </div>
                                <div class="speed-number speed-10">
                                    <span>10</span>
                                </div>
                                <div class="speed-number speed-20">
                                    <span>20</span>
                                </div>
                                <div class="speed-number speed-30">
                                    <span>30</span>
                                </div>
                                <div class="speed-number speed-40">
                                    <span>40</span>
                                </div>
                                <div class="speed-number speed-50">
                                    <span>50</span>
                                </div>
                                <div class="speed-number speed-60">
                                    <span>60</span>
                                </div>
                                <div class="speed-number speed-70">
                                    <span>70</span>
                                </div>
                                <div class="speed-number speed-80">
                                    <span>80</span>
                                </div>
                                <div class="speed-number speed-90">
                                    <span>90</span>
                                </div>
                                <div class="speed-number speed-100">
                                    <span>100</span>
                                </div>
                            </div>
                        </div>
                        <div class="scorer-1-inner-div-5">
                            <div class="scorer-1-tick scorer-1-tick-animation" id="scorer-meter-1${randomSixDigit}">
                                <!-- Add id by ashiq -->
                            </div>
                        </div>
                        <div class="speed-value">
                            <!-- Add id by ashiq -->
                            <p id="value-of-scorer-meter-1${randomSixDigit}">00.00%</p>
                            <p>Meter 1</p>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="circleWrapper speedometer2">
                        <div class="sector-3O sector0"></div>
                        <div class="sector-3O sector10"></div>
                        <div class="sector-3O sector20"></div>
                        <div class="sector-3O sector30"></div>
                        <div class="sector-3O sector40"></div>
                        <div class="sector-3O sector50"></div>
                        <div class="sector-3O sector60"></div>
                        <div class="sector-3O sector70"></div>
                        <div class="sector-3O sector80"></div>
                        <div class="sector-3O sector90"></div>
                        <div class="sector-3O sector100"></div>
                        <div class="sector-3O sector111"></div>
                        <div class="background-half-round">
                            <div class="speed-number-wapper">
                                <div class="speed-number speed-0">
                                    <span>0</span>
                                </div>
                                <div class="speed-number speed-10">
                                    <span>10</span>
                                </div>
                                <div class="speed-number speed-20">
                                    <span>20</span>
                                </div>
                                <div class="speed-number speed-30">
                                    <span>30</span>
                                </div>
                                <div class="speed-number speed-40">
                                    <span>40</span>
                                </div>
                                <div class="speed-number speed-50">
                                    <span>50</span>
                                </div>
                                <div class="speed-number speed-60">
                                    <span>60</span>
                                </div>
                                <div class="speed-number speed-70">
                                    <span>70</span>
                                </div>
                                <div class="speed-number speed-80">
                                    <span>80</span>
                                </div>
                                <div class="speed-number speed-90">
                                    <span>90</span>
                                </div>
                                <div class="speed-number speed-100">
                                    <span>100</span>
                                </div>
                            </div>
                        </div>
                        <div class="scorer-1-inner-div-5">
                            <div class="scorer-1-tick scorer-1-tick-animation" id="scorer-meter-2${randomSixDigit}">
                                <!-- Add id by ashiq -->
                            </div>
                        </div>
                        <div class="speed-value">
                            <!-- Add id by ashiq -->
                            <p id="value-of-scorer-meter-2${randomSixDigit}">00.00%</p>
                            <p>Meter 2</p>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="circleWrapper speedometer3">
                        <div class="sector-3O sector0"></div>
                        <div class="sector-3O sector10"></div>
                        <div class="sector-3O sector20"></div>
                        <div class="sector-3O sector30"></div>
                        <div class="sector-3O sector40"></div>
                        <div class="sector-3O sector50"></div>
                        <div class="sector-3O sector60"></div>
                        <div class="sector-3O sector70"></div>
                        <div class="sector-3O sector80"></div>
                        <div class="sector-3O sector90"></div>
                        <div class="sector-3O sector100"></div>
                        <div class="sector-3O sector111"></div>
                        <div class="background-half-round">
                            <div class="speed-number-wapper">
                                <div class="speed-number speed-0">
                                    <span>0</span>
                                </div>
                                <div class="speed-number speed-10">
                                    <span>10</span>
                                </div>
                                <div class="speed-number speed-20">
                                    <span>20</span>
                                </div>
                                <div class="speed-number speed-30">
                                    <span>30</span>
                                </div>
                                <div class="speed-number speed-40">
                                    <span>40</span>
                                </div>
                                <div class="speed-number speed-50">
                                    <span>50</span>
                                </div>
                                <div class="speed-number speed-60">
                                    <span>60</span>
                                </div>
                                <div class="speed-number speed-70">
                                    <span>70</span>
                                </div>
                                <div class="speed-number speed-80">
                                    <span>80</span>
                                </div>
                                <div class="speed-number speed-90">
                                    <span>90</span>
                                </div>
                                <div class="speed-number speed-100">
                                    <span>100</span>
                                </div>
                            </div>
                        </div>
                        <div class="scorer-1-inner-div-5">
                            <div class="scorer-1-tick scorer-1-tick-animation" id="scorer-meter-3${randomSixDigit}">
                                <!-- Add id by ashiq -->
                            </div>
                        </div>
                        <div class="speed-value">
                            <!-- Add id by ashiq -->
                            <p id="value-of-scorer-meter-3${randomSixDigit}">00.00%</p>
                            <p>Meter 3</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="inner-tabcontent Display2">
            <div class="row gauge_outer_box">
                <div class="col-4">
                    <div class="progressmeter progressmeter1">
                        <div class="barOverflow">
                            <div class="bar"></div>
                            <div class="dashed dashed-1"></div>
                            <div class="dashed dashed-2"></div>
                            <div class="dashed dashed-3"></div>
                            <div class="dashed dashed-4"></div>
                            <div class="dashed dashed-5"></div>
                            <div class="dashed dashed-6"></div>
                            <div class="dashed dashed-7"></div>
                            <div class="dashed dashed-8"></div>
                            <div class="dashed dashed-9"></div>
                            <div class="dashed dashed-10"></div>
                            <div class="dashed dashed-11"></div>
                            <div class="dashed dashed-12"></div>
                            <div class="dashed dashed-13"></div>
                            <div class="dashed dashed-14"></div>
                            <div class="dashed dashed-15"></div>
                        </div>
                        <span class="progress-value">89</span>%
                        <span class="min-value">0</span>
                        <span class="max-value">100</span>
                        <span class="meter-name">Meter 1</span>
                    </div>
                </div>
                <div class="col-4">
                    <div class="progressmeter progressmeter2">
                        <div class="barOverflow">
                            <div class="bar"></div>
                            <div class="dashed dashed-1"></div>
                            <div class="dashed dashed-2"></div>
                            <div class="dashed dashed-3"></div>
                            <div class="dashed dashed-4"></div>
                            <div class="dashed dashed-5"></div>
                            <div class="dashed dashed-6"></div>
                            <div class="dashed dashed-7"></div>
                            <div class="dashed dashed-8"></div>
                            <div class="dashed dashed-9"></div>
                            <div class="dashed dashed-10"></div>
                            <div class="dashed dashed-11"></div>
                            <div class="dashed dashed-12"></div>
                            <div class="dashed dashed-13"></div>
                            <div class="dashed dashed-14"></div>
                            <div class="dashed dashed-15"></div>
                        </div>
                        <span class="progress-value">51</span>%
                        <span class="min-value">0</span>
                        <span class="max-value">100</span>
                        <span class="meter-name">Meter 2</span>
                    </div>
                </div>
                <div class="col-4">
                    <div class="progressmeter progressmeter3">
                        <div class="barOverflow">
                            <div class="bar"></div>
                            <div class="dashed dashed-1"></div>
                            <div class="dashed dashed-2"></div>
                            <div class="dashed dashed-3"></div>
                            <div class="dashed dashed-4"></div>
                            <div class="dashed dashed-5"></div>
                            <div class="dashed dashed-6"></div>
                            <div class="dashed dashed-7"></div>
                            <div class="dashed dashed-8"></div>
                            <div class="dashed dashed-9"></div>
                            <div class="dashed dashed-10"></div>
                            <div class="dashed dashed-11"></div>
                            <div class="dashed dashed-12"></div>
                            <div class="dashed dashed-13"></div>
                            <div class="dashed dashed-14"></div>
                            <div class="dashed dashed-15"></div>
                        </div>
                        <span class="progress-value">28</span>%
                        <span class="min-value">0</span>
                        <span class="max-value">100</span>
                        <span class="meter-name">Meter 3</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="inner-tabcontent Display3">
            <div class="chart_outer_box">
                <div class="chart_main_box">
                    <div class="chart_compare_box">
                        <form action="">
                            <div class="row">
                                <div class="col-4">
                                    <label for="">Compare With</label>
                                    <input class="input3031" type="text">
                                </div>
                                <div class="col-4">
                                    <label for="">From Number of Days</label>
                                    <input class="input3032" type="text">
                                </div>
                                <div class="col-4">
                                    <label for="">To Number of Days</label>
                                    <input class="input3033" type="text">
                                </div>
                            </div>
                            <div class="chartWrapper">
                                <div class="chartAreaWrapper">
                                    <canvas id="lineChart${randomSixDigit}" height="300" width="5500"></canvas>
                                </div>
                                <canvas id="axisY-lineChart${randomSixDigit}" class="axisY-lineChart-style" height="300" width="0"></canvas>
                            </div>
                        </form>
                    </div>
                    <div class="right-slider5">
                        <i class="fas fa-long-arrow-alt-right"></i>
                    </div>
                    <div class="left-slider5">
                        <i class="fas fa-long-arrow-alt-left"></i>
                    </div>
                    <p class="x_axis_title">NUMBER OF DAYS</p>
                </div>
            </div>
        </div>
        <div class="inner-tabcontent Display4">
            <div class="data-table-box">
                <div class="inner_table_box">
                    <div class="data-table-wrapper">
                        <table class="table data-chart4" id="display-data-table${randomSixDigit}">
                            <tr class="data-head">
                                <th></th>
                                <th>JAN</th>
                                <th>FEB</th>
                                <th>MAR</th>
                                <th>APR</th>
                                <th>MAY</th>
                                <th>JUN</th>
                                <th>JUL</th>
                                <th>AUG</th>
                                <th>SEP</th>
                                <th>OCT</th>
                                <th>NOV</th>
                                <th>DEC</th>
                            </tr>
                            <!-- all data is arrayed in manage-result.js  -->
                        </table>
                    </div>
                    <div class="loading-table-chart4">
                        <table>
                            <tr>
                                <th>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </th>
                                <th>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </th>
                                <th>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </th>
                                <th>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </th>
                                <th>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </th>
                                <th>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </th>
                                <th>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </th>
                                <th>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </th>
                                <th>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </th>
                                <th>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </th>
                                <th>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </th>
                                <th>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </th>
                                <th>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </th>
                            </tr>
                            <tr>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                                <td>
                                    <div class="loading-row">
                                        <p class="loading-animation loading"></p>
                                    </div>
                                </td>
                            </tr>
                            
                        </table>
                    </div>
                </div>
                
            </div>
        </div>
        <div class="inner-tabcontent Display5">
            <div class="sectiondisplay001">
                <div class="progress-range-box">
                    <table class="table table-responsive" id="table001122${randomSixDigit}">
                        <tr>
                            <td>
                                <div class="display_date_time">
                                    <div class="from_to">
                                        <span>From</span>
                                    </div>
                                    <div class="separation">
                                        <span>-</span>
                                    </div>
                                    <div class="value_date">
                                        <span class="dis_date"></span>
                                    </div>
                                    <div class="value_time">
                                        <span class="dis_time"></span>
                                    </div>
                                </div>
                                <div class="display_date_time">
                                    <div class="from_to">
                                        <span>To</span>
                                    </div>
                                    <div class="separation">
                                        <span>-</span>
                                    </div>
                                    <div class="value_date">
                                        <span class="dis_date"></span>
                                    </div>
                                    <div class="value_time">
                                        <span class="dis_time"></span>
                                    </div>
                                </div>
                                <!-- PROGRESS BAR START -->
                                <div class="dis5_progress">
                                    <div class="dis5_progress_upbox">
                                        <div class="dis5_progress_pos1 allprogress_pos">
                                            <!-- the percentage values get from manage-result.js -->
                                            <div class="pos-progress-status">
                                                <div class="pos-bar-status dis5_plusProgress_value1"></div>
                                                <!-- <p class="dis5_pos_value1 allpos_value"></p> -->
                                            </div>
                                        </div>
                                        <p class="dis5_pos_value1 allpos_value"></p>
                                    </div>
                                    <div class="dis5_progress_downbox">
                                        <div class="dis5_progress_neg1 allprogress_neg">
                                            <!-- the percentage values get from manage-result.js -->
                                            <div class="neg-progress-status">
                                                <div class="neg-bar-status dis5_minusProgress_value1"></div>
                                                <!-- <p class="dis5_neg_value1 allneg_value"></p> -->
                                            </div>
                                        </div>
                                        <p class="dis5_neg_value1 allneg_value"></p>
                                    </div>
                                </div>
                                <!-- PROGRESS BAR END -->
                            </td>
                            <td>
                                <div class="display_date_time">
                                    <div class="from_to">
                                        <span>From</span>
                                    </div>
                                    <div class="separation">
                                        <span>-</span>
                                    </div>
                                    <div class="value_date">
                                        <span class="dis_date"></span>
                                    </div>
                                    <div class="value_time">
                                        <span class="dis_time"></span>
                                    </div>
                                </div>
                                <div class="display_date_time">
                                    <div class="from_to">
                                        <span>To</span>
                                    </div>
                                    <div class="separation">
                                        <span>-</span>
                                    </div>
                                    <div class="value_date">
                                        <span class="dis_date"></span>
                                    </div>
                                    <div class="value_time">
                                        <span class="dis_time"></span>
                                    </div>
                                </div>
                                <!-- PROGRESS BAR START -->
                                <div class="dis5_progress">
                                    <div class="dis5_progress_upbox">
                                        <div class="dis5_progress_pos2 allprogress_pos">
                                            <div class="pos-progress-status">
                                                <div class="pos-bar-status dis5_plusProgress_value2"></div>
                                            </div>
                                        </div>
                                        <p class="dis5_pos_value2 allpos_value"></p>
                                    </div>
                                    <div class="dis5_progress_downbox">
                                        <div class="dis5_progress_neg2 allprogress_neg">
                                            <div class="neg-progress-status">
                                                <div class="neg-bar-status dis5_minusProgress_value2"></div>
                                            </div>
                                        </div>
                                        <p class="dis5_neg_value2 allneg_value"></p>
                                    </div>
                                </div>
                                <!-- PROGRESS BAR END -->
                            </td>
                            <td>
                                <div class="display_date_time">
                                    <div class="from_to">
                                        <span>From</span>
                                    </div>
                                    <div class="separation">
                                        <span>-</span>
                                    </div>
                                    <div class="value_date">
                                        <span class="dis_date"></span>
                                    </div>
                                    <div class="value_time">
                                        <span class="dis_time"></span>
                                    </div>
                                </div>
                                <div class="display_date_time">
                                    <div class="from_to">
                                        <span>To</span>
                                    </div>
                                    <div class="separation">
                                        <span>-</span>
                                    </div>
                                    <div class="value_date">
                                        <span class="dis_date"></span>
                                    </div>
                                    <div class="value_time">
                                        <span class="dis_time"></span>
                                    </div>
                                </div>
                                <!-- PROGRESS BAR START -->
                                <div class="dis5_progress">
                                    <div class="dis5_progress_upbox">
                                        <div class="dis5_progress_pos3 allprogress_pos">
                                            <div class="pos-progress-status">
                                                <div class="pos-bar-status dis5_plusProgress_value3"></div>
                                            </div>
                                        </div>
                                        <p class="dis5_pos_value3 allpos_value"></p>
                                    </div>
                                    <div class="dis5_progress_downbox">
                                        <div class="dis5_progress_neg3 allprogress_neg">
                                            <div class="neg-progress-status">
                                                <div class="neg-bar-status dis5_minusProgress_value3"></div>
                                            </div>
                                        </div>
                                        <p class="dis5_neg_value3 allneg_value"></p>
                                    </div>
                                </div>
                                <!-- PROGRESS BAR END -->
                            </td>
                            <td>
                                <div class="display_date_time">
                                    <div class="from_to">
                                        <span>From</span>
                                    </div>
                                    <div class="separation">
                                        <span>-</span>
                                    </div>
                                    <div class="value_date">
                                        <span class="dis_date"></span>
                                    </div>
                                    <div class="value_time">
                                        <span class="dis_time"></span>
                                    </div>
                                </div>
                                <div class="display_date_time">
                                    <div class="from_to">
                                        <span>To</span>
                                    </div>
                                    <div class="separation">
                                        <span>-</span>
                                    </div>
                                    <div class="value_date">
                                        <span class="dis_date"></span>
                                    </div>
                                    <div class="value_time">
                                        <span class="dis_time"></span>
                                    </div>
                                </div>
                                <!-- PROGRESS BAR START -->
                                <div class="dis5_progress">
                                    <div class="dis5_progress_upbox">
                                        <div class="dis5_progress_pos4 allprogress_pos">
                                            <div class="pos-progress-status">
                                                <div class="pos-bar-status dis5_plusProgress_value4"></div>
                                            </div>
                                        </div>
                                        <p class="dis5_pos_value4 allpos_value"></p>
                                    </div>
                                    <div class="dis5_progress_downbox">
                                        <div class="dis5_progress_neg4 allprogress_neg">
                                            <div class="neg-progress-status">
                                                <div class="neg-bar-status dis5_minusProgress_value4"></div>
                                            </div>
                                        </div>
                                        <p class="dis5_neg_value4 allneg_value"></p>
                                    </div>
                                </div>
                                <!-- PROGRESS BAR END -->
                            </td>
                            <td>
                                <div class="display_date_time">
                                    <div class="from_to">
                                        <span>From</span>
                                    </div>
                                    <div class="separation">
                                        <span>-</span>
                                    </div>
                                    <div class="value_date">
                                        <span class="dis_date"></span>
                                    </div>
                                    <div class="value_time">
                                        <span class="dis_time"></span>
                                    </div>
                                </div>
                                <div class="display_date_time">
                                    <div class="from_to">
                                        <span>To</span>
                                    </div>
                                    <div class="separation">
                                        <span>-</span>
                                    </div>
                                    <div class="value_date">
                                        <span class="dis_date"></span>
                                    </div>
                                    <div class="value_time">
                                        <span class="dis_time"></span>
                                    </div>
                                </div>
                                <!-- PROGRESS BAR START -->
                                <div class="dis5_progress">
                                    <div class="dis5_progress_upbox">
                                        <div class="dis5_progress_pos5 allprogress_pos">
                                            <div class="pos-progress-status">
                                                <div class="pos-bar-status dis5_plusProgress_value5"></div>
                                            </div>
                                        </div>
                                        <p class="dis5_pos_value5 allpos_value"></p>
                                    </div>
                                    <div class="dis5_progress_downbox">
                                        <div class="dis5_progress_neg5 allprogress_neg">
                                            <div class="neg-progress-status">
                                                <div class="neg-bar-status dis5_minusProgress_value5"></div>
                                            </div>
                                        </div>
                                        <p class="dis5_neg_value5 allneg_value"></p>
                                    </div>
                                </div>
                                <!-- PROGRESS BAR END -->
                            </td>
                            <td>
                                <div class="display_date_time">
                                    <div class="from_to">
                                        <span>From</span>
                                    </div>
                                    <div class="separation">
                                        <span>-</span>
                                    </div>
                                    <div class="value_date">
                                        <span class="dis_date"></span>
                                    </div>
                                    <div class="value_time">
                                        <span class="dis_time"></span>
                                    </div>
                                </div>
                                <div class="display_date_time">
                                    <div class="from_to">
                                        <span>To</span>
                                    </div>
                                    <div class="separation">
                                        <span>-</span>
                                    </div>
                                    <div class="value_date">
                                        <span class="dis_date"></span>
                                    </div>
                                    <div class="value_time">
                                        <span class="dis_time"></span>
                                    </div>
                                </div>
                                <!-- PROGRESS BAR START -->
                                <div class="dis5_progress">
                                    <div class="dis5_progress_upbox">
                                        <div class="dis5_progress_pos6 allprogress_pos">
                                            <div class="pos-progress-status">
                                                <div class="pos-bar-status dis5_plusProgress_value6"></div>
                                            </div>
                                        </div>
                                        <p class="dis5_pos_value6 allpos_value"></p>
                                    </div>
                                    <div class="dis5_progress_downbox">
                                        <div class="dis5_progress_neg6 allprogress_neg">
                                            <div class="neg-progress-status">
                                                <div class="neg-bar-status dis5_minusProgress_value6"></div>
                                            </div>
                                        </div>
                                        <p class="dis5_neg_value6 allneg_value"></p>
                                    </div>
                                </div>
                                <!-- PROGRESS BAR END -->
                            </td>
                            <td>
                                <div class="display_date_time">
                                    <div class="from_to">
                                        <span>From</span>
                                    </div>
                                    <div class="separation">
                                        <span>-</span>
                                    </div>
                                    <div class="value_date">
                                        <span class="dis_date"></span>
                                    </div>
                                    <div class="value_time">
                                        <span class="dis_time"></span>
                                    </div>
                                </div>
                                <div class="display_date_time">
                                    <div class="from_to">
                                        <span>To</span>
                                    </div>
                                    <div class="separation">
                                        <span>-</span>
                                    </div>
                                    <div class="value_date">
                                        <span class="dis_date"></span>
                                    </div>
                                    <div class="value_time">
                                        <span class="dis_time"></span>
                                    </div>
                                </div>
                                <!-- PROGRESS BAR START -->
                                <div class="dis5_progress">
                                    <div class="dis5_progress_upbox">
                                        <div class="dis5_progress_pos7 allprogress_pos">
                                            <div class="pos-progress-status">
                                                <div class="pos-bar-status dis5_plusProgress_value7"></div>
                                            </div>
                                        </div>
                                        <p class="dis5_pos_value7 allpos_value"></p>
                                    </div>
                                    <div class="dis5_progress_downbox">
                                        <div class="dis5_progress_neg7 allprogress_neg">
                                            <div class="neg-progress-status">
                                                <div class="neg-bar-status dis5_minusProgress_value7"></div>
                                            </div>
                                        </div>
                                        <p class="dis5_neg_value7 allneg_value"></p>
                                    </div>
                                </div>
                                <!-- PROGRESS BAR END -->
                            </td>
                            <td>
                                <div class="display_date_time">
                                    <div class="from_to">
                                        <span>From</span>
                                    </div>
                                    <div class="separation">
                                        <span>-</span>
                                    </div>
                                    <div class="value_date">
                                        <span class="dis_date"></span>
                                    </div>
                                    <div class="value_time">
                                        <span class="dis_time"></span>
                                    </div>
                                </div>
                                <div class="display_date_time">
                                    <div class="from_to">
                                        <span>To</span>
                                    </div>
                                    <div class="separation">
                                        <span>-</span>
                                    </div>
                                    <div class="value_date">
                                        <span class="dis_date"></span>
                                    </div>
                                    <div class="value_time">
                                        <span class="dis_time"></span>
                                    </div>
                                </div>
                                <!-- PROGRESS BAR START -->
                                <div class="dis5_progress">
                                    <div class="dis5_progress_upbox">
                                        <div class="dis5_progress_pos8 allprogress_pos">
                                            <div class="pos-progress-status">
                                                <div class="pos-bar-status dis5_plusProgress_value8"></div>
                                            </div>
                                        </div>
                                        <p class="dis5_pos_value8 allpos_value"></p>
                                    </div>
                                    <div class="dis5_progress_downbox">
                                        <div class="dis5_progress_neg8 allprogress_neg">
                                            <div class="neg-progress-status">
                                                <div class="neg-bar-status dis5_minusProgress_value8"></div>
                                            </div>
                                        </div>
                                        <p class="dis5_neg_value8 allneg_value"></p>
                                    </div>
                                </div>
                                <!-- PROGRESS BAR END -->
                            </td>
                            <td>
                                <div class="display_date_time">
                                    <div class="from_to">
                                        <span>From</span>
                                    </div>
                                    <div class="separation">
                                        <span>-</span>
                                    </div>
                                    <div class="value_date">
                                        <span class="dis_date"></span>
                                    </div>
                                    <div class="value_time">
                                        <span class="dis_time"></span>
                                    </div>
                                </div>
                                <div class="display_date_time">
                                    <div class="from_to">
                                        <span>To</span>
                                    </div>
                                    <div class="separation">
                                        <span>-</span>
                                    </div>
                                    <div class="value_date">
                                        <span class="dis_date"></span>
                                    </div>
                                    <div class="value_time">
                                        <span class="dis_time"></span>
                                    </div>
                                </div>
                                <!-- PROGRESS BAR START -->
                                <div class="dis5_progress">
                                    <div class="dis5_progress_upbox">
                                        <div class="dis5_progress_pos9 allprogress_pos">
                                            <div class="pos-progress-status">
                                                <div class="pos-bar-status dis5_plusProgress_value9"></div>
                                            </div>
                                        </div>
                                        <p class="dis5_pos_value9 allpos_value"></p>
                                    </div>
                                    <div class="dis5_progress_downbox">
                                        <div class="dis5_progress_neg9 allprogress_neg">
                                            <div class="neg-progress-status">
                                                <div class="neg-bar-status dis5_minusProgress_value9"></div>
                                            </div>
                                        </div>
                                        <p class="dis5_neg_value9 allneg_value"></p>
                                    </div>
                                </div>
                                <!-- PROGRESS BAR END -->
                            </td>
                            <td>
                                <div class="display_date_time">
                                    <div class="from_to">
                                        <span>From</span>
                                    </div>
                                    <div class="separation">
                                        <span>-</span>
                                    </div>
                                    <div class="value_date">
                                        <span class="dis_date"></span>
                                    </div>
                                    <div class="value_time">
                                        <span class="dis_time"></span>
                                    </div>
                                </div>
                                <div class="display_date_time">
                                    <div class="from_to">
                                        <span>To</span>
                                    </div>
                                    <div class="separation">
                                        <span>-</span>
                                    </div>
                                    <div class="value_date">
                                        <span class="dis_date"></span>
                                    </div>
                                    <div class="value_time">
                                        <span class="dis_time"></span>
                                    </div>
                                </div>
                                <!-- PROGRESS BAR START -->
                                <div class="dis5_progress">
                                    <div class="dis5_progress_upbox">
                                        <div class="dis5_progress_pos10 allprogress_pos">
                                            <div class="pos-progress-status">
                                                <div class="pos-bar-status dis5_plusProgress_value10"></div>
                                            </div>
                                        </div>
                                        <p class="dis5_pos_value10 allpos_value"></p>
                                    </div>
                                    <div class="dis5_progress_downbox">
                                        <div class="dis5_progress_neg10 allprogress_neg">
                                            <div class="neg-progress-status">
                                                <div class="neg-bar-status dis5_minusProgress_value10"></div>
                                            </div>
                                        </div>
                                        <p class="dis5_neg_value10 allneg_value"></p>
                                    </div>
                                </div>
                                <!-- PROGRESS BAR END -->
                            </td>
                        </tr>
                    </table>
                    <div class="right-slider5">
                        <i class="fas fa-long-arrow-alt-right"></i>
                    </div>
                    <div class="left-slider5">
                        <i class="fas fa-long-arrow-alt-left"></i>
                    </div>
                </div>
            </div>
        </div>
        <!-- //////////  DISPLAY CHART STYLE END ////////// -->

        <!-- ////////// DOUBLE CLICK COLUMN START ////////// -->
        <div class="double-click-style1">
            <div class="row">
                <div class="col-6">
                    <div class="double_click_box mar559">
                        <p>Double Click a Column Name</p>
                        <p>to Display In Table Below</p>
                        <div class="outer_scroll_doubleclick" id="man-res-opt-data-table-left${randomSixDigit}">
                            <div class="double_click_selection_box">
                                <table>
                                    <!-- data from JS -->
                                </table>
                            </div>
                            <div class="checkbox-table-loading">
                                <p class="popup-loading-animation popup-loading"></p>
                                <p class="popup-loading-animation popup-loading"></p>
                                <p class="popup-loading-animation popup-loading"></p>
                                <p class="popup-loading-animation popup-loading"></p>
                                <p class="popup-loading-animation popup-loading"></p>
                                <p class="popup-loading-animation popup-loading"></p>
                                <p class="popup-loading-animation popup-loading"></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="double_click_box mar560">
                        <p>Double Click a Column Name</p>
                        <p>to Remove In Table Below</p>
                        <div class="outer_scroll_doubleclick" id="man-res-opt-data-table-right${randomSixDigit}">
                            <div class="double_click_selection_box">
                                <table>
                                    <!-- data from JS -->
                                </table>
                            </div>
                            <div class="checkbox-table-loading">
                                <p class="popup-loading-animation popup-loading"></p>
                                <p class="popup-loading-animation popup-loading"></p>
                                <p class="popup-loading-animation popup-loading"></p>
                                <p class="popup-loading-animation popup-loading"></p>
                                <p class="popup-loading-animation popup-loading"></p>
                                <p class="popup-loading-animation popup-loading"></p>
                                <p class="popup-loading-animation popup-loading"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="double_arrow">
                <div class="upper_arrow">
                    <div class="inner_arrow" onclick="moveResLeftToRight('${dynamicTabContentId}', 'resizable554${randomSixDigit}', 'man-res-opt-data-table-left${randomSixDigit}', 'man-res-opt-data-table-right${randomSixDigit}', '${randomPrefix}res-id-table-')">
                        <i class="fas fa-long-arrow-alt-right"></i>
                    </div>
                </div>
                <div class="down_arrow">
                    <div class="inner_arrow" onclick="moveResRightToLeft('${dynamicTabContentId}', 'resizable554${randomSixDigit}', 'man-res-opt-data-table-left${randomSixDigit}', 'man-res-opt-data-table-right${randomSixDigit}', '${randomPrefix}res-id-table-')">
                        <i class="fas fa-long-arrow-alt-left"></i>
                    </div>
                </div>
            </div>
            <div class="double_arrow mpnp551">
                <div class="upper_arrow" onclick="ResorderUp('${dynamicTabContentId}', 'resizable554${randomSixDigit}', 'man-res-opt-data-table-right${randomSixDigit}')">
                    <div class="inner_arrow">
                        <i class="fas fa-sort-up"></i>
                    </div>
                </div>
                <div class="down_arrow" onclick="ResorderDown('${dynamicTabContentId}', 'resizable554${randomSixDigit}', 'man-res-opt-data-table-right${randomSixDigit}')">
                    <div class="inner_arrow">
                        <i class="fas fa-sort-down"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="double-click-style2">
            <div class="row">
                <div class="col-6">
                    <div class="double_click_box mar559">
                        <p>Double Click a Column Name</p>
                        <p>to Display In Table Below</p>
                        <div class="outer_scroll_doubleclick" id="style2-man-res-opt-data-table-left${randomSixDigit}">
                            <div class="double_click_selection_box">
                                <table>
                                    <!-- data from JS -->
                                </table>
                            </div>
                            <div class="checkbox-table-loading">
                                <p class="popup-loading-animation popup-loading"></p>
                                <p class="popup-loading-animation popup-loading"></p>
                                <p class="popup-loading-animation popup-loading"></p>
                                <p class="popup-loading-animation popup-loading"></p>
                                <p class="popup-loading-animation popup-loading"></p>
                                <p class="popup-loading-animation popup-loading"></p>
                                <p class="popup-loading-animation popup-loading"></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="double_click_box mar560">
                        <p>Double Click a Column Name</p>
                        <p>to Remove In Table Below</p>
                        <div class="outer_scroll_doubleclick" id="style2-man-res-opt-data-table-right${randomSixDigit}">
                            <div class="double_click_selection_box">
                                <table>
                                    <!-- data from JS -->
                                </table>
                            </div>
                            <div class="checkbox-table-loading">
                                <p class="popup-loading-animation popup-loading"></p>
                                <p class="popup-loading-animation popup-loading"></p>
                                <p class="popup-loading-animation popup-loading"></p>
                                <p class="popup-loading-animation popup-loading"></p>
                                <p class="popup-loading-animation popup-loading"></p>
                                <p class="popup-loading-animation popup-loading"></p>
                                <p class="popup-loading-animation popup-loading"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="double_arrow">
                <div class="upper_arrow">
                    <div class="inner_arrow" onclick="moveRes2LeftToRight('${dynamicTabContentId}', 'style2-man-res-opt-data-table-left${randomSixDigit}', 'style2-man-res-opt-data-table-right${randomSixDigit}', '${randomPrefix}res-table-two-')">
                        <i class="fas fa-long-arrow-alt-right"></i>
                    </div>
                </div>
                <div class="down_arrow">
                    <div class="inner_arrow" onclick="moveRes2RightToLeft('${dynamicTabContentId}', 'style2-man-res-opt-data-table-left${randomSixDigit}', 'style2-man-res-opt-data-table-right${randomSixDigit}', '${randomPrefix}res-table-two-')">
                        <i class="fas fa-long-arrow-alt-left"></i>
                    </div>
                </div>
            </div>
        </div>
        <!-- ////////// DOUBLE CLICK COLUMN END ////////// -->

        <!-- -----========= STYLE 1 STYLE 2 START -----=========  -->
        <div class="style12-section">
            <div class="box-style12">
                <div class="head-style12">
                    <div class="tab_filter-style12">
                        <div class="style1-box">
                            <img src="images/style-1.png" alt="">
                            <span>Style 1</span>
                        </div>
                        <div class="style2-box">
                            <img src="images/style-2.png" alt="">
                            <span>Style 2</span>
                        </div>
                        <button class="style12btn-3 ml-auto updateNowBtn" tooltip="Click to Update" flow="down" onclick="threeBtnConfirmModal('updateNowBtn')">
                            <p>Update Now</p>
                        </button>
                        <button class="style12btn-3 clearFilterBtn" tooltip="Click to Clear Filter" flow="down" onclick="threeBtnConfirmModal('clearFilterBtn')">
                            <p>Clear Filter</p>
                        </button>
                        <button class="style12btn-3 clearSortingBtn" tooltip="Click to Clear Sorting" flow="down" onclick="threeBtnConfirmModal('clearSortingBtn')">
                            <p>Clear Sorting</p>
                        </button>
                        <div class="filtering-style12" data-toggle="modal" data-target="#filter-modal">
                            <i class="fas fa-filter fa-flip-horizontal"></i>
                        </div>
                        <div class="editing-style12">
                            <i class="fas fa-pen"></i>
                        </div>
                        <div class="progress-style12" tooltip="Click to Resume" flow="down">
                            <div class="inner-progress-style12">
                            </div>
                            <!-- comes from javasctript -->
                            <p class="inner-progress-text-style12">Progress 75%</p>
                        </div>
                    </div>

                    <div class="records_style12">
                        <div class="page-number12-wrap">
                            <div class="page-number12">
                                <p>Page<span class="current_page">0</span>of<span class="total_pages">0</span></p>
                                <p>(Records<span class="record_showingFrom">0</span>to<span class="record_showingTo">0</span>)</p>
                            </div>
                        </div>
                        <div class="page-number-loading loading-animation loading"></div>
                        <div class="pdf_box54"><span>PDF</span></div>
                        <input type="file" id="exelFile${randomSixDigit}" accept=".xls, .xlsx, .csv" />
                        <label for="exelFile${randomSixDigit}">CSV</label>
                        <div class="style_date_time">
                            <div class="from_to22">
                                <span>Last Updated</span>
                            </div>
                            <div class="separation22">
                                <span>-</span>
                            </div>
                            <div class="value_date22">
                                <span class="dis_date"></span>
                            </div>
                            <div class="value_time22">
                                <span class="dis_time22"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- ====//////====== STYLE 1 TABLE START ====//////====== -->
                <div class="outer-table-style12-box">
                    <div class="style1-table-wrap">
                        <table id="resizable554${randomSixDigit}" class="mytablesty12 main-table-design">
                            <thead></thead>
                            <tbody></tbody>
                        </table>
                        <table class="mytablesty12 loading-style1-table">
                            <thead>
                                <tr class="dnd-moved">
                                    <th class="column-header-1">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="column-header-2">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="column-header-3">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="column-header-4">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="column-header-5">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="column-header-6">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="column-header-7">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="column-header-8">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="column-header-9">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="column-header-10">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="column-header-11">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="column-header-12">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="column-header-13">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="column-header-14">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="column-header-15">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="column-header-16">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation2 loading"></p>
                                            <p class="loading-animation2 loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation2 loading"></p>
                                            <p class="loading-animation2 loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation2 loading"></p>
                                            <p class="loading-animation2 loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation2 loading"></p>
                                            <p class="loading-animation2 loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation2 loading"></p>
                                            <p class="loading-animation2 loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation2 loading"></p>
                                            <p class="loading-animation2 loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation2 loading"></p>
                                            <p class="loading-animation2 loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation2 loading"></p>
                                            <p class="loading-animation2 loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation2 loading"></p>
                                            <p class="loading-animation2 loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation2 loading"></p>
                                            <p class="loading-animation2 loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation2 loading"></p>
                                            <p class="loading-animation2 loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation2 loading"></p>
                                            <p class="loading-animation2 loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation2 loading"></p>
                                            <p class="loading-animation2 loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation2 loading"></p>
                                            <p class="loading-animation2 loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation2 loading"></p>
                                            <p class="loading-animation2 loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation2 loading"></p>
                                            <p class="loading-animation2 loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation2 loading"></p>
                                            <p class="loading-animation2 loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation2 loading"></p>
                                            <p class="loading-animation2 loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation2 loading"></p>
                                            <p class="loading-animation2 loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation2 loading"></p>
                                            <p class="loading-animation2 loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation2 loading"></p>
                                            <p class="loading-animation2 loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation2 loading"></p>
                                            <p class="loading-animation2 loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation2 loading"></p>
                                            <p class="loading-animation2 loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation2 loading"></p>
                                            <p class="loading-animation2 loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation2 loading"></p>
                                            <p class="loading-animation2 loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation2 loading"></p>
                                            <p class="loading-animation2 loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation2 loading"></p>
                                            <p class="loading-animation2 loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation2 loading"></p>
                                            <p class="loading-animation2 loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="right-slider5">
                        <i class="fas fa-long-arrow-alt-right"></i>
                    </div>
                    <div class="left-slider5">
                        <i class="fas fa-long-arrow-alt-left"></i>
                    </div>
                </div>
                <!-- ====//////====== STYLE 1 TABLE END ====//////====== -->
                <div class="style2-table-wrap">
                    <!-- //////-----//////// LOREM 1 START //////-----////////  -->
                    <div class="style2-table-content"></div>
                    <div class="loading-style2-table">
                        <div class="description-text">
                            <p>
                                Lorem ipsum, dolor sit amet conseetur adipisicing elit. Ad, distinctio incidunt molestias beatae nam
                                doloribus cute laboriosam necesibus acntium recusandae adipisci.
                            </p>
                        </div>
                    
                        <div class="icon-box55">
                            <div class="circle2box addToBookMark">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <div class="circle2box clickViewDetails">
                                <i class="fas fa-pen"></i>
                            </div>
                            <div class="circle2box view-modal-click-style2">
                                <i class="fas fa-eye"></i>
                            </div>
                            <div class="circle2box deleteRowLayout12">
                                <i class="fas fa-trash-alt"></i>
                            </div>
                            <div class="circle2box row-modal-click-style2">
                                <svg class="svg1" viewBox="-21 0 512 512">
                                    <g>
                                        <path d="M406,60h-30v15c0,24.814-20.186,45-45,45H181c-24.814,0-45-20.186-45-45V60h-30c-24.814,0-45,20.186-45,45v360
                                                                            c0,24.814,20.186,47,45,47h300c24.814,0,45-22.186,45-47V105C451,80.186,430.814,60,406,60z M136,450c-8.284,0-15-6.716-15-15
                                                                            c0-8.286,6.716-15,15-15s15,6.714,15,15C151,443.284,144.284,450,136,450z M136,360c-8.284,0-15-6.716-15-15
                                                                            c0-8.286,6.716-15,15-15s15,6.714,15,15C151,353.284,144.284,360,136,360z M136,270c-8.284,0-15-6.716-15-15
                                                                            c0-8.286,6.716-15,15-15s15,6.714,15,15C151,263.284,144.284,270,136,270z M136,180c-8.284,0-15-6.716-15-15
                                                                            c0-8.286,6.716-15,15-15s15,6.714,15,15C151,173.284,144.284,180,136,180z M376,450H196c-8.291,0-15-6.709-15-15
                                                                            c0-8.291,6.709-15,15-15h180c8.291,0,15,6.709,15,15C391,443.291,384.291,450,376,450z M376,360H196c-8.291,0-15-6.709-15-15
                                                                            c0-8.291,6.709-15,15-15h180c8.291,0,15,6.709,15,15C391,353.291,384.291,360,376,360z M376,270H196c-8.291,0-15-6.709-15-15
                                                                            c0-8.291,6.709-15,15-15h180c8.291,0,15,6.709,15,15S384.291,270,376,270z M376,180H196c-8.291,0-15-6.709-15-15s6.709-15,15-15
                                                                            h180c8.291,0,15,6.709,15,15S384.291,180,376,180z" />
                                    </g>
                                    <g>
                                        <path
                                            d="M316,30h-28.154l-3.545-9.99C280.053,8.042,268.686,0,256,0c-12.686,0-24.053,8.042-28.301,20.01L224.154,30H196
                                                                            c-16.569,0-30,13.431-30,30v15c0,8.284,6.716,15,15,15h150c8.284,0,15-6.716,15-15V60C346,43.431,332.569,30,316,30z" />
                                    </g>
                                </svg>
                            </div>
                            <div class="circle2box note-modal-click-style2">
                                <svg class="svg2" viewBox="0 0 24 24">
                                    <path
                                        d="m12.25 2h-1.1c-.33-1.15-1.39-2-2.65-2s-2.32.85-2.65 2h-1.1c-.41 0-.75.34-.75.75v1.5c0 .96.79 1.75 1.75 1.75h5.5c.96 0 1.75-.79 1.75-1.75v-1.5c0-.41-.34-.75-.75-.75z" />
                                    <path
                                        d="m14.25 3h-.25v1.25c0 1.52-1.23 2.75-2.75 2.75h-5.5c-1.52 0-2.75-1.23-2.75-2.75v-1.25h-.25c-1.52 0-2.75 1.23-2.75 2.75v12.5c0 1.52 1.23 2.75 2.75 2.75h7.38l.22-1.23c.1-.56.36-1.06.76-1.47l.8-.8h-8.16c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.5c.05 0 .09 0 .14.02h.01l3.6-3.6v-6.67c0-1.52-1.23-2.75-2.75-2.75zm-1 11.25h-9.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.5c.41 0 .75.34.75.75s-.34.75-.75.75zm0-3.25h-9.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.5c.41 0 .75.34.75.75s-.34.75-.75.75z" />
                                    <path
                                        d="m12.527 24c-.197 0-.389-.078-.53-.22-.173-.173-.251-.419-.208-.661l.53-3.005c.026-.151.1-.291.208-.4l7.425-7.424c.912-.914 1.808-.667 2.298-.177l1.237 1.237c.683.682.683 1.792 0 2.475l-7.425 7.425c-.108.109-.248.182-.4.208l-3.005.53c-.043.008-.087.012-.13.012zm3.005-1.28h.01z" />
                                </svg>
                            </div>
                            <div class="circle2box copyrowlist-modal-click-style2">
                                <svg class="svg3" viewBox="0 0 24 24">
                                    <path
                                        d="m4 6.75c0-2.619 2.131-4.75 4.75-4.75h9.133c-.329-1.151-1.378-2-2.633-2h-11.5c-1.517 0-2.75 1.233-2.75 2.75v15.5c0 1.517 1.233 2.75 2.75 2.75h.25z" />
                                    <path
                                        d="m20.25 4h-11.5c-1.517 0-2.75 1.233-2.75 2.75v14.5c0 1.517 1.233 2.75 2.75 2.75h11.5c1.517 0 2.75-1.233 2.75-2.75v-14.5c0-1.517-1.233-2.75-2.75-2.75zm-2 17h-7.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h7.5c.414 0 .75.336.75.75s-.336.75-.75.75zm0-4h-7.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h7.5c.414 0 .75.336.75.75s-.336.75-.75.75zm0-3.5h-7.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h7.5c.414 0 .75.336.75.75s-.336.75-.75.75zm0-4h-7.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h7.5c.414 0 .75.336.75.75s-.336.75-.75.75z" />
                                </svg>
                            </div>
                            <div class="circle2box moverowlist-modal-click-style2">
                                <svg class="svg4" viewBox="0 0 512.007 512.007">
                                    <g>
                                        <path d="m142 143.003h139v-143c-49.379 0-107.674 0-154 0v128c0 8.271 6.729 15 15 15z" />
                                        <path d="m345 128.003v-128c-9.97 0-21.461 0-34 0v143h19c8.271 0 15-6.729 15-15z" />
                                        <path d="m127 512.003h218v-161h-218z" />
                                        <path
                                            d="m511.927 126.537c-.279-2.828-1.38-5.667-3.315-8.027-.747-.913 6.893 6.786-114.006-114.113-2.882-2.882-6.794-4.396-10.612-4.394-.789 0-3.925 0-8.995 0v128c0 24.813-20.187 45-45 45-14.028 0-186.064 0-188 0-24.813 0-45-20.187-45-45v-128c-29.589 0-49.82 0-52 0-24.813 0-45 20.187-45 45v422c0 24.813 20.187 45 45 45h52c0-10.815 0-201.797 0-210 0-24.813 20.187-45 45-45h188c24.813 0 45 20.187 45 45v210h92c24.813 0 45-20.187 45-45 .001-364.186.041-339.316-.072-340.466z" />
                                        <path d="m330 287.003h-188c-8.271 0-15 6.729-15 15v19h218v-19c0-8.271-6.729-15-15-15z" />
                                    </g>
                                </svg>
                            </div>
                            <div class="circle2box alertswindow-modal-click-style2">
                                <svg class="" viewBox="0 0 511.156 511.156">
                                    <path d="m184.904 465.044c11.999 27.127 39.154 46.112 70.674 46.112s58.674-18.985 70.674-46.112z" />
                                    <path
                                        d="m255.573 48.836c20.8 0 40.772 3.67 59.306 10.389v-2.283c0-31.398-25.544-56.942-56.941-56.942h-4.719c-31.398 0-56.942 25.544-56.942 56.942v2.254c18.524-6.699 38.49-10.36 59.296-10.36z" />
                                    <path
                                        d="m442.747 435.044h-374.338c-7.082 0-13.569-4.776-15.042-11.704-1.458-6.859 1.668-13.629 8.01-16.559 1.505-.976 12.833-8.897 24.174-32.862 20.829-44.01 25.201-106.005 25.201-150.263 0-79.855 64.967-144.82 144.821-144.82 79.665 0 144.512 64.652 144.82 144.245.007.191.011.383.011.575 0 44.258 4.372 106.253 25.201 150.263 11.341 23.965 22.668 31.887 24.174 32.862 6.342 2.93 9.469 9.699 8.01 16.559-1.473 6.927-7.959 11.704-15.042 11.704zm7.2-28.157h.01z" />
                                </svg>
                            </div>
                        </div>
                    
                        <table class="table sty2table2 cross-table-2">
                            <thead>
                                <tr>
                                    <th scope="col" class="style-two-head-01">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="style-two-head-02">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="style-two-head-03">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="status22 style-two-head-01">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td class="s2-value style-two-head-02">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td class="s2-value style-two-head-03">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    
                        <table class="table sty2table3 cross-table-3">
                            <thead>
                                <tr>
                                    <th scope="col" class="style-two-head-04">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="style-two-head-05">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="style-two-head-06">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="style-two-head-07">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="vall11_datel style-two-head-04">
                                        <div class="loading-row">
                                            <p class="loading-animation2 loading"></p>
                                            <p class="loading-animation2 loading"></p>
                                        </div>
                                    </td>
                                    <td class="vall11_datel style-two-head-05">
                                        <div class="loading-row">
                                            <p class="loading-animation2 loading"></p>
                                            <p class="loading-animation2 loading"></p>
                                        </div>
                                    </td>
                                    <td class="dchart_1 style-two-head-06">
                                        <div class="loading-row">
                                            <p class="loading-animation2 loading"></p>
                                            <p class="loading-animation2 loading"></p>
                                        </div>
                                    </td>
                                    <td class="pentagon style-two-head-07">
                                        <div class="loading-row">
                                            <p class="loading-animation2 loading"></p>
                                            <p class="loading-animation2 loading"></p>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    
                        <table class="table sty2table4 cross-table-4">
                            <thead>
                                <tr>
                                    <th scope="col" class="style-two-head-08">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="style-two-head-09">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="style-two-head-10">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="style-two-head-11">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="style-two-head-12">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="style-two-head-13">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="style-two-head-14">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="style-two-head-15">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="style-two-head-16">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="style-two-head-17">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="style-two-head-18">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="style-two-head-19">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="style-two-head-20">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="vall11_datel style-two-head-08">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td class="vall11_datel style-two-head-09">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td class="vall11_datel style-two-head-10">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td class="vall11_datel style-two-head-11">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td class="vall11_datel style-two-head-12">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td class="vall11_datel style-two-head-13">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td class="vall11_datel style-two-head-14">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td class="vall11_datel style-two-head-15">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td class="vall11_datel style-two-head-16">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td class="vall11_datel style-two-head-17">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td class="vall11_datel style-two-head-18">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td class="vall11_datel style-two-head-19">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td class="vall11_datel style-two-head-20">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    
                        <table class="table sty2table5 cross-table-4">
                            <thead>
                                <tr>
                                    <th scope="col" class="style-two-head-21">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="style-two-head-22">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="style-two-head-23">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="style-two-head-24">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="style-two-head-25">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="style-two-head-26">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="style-two-head-27">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="style-two-head-28">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="style-two-head-29">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="style-two-head-30">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="style-two-head-31">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="style-two-head-32">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="style-two-head-33">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="vall11_datel style-two-head-21">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td class="vall11_datel style-two-head-22">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td class="vall11_datel style-two-head-23">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td class="vall11_datel style-two-head-24">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td class="vall11_datel style-two-head-25">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td class="vall11_datel style-two-head-26">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td class="vall11_datel style-two-head-27">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td class="vall11_datel style-two-head-28">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td class="vall11_datel style-two-head-29">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td class="vall11_datel style-two-head-30">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td class="vall11_datel style-two-head-31">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td class="vall11_datel style-two-head-32">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td class="vall11_datel style-two-head-33">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    
                        <table class="table sty2table6 cross-table-4">
                            <thead>
                                <tr>
                                    <th scope="col" class="style-two-head-34">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="style-two-head-35">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="style-two-head-36">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="style-two-head-37">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="style-two-head-38">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="style-two-head-39">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="style-two-head-40">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="style-two-head-41">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="style-two-head-42">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="style-two-head-43">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="style-two-head-44">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="style-two-head-45">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="style-two-head-46">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="style-two-head-47">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="vall11_datel style-two-head-34">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td class="vall11_datel style-two-head-35">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td class="vall11_datel style-two-head-36">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td class="vall11_datel style-two-head-37">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td class="vall11_datel style-two-head-38">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td class="vall11_datel style-two-head-39">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td class="vall11_datel style-two-head-40">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td class="vall11_datel style-two-head-41">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td class="vall11_datel style-two-head-42">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td class="vall11_datel style-two-head-43">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td class="vall11_datel style-two-head-44">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td class="vall11_datel style-two-head-45">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td class="vall11_datel style-two-head-46">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td class="vall11_datel style-two-head-47">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                </tr>
                    
                            </tbody>
                        </table>
                    
                        <table class="table sty2table7 cross-table-4">
                            <thead>
                                <tr>
                                    <th scope="col" class="style-two-head-48">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="style-two-head-49">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="style-two-head-50">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="style-two-head-51">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="style-two-head-52">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="style-two-head-53">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="style-two-head-54">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="style-two-head-55">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="style-two-head-56">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="style-two-head-57">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="style-two-head-58">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="style-two-head-59">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="style-two-head-60">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="style-two-head-61">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="vall11_datel style-two-head-48">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td class="vall11_datel style-two-head-49">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td class="vall11_datel style-two-head-50">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td class="vall11_datel style-two-head-51">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td class="vall11_datel style-two-head-52">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td class="vall11_datel style-two-head-53">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td class="vall11_datel style-two-head-54">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td class="vall11_datel style-two-head-55">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td class="vall11_datel style-two-head-56">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td class="vall11_datel style-two-head-57">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td class="vall11_datel style-two-head-58">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td class="vall11_datel style-two-head-59">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td class="vall11_datel style-two-head-60">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td class="vall11_datel style-two-head-61">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                </tr>
                    
                            </tbody>
                        </table>
                    
                        <table class="table sty2table8 cross-table-4">
                            <thead>
                                <tr>
                                    <th scope="col" class="style-two-head-62">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                    <th scope="col" class="style-two-head-63">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="vall11_datel style-two-head-62">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                    <td class="vall11_datel style-two-head-63">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                </tr>
                    
                            </tbody>
                        </table>
                    
                        <table class="table sty2table9 cross-table-4" style="margin-bottom: 50px;">
                            <thead>
                                <tr>
                                    <th scope="col" class="style-two-head-64">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="vall11_datel style-two-head-64">
                                        <div class="loading-row">
                                            <p class="loading-animation loading"></p>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>


                <!-- //////-----//////// LOREM 1 END //////-----////////  -->
                <div class="no-result">
                    <p>Sorry, No Results Found! Please try again!</p>
                </div>


            </div>
            <!-- PEGINATION START -->
            <div class="pagination-container">
                <div class="pagination-table">
                    <div class="width-pagination width-pagi-manRes-table">
                        <div class="width-row-go">
                            <div class="no-of-rows">
                                <div class="left-row-no">
                                    <input type="number" class="manRes-pagination-input" name="rowNo" value="7">
                                    <label for="rowNo">rows per page</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- PEGINATION END -->
            <!-- PEGINATION LOADING STARTS -->
            <div class="pagination-loading-handler">
                <div class="pagination-loading-container">
                    <div class="row-per-page">
                        <div class="row-input pagination-loading-animation pagination-loading"></div>
                        <p>rows per page</p>
                    </div>
                    <div class="number-of-page">
                        <div class="page-num pagination-loading-animation pagination-loading"></div>
                        <div class="page-num pagination-loading-animation pagination-loading"></div>
                        <div class="page-num pagination-loading-animation pagination-loading"></div>
                        <div class="page-num pagination-loading-animation pagination-loading"></div>
                        <div class="page-num pagination-loading-animation pagination-loading"></div>
                        <div class="page-num pagination-loading-animation pagination-loading"></div>
                        <div class="page-num pagination-loading-animation pagination-loading"></div>
                        <div class="page-num pagination-loading-animation pagination-loading"></div>
                    </div>
                    <div class="goto-page">
                        <div class="goto-input pagination-loading-animation pagination-loading"></div>
                        <p><strong>GO</strong></p>
                    </div>
                </div>
            </div>
            <!-- PEGINATION LOADING END -->
        </div>
    </div>`);
    handlingClickOnMainDynamicTab();
    fiveChartBtnClick(`${dynamicTabContentId}`);
    // $(`#firstOpen${randomSixDigit}`).addClass("inner-active-tab-81");
    // $(`#firstOpen${randomSixDigit}`).click();
    openFiveChartTab(`${dynamicTabContentId}`, 'Display1', this); 
    gotoChartPage(`scorer-meter-1${randomSixDigit}`, `scorer-meter-2${randomSixDigit}`, `scorer-meter-3${randomSixDigit}`);
    
    scrollDisplayChartThree(`${dynamicTabContentId}`);
	scrollDisplayChartFive(`${dynamicTabContentId}`,`table001122${randomSixDigit}`);
    displayDateForChart5();
    DisplayCurrentTime();
    tableProgressBarAnimation(`${dynamicTabContentId}`, Math.floor(Math.random() * (100 - 0 + 1)), 'inner-progress-style12', 'inner-progress-text-style12');
    styleIconSwitcherOperation(`${dynamicTabContentId}`, `resizable554${randomSixDigit}`);

    loadCSVshowData(`exelFile${randomSixDigit}`, `${dynamicTabContentId}`, `resizable554${randomSixDigit}`, `man-res-opt-data-table-left${randomSixDigit}`, `man-res-opt-data-table-right${randomSixDigit}`, `${randomPrefix}res-id-table-`, `style2-man-res-opt-data-table-left${randomSixDigit}`, `style2-man-res-opt-data-table-right${randomSixDigit}`, `${randomPrefix}res-table-two-`);

    mnResultRowPerPage(`exelFile${randomSixDigit}`, `${dynamicTabContentId}`, `resizable554${randomSixDigit}`, `man-res-opt-data-table-left${randomSixDigit}`, `man-res-opt-data-table-right${randomSixDigit}`, `style2-man-res-opt-data-table-left${randomSixDigit}`, `style2-man-res-opt-data-table-right${randomSixDigit}`, `${randomPrefix}res-table-two-`);

    // Directly Active The Dynamic Tab
    openTabPage(`${dynamicTabContentId}`, this);
    $(".tablink").removeClass("active-tab-81");
    $(`#${dynamicTabBtnId}`).addClass("active-tab-81");
}

function randomRangeString(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

let deleteDynamicTabId = "";
let deleteDynamicContentId = "";

function deleteDynamicTab(crossThis){
    deleteDynamicTabId = crossThis.parentElement.id;
    deleteDynamicContentId =  "content_" + deleteDynamicTabId.replace("btn_", "");
    console.dir("deleteDynamicTabId : " + deleteDynamicTabId);
    console.dir("deleteDynamicContentId : " + deleteDynamicContentId);

    $('#dynamicTabCross_confirm_modal .question-delete p').html(`Remove ${crossThis.parentElement.innerText} tab permanently?`);
    $('#dynamicTabCross_confirm_modal').modal('show');
}

function dynamicTabCrossConfirmBtn(dynamicDeleteConfirmThis){
    $(`#${deleteDynamicTabId}`).remove();
    $(`#${deleteDynamicContentId}`).remove();
    $('#dynamicTabCross_confirm_modal').modal('hide');

    document.getElementById("defaultTabOpen").click();
    // $("#defaultTabOpen").addClass("active-tab-81");
    // $("#Main").css("display", "block");

    mnResultActiveTabID = "Main";
    mnResultActiveTabSty1TableID = "resizable554";

    let compStyles = window.getComputedStyle(document.querySelector(`#resizable554 thead`));
    $(`#Main .outer-table-style12-box .style1-table-wrap .clone-head-table-wrap`).css({
        width: compStyles.width,
        height: "44px"
    });
    
    for (let columnNum = 3; columnNum <= 66; columnNum++) {
        let columnHeaderWidth = tableResizerData[`column-header-${columnNum}`];

        $(`#resizable554 thead tr .column-header-${columnNum} .column-header-${columnNum}-sizer`).attr("style", `width: ${columnHeaderWidth}`);
        $(`#resizable554 tbody tr td .column-header-${columnNum}-resizer`).attr("style", `width: ${columnHeaderWidth}`);
        $(`#Main .outer-table-style12-box .style1-table-wrap .clone-head-table-wrap .mytablesty12 thead tr .column-header-${columnNum} .column-header-${columnNum}-sizer`).attr("style", `width: ${columnHeaderWidth}`);
    }
}