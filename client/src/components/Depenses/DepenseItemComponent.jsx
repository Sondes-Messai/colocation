import React, { Component } from 'react'
import { MdEdit, MdDelete } from 'react-icons/md'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPen, faCheck } from '@fortawesome/free-solid-svg-icons'
import {
  Button,
  Modal,
  ListGroup,
  Col,
  Form,
  Row,
  InputGroup,
} from 'react-bootstrap'
class DepenseItemComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editDepense: false,
    }
  }

  toggleEdit = () => {
    this.setState({ editDepense: !this.state.editDepense })
  }

  validEdit = (e) => {
    e.preventDefault()
    let id = this.props.depense.id
    let charge = document.getElementById('charge').value
    let amount = document.getElementById('amount').value
    const editDepense = { id, charge, amount }
    this.props.editDepense(editDepense)
    this.toggleEdit()
  }

  render() {
    return (
      <>
        <tr>
          <td>{this.props.depense.id}</td>
          <td>{this.props.depense.date}</td>
          <td>{this.props.depense.categorie.nom}</td>
          <td>{this.props.depense.title}</td>
          <td>{this.props.depense.montant} €</td>
          <td>{this.props.depense.frequence}</td>
          <td>
            <Button
              variant="primary"
              size="sm"
              onClick={() => this.props.ChangeToggleForm(this.props.depense)}
            >
              <FontAwesomeIcon icon={faPen} className="fontIcon" /> Modifier
            </Button>{' '}
            <Button
              variant="secondary"
              size="sm"
              onClick={() =>
                this.props.DeleteDepense(this.props.depense.id)
              }
            >
              <FontAwesomeIcon icon={faTrash} className="fontIcon" /> Supprimer
            </Button>
          </td>
        </tr>
      </>
    )
  }
}

export default DepenseItemComponent
