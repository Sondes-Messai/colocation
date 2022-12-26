import React, { Component, useState } from 'react'
import { MdSend, MdEdit, MdDelete } from 'react-icons/md'
import {
    Button,
    Modal,
    ListGroup,
    Col,
    Form,
    Row,
    InputGroup,
} from 'react-bootstrap'
class DepenseFormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            depenses: props.depenses,
            colocataires: props.colocataires,
            depense: props.depense
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUserInput(e) {
        const name = e.target.name
        const value = e.target.value
        const depense = this.state.depense
        depense[name] = value

        if (name === 'montant') {
            let nombrePayments = depense.payments.filter(c => c.is_selected)?.length ?? 1;
            console.log(nombrePayments)
            depense.payments.forEach((element) => {
                if (element.is_selected)
                    element.montant = value / nombrePayments
            })
        }
        this.setState({ depense: depense })
        console.log(this.state.depense)
    }

    handleColocataireInput(e, index, id) {
        const name = e.target.name
        const value = e.target.value
        const depense = this.state.depense
        const montant = depense.montant - value;
        let nombrePayments = depense.payments.filter(c => c.is_selected && c.id_colocataire !== id).length ?? 1;
        depense.payments.forEach((element) => {
            if (element.is_selected) {
                if (element.id_colocataire == id) {
                    element.montant = value;
                } else {
                    element.montant = (montant) / nombrePayments
                }
            }
        })
        this.setState({ depense: depense })
    }
    handleColocataireCheck(e, index, id) {
        const name = e.target.name
        const value = e.target.checked
        const depense = this.state.depense
        depense.payments[index][name] = value;
        console.log(depense)
        this.setState({ depense: depense })
        let nombrePayments = depense.payments.filter(c => c.is_selected)?.length ?? 1;
        console.log(nombrePayments)
        depense.payments.forEach((element) => {
            if (element.is_selected)
                element.montant = depense.montant / nombrePayments
        })
    }
    handleSubmit(e) {
        e.preventDefault()
        this.props.SaveDepense(this.state.depense)
        /*
        let idCategory = e.target['categorie'].value;
        let title = e.target['title'].value;
        let date = e.target['date'].value;
        let frequency = e.target['frequency'].value;
        let amount = e.target['amount'].value;
        if (title !== "" && amount !== "") {
          const newDepense = { idCategory, title, date, frequency, amount };
          this.props.AddDepense(newDepense);
          // alert("Le colocataire a bien été ajouté.");
          this.props.ChangeToggleForm();
          //let formulaire = document.getElementById('addFormDepense');
          //formulaire.reset();
        } else {
          alert("Veuillez remplir tous les champs!");
        }*/
    }
    render() {
        const { depense } = this.state;
        depense.payments = depense?.payments ?? [];
        depense.id_colocation = 1;
        this.props.colocataires.forEach(colocataire => {
            let payment = depense.payments?.find(
                (payment) => payment.id_colocataire == colocataire.id,
            )
            if (payment == null) {
                payment = {
                    is_selected: false,
                    nom: colocataire.nom,
                    prenom: colocataire.prenom,
                    id_colocataire: colocataire.id,
                    montant: 0,
                }
                depense.payments.push(payment)
            }
        });
        return (
            <>
                <Button variant="primary" onClick={() => this.props.ChangeToggleForm()}>
                    Ajouter une dépense
                </Button>

                <Modal
                    show={this.props.toggleForm}
                    onHide={() => this.props.ChangeToggleForm()}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Ajouter une dépense</Modal.Title>
                    </Modal.Header>
                    <form onSubmit={this.handleSubmit} id="addForm">
                        <Modal.Body>
                            <div className="row g-3 needs-validation">
                                <div className="form-group">
                                    <label htmlFor="id_categorie">Categorie</label>
                                    <select
                                        name="id_categorie"
                                        id="id_categorie"
                                        className="form-select"
                                        onChange={(event) => this.handleUserInput(event)}
                                        value={depense?.id_categorie || ''}
                                        required
                                    >
                                        <option value="">Choisir la categorie</option>
                                        <option value="1">Maison</option>
                                        <option value="2">Alimentation</option>
                                        <option value="3">Utilitaire</option>
                                        <option value="4">Transport</option>
                                        <option value="5">Achat</option>
                                        <option value="6">Entretien</option>
                                        <option value="6">Autres</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="title" className="form-label">
                                        Titre
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="title"
                                        name="title"
                                        placeholder="Entrer le titre"
                                        onChange={(event) => this.handleUserInput(event)}
                                        value={depense?.title || ''}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="montant" className="form-label">
                                        Montant :
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="montant"
                                        name="montant"
                                        placeholder="Entrer le montant"
                                        onChange={(event) => this.handleUserInput(event)}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="date" className="form-label">
                                        Date
                                    </label>
                                    <input
                                        className="form-control"
                                        type="date"
                                        id="date"
                                        name="date"
                                        onChange={(event) => this.handleUserInput(event)}
                                        value={depense?.date || ''}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="frequence" className="form-label">
                                        Récurrente
                                    </label>
                                    <select
                                        name="frequence"
                                        id="frequence"
                                        className="form-select"
                                        onChange={(event) => this.handleUserInput(event)}
                                        value={depense?.frequence || ''}
                                        required
                                    >
                                        <option value="">Choisir la fréquence</option>
                                        <option value="1">Tous les jours</option>
                                        <option value="2">Hebdomadaire</option>
                                        <option value="3">Mensuel</option>
                                        <option value="4">Annuel</option>
                                    </select>
                                </div>
                                <div>
                                    <ListGroup>
                                        {depense.payments?.map((payment, index) => {
                                            return (
                                                <ListGroup.Item
                                                    key={index}>
                                                    <Form.Group as={Row}>
                                                        <Col sm="5">
                                                            <Form.Check
                                                                column
                                                                name="is_selected"
                                                                id="is_selected"
                                                                type="checkbox"
                                                                className="mt-2"
                                                                label={`${payment.nom} ${payment.prenom}`}
                                                                checked={payment.is_selected}
                                                                disabled={depense.montant <= 0}
                                                                onChange={(event) =>
                                                                    this.handleColocataireCheck(
                                                                        event,
                                                                        index,
                                                                        payment.is_selected,
                                                                    )
                                                                }
                                                            />
                                                        </Col>
                                                        <Col sm="3">
                                                            <Form.Control
                                                                name="montant"
                                                                id="montant"
                                                                type="number"
                                                                value={payment.montant}
                                                                disabled={depense.montant <= 0}
                                                                onChange={(event) =>
                                                                    this.handleColocataireInput(
                                                                        event,
                                                                        index,
                                                                        payment.id_colocataire,
                                                                    )
                                                                }
                                                            />
                                                        </Col>
                                                        <Col sm="4">
                                                            <Form.Check
                                                                type="switch"
                                                                name="est_paye"
                                                                id="est_paye"
                                                                label="est payé"
                                                                value={payment.est_paye}
                                                                disabled={depense.montant <= 0}
                                                                onChange={(event) =>
                                                                    this.handleColocataireInput(
                                                                        event,
                                                                        index,
                                                                        payment.id_colocataire,
                                                                    )
                                                                }
                                                            />
                                                        </Col>

                                                    </Form.Group>
                                                </ListGroup.Item>
                                            )
                                        })}
                                    </ListGroup>
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button
                                variant="secondary"
                                onClick={() => this.props.ChangeToggleForm()}
                            >
                                Close
                            </Button>
                            <Button variant="primary" type="submit">
                                Valider
                            </Button>
                        </Modal.Footer>
                    </form>
                </Modal>
            </>
        )
    }
}

export default DepenseFormComponent
