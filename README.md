# redux-perf-middleware

[![npm version](https://badge.fury.io/js/redux-perf-middleware.svg)](https://badge.fury.io/js/redux-perf-middleware) [![CocoaPods](https://img.shields.io/cocoapods/l/AFNetworking.svg)]()
[![semantic-versioning](https://img.shields.io/badge/semantic%20-versioning-green.svg)]()


Measure the time that the actions need to change the state

### Install
[![NPM](https://nodei.co/npm/redux-perf-middleware.png?mini=true)](https://nodei.co/npm/redux-perf-middleware/)

### Usage

```javascript
import perflogger from 'redux-perf-middleware';

const createStoreWithMiddleware = applyMiddleware( perflogger )(createStore);
const store = createStoreWithMiddleware(reducer);
```

This project adheres to [Semantic Versioning](http://semver.org/).



### Example

**Dumb Reducer**

```javascript
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
```

**Dumb Component**

```javascript
 import React, { Component } from 'react';
 import { connect } from 'react-redux';

class Input extends Component {
  /**
   * Renders the markup for the topbar
   */
  render() {
    const { dispatch } = this.props;
    return (
        <input onKeyDown={ () => dispatch({ type: 'SLOW' })} />
    );
  }
};

const selector = function( { default: elements } ){
  return elements;
}

export default connect(selector)( Input );
```

On every keydown **Redux** will dispatch the action with type SLOW, and in the console the middleware will log something like:

![perflogger](http://oi68.tinypic.com/2h37fqb.jpg)

Or check the [sample app](https://github.com/AvraamMavridis/redux-perf-middleware/tree/master/app)

## Contributing
Feel free to open issues, make suggestions or send PRs.
This project adheres to the Contributor Covenant [code of conduct](http://contributor-covenant.org/). By participating, you are expected to uphold this code.

## Contact

Twitter: [@avraamakis](https://twitter.com/avraamakis)

### License
MIT


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/AvraamMavridis/redux-perf-middleware/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

