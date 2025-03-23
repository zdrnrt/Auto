window.openTab = (elem) => {
  if (elem.classList.contains('tab-list__btn--active')){
    return
  }
  const container = elem.closest('.tab-list');
  container.querySelector('.tab-list__btn--active').classList.remove('tab-list__btn--active');
  elem.classList.add('tab-list__btn--active');
  container.querySelector('.tab-list__item--active').classList.remove('tab-list__item--active');
  console.log(container.querySelector(`#${elem.dataset.tab}`));
  container.querySelector(`#${elem.dataset.tab}`).classList.add('tab-list__item--active');
  
}