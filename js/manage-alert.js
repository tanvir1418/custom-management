// Manage Alert Table Existing Pagination Start
let alertExistData = [];

for (let i = 1; i <= 100; i++) {
  alertExistData.push({
    id: `md-ex-${i}`,
    serial: i,
    savedName: `Sample 1234${i}`
  });
}

function makeTableHeadAlert(tableID) {
  let tableHead = 
      `<th class="">ROW</th>
        <th class="">ALERT TYPE
            <div class="head-filter cross-exists">
                <i class="fas fa-times"></i>
            </div>
            <div class="drop-filter">
                <i class="fas fa-caret-down"></i>
            </div>
        </th>
        <th class="">ALERT VALUE
            <div class="head-filter cross-exists">
                <i class="fas fa-times"></i>
            </div>
            <div class="drop-filter">
                <i class="fas fa-caret-down"></i>
            </div>
        </th>
        <th class="">ALERT FREQUENCY
            <div class="head-filter cross-exists">
                <i class="fas fa-times"></i>
            </div>
            <div class="drop-filter">
                <i class="fas fa-caret-down"></i>
            </div>
        </th>
        <th class="">ALERT METHOD
            <div class="head-filter cross-exists">
                <i class="fas fa-times"></i>
            </div>
            <div class="drop-filter">
                <i class="fas fa-caret-down"></i>
            </div>
        </th>
        <th class="">ACTIONS</th>`;

    $(`#${tableID} thead`).html(tableHead);

}

function alertTableExist(tableID, noRow, pagiId) {
  let options = {
    dataSource: alertExistData,
    pageSize: noRow,
    showGoInput: true,
    showGoButton: true,
    callback: function (data, pagination) {
      let tableTr = "";
      data.forEach(({ id, serial, savedName }, index) => {
          let tabHd = $(`#${tableID} thead th`);
          let len = tabHd.length;
          let classList = [];
          for (let i = 1; i < len - 1; i++) {
            classList.push(tabHd[i].className);
          }
          tableTr += `<tr id="${id}">
					<th class="row-data" scope="row">${serial}</th>
          <td class="selectaltype ${classList[0]}">
              <select name="" id="">
                  <option value="">Precent Change Greather...</option>
                  <option value="">Precent Change Greather...</option>
                  <option value="">Precent Change Greather...</option>
                  <option value="">Precent Change Greather...</option>
              </select>
              <div class="selectarrow">
                  <i class="fas fa-caret-down"></i>
              </div>
          </td>
					<td class="${classList[1]} inpalertval">
						<!-- <input class="save-name mn-exists-data" value="${savedName}" type="text" /> -->
            <input type="text">
					</td>
					
          <td class="${classList[2]} selectalfreq">
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
					
          <td class="${classList[3]} inpumail">
              <div class="mail_enter">
                  <div class="mail_icons">
                      <i class="fas fa-envelope"></i>
                      <i class="fas fa-phone-alt"></i>
                      <i class="fas fa-comment-alt"></i>
                  </div>
                  <!-- <input class="save-name mn-exists-data" value="${savedName}" type="text" /> -->
                  <input type="email" placeholder="Enter a Email Address">
              </div>
          </td>
					
					<td class="removenull">
              <div class="reset-save-btn">
                  <button class="reset4" type="button" id="resetAlertS2">Reset</button>
                  <button class="save4" type="button">Save</button>
              </div>
              <div class="circle_550 plus89">
                  <i class="fas fa-plus"></i>
              </div>
              <div class="circle_550">
                  <i class="fas fa-times"></i>
              </div>
          </td>
				</tr>`;
        }
      );
      $(`#${tableID} tbody`).html(tableTr);
    },
  };
  let container = $(`#${pagiId}`);
  container.pagination(options);
}

makeTableHeadAlert("manage-alert-table-exist");
alertTableExist("manage-alert-table-exist",7,"pagination-manage-alert");

$("#row-mnAlert").change(function (e) {
  let noRow = e.target.value;
  alertTableExist("manage-alert-table-exist",noRow,"pagination-manage-alert");
  alertTableHeadClick("manage-alert-table-exist");
});

// Manage Alert Table Existing Pagination End
function alertTableHeadClick(tableId) {
  $(`#${tableId} th`).click(function (e) {
    let target = e.target;
    let index = $(this).index() + 1;
    if (target.tagName === "I") {
      target = target.parentNode;
    }
    let regex = /cross/g;
    let regexD = /drop-filter/g;
    if (target.tagName === "DIV" && regex.test(target.className)) {
      $(`#${tableId} th:nth-child(${index})`).addClass("th-dis-none");
      $(`#${tableId} td:nth-child(${index})`).addClass("th-dis-none");
    } else if (target.tagName === "DIV" && regexD.test(target.className)) {
      let dataP = $(`#${tableId} td:nth-child(${index}) .mn-exists-data`);
      // console.log(dataP);
      let headingPop = $(`#${tableId} th:nth-child(${index})`)[0].textContent;
      $(`#${tableId} th:nth-child(${index}) .drop-filter .fa-caret-down`).addClass("down-animation-icon");

      $("#dropBtnModal #mnExistsThPop").html(headingPop);
      let targetModal = $("#dropBtnModal #checkbox-table-exist tbody");
      const dataC = new Set();
      for (let i = 0; i < dataP.length; i++) {
        if (dataP[i].tagName == "INPUT") {
          dataC.add(dataP[i].value);
        } else {
          dataC.add(dataP[i].textContent);
        }
        // console.log(dataP[i].tagName);
      }
      let tableTr = "";
      for (const item of dataC) {
        tableTr += `<tr>
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
      $("#dropBtnModal .modal-dialog").css({
        top: e.clientY + 15,
        left: e.clientX - 240,
      });
      $("#dropBtnModal").modal("toggle");
    }
  });
}

alertTableHeadClick("manage-alert-table-exist");