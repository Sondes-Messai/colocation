import React, { Component } from 'react'
import DepenseFormComponent from '../../components/Depenses/DepenseFormComponent'
import DepenseListComponent from '../../components/Depenses/DepenseListComponent'
import Alert from '../../components/Alert'

import {
    Button,
    Modal,
    ListGroup,
    Col,
    Form,
    Row,
    InputGroup,
} from 'react-bootstrap'
import { getColocataireApi } from '../../services/ColocatairesApiService'
import {
    getDepensesApi,
    postDepenseApi,
    updateDepenseApi,
    deleteDepenseApi,
} from '../../services/DepensesApiService'
import './DepensesView.css'

class DepensesView extends Component {
    constructor(props) {
        super(props)
        /*
        let payments = [];
        props.colocataires.forEach((colocataire) => {
          let payment = {
            colocataire: colocataire,
            id_colocataire: colocataire.id,
            montant: 0,
          }
          payments.push(payment)
        })
        console.log(props.colocataires)*/
        this.state = {
            depenses: [],
            colocataires: [],
            newDepense: {
                id: null,
                id_categorie: null,
                title: null,
                montant: null,
                date: new Date(),
                payments: [],
            },
            toggleForm: false,
            alert: { type: '', text: '', show: false },
        }
    }

    async componentDidMount() {
        this.FetchData()
    }

    ChangeToggleForm = (data) => {
        console.log(data)
        this.setState({
            newDepense: data,
            toggleForm: !this.state.toggleForm,
        })
    }

    // Methode locale pour récuprer la reponse de l'api et set le state local Depense
    FetchData = async () => {
        let response = await getDepensesApi()
        let colocataires = await getColocataireApi()
        let payments = []
        colocataires.data.data.forEach((colocataire) => {
            let payment = {
                colocataire: colocataire,
                id_colocataire: colocataire.id,
                montant: 0,
            }
            payments.push(payment)
        })
        let newDepense = {
            id: null,
            id_categorie: null,
            title: null,
            montant: null,
            date: new Date(),
            payments: payments,
        }
        this.setState({
            depenses: response.data.data,
            colocataires: colocataires.data.data,
            depense: newDepense,
        })
        console.log(this.state.depense)
    }

    AddDepense = async (newDepense) => {
        //console.table(newDepense);
        let response = await postDepenseApi(newDepense)
        alert(response.data.message)
        //console.table(response.data.data);
        this.FetchData()
    }

    EditDepense = async (editDepense) => {
        let response = await updateDepenseApi(editDepense)
        alert(response.data.message)
        this.FetchData()
    }

    DeleteDepense = async (id) => {
        if (
            window.confirm(
                'Etes-vous sur de vouloir supprimer le Depense N°' + id + ' ?',
            )
        ) {
            let response = await deleteDepenseApi(id)
            alert(response.data.message)
        }
        this.FetchData()
    }

    render() {
        return (
            <div className="container-fluid">
                {this.state.alert.show && <Alert type={alert.type} text={alert.text} />}
                <div className="row">
                    <div className="col-sm-5 text-start">
                        <h2>
                            Budget de la <b>colocation</b>
                        </h2>
                    </div>
                    <div className="col-sm-7">
                        <div className="input-group">
                            <Form.Label className="input-group-text">Consulter Par Période</Form.Label>
                            <Form.Select onChange={(e) => this.setPeriode(e.target.value)}>
                                <option value={0}>Toutes les Dépenses</option>
                                <option value={1}>Le Mois Courant</option>
                                <option value={3}>Les 3 Mois Précidents</option>
                                <option value={6}>Les 6 Mois Précidents</option>
                            </Form.Select>
                            <DepenseFormComponent
                                depense={this.state.newDepense}
                                depenses={this.state.depenses}
                                colocataires={this.state.colocataires}
                                SaveDepense={this.AddDepense}
                                toggleForm={this.state.toggleForm}
                                ChangeToggleForm={this.ChangeToggleForm}
                            />
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <DepenseListComponent
                        depenses={this.state.depenses}
                        DeleteDepense={this.DeleteDepense}
                        EditDepense={this.EditDepense}
                        ChangeToggleForm={this.ChangeToggleForm}
                        clearItems={this.clearItems}
                    />
                </div>
                <h1>
                    A payer :
                    <span className="total">
                        €
                        {this.state.depenses.reduce((acc, curr) => {
                            return (acc += curr.montant)
                        }, 0)}
                    </span>
                </h1>
            </div>
        )
    }
}

export default DepensesView
