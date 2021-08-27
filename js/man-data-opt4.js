// Manage Data Opt 4 Sample 2 Start
let opt4LeftData = [
  {
    id: "lsa-opt4-1",
    name: "L-Options 1",
    type: "one",
  },
  {
    id: "lsa-opt4-2",
    name: "L-Options 2",
    type: "one",
  },
  {
    id: "lsa-opt4-3",
    name: "L-Options 3",
    type: "two",
  },
  {
    id: "lsa-opt4-4",
    name: "L-Options 4",
    type: "three",
  },
  {
    id: "lsa-opt4-5",
    name: "L-Options 5",
    type: "four",
  },
  {
    id: "lsa-opt4-6",
    name: "L-Options 6",
    type: "four",
  },
  {
    id: "lsa-opt4-7",
    name: "L-Options 7",
    type: "four",
  },
  {
    id: "lsa-opt4-8",
    name: "L-Options 8",
    type: "four",
  },
  {
    id: "lsa-opt4-9",
    name: "L-Options 9",
    type: "two",
  },
  {
    id: "lsa-opt4-10",
    name: "L-Options 10",
    type: "four",
  },
  {
    id: "lsa-opt4-11",
    name: "L-Options 11",
    type: "five",
  },
];

let opt4RightData = [
  {
    id: "rsa-opt4-1",
    name: "R-Options 1",
    type: "one",
  },
  {
    id: "rsa-opt4-2",
    name: "R-Options 2",
    type: "one",
  },
  {
    id: "rsa-opt4-3",
    name: "R-Options 3",
    type: "two",
  },
  {
    id: "rsa-opt4-4",
    name: "R-Options 4",
    type: "three",
  },
  {
    id: "rsa-opt4-5",
    name: "R-Options 5",
    type: "four",
  },
  {
    id: "rsa-opt4-6",
    name: "R-Options 6",
    type: "four",
  },
  {
    id: "rsa-opt4-7",
    name: "R-Options 7",
    type: "four",
  },
  {
    id: "rsa-opt4-8",
    name: "R-Options 8",
    type: "four",
  },
  {
    id: "rsa-opt4-9",
    name: "R-Options 9",
    type: "two",
  },
  {
    id: "rsa-opt4-10",
    name: "R-Options 10",
    type: "four",
  },
  {
    id: "rsa-opt4-11",
    name: "R-Options 11",
    type: "five",
  }
];

let opt4Extra = [
  {
    id: "opt4-if-option",
    name: "IF",
    type: "option",
  },
  {
    id: "opt4-minimum-input",
    name: "MINIMUM",
    type: "input",
  },
  {
    id: "opt4-every-option",
    name: "EVERY",
    type: "option",
  },
];

function clickAddClassSgl(e) {
  let allTr = $(e).parent().children("tr.mark-table-data");
  for (let i = 0; i < allTr.length; i++) {
    if (allTr[i] != e) $(allTr[i]).removeClass("mark-table-data");
  }
  $(e).toggleClass("mark-table-data");
}

function listRenderOpt4(id, name, addNewRow) {
  let ele = `<tr ondblclick="${addNewRow}" onclick="clickAddClassSgl(this)" class="cursor-pointer" id="${id}">
    <td colspan="2">${name}</td>
    <td>
      <span class="tooltip-container" tooltip="${name}" flow="down">
        <i class="fas fa-question-circle"></i>
      </span>
    </td>
    <td></td>
  </tr>`;
  return ele;
}

function leftSideTableOpt4() {
  let leftTable = "";
  opt4LeftData.forEach(({ id, name }) => {
    let addNewRowL = `opt4Sam2Render(this,'mnDt_LfSide')`;
    leftTable += listRenderOpt4(id, name, addNewRowL);
  });
  $("#opt4-table-left-list").html(leftTable);
}
leftSideTableOpt4();

function rightSideTableOpt4() {
  let rightTable = "";
  opt4RightData.forEach(({ id, name }) => {
    let addNewRowR = `opt4Sam2Render(this, 'mnDt_RtSide')`;
    rightTable += listRenderOpt4(id, name, addNewRowR);
  });
  $("#opt4-table-right-list").html(rightTable);
}
rightSideTableOpt4();

