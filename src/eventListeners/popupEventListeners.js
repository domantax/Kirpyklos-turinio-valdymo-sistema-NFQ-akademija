import exitIcon from '../assets/img/exit.png';

const popupEventListeners = () => {
  const popupContainer = document.querySelector('.reservation-details-popup__container');
  document.querySelector('.exit-icon').src = exitIcon;
  window.addEventListener('click', (e) => {
    if (e.target === popupContainer) {
      popupContainer.classList.add('hidden');
    }
  });
  document.querySelector('.exit-popup').addEventListener('click', () => {
    popupContainer.classList.add('hidden');
  });
};

export default popupEventListeners;
