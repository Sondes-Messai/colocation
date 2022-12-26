import React, { Component, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

class ColocataireFormComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            colocataire: {}
        }
        console.log(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleUserInput = this.handleUserInput.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        let id_colocation = 1;
        let id = e.target['id'].value;
        let title = e.target['Mr'].checked ? "Mr" : e.target['Mme'].checked ? "Mme" : "Undefined";
        let nom = e.target['nom'].value;
        let prenom = e.target['prenom'].value;
        let date_naissance = e.target['date_naissance'].value;
        let email = e.target['email'].value;
        let telephone = e.target['telephone'].value;
        let img = e.target['img'].files[0];
        if (title !== "" && nom !== "" && prenom !== "" && date_naissance !== new Date() && email !== "" && telephone !== "") {
            const colocataire = { id, title, nom, prenom, date_naissance, img, email, telephone, id_colocation };
            this.props.SaveColocataire(colocataire);
            this.props.ChangeToggleForm();
            let formulaire = document.getElementById('addForm');
            formulaire.reset();

        } else {
            alert("Veuillez remplir tous les champs!");
        }
    }
    handleUserInput(e) {
        /*
        const name = e.target.name
        const value = e.target.value
        const colocataire = this.state.colocataire
        colocataire[name] = value
        this.setState({ colocataire: colocataire })*/
    }
    render() {
        let { colocataire } = this.state;
        if (this.props.newColocataire?.id > 0) {
            colocataire = this.props.newColocataire;
        }
        return (
            <>
                <Button variant="primary" onClick={() => this.props.ChangeToggleForm()}>
                    Ajouter un colocataire
                </Button>

                <Modal
                    show={this.props.toggleForm}
                    onHide={() => this.props.ChangeToggleForm()}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>{colocataire?.id > 0 ? 'Modifier ' : 'Ajouter '} un colocataire {colocataire?.id}</Modal.Title>
                    </Modal.Header>
                    <form onSubmit={this.handleSubmit} id="addForm">
                        <Modal.Body>
                            <div className="row g-3 needs-validation">
                                <input
                                    type="hidden"
                                    id="id"
                                    value={colocataire?.id}
                                />
                                <div className="form-check form-check-inline m-1">
                                    <input
                                        type="radio"
                                        name="title"
                                        id="Mr"
                                        className="form-check-inline"
                                        defaultChecked
                                        value={colocataire?.title}
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
                                        value={colocataire?.title}
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
                                        value={colocataire?.title}
                                        onChange={(event) => this.handleUserInput(event)}
                                    />
                                    <label htmlFor="Undefined" className="labelRadio">
                                        Non Binaire
                                    </label>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastname" className="form-label">
                                        Nom
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control m-1"
                                        placeholder="Nom"
                                        name="nom"
                                        id="nom"
                                        value={colocataire?.nom}
                                        onChange={(event) => this.handleUserInput(event)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="firstname" className="form-label">
                                        Prénom
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control m-1"
                                        placeholder="Prénom"
                                        name="prenom"
                                        id="prenom"
                                        value={colocataire?.prenom}
                                        onChange={(event) => this.handleUserInput(event)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="date_naissance" className="form-label">
                                        Date naissance
                                    </label>
                                    <input
                                        type="date"
                                        className="form-control m-1"
                                        name="date_naissance"
                                        id="date_naissance"
                                        defaultValue={new Date().toISOString().substring(0, 10)}
                                        value={colocataire?.date_naissance}
                                        onChange={(event) => this.handleUserInput(event)}
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
                                        value={colocataire?.telephone}
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
                                        value={colocataire?.email}
                                        onChange={(event) => this.handleUserInput(event)}
                                    />
                                </div>
                                <input
                                    type="file"
                                    className="form-control m-1"
                                    name="img"
                                    id="img"
                                />
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button
                                variant="secondary"
                                onClick={() => this.props.ChangeToggleForm()}
                            >
                                Close
                            </Button>
                            <Button
                                variant="primary"
                                type="submit"
                                onClick={() => this.props.ChangeToggleForm()}
                            >
                                Valider
                            </Button>
                        </Modal.Footer>
                    </form>
                </Modal>
            </>
        )
    }
}

export default ColocataireFormComponent
