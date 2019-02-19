import moment from 'moment';
import generateReservationList from '../components/generateReservationList';

export default () => {
  const reservationListContainer = document.querySelector('.reservation-list__container');
  const todayBtn = document.querySelector('.reservation-list__btn--today');
  const tomorrowBtn = document.querySelector('.reservation-list__btn--tomorrow');
  const datePicker = document.querySelector('.reservation-list__btn--dateSelector');
  todayBtn.addEventListener('click', () => {
    reservationListContainer.innerHTML = '';
    generateReservationList(moment().format('YYYY-MM-DD'));
    datePicker.value = '';
  });
  tomorrowBtn.addEventListener('click', () => {
    reservationListContainer.innerHTML = '';
    generateReservationList(
      moment()
        .add(1, 'day')
        .format('YYYY-MM-DD'),
    );
    datePicker.value = '';
  });
  datePicker.addEventListener('change', () => {
    reservationListContainer.innerHTML = '';
    generateReservationList(datePicker.value);
  });
};
