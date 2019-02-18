import generateReservationTimes from './generateReservationTimes';

const calendarFunctionality = () => {
  const calendarCells = document.querySelectorAll('.calendar__cell--future');
  calendarCells.forEach((cell) => {
    cell.addEventListener('click', () => {
      if (document.querySelector('.active')) {
        document.querySelector('.active').classList.remove('active');
      }
      console.log(typeof cell.id);
      document.querySelector('.reservation-times__container').innerHTML = '';
      generateReservationTimes(cell.id);
      cell.classList.add('active');
    });
  });
};

export default calendarFunctionality;
