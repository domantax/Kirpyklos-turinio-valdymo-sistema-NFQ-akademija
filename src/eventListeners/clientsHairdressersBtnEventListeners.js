import moment from 'moment';
import generateCalendar from '../components/generateCalendar';
import generateReservationTimes from '../components/generateReservationTimes';
import calendarMonthChanger from './calendarMonthChanger';
import generateClientsPageLayout from '../components/generateClientsPageLayout';
import generateHairdressersPageLayout from '../components/generateHairdressersPageLayout';

import generateReservationList from '../components/generateReservationList';
import reservationListEventListeners from './reservationListEventListeners';

const hairdressersBtn = document.querySelector('.navButton--hairdressers');
const clientsBtn = document.querySelector('.navButton--clients');
const clientsPage = document.querySelector('.clients-page');
const hairdressersPage = document.querySelector('.hairdressers-page');

const hairdressersEvent = () => {
  hairdressersBtn.addEventListener('click', () => {
    clientsPage.innerHTML = '';
    generateHairdressersPageLayout();
    generateReservationList(moment().format('YYYY-MM-DD'));
    reservationListEventListeners();
  });
};

const clientsEvent = () => {
  clientsBtn.addEventListener('click', () => {
    hairdressersPage.innerHTML = '';
    const month = moment().month();
    const year = moment().year();
    const date = moment().format('YYYY-MM-DD');
    generateClientsPageLayout();
    generateCalendar(year, month);
    generateReservationTimes(date);
    calendarMonthChanger();
  });
};

export { hairdressersEvent, clientsEvent };
