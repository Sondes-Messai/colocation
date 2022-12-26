
import React, { Component, useState } from 'react';
import {
    Button,
    Modal,
    ListGroup,
    Col,
    Form,
    Row,
    InputGroup,
} from 'react-bootstrap'
class TransactionFormComponent extends Component {
    constructor(props) {
        super(props)
        this.states = {
            transactions: props.transactions,
            depenses: props.depenses,
            colocataires: props.colocataires
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        let id_colocataire = e.target['id_colocataire'].value;
        let id_depense = e.target['id_depense'].value;
        let montant = e.target['montant'].value;
        let date = e.target['date'].value;
        let est_paye = e.target['est_paye'].value === "on";
        if (id_colocataire !== "" && id_depense !== "" && date !== "" && montant !== "") {
            const newTransaction = { id_colocataire, id_depense, date, montant, est_paye };
            this.props.AddTransaction(newTransaction);
            this.props.ChangeToggleForm();
        } else {
            alert("Veuillez remplir tous les champs!");
        }
    }
    render() {
        return (
            <>
                <Button variant="primary" onClick={() => this.props.ChangeToggleForm()}>
                    Payer une dépense
                </Button>

                <Modal show={this.props.toggleForm} onHide={() => this.props.ChangeToggleForm()}>
                    <Modal.Header closeButton>
                        <Modal.Title>Payer une dépense</Modal.Title>
                    </Modal.Header>
                    <form onSubmit={this.handleSubmit} id="addForm">
                        <Modal.Body>
                            <div className="row g-3 needs-validation">
                                <div className="form-group">
                                    <label htmlFor="id_colocataire" className="form-label">Payé par</label>
                                    <select name="id_colocataire" id="id_colocataire" className="form-select">
                                        <option value="">Choisir le payeur</option>
                                        {this.props.colocataires.map(colocataire => {
                                            return (
                                                <option key={colocataire.id} value={colocataire.id}>{colocataire.nom} {colocataire.prenom}</option>
                                            );
                                        })}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="id_depense" className="form-label">Dépense</label>
                                    <select name="id_depense" id="id_depense" className="form-select">
                                        <option value="">Choisir la dépense</option>
                                        {this.props.depenses.map(depense => {
                                            return (
                                                <option key={depense.id} value={depense.id}>{depense.title}</option>
                                            );
                                        })}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="date" className="form-label">Date</label>
                                    <input
                                        className="form-control"
                                        type="date"
                                        id="date"
                                        name="date"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="montant" className="form-label">Montant</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="montant"
                                        name="montant"
                                        placeholder="e.g. 100"
                                    />
                                </div>
                                <div className="form-group">
                                    <Form.Check
                                        type="switch"
                                        name="est_paye"
                                        id="est_paye"
                                        label="est payé"
                                    />
                                </div>
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
}

export default TransactionFormComponent;
