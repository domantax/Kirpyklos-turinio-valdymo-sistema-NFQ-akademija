import moment from 'moment';
import generateCalendar from '../components/generateCalendar';
import generateReservationTimes from '../components/generateReservationTimes';

export default () => {
  const nextButton = document.querySelector('.calendar__next-month-button');
  nextButton.addEventListener('click', () => {
    const reservationTimesContainer = document.querySelector('.reservation-times__container');
    if (!nextButton.classList.contains('back')) {
      reservationTimesContainer.innerHTML = '';
      const year = moment()
        .add(1, 'month')
        .year();
      const month = moment()
        .add(1, 'month')
        .month();
      nextButton.classList.add('back');
      nextButton.textContent = '< Dabartinis mėnuo';
      generateCalendar(year, month);
      const id = `${year}-${moment()
        .add(1, 'month')
        .format('MM')}-1`;
      generateReservationTimes(id);
      document.getElementById(id).classList.add('active');
      nextButton.classList.add('back');
    } else {
      reservationTimesContainer.innerHTML = '';
      const year = moment().year();
      const month = moment().month();
      generateCalendar(year, month);
      generateReservationTimes(moment().format('YYYY-MM-DD'));

      nextButton.classList.remove('back');
      nextButton.textContent = 'Ateinantis mėnuo >';
    }
  });
};
