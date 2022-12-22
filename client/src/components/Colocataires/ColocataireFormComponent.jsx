import React, { Component, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class ColocataireFormComponent extends Component {

    constructor(props) {
        super(props);
        this.states = {
            colocataires: props.colocataires,
            colocataire: props.newColocataire
        }
        console.log(props);
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleSubmit(e) {
        e.preventDefault();
        let nom = e.target['nom'].value;
        let prenom = e.target['prenom'].value;
        let id_colocation = 1;
        const newColocataire = { nom, prenom, id_colocation };
        this.props.AddColocataire(newColocataire);
        /*
        let title = e.target['Mr'].checked ? "Mr" : e.target['Mme'].checked ? "Mme" : "Undefined"
        let nom = e.target['nom'].value;
        let prenom = e.target['prenom'].value;
        let dateOfBirth = e.target['dateOfBirth'].value;
        let email = e.target['email'].value;
        let phone = e.target['phone'].value;
        let img = e.target['img'].files[0];
        if (title !== "" && lastname !== "" && firstname !== "" && dateOfBirth !== new Date() && email !== "" && phone !== "") {
            const newPerson = { title, lastname, firstname, dateOfBirth, img, email, phone };
            //console.table(newPerson);
            this.props.AddColocataire(newPerson);
            // alert("Le colocataire a bien été ajouté.");
            this.props.ChangeToggleForm();
            let formulaire = document.getElementById('addForm');
            formulaire.reset();

        } else {
            alert("Veuillez remplir tous les champs!");
        }*/
    }

    render() {
        return (
            <>
                <Button variant="primary" onClick={() => this.props.ChangeToggleForm()}>
                    Ajouter un colocataire
                </Button>

                <Modal show={this.props.toggleForm} onHide={() => this.props.ChangeToggleForm()}>
                    <Modal.Header closeButton>
                        <Modal.Title>Ajouter un colocataire</Modal.Title>
                    </Modal.Header>
                    <form onSubmit={this.handleSubmit} id="addForm">
                        <Modal.Body>
                            <div className="row g-3 needs-validation">
                                <div className="form-check form-check-inline m-1">
                                    <input type="radio" name="title" id="Mr" className='form-check-inline' defaultChecked />
                                    <label htmlFor="Mr" className='labelRadio'>Mr</label>
                                    <input type="radio" name="title" id="Mme" className='form-check-inline' />
                                    <label htmlFor="Mme" className='labelRadio'>Mme</label>
                                    <input type="radio" name="title" id="Undefined" className='form-check-inline' />
                                    <label htmlFor="Undefined" className='labelRadio'>Non Binaire</label>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastname" className="form-label">Nom</label>
                                    <input type="text" className="form-control m-1" placeholder='Nom' name="nom" id="nom" value={this.states.colocataire?.lastname} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="firstname" className="form-label">Prénom</label>
                                    <input type="text" className="form-control m-1" placeholder='Prénom' name="prenom" id="prenom" value={this.states.colocataire?.firstname} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="dateOfBirth" className="form-label">Nom</label>
                                    <input type="date" className="form-control m-1" name="dateOfBirth" id="dateOfBirth" defaultValue={new Date().toISOString().substring(0, 10)} value={this.states.colocataire?.dateOfBirth} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone" className="form-label">Téléphone</label>
                                    <input type="text" className="form-control m-1" placeholder='Téléphone' name="phone" id="phone" value={this.states.colocataire?.phone} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="mail" className="form-control m-1" placeholder='Email' name="email" id="email" value={this.states.colocataire?.email} />
                                </div>
                                <input type="file" className="form-control m-1" name="img" id="img" />
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => this.props.ChangeToggleForm()}>
                                Close
                            </Button>
                            <Button variant="primary" type="submit" onClick={() => this.props.ChangeToggleForm()}>
                                Valider
                            </Button>
                        </Modal.Footer>
                    </form>
                </Modal>
            </>

        );
    }
    /*
        render() {
           return !this.props.toggleForm ?
                (
                    <button className='btn btn-primary' onClick={() => this.props.ChangeToggleForm()}>Ajouter un colocataire</button>
                )
    
                :
    
                (
                    <div className="relative">
                        <div className='card formulaire'>
    
                            <h2>Ajouter un colocataire</h2>
    
                            <form onSubmit={this.handleSubmit} id="addForm">
                                <div className="inputForm">
                                    <div className="form-check form-check-inline m-1">
                                        <input type="radio" name="title" id="Mr" className='form-check-inline' defaultChecked/>
                                        <label htmlFor="Mr" className='labelRadio'>Mr</label>
                                        <input type="radio" name="title" id="Mme" className='form-check-inline' />
                                        <label htmlFor="Mme" className='labelRadio'>Mme</label>
                                        <input type="radio" name="title" id="Undefined" className='form-check-inline' />
                                        <label htmlFor="Undefined" className='labelRadio'>Non Binaire</label>
                                    </div>
                                    <input type="text" className="form-control m-1" placeholder='Nom' name="lastname" id="lastname" />
                                    <input type="text" className="form-control m-1" placeholder='Prénom' name="firstname" id="firstname" />
                                    <input type="date" className="form-control m-1" name="dateOfBirth" id="dateOfBirth" defaultValue={new Date().toISOString().substring(0,10)}/>
                                    <input type="text" className="form-control m-1" placeholder='Téléphone' name="phone" id="phone" />
                                    <input type="mail" className="form-control m-1" placeholder='Email' name="email" id="email" />
                                    <input type="file" className="form-control m-1" name="img" id="img" />
                                    <button type="submit" className="btn btn-success form-control m-1">Valider</button>
                                </div>
                            </form>
                            <button className='btn btn-secondary' onClick={() => this.props.ChangeToggleForm()}>Fermer</button>
                        </div >
                    </div>
                )*/
}

export default ColocataireFormComponent;
