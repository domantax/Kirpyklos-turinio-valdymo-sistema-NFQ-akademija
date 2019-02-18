import Calendar from 'calendar-js';
import moment from 'moment';
import calendarFunctionality from './calendarFunctionality';

const generateCalendar = (year, month) => {
  document.querySelector('.calendar').innerHTML = '';
  const calendarOptions = {
    months: [
      'Sausis',
      'Vasaris',
      'Kovas',
      'Balandis',
      'Gegužė',
      'Birželis',
      'Liepa',
      'Rugpjūtis',
      'Rugsėjis',
      'Spalis',
      'Lapkritis',
      'Gruodis',
    ],
    monthsAbbr: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  };
  const monthObject = Calendar(calendarOptions).of(year, month);
  document.querySelector('.month').textContent = monthObject.month;
  console.log(monthObject);
  // monthObject.calendar - 2D array of month days [[],[]...]
  for (let i = 0; i < monthObject.calendar.length; i += 1) {
    const tr = document.createElement('tr');
    for (let j = 0; j < monthObject.calendar[i].length; j += 1) {
      const td = document.createElement('td');
      const cellContentDiv = document.createElement('div');
      const span = document.createElement('span');
      let day;
      const currentDay = monthObject.calendar[i][j];
      if (currentDay !== 0) {
        td.classList.add('calendar__cell');
        cellContentDiv.classList.add('calendar__cell__content');
        span.classList.add('calendar__cell__content-span');
        day = document.createTextNode(currentDay);
        span.appendChild(day);
        const id = `${monthObject.year}-${monthObject.monthAbbr}-${currentDay}`;
        td.id = id;
        const today = moment().format('YYYY-MM-DD');
        if (moment(id).isSame(today)) {
          td.classList.add('calendar__cell--today');
          td.classList.add('calendar__cell--future');
        } else if (moment(id).isBefore(today)) {
          td.classList.add('calendar__cell--previous');
        } else {
          td.classList.add('calendar__cell--future');
        }
      }
      cellContentDiv.appendChild(span);
      td.appendChild(cellContentDiv);
      tr.appendChild(td);
    }
    document.querySelector('.calendar').appendChild(tr);
  }
  calendarFunctionality();
};

export default generateCalendar;
