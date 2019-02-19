export default () => {
  const hairdressersPage = document.querySelector('.hairdressers-page');
  const pageHeading = document.createElement('h2');
  pageHeading.classList.add('hairdressers-page-heading');
  pageHeading.appendChild(document.createTextNode('Rezervacijos'));
  hairdressersPage.appendChild(pageHeading);

  const buttonsContainer = document.createElement('div');
  buttonsContainer.classList.add('reservation-list__buttons');

  const todayBtn = document.createElement('a');
  todayBtn.classList.add('reservation-list__btn', 'reservation-list__btn--today');
  todayBtn.appendChild(document.createTextNode('Šiandien'));
  buttonsContainer.appendChild(todayBtn);

  const tomorrowBtn = document.createElement('a');
  tomorrowBtn.classList.add('reservation-list__btn', 'reservation-list__btn--tomorrow');
  tomorrowBtn.appendChild(document.createTextNode('Rytoj'));
  buttonsContainer.appendChild(tomorrowBtn);

  const selectDate = document.createElement('input');
  selectDate.classList.add('reservation-list__btn', 'reservation-list__btn--dateSelector');
  selectDate.setAttribute('type', 'date');
  buttonsContainer.appendChild(selectDate);

  hairdressersPage.appendChild(buttonsContainer);

  const reservationsContainer = document.createElement('div');
  reservationsContainer.classList.add('reservation-list__container');

  hairdressersPage.appendChild(reservationsContainer);
};
