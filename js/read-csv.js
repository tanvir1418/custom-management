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
				tableHeadSty1();
				manResTableRender();
				manResPagination(7);
				resizableTable1();
				table1HeadClick();

				allHeadTable2Call();
			}
		};
	}
});

function tableHeadSty1() {
	let tHeadTr =
	`<tr class="dnd-moved">
		<th class="column-header-1">
			<label class="containerst12">
				<input type="checkbox" />
				<span class="checkmarkHeader"></span>
			</label>
			<div class="column-header-1-sizer"></div>
		</th>
		<th scope="col" class="column-header-2">
			ICON
			<div class="column-header-2-sizer"></div>
		</th>
		<th scope="col" class="column-header-3">
			STATUS
			<span class="tooltip-container" tooltip="Sample text here" flow="down">
              <i class="fas fa-question-circle"></i>
            </span>
			<div id="cross3" class="head-filter">
				<i class="fas fa-times"></i>
			</div>
			<div class="drop-filter">
				<i class="fas fa-caret-down"></i>
			</div>
			<div class="column-header-3-sizer"></div>
		</th>
		<th scope="col" class="column-header-4">
			Val1
			<span class="tooltip-container" tooltip="Sample text here" flow="down">
              <i class="fas fa-question-circle"></i>
            </span>
			<div id="cross4" class="head-filter">
				<i class="fas fa-times"></i>
			</div>
			<div class="drop-filter">
				<i class="fas fa-caret-down"></i>
			</div>
			<div class="column-header-4-sizer"></div>
		</th>
		<th scope="col" class="column-header-5">
			Val2
			<span class="tooltip-container" tooltip="Sample text here" flow="down">
              <i class="fas fa-question-circle"></i>
            </span>
			<div id="cross5" class="head-filter">
				<i class="fas fa-times"></i>
			</div>
			<div class="drop-filter">
				<i class="fas fa-caret-down"></i>
			</div>
			<div class="column-header-5-sizer"></div>
		</th>
		<th scope="col" class="column-header-6">
			VAL11+DATEL
			<span class="tooltip-container" tooltip="Sample text here" flow="down">
              <i class="fas fa-question-circle"></i>
            </span>
			<div id="cross6" class="head-filter">
				<i class="fas fa-times"></i>
			</div>
			<div class="drop-filter">
				<i class="fas fa-caret-down"></i>
			</div>
			<div class="column-header-6-sizer"></div>
		</th>
		<th scope="col" class="column-header-7">
			VAL12+DATEH
			<span class="tooltip-container" tooltip="Sample text here" flow="down">
              <i class="fas fa-question-circle"></i>
            </span>
			<div id="cross7" class="head-filter">
				<i class="fas fa-times"></i>
			</div>
			<div class="drop-filter">
				<i class="fas fa-caret-down"></i>
			</div>
			<div class="column-header-7-sizer"></div>
		</th>
		<th scope="col" class="column-header-8">
			CHART 1
			<span class="tooltip-container" tooltip="Sample text here" flow="down">
              <i class="fas fa-question-circle"></i>
            </span>
			<div id="cross8" class="head-filter">
				<i class="fas fa-times"></i>
			</div>
			<div class="drop-filter">
				<i class="fas fa-caret-down"></i>
			</div>
			<div class="column-header-8-sizer"></div>
		</th>
		<th scope="col" class="column-header-9">
			CHART2
			<span class="tooltip-container" tooltip="Sample text here" flow="down">
              <i class="fas fa-question-circle"></i>
            </span>
			<div id="cross9" class="head-filter">
				<i class="fas fa-times"></i>
			</div>
			<div class="drop-filter">
				<i class="fas fa-caret-down"></i>
			</div>
			<div class="column-header-9-sizer"></div>
		</th>
		<th scope="col" class="column-header-10">
			U_Val
			<span class="tooltip-container" tooltip="Sample text here" flow="down">
              <i class="fas fa-question-circle"></i>
            </span>
			<div id="cross10" class="head-filter">
				<i class="fas fa-times"></i>
			</div>
			<div class="drop-filter">
				<i class="fas fa-caret-down"></i>
			</div>
			<div class="column-header-10-sizer"></div>
		</th>
		<th scope="col" class="column-header-11">
			U_%
			<span class="tooltip-container" tooltip="Sample text here" flow="down">
              <i class="fas fa-question-circle"></i>
            </span>
			<div id="cross11" class="head-filter">
				<i class="fas fa-times"></i>
			</div>
			<div class="drop-filter">
				<i class="fas fa-caret-down"></i>
			</div>
			<div class="column-header-11-sizer"></div>
		</th>
		<th scope="col" class="column-header-12">
			D_Val
			<span class="tooltip-container" tooltip="Sample text here" flow="right">
              <i class="fas fa-question-circle"></i>
            </span>
			<div id="cross12" class="head-filter">
				<i class="fas fa-times"></i>
			</div>
			<div class="drop-filter">
				<i class="fas fa-caret-down"></i>
			</div>
			<div class="column-header-12-sizer"></div>
		</th>
		<th scope="col" class="column-header-13">
			D_%
			<div id="cross13" class="head-filter">
				<i class="fas fa-times"></i>
			</div>
			<div class="drop-filter">
				<i class="fas fa-caret-down"></i>
			</div>
			<div class="column-header-13-sizer"></div>
		</th>
		<th scope="col" class="column-header-14">
			N_Val
			<div id="cross14" class="head-filter">
				<i class="fas fa-times"></i>
			</div>
			<div class="drop-filter">
				<i class="fas fa-caret-down"></i>
			</div>
			<div class="column-header-14-sizer"></div>
		</th>
		<th scope="col" class="column-header-15">
			N_C
			<div id="cross15" class="head-filter">
				<i class="fas fa-times"></i>
			</div>
			<div class="drop-filter">
				<i class="fas fa-caret-down"></i>
			</div>
			<div class="column-header-15-sizer"></div>
		</th>
		<th scope="col" class="column-header-16">
			AM COUNT
			<div id="cross16" class="head-filter">
				<i class="fas fa-times"></i>
			</div>
			<div class="drop-filter">
				<i class="fas fa-caret-down"></i>
			</div>
			<div class="column-header-16-sizer"></div>
		</th>
		<th scope="col" class="column-header-17">
			AN COUNT
			<div id="cross17" class="head-filter">
				<i class="fas fa-times"></i>
			</div>
			<div class="drop-filter">
				<i class="fas fa-caret-down"></i>
			</div>
			<div class="column-header-17-sizer"></div>
		</th>
		<th scope="col" class="column-header-18">
			AO COUNT
			<div id="cross18" class="head-filter">
				<i class="fas fa-times"></i>
			</div>
			<div class="drop-filter">
				<i class="fas fa-caret-down"></i>
			</div>
			<div class="column-header-18-sizer"></div>
		</th>
		<th scope="col" class="column-header-19">
			AP COUNT
			<div id="cross19" class="head-filter">
				<i class="fas fa-times"></i>
			</div>
			<div class="drop-filter">
				<i class="fas fa-caret-down"></i>
			</div>
			<div class="column-header-19-sizer"></div>
		</th>
		<th scope="col" class="column-header-20">
			AQ COUNT
			<div id="cross20" class="head-filter">
				<i class="fas fa-times"></i>
			</div>
			<div class="drop-filter">
				<i class="fas fa-caret-down"></i>
			</div>
			<div class="column-header-20-sizer"></div>
		</th>
		<th scope="col" class="column-header-21">
			AR COUNT
			<div id="cross21" class="head-filter">
				<i class="fas fa-times"></i>
			</div>
			<div class="drop-filter">
				<i class="fas fa-caret-down"></i>
			</div>
			<div class="column-header-21-sizer"></div>
		</th>
		<th scope="col" class="column-header-22">
			AS COUNT
			<div id="cross22" class="head-filter">
				<i class="fas fa-times"></i>
			</div>
			<div class="drop-filter">
				<i class="fas fa-caret-down"></i>
			</div>
			<div class="column-header-22-sizer"></div>
		</th>
		<th scope="col" class="column-header-23">
			AT COUNT
			<div id="cross23" class="head-filter">
				<i class="fas fa-times"></i>
			</div>
			<div class="drop-filter">
				<i class="fas fa-caret-down"></i>
			</div>
			<div class="column-header-23-sizer"></div>
		</th>
		<th scope="col" class="column-header-24">
			AU COUNT
			<div id="cross24" class="head-filter">
				<i class="fas fa-times"></i>
			</div>
			<div class="drop-filter">
				<i class="fas fa-caret-down"></i>
			</div>
			<div class="column-header-24-sizer"></div>
		</th>
		<th scope="col" class="column-header-25">
			AV COUNT
			<div id="cross25" class="head-filter">
				<i class="fas fa-times"></i>
			</div>
			<div class="drop-filter">
				<i class="fas fa-caret-down"></i>
			</div>
			<div class="column-header-25-sizer"></div>
		</th>
		<th scope="col" class="column-header-26">
			AW COUNT
			<div id="cross26" class="head-filter">
				<i class="fas fa-times"></i>
			</div>
			<div class="drop-filter">
				<i class="fas fa-caret-down"></i>
			</div>
			<div class="column-header-26-sizer"></div>
		</th>
		<th scope="col" class="column-header-27">
			AX COUNT
			<div id="cross27" class="head-filter">
				<i class="fas fa-times"></i>
			</div>
			<div class="drop-filter">
				<i class="fas fa-caret-down"></i>
			</div>
			<div class="column-header-27-sizer"></div>
		</th>
		<th scope="col" class="column-header-28">
			AY COUNT
			<div id="cross28" class="head-filter">
				<i class="fas fa-times"></i>
			</div>
			<div class="drop-filter">
				<i class="fas fa-caret-down"></i>
			</div>
			<div class="column-header-28-sizer"></div>
		</th>
		<th scope="col" class="column-header-29">
			AZ COUNT
			<div id="cross29" class="head-filter">
				<i class="fas fa-times"></i>
			</div>
			<div class="drop-filter">
				<i class="fas fa-caret-down"></i>
			</div>
			<div class="column-header-29-sizer"></div>
		</th>
		<th scope="col" class="column-header-30">
			BA COUNT
			<div id="cross30" class="head-filter">
				<i class="fas fa-times"></i>
			</div>
			<div class="drop-filter">
				<i class="fas fa-caret-down"></i>
			</div>
			<div class="column-header-30-sizer"></div>
		</th>
		<th scope="col" class="column-header-31">
			BB COUNT
			<div id="cross31" class="head-filter">
				<i class="fas fa-times"></i>
			</div>
			<div class="drop-filter">
				<i class="fas fa-caret-down"></i>
			</div>
			<div class="column-header-31-sizer"></div>
		</th>
		<th scope="col" class="column-header-32">
			BC COUNT
			<div id="cross32" class="head-filter">
				<i class="fas fa-times"></i>
			</div>
			<div class="drop-filter">
				<i class="fas fa-caret-down"></i>
			</div>
			<div class="column-header-32-sizer"></div>
		</th>
		<th scope="col" class="column-header-33">
			BD COUNT
			<div id="cross33" class="head-filter">
				<i class="fas fa-times"></i>
			</div>
			<div class="drop-filter">
				<i class="fas fa-caret-down"></i>
			</div>
			<div class="column-header-33-sizer"></div>
		</th>
		<th scope="col" class="column-header-34">
			BE COUNT
			<div id="cross34" class="head-filter">
				<i class="fas fa-times"></i>
			</div>
			<div class="drop-filter">
				<i class="fas fa-caret-down"></i>
			</div>
			<div class="column-header-34-sizer"></div>
		</th>
		<th scope="col" class="column-header-35">
			BF COUNT
			<div id="cross35" class="head-filter">
				<i class="fas fa-times"></i>
			</div>
			<div class="drop-filter">
				<i class="fas fa-caret-down"></i>
			</div>
			<div class="column-header-35-sizer"></div>
		</th>
		<th scope="col" class="column-header-36">
			BG COUNT
			<div id="cross36" class="head-filter">
				<i class="fas fa-times"></i>
			</div>
			<div class="drop-filter">
				<i class="fas fa-caret-down"></i>
			</div>
			<div class="column-header-36-sizer"></div>
		</th>
		<th scope="col" class="column-header-37">
			BH COUNT
			<div id="cross37" class="head-filter">
				<i class="fas fa-times"></i>
			</div>
			<div class="drop-filter">
				<i class="fas fa-caret-down"></i>
			</div>
			<div class="column-header-37-sizer"></div>
		</th>
		<th scope="col" class="column-header-38">
			BI COUNT
			<div id="cross38" class="head-filter">
				<i class="fas fa-times"></i>
			</div>
			<div class="drop-filter">
				<i class="fas fa-caret-down"></i>
			</div>
			<div class="column-header-38-sizer"></div>
		</th>
		<th scope="col" class="column-header-39">
			BJ COUNT
			<div id="cross39" class="head-filter">
				<i class="fas fa-times"></i>
			</div>
			<div class="drop-filter">
				<i class="fas fa-caret-down"></i>
			</div>
			<div class="column-header-39-sizer"></div>
		</th>
		<th scope="col" class="column-header-40">
			BK COUNT
			<div id="cross40" class="head-filter">
				<i class="fas fa-times"></i>
			</div>
			<div class="drop-filter">
				<i class="fas fa-caret-down"></i>
			</div>
			<div class="column-header-40-sizer"></div>
		</th>
		<th scope="col" class="column-header-41">
			BL COUNT
			<div id="cross41" class="head-filter">
				<i class="fas fa-times"></i>
			</div>
			<div class="drop-filter">
				<i class="fas fa-caret-down"></i>
			</div>
			<div class="column-header-41-sizer"></div>
		</th>
		<th scope="col" class="column-header-42">
			BM COUNT
			<div id="cross42" class="head-filter">
				<i class="fas fa-times"></i>
			</div>
			<div class="drop-filter">
				<i class="fas fa-caret-down"></i>
			</div>
			<div class="column-header-42-sizer"></div>
		</th>
		<th scope="col" class="column-header-43">
			Col2
			<div id="cross43" class="head-filter">
				<i class="fas fa-times"></i>
			</div>
			<div class="drop-filter">
				<i class="fas fa-caret-down"></i>
			</div>
			<div class="column-header-43-sizer"></div>
		</th>
		<th scope="col" class="column-header-44">
			Col3
			<div id="cross44" class="head-filter">
				<i class="fas fa-times"></i>
			</div>
			<div class="drop-filter">
				<i class="fas fa-caret-down"></i>
			</div>
			<div class="column-header-44-sizer"></div>
		</th>
		<th scope="col" class="column-header-45">
			DP
			<div id="cross45" class="head-filter">
				<i class="fas fa-times"></i>
			</div>
			<div class="drop-filter">
				<i class="fas fa-caret-down"></i>
			</div>
			<div class="column-header-45-sizer"></div>
		</th>
		<th scope="col" class="column-header-46">
			DY
			<div id="cross46" class="head-filter">
				<i class="fas fa-times"></i>
			</div>
			<div class="drop-filter">
				<i class="fas fa-caret-down"></i>
			</div>
			<div class="column-header-46-sizer"></div>
		</th>
		<th scope="col" class="column-header-47">
			DmA
			<div id="cross47" class="head-filter">
				<i class="fas fa-times"></i>
			</div>
			<div class="drop-filter">
				<i class="fas fa-caret-down"></i>
			</div>
			<div class="column-header-47-sizer"></div>
		</th>
		<th scope="col" class="column-header-48">
			DmP
			<div id="cross48" class="head-filter">
				<i class="fas fa-times"></i>
			</div>
			<div class="drop-filter">
				<i class="fas fa-caret-down"></i>
			</div>
			<div class="column-header-48-sizer"></div>
		</th>
		<th scope="col" class="column-header-49">
			DmP%
			<div id="cross49" class="head-filter">
				<i class="fas fa-times"></i>
			</div>
			<div class="drop-filter">
				<i class="fas fa-caret-down"></i>
			</div>
			<div class="column-header-49-sizer"></div>
		</th>
		<th scope="col" class="column-header-50">
			ID
			<div id="cross50" class="head-filter">
				<i class="fas fa-times"></i>
			</div>
			<div class="drop-filter">
				<i class="fas fa-caret-down"></i>
			</div>
			<div class="column-header-50-sizer"></div>
		</th>
		<th scope="col" class="column-header-51">
			LoP%
			<div id="cross51" class="head-filter">
				<i class="fas fa-times"></i>
			</div>
			<div class="drop-filter">
				<i class="fas fa-caret-down"></i>
			</div>
			<div class="column-header-51-sizer"></div>
		</th>
		<th scope="col" class="column-header-52">
			M_Val
			<div id="cross52" class="head-filter">
				<i class="fas fa-times"></i>
			</div>
			<div class="drop-filter">
				<i class="fas fa-caret-down"></i>
			</div>
			<div class="column-header-52-sizer"></div>
		</th>
		<th scope="col" class="column-header-53">
			MaP%
			<div id="cross53" class="head-filter">
				<i class="fas fa-times"></i>
			</div>
			<div class="drop-filter">
				<i class="fas fa-caret-down"></i>
			</div>
			<div class="column-header-53-sizer"></div>
		</th>
		<th scope="col" class="column-header-54">
			O_End
			<div id="cross54" class="head-filter">
				<i class="fas fa-times"></i>
			</div>
			<div class="drop-filter">
				<i class="fas fa-caret-down"></i>
			</div>
			<div class="column-header-54-sizer"></div>
		</th>
		<th scope="col" class="column-header-55">
			O_Start
			<div id="cross55" class="head-filter">
				<i class="fas fa-times"></i>
			</div>
			<div class="drop-filter">
				<i class="fas fa-caret-down"></i>
			</div>
			<div class="column-header-55-sizer"></div>
		</th>
		<th scope="col" class="column-header-56">
			SP
			<div id="cross56" class="head-filter">
				<i class="fas fa-times"></i>
			</div>
			<div class="drop-filter">
				<i class="fas fa-caret-down"></i>
			</div>
			<div class="column-header-56-sizer"></div>
		</th>
		<th scope="col" class="column-header-57">
			Time Frame
			<div id="cross57" class="head-filter">
				<i class="fas fa-times"></i>
			</div>
			<div class="drop-filter">
				<i class="fas fa-caret-down"></i>
			</div>
			<div class="column-header-57-sizer"></div>
		</th>
		<th scope="col" class="column-header-58">
			UmA
			<div id="cross58" class="head-filter">
				<i class="fas fa-times"></i>
			</div>
			<div class="drop-filter">
				<i class="fas fa-caret-down"></i>
			</div>
			<div class="column-header-58-sizer"></div>
		</th>
		<th scope="col" class="column-header-59">
			UmP
			<div id="cross59" class="head-filter">
				<i class="fas fa-times"></i>
			</div>
			<div class="drop-filter">
				<i class="fas fa-caret-down"></i>
			</div>
			<div class="column-header-59-sizer"></div>
		</th>
		<th scope="col" class="column-header-60">
			UmP%
			<div id="cross60" class="head-filter">
				<i class="fas fa-times"></i>
			</div>
			<div class="drop-filter">
				<i class="fas fa-caret-down"></i>
			</div>
			<div class="column-header-60-sizer"></div>
		</th>
		<th scope="col" class="column-header-61">
			Val2S
			<div id="cross61" class="head-filter">
				<i class="fas fa-times"></i>
			</div>
			<div class="drop-filter">
				<i class="fas fa-caret-down"></i>
			</div>
			<div class="column-header-61-sizer"></div>
		</th>
		<th scope="col" class="column-header-62">
			Val3S
			<div id="cross62" class="head-filter">
				<i class="fas fa-times"></i>
			</div>
			<div class="drop-filter">
				<i class="fas fa-caret-down"></i>
			</div>
			<div class="column-header-62-sizer"></div>
		</th>
		<th scope="col" class="column-header-63">
			Val6
			<div id="cross63" class="head-filter">
				<i class="fas fa-times"></i>
			</div>
			<div class="drop-filter">
				<i class="fas fa-caret-down"></i>
			</div>
			<div class="column-header-63-sizer"></div>
		</th>
		<th scope="col" class="column-header-64">
			Description
			<div id="cross64" class="head-filter">
				<i class="fas fa-times"></i>
			</div>
			<div class="drop-filter">
				<i class="fas fa-caret-down"></i>
			</div>
			<div class="column-header-64-sizer"></div>
		</th>
		<th scope="col" class="column-header-65">
			Details3
			<div id="cross65" class="head-filter">
				<i class="fas fa-times"></i>
			</div>
			<div class="drop-filter">
				<i class="fas fa-caret-down"></i>
			</div>
			<div class="column-header-65-sizer"></div>
		</th>
		<th scope="col" class="column-header-66">
			Details2
			<div id="cross66" class="head-filter">
				<i class="fas fa-times"></i>
			</div>
			<div class="drop-filter">
				<i class="fas fa-caret-down"></i>
			</div>
			<div class="column-header-66-sizer"></div>
		</th>
	</tr>`;
	document.querySelector("#style1Table #resizable554 thead").innerHTML = tHeadTr;

	$("#style1Table").freezeTable({
		'freezeColumn': false,
	});
}

