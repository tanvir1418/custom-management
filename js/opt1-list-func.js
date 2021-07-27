var seqList = []; // this is for storing sequence of rows (sequence list work)
var seqListR = []; // this is for storing sequence of rows (sequence list work)
let newRowsList = []; // if some rows removed then that row number is added here as an empty slot
var clicked = false;

function resetValue(e) {
  let pid = $(e).parent().parent().parent().parent().attr("id");
  if ($(`#${pid} #sequence`).length == 0) return true;
  if (e.checked == false) {
    $(`#${pid} input, #${pid} select`).val("");
    seqList = seqList.filter(function (id) {
      $(`#${id} #sequence`).children(`option:last-child`).remove();
      return pid != id;
    });
    seqList.forEach(function (val, index) {
      $(`#${val} #sequence`).val(index + 1);
    });
    $(`#${pid} #sequence`).html(`<option value='0'>SEQUENCE</option>`);
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
    let inW = inWords(seqList.length + 1).toUpperCase();
    seqList.forEach(function (val, index) {
      $(`#${val} #sequence`).append(
        `<option value="${(seqList.length + 1)}">${inW}</option>`
      );
      $(`#${val} #sequence`).val(index + 1);
    });
    seqList.push(pid);
    if (seqList.length == 1) {
      $(`#${pid} #sequence`).html(`<option value='1'>FIRST</option>`);
    }
    else {
      $(`#${pid} #sequence`).html($(`#${seqList[0]} #sequence`).html());
    }
    $(`#${pid} #sequence`).val(seqList.length);
  }
}

function resetValueR(e) {
  let pid = $(e).parent().parent().parent().parent().attr("id");
  if ($(`#${pid} #sequence`).length == 0) return true;
  if (e.checked == false) {
    $(`#${pid} input, #${pid} select`).val("");
    seqListR = seqListR.filter(function (id) {
      $(`#${id} #sequence`).children(`option:last-child`).remove();
      return pid != id;
    });
    seqListR.forEach(function (val, index) {
      $(`#${val} #sequence`).val(index + 1);
    });
    $(`#${pid} #sequence`).html(`<option value='0'>SEQUENCE</option>`);
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
    let inW = inWords(seqListR.length + 1).toUpperCase();
    seqListR.forEach(function (val, index) {
      $(`#${val} #sequence`).append(
        `<option value="${(seqListR.length + 1)}">${inW}</option>`
      );
      $(`#${val} #sequence`).val(index + 1);
    });
    seqListR.push(pid);
    if (seqListR.length == 1) {
      $(`#${pid} #sequence`).html(`<option value='1'>FIRST</option>`);
    }
    else {
      $(`#${pid} #sequence`).html($(`#${seqListR[0]} #sequence`).html());
    }
    $(`#${pid} #sequence`).val(seqListR.length);
  }
}

function swapSeq(e) {
  let pid = $(e).parent().parent().parent().attr("id");
  let val = $(e).val();
  if (parseInt(val) > seqList.length) val = (seqList.length + 1).toString();
  if (val == "0")
    seqList = seqList.filter(function (id) {
      return pid != id;
    });
  else {
    let index = seqList.indexOf(pid);
    if (index == -1) {
      seqList[val - 1] = pid;
    } else if (seqList.length >= val) {
      seqList[index] = seqList[val - 1];
      seqList[val - 1] = pid;
    }
    $(`#${seqList[index]} #sequence`).val(index + 1);
    $(`#${pid} #sequence`).val(val);
  }
}

function swapSeqR(e) {
  let pid = $(e).parent().parent().parent().attr("id");
  let val = $(e).val();
  if (parseInt(val) > seqListR.length) val = (seqListR.length + 1).toString();
  if (val == "0")
    seqListR = seqListR.filter(function (id) {
      return pid != id;
    });
  else {
    let index = seqListR.indexOf(pid);
    if (index == -1) {
      seqListR[val - 1] = pid;
    } else if (seqListR.length >= val) {
      seqListR[index] = seqListR[val - 1];
      seqListR[val - 1] = pid;
    }
    $(`#${seqListR[index]} #sequence`).val(index + 1);
    $(`#${pid} #sequence`).val(val);
  }
}

