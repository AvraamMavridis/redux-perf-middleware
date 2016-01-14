function slow(){
  let sum;
  for(let i = 0; i< 10000; i++){
    for(let j = 0; j< 10000; j++)
    {
      sum = i+j;
    }
  }
  return sum;
}


export const Elements = function ( state = {}, action ) {

  switch ( action.type )
  {
    case 'SLOW':
      return slow();

    default:
      return state;
  }
};
