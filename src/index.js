/**
* Redux performance logger
*
* @author  Avraam Mavridis      <avr.mav@gmail.com>
*
*/
export const perflogger = ( store ) => ( next ) => ( action ) => {
  console.log( '%c Dispatching ', 'background: #222; color: #bada55', action );
  const start = performance.now();
  const result = next( action );
  const end = performance.now();
  console.log( `%c Action with type "${action.type}" took ${( end-start ).toFixed( 2 )} milliseconds.`, 'background: #bada55; color: #222' );
  return result;
};

export default perflogger;
