import moment from 'moment';
import data from '../data/data';

const filterDayReservations = selectedDate => iterationDay => iterationDay.date === selectedDate;

const markReservedTimes = (date) => {
  const filteredReservations = data.reservations.filter(
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
  const filteredData = data.reservations.filter(reservation => reservation.date === filterFactor);
  return filteredData;
};

export { markReservedTimes, filterReservations };
