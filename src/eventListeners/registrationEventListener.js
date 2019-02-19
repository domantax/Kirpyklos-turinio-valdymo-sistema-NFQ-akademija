import moment from 'moment';
import { filterNames, saveToLocalStorage } from '../components/dataFunctions';

const handler = (e) => {
  e.preventDefault();
  const id = document
    .querySelector('.reservation-details-popup__container')
    .getAttribute('pass-data');

  const reservation = {
    firstName: document.querySelector('.firstName').value,
    lastName: document.querySelector('.lastName').value,
    email: document.querySelector('.email').value,
    phone: document.querySelector('.phone').value,
    date: moment(id).format('YYYY-MM-DD'),
    time: moment(id).format('HH:mm'),
  };
  const filteredNames = filterNames(reservation);
  if (filteredNames.length === 0) {
    document.getElementById(id).textContent = `${reservation.time} Užimtas`;
    document.getElementById(id).classList.add('reservation-times__container__item--reserved');
    document.getElementById(id).classList.remove('reservation-times__container__item--free');
    saveToLocalStorage(reservation);
    document.querySelector('.reservation-details-popup__container').classList.add('hidden');
  } else {
    document.querySelector('.alert').textContent = 'Galima tik viena aktyvi registracija vienam klientui';
  }
};

const register = () => {
  const form = document.querySelector('.reservation-details-popup__form');

  form.addEventListener('submit', handler);
};

export default register;
