import './App.css';
import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom'; // Import Switch
import Navbar from './components/layouts/Navbar';
import Register from './components/auth/Register';
import Landing from './components/layouts/Landing';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import { loadUser } from './actions/auth';
//redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';


if(localStorage.token){
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    // check for token in LS when app first runs
    if (localStorage.token) {
      // if there is a token set axios headers for all requests
      // setAuthToken(localStorage.token);

      // try to fetch a user, if no token or invalid token we
     // will get a 401 response from our API
     store.dispatch(loadUser());
    }


    // log user out from all tabs if they log out in one tab
    // window.addEventListener('storage', () => {
    //   if (!localStorage.token) store.dispatch({ type: LOGOUT });
    // });
  }, []);

  return (
    <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />
        <Alert/>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Fragment>
    </Router>
    </Provider>
  );
}

export default App;
