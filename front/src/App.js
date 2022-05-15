import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import React from 'react';
import Auth from "./page/Auth";
import Main from "./page/Main";

function App() {
  return (
      <Router>
        <Routes>
            <Route path='/' exact={true} element={<Auth/>}/>
            <Route path='/main' exact={true} element={<Main/>}/>
        </Routes>
      </Router>
  );
}

export default App;
