import moment from 'moment';

const handler = (e) => {
  e.preventDefault();
  const id = document
    .querySelector('.reservation-details-popup__container')
    .getAttribute('pass-data');

  document.getElementById(id).classList.add('red', 'reservation-times__container__item--reserved');
  document.getElementById(id).classList.remove('reservation-times__container__item--free');
  const reservation = {
    firstName: document.querySelector('.firstName').value,
    lastName: document.querySelector('.lastName').value,
    email: document.querySelector('.email').value,
    phone: document.querySelector('.phone').value,
    date: moment(id).format('YYYY-MM-DD'),
    time: moment(id).format('HH:mm'),
  };
  console.log(reservation);

  document.querySelector('.reservation-details-popup__container').classList.add('hidden');
};

const register = () => {
  const form = document.querySelector('.reservation-details-popup__form');
  form.addEventListener('submit', handler);
};

export default register;
