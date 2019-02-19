import moment from 'moment';
import data from '../data/data';

const filterDayReservations = selectedDate => iterationDay => iterationDay.date === selectedDate;

const loadFromLocalStorage = () => {
  let reservationsData;
  if (localStorage.getItem('reservationsData')) {
    reservationsData = JSON.parse(localStorage.getItem('reservationsData'));
  } else {
    reservationsData = data;
  }
  reservationsData.reservations.sort((a, b) => {
    if (moment(a.time, 'HH:mm').isBefore(moment(b.time, 'HH:mm'))) {
      return -1;
    }
    if (moment(a.time, 'HH:mm').isAfter(moment(b.time, 'HH:mm'))) {
      return 1;
    }
    return 0;
  });
  return reservationsData;
};

const saveToLocalStorage = (object) => {
  const storage = loadFromLocalStorage();
  storage.reservations.push(object);
  localStorage.setItem('reservationsData', JSON.stringify(storage));
};

const markReservedTimes = (date) => {
  const reservationsData = loadFromLocalStorage();
  const filteredReservations = reservationsData.reservations.filter(
    filterDayReservations(moment(date).format('YYYY-MM-DD')),
  );
  if (filteredReservations.length !== 0) {
    filteredReservations.forEach((reservation) => {
      document
        .getElementById(`${moment(reservation.date).format('YYYY-MM-DD')}T${reservation.time}`)
        .classList.add('reservation-times__container__item--reserved');
      document
        .getElementById(`${moment(reservation.date).format('YYYY-MM-DD')}T${reservation.time}`)
        .classList.remove('reservation-times__container__item--free');
      document.getElementById(
        `${moment(reservation.date).format('YYYY-MM-DD')}T${reservation.time}`,
      ).textContent = `${reservation.time} Užimtas`;
    });
  }
};

const filterReservations = (filterFactor) => {
  const reservationsData = loadFromLocalStorage();
  const filteredData = reservationsData.reservations.filter(
    reservation => reservation.date === filterFactor,
  );
  return filteredData;
};

const filterNames = (person) => {
  const reservationsData = loadFromLocalStorage();
  const filteredData = reservationsData.reservations.filter(
    reservation => reservation.email.toLowerCase() === person.email.toLowerCase()
      && reservation.firstName.toLowerCase() === person.firstName.toLowerCase()
      && reservation.lastName.toLowerCase() === person.lastName.toLowerCase(),
  );
  return filteredData;
};

export {
  markReservedTimes, filterReservations, filterNames, saveToLocalStorage,
};
