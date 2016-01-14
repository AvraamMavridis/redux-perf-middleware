/**
 * Simple Input Component
 *
 * @author  Avraam Mavridis      <avraam.mavridis@sociomantic.com>
 *
 */
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
