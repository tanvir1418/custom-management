function resetContactFormFields() {
    let contactFormInputs = $(".contact-sp-container .custom-input-only input");
    for (i = 0; i < contactFormInputs.length; i++) {
        contactFormInputs[i].value = "";
    }
    document.querySelector(".contact-sp-container .sp-textbox textarea").value = "";
}

// Task Status Table Dynamic Implement

// Manage Alert Table Existing Pagination Start
let taskStatusData = [];
const taskStatuses = ["Cancelled", "Pending", "In-Progress", "Completed"];

for (let i = 1; i <= 100; i++) {

    const randomStatus = taskStatuses[Math.floor(Math.random() * taskStatuses.length)];
    let randomProgress = 35;
    let randomStatusColor = "st-pending";

    if (randomStatus == "Cancelled") {
        randomProgress = 0;
        randomStatusColor = "st-cancelled";
    } else if (randomStatus == "Pending") {
        randomProgress = Math.floor(Math.random() * 39) + 1;
        randomStatusColor = "st-pending";
    } else if (randomStatus == "In-Progress") {
        randomProgress = Math.floor(Math.random() * 59) + 40;
        randomStatusColor = "st-inProgress";
    } else {
        randomProgress = 100;
        randomStatusColor = "st-completed";
    }

    // console.log(`Status: ${randomStatus}, Progress: ${randomProgress}`);

    taskStatusData.push({
        id: `md-ex-${i}`,
        serial: i,
        name: `Name ${i} Goes Here...`,
        status: randomStatus,
        statusClass: randomStatusColor,
        progressValue: randomProgress,
        startTime: {
            date: "01/01/2021",
            time: "12:36 AM",
        },
        endTime: {
            date: "03/01/2021",
            time: "12:40 AM",
        },
    });
}

function taskStatusHead(tableID) {
    let tableHead = `<th class="">ROW</th>
        <th class="">NAME
          <span class="tooltip-container" tooltip="Sample text here" flow="down">
            <i class="fas fa-question-circle"></i>
          </span>
            <div class="head-filter cross-exists">
                <i class="fas fa-times"></i>
            </div>
            <div class="drop-filter">
                <i class="fas fa-caret-down"></i>
            </div>
        </th>
        <th class="">STATUS
          <span class="tooltip-container" tooltip="Sample text here" flow="down">
            <i class="fas fa-question-circle"></i>
          </span>
            <div class="head-filter cross-exists">
                <i class="fas fa-times"></i>
            </div>
            <div class="drop-filter">
                <i class="fas fa-caret-down"></i>
            </div>
        </th>
        <th class="">PROGRESS
          <span class="tooltip-container" tooltip="Sample text here" flow="down">
            <i class="fas fa-question-circle"></i>
          </span>
            <div class="head-filter cross-exists">
                <i class="fas fa-times"></i>
            </div>
            <div class="drop-filter">
                <i class="fas fa-caret-down"></i>
            </div>
        </th>
        <th class="">START TIME
          <span class="tooltip-container" tooltip="Sample text here" flow="down">
            <i class="fas fa-question-circle"></i>
          </span>
            <div class="head-filter cross-exists">
                <i class="fas fa-times"></i>
            </div>
            <div class="drop-filter">
                <i class="fas fa-caret-down"></i>
            </div>
        </th>
        <th class="">END TIME
          <span class="tooltip-container" tooltip="Sample text here" flow="down">
            <i class="fas fa-question-circle"></i>
          </span>
            <div class="head-filter cross-exists">
                <i class="fas fa-times"></i>
            </div>
            <div class="drop-filter">
                <i class="fas fa-caret-down"></i>
            </div>
        </th>
        <th class="">ACTIONS
          <span class="tooltip-container" tooltip="Sample text here" flow="down">
            <i class="fas fa-question-circle"></i>
          </span>
          </th>`;

    $(`#${tableID} thead`).html(tableHead);
}

