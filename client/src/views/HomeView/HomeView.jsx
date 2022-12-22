import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import './HomeView.css'
class HomeView extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="landing ">
        <main>
          <div className="landing-heading">
            <img
              align="middle"
              className="landing-logo"
              src='../images/logo.png'
              alt=""
            />
            <h1 className="landing-header">Split expenses with friends.</h1>
            <p className="landing-desc">
              <strong>Share</strong> bills and IOUs. <strong>Make sure</strong>{' '}
              everyone gets paid back. <strong>Totally free</strong> for web
            </p>
            <img
              className="landing-big"
              src='../images/dsiplay.png'
              alt=""
            />
          </div>

          <div className="landing-feature">
            <div>
              <img
                className="landing-img"
                src='../images/splitwise.png'
                alt=""
              />
            </div>
            <div className="landing-content">
              <h1>Splitting expenses has </h1>
              <h1>never been easier .</h1>
              <ul>
                <li>
                  <i class="fas fa-check-circle"></i> &nbsp;&nbsp;Share bills
                  and IOUs,
                </li>
                <li>
                  <i class="fas fa-check-circle"></i> &nbsp;&nbsp;Make sure
                  everyone gets paid back
                </li>
                <li>
                  <i class="fas fa-check-circle"></i> &nbsp;&nbsp;Totally Free
                  for web,iPhone,and Android.
                </li>
              </ul>

              <a href="http://localhost:3000/signup">
                {' '}
                <button className="landing-button"> Get Started</button>
              </a>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default HomeView
