import React, { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  NavLink,
} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import LayoutComponent from './layout/LayoutComponent/LayoutComponent'
import ColocatairesView from './views/ColocatairesView/ColocatairesView'
import DepensesView from './views/DepensesView/DepensesView'
import TransactionsView from './views/TransactionsView/TransactionsView'
import DashboardView from './views/DashboardView/DashboardView'
import SignInView from './views/SignInView/SignInView'
import SignUpView from './views/SignUpView/SignUpView'
import HomeView from './views/HomeView/HomeView'

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken))
}

function getToken() {
  const tokenString = sessionStorage.getItem('token')
  //const userToken = JSON.parse(tokenString);
  console.log(tokenString)
  return tokenString
}
function deleteToken() {
  sessionStorage.removeItem('token')
}
function App() {
  const token = getToken()

  function signin(user) {
    setToken(user)
    window.location = '/'
  }
  function signup(user) {
    setToken(user)
    window.location = '/'
  }
  function logout() {
    deleteToken()
    window.location = '/'
  }
  /**/
  if (!token) {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<LayoutComponent logout={logout} user={token} />}
            >
              <Route path="/" element={<HomeView />} />
              <Route path="signin" element={<SignInView signin={signin} />} />
              <Route path="signup" element={<SignUpView signup={signup} signin={signin}/>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
  console.log('loged')
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<LayoutComponent logout={logout} user={token} />}
          >
            <Route path="/" element={<DashboardView />} />
            <Route path="colocataires" element={<ColocatairesView />} />
            <Route path="depenses" element={<DepensesView />} />
            <Route path="transactions" element={<TransactionsView />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
