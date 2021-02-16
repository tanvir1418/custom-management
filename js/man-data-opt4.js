// Manage Data Opt 4 Sample 2 Start
(function manDataSamLeftSide() {
  let lOptOne =
    `<div class="width-12">
    <div class="custome-select">
      <select>
        <option>SET</option>
        <option>ADD</option>
        <option>Add/Set</option>
      </select>
    </div>
  </div>
  <div class="width-22">
    <div class="custome-select">
      <select id="sequence-opt4" onchange="manDataSwapSeqL(this)">
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
    `<div class="width-12">
  </div>
  <div class="width-22">
    <div class="custome-select">
      <select id="sequence-opt4" onchange="manDataSwapSeqL(this)">
        <option value="0">SEQUENCE</option>
      </select>
    </div>
  </div>
  <div class="width-22">
    <div class="custome-select">
      <select onfocus="onFocus(this)">
        <option></option>
        <option></option>
        <option></option>
      </select>
    </div>
  </div>
  <div class="width-22">
    <div class="custome-select">
      <select onfocus="onFocus(this)">
        <option></option>
        <option></option>
        <option></option>
      </select>
    </div>
  </div>`;

  let lOptThree =
    `<div class="width-12">
    <div class="custome-select">
      <select>
        <option>Add/Set</option>
        <option>ADD</option>
        <option>SET</option>
      </select>
    </div>
  </div>
  <div class="width-22">
    <div class="custome-select">
      <select id="sequence-opt4" onchange="manDataSwapSeqL(this)">
        <option value="0">SEQUENCE</option>
      </select>
    </div>
  </div>
  <div class="width-22">
    <div class="custome-select">
      <select onfocus="onFocus(this)">
        <option></option>
        <option></option>
        <option></option>
      </select>
    </div>
  </div>
  <div class="width-22">
    <div class="custome-select">
      <select onfocus="onFocus(this)">
        <option></option>
        <option></option>
        <option></option>
      </select>
    </div>
  </div>`;

  let lOptFour =
    `<div class="width-12"></div>
  <div class="width-22">
    <div class="custome-select">
      <select id="sequence-opt4" onchange="manDataSwapSeqL(this)">
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
      <select id="sequence-opt4" onchange="manDataSwapSeqL(this)">
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

  let renderLeftSite =
    `<div class="d-flex mb-2" id="manDataL-1">
    <div class="width-5 align-items-baseline">
      <div class="threebar">
        <span>|||</span>
      </div>
    </div>
    <div class="width-26">
      <div class="page__toggle">
        <label class="toggle">
          <input class="toggle__input" type="checkbox" onchange="manDataResetValueL(this)"/>
          <span class="toggle__label">
            <span class="toggle__text">L-Options 1</span>
          </span>
        </label>
      </div>
    </div>
  ${lOptOne}
  </div>
  <div class="d-flex mb-2" id="manDataL-2">
    <div class="width-5 align-items-baseline">
      <div class="threebar">
        <span>|||</span>
      </div>
    </div>
    <div class="width-26">
      <div class="page__toggle">
        <label class="toggle">
          <input class="toggle__input" type="checkbox" onchange="manDataResetValueL(this)"/>
          <span class="toggle__label">
            <span class="toggle__text">L-Options 2</span>
          </span>
        </label>
      </div>
    </div>
  ${lOptOne}
  </div>
  <div class="d-flex mb-2" id="manDataL-3">
  <div class="width-5 align-items-baseline">
    <div class="threebar">
      <span>|||</span>
    </div>
  </div>
  <div class="width-26">
    <div class="page__toggle">
      <label class="toggle">
        <input class="toggle__input" type="checkbox" onchange="manDataResetValueL(this)"/>
        <span class="toggle__label">
          <span class="toggle__text">L-Options 3</span>
        </span>
      </label>
    </div>
  </div>
  ${lOptTwo}
  </div>
  <div class="d-flex mb-2" id="manDataL-4">
  <div class="width-5 align-items-baseline">
    <div class="threebar">
      <span>|||</span>
    </div>
  </div>
  <div class="width-26">
    <div class="page__toggle">
      <label class="toggle">
        <input class="toggle__input" type="checkbox" onchange="manDataResetValueL(this)"/>
        <span class="toggle__label">
          <span class="toggle__text">L-Options 4</span>
        </span>
      </label>
    </div>
  </div>
  ${lOptThree}
  </div>
  <div class="d-flex mb-2" id="manDataL-5">
  <div class="width-5 align-items-baseline">
    <div class="threebar">
      <span>|||</span>
    </div>
  </div>
  <div class="width-26">
    <div class="page__toggle">
      <label class="toggle">
        <input class="toggle__input" type="checkbox" onchange="manDataResetValueL(this)"/>
        <span class="toggle__label">
          <span class="toggle__text">L-Options 5</span>
        </span>
      </label>
    </div>
  </div>
  ${lOptFour}
  </div>
  <div class="d-flex mb-2" id="manDataL-6">
  <div class="width-5 align-items-baseline">
    <div class="threebar">
      <span>|||</span>
    </div>
  </div>
  <div class="width-26">
    <div class="page__toggle">
      <label class="toggle">
        <input class="toggle__input" type="checkbox" onchange="manDataResetValueL(this)"/>
        <span class="toggle__label">
          <span class="toggle__text">L-Options 6</span>
        </span>
      </label>
    </div>
  </div>
  ${lOptFour}
  </div>
  <div class="d-flex mb-2" id="manDataL-7">
  <div class="width-5 align-items-baseline">
    <div class="threebar">
      <span>|||</span>
    </div>
  </div>
  <div class="width-26">
    <div class="page__toggle">
      <label class="toggle">
        <input class="toggle__input" type="checkbox" onchange="manDataResetValueL(this)"/>
        <span class="toggle__label">
          <span class="toggle__text">L-Options 7</span>
        </span>
      </label>
    </div>
  </div>
  ${lOptFour}
  </div>
  <div class="d-flex mb-2" id="manDataL-8">
  <div class="width-5 align-items-baseline">
    <div class="threebar">
      <span>|||</span>
    </div>
  </div>
  <div class="width-26">
    <div class="page__toggle">
      <label class="toggle">
        <input class="toggle__input" type="checkbox" onchange="manDataResetValueL(this)"/>
        <span class="toggle__label">
          <span class="toggle__text">L-Options 8</span>
        </span>
      </label>
    </div>
  </div>
  ${lOptFour}
  </div>
  <div class="d-flex mb-2" id="manDataL-9">
  <div class="width-5 align-items-baseline">
    <div class="threebar">
      <span>|||</span>
    </div>
  </div>
  <div class="width-26">
    <div class="page__toggle">
      <label class="toggle">
        <input class="toggle__input" type="checkbox" onchange="manDataResetValueL(this)"/>
        <span class="toggle__label">
          <span class="toggle__text">L-Options 9</span>
        </span>
      </label>
    </div>
  </div>
  ${lOptTwo}
  </div>
  <div class="d-flex mb-2" id="manDataL-10">
  <div class="width-5 align-items-baseline">
    <div class="threebar">
      <span>|||</span>
    </div>
  </div>
  <div class="width-26">
    <div class="page__toggle">
      <label class="toggle">
        <input class="toggle__input" type="checkbox" onchange="manDataResetValueL(this)"/>
        <span class="toggle__label">
          <span class="toggle__text">L-Options 10</span>
        </span>
      </label>
    </div>
  </div>
  ${lOptFour}
  </div>
  <div class="d-flex mb-2" id="manDataL-11">
  <div class="width-5 align-items-baseline">
    <div class="threebar">
      <span>|||</span>
    </div>
  </div>
  <div class="width-26">
    <div class="page__toggle">
      <label class="toggle">
        <input class="toggle__input" type="checkbox" onchange="manDataResetValueL(this)"/>
        <span class="toggle__label">
          <span class="toggle__text">L-Options 11</span>
        </span>
      </label>
    </div>
  </div>
  ${lOptFive}
  </div>`;
  // lOptOne + lOptOne + lOptTwo + lOptThree + lOptFour + lOptFour + lOptFour + lOptFour + lOptTwo + lOptFour + lOptFive;
  $("#mnDt_LfSide").html(renderLeftSite);
})();
(function manDataSamRightSide() {
  let lOptOne =
    `<div class="width-12">
    <div class="custome-select">
      <select>
        <option>SET</option>
        <option>ADD</option>
        <option>Add/Set</option>
      </select>
    </div>
  </div>
  <div class="width-22">
    <div class="custome-select">
      <select id="sequence-opt4" onchange="manDataSwapSeqR(this)">
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
    `<div class="width-12">
  </div>
  <div class="width-22">
    <div class="custome-select">
      <select id="sequence-opt4" onchange="manDataSwapSeqR(this)">
        <option value="0">SEQUENCE</option>
      </select>
    </div>
  </div>
  <div class="width-22">
    <div class="custome-select">
      <select onfocus="onFocus(this)">
        <option></option>
        <option></option>
        <option></option>
      </select>
    </div>
  </div>
  <div class="width-22">
    <div class="custome-select">
      <select onfocus="onFocus(this)">
        <option></option>
        <option></option>
        <option></option>
      </select>
    </div>
  </div>`;

  let lOptThree =
    `<div class="width-12">
    <div class="custome-select">
      <select>
        <option>Add/Set</option>
        <option>ADD</option>
        <option>SET</option>
      </select>
    </div>
  </div>
  <div class="width-22">
    <div class="custome-select">
      <select id="sequence-opt4" onchange="manDataSwapSeqR(this)">
        <option value="0">SEQUENCE</option>
      </select>
    </div>
  </div>
  <div class="width-22">
    <div class="custome-select">
      <select onfocus="onFocus(this)">
        <option></option>
        <option></option>
        <option></option>
      </select>
    </div>
  </div>
  <div class="width-22">
    <div class="custome-select">
      <select onfocus="onFocus(this)">
        <option></option>
        <option></option>
        <option></option>
      </select>
    </div>
  </div>`;

  let lOptFour =
    `<div class="width-12"></div>
  <div class="width-22">
    <div class="custome-select">
      <select id="sequence-opt4" onchange="manDataSwapSeqR(this)">
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
      <select id="sequence-opt4" onchange="manDataSwapSeqR(this)">
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

  let renderRightSite =
    `<div class="d-flex mb-2" id="manDataR-1">
    <div class="width-5 align-items-baseline">
      <div class="threebar">
        <span>|||</span>
      </div>
    </div>
    <div class="width-26">
      <div class="page__toggle">
        <label class="toggle">
          <input class="toggle__input" type="checkbox" onchange="manDataResetValueR(this)"/>
          <span class="toggle__label">
            <span class="toggle__text">L-Options 1</span>
          </span>
        </label>
      </div>
    </div>
  ${lOptOne}
  </div>
  <div class="d-flex mb-2" id="manDataR-2">
    <div class="width-5 align-items-baseline">
      <div class="threebar">
        <span>|||</span>
      </div>
    </div>
    <div class="width-26">
      <div class="page__toggle">
        <label class="toggle">
          <input class="toggle__input" type="checkbox" onchange="manDataResetValueR(this)"/>
          <span class="toggle__label">
            <span class="toggle__text">L-Options 2</span>
          </span>
        </label>
      </div>
    </div>
  ${lOptOne}
  </div>
  <div class="d-flex mb-2" id="manDataR-3">
  <div class="width-5 align-items-baseline">
    <div class="threebar">
      <span>|||</span>
    </div>
  </div>
  <div class="width-26">
    <div class="page__toggle">
      <label class="toggle">
        <input class="toggle__input" type="checkbox" onchange="manDataResetValueR(this)"/>
        <span class="toggle__label">
          <span class="toggle__text">L-Options 3</span>
        </span>
      </label>
    </div>
  </div>
  ${lOptTwo}
  </div>
  <div class="d-flex mb-2" id="manDataR-4">
  <div class="width-5 align-items-baseline">
    <div class="threebar">
      <span>|||</span>
    </div>
  </div>
  <div class="width-26">
    <div class="page__toggle">
      <label class="toggle">
        <input class="toggle__input" type="checkbox" onchange="manDataResetValueR(this)"/>
        <span class="toggle__label">
          <span class="toggle__text">L-Options 4</span>
        </span>
      </label>
    </div>
  </div>
  ${lOptThree}
  </div>
  <div class="d-flex mb-2" id="manDataR-5">
  <div class="width-5 align-items-baseline">
    <div class="threebar">
      <span>|||</span>
    </div>
  </div>
  <div class="width-26">
    <div class="page__toggle">
      <label class="toggle">
        <input class="toggle__input" type="checkbox" onchange="manDataResetValueR(this)"/>
        <span class="toggle__label">
          <span class="toggle__text">L-Options 5</span>
        </span>
      </label>
    </div>
  </div>
  ${lOptFour}
  </div>
  <div class="d-flex mb-2" id="manDataR-6">
  <div class="width-5 align-items-baseline">
    <div class="threebar">
      <span>|||</span>
    </div>
  </div>
  <div class="width-26">
    <div class="page__toggle">
      <label class="toggle">
        <input class="toggle__input" type="checkbox" onchange="manDataResetValueR(this)"/>
        <span class="toggle__label">
          <span class="toggle__text">L-Options 6</span>
        </span>
      </label>
    </div>
  </div>
  ${lOptFour}
  </div>
  <div class="d-flex mb-2" id="manDataR-7">
  <div class="width-5 align-items-baseline">
    <div class="threebar">
      <span>|||</span>
    </div>
  </div>
  <div class="width-26">
    <div class="page__toggle">
      <label class="toggle">
        <input class="toggle__input" type="checkbox" onchange="manDataResetValueR(this)"/>
        <span class="toggle__label">
          <span class="toggle__text">L-Options 7</span>
        </span>
      </label>
    </div>
  </div>
  ${lOptFour}
  </div>
  <div class="d-flex mb-2" id="manDataR-8">
  <div class="width-5 align-items-baseline">
    <div class="threebar">
      <span>|||</span>
    </div>
  </div>
  <div class="width-26">
    <div class="page__toggle">
      <label class="toggle">
        <input class="toggle__input" type="checkbox" onchange="manDataResetValueR(this)"/>
        <span class="toggle__label">
          <span class="toggle__text">L-Options 8</span>
        </span>
      </label>
    </div>
  </div>
  ${lOptFour}
  </div>
  <div class="d-flex mb-2" id="manDataR-9">
  <div class="width-5 align-items-baseline">
    <div class="threebar">
      <span>|||</span>
    </div>
  </div>
  <div class="width-26">
    <div class="page__toggle">
      <label class="toggle">
        <input class="toggle__input" type="checkbox" onchange="manDataResetValueR(this)"/>
        <span class="toggle__label">
          <span class="toggle__text">L-Options 9</span>
        </span>
      </label>
    </div>
  </div>
  ${lOptTwo}
  </div>
  <div class="d-flex mb-2" id="manDataR-10">
  <div class="width-5 align-items-baseline">
    <div class="threebar">
      <span>|||</span>
    </div>
  </div>
  <div class="width-26">
    <div class="page__toggle">
      <label class="toggle">
        <input class="toggle__input" type="checkbox" onchange="manDataResetValueR(this)"/>
        <span class="toggle__label">
          <span class="toggle__text">L-Options 10</span>
        </span>
      </label>
    </div>
  </div>
  ${lOptFour}
  </div>
  <div class="d-flex mb-2" id="manDataR-11">
  <div class="width-5 align-items-baseline">
    <div class="threebar">
      <span>|||</span>
    </div>
  </div>
  <div class="width-26">
    <div class="page__toggle">
      <label class="toggle">
        <input class="toggle__input" type="checkbox" onchange="manDataResetValueR(this)"/>
        <span class="toggle__label">
          <span class="toggle__text">L-Options 11</span>
        </span>
      </label>
    </div>
  </div>
  ${lOptFive}
  </div>`;
  // lOptOne + lOptOne + lOptTwo + lOptThree + lOptFour + lOptFour + lOptFour + lOptFour + lOptTwo + lOptFour + lOptFive;
  $("#mnDt_RtSide").html(renderRightSite);
})();

