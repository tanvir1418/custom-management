let tableData = [];
$("#exelFile").change((e) => {
  let recExelFile = e.target.files[0];
  if (recExelFile) {
    const fileReader = new FileReader();
    fileReader.readAsBinaryString(recExelFile);
    fileReader.onload = (e) => {
      let wb = XLSX.read(e.target.result, { type: "binary" });
      const sheet = wb.SheetNames[0];
      if (wb && sheet) {
        tableData = XLSX.utils.sheet_to_json(wb.Sheets[sheet]);
        manResPagination(7);
      }
    };
  }
});

function manResPagination(noRow) {
  let options = {
    dataSource: tableData,
    pageSize: noRow,
    showGoInput: true,
    showGoButton: true,
    callback: function (data, pagination) {
      let tableTr = "";
      data.forEach(csvD => {
        // Status Column
        let sts = csvD[" Status"];
        let { status, checkSts, designClass } = fnStatus(sts);
        // Val1 & Val2 Column
        let val1 = parseFloat(csvD.Val1).toFixed(2);
        let classV1 = fnVal(val1);
        let val2 = parseFloat(csvD.Val2).toFixed(2);
        let classV2 = fnVal(val2);
        //Val11+DateL
        let Val11 = csvD.MaP;
        let { time: timeL, date: dateL } = ExcelDateToJSDate(csvD.MaPDT);
        //Val11+DateL
        let Val12 = csvD.LoP;
        let { time: timeH, date: dateH } = ExcelDateToJSDate(csvD.LoPDT);
        // Chart 1 & 2
        let end = csvD.End;
        let start = csvD.Start;
        let { days: daysG, hours: hoursG, mins: minsG } = dateDiffInDays(csvD.MaPDT, start);
        let { days: daysR, hours: hoursR, mins: minsR } = dateDiffInDays(csvD.LoPDT, start);
        let difMinG = dateDiffInMins(end, start, csvD.MaPDT);
        let difMinR = dateDiffInMins(end, start, csvD.LoPDT);
        difMinG = difMinG > 100 ? 100 : difMinG;
        difMinR = difMinR > 100 ? 100 : difMinR;
        let styleG = difMinG > 50 ? `left:${100 - difMinG}%` : `right:${difMinG}%`;
        let styleR = difMinR > 50 ? `right:${100 - difMinR}%` : `left:${difMinR}%`;
        // Chart 1 & 2 End
        let u_val = parseFloat(csvD.U_Val).toFixed(2);
        let u_per = parseFloat(csvD["U_%"]).toFixed(2);
        let d_val = parseFloat(csvD.D_Val).toFixed(2);
        let d_per = parseFloat(csvD["D_%"]).toFixed(2);
        let n_val = parseFloat(csvD.N_Val).toFixed(2);
        let n_per = parseFloat(csvD["N_C"]).toFixed(2);

        let AM_COUNT = parseFloat(csvD[" AM COUNT"]).toFixed(2);
        let AN_COUNT = parseFloat(csvD[" AN COUNT"]).toFixed(2);
        let AO_COUNT = parseFloat(csvD[" AO COUNT"]).toFixed(2);
        let AP_COUNT = parseFloat(csvD[" AP COUNT"]).toFixed(2);
        let AQ_COUNT = parseFloat(csvD[" AQ COUNT"]).toFixed(2);
        let AR_COUNT = parseFloat(csvD[" AR COUNT"]).toFixed(2);
        let AS_Count = parseFloat(csvD[" AS Count"]).toFixed(2);
        let AT_Count = parseFloat(csvD[" AT Count"]).toFixed(2);
        let AU_Count = parseFloat(csvD[" AU Count"]).toFixed(2);
        let AV_Count = parseFloat(csvD[" AV Count"]).toFixed(2);
        let AW_COUNT = parseFloat(csvD[" AW COUNT"]).toFixed(2);
        let AX_COUNT = parseFloat(csvD[" AX COUNT"]).toFixed(2);
        let AY_COUNT = parseFloat(csvD[" AY COUNT"]).toFixed(2);
        let AZ_Count = parseFloat(csvD[" AZ Count"]).toFixed(2);
        let BA_Count = parseFloat(csvD[" BA Count"]).toFixed(2);
        let BB_Count = parseFloat(csvD[" BB Count"]).toFixed(2);
        let BC_Count = parseFloat(csvD[" BC Count"]).toFixed(2);
        let BD_Count = parseFloat(csvD[" BD Count"]).toFixed(2);
        let BE_count = parseFloat(csvD[" BE count"]).toFixed(2);
        let BF_COUNT = parseFloat(csvD[" BF COUNT"]).toFixed(2);
        let BG_COUNT = parseFloat(csvD[" BG COUNT"]).toFixed(2);
        let BH_COUNT = parseFloat(csvD[" BH COUNT"]).toFixed(2);
        let BI_COUNT = parseFloat(csvD[" BI COUNT"]).toFixed(2);
        let BJ_COUNT = parseFloat(csvD[" BJ COUNT"]).toFixed(2);
        let BK_COUNT = parseFloat(csvD[" BK COUNT"]).toFixed(2);
        let BL_COUNT = parseFloat(csvD[" BL COUNT"]).toFixed(2);
        let BM_COUNT = parseFloat(csvD[" BM COUNT"]).toFixed(2);

        

        let Col2 = parseFloat(csvD.Col2).toFixed(2);
        let Col3 = parseFloat(csvD.Col3).toFixed(2);
        let DP_val = parseFloat(csvD["DP"]).toFixed(2);
        let DY_val = csvD["DY"];
        let DmA = parseFloat(csvD.DmA).toFixed(2);
        let DmP = parseFloat(csvD.DmP).toFixed(2);
        let DmP_per = parseFloat(csvD["DmP%"]).toFixed(2);
        let ID_val = csvD["ID"];
        let LoP_per = parseFloat(csvD["LoP%"]).toFixed(3);
        let M_Val = parseFloat(csvD.M_Val).toFixed(2);
        let MaP_per= parseFloat(csvD["MaP%"]).toFixed(3);

        let { time: timeEnd, date: dateEnd } = ExcelDateToJSDate(csvD.O_End);
        let O_End = `${dateEnd} ${timeEnd}`;
        let { time: timeStart, date: dateStart } = ExcelDateToJSDate(csvD.O_Start);
        let O_Start = `${dateStart} ${timeStart}`;
        
        let SP_val = csvD["SP"];
        let Time_Frame = csvD["Time Frame"];
        let UmA= parseFloat(csvD.UmA).toFixed(2);
        let UmP = parseFloat(csvD.UmP).toFixed(2);
        let UmP_per = parseFloat(csvD["UmP%"]).toFixed(3);
        let Val2S = parseFloat(csvD.Val2S).toFixed(2);
        let Val3S = parseFloat(csvD.Val3S).toFixed(2);
        let Val6 = parseFloat(csvD.Val6).toFixed(2);

        let Description = csvD["Description"];
        let Details3 = csvD["Details3"];
        let Details2 = csvD[" Details2"];

        tableTr +=
        `<tr class="dnd-moved">
          <td>
            <label class="containerst12">
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
          </td>
          <td>
            <div class="icon-box22">
              <div class="circle2box">
                <i class="fas fa-envelope"></i>
              </div>
              <div class="circle2box">
                <i class="fas fa-pen"></i>
              </div>
              <div class="circle2box">
                <i class="fas fa-eye"></i>
              </div>
              <div class="circle2box">
                <i class="fas fa-trash-alt"></i>
              </div>
              <div class="circle2box">
                <svg class="svg1" viewBox="-21 0 512 512">
                  <g>
                    <path
                      d="M406,60h-30v15c0,24.814-20.186,45-45,45H181c-24.814,0-45-20.186-45-45V60h-30c-24.814,0-45,20.186-45,45v360c0,24.814,20.186,47,45,47h300c24.814,0,45-22.186,45-47V105C451,80.186,430.814,60,406,60z M136,450c-8.284,0-15-6.716-15-15c0-8.286,6.716-15,15-15s15,6.714,15,15C151,443.284,144.284,450,136,450z M136,360c-8.284,0-15-6.716-15-15c0-8.286,6.716-15,15-15s15,6.714,15,15C151,353.284,144.284,360,136,360z M136,270c-8.284,0-15-6.716-15-15c0-8.286,6.716-15,15-15s15,6.714,15,15C151,263.284,144.284,270,136,270z M136,180c-8.284,0-15-6.716-15-15c0-8.286,6.716-15,15-15s15,6.714,15,15C151,173.284,144.284,180,136,180z M376,450H196c-8.291,0-15-6.709-15-15c0-8.291,6.709-15,15-15h180c8.291,0,15,6.709,15,15C391,443.291,384.291,450,376,450z M376,360H196c-8.291,0-15-6.709-15-15c0-8.291,6.709-15,15-15h180c8.291,0,15,6.709,15,15C391,353.291,384.291,360,376,360z M376,270H196c-8.291,0-15-6.709-15-15c0-8.291,6.709-15,15-15h180c8.291,0,15,6.709,15,15S384.291,270,376,270z M376,180H196c-8.291,0-15-6.709-15-15s6.709-15,15-15h180c8.291,0,15,6.709,15,15S384.291,180,376,180z"
                    />
                  </g>
                  <g>
                    <path
                      d="M316,30h-28.154l-3.545-9.99C280.053,8.042,268.686,0,256,0c-12.686,0-24.053,8.042-28.301,20.01L224.154,30H196c-16.569,0-30,13.431-30,30v15c0,8.284,6.716,15,15,15h150c8.284,0,15-6.716,15-15V60C346,43.431,332.569,30,316,30z"
                    />
                  </g>
                </svg>
              </div>
              <div class="circle2box">
                <svg class="svg2" viewBox="0 0 24 24">
                  <path
                    d="m12.25 2h-1.1c-.33-1.15-1.39-2-2.65-2s-2.32.85-2.65 2h-1.1c-.41 0-.75.34-.75.75v1.5c0 .96.79 1.75 1.75 1.75h5.5c.96 0 1.75-.79 1.75-1.75v-1.5c0-.41-.34-.75-.75-.75z"
                  />
                  <path
                    d="m14.25 3h-.25v1.25c0 1.52-1.23 2.75-2.75 2.75h-5.5c-1.52 0-2.75-1.23-2.75-2.75v-1.25h-.25c-1.52 0-2.75 1.23-2.75 2.75v12.5c0 1.52 1.23 2.75 2.75 2.75h7.38l.22-1.23c.1-.56.36-1.06.76-1.47l.8-.8h-8.16c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.5c.05 0 .09 0 .14.02h.01l3.6-3.6v-6.67c0-1.52-1.23-2.75-2.75-2.75zm-1 11.25h-9.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.5c.41 0 .75.34.75.75s-.34.75-.75.75zm0-3.25h-9.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.5c.41 0 .75.34.75.75s-.34.75-.75.75z"
                  />
                  <path
                    d="m12.527 24c-.197 0-.389-.078-.53-.22-.173-.173-.251-.419-.208-.661l.53-3.005c.026-.151.1-.291.208-.4l7.425-7.424c.912-.914 1.808-.667 2.298-.177l1.237 1.237c.683.682.683 1.792 0 2.475l-7.425 7.425c-.108.109-.248.182-.4.208l-3.005.53c-.043.008-.087.012-.13.012zm3.005-1.28h.01z"
                  />
                </svg>
              </div>
              <div class="circle2box">
                <svg class="svg3" viewBox="0 0 24 24">
                  <path
                    d="m4 6.75c0-2.619 2.131-4.75 4.75-4.75h9.133c-.329-1.151-1.378-2-2.633-2h-11.5c-1.517 0-2.75 1.233-2.75 2.75v15.5c0 1.517 1.233 2.75 2.75 2.75h.25z"
                  />
                  <path
                    d="m20.25 4h-11.5c-1.517 0-2.75 1.233-2.75 2.75v14.5c0 1.517 1.233 2.75 2.75 2.75h11.5c1.517 0 2.75-1.233 2.75-2.75v-14.5c0-1.517-1.233-2.75-2.75-2.75zm-2 17h-7.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h7.5c.414 0 .75.336.75.75s-.336.75-.75.75zm0-4h-7.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h7.5c.414 0 .75.336.75.75s-.336.75-.75.75zm0-3.5h-7.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h7.5c.414 0 .75.336.75.75s-.336.75-.75.75zm0-4h-7.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h7.5c.414 0 .75.336.75.75s-.336.75-.75.75z"
                  />
                </svg>
              </div>
              <div class="circle2box">
                <svg class="svg4" viewBox="0 0 512.007 512.007">
                  <g>
                    <path
                      d="m142 143.003h139v-143c-49.379 0-107.674 0-154 0v128c0 8.271 6.729 15 15 15z"
                    />
                    <path
                      d="m345 128.003v-128c-9.97 0-21.461 0-34 0v143h19c8.271 0 15-6.729 15-15z"
                    />
                    <path d="m127 512.003h218v-161h-218z" />
                    <path
                      d="m511.927 126.537c-.279-2.828-1.38-5.667-3.315-8.027-.747-.913 6.893 6.786-114.006-114.113-2.882-2.882-6.794-4.396-10.612-4.394-.789 0-3.925 0-8.995 0v128c0 24.813-20.187 45-45 45-14.028 0-186.064 0-188 0-24.813 0-45-20.187-45-45v-128c-29.589 0-49.82 0-52 0-24.813 0-45 20.187-45 45v422c0 24.813 20.187 45 45 45h52c0-10.815 0-201.797 0-210 0-24.813 20.187-45 45-45h188c24.813 0 45 20.187 45 45v210h92c24.813 0 45-20.187 45-45 .001-364.186.041-339.316-.072-340.466z"
                    />
                    <path
                      d="m330 287.003h-188c-8.271 0-15 6.729-15 15v19h218v-19c0-8.271-6.729-15-15-15z"
                    />
                  </g>
                </svg>
              </div>
              <div class="circle2box">
                <svg viewBox="0 0 511.156 511.156">
                  <path
                    d="m184.904 465.044c11.999 27.127 39.154 46.112 70.674 46.112s58.674-18.985 70.674-46.112z"
                  />
                  <path
                    d="m255.573 48.836c20.8 0 40.772 3.67 59.306 10.389v-2.283c0-31.398-25.544-56.942-56.941-56.942h-4.719c-31.398 0-56.942 25.544-56.942 56.942v2.254c18.524-6.699 38.49-10.36 59.296-10.36z"
                  />
                  <path
                    d="m442.747 435.044h-374.338c-7.082 0-13.569-4.776-15.042-11.704-1.458-6.859 1.668-13.629 8.01-16.559 1.505-.976 12.833-8.897 24.174-32.862 20.829-44.01 25.201-106.005 25.201-150.263 0-79.855 64.967-144.82 144.821-144.82 79.665 0 144.512 64.652 144.82 144.245.007.191.011.383.011.575 0 44.258 4.372 106.253 25.201 150.263 11.341 23.965 22.668 31.887 24.174 32.862 6.342 2.93 9.469 9.699 8.01 16.559-1.473 6.927-7.959 11.704-15.042 11.704zm7.2-28.157h.01z"
                  />
                </svg>
              </div>
            </div>
          </td>
          <td class="status22">
            <div class="inner_con ${designClass}">
              <div class="status22-centerize centerizeany">
                <p class="mr-tableData">${checkSts == "Ended" ? checkSts : checkSts + " In"}</p>
                <p>${checkSts == "Ended" ? "" : status}</p>
              </div>
            </div>
          </td>
          <td class="${classV1}">
            <div class="column-time">
              <div class="centerauto">
                <span class="dis_time22 mr-tableData">${val1}</span>
              </div>
            </div>
          </td>
          <td class="${classV2}">
            <div class="column-time">
              <div class="centerauto">
                <span class="dis_time22 mr-tableData">${val2}</span>
              </div>
            </div>
          </td>
          <td class="vall11_datel">
            <div class="val11">
              <p class="centerizeany mr-tableData">${Val11}</p>
            </div>
            <div class="date_reco">
              <div class="date_reco_center centerizeany">
                <span>${timeL}</span>
                <span>${dateL}</span>
              </div>
            </div>
          </td>
          <td class="vall11_datel">
            <div class="val11 red-white">
              <p class="centerizeany mr-tableData">${Val12}</p>
            </div>
            <div class="date_reco">
              <div class="date_reco_center centerizeany">
                <span>${timeH}</span>
                <span>${dateH}</span>
              </div>
            </div>
          </td>
          <td class="dchart_1">
            <div class="upper_part_22">
              <div class="uddleft">
                <p class="centerizeany">${daysG} D : ${hoursG} H : ${minsG} M</p>
                <div class="arrow_bx8 centerizeany">
                  <i class="fas fa-long-arrow-alt-up centerizeany"></i>
                </div>
              </div>
              <div class="uddright">
                <p class="centerizeany mr-tableData">${Val11}</p>
              </div>
            </div>
            <div class="upper_part_22 dwnlong">
              <div class="uddleft">
                <p class="centerizeany">${daysR} D : ${hoursR} H : ${minsR} M</p>
                <div class="arrow_bx8 centerizeany">
                  <i class="fas fa-long-arrow-alt-down centerizeany"></i>
                </div>
              </div>
              <div class="uddright">
                <p class="centerizeany mr-tableData">${Val12}</p>
              </div>
            </div>
          </td>
          <td class="pentagon">
            <div class="upper-penta-box">
              <div class="shape_penagon" style="${styleG}">
                <div class="top-num">
                  <p class="mr-tableData">${Val11}</p>
                </div>
                <div class="penta-count">
                  <p class="d-date">${daysG} D</p>
                  <p class="h-hour">${hoursG} H</p>
                  <p class="m-minuit">${minsG} M</p>
                </div>
              </div>
            </div>
            <div class="lower-penta-box">
              <div class="shape_penagon" style="${styleR}">
                <div class="top-num">
                  <p class="mr-tableData">${Val12}</p>
                </div>
                <div class="penta-count">
                  <p class="d-date">${daysR} D</p>
                  <p class="h-hour">${hoursR} H</p>
                  <p class="m-minuit">${minsR} M</p>
                </div>
              </div>
            </div>
          </td>
          <td class="col_00 green-white">
            <p class="centerizeany mr-tableData">${u_val}</p>
          </td>
          <td class="col_00 green-white">
            <p class="centerizeany mr-tableData">${u_per}</p>
          </td>
          <td class="col_00 red-white">
            <p class="centerizeany mr-tableData">${d_val}</p>
          </td>
          <td class="col_00 red-white">
            <p class="centerizeany mr-tableData">${d_per}</p>
          </td>
          <td class="col_00 grey-white">
            <p class="centerizeany mr-tableData">${n_val}</p>
          </td>
          <td class="col_00 grey-white">
            <p class="centerizeany mr-tableData">${n_per}</p>
          </td>
          <td class="col_00">
            <p class="centerizeany mr-tableData">${AM_COUNT}</p>
          </td>
          <td class="col_00">
            <p class="centerizeany mr-tableData">${AN_COUNT}</p>
          </td>
          <td class="col_00">
            <p class="centerizeany mr-tableData">${AO_COUNT}</p>
          </td>
          <td class="col_00">
            <p class="centerizeany mr-tableData">${AP_COUNT}</p>
          </td>
          <td class="col_00">
            <p class="centerizeany mr-tableData">${AQ_COUNT}</p>
          </td>
          <td class="col_00">
            <p class="centerizeany mr-tableData">${AR_COUNT}</p>
          </td>
          <td class="col_00">
            <p class="centerizeany mr-tableData">${AS_Count}</p>
          </td>
          <td class="col_00">
            <p class="centerizeany mr-tableData">${AT_Count}</p>
          </td>
          <td class="col_00">
            <p class="centerizeany mr-tableData">${AU_Count}</p>
          </td>
          <td class="col_00">
            <p class="centerizeany mr-tableData">${AV_Count}</p>
          </td>
          <td class="col_00">
            <p class="centerizeany mr-tableData">${AW_COUNT}</p>
          </td>
          <td class="col_00">
            <p class="centerizeany mr-tableData">${AX_COUNT}</p>
          </td>
          <td class="col_00">
            <p class="centerizeany mr-tableData">${AY_COUNT}</p>
          </td>
          <td class="col_00">
            <p class="centerizeany mr-tableData">${AZ_Count}</p>
          </td>
          <td class="col_00">
            <p class="centerizeany mr-tableData">${BA_Count}</p>
          </td>
          <td class="col_00">
            <p class="centerizeany mr-tableData">${BB_Count}</p>
          </td>
          <td class="col_00">
            <p class="centerizeany mr-tableData">${BC_Count}</p>
          </td>
          <td class="col_00">
            <p class="centerizeany mr-tableData">${BD_Count}</p>
          </td>
          <td class="col_00">
            <p class="centerizeany mr-tableData">${BE_count}</p>
          </td>
          <td class="col_00">
            <p class="centerizeany mr-tableData">${BF_COUNT}</p>
          </td>
          <td class="col_00">
            <p class="centerizeany mr-tableData">${BG_COUNT}</p>
          </td>
          <td class="col_00">
            <p class="centerizeany mr-tableData">${BH_COUNT}</p>
          </td>
          <td class="col_00">
            <p class="centerizeany mr-tableData">${BI_COUNT}</p>
          </td>
          <td class="col_00">
            <p class="centerizeany mr-tableData">${BJ_COUNT}</p>
          </td>
          <td class="col_00">
            <p class="centerizeany mr-tableData">${BK_COUNT}</p>
          </td>
          <td class="col_00">
            <p class="centerizeany mr-tableData">${BL_COUNT}</p>
          </td>
          <td class="col_00">
            <p class="centerizeany mr-tableData">${BM_COUNT}</p>
          </td>

          <td class="col_00">
            <p class="centerizeany mr-tableData">${Col2}</p>
          </td>
          <td class="col_00">
            <p class="centerizeany mr-tableData">${Col3}</p>
          </td>
          <td class="col_00">
            <p class="centerizeany mr-tableData">${DP_val}</p>
          </td>
          <td class="col_00">
            <p class="centerizeany mr-tableData">${DY_val}</p>
          </td>
          <td class="col_00">
            <p class="centerizeany mr-tableData">${DmA}</p>
          </td>
          <td class="col_00">
            <p class="centerizeany mr-tableData">${DmP}</p>
          </td>
          <td class="col_00">
            <p class="centerizeany mr-tableData">${DmP_per}</p>
          </td>
          <td class="col_00">
            <p class="centerizeany mr-tableData">${ID_val}</p>
          </td>
          <td class="col_00">
            <p class="centerizeany mr-tableData">${LoP_per}</p>
          </td>
          <td class="col_00">
            <p class="centerizeany mr-tableData">${M_Val}</p>
          </td>
          <td class="col_00">
            <p class="centerizeany mr-tableData">${MaP_per}</p>
          </td>
          <td class="col_00">
            <p class="centerizeany mr-tableData">${O_End}</p>
          </td>
          <td class="col_00">
            <p class="centerizeany mr-tableData">${O_Start}</p>
          </td>
          <td class="col_00">
            <p class="centerizeany mr-tableData">${SP_val}</p>
          </td>
          <td class="col_00">
            <p class="centerizeany mr-tableData"style="position: relative;">${Time_Frame}</p>
          </td>
          <td class="col_00">
            <p class="centerizeany mr-tableData">${UmA}</p>
          </td>
          <td class="col_00">
            <p class="centerizeany mr-tableData">${UmP}</p>
          </td>
          <td class="col_00">
            <p class="centerizeany mr-tableData">${UmP_per}</p>
          </td>
          <td class="col_00">
            <p class="centerizeany mr-tableData">${Val2S}</p>
          </td>
          <td class="col_00">
            <p class="centerizeany mr-tableData">${Val3S}</p>
          </td>
          <td class="col_00">
            <p class="centerizeany mr-tableData">${Val6}</p>
          </td>
          <td class="col_00">
            <p class="centerizeany mr-tableData" style="position: relative;left: 55%;top: 25%;">${Description}</p>
          </td>
          <td class="col_00">
            <p class="centerizeany mr-tableData" style="position: relative;left: 55%;top: 25%;">${Details3}</p>
          </td>
          <td class="col_00">
            <p class="centerizeany mr-tableData" style="position: relative;left: 55%;top: 25%;">${Details2}</p>
          </td>


        </tr>`;
      });
      let style1Table = $("#resizable554 tbody");
      style1Table.html(tableTr);
      // Code added by Tanvir 
      $(".right-slider5").css("display", "block");
      $(".left-slider5").css("display", "block");
      $("#pagination-man-res-table .width-row-go").css("display", "block");
    }
  }
  let container = $("#pagination-man-res-table");
  container.pagination(options);
}

