
import React, { Component, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
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
    let idColocataire = e.target['colocataire'].value;
    let idDepense = e.target['depense'].value;
    let amount = e.target['amount'].value;
    let date = e.target['date'].value;
    if (idColocataire !== "" && idDepense !== "" && date !== "" && amount !== "") {
      const newTransaction = { idColocataire, idDepense, date, amount };
      this.props.AddTransaction(newTransaction);
      // alert("Le colocataire a bien été ajouté.");
      this.props.ChangeToggleForm();
      //let formulaire = document.getElementById('addFormTransaction');
      //formulaire.reset();
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
                  <label htmlFor="colocataire" className="form-label">Payé par</label>
                  <select name="colocataire" id="colocataire" className="form-select">
                    <option value="">Choisir le payeur</option>
                    {this.props.colocataires.map(colocataire => {
                      return (
                        <option key={colocataire.id} value={colocataire.id}>{colocataire.lastname} {colocataire.firstname}</option>
                      );
                    })}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="depense" className="form-label">Dépense</label>
                  <select name="depense" id="depense" className="form-select">
                    <option value="">Choisir la dépense</option>
                    {this.props.depenses.map(depense => {
                      return (
                        <option  key={depense.id} value={depense.id}>{depense.title}</option>
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
                  <label htmlFor="amount" className="form-label">Montant</label>
                  <input
                    type="number"
                    className="form-control"
                    id="amount"
                    name="amount"
                    placeholder="e.g. 100"
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