function manResPagination(noRow) {
	let options = {
		dataSource: tableData,
		pageSize: noRow,
		showGoInput: true,
		showGoButton: true,
		callback: function (data, pagination) {
			let tableTr = "";
			let style2TableData = "";
			let tableH = $("#resizable554 thead th");
			let disNone = [];
			data.forEach((csvD) => {
				// Status Column
				let sts = csvD[" Status"];
				let { status, checkSts, designClass } = fnStatus(sts);

				//variable for table style 2 Status design purpose
				let s2_statusClass = "";
				if (checkSts != "Ended") {
					s2_statusClass = "padding__resize__S2Status";
				}
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

				let { days: daysG, hours: hoursG, mins: minsG } = dateDiffInDays(
					csvD.MaPDT,
					start
				);
				let { days: daysR, hours: hoursR, mins: minsR } = dateDiffInDays(
					csvD.LoPDT,
					start
				);

				let diffStartEnd = dateDiffInMins(end, start);
				let difMinGreen = dateDiffInMins(csvD.MaPDT, start);
				let difMinG = (difMinGreen * 100) / diffStartEnd;
				let difMinG_S2 = 0;
				let difMinR_S2 = 0;

				let difMinRed = dateDiffInMins(csvD.LoPDT, start);
				let difMinR = (difMinRed * 100) / diffStartEnd;

				// Normalization For 0 - 100 limit exceed (extra -> values are not exceeding the limit)
				if (difMinG > 100) {
					difMinG = 100;
				} else if (difMinG <= 0) {
					difMinG = 0;
				}

				if (difMinR > 100) {
					difMinR = 100;
				} else if (difMinR <= 0) {
					difMinR = 0;
				}

				difMinG_S2 = difMinG;
				difMinR_S2 = difMinR;

				// Normalization For Style 1 Pentagon Overflow in Left Positioning
				difMinG = difMinG * 0.62;
				difMinR = difMinR * 0.62;

				// Normalization For Style 2 Pentagon Overflow in Left Positioning
				difMinG_S2 = difMinG_S2 * 0.8;
				difMinR_S2 = difMinR_S2 * 0.8;

				// Style 1 Pentagon Red Green Left Positioning
				let styleG = `left:${difMinG}%`;
				let styleR = `left:${difMinR}%`;

				// Style 2 Pentagon Red Green Left Positioning
				let styleG_S2 = `left:${difMinG_S2}%`;
				let styleR_S2 = `left:${difMinR_S2}%`;

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
				let MaP_per = parseFloat(csvD["MaP%"]).toFixed(3);

				let { time: timeEnd, date: dateEnd } = ExcelDateToJSDate(csvD.O_End);
				let O_End = `${dateEnd} ${timeEnd}`;
				let { time: timeStart, date: dateStart } = ExcelDateToJSDate(
					csvD.O_Start
				);
				let O_Start = `${dateStart} ${timeStart}`;

				let SP_val = csvD["SP"];
				let Time_Frame = csvD["Time Frame"];
				let UmA = parseFloat(csvD.UmA).toFixed(2);
				let UmP = parseFloat(csvD.UmP).toFixed(2);
				let UmP_per = parseFloat(csvD["UmP%"]).toFixed(3);
				let Val2S = parseFloat(csvD.Val2S).toFixed(2);
				let Val3S = parseFloat(csvD.Val3S).toFixed(2);
				let Val6 = parseFloat(csvD.Val6).toFixed(2);

				let Description = csvD["Description"];
				let Details3 = csvD["Details3"];
				let Details2 = csvD[" Details2"];

				let tabDataArr = [];
				tabDataArr.push(
					`<td class="column-header-1">
						<label class="containerst12">
							<input type="checkbox" />
							<span class="checkmark"></span>
						</label>
					</td>`
				);
				tabDataArr.push(
					`<td class="column-header-2">
						<div class="icon-box22">
							<div class="circle2box bkmark" tooltip="Click to Add to Bookmarks" flow="down">
								<i class="fas fa-envelope"></i>
							</div>
							<div class="circle2box" tooltip="Click to View Details" flow="down">
								<i class="fas fa-pen"></i>
							</div>
							<div class="circle2box view-modal-click">
								<i class="fas fa-eye"></i>
							</div>
							<div class="circle2box" tooltip="Click to Delete" flow="down">
								<i class="fas fa-trash-alt"></i>
							</div>
							<div class="circle2box row-modal-click">
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
							<div class="circle2box note-modal-click">
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
								<svg class="svg3 copyrowlist-modal-click" viewBox="0 0 24 24">
									<path
										d="m4 6.75c0-2.619 2.131-4.75 4.75-4.75h9.133c-.329-1.151-1.378-2-2.633-2h-11.5c-1.517 0-2.75 1.233-2.75 2.75v15.5c0 1.517 1.233 2.75 2.75 2.75h.25z"
									/>
									<path
										d="m20.25 4h-11.5c-1.517 0-2.75 1.233-2.75 2.75v14.5c0 1.517 1.233 2.75 2.75 2.75h11.5c1.517 0 2.75-1.233 2.75-2.75v-14.5c0-1.517-1.233-2.75-2.75-2.75zm-2 17h-7.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h7.5c.414 0 .75.336.75.75s-.336.75-.75.75zm0-4h-7.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h7.5c.414 0 .75.336.75.75s-.336.75-.75.75zm0-3.5h-7.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h7.5c.414 0 .75.336.75.75s-.336.75-.75.75zm0-4h-7.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h7.5c.414 0 .75.336.75.75s-.336.75-.75.75z"
									/>
								</svg>
							</div>
							<div class="circle2box moverowlist-modal-click">
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
							<div class="circle2box alertswindow-modal-click">
								<svg class="" viewBox="0 0 511.156 511.156">
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
						<div class="column-header-2-resizer"></div>
					</td>`
				);
				tabDataArr.push(
					`<td class="column-header-3 status22">
						<div class="inner_con ${designClass}">
							<div class="status22-centerize centerizeany">
								<p class="mr-tableData">${checkSts == "Ended" ? checkSts : checkSts + " In"}</p>
								<p>${checkSts == "Ended" ? "" : status}</p>
							</div>
						</div>
						<div class="column-header-3-resizer"></div>
					</td>`
				);
				tabDataArr.push(
					`<td class="column-header-4 ${classV1}">
						<div class="column-time">
							<div class="centerauto">
								<span class="dis_time22 mr-tableData">${val1}</span>
							</div>
						</div>
						<div class="column-header-4-resizer"></div>
					</td>`
				);
				tabDataArr.push(
					`<td class="column-header-5 ${classV2}">
						<div class="column-time">
							<div class="centerauto">
								<span class="dis_time22 mr-tableData">${val2}</span>
							</div>
						</div>
						<div class="column-header-5-resizer"></div>
					</td>`
				);
				tabDataArr.push(
					`<td class="column-header-6 vall11_datel">
						<div class="val11">
							<p class="centerizeany mr-tableData">${Val11}</p>
						</div>
						<div class="date_reco">
							<div class="date_reco_center centerizeany">
								<span>${timeL}</span>
								<span>${dateL}</span>
							</div>
						</div>
												<div class="column-header-6-resizer"></div>
					</td>`
				);
				tabDataArr.push(
					`<td class="column-header-7 vall11_datel">
						<div class="val11 red-white">
							<p class="centerizeany mr-tableData">${Val12}</p>
						</div>
						<div class="date_reco">
							<div class="date_reco_center centerizeany">
								<span>${timeH}</span>
								<span>${dateH}</span>
							</div>
						</div>
												<div class="column-header-7-resizer"></div>
					</td>`
				);
				tabDataArr.push(
					`<td class="column-header-8 dchart_1">
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
												<div class="column-header-8-resizer"></div>
					</td>`
				);
				tabDataArr.push(
					`<td class="column-header-9 pentagon">
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
						<div class="column-header-9-resizer"></div>
					</td>`
				);
				tabDataArr.push(
					`<td class="col_00 column-header-10 green-white">
						<p class="centerizeany mr-tableData">${u_val}</p>
						<div class="column-header-10-resizer"></div>
					</td>`
				);
				tabDataArr.push(
					`<td class="col_00 column-header-11 green-white">
						<p class="centerizeany mr-tableData">${u_per}</p>
						<div class="column-header-11-resizer"></div>
					</td>`
				);
				tabDataArr.push(
					`<td class="col_00 column-header-12 red-white">
						<p class="centerizeany mr-tableData">${d_val}</p>
						<div class="column-header-12-resizer"></div>
					</td>`
				);
				tabDataArr.push(
					`<td class="col_00 column-header-13 red-white">
						<p class="centerizeany mr-tableData">${d_per}</p>
						<div class="column-header-13-resizer"></div>
					</td>`
				);
				tabDataArr.push(
					`<td class="col_00 column-header-14 grey-white">
						<p class="centerizeany mr-tableData">${n_val}</p>
						<div class="column-header-14-resizer"></div>
					</td>`
				);
				tabDataArr.push(
					`<td class="col_00 column-header-15 grey-white">
						<p class="centerizeany mr-tableData">${n_per}</p>
						<div class="column-header-15-resizer"></div>
					</td>`
				);
				tabDataArr.push(
					`<td class="col_00 column-header-16">
						<p class="centerizeany mr-tableData">${AM_COUNT}</p>
						<div class="column-header-16-resizer"></div>
					</td>`
				);
				tabDataArr.push(
					`<td class="col_00 column-header-17">
						<p class="centerizeany mr-tableData">${AN_COUNT}</p>
						<div class="column-header-17-resizer"></div>
					</td>`
				);
				tabDataArr.push(
					`<td class="col_00 column-header-18">
						<p class="centerizeany mr-tableData">${AO_COUNT}</p>
						<div class="column-header-18-resizer"></div>
					</td>`
				);
				tabDataArr.push(
					`<td class="col_00 column-header-19">
						<p class="centerizeany mr-tableData">${AP_COUNT}</p>
						<div class="column-header-19-resizer"></div>
					</td>`
				);
				tabDataArr.push(
					`<td class="col_00 column-header-20">
						<p class="centerizeany mr-tableData">${AQ_COUNT}</p>
						<div class="column-header-20-resizer"></div>
					</td>`
				);
				tabDataArr.push(
					`<td class="col_00 column-header-21">
						<p class="centerizeany mr-tableData">${AR_COUNT}</p>
						<div class="column-header-21-resizer"></div>
					</td>`
				);
				tabDataArr.push(
					`<td class="col_00 column-header-22">
						<p class="centerizeany mr-tableData">${AS_Count}</p>
						<div class="column-header-22-resizer"></div>
					</td>`
				);
				tabDataArr.push(
					`<td class="col_00 column-header-23">
						<p class="centerizeany mr-tableData">${AT_Count}</p>
						<div class="column-header-23-resizer"></div>
					</td>`
				);
				tabDataArr.push(
					`<td class="col_00 column-header-24">
						<p class="centerizeany mr-tableData">${AU_Count}</p>
						<div class="column-header-24-resizer"></div>
					</td>`
				);
				tabDataArr.push(
					`<td class="col_00 column-header-25">
						<p class="centerizeany mr-tableData">${AV_Count}</p>
						<div class="column-header-25-resizer"></div>
					</td>`
				);
				tabDataArr.push(
					`<td class="col_00 column-header-26">
						<p class="centerizeany mr-tableData">${AW_COUNT}</p>
						<div class="column-header-26-resizer"></div>
					</td>`
				);
				tabDataArr.push(
					`<td class="col_00 column-header-27">
						<p class="centerizeany mr-tableData">${AX_COUNT}</p>
						<div class="column-header-27-resizer"></div>
					</td>`
				);
				tabDataArr.push(
					`<td class="col_00 column-header-28">
						<p class="centerizeany mr-tableData">${AY_COUNT}</p>
						<div class="column-header-28-resizer"></div>
					</td>`
				);
				tabDataArr.push(
					`<td class="col_00 column-header-29">
						<p class="centerizeany mr-tableData">${AZ_Count}</p>
						<div class="column-header-29-resizer"></div>
					</td>`
				);
				tabDataArr.push(
					`<td class="col_00 column-header-30">
						<p class="centerizeany mr-tableData">${BA_Count}</p>
						<div class="column-header-30-resizer"></div>
					</td>`
				);
				tabDataArr.push(
					`<td class="col_00 column-header-31">
						<p class="centerizeany mr-tableData">${BB_Count}</p>
						<div class="column-header-31-resizer"></div>
					</td>`
				);
				tabDataArr.push(
					`<td class="col_00 column-header-32">
						<p class="centerizeany mr-tableData">${BC_Count}</p>
						<div class="column-header-32-resizer"></div>
					</td>`
				);
				tabDataArr.push(
					`<td class="col_00 column-header-33">
						<p class="centerizeany mr-tableData">${BD_Count}</p>
						<div class="column-header-33-resizer"></div>
					</td>`
				);
				tabDataArr.push(
					`<td class="col_00 column-header-34">
						<p class="centerizeany mr-tableData">${BE_count}</p>
						<div class="column-header-34-resizer"></div>
					</td>`
				);
				tabDataArr.push(
					`<td class="col_00 column-header-35">
						<p class="centerizeany mr-tableData">${BF_COUNT}</p>
						<div class="column-header-35-resizer"></div>
					</td>`
				);
				tabDataArr.push(
					`<td class="col_00 column-header-36">
						<p class="centerizeany mr-tableData">${BG_COUNT}</p>
						<div class="column-header-36-resizer"></div>
					</td>`
				);
				tabDataArr.push(
					`<td class="col_00 column-header-37">
						<p class="centerizeany mr-tableData">${BH_COUNT}</p>
						<div class="column-header-37-resizer"></div>
					</td>`
				);
				tabDataArr.push(
					`<td class="col_00 column-header-38">
						<p class="centerizeany mr-tableData">${BI_COUNT}</p>
						<div class="column-header-38-resizer"></div>
					</td>`
				);
				tabDataArr.push(
					`<td class="col_00 column-header-39">
						<p class="centerizeany mr-tableData">${BJ_COUNT}</p>
						<div class="column-header-39-resizer"></div>
					</td>`
				);
				tabDataArr.push(
					`<td class="col_00 column-header-40">
						<p class="centerizeany mr-tableData">${BK_COUNT}</p>
						<div class="column-header-40-resizer"></div>
					</td>`
				);
				tabDataArr.push(
					`<td class="col_00 column-header-41">
						<p class="centerizeany mr-tableData">${BL_COUNT}</p>
						<div class="column-header-41-resizer"></div>
					</td>`
				);
				tabDataArr.push(
					`<td class="col_00 column-header-42">
						<p class="centerizeany mr-tableData">${BM_COUNT}</p>
						<div class="column-header-42-resizer"></div>
					</td>`
				);
				tabDataArr.push(
					`<td class="col_00 column-header-43">
						<p class="centerizeany mr-tableData">${Col2}</p>
						<div class="column-header-43-resizer"></div>
					</td>`
				);
				tabDataArr.push(
					`<td class="col_00 column-header-44">
						<p class="centerizeany mr-tableData">${Col3}</p>
						<div class="column-header-44-resizer"></div>
					</td>`
				);
				tabDataArr.push(
					`<td class="col_00 column-header-45">
						<p class="centerizeany mr-tableData">${DP_val}</p>
						<div class="column-header-45-resizer"></div>
					</td>`
				);
				tabDataArr.push(
					`<td class="col_00 column-header-46">
						<p class="centerizeany mr-tableData">${DY_val}</p>
						<div class="column-header-46-resizer"></div>
					</td>`
				);
				tabDataArr.push(
					`<td class="col_00 column-header-47">
						<p class="centerizeany mr-tableData">${DmA}</p>
						<div class="column-header-47-resizer"></div>
					</td>`
				);
				tabDataArr.push(
					`<td class="col_00 column-header-48">
						<p class="centerizeany mr-tableData">${DmP}</p>
						<div class="column-header-48-resizer"></div>
					</td>`
				);
				tabDataArr.push(
					`<td class="col_00 column-header-49">
						<p class="centerizeany mr-tableData">${DmP_per}</p>
						<div class="column-header-49-resizer"></div>
					</td>`
				);
				tabDataArr.push(
					`<td class="col_00 column-header-50">
						<p class="centerizeany mr-tableData">${ID_val}</p>
						<div class="column-header-50-resizer"></div>
					</td>`
				);
				tabDataArr.push(
					`<td class="col_00 column-header-51">
						<p class="centerizeany mr-tableData">${LoP_per}</p>
						<div class="column-header-51-resizer"></div>
					</td>`
				);
				tabDataArr.push(
					`<td class="col_00 column-header-52">
						<p class="centerizeany mr-tableData">${M_Val}</p>
						<div class="column-header-52-resizer"></div>
					</td>`
				);
				tabDataArr.push(
					`<td class="col_00 column-header-53">
						<p class="centerizeany mr-tableData">${MaP_per}</p>
						<div class="column-header-53-resizer"></div>
					</td>`
				);
				tabDataArr.push(
					`<td class="col_00 column-header-54">
						<p class="centerizeany mr-tableData">${O_End}</p>
						<div class="column-header-54-resizer"></div>
					</td>`
				);
				tabDataArr.push(
					`<td class="col_00 column-header-55">
						<p class="centerizeany mr-tableData">${O_Start}</p>
						<div class="column-header-55-resizer"></div>
					</td>`
				);
				tabDataArr.push(
					`<td class="col_00 column-header-56">
						<p class="centerizeany mr-tableData">${SP_val}</p>
												<div class="column-header-56-resizer"></div>
					</td>`
				);
				tabDataArr.push(
					`<td class="col_00 column-header-57">
						<p class="mr-tableData">${Time_Frame}</p>
						<div class="column-header-57-resizer"></div>
					</td>`
				);
				tabDataArr.push(
					`<td class="col_00 column-header-58">
						<p class="centerizeany mr-tableData">${UmA}</p>
						<div class="column-header-58-resizer"></div>
					</td>`
				);
				tabDataArr.push(
					`<td class="col_00 column-header-59">
						<p class="centerizeany mr-tableData">${UmP}</p>
						<div class="column-header-59-resizer"></div>
					</td>`
				);
				tabDataArr.push(
					`<td class="col_00 column-header-60">
						<p class="centerizeany mr-tableData">${UmP_per}</p>
						<div class="column-header-60-resizer"></div>
					</td>`
				);
				tabDataArr.push(
					`<td class="col_00 column-header-61">
						<p class="centerizeany mr-tableData">${Val2S}</p>
						<div class="column-header-61-resizer"></div>
					</td>`
				);
				tabDataArr.push(
					`<td class="col_00 column-header-62">
						<p class="centerizeany mr-tableData">${Val3S}</p>
												<div class="column-header-62-resizer"></div>
					</td>`
				);
				tabDataArr.push(
					`<td class="col_00 column-header-63">
						<p class="centerizeany mr-tableData">${Val6}</p>
						<div class="column-header-63-resizer"></div>
					</td>`
				);
				tabDataArr.push(
					`<td class="col_00 column-header-64">
						<p class="centerizeany mr-tableData" style="position: relative;left: 55%;top: 25%;">${Description}</p>
						<div class="column-header-64-resizer"></div>
					</td>`
				);
				tabDataArr.push(
					`<td class="col_00 column-header-65">
						<p class="mr-tableData">${Details3}</p>
						<div class="column-header-65-resizer"></div>
					</td>`
				);
				tabDataArr.push(
					`<td class="col_00 column-header-66">
						<p class="mr-tableData truncate-data">${Details2}</p>
						<div class="column-header-66-resizer"></div>
					</td>`
				);

				let len = tableH.length;
				disNone = [];
				let tabTd = "";
				for (let i = 0; i < len; i++) {
					let regex = /th-dis-none/g;
					let className = tableH[i].className.match(/column-header-\d+/g)[0];
					let pos = className.match(/\d+/g)[0] - 1;
					if (regex.test(tableH[i].className)) {
						disNone.push(i + 1);
					}
					tabTd += tabDataArr[pos];
				}
				tableTr += `<tr class="dnd-moved">
					${tabTd}
				</tr>`;

				style2TableData += `<div class="description-text">
					<p>
						Lorem ipsum, dolor sit amet conseetur adipisicing elit. Ad, distinctio incidunt molestias beatae nam doloribus cute laboriosam necesibus acntium recusandae adipisci.
					</p>
				</div>

				<div class="icon-box55">
					<div class="circle2box" tooltip="Click to Add to Bookmarks" flow="down">
						<i class="fas fa-envelope"></i>
					</div>
					<div class="circle2box" tooltip="Click to View Details" flow="down">
						<i class="fas fa-pen"></i>
					</div>
					<div class="circle2box view-modal-click-style2">
						<i class="fas fa-eye"></i>
					</div>
					<div class="circle2box" tooltip="Click to Delete" flow="down">
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
								<path
									d="m142 143.003h139v-143c-49.379 0-107.674 0-154 0v128c0 8.271 6.729 15 15 15z" />
								<path
									d="m345 128.003v-128c-9.97 0-21.461 0-34 0v143h19c8.271 0 15-6.729 15-15z" />
								<path d="m127 512.003h218v-161h-218z" />
								<path
									d="m511.927 126.537c-.279-2.828-1.38-5.667-3.315-8.027-.747-.913 6.893 6.786-114.006-114.113-2.882-2.882-6.794-4.396-10.612-4.394-.789 0-3.925 0-8.995 0v128c0 24.813-20.187 45-45 45-14.028 0-186.064 0-188 0-24.813 0-45-20.187-45-45v-128c-29.589 0-49.82 0-52 0-24.813 0-45 20.187-45 45v422c0 24.813 20.187 45 45 45h52c0-10.815 0-201.797 0-210 0-24.813 20.187-45 45-45h188c24.813 0 45 20.187 45 45v210h92c24.813 0 45-20.187 45-45 .001-364.186.041-339.316-.072-340.466z" />
								<path
									d="m330 287.003h-188c-8.271 0-15 6.729-15 15v19h218v-19c0-8.271-6.729-15-15-15z" />
							</g>
						</svg>
					</div>
					<div class="circle2box alertswindow-modal-click-style2">
						<svg class="" viewBox="0 0 511.156 511.156">
							<path
								d="m184.904 465.044c11.999 27.127 39.154 46.112 70.674 46.112s58.674-18.985 70.674-46.112z" />
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
								STATUS
								<div class="head-filter style2_cross01" >
									<i class="fas fa-times"></i>
								</div>
								<div class="drop-filter style2-filterPosition" onclick="popUpHandlerS2Table(event, 1)">
									<i class="fas fa-caret-down"></i>
								</div>
							</th>
							<th scope="col" class="style-two-head-02">
								Val1
								<div class="head-filter style2_cross02" >
									<i class="fas fa-times"></i>
								</div>
								<div class="drop-filter style2-filterPosition" onclick="popUpHandlerS2Table(event, 2)">
									<i class="fas fa-caret-down"></i>
								</div>
							</th>
							<th scope="col" class="style-two-head-03">
								Val2
								<div class="head-filter style2_cross03" >
									<i class="fas fa-times"></i>
								</div>
								<div class="drop-filter style2-filterPosition" onclick="popUpHandlerS2Table(event, 3)">
									<i class="fas fa-caret-down"></i>
								</div>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td class="status22 style-two-head-01">
								<div class="inner_con ${designClass} ${s2_statusClass}">
										<div class="status22-centerize">
										<p class="mr-tableData">
										${checkSts == "Ended" ? checkSts : checkSts + " In"}
										</p>
										<p>${checkSts == "Ended" ? "" : status}</p>
										</div>
								</div>
							</td>
							<td class="s2-value style-two-head-02">
								<div class="column-time ${classV1}">
										<div class="centerauto">
												<span class="mr-tableData">${val1}</span>
										</div>
								</div>
							</td>
							<td class="s2-value style-two-head-03">
								<div class="column-time ${classV2}">
										<div class="centerauto">
												<span class="mr-tableData">${val2}</span>
										</div>
								</div>
							</td>
						</tr>
					</tbody>
				</table>

				<table class="table sty2table3 cross-table-3">
						<thead>
								<tr>
										<th scope="col" class="style-two-head-04">
												VAL11+DATEL
												<div class="head-filter style2_cross04">
														<i class="fas fa-times"></i>
												</div>
												<div class="drop-filter style2-filterPosition" onclick="popUpHandlerS2Table(event, 1)">
														<i class="fas fa-caret-down"></i>
												</div>
										</th>
										<th scope="col" class="style-two-head-05">
												VAL12+DATEH
												<div class="head-filter style2_cross05">
														<i class="fas fa-times"></i>
												</div>
												<div class="drop-filter style2-filterPosition" onclick="popUpHandlerS2Table(event, 2)">
														<i class="fas fa-caret-down"></i>
												</div>
										</th>
										<th scope="col" class="style-two-head-06">
												CHART 1
												<div class="head-filter style2_cross06">
														<i class="fas fa-times"></i>
												</div>
												<div class="drop-filter style2-filterPosition" onclick="popUpHandlerS2Table(event, 3)">
														<i class="fas fa-caret-down"></i>
												</div>
										</th>
										<th scope="col" class="style-two-head-07">
												CHART2
												<div class="head-filter style2_cross07">
														<i class="fas fa-times"></i>
												</div>
												<div class="drop-filter style2-filterPosition" onclick="popUpHandlerS2Table(event, 4)">
														<i class="fas fa-caret-down"></i>
												</div>
										</th>
								</tr>
						</thead>
						<tbody>
								<tr>
										<td class="vall11_datel style-two-head-04">
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
										<td class="vall11_datel style-two-head-05">
												<div class="val11">
														<p class="centerizeany mr-tableData">${Val12}</p>
												</div>
												<div class="date_reco">
														<div class="date_reco_center centerizeany">
														<span>${timeH}</span>
														<span>${dateH}</span>
														</div>
												</div>
										</td>
										<td class="dchart_1 style-two-head-06">
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
										<td class="pentagon style-two-head-07">
												<div class="upper-penta-box">
														<div class="shape_penagon" style="${styleG_S2}">
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
														<div class="shape_penagon" style="${styleR_S2}">
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
								</tr>
						</tbody>
				</table>
				
				<table class="table sty2table4 cross-table-4">
						<thead>
								<tr>
										<th scope="col" class="style-two-head-08">
												U_Val
												<div class="head-filter style2_cross08">
														<i class="fas fa-times"></i>
												</div>
												<div class="drop-filter style2-filterPosition" onclick="popUpHandlerS2Table(event, 1)">
														<i class="fas fa-caret-down"></i>
												</div>
										</th>
										<th scope="col" class="style-two-head-09">
												U_%
												<div class="head-filter style2_cross09">
														<i class="fas fa-times"></i>
												</div>
												<div class="drop-filter style2-filterPosition" onclick="popUpHandlerS2Table(event, 2)">
														<i class="fas fa-caret-down"></i>
												</div>
										</th>
										<th scope="col" class="style-two-head-10">
												D_Val
												<div class="head-filter style2_cross10">
														<i class="fas fa-times"></i>
												</div>
												<div class="drop-filter style2-filterPosition" onclick="popUpHandlerS2Table(event, 3)">
														<i class="fas fa-caret-down"></i>
												</div>
										</th>
										<th scope="col" class="style-two-head-11">
												D_%
												<div class="head-filter style2_cross11">
														<i class="fas fa-times"></i>
												</div>
												<div class="drop-filter style2-filterPosition" onclick="popUpHandlerS2Table(event, 4)">
														<i class="fas fa-caret-down"></i>
												</div>
										</th>
										<th scope="col" class="style-two-head-12">
												N_Val
												<div class="head-filter style2_cross12">
														<i class="fas fa-times"></i>
												</div>
												<div class="drop-filter style2-filterPosition" onclick="popUpHandlerS2Table(event, 5)">
														<i class="fas fa-caret-down"></i>
												</div>
										</th>
										<th scope="col" class="style-two-head-13">
												N_C
												<div class="head-filter style2_cross13">
														<i class="fas fa-times"></i>
												</div>
												<div class="drop-filter style2-filterPosition" onclick="popUpHandlerS2Table(event, 6)">
														<i class="fas fa-caret-down"></i>
												</div>
										</th>
										<th scope="col" class="style-two-head-14">
												AM COUNT
												<div class="head-filter style2_cross14">
														<i class="fas fa-times"></i>
												</div>
												<div class="drop-filter style2-filterPosition" onclick="popUpHandlerS2Table(event, 7)">
														<i class="fas fa-caret-down"></i>
												</div>
										</th>
										<th scope="col" class="style-two-head-15">
												AN COUNT
												<div class="head-filter style2_cross15">
														<i class="fas fa-times"></i>
												</div>
												<div class="drop-filter style2-filterPosition" onclick="popUpHandlerS2Table(event, 8)">
														<i class="fas fa-caret-down"></i>
												</div>
										</th>
										<th scope="col" class="style-two-head-16">
												AO COUNT
												<div class="head-filter style2_cross16">
														<i class="fas fa-times"></i>
												</div>
												<div class="drop-filter style2-filterPosition" onclick="popUpHandlerS2Table(event, 9)">
														<i class="fas fa-caret-down"></i>
												</div>
										</th>
										<th scope="col" class="style-two-head-17">
												AP COUNT
												<div class="head-filter style2_cross17">
														<i class="fas fa-times"></i>
												</div>
												<div class="drop-filter style2-filterPosition" onclick="popUpHandlerS2Table(event, 10)">
														<i class="fas fa-caret-down"></i>
												</div>
										</th>
										<th scope="col" class="style-two-head-18">
												AQ COUNT
												<div class="head-filter style2_cross18">
														<i class="fas fa-times"></i>
												</div>
												<div class="drop-filter style2-filterPosition" onclick="popUpHandlerS2Table(event, 11)">
														<i class="fas fa-caret-down"></i>
												</div>
										</th>
										<th scope="col" class="style-two-head-19">
												AR COUNT
												<div class="head-filter style2_cross19">
														<i class="fas fa-times"></i>
												</div>
												<div class="drop-filter style2-filterPosition" onclick="popUpHandlerS2Table(event, 12)">
														<i class="fas fa-caret-down"></i>
												</div>
										</th>
										<th scope="col" class="style-two-head-20">
												AS COUNT
												<div class="head-filter style2_cross20">
														<i class="fas fa-times"></i>
												</div>
												<div class="drop-filter style2-filterPosition" onclick="popUpHandlerS2Table(event, 13)">
														<i class="fas fa-caret-down"></i>
												</div>
										</th>
								</tr>
						</thead>
						<tbody>
								<tr>
										<td class="vall11_datel style-two-head-08">
												<div class="col1table green-white">
														<span class="mr-tableData">${u_val}</span>
												</div>
										</td>
										<td class="vall11_datel style-two-head-09">
												<div class="col1table green-white">
														<span class="mr-tableData">${u_per}</span>
												</div>
										</td>
										<td class="vall11_datel style-two-head-10">
												<div class="col1table red-white">
														<span class="mr-tableData">${d_val}</span>
												</div>
										</td>
										<td class="vall11_datel style-two-head-11">
												<div class="col1table red-white">
														<span class="mr-tableData">${d_per}</span>
												</div>
										</td>
										<td class="vall11_datel style-two-head-12">
												<div class="col1table grey-white">
														<span class="mr-tableData">${n_val}</span>
												</div>
										</td>
										<td class="vall11_datel style-two-head-13">
												<div class="col1table grey-white">
														<span class="mr-tableData">${n_per}</span>
												</div>
										</td>
										<td class="vall11_datel style-two-head-14">
												<div class="col1table">
														<span class="mr-tableData">${AM_COUNT}</span>
												</div>
										</td>
										<td class="vall11_datel style-two-head-15">
												<div class="col1table">
														<span class="mr-tableData">${AN_COUNT}</span>
												</div>
										</td>
										<td class="vall11_datel style-two-head-16">
												<div class="col1table">
														<span class="mr-tableData">${AO_COUNT}</span>
												</div>
										</td>
										<td class="vall11_datel style-two-head-17">
												<div class="col1table">
														<span class="mr-tableData">${AP_COUNT}</span>
												</div>
										</td>
										<td class="vall11_datel style-two-head-18">
												<div class="col1table">
														<span class="mr-tableData">${AQ_COUNT}</span>
												</div>
										</td>
										<td class="vall11_datel style-two-head-19">
												<div class="col1table">
														<span class="mr-tableData">${AR_COUNT}</span>
												</div>
										</td>
										<td class="vall11_datel style-two-head-20">
												<div class="col1table">
														<span class="mr-tableData">${AS_Count}</span>
												</div>
										</td>
								</tr>
						</tbody>
				</table>
				
				<table class="table sty2table5 cross-table-4">
						<thead>
								<tr>
										<th scope="col" class="style-two-head-21">
												AT COUNT
												<div class="head-filter style2_cross21">
														<i class="fas fa-times"></i>
												</div>
												<div class="drop-filter style2-filterPosition" onclick="popUpHandlerS2Table(event, 1)">
														<i class="fas fa-caret-down"></i>
												</div>
										</th>
										<th scope="col" class="style-two-head-22">
												AU COUNT
												<div class="head-filter style2_cross22">
														<i class="fas fa-times"></i>
												</div>
												<div class="drop-filter style2-filterPosition" onclick="popUpHandlerS2Table(event, 2)">
														<i class="fas fa-caret-down"></i>
												</div>
										</th>
										<th scope="col" class="style-two-head-23">
												AV COUNT
												<div class="head-filter style2_cross23">
														<i class="fas fa-times"></i>
												</div>
												<div class="drop-filter style2-filterPosition" onclick="popUpHandlerS2Table(event, 3)">
														<i class="fas fa-caret-down"></i>
												</div>
										</th>
										<th scope="col" class="style-two-head-24">
												AW COUNT
												<div class="head-filter style2_cross24">
														<i class="fas fa-times"></i>
												</div>
												<div class="drop-filter style2-filterPosition" onclick="popUpHandlerS2Table(event, 4)">
														<i class="fas fa-caret-down"></i>
												</div>
										</th>
										<th scope="col" class="style-two-head-25">
												AX COUNT
												<div class="head-filter style2_cross25">
														<i class="fas fa-times"></i>
												</div>
												<div class="drop-filter style2-filterPosition" onclick="popUpHandlerS2Table(event, 5)">
														<i class="fas fa-caret-down"></i>
												</div>
										</th>
										<th scope="col" class="style-two-head-26">
												AY COUNT
												<div class="head-filter style2_cross26">
														<i class="fas fa-times"></i>
												</div>
												<div class="drop-filter style2-filterPosition" onclick="popUpHandlerS2Table(event, 6)">
														<i class="fas fa-caret-down"></i>
												</div>
										</th>
										<th scope="col" class="style-two-head-27">
												AZ COUNT
												<div class="head-filter style2_cross27">
														<i class="fas fa-times"></i>
												</div>
												<div class="drop-filter style2-filterPosition" onclick="popUpHandlerS2Table(event, 7)">
														<i class="fas fa-caret-down"></i>
												</div>
										</th>
										<th scope="col" class="style-two-head-28">
												BA COUNT
												<div class="head-filter style2_cross28">
														<i class="fas fa-times"></i>
												</div>
												<div class="drop-filter style2-filterPosition" onclick="popUpHandlerS2Table(event, 8)">
														<i class="fas fa-caret-down"></i>
												</div>
										</th>
										<th scope="col" class="style-two-head-29">
												BB COUNT
												<div class="head-filter style2_cross29">
														<i class="fas fa-times"></i>
												</div>
												<div class="drop-filter style2-filterPosition" onclick="popUpHandlerS2Table(event, 9)">
														<i class="fas fa-caret-down"></i>
												</div>
										</th>
										<th scope="col" class="style-two-head-30">
												BC COUNT
												<div class="head-filter style2_cross30">
														<i class="fas fa-times"></i>
												</div>
												<div class="drop-filter style2-filterPosition" onclick="popUpHandlerS2Table(event, 10)">
														<i class="fas fa-caret-down"></i>
												</div>
										</th>
										<th scope="col" class="style-two-head-31">
												BD COUNT
												<div class="head-filter style2_cross31">
														<i class="fas fa-times"></i>
												</div>
												<div class="drop-filter style2-filterPosition" onclick="popUpHandlerS2Table(event, 11)">
														<i class="fas fa-caret-down"></i>
												</div>
										</th>
										<th scope="col" class="style-two-head-32">
												BE COUNT
												<div class="head-filter style2_cross32">
														<i class="fas fa-times"></i>
												</div>
												<div class="drop-filter style2-filterPosition" onclick="popUpHandlerS2Table(event, 12)">
														<i class="fas fa-caret-down"></i>
												</div>
										</th>
										<th scope="col" class="style-two-head-33">
												BF COUNT
												<div class="head-filter style2_cross33">
														<i class="fas fa-times"></i>
												</div>
												<div class="drop-filter style2-filterPosition" onclick="popUpHandlerS2Table(event, 13)">
														<i class="fas fa-caret-down"></i>
												</div>
										</th>
								</tr>
						</thead>
						<tbody>
								<tr>
										<td class="vall11_datel style-two-head-21">
												<div class="col1table">
														<span class="mr-tableData">${AT_Count}</span>
												</div>
										</td>
										<td class="vall11_datel style-two-head-22">
												<div class="col1table">
														<span class="mr-tableData">${AU_Count}</span>
												</div>
										</td>
										<td class="vall11_datel style-two-head-23">
												<div class="col1table">
														<span class="mr-tableData">${AV_Count}</span>
												</div>
										</td>
										<td class="vall11_datel style-two-head-24">
												<div class="col1table">
														<span class="mr-tableData">${AW_COUNT}</span>
												</div>
										</td>
										<td class="vall11_datel style-two-head-25">
												<div class="col1table">
														<span class="mr-tableData">${AX_COUNT}</span>
												</div>
										</td>
										<td class="vall11_datel style-two-head-26">
												<div class="col1table">
														<span class="mr-tableData">${AY_COUNT}</span>
												</div>
										</td>
										<td class="vall11_datel style-two-head-27">
												<div class="col1table">
														<span class="mr-tableData">${AZ_Count}</span>
												</div>
										</td>
										<td class="vall11_datel style-two-head-28">
												<div class="col1table">
														<span class="mr-tableData">${BA_Count}</span>
												</div>
										</td>
										<td class="vall11_datel style-two-head-29">
												<div class="col1table">
														<span class="mr-tableData">${BB_Count}</span>
												</div>
										</td>
										<td class="vall11_datel style-two-head-30">
												<div class="col1table">
														<span class="mr-tableData">${BC_Count}</span>
												</div>
										</td>
										<td class="vall11_datel style-two-head-31">
												<div class="col1table">
														<span class="mr-tableData">${BD_Count}</span>
												</div>
										</td>
										<td class="vall11_datel style-two-head-32">
												<div class="col1table">
														<span class="mr-tableData">${BE_count}</span>
												</div>
										</td>
										<td class="vall11_datel style-two-head-33">
												<div class="col1table">
														<span class="mr-tableData">${BF_COUNT}</span>
												</div>
										</td>
								</tr>
						</tbody>
				</table>
				
				<table class="table sty2table6 cross-table-4">
						<thead>
								<tr>
										<th scope="col" class="style-two-head-34">
												BG COUNT
												<div class="head-filter style2_cross34">
														<i class="fas fa-times"></i>
												</div>
												<div class="drop-filter style2-filterPosition" onclick="popUpHandlerS2Table(event, 1)">
														<i class="fas fa-caret-down"></i>
												</div>
										</th>
										<th scope="col" class="style-two-head-35">
												BH COUNT
												<div class="head-filter style2_cross35">
														<i class="fas fa-times"></i>
												</div>
												<div class="drop-filter style2-filterPosition" onclick="popUpHandlerS2Table(event, 2)">
														<i class="fas fa-caret-down"></i>
												</div>
										</th>
										<th scope="col" class="style-two-head-36">
												BI COUNT
												<div class="head-filter style2_cross36">
														<i class="fas fa-times"></i>
												</div>
												<div class="drop-filter style2-filterPosition" onclick="popUpHandlerS2Table(event, 3)">
														<i class="fas fa-caret-down"></i>
												</div>
										</th>
										<th scope="col" class="style-two-head-37">
												BJ COUNT
												<div class="head-filter style2_cross37">
														<i class="fas fa-times"></i>
												</div>
												<div class="drop-filter style2-filterPosition" onclick="popUpHandlerS2Table(event, 4)">
														<i class="fas fa-caret-down"></i>
												</div>
										</th>
										<th scope="col" class="style-two-head-38">
												BK COUNT
												<div class="head-filter style2_cross38">
														<i class="fas fa-times"></i>
												</div>
												<div class="drop-filter style2-filterPosition" onclick="popUpHandlerS2Table(event, 5)">
														<i class="fas fa-caret-down"></i>
												</div>
										</th>
										<th scope="col" class="style-two-head-39">
												BL COUNT
												<div class="head-filter style2_cross39">
														<i class="fas fa-times"></i>
												</div>
												<div class="drop-filter style2-filterPosition" onclick="popUpHandlerS2Table(event, 6)">
														<i class="fas fa-caret-down"></i>
												</div>
										</th>
										<th scope="col" class="style-two-head-40">
												BM COUNT
												<div class="head-filter style2_cross40">
														<i class="fas fa-times"></i>
												</div>
												<div class="drop-filter style2-filterPosition" onclick="popUpHandlerS2Table(event, 7)">
														<i class="fas fa-caret-down"></i>
												</div>
										</th>
										<th scope="col" class="style-two-head-41">
												Col2
												<div class="head-filter style2_cross41">
														<i class="fas fa-times"></i>
												</div>
												<div class="drop-filter style2-filterPosition" onclick="popUpHandlerS2Table(event, 8)">
														<i class="fas fa-caret-down"></i>
												</div>
										</th>
										<th scope="col" class="style-two-head-42">
												Col3
												<div class="head-filter style2_cross42">
														<i class="fas fa-times"></i>
												</div>
												<div class="drop-filter style2-filterPosition" onclick="popUpHandlerS2Table(event, 9)">
														<i class="fas fa-caret-down"></i>
												</div>
										</th>
										<th scope="col" class="style-two-head-43">
												DP
												<div class="head-filter style2_cross43">
														<i class="fas fa-times"></i>
												</div>
												<div class="drop-filter style2-filterPosition" onclick="popUpHandlerS2Table(event, 10)">
														<i class="fas fa-caret-down"></i>
												</div>
										</th>
										<th scope="col" class="style-two-head-44">
												DY
												<div class="head-filter style2_cross44">
														<i class="fas fa-times"></i>
												</div>
												<div class="drop-filter style2-filterPosition" onclick="popUpHandlerS2Table(event, 11)">
														<i class="fas fa-caret-down"></i>
												</div>
										</th>
										<th scope="col" class="style-two-head-45">
												DmA
												<div class="head-filter style2_cross45">
														<i class="fas fa-times"></i>
												</div>
												<div class="drop-filter style2-filterPosition" onclick="popUpHandlerS2Table(event, 12)">
														<i class="fas fa-caret-down"></i>
												</div>
										</th>
										<th scope="col" class="style-two-head-46">
												DmP
												<div class="head-filter style2_cross46">
														<i class="fas fa-times"></i>
												</div>
												<div class="drop-filter style2-filterPosition" onclick="popUpHandlerS2Table(event, 13)">
														<i class="fas fa-caret-down"></i>
												</div>
										</th>
										<th scope="col" class="style-two-head-47">
												DmP%
												<div class="head-filter style2_cross47">
														<i class="fas fa-times"></i>
												</div>
												<div class="drop-filter style2-filterPosition" onclick="popUpHandlerS2Table(event, 14)">
														<i class="fas fa-caret-down"></i>
												</div>
										</th>
								</tr>
						</thead>
						<tbody>
								<tr>
										<td class="vall11_datel style-two-head-34">
												<div class="col1table">
														<span class="mr-tableData">${BG_COUNT}</span>
												</div>
										</td>
										<td class="vall11_datel style-two-head-35">
												<div class="col1table">
														<span class="mr-tableData">${BH_COUNT}</span>
												</div>
										</td>
										<td class="vall11_datel style-two-head-36">
												<div class="col1table">
														<span class="mr-tableData">${BI_COUNT}</span>
												</div>
										</td>
										<td class="vall11_datel style-two-head-37">
												<div class="col1table">
														<span class="mr-tableData">${BJ_COUNT}</span>
												</div>
										</td>
										<td class="vall11_datel style-two-head-38">
												<div class="col1table">
														<span class="mr-tableData">${BK_COUNT}</span>
												</div>
										</td>
										<td class="vall11_datel style-two-head-39">
												<div class="col1table">
														<span class="mr-tableData">${BL_COUNT}</span>
												</div>
										</td>
										<td class="vall11_datel style-two-head-40">
												<div class="col1table">
														<span class="mr-tableData">${BM_COUNT}</span>
												</div>
										</td>
										<td class="vall11_datel style-two-head-41">
												<div class="col1table">
														<span class="mr-tableData">${Col2}</span>
												</div>
										</td>
										<td class="vall11_datel style-two-head-42">
												<div class="col1table">
														<span class="mr-tableData">${Col3}</span>
												</div>
										</td>
										<td class="vall11_datel style-two-head-43">
												<div class="col1table">
														<span class="mr-tableData">${DP_val}</span>
												</div>
										</td>
										<td class="vall11_datel style-two-head-44">
												<div class="col1table">
														<span class="mr-tableData">${DY_val}</span>
												</div>
										</td>
										<td class="vall11_datel style-two-head-45">
												<div class="col1table">
														<span class="mr-tableData">${DmA}</span>
												</div>
										</td>
										<td class="vall11_datel style-two-head-46">
												<div class="col1table">
														<span class="mr-tableData">${DmP}</span>
												</div>
										</td>
										<td class="vall11_datel style-two-head-47">
												<div class="col1table">
														<span class="mr-tableData">${DmP_per}</span>
												</div>
										</td>
								</tr>
								
						</tbody>
				</table>
				
				<table class="table sty2table7 cross-table-4">
						<thead>
								<tr>
										<th scope="col" class="style-two-head-48">
												ID
												<div class="head-filter style2_cross48">
														<i class="fas fa-times"></i>
												</div>
												<div class="drop-filter style2-filterPosition" onclick="popUpHandlerS2Table(event, 1)">
														<i class="fas fa-caret-down"></i>
												</div>
										</th>
										<th scope="col" class="style-two-head-49">
												LoP%
												<div class="head-filter style2_cross49">
														<i class="fas fa-times"></i>
												</div>
												<div class="drop-filter style2-filterPosition" onclick="popUpHandlerS2Table(event, 2)">
														<i class="fas fa-caret-down"></i>
												</div>
										</th>
										<th scope="col" class="style-two-head-50">
												M_Val
												<div class="head-filter style2_cross50">
														<i class="fas fa-times"></i>
												</div>
												<div class="drop-filter style2-filterPosition" onclick="popUpHandlerS2Table(event, 3)">
														<i class="fas fa-caret-down"></i>
												</div>
										</th>
										<th scope="col" class="style-two-head-51">
												MaP%
												<div class="head-filter style2_cross51">
														<i class="fas fa-times"></i>
												</div>
												<div class="drop-filter style2-filterPosition" onclick="popUpHandlerS2Table(event, 4)">
														<i class="fas fa-caret-down"></i>
												</div>
										</th>
										<th scope="col" class="style-two-head-52">
												O_End
												<div class="head-filter style2_cross52">
														<i class="fas fa-times"></i>
												</div>
												<div class="drop-filter style2-filterPosition" onclick="popUpHandlerS2Table(event, 5)">
														<i class="fas fa-caret-down"></i>
												</div>
										</th>
										<th scope="col" class="style-two-head-53">
												O_Start
												<div class="head-filter style2_cross53">
														<i class="fas fa-times"></i>
												</div>
												<div class="drop-filter style2-filterPosition" onclick="popUpHandlerS2Table(event, 6)">
														<i class="fas fa-caret-down"></i>
												</div>
										</th>
										<th scope="col" class="style-two-head-54">
												SP
												<div class="head-filter style2_cross54">
														<i class="fas fa-times"></i>
												</div>
												<div class="drop-filter style2-filterPosition" onclick="popUpHandlerS2Table(event, 7)">
														<i class="fas fa-caret-down"></i>
												</div>
										</th>
										<th scope="col" class="style-two-head-55">
												Time Frame
												<div class="head-filter style2_cross55">
														<i class="fas fa-times"></i>
												</div>
												<div class="drop-filter style2-filterPosition" onclick="popUpHandlerS2Table(event, 8)">
														<i class="fas fa-caret-down"></i>
												</div>
										</th>
										<th scope="col" class="style-two-head-56">
												UmA
												<div class="head-filter style2_cross56">
														<i class="fas fa-times"></i>
												</div>
												<div class="drop-filter style2-filterPosition" onclick="popUpHandlerS2Table(event, 9)">
														<i class="fas fa-caret-down"></i>
												</div>
										</th>
										<th scope="col" class="style-two-head-57">
												UmP
												<div class="head-filter style2_cross57">
														<i class="fas fa-times"></i>
												</div>
												<div class="drop-filter style2-filterPosition" onclick="popUpHandlerS2Table(event, 10)">
														<i class="fas fa-caret-down"></i>
												</div>
										</th>
										<th scope="col" class="style-two-head-58">
												UmP%
												<div class="head-filter style2_cross58">
														<i class="fas fa-times"></i>
												</div>
												<div class="drop-filter style2-filterPosition" onclick="popUpHandlerS2Table(event, 11)">
														<i class="fas fa-caret-down"></i>
												</div>
										</th>
										<th scope="col" class="style-two-head-59">
												Val2S
												<div class="head-filter style2_cross59">
														<i class="fas fa-times"></i>
												</div>
												<div class="drop-filter style2-filterPosition" onclick="popUpHandlerS2Table(event, 12)">
														<i class="fas fa-caret-down"></i>
												</div>
										</th>
										<th scope="col" class="style-two-head-60">
												Val3S
												<div class="head-filter style2_cross60">
														<i class="fas fa-times"></i>
												</div>
												<div class="drop-filter style2-filterPosition" onclick="popUpHandlerS2Table(event, 13)">
														<i class="fas fa-caret-down"></i>
												</div>
										</th>
										<th scope="col" class="style-two-head-61">
												Val6
												<div class="head-filter style2_cross61">
														<i class="fas fa-times"></i>
												</div>
												<div class="drop-filter style2-filterPosition" onclick="popUpHandlerS2Table(event, 14)">
														<i class="fas fa-caret-down"></i>
												</div>
										</th>
								</tr>
						</thead>
						<tbody>
								<tr>
										<td class="vall11_datel style-two-head-48">
												<div class="col1table">
														<span class="mr-tableData">${ID_val}</span>
												</div>
										</td>
										<td class="vall11_datel style-two-head-49">
												<div class="col1table">
														<span class="mr-tableData">${LoP_per}</span>
												</div>
										</td>
										<td class="vall11_datel style-two-head-50">
												<div class="col1table">
														<span class="mr-tableData">${M_Val}</span>
												</div>
										</td>
										<td class="vall11_datel style-two-head-51">
												<div class="col1table">
														<span class="mr-tableData">${MaP_per}</span>
												</div>
										</td>
										<td class="vall11_datel style-two-head-52">
												<div class="col1table">
														<span class="mr-tableData">${O_End}</span>
												</div>
										</td>
										<td class="vall11_datel style-two-head-53">
												<div class="col1table">
														<span class="mr-tableData">${O_Start}</span>
												</div>
										</td>
										<td class="vall11_datel style-two-head-54">
												<div class="col1table">
														<span class="mr-tableData">${SP_val}</span>
												</div>
										</td>
										<td class="vall11_datel style-two-head-55">
												<div class="col1table">
														<span class="mr-tableData">${Time_Frame}</span>
												</div>
										</td>
										<td class="vall11_datel style-two-head-56">
												<div class="col1table">
														<span class="mr-tableData">${UmA}</span>
												</div>
										</td>
										<td class="vall11_datel style-two-head-57">
												<div class="col1table">
														<span class="mr-tableData">${UmP}</span>
												</div>
										</td>
										<td class="vall11_datel style-two-head-58">
												<div class="col1table">
														<span class="mr-tableData">${UmP_per}</span>
												</div>
										</td>
										<td class="vall11_datel style-two-head-59">
												<div class="col1table">
														<span class="mr-tableData">${Val2S}</span>
												</div>
										</td>
										<td class="vall11_datel style-two-head-60">
												<div class="col1table">
														<span class="mr-tableData">${Val3S}</span>
												</div>
										</td>
										<td class="vall11_datel style-two-head-61">
												<div class="col1table">
														<span class="mr-tableData">${Val6}</span>
												</div>
										</td>
								</tr>
								
						</tbody>
				</table>
				
				<table class="table sty2table8 cross-table-4">
						<thead>
								<tr>
										<th scope="col" class="style-two-head-62">
												Description
												<div class="head-filter style2_cross62">
														<i class="fas fa-times"></i>
												</div>
												<div class="drop-filter style2-filterPosition" onclick="popUpHandlerS2Table(event, 1)">
														<i class="fas fa-caret-down"></i>
												</div>
										</th>
										<th scope="col" class="style-two-head-63">
												Details3
												<div class="head-filter style2_cross63">
														<i class="fas fa-times"></i>
												</div>
												<div class="drop-filter style2-filterPosition" onclick="popUpHandlerS2Table(event, 2)">
														<i class="fas fa-caret-down"></i>
												</div>
										</th>
								</tr>
						</thead>
						<tbody>
								<tr>
										<td class="vall11_datel style-two-head-62">
												<div class="col1table">
														<p class="mr-tableData">${Description}</p>
												</div>
										</td>
										<td class="vall11_datel style-two-head-63">
												<div class="col1table">
														<p class="mr-tableData">${Details3}</p>
												</div>
										</td>
								</tr>
								
						</tbody>
				</table>
		
				<table class="table sty2table9 cross-table-4" style="margin-bottom: 50px;">
						<thead>
								<tr>
										<th scope="col" class="style-two-head-64">
												Details2
												<div class="head-filter style2_cross64">
														<i class="fas fa-times"></i>
												</div>
												<div class="drop-filter style2-filterPosition" onclick="popUpHandlerS2Table(event, 1)">
														<i class="fas fa-caret-down"></i>
												</div>
										</th>
								</tr>
						</thead>
						<tbody>
								<tr>
										<td class="vall11_datel style-two-head-64">
												<div class="col1table">
														<p class="mr-tableData truncate-data">${Details2}</p>
												</div>
										</td>
								</tr>
						</tbody>
				</table>`;
			});
			let style1Table = $("#resizable554 tbody");
			let style2Table = $("#style2Con");
			style1Table.html(tableTr);
			style2Table.html(style2TableData);

			// hide td base on th start
			disNone.forEach((k) => {
				$(`#resizable554 td:nth-child(${k})`).addClass("th-dis-none");
			});
			// hide td base on th end

			// Truncate the Detail 2 Text (Huge Text)
			truncateText(450);

			// Code added by Tanvir
			let decideDisplay = $(".style2-box").hasClass("clickstylebg");
			// if(!decideDisplay){
			// 	$(".right-slider5").css("display", "block");
			// 	$(".left-slider5").css("display", "block");
			// }
			
			$("#style1Table").css("border", "2px solid #eff1f7");
			$("#pagination-man-res-table .width-row-go").css("display", "block");
			IconModalClick();
			Style2DropFilterPos();
			// function for table 2 Start
			pagiHideHead();
			table2HeadClickCall();
			// function for table 2 End
			style1TableScroller();

			$("#viewtwo").css("display", "none");
			$("#rowdetails").css("display", "none");
			$("#noteswindow").css("display", "none");
			$("#alertswindow").css("display", "none");
			$("#copyrowlist").css("display", "none");
			$("#moverowlist").css("display", "none");

			$("#viewtwo_style2").css("display", "none");
			$("#rowdetails_style2").css("display", "none");
			$("#noteswindow_style2").css("display", "none");
			$("#alertswindow_style2").css("display", "none");
			$("#copyrowlist_style2").css("display", "none");
			$("#moverowlist_style2").css("display", "none");

			$("#col8Filter").css('display','none');
		},
	};
	let container = $("#pagination-man-res-table");
	container.pagination(options);
}

