import * as XLSX from 'xlsx/xlsx.mjs';
import * as fs from 'fs';
import { Modal } from 'bootstrap'

XLSX.set_fs(fs);

window.complementaryProductsOpen = function(){
  moduleOpen('./src/html/complementaryProducts.html')
    .then( () => {

    });
}

window.complementaryProductsDownload = (e) => {
  e.preventDefault();
  const format = e.target.querySelector('[name="format"]:checked').value;
  console.log(format)
  var result = document.getElementById("equipResult");
  var workbook = XLSX.utils.table_to_book(result);
  XLSX.writeFile(workbook, `Report.${format}`)
}

window.complementaryProductsFilter = (e) => {
  e.preventDefault();
  console.log(e.target)
}

window.complementaryProductsGroupCreate = (e) => {
  e.preventDefault();
  console.log(e.target);
  Modal.getInstance('#complementaryProductsModal').hide()
}

window.complementaryProductsAdd = () => {
  const form = document.querySelector('#complementaryProductsForm .form-body');
  form.insertAdjacentHTML(
    'beforeend',
    `
      <div class="form-group mb-3">
        <div class="row justify-content-between align-items-center">
          <div class="col-5">Код позиции</div>
          <div class="col-6">
            <input class="form-control" list="codeDatalist" id="code" name="code" placeholder="Код позиции" required>
            <datalist id="codeDatalist">
              <option value="Код позиции 1">
              <option value="Код позиции 2">
              <option value="Код позиции 3">
              <option value="Код позиции 4">
              <option value="Код позиции 5">
            </datalist>
          </div>
          <div class="col-1">
            <button class="btn p-0 btn-equip--download" onclick="complementaryProductsRemove(this);" type="button">
              <i class="fa fa-xmark"></i>
            </button>
          </div>
        </div>
      </div>
    `
  )
}
window.complementaryProductsRemove = (elem) => {
  elem.closest('.form-group').remove();
}