function opt4Sam2Render(e, divId) {
  let _id = $(e).attr("id");
  let title = "", dataType = "", manDataSwapSeq = "", manDataResetValue = "";
  if (divId == "mnDt_LfSide") {
    let { name, type } = opt4LeftData.filter((a) => a.id == _id)[0];
    title = name;
    dataType = type;
    manDataSwapSeq = "manDataSwapSeqL(this)";
    manDataResetValue = "manDataResetValueL(this)";
  }
  else if (divId == "mnDt_RtSide") {
    let { name, type } = opt4RightData.filter((a) => a.id == _id)[0];
    title = name;
    dataType = type;
    manDataSwapSeq = "manDataSwapSeqR(this)";
    manDataResetValue = "manDataResetValueR(this)";
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
      <select class="sequence-opt4" onchange="${manDataSwapSeq}">
        <option value="0">SEQUENCE</option>
      </select>
    </div>
  </div>
  <div class="width-22">
    <div class="custom-input-only">
      <input type="text" onfocus="onFocus(this)" onfocusout="manDatacheckEmpty(this)" oninput="manDatacheckEmpty(this)"/>
    </div>
  </div>
  <div class="width-22">
    <div class="custom-input-only">
      <input type="text" onfocus="onFocus(this)" onfocusout="manDatacheckEmpty(this)" oninput="manDatacheckEmpty(this)"/>
    </div>
  </div>`;

  let lOptTwo =
    `<div class="width-12"></div>
  <div class="width-22">
    <div class="custome-select">
      <select class="sequence-opt4" onchange="${manDataSwapSeq}">
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
      <select class="sequence-opt4" onchange="${manDataSwapSeq}">
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
      <select class="sequence-opt4" onchange="${manDataSwapSeq}">
        <option value="0">SEQUENCE</option>
      </select>
    </div>
  </div>
  <div class="width-22">
    <div class="custom-input-only">
      <input type="text" onfocus="onFocus(this)"  onfocusout="manDatacheckEmpty(this)" oninput="manDatacheckEmpty(this)"/>
    </div>
  </div>
  <div class="width-22">
    <div class="custom-input-only">
      <input type="text" onfocus="onFocus(this)"  onfocusout="manDatacheckEmpty(this)" oninput="manDatacheckEmpty(this)"/>
    </div>
  </div>`;

  let lOptFive =
    `<div class="width-12"></div>
  <div class="width-22">
    <div class="custome-select">
      <select class="sequence-opt4" onchange="${manDataSwapSeq}">
        <option value="0">SEQUENCE</option>
      </select>
    </div>
  </div>
  <div class="width-22">
    <div class="custom-input-only">
      <input type="number" onfocus="onFocus(this)" onfocusout="manDatacheckNum(this)" oninput="manDatacheckNum(this)"/>
    </div>
  </div>
  <div class="width-22">
    <div class="custom-input-only">
      <input type="number" onfocus="onFocus(this)" onfocusout="manDatacheckNum(this)" oninput="manDatacheckNum(this)"/>
    </div>
  </div>`;

  let opt4Type = "";
  if (dataType == "one") opt4Type = lOptOne;
  else if (dataType == "two") opt4Type = lOptTwo;
  else if (dataType == "three") opt4Type = lOptThree;
  else if (dataType == "four") opt4Type = lOptFour;
  else if (dataType == "five") opt4Type = lOptFive;

  let renderLeftSite =
    `<div class="d-flex mb-2" id="${_id}">
    <div class="width-5 align-items-baseline">
      <div class="threebar">
        <span>|||</span>
      </div>
    </div>
    <div class="width-tooltip">
      <div class="icon-container" tooltip="${title}" flow="down">
        <i class="fas fa-question-circle"></i>
      </div>
    </div>
    <div class="width-26">
      <div class="page__toggle">
        <label class="toggle">
          <input class="toggle__input" type="checkbox" onchange="${manDataResetValue}"/>
          <span class="toggle__label">
            <span class="toggle__text">${title}</span>
          </span>
        </label>
      </div>
    </div>
    ${opt4Type}
  </div>`;
  $(`#${divId}`).append(renderLeftSite);
  $(e).remove();
}

var manDataSeqListL = [];
var manDataSeqListR = [];

function manDataResetValueL(e) {
  let pid = $(e).parent().parent().parent().parent().attr("id");
  if ($(`#${pid} .sequence-opt4`).length == 0) return true;
  if (e.checked == false) {
    $(`#${pid} input, #${pid} select`).val("");
    manDataSeqListL = manDataSeqListL.filter(function (id) {
      $(`#${id} .sequence-opt4`).children(`option:last-child`).remove();
      return pid != id;
    });
    manDataSeqListL.forEach(function (val, index) {
      $(`#${val} .sequence-opt4`).val(index + 1);
    });
    $(`#${pid} .sequence-opt4`).html(`<option value='0'>SEQUENCE</option>`);
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
    let inW = inWords(manDataSeqListL.length + 1).toUpperCase();
    manDataSeqListL.forEach(function (val, index) {
      $(`#${val} .sequence-opt4`).append(
        `<option value="${(manDataSeqListL.length + 1)}">${inW}</option>`
      );
      $(`#${val} .sequence-opt4`).val(index + 1);
    });
    manDataSeqListL.push(pid);
    if (manDataSeqListL.length == 1) {
      $(`#${pid} .sequence-opt4`).html(`<option value='1'>FIRST</option>`);
    }
    else {
      $(`#${pid} .sequence-opt4`).html($(`#${manDataSeqListL[0]} .sequence-opt4`).html());
    }
    $(`#${pid} .sequence-opt4`).val(manDataSeqListL.length);
  }
}
function manDataResetValueR(e) {
  let pid = $(e).parent().parent().parent().parent().attr("id");
  if ($(`#${pid} .sequence-opt4`).length == 0) return true;
  if (e.checked == false) {
    $(`#${pid} input, #${pid} select`).val("");
    manDataSeqListR = manDataSeqListR.filter(function (id) {
      $(`#${id} .sequence-opt4`).children(`option:last-child`).remove();
      return pid != id;
    });
    manDataSeqListR.forEach(function (val, index) {
      $(`#${val} .sequence-opt4`).val(index + 1);
    });
    $(`#${pid} .sequence-opt4`).html(`<option value='0'>SEQUENCE</option>`);
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
    let inW = inWords(manDataSeqListR.length + 1).toUpperCase();
    manDataSeqListR.forEach(function (val, index) {
      $(`#${val} .sequence-opt4`).append(
        `<option value="${(manDataSeqListR.length + 1)}">${inW}</option>`
      );
      $(`#${val} .sequence-opt4`).val(index + 1);
    });
    manDataSeqListR.push(pid);
    if (manDataSeqListR.length == 1) {
      $(`#${pid} .sequence-opt4`).html(`<option value='1'>FIRST</option>`);
    }
    else {
      $(`#${pid} .sequence-opt4`).html($(`#${manDataSeqListR[0]} .sequence-opt4`).html());
    }
    $(`#${pid} .sequence-opt4`).val(manDataSeqListR.length);
  }
}

function manDataSwapSeqL(e) {
  let pid = $(e).parent().parent().parent().attr("id");
  let val = $(e).val();
  if (parseInt(val) > manDataSeqListL.length) val = (manDataSeqListL.length + 1).toString();
  if (val == "0")
    manDataSeqListL = manDataSeqListL.filter(function (id) {
      return pid != id;
    });
  else {
    let index = manDataSeqListL.indexOf(pid);
    if (index == -1) {
      manDataSeqListL[val - 1] = pid;
    } else if (manDataSeqListL.length >= val) {
      manDataSeqListL[index] = manDataSeqListL[val - 1];
      manDataSeqListL[val - 1] = pid;
    }
    $(`#${manDataSeqListL[index]} .sequence-opt4`).val(index + 1);
    $(`#${pid} .sequence-opt4`).val(val);
  }
}
function manDataSwapSeqR(e) {
  let pid = $(e).parent().parent().parent().attr("id");
  let val = $(e).val();
  if (parseInt(val) > manDataSeqListR.length) val = (manDataSeqListR.length + 1).toString();
  if (val == "0")
    manDataSeqListR = manDataSeqListR.filter(function (id) {
      return pid != id;
    });
  else {
    let index = manDataSeqListR.indexOf(pid);
    if (index == -1) {
      manDataSeqListR[val - 1] = pid;
    } else if (manDataSeqListR.length >= val) {
      manDataSeqListR[index] = manDataSeqListR[val - 1];
      manDataSeqListR[val - 1] = pid;
    }
    $(`#${manDataSeqListR[index]} .sequence-opt4`).val(index + 1);
    $(`#${pid} .sequence-opt4`).val(val);
  }
}

function manDatacheckEmpty(e) {
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

function manDatacheckNum(e) {
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
function findInputIdDS2(title) {
  let searchArr = opt4LeftData.concat(opt4RightData);
  let res = searchArr.filter((a) => a.name == title);
  if (res.length) return res[0];
  else return false;
}

function formToWindowDS2() {
  let renHtml = "";
  let manDataSeqList = manDataSeqListL.concat(manDataSeqListR);
  manDataSeqList.forEach((pid) => {
    let title = $(`#${pid} span.toggle__text`).html();
    let addSet = $(`#${pid} .add-set`).find(":selected").text();
    let seqTitle = $(`#${pid} .sequence-opt4`).find(":selected").text();
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

  return renHtml;
}

function windowToFormDS2(divData, searchData) {
  let [title, no] = divData[0].trim().split("_");
  no = no != undefined ? no : 1;
  let { id: pid } = searchData;
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
      let len = Math.max(opt4LeftData.length, opt4RightData.length);
      for (let k = 1; k <= len; k++) {
        if (divData[2].trim().toUpperCase() == inWords(k).toUpperCase()) {
          seqVal = k;
        }
      }
      $(`#${pid} .sequence-opt4`).val(seqVal);
    }
  } else if (pid && divData.length == 2) {
    let inp = $(`#${pid} .custom-input-only input`);
    let inpSel = $(`#${pid} .user-inp`);
    if (inp.length > 0) {
      inp[no - 1].value = divData[1].trim();
    } else if (inpSel.length > 0) {
      inpSel[no - 1].value = divData[1].trim();
    }
  }
}

// Form by text editor End
// Manage Data Opt 4 Sample 2 End

// Manage Data Opt 4 Sample 4 Start
let manDataSam4Data = [
  {
    id: "man-data-id-1",
    name: "Option 1 - Text abc",
    type: "inputText",
  },
  {
    id: "man-data-id-2",
    name: "Option 2 - Text abd",
    type: "range",
  },
  {
    id: "man-data-id-3",
    name: "Option 3 - Text abef",
    type: "date",
  },
  {
    id: "man-data-id-4",
    name: "Option 4 - Text abc12",
    type: "select",
  },
  {
    id: "man-data-id-5",
    name: "Option 5 - Text abc12",
    type: "inputText",
  },
  {
    id: "man-data-id-6",
    name: "Option 6 - Text abd56",
    type: "range",
  },
  {
    id: "man-data-id-7",
    name: "Option 7 - Text abef67",
    type: "date",
  },
  {
    id: "man-data-id-8",
    name: "Option 8 - Text abc12fd",
    type: "select",
  },
];

(function dataSam4firstTable() {
  let htmlTable = "";
  manDataSam4Data.forEach(({ id, name }) => {
    htmlTable += `<tr id="${id}" ondblclick="dblclickMoveData(this)" onclick="clickAddClassData(this)">
        <td>${name}</td>
    </tr>`;
  });

  $("#sample4-first tbody").html(htmlTable)
})();

function clickAddClassData(e) {
  $(e).toggleClass("mark-table-data");
}

function moveLeftToRightData() {
  let tr = $("#sample4-first tr.mark-table-data");
  tr.removeClass("mark-table-data");
  $("#sample4-second tbody").append(tr);
  for (let i = 0; i < tr.length; i++) {
    let _id = $(tr[i]).attr("id");
    manTemInpBuildData(_id);
  }
}
function moveRightToLeftData() {
  let tr = $("#sample4-second tr.mark-table-data");
  tr.removeClass("mark-table-data");
  $("#sample4-first tbody").append(tr);
  for (let i = 0; i < tr.length; i++) {
    let _id = $(tr[i]).attr("id");
    removeElementData(_id);
  }
}

function dblclickMoveData(e) {
  let _id = $(e).parent().parent().attr("id");
  let id = $(e).attr("id");
  if (_id == "sample4-first") {
    $(e).removeClass("mark-table-data");
    $("#sample4-second tbody").append(e);
    manTemInpBuildData(id);
  }
  else if (_id == "sample4-second") {
    $(e).removeClass("mark-table-data");
    $("#sample4-first tbody").append(e);
    removeElementData(id);
  }
}

function orderUpData() {
  let row = $("#sample4-second tbody tr.mark-table-data");
  row.each(function () {
    let rw = $(this).closest("tr.mark-table-data");
    rw.insertBefore(rw.prev());
    let _id = rw.attr("id");
    elementMoveData(_id, "up");
  });
}
function orderDownData() {
  let row = $("#sample4-second tbody tr.mark-table-data");
  row.each(function () {
    let rw = $(this).closest("tr");
    for (let i = 0; i < row.length; i++) {
      rw.insertAfter(rw.next());
      let _id = rw.attr("id");
      elementMoveData(_id, "down");
    }
  });
}

function manTemInpBuildData(_id) {
  let { name, type } = manDataSam4Data.filter(a => a.id == _id)[0];
  let htmlData = "";
  if (name && type) {
    let nameArr = name.split("-");
    let nameArr2 = nameArr.length > 1 ? nameArr[1] : "";
    if (type == "inputText") {
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
    } else if (type == "range") {
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
            <input class="range-example-input-1" type="text" min="0" max="100" value="10,40" name="points" step="1" width="100" />
          </div>
          <span class="max">100</span>
        </div>
      </div>`;
    } else if (type == "date") {
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
            <input class="date-pick-style-sample4 datepicker_op4" type="text" id="${_id}_fromDate"/>
            <i class="far fa-calendar-alt icon-sample4 datepicker_op4_Icon"></i>
          </div>
        </div>
        <div class="width-input-group-35">
          <div class="input-section-sample4 left-side-input" onclick="calenderPop(this)">
            <input class="date-pick-style-sample4 datepicker_op4" type="text" id="${_id}_toDate"/>
            <i class="far fa-calendar-alt icon-sample4 datepicker_op4_Icon"></i>
          </div>
        </div>
      </div>`;
    } else if (type == "select") {
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
                <option>Option Text 1</option>
                <option>Option Text 2</option>
                <option>Option Text 3</option>
              </select>
            </div>
          </div>
        </div>
        <div class="width-input-group-35">
          <div class="input-section-sample4 left-side-input">
            <div class="custom-select-sample4">
              <select>
                <option>Option Text 1</option>
                <option>Option Text 2</option>
                <option>Option Text 3</option>
              </select>
            </div>
          </div>
        </div>
      </div>`;
    }
    $("#man-data-sam4-input-data").append(htmlData);
  }
  $(".range-example-input-1").asRange({
    range: true,
    limit: false
  });

  // Manage Data Option 4 Sample 4 DATE PICKER START
  // $(".datepicker_op4").datepicker();
  // $(".datepicker_op4").datepicker("option", "dateFormat", "mm/dd/yy");
  let dateFormat_Sm4 = "mm/dd/yy";
  let sample4_first_from_date = $("#man-data-id-3_fromDate").datepicker({
    defaultDate: "+1w",
    numberOfMonths: 1
  }).on("change", function () {
    sample4_first_to_date.datepicker("option", "minDate", getDateSmp4First(this));
  });

  let sample4_first_to_date = $("#man-data-id-3_toDate").datepicker({
    defaultDate: "+1w",
    numberOfMonths: 1
  }).on("change", function () {
    sample4_first_from_date.datepicker("option", "maxDate", getDateSmp4First(this));
  });

  function getDateSmp4First(element) {
    let date_sm_first;
    try {
      date_sm_first = $.datepicker.parseDate(dateFormat_Sm4, element.value);
    } catch (error) {
      date_sm_first = null;
    }
    return date_sm_first;
  }

  let sample4_sec_from_date = $("#man-data-id-7_fromDate").datepicker({
    defaultDate: "+1w",
    numberOfMonths: 1
  }).on("change", function () {
    sample4_sec_to_date.datepicker("option", "minDate", getDateSmp4Sec(this));
  });

  let sample4_sec_to_date = $("#man-data-id-7_toDate").datepicker({
    defaultDate: "+1w",
    numberOfMonths: 1
  }).on("change", function () {
    sample4_sec_from_date.datepicker("option", "maxDate", getDateSmp4Sec(this));
  });

  function getDateSmp4Sec(element) {
    let date_sm_sec;
    try {
      date_sm_sec = $.datepicker.parseDate(dateFormat_Sm4, element.value);
    } catch (error) {
      date_sm_sec = null;
    }
    return date_sm_sec;
  }

}

function removeElementData(_id) {
  $(`#man-data-sam4-input-data #${_id}`).remove();
}

function elementMoveData(_id, direc) {
  let div = $(`#man-data-sam4-input-data #${_id}`);
  if (direc == "up") {
    div.insertBefore(div.prev());
  } else if (direc == "down") {
    div.insertAfter(div.next());
  }
}

// Form by Text Editor Start
function findInputIdDS4(title) {
  let res = manDataSam4Data.filter(a => a.name == title);
  if (res.length) return res[0];
  else return false;
}
function formToWindowDS4(e) {
  let renHtml = "";

  let idFromTable = $(`#sample4-second tbody tr`);
  let len = idFromTable.length;
  for (let i = 0; i < len; i++) {
    let { id, name, type } = manDataSam4Data.filter(a => a.id == idFromTable[i].id)[0];
    if (type == "inputText" || type == "range" || type == "date") {
      let inpD = $(`#man-data-sam4-input-data div#${id} input[type=text]`);
      let len = inpD.length;
      for (let j = 0; j < len; j++) {
        let uni_id = len > 1 ? "_" + (j + 1) : "";
        renHtml += `<div class="form-text-design data-div">
          ${name}${uni_id} : ${inpD[j].value}
        </div>`;
      }
    } else if (type == "select") {
      let inpD = $(`#man-data-sam4-input-data div#${id} select`);
      let len = inpD.length;
      for (let j = 0; j < len; j++) {
        let uni_id = len > 1 ? "_" + (j + 1) : "";
        renHtml += `<div class="form-text-design data-div">
          ${name}${uni_id} : ${$(inpD[j]).find(":selected").text()}
        </div>`;
      }
    }
  }
  return renHtml;
}
function windowToFormDS4(divData, searchData) {
  let [title, no] = divData[0].trim().split("_");
  no = no != undefined ? no : 1;
  let { id, name, type } = searchData;
  if (id && divData.length == 2) {
    let comDiv = $(`#man-data-sam4-input-data div#${id}`);
    if (!(comDiv && comDiv.length)) {
      $(`tr#${id}`).dblclick();
      comDiv = $(`#man-data-sam4-input-data div#${id}`);
    }
    if (type == "range") {
      let rangeDiv = comDiv.find(`div.width-custom-range-70.d-flex`);
      let rangeDes =
        `<span class="min">0</span>
      <div class="range-wrapper-sample-4">
        <input class="range-example-input-1" type="text" min="0" max="100" value="${divData[1].trim()}" name="points" step="1" width="100" />
      </div>
      <span class="max">100</span>`;
      rangeDiv.html(rangeDes);
      $(".range-example-input-1").asRange({
        range: true,
        limit: false
      });
    } else if (type == "select") {
      let inpD = comDiv.find(`select`);
      inpD[no - 1].value = divData[1].trim();
    } else if (type == "inputText" || type == "date") {
      let inpD = $(`#man-data-sam4-input-data div#${id} input[type=text]`);
      inpD[no - 1].value = divData[1].trim();
    }
  }
}
// Form by Text Editor End
// Manage Data Opt 4 Sample 4 End

// Manage Data Opt 4 Sample 3 Start
// Form by Text Editor Start
let sectionDS3 = [
  {
    id: "fieldset_id1",
    name: "Section A",
    type: "input",
  },
  {
    id: "fieldset_id2",
    name: "Section B",
    type: "input",
  },
  {
    id: "fieldset_id3",
    name: "Section C",
    type: "option",
  },
  {
    id: "fieldset_id4",
    name: "Section D",
    type: "input",
  },
  {
    id: "fieldset_id5",
    name: "Section E",
    type: "input",
  },
  {
    id: "fieldset_id6",
    name: "Section F",
    type: "option",
  },
  {
    id: "fieldset_id7",
    name: "Section G",
    type: "option",
  },
  {
    id: "fieldset_id8",
    name: "Section H",
    type: "input",
  },
  {
    id: "fieldset_id9",
    name: "Section I",
    type: "input",
  },
  {
    id: "fieldset_id10",
    name: "Section J",
    type: "input",
  },
  {
    id: "fieldset_id11",
    name: "Section K",
    type: "input",
  },
];
function findInputIdDS3(title) {
  let res = sectionDS3.filter((a) => a.name == title);
  if (res.length) return res[0];
  else return false;
}
function windowToFormDS3(divData, searchData) {
  let { id, name, type } = searchData;
  if (divData.length > 2) {
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
  else if (divData.length == 2) {
    const sectionCheck = $(`fieldset#${id} legend input[type=checkbox]`);
    if (divData[1].trim() == "checked") {
      sectionCheck.prop("checked", true);
      $(`fieldset#${id}`).addClass("borderGreen");
    } else if (divData[1].trim() == "unchecked") {
      sectionCheck.prop("checked", false);
      $(`fieldset#${id}`).removeClass("borderGreen");
    }
  }
}
function formToWindowDS3() {
  let renHtml = "";
  // Section All
  sectionDS3.forEach(({ id, name, type }) => {
    const sectionCheck = $(`fieldset#${id} legend input[type=checkbox]`);
    if (sectionCheck.is(":checked")) {
      renHtml += `<div class="form-text-design data-div">
        ${name} : checked
      </div>`;

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
          if (selVal.trim() != "" && selVal.trim() != "Select Time" && selVal.trim() != "Select Option") {
            renHtml += `<div class="form-text-design data-div">
              ${name} : ${title.textContent} : ${selVal}
            </div>`;
          }
        }
      }
    }

  });

  return renHtml;
}
// Form by Text Editor End
// Manage Data Opt 4 Sample 3 End


// Manage Data Opt 4 Sample 3 Start
// Form by Text Editor Start
let listDS1 = [
  {
    id: "opt4a-list-modal",
    name: "LIST 1",
  },
  {
    id: "opt4b-list-modal",
    name: "LIST 2",
  },
  {
    id: "opt4c-list-modal",
    name: "LIST 3",
  },
  {
    id: "opt4d-list-modal",
    name: "LIST 4",
  },
];
function findInputIdDS1(title) {
  let searchArr = listDS1.concat(opt4Extra);
  let res = searchArr.filter((a) => a.name == title);
  if (res.length) return res[0];
  else return false;
}
function windowToFormDS1(divData, searchData) {
  let { id, name } = searchData;
  if (name == "IF" || name == "MINIMUM" || name == "EVERY") {
    $(`#${id}`).val(divData[1].trim());
  } else {
    let dataLi = divData.length > 3 ? findFileListOpt4(divData[2].trim(), name) : false;
    if (dataLi) {
      let { id: id2 } = dataLi;
      let liList = document.querySelector(`div#${id} div.sub-ul-optfourmodal-modallist ul li.${id2}`);
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
      let markItem = $(`div#${id} ul.left-list-box li.modaloptfourmodallist-item-${_id.split("-").splice(-1)[0]} div.green-check-box`);
      let abcd = name == "LIST 1" ? "a" : name == "LIST 2" ? "b" : name == "LIST 3" ? "c" : name == "LIST 4" ? "d" : "";
      let count = $(`div#${id} ul#optfourmodal${abcd}-submodal-div-list-1-${_id.split("-").splice(-1)[0]} li div.sublist-check-box.checkbox_show`).length;
      count += $(`div#${id} ul#optfourmodal${abcd}-submodal-div-list-2-${_id.split("-").splice(-1)[0]} li div.sublist-check-box.checkbox_show`).length;
      count += $(`div#${id} ul#optfourmodal${abcd}-submodal-div-list-3-${_id.split("-").splice(-1)[0]} li div.sublist-check-box.checkbox_show`).length;
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
function formToWindowDS1() {
  let renHtml = "";
  // yello head
  opt4Extra.forEach(({ id, name }) => {
    let valD = $(`#${id}`).val();
    if (valD != "") {
      renHtml += `<div class="form-text-design data-div">
        ${name}: ${valD}
      </div>`;
    }
  });

  listDS1.forEach(({ id, name }) => {
    let checkList = $(`div#${id} div.sub-ul-optfourmodal-modallist .submodal-list div.sublist-check-box.checkbox_show`);
    let len = checkList.length;
    for (let i = 0; i < len; i++) {
      let li = $(checkList[i]).parent();
      let listName = li.children("p")[0].textContent.trim();
      let className = li.attr("class");
      let dataLi = findFileListOpt4(className, name);
      if (dataLi) {
        renHtml += `<div class="form-text-design data-div">
          ${name}: ${dataLi.item}: ${listName}: checked
        </div>`;
      }
    }
  });

  return renHtml;
}
// Form by Text Editor End
// Manage Data Opt 4 Sample 3 End

// All in one(2) Start
function findInputIdAllDS(title) {
  const findId1 = findInputIdDS1(title);
  const findId2 = findInputIdDS2(title);
  const findId3 = findInputIdDS3(title);
  const findId4 = findInputIdDS4(title);

  if (findId1) {
    return {
      pageName: "sp1",
      searchData: findId1
    }
  }
  else if (findId2) {
    return {
      pageName: "sp2",
      searchData: findId2
    }
  }
  else if (findId3) {
    return {
      pageName: "sp3",
      searchData: findId3
    }
  }
  else if (findId4) {
    return {
      pageName: "sp4",
      searchData: findId4
    }
  }
  else return false;
}

function checkingAllDS(e) {
  $("#adder").remove();
  if (e.keyCode == 13) {
    let nd = getCaretPosition();
    $("#temp").attr("id", "");
    if (nd.nodeType != 3 && nd.getAttribute("id") == "ds3_text_editor") return false;
    if (
      nd.textContent.substr(0, nd.textContent.indexOf(": ")) != -1 &&
      nd.textContent != ""
    ) {
      let nd2 = nd.nodeType == 3 ? $(nd).parent()[0] : nd;
      let extra = getCaretPosition2(nd2);
      let starting = nd.textContent.substr(0, extra);
      let inpData = starting.split(":");
      if (
        starting != "" && !findInputIdAllDS(inpData[0].trim().split("_")[0].trim())
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
  setTimeout(autoCorrectAllDS, 100);
}

function autoCorrectAllDS() {
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
    const sugName = listDS1.concat(opt4Extra).concat(opt4LeftData).concat(opt4RightData).concat(sectionDS3).concat(manDataSam4Data);
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
  }
}

function pasteEventAllDS(e) {
  let caretPos = getCaretPosition();
  let editorPos = document.getElementById("ds1_text_editor");
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
      const { pageName } = findInputIdAllDS(inpData[0].trim().split("_")[0].trim());
      if (pageName == "sp1") {
        if (
          !findInputIdDS1(inpData[0].trim())
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
      else if (pageName == "sp2") {
        if (
          !findInputIdDS2(inpData[0].trim().split("_")[0].trim()) ||
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
      else if (pageName == "sp3") {
        if (
          !findInputIdDS3(inpData[0].trim())
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
      else if (pageName == "sp4") {
        if (
          !findInputIdDS4(inpData[0].trim().split("_")[0].trim()) ||
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

function formToWindowAllDS(e) {
  let tBody = $(e).parent().parent().parent()
    .children(".text-editor-popup-body")
    .find("#ds1_text_editor");
  const renHtml1 = formToWindowDS1();
  const renHtml2 = formToWindowDS2();
  const renHtml3 = formToWindowDS3();
  const renHtml4 = formToWindowDS4();
  tBody.html(renHtml1 + renHtml2 + renHtml3 + renHtml4);
}

function windowToFormAllDS(e) {
  let tRow = $(e).parent().parent().parent()
    .children(".text-editor-popup-body")
    .find("#ds1_text_editor div.form-text-design.data-div");
  let len = tRow.length;

  for (let i = 0; i < len; i++) {
    let divData = $(tRow[i])[0].innerText.split(":");
    const [title, no] = divData[0].trim().split("_");
    const { pageName, searchData } = findInputIdAllDS(title);
    if (pageName == "sp1") {
      windowToFormDS1(divData, searchData);
    }
    else if (pageName == "sp2") {
      windowToFormDS2(divData, searchData);
    }
    else if (pageName == "sp3") {
      windowToFormDS3(divData, searchData);
    }
    else if (pageName == "sp4") {
      windowToFormDS4(divData, searchData);
    }
  }
  $('#op4ListFormEditModal').modal('hide');
  $('#textEditorThankModal').modal('show');
}
// All in one(2) End

// Mutlistep Form Header Click (Manage Data Option 4)
let spanHeaderTarget = $("#create_new_option_four .mutistep-form-area .section-name span");
for (let i = 0; i < spanHeaderTarget.length; i++) {
  spanHeaderTarget[i].addEventListener("click", function (event) {
    spanClassName = spanHeaderTarget[i].className;

    if (spanClassName == "md-select1") {
      $("#op4FormStep1").css("display", "block");
      $("#op4FormStep2").css("display", "none");
      $("#op4FormStep3").css("display", "none");
      $("#op4FormStep4").css("display", "none");
    }
    else if (spanClassName == "md-select2") {
      $("#op4FormStep1").css("display", "none");
      $("#op4FormStep2").css("display", "block");
      $("#op4FormStep3").css("display", "none");
      $("#op4FormStep4").css("display", "none");
    }
    else if (spanClassName == "md-select3") {
      $("#op4FormStep1").css("display", "none");
      $("#op4FormStep2").css("display", "none");
      $("#op4FormStep3").css("display", "block");
      $("#op4FormStep4").css("display", "none");
      $('#saveStartTarget-op4').addClass('save-start-class-hide-show-op4');
    }
    else {
      $("#op4FormStep1").css("display", "none");
      $("#op4FormStep2").css("display", "none");
      $("#op4FormStep3").css("display", "none");
      $("#op4FormStep4").css("display", "block");
      $('#saveStartTarget-op4').removeClass('save-start-class-hide-show-op4');
    }

  });
}


// Manage Data Option-4 Circle Click Handling
$('#create_new_option_four .form-box .progressBar li .click-circle').on('click', function (e) {
  let circleTarget = e.target.className.trim();

  if (circleTarget == "click-circle s1") {
    $("#op4FormStep1").css("display", "block");
    $("#op4FormStep2").css("display", "none");
    $("#op4FormStep3").css("display", "none");
    $("#op4FormStep4").css("display", "none");
  }
  else if (circleTarget == "click-circle s2") {
    $("#op4FormStep1").css("display", "none");
    $("#op4FormStep2").css("display", "block");
    $("#op4FormStep3").css("display", "none");
    $("#op4FormStep4").css("display", "none");
  }
  else if (circleTarget == "click-circle s3") {
    $("#op4FormStep1").css("display", "none");
    $("#op4FormStep2").css("display", "none");
    $("#op4FormStep3").css("display", "block");
    $("#op4FormStep4").css("display", "none");
    $('#saveStartTarget-op4').addClass('save-start-class-hide-show-op4');
  }
  else {
    $("#op4FormStep1").css("display", "none");
    $("#op4FormStep2").css("display", "none");
    $("#op4FormStep3").css("display", "none");
    $("#op4FormStep4").css("display", "block");
    $('#saveStartTarget-op4').removeClass('save-start-class-hide-show-op4');
  }
});


// Manage Data Option4 Sample3 (any item click inside automatically "Check")
let op4FieldSetDataForms = $("#op4FormStep3 .checkbox-container-inner fieldset .data-form");
for (let i = 0; i < op4FieldSetDataForms.length; i++) {
  op4FieldSetDataForms[i].addEventListener("click", function (event) {
    fieldSetId = op4FieldSetDataForms[i].parentElement.id;
    let fieldSection = $(`fieldset#${fieldSetId} legend input[type=checkbox]`);
    fieldSection.prop("checked", true);
    $(`fieldset#${fieldSetId}`).addClass("borderGreen");
  });
}

function saveDraftCheckEmpty(e) {
  if (e.value !== "") {
    $(e).parent().removeClass("border-red");
    $(e).parent().parent().find(".save-draft-wrapper button").prop("disabled",false);
    $(e).parent().parent().find(".save-start-wrapper button").prop("disabled",false);
    $(e).parent().parent().parent().children(".error-message").remove();
  } else {
    $(e).parent().addClass("border-red");
    $(e).parent().parent().find(".save-draft-wrapper button").prop("disabled",true);
    $(e).parent().parent().find(".save-start-wrapper button").prop("disabled",true);
    let errorMessage = `<div class="error-message">
      <p>A value must be entered</p>
    </div>`;
    let errPos = $(e).parent().parent().parent();
    if (!errPos.children("div.error-message").length) {
      errPos.append(errorMessage);
    }
  }
}



// Pen Icon, Info Icon Controlling For All LISTS POPUP Starts

let currentLevelItem_LI_Class = '';
let newLevelItemName = '';

function confirmListName(confThis){
  currentLevelItem_LI_Class = confThis.parentElement.className;
  let listCurrentName = confThis.parentElement.firstElementChild.textContent;
  document.querySelector(`#remaneAllLevelItem .plus-button-popup-body-content input`).value = listCurrentName;
  $('#remaneAllLevelItem').modal('show');
}

// $('#remaneAllLevelItem').on('show.bs.modal', function (e) {
// 	let opt1ListDataStyles = window.getComputedStyle(document.querySelector('#myopt1listData'));
// 	if (opt1ListDataStyles.display == "block") {
// 		$('body').addClass("modal-list-open");
// 	}
// })

function renamingLevelItem(itemThis){
  newLevelItemName = document.querySelector(`#remaneAllLevelItem .plus-button-popup-body-content input`).value;

  let initState = $(itemThis).html();
	$(itemThis).html('<i class="fa fa-spinner fa-spin"></i> Done');
	$(itemThis).addClass('disabled');
	let $this = $(itemThis);
	setTimeout(function() {
    $this.removeClass('disabled');
		$this.html(initState);
    $('#remaneAllLevelItem').modal('hide');
    $('#thankAfterAllListRename').modal('show');
  }, 3000);
}

$('#thankAfterAllListRename').on('show.bs.modal', function (e) {
  $('body').addClass("modal-force-generate-btn");
}).on('hide.bs.modal', function (e) {
	$('body').removeClass("modal-force-generate-btn");
  $(`.${currentLevelItem_LI_Class} .sublist-info-box`).attr("tooltip", `${newLevelItemName}`);
  document.querySelector(`.${currentLevelItem_LI_Class} p`).textContent = newLevelItemName;
});

// $('.submodal-list li .sublist-info-box[data-toggle="tooltip"]').tooltip(
//   {
//     container: 'body',
//     trigger: 'hover',
//     placement: 'bottom'
//   }
// );
// $('.submodal-list li .sublist-info-box').tooltip(
//   {
//     container: 'body',
//     trigger: 'manual',
//     placement: 'bottom'
//   }
// );
// .on('click', function () {
//   let listCurrentName = this.parentElement.firstElementChild.textContent;
//   $(this).attr('data-original-title', `${listCurrentName}`);
//   $('.submodal-list li .sublist-info-box[data-toggle="tooltip"]').tooltip('hide');
//   $(this).tooltip('show');
// });
// function listTooltipClick(infoThis){
//   let currentListClassName = infoThis.parentElement.className;
//   $(`li.${currentListClassName} .sublist-info-box`).tooltip(
//       {
//         container: 'body',
//         trigger: 'manual',
//         placement: 'bottom'
//       }
//     );
//   let listCurrentName = infoThis.parentElement.firstElementChild.textContent;
//   $(infoThis).attr('data-original-title', `${listCurrentName}`);
//   $('.submodal-list li .sublist-info-box[data-toggle="tooltip"]').tooltip('hide');
//   $(infoThis).tooltip('show');
// }

// function listTooltipClickOp2(op2InfoThis){
//   let currentListClassName = op2InfoThis.parentElement.className;
//   $(`li.${currentListClassName} .sublist-info-box`).tooltip(
//       {
//         container: 'body',
//         trigger: 'manual',
//         placement: 'bottom'
//       }
//     );
//   let listCurrentName = op2InfoThis.parentElement.firstElementChild.textContent;
//   $(op2InfoThis).attr('data-original-title', `${listCurrentName}`);
//   $('.sub-list li .sublist-info-box[data-toggle="tooltip"]').tooltip('hide');
//   $(op2InfoThis).tooltip('show');
// }

// function listTooltipClickMnRes(mnResInfoThis){
//   let currentListClassName = mnResInfoThis.parentElement.className;
//   $(`li.${currentListClassName} .sublist-info-box`).tooltip(
//       {
//         container: 'body',
//         trigger: 'manual',
//         placement: 'bottom'
//       }
//     );
//   let listCurrentName = mnResInfoThis.parentElement.firstElementChild.textContent;
//   $(mnResInfoThis).attr('data-original-title', `${listCurrentName}`);
//   $('.right-list-404 li .sublist-info-box[data-toggle="tooltip"]').tooltip('hide');
//   $(mnResInfoThis).tooltip('show');
// }

// $(document).mouseup(function(e) {
//     var infoTooltipsOfLists = $('.submodal-list li .sublist-info-box[data-toggle="tooltip"]');
//     if (!infoTooltipsOfLists.is(e.target) && infoTooltipsOfLists.has(e.target).length === 0) {
//       infoTooltipsOfLists.tooltip('hide');
//     }

//     var infoTooltipsOfOp2Lists = $('.sub-list li .sublist-info-box[data-toggle="tooltip"]');
//     if (!infoTooltipsOfOp2Lists.is(e.target) && infoTooltipsOfOp2Lists.has(e.target).length === 0) {
//       infoTooltipsOfOp2Lists.tooltip('hide');
//     }

//     var infoTooltipsOfMnResLists = $('.right-list-404 li .sublist-info-box[data-toggle="tooltip"]');
//     if (!infoTooltipsOfMnResLists.is(e.target) && infoTooltipsOfMnResLists.has(e.target).length === 0) {
//       infoTooltipsOfMnResLists.tooltip('hide');
//     }
// });

// Pen Icon, Info Icon Controlling For All LISTS POPUP Ends