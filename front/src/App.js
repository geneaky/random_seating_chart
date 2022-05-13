import { Route, Routes } from 'react-router-dom';
import AuthPage from "./pages/AuthPage";
import MainPage from "./pages/MainPage";
import {useEffect} from "react";
import {useNavigate} from "react-router";
import {BrowserRouter} from "react-router-dom";


function App() {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/auth');
    },[]);

  return (
      <>
      <BrowserRouter>
        <p>hi</p>
        <Routes>
            <Route path={'/auth'} exact={true} component={AuthPage}/>
            <Route path={'/main'} exact={true} component={MainPage}/>
        </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
