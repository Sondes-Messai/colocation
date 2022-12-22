import React, { Component, useState } from 'react'
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import ListGroup from 'react-bootstrap/ListGroup';
import { Button, Modal, ListGroup } from 'react-bootstrap'
import { MdSend, MdEdit, MdDelete } from 'react-icons/md'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import InputGroup from 'react-bootstrap/InputGroup'

class DepenseFormComponent extends Component {
  constructor(props) {
    super(props)
    this.states = {
      depenses: props.depenses,
      colocataires: props.colocataires,
      depense: props.depense,
      newDepense: { payments :[] },
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async componentDidMount() {}
  handleUserInput(e) {
    const name = e.target.name
    const value = e.target.value
    const depense = this.states.newDepense
    depense[name] = value
    this.setState({ newDepense: depense })
    console.log(this.states.newDepense)
  }

  handleColocataireInput(e, index, id) {
    const name = e.target.name
    const value = e.target.value
    const depense = this.states.newDepense;


    let payment = depense.payments.find((payment) => payment.id_colocataire == id);
  
    console.log(payment)
    if(payment == null)
    {
      console.log(depense.payments)
      payment = {
        id_colocataire : id,
        montant : 0,
      };
      depense.payments.push(payment);
    }
    console.log(depense.payments)
    console.log(depense.payments[index])
    depense.payments[index][name] = value;
    this.setState({ newDepense: depense })
    console.log(this.states.newDepense)
  }
  handleSubmit(e) {
    e.preventDefault()
    if (this.props.depense.id > 0) {
      this.props.AddDepense(this.state.depense)
    } else {
      this.props.AddDepense(this.state.depense)
    }
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
                    value={this.props.depense?.id_categorie || ''}
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
                    value={this.props.depense?.title || ''}
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
                    value={this.props.depense?.date || ''}
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
                    value={this.props.depense?.frequence || ''}
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
                    {this.props.colocataires.map((colocataire, index) => {
                      return (
                        <ListGroup.Item>
                          <Form.Group
                            as={Row}
                          >
                            <Col sm="8">
                              <Form.Check
                                column
                                name="id_colocataire"
                                id="id_colocataire"
                                type="checkbox"
                                className="mt-2"
                                label={`${colocataire.nom} ${colocataire.prenom}`}
                                value={colocataire.id}
                                onChange={(event) =>
                                  this.handleColocataireInput(
                                    event,
                                    index,
                                    colocataire.id,
                                  )
                                }
                              />
                            </Col>
                            <Col sm="4">
                              <Form.Control
                                name="montant"
                                id="montant"
                                type="number"
                                onChange={(event) =>
                                  this.handleColocataireInput(
                                    event,
                                    index,
                                    colocataire.id,
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
