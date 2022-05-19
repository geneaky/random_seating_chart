import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './components/Header';
import MainComponent from './components/MainComponent';
import './App.css';
import store from './store';
import { Provider } from 'react-redux';
import Auth from "./pages/Auth";

function App() {
  return (
      <Router>
          <Routes>
            <Route path={'/'} exact={true} element={<Auth/>}/>
            <Route path={'/main'} exact={true} element={
              <Provider store={store}>
                <div>
                  <Header />
                  <MainComponent />
                </div>
              </Provider>
            }/>
          </Routes>
      </Router>
  );
}

export default App;
