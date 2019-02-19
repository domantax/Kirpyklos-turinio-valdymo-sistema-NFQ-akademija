import moment from 'moment';
import generateCalendar from './generateCalendar';
import generateReservationTimes from './generateReservationTimes';
import calendarMonthChanger from '../eventListeners/calendarMonthChanger';
import loadHeroImage from './loadHeroImage';
import {
  clientsEvent,
  hairdressersEvent,
} from '../eventListeners/clientsHairdressersBtnEventListeners';

export default () => {
  window.addEventListener('DOMContentLoaded', () => {
    loadHeroImage();
    const month = moment().month();
    const year = moment().year();
    const date = moment().format('YYYY-MM-DD');
    generateCalendar(year, month);
    generateReservationTimes(date);
    calendarMonthChanger();
    clientsEvent();
    hairdressersEvent();
  });
};