function taskStatusTableExist(tableID, noRow, pagiId) {
    let options = {
        dataSource: taskStatusData,
        pageSize: noRow,
        showGoInput: true,
        showGoButton: true,
        callback: function (data, pagination) {
            let tableTr = "";
            data.forEach(({ id, serial, name, status, statusClass, progressValue, startTime, endTime }, index) => {
                let tabHd = $(`#${tableID} thead th`);
                let len = tabHd.length;
                let classList = [];
                for (let i = 1; i < len - 1; i++) {
                    classList.push(tabHd[i].className);
                }
                tableTr += `
                <tr id="${id}">

					<th class="row-data" scope="row">${serial}</th>

                    <td class="records-count ${classList[0]}">
						<p class="alert-exists-data">${name}</p>
					</td>

					<td class="${classList[1]}">
                        <div class="st-status ${statusClass} alert-exists-data">${status}</div>
					</td>

                    <td class="${classList[1]}">
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-valuenow="${progressValue}"
                            aria-valuemin="0" aria-valuemax="100" style="width:${progressValue}%">
                                <span class="alert-exists-data">${progressValue}%</span>
                            </div>
                        </div>
					</td>

					<td class="${classList[2]}">
						<div class="create-date-time date-time-39">
							<p class="alert-exists-data">${startTime.date} ${startTime.time}</p>
						</div>
					</td>

					<td class="${classList[3]}">
						<div class="last-date-time date-time-39">
							<p class="alert-exists-data">${endTime.date} ${endTime.time}</p>
						</div>
					</td>

                    <td class="">
                        <div class="cross-box-89">
                            <div class="deleteTableRow circle_550" data-toggle="modal" data-target="#email_confirm_modal">
                            <i class="fas fa-times"></i>
                            </div>
                        </div>
                    </td>
                </tr>`;
            });

            $(`#${tableID} tbody`).html(tableTr);

        },
    };
    let container = $(`#${pagiId}`);
    container.pagination(options);
}

taskStatusHead("email_task_status_table");
taskStatusTableExist("email_task_status_table", 7, "pagination_task_status");

$("#row_taskStatus").change(function (e) {
    let noRow = e.target.value;
    taskStatusTableExist("email_task_status_table", noRow, "pagination_task_status");
    taskStatusHeadClick("email_task_status_table");
});

// Manage Alert Table Existing Pagination End
function taskStatusHeadClick(tableId) {
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
            let dataP = $(`#${tableId} td:nth-child(${index}) .alert-exists-data`);
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

taskStatusHeadClick("email_task_status_table");

function emailConfirmButton() {
    $('#email_confirm_modal').modal('hide');

    $("#emailThankModal #email_thank_header p").html("THANK YOU");
    $("#emailThankModal #email_thank_details p").html("Your Request has been Successfully Processed");
    $('#emailThankModal').modal('show');

}

$(document).keydown(function (e) {
    let emailConfirm = window.getComputedStyle(document.querySelector('#email_confirm_modal'));
    let emailThankYou = window.getComputedStyle(document.querySelector('#emailThankModal'));

    if (e.which == 27 && emailConfirm.display == "block" && emailThankYou.display == "none") {
        $('#email_confirm_modal').modal('hide');

        $("#emailThankModal #email_thank_header p").html("CANCELLATION");
        $("#emailThankModal #email_thank_details p").html("The Request has been Canceled!");
        $('#emailThankModal').modal('show');
    }
});

// Universal Thank Draft Modal (on show/hide event)
$('#emailThankModal').on('show.bs.modal', function (e) {
    $('body').addClass("modal-force-open");
}).on('hide.bs.modal', function (e) {
    $('body').removeClass("modal-force-open");
})

// This Function will trigger when col8Filter is closed
$('#dropBtnModal').on('hidden.bs.modal', function (e) {
    $("i.fa-caret-down.down-animation-icon").removeClass("down-animation-icon");
});