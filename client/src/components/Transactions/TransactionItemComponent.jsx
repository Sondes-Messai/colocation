import React, { Component } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen, faCheck } from '@fortawesome/free-solid-svg-icons';
class TransactionItemComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editTransaction: false
    };
  }

  toggleEdit = () => {
    this.setState({ editTransaction: !this.state.editTransaction });
  }

  validEdit = (e) => {
    e.preventDefault();
    let id = this.props.transaction.id;
    let charge = document.getElementById('charge').value;
    let amount = document.getElementById('amount').value;
    const editTransaction = { id, charge, amount };
    this.props.editTransaction(editTransaction)
    this.toggleEdit();
  }

  render() {

    return this.state.editTransaction === false ? (
      <React.Fragment>
        <tr>
          <td scope="col">{this.props.transaction.date}</td>
          <td scope="col">{this.props.transaction.depense.categorie.nom}</td>
          <td scope="col">{this.props.transaction.depense.title}</td>
          <td scope="col">
            <span> {this.props.transaction.colocataire.nom} {this.props.transaction.colocataire.prenom}</span>
          </td>
          <td scope="col">{this.props.transaction.montant} €</td>
          <td scope="col">
            <FontAwesomeIcon icon={faPen} onClick={() => this.toggleEdit(this.props.transaction.id)} className="fontIcon" />
            <FontAwesomeIcon icon={faCheck} onClick={(e) => this.validEdit(e)} className="fontIcon" color="green" /></td>
        </tr>
      </React.Fragment>
    ) : (
      <React.Fragment>
         <tr>
          <td>
          </td>
          <td>
          </td>
          <td>
          </td>
        </tr>
      </React.Fragment>
    )
  }
}

export default TransactionItemComponent;
