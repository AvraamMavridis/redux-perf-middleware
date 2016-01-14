'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
* Redux performance logger
*
* @author  Avraam Mavridis      <avr.mav@gmail.com>
*
*/
var perflogger = exports.perflogger = function perflogger(store) {
  return function (next) {
    return function (action) {
      console.log('dispatching', action);
      console.log('%c Dispatching ', 'background: #222; color: #bada55', action);
      var start = performance.now();
      var result = next(action);
      var end = performance.now();
      console.log('%c Action with type "' + action.type + '" took ' + (end - start).toFixed(2) + ' milliseconds.', 'background: #bada55; color: #222');
      return result;
    };
  };
};

exports.default = perflogger;