import React, { Component } from 'react'
import './SignInView.css'
import { signUpApi, signInApi } from '../../services/UsersApiService'
class SignInView extends Component {
    constructor(props) {
        super(props)
        this.state = { user: {} }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit = async (e) => {
        e.preventDefault()
        let email = e.target['email'].value
        let mdp = e.target['mdp'].value
        if (
            email !== '' &&
            mdp !== ''
        ) {
            const user = {
                email,
                mdp
            }
            await
                signInApi(user)
                    .then((data) => {
                        alert(data.message);
                        this.props.signin(data.data)
                    })
                    .catch(err => {
                        alert(err.message);
                    });
        } else {
            alert('Veuillez remplir tous les champs!')
        }
    }

    handleUserInput(e) {
        /*
        const name = e.target.name
        const value = e.target.value
        const user = this.state.user
        user[name] = value
        this.setState({ user: user })*/
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-6 mb-4 white-text text-center text-md-left">
                    <h1 className="display-4 font-weight-bold">Se connecter</h1>
                    <hr className="hr-light" />
                    <p className="mb-4 d-none d-md-block">
                        <strong>
                            Visualisez la situation de votre coloc en un clin d'œil
                        </strong>
                    </p>
                    <p className="mb-4 d-none d-md-block">
                        <strong>Suivez vos dépenses dans le temps</strong>
                    </p>
                </div>
                <div className="col-md-6 col-xl-5 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="email" className="form-label">
                                        Email
                                    </label>
                                    <input
                                        type="mail"
                                        className="form-control m-1"
                                        placeholder="Email"
                                        name="email"
                                        id="email"
                                        value={this.state.user?.email}
                                        onChange={(event) => this.handleUserInput(event)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email" className="form-label">
                                        Mot de passe
                                    </label>
                                    <input
                                        type="mail"
                                        className="form-control m-1"
                                        placeholder="Mot de passe"
                                        name="mdp"
                                        id="mdp"
                                        value={this.state.user?.mdp}
                                        onChange={(event) => this.handleUserInput(event)}
                                    />
                                </div>

                                <button className="btn btn-primary" type="submit">
                                    Se connecter
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default SignInView
