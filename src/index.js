import './styles/style.scss';
import moment from 'moment';

import generateCalendar from './components/generateCalendar';
import generateReservationTimes from './components/generateReservationTimes';
import generatedTimesFunctionality from './components/generatedTimesFunctionality';

import getData from './components/dataFunctions';

generateCalendar(2019, 1);
generateReservationTimes('2019-02-17');
generatedTimesFunctionality();

getData();

document.querySelector('.next').addEventListener('click', () => {
  if (!document.querySelector('.next').classList.contains('back')) {
    const year = moment()
      .add(1, 'month')
      .year();
    const month = moment()
      .add(1, 'month')
      .month();
    document.querySelector('.next').classList.add('back');
    document.querySelector('.next').textContent = 'Back';
    console.log(month, year);
    generateCalendar(year, month);
  } else {
    const year = moment().year();
    const month = moment().month();
    generateCalendar(year, month);

    document.querySelector('.next').classList.remove('back');
    document.querySelector('.next').textContent = 'Next';
  }
});
