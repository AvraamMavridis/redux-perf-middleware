/**
* Redux performance logger
*
* @author  Avraam Mavridis      <avr.mav@gmail.com>
*
*/

const present = require('present')

export const perflogger = store => next => action => {
      console.log( '%c Dispatching ', 'background: #222; color: #bada55', action );
      const start = present();
      const result = next( action );
      const end = present();
      console.log( `%c Action with type "${action.type}" took ${( end-start ).toFixed( 2 )} milliseconds.`, 'background: #bada55; color: #222' );
      return result;
};

export default perflogger;
