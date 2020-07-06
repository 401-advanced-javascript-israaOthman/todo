import React from 'react';

import ToDo from './components/todo.js';
import Todoconnected from './components/todo-connected'

export default class App extends React.Component {
  render() {
    return (
      <>
        <Todoconnected />
      </>
    );
  }
}