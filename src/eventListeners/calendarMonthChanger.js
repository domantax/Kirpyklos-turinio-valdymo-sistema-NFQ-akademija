import moment from 'moment';
import generateCalendar from '../components/generateCalendar';

export default () => {
  const nextButton = document.querySelector('.calendar__next-month-button');
  nextButton.addEventListener('click', () => {
    if (!nextButton.classList.contains('back')) {
      const year = moment()
        .add(1, 'month')
        .year();
      const month = moment()
        .add(1, 'month')
        .month();
      nextButton.classList.add('back');
      nextButton.textContent = '< Dabartinis mėnuo';
      generateCalendar(year, month);
    } else {
      const year = moment().year();
      const month = moment().month();
      generateCalendar(year, month);

      nextButton.classList.remove('back');
      nextButton.textContent = 'Ateinantis mėnuo >';
    }
  });
};
