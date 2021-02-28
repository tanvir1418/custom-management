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
  
function listRenderOpt4(id, name, addNewRow) {
  let ele = `<tr ondblclick="${addNewRow}" class="cursor-pointer" id="${id}">
    <td colspan="2">${name}</td>
    <td><i class="fas fa-question-circle"></i></td>
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
  let title = "", dataType = "", manDataSwapSeq = "", manDataResetValue="";
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
  let res = opt4LeftData.filter((a) => a.name == title).map((b) => b.id);
  if (res.length) return res[0];
  else return false;
}

function formToWindowDS2(e) {
  let tBody = $(e).parent().parent().parent()
    .children(".text-editor-popup-body")
    .find("#ds2_text_editor");
  let renHtml = "";
  manDataSeqListL.forEach((pid) => {
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
  tBody.html(renHtml);
}

function windowToFormDS2(e) {
  let tRow = $(e).parent().parent().parent()
    .children(".text-editor-popup-body")
    .find("#ds2_text_editor div.form-text-design.data-div");
  let len = tRow.length;
  for (let i = 0; i < len; i++) {
    let divData = $(tRow[i])[0].innerText.split(":");
    let [title, no] = divData[0].trim().split("_");
    let pid = findInputIdDS2(title);
    if (pid && divData.length == 3) {
      let checkbox = $(`#${pid} input[type='checkbox'].toggle__input`)[0];
      if (checkbox.checked == false) checkbox.click();

      if (divData[1].trim().toUpperCase() == "SET") {
        $(`#${pid} .add-set`).val(divData[2].trim().toLowerCase());
      } else if (divData[1].trim().toUpperCase() == "SEQUENCE") {
        let seqVal = 0;
        for (let k = 1; k <= opt4LeftData.length; k++) {
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
      }

      if (inpSel.length > 0) {
        inpSel[no - 1].value = divData[1].trim();
      }
    }
  }
}

