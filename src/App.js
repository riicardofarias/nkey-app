import React, { Component } from 'react';
import Routes from './routes';
import { Provider } from 'react-redux'
import store from './store'

import 'bulma/css/bulma.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Routes/>
        </Provider>
      </div>
    );
  }
}

export default App;