$("#res-row-no7").change(function (e) {
	let noRow = e.target.value;
	manResPagination(noRow);
	pagiHideHead();
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
		date: date_info.getDate() + "/" + (date_info.getMonth() + 1) + "/" + date_info.getFullYear()
	}
}

// This function returns the milliseeond of input(Excel Date Value)
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

// This function Formates the milliseeond to Days, Hour, Minute
function dateDiffInDays(date1, date2) {
	const utc1 = excelToJSDate(date1);
	const utc2 = excelToJSDate(date2);
	let miliSec = utc1 - utc2;
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

// This function returns the minute counts for two Excel value Date Value
function dateDiffInMins(date1, date2) {
	let miliSec = excelToJSDate(date1) - excelToJSDate(date2);
	let mins = Math.floor(miliSec / 60000);
	return mins;
}

// For Thead Detail3 Data length Shorthening
function truncateText(maxLength) {
	let element = document.querySelectorAll(".truncate-data");
	for (i = 0; i < element.length; i++) {
		truncated = element[i].innerText;
		if (truncated.length > maxLength) {
			truncated = truncated.substr(0, maxLength) + "...";
			element[i].innerText = truncated;
		}
	}
}

$("#resizable554 th").on("drop", function (e) {
	manResTableRender();
});

function popUpHandlerS2Table(e, indexValue) {	
	let targetElementClassList = e.path[5].getAttribute("class");
	let targetElementClass = targetElementClassList.split(" ");

	let tableTargetHead = $(`#style2Con .${targetElementClass[1]} thead th:nth-child(${indexValue})`);
	let tableTargetData = $(`#style2Con .${targetElementClass[1]} tbody td:nth-child(${indexValue}) .mr-tableData`);
	let filterHeading = tableTargetHead[0].textContent;

	$("#col8Filter #tableHeaderPop").html(filterHeading);

	let targetModal = $("#col8Filter #checkbox-table-first tbody");
	const dataC = new Set();
	for (let i = 0; i < tableTargetData.length; i++) {
		dataC.add(tableTargetData[i].textContent);
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
}

function crossHandlerS2Table(eventCross, crossIndex) {
	console.log("Style 2 table cross click...");
}
