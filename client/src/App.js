import './App.css';
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom'; // Import Switch
import Navbar from './components/layouts/Navbar';
import Register from './components/auth/Register';
import Landing from './components/layouts/Landing';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
//redux
import {Provider} from 'react-redux';
import store from './store'

function App() {
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
