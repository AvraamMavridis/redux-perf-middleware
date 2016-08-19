/**
* Redux performance logger
*
* @author  Avraam Mavridis      <avr.mav@gmail.com>
*
*/

export const perflogger = store => next => action => {
  const browserHasPerformanceAPI = typeof window.performance === "object";

  if( browserHasPerformanceAPI )
  {
      console.log( '%c Dispatching ', 'background: #222; color: #bada55', action );
      const start = performance.now();
      const result = next( action );
      const end = performance.now();
      console.log( `%c Action with type "${action.type}" took ${( end-start ).toFixed( 2 )} milliseconds.`, 'background: #bada55; color: #222' );
      return result;
  }
  else
  {
      const browser = require( 'detect-browser' );
      console.warn( browser.name + ' ' + browser.version + ' does not support the Performance API.' );
      return next( action );
  }

};

export default perflogger;
