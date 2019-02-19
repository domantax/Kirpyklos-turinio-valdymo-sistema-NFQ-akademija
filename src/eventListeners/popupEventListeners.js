const popupEventListeners = () => {
  const popupContainer = document.querySelector('.reservation-details-popup__container');

  window.addEventListener('click', (e) => {
    if (e.target === popupContainer) {
      popupContainer.classList.add('hidden');
    }
  });
};

export default popupEventListeners;
