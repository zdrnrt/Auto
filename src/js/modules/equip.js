import {Modal} from 'bootstrap'

window.equipOpen = function(){
  moduleOpen('./src/html/equip.html')
  .then( () => {
      
      window.equipUpdateModal = new Modal(document.getElementById('euqipUpdateModal'), {
        backdrop: true, keyboard: true
      })
      document.getElementById('equipUpdateOpen').addEventListener('click', ()=>{
        window.equipUpdateModal.show();
      })
});


}

window.equipDownload = (e) => {
  e.preventDefault();
  const format = e.target.querySelector('[name="format"]:checked').value;
  console.log(format)
}

window.equipFilter = (e) => {
  e.preventDefault();
  console.log(e.target)
}

window.equipUpdate = (e) => {
  e.preventDefault();
  console.log(e.target)
  window.equipUpdateModal.hide()
}