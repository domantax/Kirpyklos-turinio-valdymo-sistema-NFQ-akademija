import moment from 'moment';
import popupEventListeners from './popupEventListeners';

const reservationTimeEventListener = () => {
  const popup = document.querySelector('.hidden');
  const popupTimeDisplay = document.querySelector('.reservation-details-popup__time');
  const reservationTimesContainer = document.querySelector('.reservation-times__container');
  reservationTimesContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('reservation-times__container__item--free')) {
      popup.classList.remove('hidden');
      popup.setAttribute('pass-data', e.target.id);
      popupTimeDisplay.textContent = moment(e.target.id)
        .locale('lt')
        .format('YYYY MMMM DD HH:mm')
        .toUpperCase();
    }
  });
  popupEventListeners();
};

export default reservationTimeEventListener;
