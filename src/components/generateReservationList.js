import { filterReservations } from './dataFunctions';

export default (date) => {
  const reservationListContainer = document.querySelector('.reservation-list__container');

  const todayReservations = filterReservations(date);
  if (todayReservations.length !== 0) {
    todayReservations.forEach((reservation) => {
      const reservationDiv = document.createElement('div');
      reservationDiv.classList.add('reservation-list__item');

      const time = document.createElement('p');
      time.classList.add('reservation-list__item__time');
      time.appendChild(document.createTextNode(`${reservation.date} ${reservation.time}`));
      reservationDiv.appendChild(time);

      const name = document.createElement('p');
      name.classList.add('reservation-list__item__name');
      name.appendChild(document.createTextNode(`Vardas: ${reservation.firstName}`));
      reservationDiv.appendChild(name);

      const phone = document.createElement('p');
      phone.classList.add('reservation-list__item__phone');
      phone.appendChild(document.createTextNode(`Telefonas: ${reservation.phone}`));
      reservationDiv.appendChild(phone);

      const email = document.createElement('p');
      email.classList.add('reservation-list__item__email');
      email.appendChild(document.createTextNode(`El. paštas: ${reservation.email}`));
      reservationDiv.appendChild(email);

      reservationListContainer.appendChild(reservationDiv);
    });
  } else {
    const p = document.createElement('p');
    p.classList.add('no-reservations');
    p.appendChild(document.createTextNode('Užsakymų nėra'));
    reservationListContainer.appendChild(p);
  }
};
