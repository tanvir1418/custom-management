function createDynamicTabRow(dynamicThis){
    
    let dynamicTabTitle = dynamicThis.id;
    let dynamicTabToolTip = dynamicThis.attributes[4].textContent;
    let dynamicTabBtnId = `btn_${dynamicTabTitle.substring(3)}`;
    let dynamicTabContentId = `content_${dynamicTabTitle.substring(3)}`;
    // console.dir(dynamicThis);
    // console.log("Tab Tooltip: " + dynamicThis.attributes[4].textContent);
    // console.log("Tab Title: " + dynamicThis.id);
    $("#chartPage .chart-page-tab").append(
        `<button class="tablink" onclick="openTabPage('${dynamicTabContentId}', this)" tooltip="${dynamicTabToolTip}" flow="down" id="${dynamicTabBtnId}">${dynamicTabTitle} 
            <span class="grey-cross-box" tooltip="Click to Delete" flow="down" onclick="deleteDynamicTab(this)">
                <i class="fas fa-times"></i>
            </span>
        </button>`);
    $("#chartPage").append(`
    <div id="${dynamicTabContentId}" class="tabcontent" style="height: 1000px; width: 100%; background: red;">
        
    </div>`);
    handlingClickOnMainDynamicTab();

    // Directly Active The Dynamic Tab
    // openTabPage(`${dynamicTabContentId}`, this);
    // $(".tablink").removeClass("active-tab-81");
    // $(`#${dynamicTabBtnId}`).addClass("active-tab-81");
}