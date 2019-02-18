import popupEventListeners from './popupEventListeners';

const reservationTimeEventListener = () => {
  const popup = document.querySelector('.hidden');
  const popupTimeDisplay = document.querySelector('.reservation-details-popup__time');
  const reservationTimesContainer = document.querySelector('.reservation-times__container');
  reservationTimesContainer.addEventListener('click', (e) => {
    popup.classList.remove('hidden');
    popupTimeDisplay.textContent = e.target.id;
  });
  popupEventListeners();
};

export default reservationTimeEventListener;
