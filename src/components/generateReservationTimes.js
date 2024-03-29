import moment from 'moment';
import { markReservedTimes } from './dataFunctions';
import generatedTimesFunctionality from './generatedTimesFunctionality';

const generateReservationTimes = (date) => {
  const startTime = moment('10:00', 'HH:mm');
  const endTime = moment('20:00', 'HH:mm');
  let time = startTime;

  const reservationTimesContainer = document.querySelector('.reservation-times__container');
  while (moment(time).isBefore(endTime)) {
    const div = document.createElement('div');
    const id = `${moment(date).format('YYYY-MM-DD')}T${time.format('HH:mm')}`;
    div.id = id;
    div.classList.add(
      'reservation-times__container__item',
      'reservation-times__container__item--free',
    );
    const timeString = document.createTextNode(`${time.format('HH:mm')} Laisvas`);
    div.appendChild(timeString);
    reservationTimesContainer.appendChild(div);
    time = moment(time).add(15, 'minutes');
  }
  markReservedTimes(date);
  generatedTimesFunctionality();
};

export default generateReservationTimes;
