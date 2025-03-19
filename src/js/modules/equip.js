window.equipOpen = function(){
  moduleOpen('./src/html/equip.html')
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