$("#res-row-no7").change(function (e) {
  let noRow = e.target.value;
  manResPagination(noRow);
});

function fnStatus(sts) {
  let status = sts.replace("days,", "D :").replace("hours,", "H :").replace("minutes", "M");
  let checkSts = status.split(" ")[0].trim();
  status = status.replace(checkSts + " in ", "").trim();
  let designClass = checkSts == "Ended" ? "red-white" :
    checkSts == "Starting" ? "yellow-black" :
    checkSts == "Ending" ? "green-white" : "";
  return { status, checkSts, designClass };
}

function fnVal(dataV) {
  let classV = dataV < 0 ? "red-white" : "green-white";
  return classV;
}

function ExcelDateToJSDate(serial) {
  let utc_days = Math.floor(serial - 25569);
  let utc_value = utc_days * 86400;
  let date_info = new Date(utc_value * 1000);
  let fractional_day = serial - Math.floor(serial) + 0.0000001;
  let total_seconds = Math.floor(86400 * fractional_day);
  let seconds = total_seconds % 60;
  total_seconds -= seconds;
  let hours = Math.floor(total_seconds / (60 * 60));
  let minutes = Math.floor(total_seconds / 60) % 60;
  let am_pm = hours >= 12 ? "PM" : "AM";
  hours = hours > 12 ? hours - 12 : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  return {
    time: hours + ":" + minutes + " " + am_pm,
    date: date_info.getDate() + "/" + (date_info.getMonth()+1) + "/" + date_info.getFullYear()
  }
}

function excelToJSDate(serial) {
  let utc_days = Math.floor(serial - 25569);
  let utc_value = utc_days * 86400;
  let date_info = new Date(utc_value * 1000);
  let fractional_day = serial - Math.floor(serial) + 0.0000001;
  let total_seconds = Math.floor(86400 * fractional_day);
  let seconds = total_seconds % 60;
  total_seconds -= seconds;
  let hours = Math.floor(total_seconds / (60 * 60));
  let minutes = Math.floor(total_seconds / 60) % 60;
  return Date.UTC(date_info.getFullYear(), date_info.getMonth(), date_info.getDate(), hours, minutes, seconds);
}

function dateDiffInDays(date1, date2) {
  const utc1 = excelToJSDate(date1);
  const utc2 = excelToJSDate(date2);
  let miliSec = (utc1 - utc2);
  const msDay = 24 * 60 * 60 * 1000;
  let days = Math.floor(miliSec / msDay);
  const msHour = 60 * 60 * 1000;
  let hours = Math.floor((miliSec % msDay) / msHour);
  const msMin = 60 * 1000;
  let mins = Math.floor((miliSec % msHour) / msMin);
  return {
    days, hours, mins
  };
}

function dateDiffInMins(date1, date2, date3) {
  const utc1 = excelToJSDate(date1);
  const utc2 = excelToJSDate(date2);
  const utc3 = excelToJSDate(date3);
  let miliSec = (utc1 - utc2);
  const msMin = 60 * 1000;
  let mins = Math.floor(miliSec / msMin);
  const msHour = 60 * 60 * 1000;
  let mins2 = Math.floor((utc3 % msHour) / msMin);
  return ((mins - mins2) / mins2).toFixed(2);
}