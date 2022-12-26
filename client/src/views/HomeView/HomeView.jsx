import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { getDepensesApi } from '../../services/DepensesApiService'
import { getTransactionsApi } from '../../services/TransactionsApiService'
import { Button, Form } from 'react-bootstrap'
import './HomeView.css'
class HomeView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      depenses: [],
      transactions: [],
      mois: [
        'Janvier',
        'Février',
        'Mars',
        'Avril',
        'Mai',
        'Juin',
        'Juillet',
        'Août',
        'Septembre',
        'Octobre',
        'Novembre',
        'Décembre',
      ],
    }
  }
  async componentDidMount() {
    let response = await getDepensesApi()
    let responseTransactions = await getTransactionsApi()
    this.setState({
      depenses: response.data.data,
      transactions: responseTransactions.data.data,
    })
  }
  setPeriode = (id) => {
}
  renderAA() {
    return (
      <>
        <div style={{ top: '120px' }}>
          <h1 style={{ marginLeft: '200px' }}>Lister Les Dépenses</h1>
          <div className="container col-md-8 col-md-offset-2">
            <br />
            <div className="container col-md-10 col-md-offset-1">
              <div className="row">
                <div>
                  {/* <TextField InputLabelProps={{ shrink: true,}} id="standard-basic" label="Chercher Les Dépenses..." required className={classes.textfield} onChange={e => setSearch(e.target.value)} /> */}
                </div>
              </div>
              <br />
              <br />
              <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4"></div>
                <div className="col-md-4">
                  <Form.Group className="mb-3">
                    <Form.Label>Consulter Par Période</Form.Label>
                    <Form.Select onChange={(e) => this.setPeriode(e.target.value)}>
                      <option value={0}>Toutes Les Dépenses</option>
                      <option value={1}>Le Mois Courant</option>
                      <option value={3}>Les 3 Mois Précidents</option>
                      <option value={6}>Les 6 Mois Précidents</option>
                    </Form.Select>
                  </Form.Group>
                </div>
              </div>
            </div>
            <br />
          </div>
          {this.state.mois.map((item, index) => {
            return (
              <div className="card" key={item}>
                <div className="card-header"> {item} </div>
                <ul className="list-group list-group-flush">
                  {this.state.transactions
                    .filter((t) => new Date(t.date).getMonth() == index + 1)
                    .map((transaction) => {
                      return (
                        <li className="list-group-item">
                          {transaction.depense.title} - {transaction.montant}
                        </li>
                      )
                    })}
                </ul>
              </div>
            )
          })}
        </div>
      </>
    )
  }

  renderX() {
    return (
      <>
        <section class="hero is-link">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">Dashboard</h1>
            </div>
          </div>
        </section>
        <div class="container-fluid">
          {this.state.mois.map((item) => {
            return (
              <div class="card" style="width: 18rem;">
                <div class="card-header"> {item} </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">An item</li>
                  <li class="list-group-item">A second item</li>
                  <li class="list-group-item">A third item</li>
                </ul>
              </div>
            )
          })}

          <div class="columns top-info-row">
            <div class="column">
              <div class="card">
                <section class="hero is-warning">
                  <div class="hero-body">
                    <div class="container">
                      <h1 class="title">totalBalance</h1>
                      <h2 class="subtitle">You are settled up</h2>
                      <h2 class="subtitle">
                        You lended 500
                        {/* You lended {{ totalBalance | currency: "INR" }} {{ totalBalance | currency: "INR" }} */}
                      </h2>
                      <h2 class="subtitle">
                        You owed 500
                        {/* You owed {{ totalBalance * -1 | currency: "INR" }} */}
                      </h2>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            <div class="column">
              <div class="card">
                <section class="hero is-warning">
                  <div class="hero-body">
                    <div class="container">
                      <h1 class="title">5</h1>
                      <h2 class="subtitle">Total Expenses</h2>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div class="column">
              <div class="card">
                <section class="hero is-warning">
                  <div class="hero-body">
                    <div class="container">
                      <h1 class="title">2</h1>
                      <h2 class="subtitle">Total Friends</h2>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div class="columns expense-friends-row">
            <div class="column">
              <div class="card">
                <section class="card-title-bg-yellow">
                  <div class="">
                    <div class="container-fluid">
                      <h1 class="title">Expenses</h1>
                    </div>
                  </div>
                </section>
                <div class="card-content">
                  <div class="content">
                    <div class="columns">
                      <div class="column"></div>
                      <div class="column is-auto icon-column">
                        <span class="icon is-large is-left">
                          <i class="fa fa-search-dollar"></i>
                        </span>
                      </div>
                      <div class="column"></div>
                    </div>
                    <div class="columns">
                      <div class="column"></div>
                      <div class="column">
                        <p class="font-weight-bold">No Expense Found</p>
                      </div>
                      <div class="column"></div>
                    </div>

                    <div class="columns is-centered">
                      <button class="button is-dark is-medium is-fullwidth is-marginless mx-2 my-2">
                        Add an expense
                      </button>
                      <button class="button is-primary is-medium is-fullwidth mx-2 my-2">
                        View All
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="card">
                <section class="card-title-bg-yellow">
                  <div class="">
                    <div class="container-fluid">
                      <h1 class="title">Friends</h1>
                    </div>
                  </div>
                </section>
                <div class="card-content">
                  <div class="content">
                    <div class="columns">
                      <div class="column"></div>
                      <div class="column is-auto icon-column">
                        <span class="icon is-large is-left">
                          <i class="fa fa-user-friends"></i>
                        </span>
                      </div>
                      <div class="column"></div>
                    </div>
                    <div class="columns">
                      <div class="column"></div>
                      <div class="column">
                        <p class="font-weight-bold">No Friends Found</p>
                      </div>
                      <div class="column"></div>
                    </div>

                    <button class="button is-dark is-medium is-fullwidth">
                      Manage friends
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  render() {
    return (
      <div className="landing ">
        <main>
          <div className="landing-heading">
            <img
              align="middle"
              className="landing-logo"
              src="../images/logo.png"
              alt=""
            />
            <h1 className="landing-header">Split expenses with friends.</h1>
            <p className="landing-desc">
              <strong>Share</strong> bills and IOUs. <strong>Make sure</strong>{' '}
              everyone gets paid back. <strong>Totally free</strong> for web
            </p>
            <img className="landing-big" src="../images/dsiplay.png" alt="" />
          </div>

          <div className="landing-feature">
            <div>
              <img
                className="landing-img"
                src="../images/splitwise.png"
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
