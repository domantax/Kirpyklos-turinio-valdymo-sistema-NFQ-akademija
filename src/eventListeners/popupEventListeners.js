const popupEventListeners = () => {
  const popupContainer = document.querySelector('.reservation-details-popup__container');
  // const registerBtn = document.querySelector('.reservation-submit');
  // const popup = document.querySelector('.reservation-details-popup');

  window.addEventListener('click', (e) => {
    if (e.target === popupContainer) {
      popupContainer.classList.add('hidden');
    }
  });
};

export default popupEventListeners;
