import React, { Component } from 'react'
import './LoginView.css'
/*
<h1 className="h3 mb-3 font-weight-normal">
              Tenez à jour vos comptes
            </h1>
            <ul>
              <li>
                Ce application vous permet de tenir vos comptes entre
                colocataires.
              </li>
              <li>
                Démarrez dès que vous le souhaitez en ajoutant une première
                dépense dans le champs ci dessous.
              </li>
            </ul>
*/
class LoginView extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e) {
    e.preventDefault()
    this.props.login('isLoged')
  }
  render() {
    return (
      <div className="app-login text-center w-100 h-100">
        <form
          className="form-signin w-100 m-auto"
          onSubmit={this.handleSubmit}
        >
          <img
            class="mb-4"
            src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
            alt=""
            width="72"
            height="57"
          />
          <h1 class="h3 mb-3 fw-normal">Connectez-vous à votre compte</h1>

          <div class="form-floating">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>

          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button class="w-100 btn btn-lg btn-primary" type="submit">
            Sign in
          </button>
          <p class="mt-5 mb-3 text-muted">© 2017–2022</p>
        </form>
      </div>
    )
  }
}

export default LoginView
