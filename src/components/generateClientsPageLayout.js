const clientsPage = document.querySelector('.clients-page');

export default () => {
  // creating tex-container div with its content
  const textContainer = document.createElement('div');
  textContainer.classList.add('text-container');

  const textContainerH2 = document.createElement('h2');
  textContainerH2.classList.add('text-container__h2');
  textContainerH2.appendChild(
    document.createTextNode('Pasirinkite laiką vizitui ir UŽSIREGISTRUOKITE!!'),
  );
  textContainer.appendChild(textContainerH2);

  const textContainerH4 = document.createElement('h4');
  textContainerH4.classList.add('text-container__h4');
  textContainerH4.appendChild(
    document.createTextNode('Daugiau jokio laiko gaišimo nereikalingiems skambučiams'),
  );
  textContainer.appendChild(textContainerH4);
  clientsPage.appendChild(textContainer);

  // creating calendar container with its content
  const caledarContainer = document.createElement('div');
  caledarContainer.classList.add('calendar__container');
  const nextMonthButton = document.createElement('a');
  nextMonthButton.classList.add('calendar__next-month-button');
  nextMonthButton.appendChild(document.createTextNode('Ateinantis mėnuo >'));
  caledarContainer.appendChild(nextMonthButton);

  const calendarMonth = document.createElement('h2');
  calendarMonth.classList.add('calendar__month');
  caledarContainer.appendChild(calendarMonth);

  const table = document.createElement('table');
  table.classList.add('calendar');
  caledarContainer.appendChild(table);

  clientsPage.appendChild(caledarContainer);

  // creating reservation times container with its content
  const reservationTimes = document.createElement('section');
  reservationTimes.classList.add('reservation-times');
  const reservationTimesHeading = document.createElement('h2');
  reservationTimesHeading.classList.add('reservation-times__heading');
  reservationTimesHeading.appendChild(document.createTextNode('Pasirinkite Jums tinkamą laiką:'));
  reservationTimes.appendChild(reservationTimesHeading);

  const reservationTimesContainer = document.createElement('div');
  reservationTimesContainer.classList.add('reservation-times__container');
  reservationTimes.appendChild(reservationTimesContainer);

  clientsPage.appendChild(reservationTimes);
};