function checkingDS2(e) {
  $("#adder").remove(); // adder contains our auto correct select box
  // if key is enter key
  let nd = getCaretPosition();
  let nd2 = nd.nodeType == 3 ? $(nd).parent()[0] : nd;
  if (e.keyCode == 13) {
    // same algorithm as we see in updateActualForm() function
    let nd = getCaretPosition();
    $("#temp").attr("id", "");
    if (nd.nodeType != 3 && nd.getAttribute("id") == "ds2_text_editor") return false;
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
        (!findInputIdDS2(inpData[0].trim().split("_")[0].trim()) ||
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
            </div>`
          );
          setCaret($("#temp")[0]);
        }
        document.getElementById("temp").removeAttribute("id");
      }
    }
    return false;
  }
  // this will add autocorrect box
  setTimeout(autoCorrectDS2, 100);
}

function autoCorrectDS2() {
  let pos = getCaretPosition();
  if ($(pos).find("#adder").length == 1) $("#adder").remove();
  while (document.getElementById("temp")) {
    document.getElementById("temp").removeAttribute("id");
  }
  if (pos.textContent.indexOf(":") == -1) x = pos.textContent;
  else x = pos.textContent;
  let editor = document.getElementById("text_editor_p");
  $(pos).replaceWith(
    `<div id="temp">${pos.textContent}</div>
    <div id="adder"></div>`
  );

  let m = "";
  let first = 1;
  if (x.indexOf(":") == -1) {
    $("#adder").addClass("set-name");
    opt4LeftData.forEach(({ name }) => {
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
    $("#adder").addClass("set-sug");
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
    $("#adder").addClass("set-sug");
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
    document.getElementById("adder").innerHTML = y;
    document.getElementById("adder").style.display = "block";
    $("#adder select").focus();
  } else {
    $("#adder").remove();
    setEndOfContenteditable(document.getElementById("temp"));
    document.getElementById("temp").removeAttribute("id");
  }
}

function pasteEventDS2(e) {
  let editor = document.getElementById("ds2_text_editor");
  let clipboardData = e.clipboardData || window.clipboardData;
  let pD = clipboardData.getData("Text").split("\n");
  for (let i = 0; i < pD.length; i++) {
    let nbe = pD[i];
    let inpData = nbe.split(":");
    if (nbe.substr(0, nbe.indexOf(": ")) != -1 && nbe != "") {
      let x;
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
        x = document.createElement("div");
        x.setAttribute("class", "form-text-design-invalid data-div");
        x.textContent = nbe;
      } else {
        x = document.createElement("div");
        x.setAttribute("class", "form-text-design data-div");
        x.textContent = nbe;
      }
      editor.append(x);
    }
  }
  removeExtraLines(editor);
  editor.append(document.createElement("br"));
  setEndOfContenteditable(editor);
  return false;
}
// Form by text editor End
// Manage Data Opt 4 Sample 2 End

// Manage Data Opt 4 Sample 4 Start
let manDataSam4Data = [
  {
    id: "man-data-id-1",
    name: "Option 1 - Text abc",
    dataType: "inputText",
  },
  {
    id: "man-data-id-2",
    name: "Option 2 - Text abd",
    dataType: "range",
  },
  {
    id: "man-data-id-3",
    name: "Option 3 - Text abef",
    dataType: "date",
  },
  {
    id: "man-data-id-4",
    name: "Option 4 - Text abc12",
    dataType: "select",
  },
  {
    id: "man-data-id-5",
    name: "Option 5 - Text abc12",
    dataType: "inputText",
  },
  {
    id: "man-data-id-6",
    name: "Option 6 - Text abd56",
    dataType: "range",
  },
  {
    id: "man-data-id-7",
    name: "Option 7 - Text abef67",
    dataType: "date",
  },
  {
    id: "man-data-id-8",
    name: "Option 8 - Text abc12fd",
    dataType: "select",
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
  let { name, dataType } = manDataSam4Data.filter(a => a.id == _id)[0];
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
            <input class="range-example-input-1" type="text" min="0" max="100" value="10,40" name="points" step="1" width="100" />
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
          <div class="input-section-sample4 right-side-input">
            <input class="date-pick-style-sample4 datepicker_op4" type="text"/>
            <i class="far fa-calendar-alt icon-sample4"></i>
          </div>
        </div>
        <div class="width-input-group-35">
          <div class="input-section-sample4 left-side-input">
            <input class="date-pick-style-sample4 datepicker_op4" type="text"/>
            <i class="far fa-calendar-alt icon-sample4"></i>
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
  $(function () {
    $(".datepicker_op4").datepicker();
    $(".datepicker_op4").datepicker("option", "dateFormat", "DD - MM d, yy");
  });
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
  let tBody = $(e).parent().parent().parent()
    .children(".text-editor-popup-body")
    .find("#ds4_text_editor");
  let renHtml = "";

  let idFromTable = $(`#sample4-second tbody tr`);
  let len = idFromTable.length;
  for (let i = 0; i < len; i++) {
    let { id, name, dataType } = manDataSam4Data.filter(a => a.id == idFromTable[i].id)[0];
    let dataPtrn = name;
    if (dataType == "inputText") {
      let inpD = $(`#man-data-sam4-input-data div#${id} input[type=text]`);
      for (let j = 0; j < inpD.length; j++) dataPtrn += ` : ${inpD[j].value}`;
    }
    if (dataType == "range") {
      let inpD = $(`#man-data-sam4-input-data div#${id} input[type=text]`);
      for (let j = 0; j < inpD.length; j++) dataPtrn += ` : ${inpD[j].value}`;
    }
    if (dataType == "date") {
      let inpD = $(`#man-data-sam4-input-data div#${id} input[type=text]`);
      for (let j = 0; j < inpD.length; j++) dataPtrn += ` : ${inpD[j].value}`;
    }
    if (dataType == "select") {
      let inpD = $(`#man-data-sam4-input-data div#${id} select`);
      for (let j = 0; j < inpD.length; j++) dataPtrn += ` : ${$(inpD[j]).find(":selected").text()}`;
    }
    renHtml += `<div class="form-text-design data-div">
      ${dataPtrn}
    </div>`;
  }
  tBody.html(renHtml);
}

function windowToFormDS4(e) {
  let tRow = $(e).parent().parent().parent()
    .children(".text-editor-popup-body")
    .find("#ds4_text_editor div.form-text-design.data-div");
  let len = tRow.length;
  for (let i = 0; i < len; i++) {
    let divData = $(tRow[i])[0].innerText.split(":");
    let { id, dataType } = findInputIdDS4(divData[0].trim());
    if (id && divData.length == 3) {
      if (dataType == "select") {
        let inpD = $(`#man-data-sam4-input-data div#${id} select`);
        for (let j = 0; j < inpD.length; j++) inpD[j].value = divData[j + 1].trim();
      } else if (dataType != "select") {
        let inpD = $(`#man-data-sam4-input-data div#${id} input[type=text]`);
        for (let j = 0; j < inpD.length; j++) inpD[j].value = divData[j + 1].trim();
      }
    } else if (id && divData.length == 2) {
      if (dataType == "range") {
        let rangeDiv = $(`#man-data-sam4-input-data div#${id} div.width-custom-range-70.d-flex`);
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
      }
    }
  }
}

function checkingDS4(e) {
  $("#adder").remove();
  // let nd = getCaretPosition();
  // let nd2 = nd.nodeType == 3 ? $(nd).parent()[0] : nd;
  if (e.keyCode == 13) {
    let nd = getCaretPosition();
    $("#temp").attr("id", "");
    if (nd.nodeType != 3 && nd.getAttribute("id") == "ds4_text_editor") return false;
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
        (!findInputIdDS4(inpData[0].trim().split("_")[0].trim()) ||
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
            </div>`
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

function autoCorrectDS4() {
  let pos = getCaretPosition();
  if ($(pos).find("#adder").length == 1) $("#adder").remove();
  while (document.getElementById("temp")) {
    document.getElementById("temp").removeAttribute("id");
  }
  if (pos.textContent.indexOf(":") == -1) x = pos.textContent;
  else x = pos.textContent;
  let editor = document.getElementById("text_editor_p");
  $(pos).replaceWith(
    `<div id="temp">${pos.textContent}</div>
    <div id="adder"></div>`
  );

  let m = "";
  let first = 1;
  if (x.indexOf(":") == -1) {
    $("#adder").addClass("set-name");
    manDataSam4Data.forEach(({ name }) => {
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
    document.getElementById("adder").innerHTML = y;
    document.getElementById("adder").style.display = "block";
    $("#adder select").focus();
  } else {
    $("#adder").remove();
    setEndOfContenteditable(document.getElementById("temp"));
    document.getElementById("temp").removeAttribute("id");
  }
}

function pasteEventDS4(e) {
  let editor = document.getElementById("ds4_text_editor");
  let clipboardData = e.clipboardData || window.clipboardData;
  let pD = clipboardData.getData("Text").split("\n");
  for (let i = 0; i < pD.length; i++) {
    let nbe = pD[i];
    let inpData = nbe.split(":");
    if (nbe.substr(0, nbe.indexOf(": ")) != -1 && nbe != "") {
      let x;
      if (
        !findInputIdDS4(inpData[0].trim().split("_")[0].trim()) ||
        (inpData.length == 3 && (inpData[2].trim() == "\r" || inpData[2].trim() == "")) ||
        (inpData.length == 2 && (inpData[1].trim() == "\r" || inpData[1].trim() == ""))
      ) {
        x = document.createElement("div");
        x.setAttribute("class", "form-text-design-invalid data-div");
        x.textContent = nbe;
      } else {
        x = document.createElement("div");
        x.setAttribute("class", "form-text-design data-div");
        x.textContent = nbe;
      }
      editor.append(x);
    }
  }
  removeExtraLines(editor);
  editor.append(document.createElement("br"));
  setEndOfContenteditable(editor);
  return false;
}
// Form by Text Editor End
// Manage Data Opt 4 Sample 4 End

// Manage Data Opt 4 Sample 4 Start
// Form by Text Editor Start
function findInputIdDS3(title) {
  let res = section.filter(a => a == title);
  if (res.length) return res[0];
  else return false;
}
function checkingDS3(e) {
  $("#adder").remove();
  // let nd = getCaretPosition();
  // let nd2 = nd.nodeType == 3 ? $(nd).parent()[0] : nd;
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
            </div>`
          );
          setCaret($("#temp")[0]);
        }
        document.getElementById("temp").removeAttribute("id");
      }
    }
    return false;
  }
  // this will add autocorrect box
  setTimeout(autoCorrectDS3, 100);
}
function autoCorrectDS3() {
  let pos = getCaretPosition();
  if ($(pos).find("#adder").length == 1) $("#adder").remove();
  while (document.getElementById("temp")) {
    document.getElementById("temp").removeAttribute("id");
  }
  if (pos.textContent.indexOf(":") == -1) x = pos.textContent;
  else x = pos.textContent;
  let editor = document.getElementById("text_editor_p");
  $(pos).replaceWith(
    `<div id="temp">${pos.textContent}</div>
    <div id="adder"></div>`
  );
  let m = "";
  let first = 1;
  if (x.indexOf(":") == -1) {
    $("#adder").addClass("set-name");
    section.forEach(name => {
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
    document.getElementById("adder").innerHTML = y;
    document.getElementById("adder").style.display = "block";
    $("#adder select").focus();
  } else {
    $("#adder").remove();
    setEndOfContenteditable(document.getElementById("temp"));
    document.getElementById("temp").removeAttribute("id");
  }
}
function pasteEventDS3(e) {
  let editor = document.getElementById("ds3_text_editor");
  let clipboardData = e.clipboardData || window.clipboardData;
  let pD = clipboardData.getData("Text").split("\n");
  for (let i = 0; i < pD.length; i++) {
    let nbe = pD[i];
    let inpData = nbe.split(":");
    if (nbe.substr(0, nbe.indexOf(": ")) != -1 && nbe != "") {
      let x;
      if (
        !findInputIdMS3(inpData[0].trim())
      ) {
        x = document.createElement("div");
        x.setAttribute("class", "form-text-design-invalid data-div");
        x.textContent = nbe;
      } else {
        x = document.createElement("div");
        x.setAttribute("class", "form-text-design data-div");
        x.textContent = nbe;
      }
      editor.append(x);
    }
  }
  removeExtraLines(editor);
  editor.append(document.createElement("br"));
  setEndOfContenteditable(editor);
  return false;
}
function windowToFormDS3(e) {
  let tRow = $(e).parent().parent().parent()
    .children(".text-editor-popup-body")
    .find("#ds3_text_editor div.form-text-design.data-div");
  let len = tRow.length;
  for (let i = 0; i < len; i++) {
    let divData = $(tRow[i])[0].innerText.split(":");
    if (divData[0].trim() == "sectionA") {
      let inp = $("fieldset#fieldset_id1 .data-form input[type=text]");
      for (let i = 1; i < divData.length; i++) {
        inp[i - 1].value = divData[i].trim();
      }
    } else if (divData[0].trim() == "sectionB") {
      let inp = $("fieldset#fieldset_id2 .custome-select select");
      for (let i = 1, j = 0; i < divData.length, j < inp.length; i++, j++) {
        $(inp[j]).val(divData[i++].trim() + ":" + divData[i].trim());
      }
    } else if (divData[0].trim() == "sectionC") {
      let inp = $("fieldset#fieldset_id3 .custome-select select");
      for (let i = 1, j = 0; i < divData.length, j < inp.length; i++, j++) {
        $(inp[j]).val(divData[i++].trim() + ":" + divData[i].trim());
      }
    } else if (divData[0].trim() == "sectionD") {
      let inp = $("fieldset#fieldset_id4 .data-form input[type=text]");
      for (let i = 1; i < divData.length; i++) {
        inp[i - 1].value = divData[i].trim();
      }
    } else if (divData[0].trim() == "sectionE") {
      let inp = $("fieldset#fieldset_id5 .data-form input[type=text]");
      for (let i = 1; i < divData.length; i++) {
        inp[i - 1].value = divData[i].trim();
      }
    } else if (divData[0].trim() == "sectionF") {
      let inp = $("fieldset#fieldset_id6 .custome-select select");
      for (let i = 1, j = 0; i < divData.length, j < inp.length; i++, j++) {
        $(inp[j]).val(divData[i].trim());
      }
    } else if (divData[0].trim() == "sectionG") {
      let inp = $("fieldset#fieldset_id7 .custome-select select");
      for (let i = 1; i < divData.length; i++) {
        $(inp[i - 1]).val(divData[i].trim());
      }
    } else if (divData[0].trim() == "sectionH") {
      let inp = $("fieldset#fieldset_id8 .data-form input[type=text]");
      for (let i = 1; i < divData.length; i++) {
        inp[i - 1].value = divData[i].trim();
      }
    } else if (divData[0].trim() == "sectionI") {
      let inp = $("fieldset#fieldset_id9 .data-form input[type=text]");
      for (let i = 1; i < divData.length; i++) {
        inp[i - 1].value = divData[i].trim();
      }
    }
  }
}
function formToWindowDS3(e) {
  let tBody = $(e).parent().parent().parent()
    .children(".text-editor-popup-body")
    .find("#ds3_text_editor");
  let renHtml = "";
  let renData = "";
  // section A
  let sectionA = $("fieldset#fieldset_id1");
  let inpA = sectionA.find(".data-form input[type=text]");
  renData = "sectionA";
  for (let i = 0; i < inpA.length; i++) {
    renData += " : " + inpA[i].value;
  }
  if (renData.split(":")[1].trim() != "") {
    renHtml += `<div class="form-text-design data-div">
      ${renData}
    </div>`;
  }
  // section B
  let sectionB = $("fieldset#fieldset_id2 .custome-select select");
  renData = "sectionB";
  for (let i = 0; i < sectionB.length; i++) {
    renData += " : " + $(sectionB[i]).find(":selected").text();
  }
  if (renData.split(":")[1].trim() != "") {
    renHtml += `<div class="form-text-design data-div">
      ${renData}
    </div>`;
  }
  // section C
  let sectionC = $("fieldset#fieldset_id3 .custome-select select");
  renData = "sectionC";
  for (let i = 0; i < sectionC.length; i++) {
    renData += " : " + $(sectionC[i]).find(":selected").text();
  }
  if (renData.split(":")[1].trim() != "") {
    renHtml += `<div class="form-text-design data-div">
      ${renData}
    </div>`;
  }
  // section D
  let sectionD = $("fieldset#fieldset_id4");
  let inpD = sectionD.find(".data-form input[type=text]");
  renData = "sectionD";
  for (let i = 0; i < inpD.length; i++) {
    renData += " : " + inpD[i].value;
  }
  if (renData.split(":")[1].trim() != "") {
    renHtml += `<div class="form-text-design data-div">
      ${renData}
    </div>`;
  }
  // section E
  let sectionE = $("fieldset#fieldset_id5");
  let inpE = sectionE.find(".data-form input[type=text]");
  renData = "sectionE";
  for (let i = 0; i < inpE.length; i++) {
    renData += " : " + inpE[i].value;
  }
  if (renData.split(":")[1].trim() != "") {
    renHtml += `<div class="form-text-design data-div">
      ${renData}
    </div>`;
  }
  // section F
  let sectionF = $("fieldset#fieldset_id6 .custome-select select");
  renData = "sectionF";
  for (let i = 0; i < sectionF.length; i++) {
    renData += " : " + $(sectionF[i]).find(":selected").text();
  }
  if (renData.split(":")[1].trim() != "") {
    renHtml += `<div class="form-text-design data-div">
      ${renData}
    </div>`;
  }
  // section G
  let sectionG = $("fieldset#fieldset_id7 .custome-select select");
  renData = "sectionG";
  for (let i = 0; i < sectionG.length; i++) {
    renData += " : " + $(sectionG[i]).find(":selected").text();
  }
  if (renData.split(":")[1].trim() != "") {
    renHtml += `<div class="form-text-design data-div">
      ${renData}
    </div>`;
  }
  // section H
  let sectionH = $("fieldset#fieldset_id8");
  let inpH = sectionH.find(".data-form input[type=text]");
  renData = "sectionH";
  for (let i = 0; i < inpH.length; i++) {
    renData += " : " + inpH[i].value;
  }
  if (renData.split(":")[1].trim() != "") {
    renHtml += `<div class="form-text-design data-div">
      ${renData}
    </div>`;
  }
  // section I
  let sectionI = $("fieldset#fieldset_id9");
  let inpI = sectionI.find(".data-form input[type=text]");
  renData = "sectionI";
  for (let i = 0; i < inpI.length; i++) {
    renData += " : " + inpI[i].value;
  }
  if (renData.split(":")[1].trim() != "") {
    renHtml += `<div class="form-text-design data-div">
      ${renData}
    </div>`;
  }

  tBody.html(renHtml);
}
// Form by Text Editor End
// Manage Data Opt 4 Sample 4 End