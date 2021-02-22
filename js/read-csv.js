$("#exelFile").change((e) => {
  let recExelFile = e.target.files[0];
  if (recExelFile) {
    const fileReader = new FileReader();
    fileReader.readAsBinaryString(recExelFile);
    fileReader.onload = (e) => {
      let wb = XLSX.read(e.target.result, { type: "binary" });
      const sheet = wb.SheetNames[0];
      if (wb && sheet) {
        const data = XLSX.utils.sheet_to_json(wb.Sheets[sheet]);
        console.log(data);
      }
    };
  }
});