function inWords(num) {
  let a = [
    "",
    "one ",
    "two ",
    "three ",
    "four ",
    "five ",
    "six ",
    "seven ",
    "eight ",
    "nine ",
    "ten ",
    "eleven ",
    "twelve ",
    "thirteen ",
    "fourteen ",
    "fifteen ",
    "sixteen ",
    "seventeen ",
    "eighteen ",
    "nineteen ",
  ];
  let c = [
    "",
    "first",
    "second",
    "third",
    "forth",
    "fifth",
    "sixth",
    "seventh",
    "eighth",
    "nineth",
    "tenth",
    "eleventh",
    "twelveth",
    "thirteenth",
    "fourteenth",
    "fifteenth",
    "sixteenth",
    "seventeenth",
    "eighteenth",
    "nineteenth",
  ];
  let b = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  if ((num = num.toString()).length > 9) return "overflow";
  let n = ("000000000" + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
  if (!n) return;
  let str = "";
  str +=
    n[1] != 0
      ? (a[Number(n[1])] || b[n[1][0]] + " " + a[n[1][1]]) + "crore "
      : "";
  str +=
    n[2] != 0
      ? (a[Number(n[2])] || b[n[2][0]] + " " + a[n[2][1]]) + "lakh "
      : "";
  str +=
    n[3] != 0
      ? (a[Number(n[3])] || b[n[3][0]] + " " + a[n[3][1]]) + "thousand "
      : "";
  str +=
    n[4] != 0
      ? (a[Number(n[4])] || b[n[4][0]] + " " + a[n[4][1]]) + "hundred "
      : "";
  str +=
    n[5] != 0
      ? (str != "" ? "and " : "") +
      (c[Number(n[5])] || b[n[5][0]] + " " + c[n[5][1]])
      : "";

  return str;
}

function onFocus(e) {
  let pid = $(e).parent().parent().parent().attr("id");
  let checkbox = $(`#${pid} input[type='checkbox'].toggle__input`)[0];
  if (checkbox.checked == false) {
    checkbox.click();
  }
}

function checkEmpty(e) {
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

let rightSideData = [
  {
    "id": "lsa1-1",
    "name": "Sub text lsa1-1",
    "count": 1,
  },
  {
    "id": "lsa1-2",
    "name": "Sub text lsa1-2",
    "count": 2,
  },
  {
    "id": "lsa2-1",
    "name": "Sub text lsa2-1",
    "count": 1,
  },
  {
    "id": "lsa3-1",
    "name": "Sub text lsa3-1",
    "count": 0,
  },
  {
    "id": "lsa3-2",
    "name": "Sub text lsa3-2",
    "count": 1,
  },
  {
    "id": "lsa3-3",
    "name": "Sub text lsa3-3",
    "count": 3,
  },
  {
    "id": "lsa6-1",
    "name": "Sub text lsa6-1",
    "count": 1,
  },
  {
    "id": "lsa6-2",
    "name": "Sub text lsa6-2",
    "count": 0,
  }
];

let leftSideArray = [
  {
    "id": "lsa1",
    "name": "Any text lsa1",
    "count": 1,
  },
  {
    "id": "lsa2",
    "name": "Any text lsa2",
    "count": 2,
  },
  {
    "id": "lsa3",
    "name": "Any text lsa3",
    "count": 0,
  },
  {
    "id": "lsa4",
    "name": "Any text lsa4",
    "count": 3,
  },
  {
    "id": "lsa5",
    "name": "Any text lsa5",
    "count": 2,
  },
  {
    "id": "lsa6",
    "name": "Any text lsa6",
    "count": 1,
  },
  {
    "id": "lsa7",
    "name": "Any text lsa7",
    "count": 1,
  },
  {
    "id": "lsa8",
    "name": "Any text lsa8",
    "count": 2,
  },
];

function listRender(id, name, addNewRow) {
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

function leftSideTable() {
  let leftTable = "";
  leftSideArray.forEach(({ id, name }) => {
    let addNewRowL = `addNewRowL(this)`;
    leftTable += listRender(id, name, addNewRowL);
  });
  $("#opt1-table-left-list").html(leftTable);
}
leftSideTable();

function rightSideTable() {
  let rightTable = "";
  rightSideData.forEach(({ id, name }) => {
    let addNewRowR = `addNewRowR(this)`;
    rightTable += listRender(id, name, addNewRowR);
  });
  $("#opt1-table-right-list").html(rightTable);
}
rightSideTable();

function resetLeftRightBox() {
  leftSideTable();
  rightSideTable();
  $("#leftSideDrag_op1").html("");
  $("#rightSideDrag_op1").html("");
  seqList = [];
  seqListR = [];
}

function renderListInputHtml(_id, iCount, title, resetValue, swapSeq) {
  let inpHtml = "";
  let divClass = iCount == 3 ? "width-22 width-15-tripple" : "width-22";
  for (let i = 0; i < iCount; i++) {
    inpHtml += `<div class="${divClass}">
      <div class="custom-input-only">
        <input type="text" onfocus="onFocus(this)" onfocusout="checkEmpty(this)" oninput="checkEmpty(this)">
      </div>
    </div>`;
  }

  let htmlData = `<div class="d-flex mb-2" id="${_id}">
    <div class="width-5 align-items-baseline">
      <div class="threebar">
        <span>|||</span>
      </div>
    </div>
    <div class="width-26">
      <div class="page__toggle">
        <label class="toggle">
          <input class="toggle__input" type="checkbox" onchange="${resetValue}"/>
          <span class="toggle__label">
            <span class="toggle__text">${title}</span>
          </span>
        </label>
      </div>
    </div>
    <div class="width-5">
      <div class="icon-container" tooltip="${title}" flow="down">
        <i class="fas fa-question-circle"></i>
      </div>
    </div>
    <div class="width-22">
      <div class="custome-select">
        <select id="sequence" onchange="${swapSeq}">
          <option value="0">SEQUENCE</option>
        </select>
      </div>
    </div>
    ${inpHtml}
  </div>`;

  return htmlData;
}

function addNewRowL(e) {
  let _id = $(e).attr("id");
  let element = $(e).children()[0];
  let iCount = leftSideArray.filter((a) => a.id == _id).map((b) => b.count)[0];
  let title = element.innerText;
  if ($(`#leftSideDrag_op1 #${_id}`).length == 0) {
    let swapSeq = `swapSeq(this)`, resetValue = `resetValue(this)`;
    $("#leftSideDrag_op1").append(renderListInputHtml(_id, iCount, title, resetValue, swapSeq));
  }
  $(e).remove();
}

function addNewRowR(e) {
  let _id = $(e).attr("id");
  let element = $(e).children()[0];
  let iCount = rightSideData.filter((a) => a.id == _id).map((b) => b.count)[0];
  let title = element.innerText;
  if ($(`#rightSideDrag_op1 #${_id}`).length == 0) {
    let swapSeq = `swapSeqR(this)`, resetValue = `resetValueR(this)`;
    $("#rightSideDrag_op1").append(renderListInputHtml(_id, iCount, title, resetValue, swapSeq));
  }
  $(e).remove();
}

function formToWindow(e) {
  let tBody = $(e).parent().parent().parent()
    .children(".text-editor-popup-body")
    .find("#text_editor");
  let renHtml = "";
  let seqListJoin = seqList.concat(seqListR);
  seqListJoin.forEach((pid) => {
    let title = $(`#${pid} span.toggle__text`).html();
    let seqVal = $(`#${pid} #sequence`).val();
    let seqTitle = $(`#${pid} #sequence`).find(":selected").text();
    let inpObj = $(`#${pid} input[type="text"]`), inpDiv = "";
    for (let i = 0; i < inpObj.length; i++) {
      let uni_id = inpObj.length > 1 ? "_" + (i + 1) : "";
      let inpText = inpObj[i].value;
      inpDiv += `<div class="form-text-design data-div">
        ${title}${uni_id}: ${inpText}
      </div>`;
    }
    renHtml += `<div class="form-text-design data-div">
      ${title}: Set: Set
    </div>
    <div class="form-text-design data-div">
      ${title}: Sequence: ${seqTitle}
    </div>
    ${inpDiv}`;
  });

  let checkList = $("div#myopt1listData div#sub-ul-modallist .submodal-list div.sublist-check-box.checkbox_show");
  let len = checkList.length;
  for (let i = 0; i < len; i++) {
    let li = $(checkList[i]).parent();
    let listName = li.children("p")[0].textContent.trim();
    let className = li.attr("class");
    let dataLi = findFileList(className);
    if (dataLi) {
      renHtml += `<div class="form-text-design data-div">
        LIST 1: ${dataLi.item}: ${listName}: checked
      </div>`;
    }
  }

  tBody.html(renHtml);
}

function findInputId(title) {
  let list = [{
    id: "myopt1listData",
    name: "LIST 1"
  }];
  let searchArr = leftSideArray.concat(rightSideData).concat(list);
  let res = searchArr.filter((a) => a.name == title).map((b) => b.id);
  if (res.length) return res[0];
  else return false;
}

function windowToForm(e) {
  let tRow = $(e).parent().parent().parent()
    .children(".text-editor-popup-body")
    .find("#text_editor div.form-text-design.data-div");
  let len = tRow.length;
  for (let i = 0; i < len; i++) {
    let divData = $(tRow[i])[0].innerText.split(":");
    let [title, no] = divData[0].trim().split("_");
    let pid = findInputId(title);
    let dataLi = divData.length > 3 ? findFileList(divData[2].trim()) : false;
    if (pid && !dataLi) {
      let checkbox = $(`#${pid} input[type='checkbox'].toggle__input`)[0];
      if (checkbox && checkbox.checked == false) {
        checkbox.click();
      }
      else {
        $(`tr#${pid}`).dblclick();
        let afterCheck = $(`#${pid} input[type='checkbox'].toggle__input`)[0];
        if (afterCheck && afterCheck.checked == false) afterCheck.click();
      }

      if (divData.length == 3) {
        if (divData[1].trim().toUpperCase() == "SEQUENCE") {
          let seqVal = 0;
          let len = Math.max(leftSideArray.length, rightSideData.length);
          for (let k = 1; k <= len; k++) {
            if (divData[2].trim().toUpperCase() == inWords(k).toUpperCase()) {
              seqVal = k;
            }
          }
          $(`#${pid} #sequence`).val(seqVal);
        }
      } else if (divData.length == 2) {
        let inpVal = divData[divData.length - 1].trim();
        no = no != undefined ? no : 1;
        $(`#${pid} input[type="text"]`)[no - 1].value = inpVal;
      }
    } else if (dataLi) {
      let { id } = dataLi;
      let liList = document.querySelector(`div#myopt1listData div#sub-ul-modallist ul li.${id}`);
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
      let markItem = $(`div#myopt1listData ul.select-item-main li.modallist-item-${_id.split("-").splice(-1)[0]} div.green-check-box`);
      let count = $(`div#myopt1listData div#sub-ul-modallist ul#submodal-div-list-1-${_id.split("-").splice(-1)[0]} li div.sublist-check-box.checkbox_show`).length;
      count += $(`div#myopt1listData div#sub-ul-modallist ul#submodal-div-list-2-${_id.split("-").splice(-1)[0]} li div.sublist-check-box.checkbox_show`).length;
      count += $(`div#myopt1listData div#sub-ul-modallist ul#submodal-div-list-3-${_id.split("-").splice(-1)[0]} li div.sublist-check-box.checkbox_show`).length;
      if (count > 0) {
        markItem.addClass("display-block");
        markItem.removeClass("display-none");
      } else {
        markItem.addClass("display-none");
        markItem.removeClass("display-block");
      }

      $("div#myopt1listData button.done-myfo").click();
    }
  }
  $('#op1FormEditModal').modal('hide');
  $('#textEditorThankModal').modal('show');
}

// getting cursor position it returns the node
function getCaretPosition() {
  if (window.getSelection && window.getSelection().getRangeAt) {
    let range = window.getSelection().getRangeAt(0);
    let selectedObj = window.getSelection();
    let rangeCount = 0;
    let childNodes = selectedObj.anchorNode.parentNode.childNodes;
    let fack;
    for (let i = 0; i < childNodes.length; i++) {
      if (childNodes[i] == selectedObj.anchorNode) {
        fack = i;
        break;
      }
      if (childNodes[i].outerHTML) {
        rangeCount += childNodes[i].outerHTML.length;
        fack = i;
      } else if (childNodes[i].nodeType == 3) {
        fack = i;
        rangeCount += childNodes[i].textContent.length;
      }
    }
    return childNodes[fack];
  }
  return -1;
}

// getting cursor position... it returns column number in that node
function getCaretPosition2(editableDiv) {
  let caretPos = 0,
    sel,
    range;
  if (window.getSelection) {
    sel = window.getSelection();
    if (sel.rangeCount) {
      range = sel.getRangeAt(0);
      if (range.commonAncestorContainer.parentNode == editableDiv) {
        caretPos = range.endOffset;
      }
    }
  } else if (document.selection && document.selection.createRange) {
    range = document.selection.createRange();
    if (range.parentElement() == editableDiv) {
      let tempEl = document.createElement("span");
      editableDiv.insertBefore(tempEl, editableDiv.firstChild);
      let tempRange = range.duplicate();
      tempRange.moveToElementText(tempEl);
      tempRange.setEndPoint("EndToEnd", range);
      caretPos = tempRange.text.length;
    }
  }
  return caretPos;
}

// it will send cursor to the start
function setCaret(el) {
  var range = document.createRange();
  var sel = window.getSelection();

  range.setStart(el, 0);
  range.collapse(true);

  sel.removeAllRanges();
  sel.addRange(range);
}

// this function check for valid input in text editor
function checking(e) {
  // let editor = document.getElementById("text_editor");
  $("#adder").remove(); // adder contains our auto correct select box
  // if key is enter key
  // let nd = getCaretPosition();
  // let nd2 = nd.nodeType == 3 ? $(nd).parent()[0] : nd;
  // let extra = getCaretPosition2(nd2);
  if (e.keyCode == 13) {
    let nd = getCaretPosition();
    $("#temp").attr("id", "");
    if (nd.nodeType != 3 && nd.getAttribute("id") == "text_editor") return false;
    if (
      nd.textContent.substr(0, nd.textContent.indexOf(": ")) != -1 &&
      nd.textContent != ""
    ) {
      let nd2 = nd.nodeType == 3 ? $(nd).parent()[0] : nd;
      let extra = getCaretPosition2(nd2);
      let starting = nd.textContent.substr(0, extra);
      let ending = nd.textContent.substr(extra);
      // addition of check for allowing lines to split on enter key in between

      let regex = /Item \d+/g;
      let inpData = starting.split(":");
      if (
        starting != "" &&
        (!findInputId(inpData[0].trim().split("_")[0].trim()) ||
          (inpData.length == 3 && (inpData[2].trim() == "\r" || inpData[2].trim() == "")) ||
          (
            inpData.length == 3 &&
            inpData[1].trim() != "Set" &&
            inpData[1].trim() != "Sequence" &&
            inpData[1].trim() != "Form" &&
            inpData[1].trim() != "To" &&
            !regex.test(inpData[1].trim())
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
  setTimeout(autoCorrect, 100);
}

let setSugArray = ["Sequence", "Set", "Form", "To", "Add"];

function autoCorrect() {
  // getting current line... so that we place auto correct after it
  let pos = getCaretPosition();
  if ($(pos).find("#adder").length == 1) $("#adder").remove();
  // i mark current line as temp... to make auto correct work
  while (document.getElementById("temp")) {
    document.getElementById("temp").removeAttribute("id");
  }
  let x = pos.textContent;
  let editor = document.getElementById("text_editor_p");

  let m = "";
  let first = 1;
  if (x.indexOf(":") == -1) {
    let sugName = leftSideArray.concat(rightSideData);
    sugName.forEach((sData) => {
      if (sData.name.toLowerCase().indexOf(x.toLowerCase()) == 0) {
        if (first) {
          m += `<option selected value="${sData.name}">${sData.name}</option><br>`;
        }
        else {
          m += `<option value="${sData.name}">${sData.name}</option><br>`;
        }
        first = 0;
      }
    });
  }
  else if ((x.split(":").length - 1) == 1) {
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
  } else if ((x.split(":").length - 1) == 2) {

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
    // setEndOfContenteditable(document.getElementById("temp"));
    // document.getElementById("temp").removeAttribute("id");
  }
}

function addField(key) {
  x = document.getElementById("temp");
  clicked = false;
  $("#adder").remove();
  let sData = x.textContent.split(":");
  if (x.textContent.indexOf(":") == -1) {
    x.textContent = `${key}: \r`;
  }
  else if ((sData.length - 1) == 1) {
    x.textContent = `${sData[0]}: ${key}: \r`;
  }
  else if ((sData.length - 1) == 2) {
    x.textContent = `${sData[0]}: ${sData[1]}: ${key}\r`;
  }
  setTimeout(setEndOfContenteditable, 100, x);
}

function keyHandler(e, x) {
  e.stopPropagation();
  if (e.keyCode == 13) addField(x.value);
  else if (e.keyCode != 40 && e.keyCode != 38) {
    setEndOfContenteditable(document.getElementById("temp"));
  }
}

function setEndOfContenteditable(contentEditableElement) {
  let range, selection;
  if (document.createRange)//Firefox, Chrome, Opera, Safari, IE 9+
  {
    range = document.createRange();//Create a range (a range is a like the selection but invisible)
    range.selectNodeContents(contentEditableElement);//Select the entire contents of the element with the range
    range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
    selection = window.getSelection();//get the selection object (allows you to change selection)
    selection.removeAllRanges();//remove any selections already made
    selection.addRange(range);//make the range you have just created the visible selection
  }
  else if (document.selection)//IE 8 and lower
  {
    range = document.body.createTextRange();//Create a range (a range is a like the selection but invisible)
    range.moveToElementText(contentEditableElement);//Select the entire contents of the element with the range
    range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
    range.select();//Select the range (make it the visible selection
  }
}

// paste work... checks are same as in checking function or in updateActualForm
function pasteEvent(e) {
  let caretPos = getCaretPosition();
  let editorPos = document.getElementById("text_editor");
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
      let regex = /Item \d+/g;
      if (
        !findInputId(inpData[0].trim().split("_")[0].trim()) ||
        (inpData.length == 3 && (inpData[2].trim() == "\r" || inpData[2].trim() == "")) ||
        (
          inpData.length == 3 &&
          inpData[1].trim() != "Set" &&
          inpData[1].trim() != "Sequence" &&
          inpData[1].trim() != "Form" &&
          inpData[1].trim() != "To" &&
          !regex.test(inpData[1].trim())
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

// removing empty lines from text editor
function removeExtraLines(e) {
  $(e)
    .find("*")
    .each(function () {
      if ($(this).text().trim() == "") $(this).remove();
    });
  // $(e).append("<br>");
}

function isGenerateDisable() {
  let len = seqList.length;
  let len2 = seqListR.length;
  if (!len && !len2) return false;

  for (let i = 0; i < len; i++) {
    let abc = $(`#leftSideDrag_op1 #${seqList[i]} .custom-input-only input`);
    for (let j = 0; j < abc.length; j++) {
      if (abc[j].value == "") {
        $(abc[j]).parent().addClass("custom-input-danger");
        $(abc[j]).parent().removeClass("custom-input-success");
        let errorMessage = `<div class="error-message">
          <p>A value must be entered</p>
        </div>`;
        let errPos = $(abc[j]).parent().parent();
        if (!errPos.children("div.error-message").length) {
          errPos.append(errorMessage);
        }
        return false;
      }
    }
  }

  for (let i = 0; i < len2; i++) {
    let abc = $(`#rightSideDrag_op1 #${seqListR[i]} .custom-input-only input`);
    for (let j = 0; j < abc.length; j++) {
      if (abc[j].value == "") {
        $(abc[j]).parent().addClass("custom-input-danger");
        $(abc[j]).parent().removeClass("custom-input-success");
        let errorMessage = `<div class="error-message">
          <p>A value must be entered</p>
        </div>`;
        let errPos = $(abc[j]).parent().parent();
        if (!errPos.children("div.error-message").length) {
          errPos.append(errorMessage);
        }
        return false;
      }
    }
  }
  return true;
}

function checkGenerateBtn() {
  let flag = isGenerateDisable();
  if (flag) {
    $("#op1GenerateBtnModal").modal('toggle');
  }
}

// Opt3 Form by text editor Start
let op3Sug = [
  {
    id: "op3-md-1",
    name: "Keyword",
  },
  {
    id: "op3-md-2",
    name: "From",
  },
  {
    id: "op3-md-3",
    name: "To"
  },
  {
    id: "op3-md-4",
    name: "Source Option 1"
  },
  {
    id: "op3-md-5",
    name: "Source Option 2"
  }
];
function findInputIdOp3(title) {
  let searchArr = op3Sug.concat(opt3TableData);
  let res = searchArr.filter(a => a.name == title);
  if (res.length) return res[0];
  else return false;
}

function checkingOp3(e) {
  $("#adder").remove();
  // let nd = getCaretPosition();
  // let nd2 = nd.nodeType == 3 ? $(nd).parent()[0] : nd;
  // let extra = getCaretPosition2(nd2);
  if (e.keyCode == 13) {
    let nd = getCaretPosition();
    $("#temp").attr("id", "");
    if (nd.nodeType != 3 && nd.getAttribute("id") == "op3_text_editor") return false;
    if (
      nd.textContent.substr(0, nd.textContent.indexOf(": ")) != -1 &&
      nd.textContent != ""
    ) {
      let nd2 = nd.nodeType == 3 ? $(nd).parent()[0] : nd;
      let extra = getCaretPosition2(nd2);
      let starting = nd.textContent.substr(0, extra);
      let ending = nd.textContent.substr(extra);
      // addition of check for allowing lines to split on enter key in between
      let inpData = starting.split(":");
      if (
        starting != "" &&
        (!(findInputIdOp3(inpData[0].trim()) || findInputIdOp3(inpData[1].trim())) ||
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
  setTimeout(autoCorrectOp3, 100);
}

function autoCorrectOp3() {
  let pos = getCaretPosition();
  if ($(pos).find("#adder").length == 1) $("#adder").remove();
  while (document.getElementById("temp")) {
    document.getElementById("temp").removeAttribute("id");
  }
  let x = pos.textContent;

  let m = "";
  let first = 1;
  if (x.indexOf(":") == -1) {
    let searchArr = op3Sug.concat(opt3TableData);
    searchArr.forEach(({ name }) => {
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
  if (m != "") {
    if (x.indexOf(":") == -1) {
      $(pos).replaceWith(
        `<div id="temp">${x}</div>
        <div id="adder" class="set-name"></div>`
      );
    }
    document.getElementById("adder").innerHTML = y;
    document.getElementById("adder").style.display = "block";
    $("#adder select").focus();
  } else {
    $("#adder").remove();
    // setEndOfContenteditable(document.getElementById("temp"));
    // document.getElementById("temp").removeAttribute("id");
  }
}

function pasteEventOp3(e) {
  let caretPos = getCaretPosition();
  let editorPos = document.getElementById("op3_text_editor");
  let editor = editorPos == caretPos ? editorPos : caretPos;
  let clipboardData = e.clipboardData || window.clipboardData;
  let pD = clipboardData.getData("Text").split("\n");
  let x = "";
  for (var i = 0; i < pD.length; i++) {
    let nbe = pD[i];
    if (i == 0 && !editor.tagName) {
      replaceSelectedText(nbe);
      continue;
    }
    let inpData = nbe.split(":");
    if (nbe.substr(0, nbe.indexOf(": ")) != -1 && nbe != "") {
      if (
        !(findInputIdOp3(inpData[0].trim()) || findInputIdOp3(inpData[1].trim())) ||
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

function formToWindowOp3(e) {
  let tBody = $(e).parent().parent().parent()
    .children(".text-editor-popup-body")
    .find("#op3_text_editor");
  let keyword = $("#opt3-textarea-1").val();
  let from = $("#datepicker-1").val();
  let to = $("#datepicker-2").val();

  let renHtml = "";

  if (keyword != "") {
    renHtml +=
      `<div class="form-text-design data-div">
      Keyword: ${keyword}
    </div>`;
  }

  if (from != "") {
    renHtml +=
      `<div class="form-text-design data-div">
      From: ${from}
    </div>`;
  }

  if (to != "") {
    renHtml +=
      `<div class="form-text-design data-div">
      To: ${to}
    </div>`;
  }

  let tableTr = $("#man-data-op3-table tbody tr.mark-table-data");
  let len = tableTr.length;
  let radioOption = $(".radio input[type = 'radio'][name = 'data-set-radio-button']:checked").val();
  if (radioOption != "") {
    renHtml +=
      `<div class="form-text-design data-div">
      ${radioOption}: checked
    </div>`;
  }
  for (let i = 0; i < len; i++) {
    let trData = $(tableTr[i]).children("td").text().trim();
    renHtml +=
      `<div class="form-text-design data-div">
      ${radioOption}: ${trData}: checked
    </div>`;
  }
  if (renHtml != "") {
    tBody.html(renHtml);
  }
}

function windowToFormOp3(e) {
  let tRow = $(e).parent().parent().parent()
    .children(".text-editor-popup-body")
    .find("#op3_text_editor div.form-text-design.data-div");
  let len = tRow.length;
  for (let i = 0; i < len; i++) {
    let divData = $(tRow[i])[0].innerText.split(":");
    if (divData.length == 2) {
      if (divData[0].trim() == "Keyword") {
        $("#opt3-textarea-1").val(divData[1].trim());
      }
      else if (divData[0].trim() == "From") {
        $("#datepicker-1").val(divData[1].trim());
      }
      else if (divData[0].trim() == "To") {
        $("#datepicker-2").val(divData[1].trim());
      }
      else if (divData[0].trim() == "Source Option 1" || divData[0].trim() == "Source Option 2") {
        let radioBtn = $(`.radio input[type = "radio"][value = "${divData[0].trim()}"]`);
        if (radioBtn.length && divData[1].trim() == "checked") {
          radioBtn[0].checked = true;
        }
      }
    } else if (divData.length > 2) {
      let { id } = findInputIdOp3(divData[1].trim());
      if (divData[2].trim() == "checked") {
        $(`#man-data-op3-table tbody tr#${id}`).addClass("mark-table-data");
      } else if (divData[2].trim() == "unchecked") {
        $(`#man-data-op3-table tbody tr#${id}`).removeClass("mark-table-data");
      }
    }
  }
  $('#op3FormEditModal').modal('hide');
  $('#textEditorThankModal').modal('show');
}
// Opt3 Form by text editor End

// Extra start
function replaceSelectedText(replacementText) {
  let sel, range;
  if (window.getSelection) {
    sel = window.getSelection();
    if (sel.rangeCount) {
      range = sel.getRangeAt(0);
      range.deleteContents();
      range.insertNode(document.createTextNode(replacementText));
    }
  } else if (document.selection && document.selection.createRange) {
    range = document.selection.createRange();
    range.text = replacementText;
  }
}
//Extra End

$("#mnDataOp1FileBox").click(function () {
  
  $('#myopt1listData').modal('show');

  // $("#item_loading_op1").css("display", "block");
  // $(".scroll5564windrow").css("display", "none");
  // $(".myscrollbtn-op1").css("display", "none");

  setTimeout(() => {
    $("#item_loading_op1").css("display", "none");
    $(".scroll5564windrow").css("display", "block");
    $(".myscrollbtn-op1").css("display", "block");
  }, 2000);

});