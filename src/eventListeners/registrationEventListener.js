const register = () => {
  const form = document.querySelector('.reservation-details-popup__form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = document.querySelector('.reservation-details-popup__time').textContent;
    console.log(id);
    document.getElementById(id).classList.add('red');
  });
};

export default register;
