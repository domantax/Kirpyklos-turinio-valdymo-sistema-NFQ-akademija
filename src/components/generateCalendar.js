import Calendar from 'calendar-js';
import moment from 'moment';
import calendarFunctionality from './calendarFunctionality';
import calendarOptions from '../options/calendarOptions';

const generateCalendar = (year, month) => {
  // clear previously generated calendar
  document.querySelector('.calendar').innerHTML = '';
  const monthObject = Calendar(calendarOptions).of(year, month);
  // Show month name
  document.querySelector('.calendar__month').textContent = monthObject.month;

  monthObject.weekdaysAbbr.forEach((weekday) => {
    const th = document.createElement('th');
    const thContentDiv = document.createElement('div');
    const thSpan = document.createElement('span');
    thSpan.appendChild(document.createTextNode(weekday));
    th.classList.add('calendar__cell');
    thContentDiv.classList.add('calendar__cell__content');
    thSpan.classList.add('calendar__cell__content-span');
    thContentDiv.appendChild(thSpan);
    th.appendChild(thContentDiv);
    document.querySelector('.calendar').appendChild(th);
  });

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
          td.classList.add('active');
          td.classList.add('calendar__cell--future');
        } else if (moment(id).isBefore(today)) {
          td.classList.add('calendar__cell--previous');
        } else {
          td.classList.add('calendar__cell--future');
        }
        if (j === 0 || j === 6) {
          td.classList.remove('calendar__cell--future', 'calendar__cell--previous');
          td.classList.add('calendar__cell--weekend');
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
