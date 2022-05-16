import React from 'react';
import Header from './components/Header';
import MainComponent from './components/MainComponent';
import './App.css';
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <MainComponent />
      </div>
    </Provider>
  );
}

export default App;
