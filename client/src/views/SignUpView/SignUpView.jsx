import React, { Component } from 'react'
import './SignUpView.css'

import { signUpApi, signInApi } from '../../services/UsersApiService'
class SignUpView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {},
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit = async (e) => {
        e.preventDefault()
        let id_colocation = 1
        let title = e.target['Mr'].checked
            ? 'Mr'
            : e.target['Mme'].checked
                ? 'Mme'
                : 'Undefined'
        let nom = e.target['nom'].value
        let prenom = e.target['prenom'].value
        let date_naissance = e.target['date_naissance'].value
        let email = e.target['email'].value
        let telephone = e.target['telephone'].value
        let mdp = e.target['mdp'].value
        if (
            title !== '' &&
            nom !== '' &&
            prenom !== '' &&
            date_naissance !== new Date() &&
            email !== '' &&
            telephone !== '' &&
            mdp !== ''
        ) {
            const user = {
                title,
                nom,
                prenom,
                date_naissance,
                email,
                telephone,
                mdp,
                id_colocation
            }
            await
                signUpApi(user)
                    .then((data) => {
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
        let { user } = this.state
        return (
            <div className="row">
                <div className="col-md-6 mb-4 white-text text-center text-md-left">
                    <h1 className="display-4 font-weight-bold">Créer un compte</h1>
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
                <div className="col-md-6 col-xl-5 mb-4 text-start ">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={this.handleSubmit} id="signUpForm">
                                <div className="form-check form-check-inline m-1">
                                    <input
                                        type="radio"
                                        name="title"
                                        id="Mr"
                                        className="form-check-inline"
                                        defaultChecked
                                        value={user?.title}
                                        onChange={(event) => this.handleUserInput(event)}
                                    />
                                    <label htmlFor="Mr" className="labelRadio">
                                        Mr
                                    </label>
                                    <input
                                        type="radio"
                                        name="title"
                                        id="Mme"
                                        className="form-check-inline"
                                        value={user?.title}
                                        onChange={(event) => this.handleUserInput(event)}
                                    />
                                    <label htmlFor="Mme" className="labelRadio">
                                        Mme
                                    </label>
                                    <input
                                        type="radio"
                                        name="title"
                                        id="Undefined"
                                        className="form-check-inline"
                                        value={user?.title}
                                        onChange={(event) => this.handleUserInput(event)}
                                    />
                                    <label htmlFor="Undefined" className="labelRadio">
                                        Non Binaire
                                    </label>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="nom" className="form-label">
                                        Nom
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control m-1"
                                        placeholder="Nom"
                                        name="nom"
                                        id="nom"
                                        value={user?.nom}
                                        onChange={(event) => this.handleUserInput(event)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="prenom" className="form-label">
                                        Prénom
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control m-1"
                                        placeholder="Prénom"
                                        name="prenom"
                                        id="prenom"
                                        value={user?.prenom}
                                        onChange={(event) => this.handleUserInput(event)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="date_naissance" className="form-label">
                                        Nom
                                    </label>
                                    <input
                                        type="date"
                                        className="form-control m-1"
                                        name="date_naissance"
                                        id="date_naissance"
                                        defaultValue={new Date().toISOString().substring(0, 10)}
                                        value={user?.date_naissance}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone" className="form-label">
                                        Téléphone
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control m-1"
                                        placeholder="Téléphone"
                                        name="telephone"
                                        id="telephone"
                                        value={user?.telephone}
                                        onChange={(event) => this.handleUserInput(event)}
                                    />
                                </div>
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
                                        value={user?.email}
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
                                        value={user?.mdp}
                                        onChange={(event) => this.handleUserInput(event)}
                                    />
                                </div>

                                <button className="btn btn-primary" type="submit">
                                    Créer un compte
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUpView
