import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Store, createStore } from 'redux';
import { Provider } from 'react-redux';

import { App } from './main/components/App';
import rootReducer from './main/reducer';

import { Store as dStore } from '../lib/Store';

import { AppInterface } from './AppInterface';

class Init extends React.PureComponent<undefined, void> {
  private store: dStore<AppInterface>;
  constructor() {
    super();

    this.store = new dStore({
      todos: [
        {text: 'asdf', completed: false, id: 0},
        {text: 'gag3rsdf', completed: true, id: 1},
      ]
    });

    this.store.onUpdate(() => {
      this.forceUpdate();
    })
  }

  render() {
    return <App state={this.store.state} store={this.store} />
  }
}

ReactDOM.render(
  <Init />,
  document.getElementById('app')
);