import React, { Component } from 'react'
import './SignUpView.css'

class SignUpView extends Component {
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
      <div className="row">
        <div className="col-md-6 mb-4 white-text text-center text-md-left">
          <h1 className="display-4 font-weight-bold">Sign UP</h1>
          <hr className="hr-light" />
          <p>
            <strong>For the more information</strong>
          </p>
          <p className="mb-4 d-none d-md-block">
            <strong>
              Quickly get information from new leads and customers by signing up
              .WIth their information, you can funnel them into new accounts in
              an instant.Follow us on FACEBOOK
            </strong>
          </p>
          <a
            href="http:/www.facebook.com"
            target="_blank"
            className="btn btn-indigo btn-lg"
          >
            Facebook
            <i className="fa fa-facebook ml-2"></i>
          </a>
        </div>
        <div className="col-md-6 col-xl-5 mb-4">
          <div className="card">
            <div className="card-body">
              <form>
                <p className="h4 text-center mb-4">Sign up</p>
                <div className="md-form">
                  <i className="fa fa-user prefix grey-text"></i>
                  <input
                    type="text"
                    id="materialFormRegisterNameEx"
                    className="form-control"
                  />
                  <label for="materialFormRegisterNameEx">Your name</label>
                </div>
                <div className="md-form">
                  <i className="fa fa-envelope prefix grey-text"></i>
                  <input
                    type="email"
                    id="materialFormRegisterEmailEx"
                    className="form-control"
                  />
                  <label for="materialFormRegisterEmailEx">Your email</label>
                </div>
                <div className="md-form">
                  <i className="fa fa-exclamation-triangle prefix grey-text"></i>
                  <input
                    type="email"
                    id="materialFormRegisterConfirmEx"
                    className="form-control"
                  />
                  <label for="materialFormRegisterConfirmEx">
                    Confirm your email
                  </label>
                </div>
                <div className="md-form">
                  <i className="fa fa-lock prefix grey-text"></i>
                  <input
                    type="password"
                    id="materialFormRegisterPasswordEx"
                    className="form-control"
                  />
                  <label for="materialFormRegisterPasswordEx">
                    Your password
                  </label>
                </div>
                <div className="md-form">
                  <i className="fa fa-exclamation-triangle prefix grey-text"></i>
                  <input
                    type="password"
                    id="materialFormRegisterConfirmEx"
                    className="form-control"
                  />
                  <label for="materialFormRegisterPasswordEx">
                    Confirm Your password
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="defaultCheck12"
                  />
                  <label for="defaultCheck12" className="grey-text">
                    Accept the
                    <a href="#" className="blue-text">
                      {' '}
                      Terms and Conditions
                    </a>
                  </label>
                </div>
                <div className="text-center mt-4">
                  <button
                    className="btn btn-primary"
                    type="button"
                    data-toggle="modal"
                    data-target="#myModal"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SignUpView
