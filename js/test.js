var seqList = []; // this is for storing sequence of rows (sequence list work)
var seqListR = []; // this is for storing sequence of rows (sequence list work)
let newRowsList = []; // if some rows removed then that row number is added here as an empty slot

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
    if (errP.length) errP.remove();
    if (errC.length) {
      errC.addClass("custom-input-success");
      errC.removeClass("custom-input-danger");
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
  // again required for range slider
  $("input[type='range']").each(function () {
    let _t = $(this)[0];
    _t.parentNode.style.setProperty(`--${_t.id}`, +_t.value);
  });
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
    if (errP.length) errP.remove();
    if (errC.length) {
      errC.addClass("custom-input-success");
      errC.removeClass("custom-input-danger");
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
  // again required for range slider
  $("input[type='range']").each(function () {
    let _t = $(this)[0];
    _t.parentNode.style.setProperty(`--${_t.id}`, +_t.value);
  });
  autoCheckLeftForRight(pid);
}

function autoCheckLeftForRight(_id) {
  let result = leftSideArray.reduce((filtered, leftdata) => {
    if (leftdata.rightData) {
      filtered.push(leftdata.id);
    }
    return filtered;
  }, []);
  console.log(result);
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

// required for input range slider
addEventListener("input", (e) => {
  let _t = e.target;
  _t.parentNode.style.setProperty(`--${_t.id}`, +_t.value);
},
  false
);

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
      <p>A value must be entered.</p>
    </div>`;
    let errPos = $(e).parent().parent();
    if (!errPos.children("div.error-message").length) {
      errPos.append(errorMessage);
    }
  }
}

let leftSideArray = [
  {
    "id": "lsa1",
    "name": "Any text 123456",
    "rightData": [
      {
        "id": "lsa1-1",
        "name": "Any text 3535",
      },
      {
        "id": "lsa1-2",
        "name": "Any text 96553",
      }
    ],
  },
  {
    "id": "lsa2",
    "name": "Any text 25636",
    "rightData": [
      {
        "id": "lsa2-1",
        "name": "Any text 123456",
      }
    ],
  },
  {
    "id": "lsa3",
    "name": "Any text 2456464"
  },
  {
    "id": "lsa4",
    "name": "Any text 797543"
  },
  {
    "id": "lsa5",
    "name": "Any text 5685432"
  },
  {
    "id": "lsa6",
    "name": "Any text 9785534"
  },
  {
    "id": "lsa7",
    "name": "Any text 324657"
  },
  {
    "id": "lsa8",
    "name": "Any text 68553"
  },
]

function listRender(id, name, addNewRow) {
  let ele = `<tr ondblclick="${addNewRow}" >
    <td colspan="2" id="${id}">${name}</td>
    <td><i class="fas fa-question-circle"></i></td>
    <td></td>
  </tr>`;
  return ele;
}

leftSideArray.forEach(({ id, name }) => {
  let addNewRowL = `addNewRowL(this)`;
  $("#opt1-table-left-list").append(listRender(id, name, addNewRowL));
});

function renderListInputHtml(_id, title, resetValue, swapSeq) {
  let htmlData = `<div class="d-flex mb-2" id="${_id}">
    <div class="width-5 align-items-baseline">
      <div class="threebar">
        <span>|||</span>
      </div>
    </div>
    <div class="width-26">
      <div class="page__toggle">
        <label class="toggle">
          <input class="toggle__input" type="checkbox" onchange="${resetValue}">
          <span class="toggle__label">
            <span class="toggle__text">${title}</span>
          </span>
        </label>
      </div>
    </div>
    <div class="width-5">
      <div class="icon-container">
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
    <div class="width-22">
      <div class="custom-input-success">
        <input type="text" onfocus="onFocus(this)" onfocusout="checkEmpty(this)" oninput="checkEmpty(this)">
      </div>
    </div>
  </div>`;
  
  return htmlData;
}

function addNewRowL(e) {
  let element = $(e).children()[0];
  let _id = element.id;
  let title = element.innerText;
  if ($(`#leftSideDrag_op1 #${_id}`).length == 0) {
    let swapSeq = `swapSeq(this)`, resetValue = `resetValue(this,seqList)`;
    $("#leftSideDrag_op1").append(renderListInputHtml(_id, title, resetValue, swapSeq));
    let aData = leftSideArray.filter((rData) => rData.id == _id);
    if (aData[0].rightData) {
      aData[0].rightData.forEach(({ id, name }) => {
        let addNewRowR = `addNewRowR(this)`;
        $("#opt1-table-right-list").append(listRender(id, name, addNewRowR));
      });
    }
  }
}

function addNewRowR(e) {
  let element = $(e).children()[0];
  let _id = element.id;
  let title = element.innerText;
  if ($(`#rightSideDrag_op1 #${_id}`).length == 0) {
    let swapSeq = `swapSeqR(this)`, resetValue = `resetValueR(this,seqList)`;
    $("#rightSideDrag_op1").append(renderListInputHtml(_id, title, resetValue, swapSeq));
  }
}