var manDataSeqListL = [];
var manDataSeqListR = [];

function manDataResetValueL(e) {
  let pid = $(e).parent().parent().parent().parent().attr("id");
  if ($(`#${pid} #sequence-opt4`).length == 0) return true;
  if (e.checked == false) {
    $(`#${pid} input, #${pid} select`).val("");
    manDataSeqListL = manDataSeqListL.filter(function (id) {
      $(`#${id} #sequence-opt4`).children(`option:last-child`).remove();
      return pid != id;
    });
    manDataSeqListL.forEach(function (val, index) {
      $(`#${val} #sequence-opt4`).val(index + 1);
    });
    $(`#${pid} #sequence-opt4`).html(`<option value='0'>SEQUENCE</option>`);
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
      $(`#${val} #sequence-opt4`).append(
        `<option value="${(manDataSeqListL.length + 1)}">${inW}</option>`
      );
      $(`#${val} #sequence-opt4`).val(index + 1);
    });
    manDataSeqListL.push(pid);
    if (manDataSeqListL.length == 1) {
      $(`#${pid} #sequence-opt4`).html(`<option value='1'>FIRST</option>`);
    }
    else {
      $(`#${pid} #sequence-opt4`).html($(`#${manDataSeqListL[0]} #sequence-opt4`).html());
    }
    $(`#${pid} #sequence-opt4`).val(manDataSeqListL.length);
  }
}
function manDataResetValueR(e) {
  let pid = $(e).parent().parent().parent().parent().attr("id");
  if ($(`#${pid} #sequence-opt4`).length == 0) return true;
  if (e.checked == false) {
    $(`#${pid} input, #${pid} select`).val("");
    manDataSeqListR = manDataSeqListR.filter(function (id) {
      $(`#${id} #sequence-opt4`).children(`option:last-child`).remove();
      return pid != id;
    });
    manDataSeqListR.forEach(function (val, index) {
      $(`#${val} #sequence-opt4`).val(index + 1);
    });
    $(`#${pid} #sequence-opt4`).html(`<option value='0'>SEQUENCE</option>`);
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
      $(`#${val} #sequence-opt4`).append(
        `<option value="${(manDataSeqListR.length + 1)}">${inW}</option>`
      );
      $(`#${val} #sequence-opt4`).val(index + 1);
    });
    manDataSeqListR.push(pid);
    if (manDataSeqListR.length == 1) {
      $(`#${pid} #sequence-opt4`).html(`<option value='1'>FIRST</option>`);
    }
    else {
      $(`#${pid} #sequence-opt4`).html($(`#${manDataSeqListR[0]} #sequence-opt4`).html());
    }
    $(`#${pid} #sequence-opt4`).val(manDataSeqListR.length);
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
    $(`#${manDataSeqListL[index]} #sequence-opt4`).val(index + 1);
    $(`#${pid} #sequence-opt4`).val(val);
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
    $(`#${manDataSeqListR[index]} #sequence-opt4`).val(index + 1);
    $(`#${pid} #sequence-opt4`).val(val);
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
            <input class="date-pick-style-sample4" type="text" id="datepicker_op41"/>
            <i class="far fa-calendar-alt icon-sample4"></i>
          </div>
        </div>
        <div class="width-input-group-35">
          <div class="input-section-sample4 left-side-input">
            <input class="date-pick-style-sample4" type="text" id="datepicker_op42"/>
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
    $("#datepicker_op41").datepicker();
    $("#datepicker_op41").datepicker("option", "dateFormat", "DD, MM d, yy");

    $("#datepicker_op42").datepicker();
    $("#datepicker_op42").datepicker("option", "dateFormat", "DD, MM d, yy");
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
// Manage Data Opt 4 Sample 4 End