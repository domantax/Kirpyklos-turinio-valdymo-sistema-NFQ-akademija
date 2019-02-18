import reservationTimeEventListener from '../eventListeners/reservationTimeEventListener';
import register from '../eventListeners/registrationEventListener';

const generatedTimesFunctionality = () => {
  reservationTimeEventListener();
  register();
};

export default generatedTimesFunctionality;
