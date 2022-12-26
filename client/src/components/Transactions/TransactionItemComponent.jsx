import React, { Component } from 'react'
import { MdEdit, MdDelete } from 'react-icons/md'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPen, faCheck, faMoneyCheck } from '@fortawesome/free-solid-svg-icons'
import {
    Button,
    Modal,
    ListGroup,
    Col,
    Form,
    Row,
    InputGroup,
} from 'react-bootstrap'
class TransactionItemComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editTransaction: false,
        }
    }

    toggleEdit = () => {
        this.setState({ editTransaction: !this.state.editTransaction })
    }

    validEdit = (transaction) => {
        //e.preventDefault()
        transaction.est_paye = true;
        this.props.EditTransaction(transaction)
    }

    render() {
        return (
            <tr>
                <td scope="col">{this.props.transaction.date}</td>
                <td scope="col">{this.props.transaction.depense.categorie.nom}</td>
                <td scope="col">{this.props.transaction.depense.title}</td>
                <td scope="col">
                    <span>
                        {' '}
                        {this.props.transaction.colocataire.nom}{' '}
                        {this.props.transaction.colocataire.prenom}
                    </span>
                </td>
                <td scope="col">{this.props.transaction.montant} €</td>
                <td scope="col">
                    {this.props.transaction.est_paye ?
                        (
                            <Button
                                variant="success"
                                size="sm"
                            >
                                payé
                            </Button>

                        ) : (

                            <Button
                                variant="primary"
                                size="sm"
                                onClick={() =>
                                    this.validEdit(this.props.transaction)
                                }
                            >
                                <FontAwesomeIcon
                                    icon={faMoneyCheck}
                                    className="fontIcon"
                                /> Payer
                            </Button>
                        )
                    }
                    {' '}
                    <Button
                        variant="secondary"
                        size="sm"
                        onClick={() =>
                            this.props.DeleteTransaction(this.props.transaction.id)
                        }
                    >
                        <FontAwesomeIcon icon={faTrash} className="fontIcon" /> Supprimer
                    </Button>
                </td>
            </tr>
        )
    }
}

export default TransactionItemComponent
