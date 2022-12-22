import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet, NavLink } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import LayoutComponent from './layout/LayoutComponent/LayoutComponent';
import ColocatairesView from './views/ColocatairesView/ColocatairesView';
import DepensesView from './views/DepensesView/DepensesView';
import TransactionsView from './views/TransactionsView/TransactionsView';
import DashboardView from './views/DashboardView/DashboardView';
import LoginView from './views/LoginView/LoginView';
import SignUpView from './views/SignUpView/SignUpView';
import HomeView from './views/HomeView/HomeView';

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  //const userToken = JSON.parse(tokenString);
  console.log(tokenString);
  return tokenString;
}
function deleteToken() {
  sessionStorage.removeItem('token');
}
function App() {
  const token = getToken();

  function login(user) {
    setToken(user);
    window.location.reload();
  }
  function logout() {
    deleteToken();
    window.location.reload();
  }
  if (!token) {
    return <LoginView login={login} />
  }
  console.log("loged");
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutComponent logout={logout} />}>
            <Route path="/" element={<HomeView />} />
            <Route path="colocataires" element={<ColocatairesView />} />
            <Route path="depenses" element={<DepensesView />} />
            <Route path="transactions" element={<TransactionsView />} />
            <Route path="signup" element={<SignUpView />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
