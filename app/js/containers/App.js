/**
 * Main Component, Container
 *
 * @author  Avraam Mavridis      <avr.mav@gmail.com>
 *
 */
'use strict';

/** External Dependecies */
import React from 'react';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import configureStore from '../store/configureStore';
import Input from '../components/Input';
const store = configureStore();

export class App extends React.Component
{
  render() {
    return (
      <Provider store={ store }>
        <Input/>
      </Provider>
    );
  }
}
