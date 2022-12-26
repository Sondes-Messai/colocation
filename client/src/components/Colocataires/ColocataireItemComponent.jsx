import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPen, faCheck } from '@fortawesome/free-solid-svg-icons'
import DisplayImageComponent from '../DisplayImageComponent'
import {
    Button,
    Modal,
    ListGroup,
    Col,
    Form,
    Row,
    InputGroup,
} from 'react-bootstrap'
class ColocataireItemComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editColocataire: false,
        }
    }

    toggleEdit = () => {
        this.setState({ editColocataire: !this.state.editColocataire })
    }

    validEdit = (e) => {
        e.preventDefault()
        if (
            window.confirm(
                'Etes-vous sur de vouloir modifier le colocataire N°' +
                this.props.colocataire.id,
            )
        ) {
            let id = this.props.colocataire.id
            let title = document.getElementById('title').value
            let firstname = document.getElementById('firstname').value
            let lastname = document.getElementById('lastname').value
            let dateOfBirth = document.getElementById('dateOfBirth').value
            let email = document.getElementById('email').value
            let phone = document.getElementById('phone').value
            let urlImg = this.props.colocataire.urlImg
            let created = this.props.colocataire.created
            const editColocataire = {
                id,
                title,
                firstname,
                lastname,
                dateOfBirth,
                urlImg,
                email,
                phone,
                created,
            }
            this.props.EditColocataire(editColocataire)
            this.toggleEdit()
        }
    }

    render() {
        return (
            <>
                <tr>
                    <th>{this.props.colocataire.id}</th>
                    <td>{this.props.colocataire.title}</td>
                    <td>{this.props.colocataire.nom}</td>
                    <td>{this.props.colocataire.prenom}</td>
                    <td>{new Date(this.props.colocataire.date_naissance).toLocaleDateString()}</td>
                    <td>{this.props.colocataire.email}</td>
                    <td>{this.props.colocataire.telephone}</td>


                    {/*<td>*/}
                    {/*    <DisplayImageComponent*/}
                    {/*        urlImg={"http://localhost:7777" + this.props.colocataire.urlImg}*/}
                    {/*        id={this.props.colocataire.id}*/}
                    {/*        PostImage={this.props.PostImage}*/}
                    {/*    />*/}
                    {/*</td>*/}
                    {/*<td>{new Date(this.props.colocataire.created).toLocaleDateString()}</td>*/}
                    {/*<td>{this.props.colocataire.updated !== " " ? new Date(this.props.colocataire.updated).toLocaleDateString() : "-"}</td>*/}
                    <td>
                        <Button
                            variant="primary"
                            size="sm"
                            onClick={() =>
                                this.props.ChangeToggleForm(this.props.colocataire)
                            }
                        >
                            <FontAwesomeIcon icon={faPen} className="fontIcon" /> Modifier
                        </Button>
                        <Button
                            variant="secondary"
                            size="sm"
                            onClick={() =>
                                this.props.DeleteColocataire(this.props.colocataire.id)
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

export default ColocataireItemComponent
