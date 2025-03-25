import * as XLSX from 'xlsx/xlsx.mjs';
import * as fs from 'fs';
import { Modal } from 'bootstrap'

XLSX.set_fs(fs);

window.equipTtOpen = function(){
  moduleOpen('./src/html/equipTt.html')
    .then( () => {

    });
}

// equipTtOpen();

window.equipDownload = (e) => {
  e.preventDefault();
  const format = e.target.querySelector('[name="format"]:checked').value;
  console.log(format)
  var result = document.getElementById("equipResult");
  var workbook = XLSX.utils.table_to_book(result);
  XLSX.writeFile(workbook, `Report.${format}`)
}

window.equipFilter = (e) => {
  e.preventDefault();
  console.log(e.target)
}

window.equipUpdate = (e) => {
  e.preventDefault();
  console.log(e.target)
  Modal.getInstance('#euqipTtUpdateModal').hide()
}