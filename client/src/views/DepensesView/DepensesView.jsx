import React, { Component } from 'react';
import DepenseFormComponent from '../../components/Depenses/DepenseFormComponent';
import DepenseListComponent from '../../components/Depenses/DepenseListComponent';
import Alert from '../../components/Alert';
import { getColocataireApi } from '../../services/ColocatairesApiService'
import { getDepensesApi, postDepenseApi, updateDepenseApi, deleteDepenseApi } from '../../services/DepensesApiService'
import './DepensesView.css';

class DepensesView extends Component {

    constructor(props) {
        super(props)
        this.state = {
            depenses: [],
            colocataires: [],
            newDepense: {  }, //id: "", title: "", amount: "", date: "", edit: false
            toggleForm: false,
            alert: { type: "", text: "", show: false }
        }
    }

    async componentDidMount() {
        this.FetchData();
    }


    ChangeToggleForm = (data) => {
        console.log(data);
        this.setState({
            newDepense: data,
            toggleForm: !this.state.toggleForm
        });
    }

    // Methode locale pour récuprer la reponse de l'api et set le state local Depense
    FetchData = async () => {
        let response = await getDepensesApi();
        let colocataires = await getColocataireApi();
        this.setState({
            depenses: response.data.data,
            colocataires: colocataires.data.data
        })
    }

    AddDepense = async (newDepense) => {
        //console.table(newDepense);
        let response = await postDepenseApi(newDepense);
        alert(response.data.message);
        //console.table(response.data.data);
        this.FetchData();
    }

    EditDepense = async (editDepense) => {
        let response = await updateDepenseApi(editDepense);
        alert(response.data.message);
        this.FetchData();
    }

    DeleteDepense = async (id) => {
        if (window.confirm("Etes-vous sur de vouloir supprimer le Depense N°" + id + " ?")) {
            let response = await deleteDepenseApi(id);
            alert(response.data.message)
        }
        this.FetchData();
    }

    render() {
        return (
            <div className='container-fluid'>
                {this.state.alert.show && <Alert type={alert.type} text={alert.text} />}
                <div className="row">
                    <div className="col-sm-6">
                        <h2>Budget de la <b>colocation</b></h2>
                    </div>
                    <div className="col-sm-6 d-flex flex-row-reverse">
                        <DepenseFormComponent
                            depense={this.state.newDepense}
                            depenses={this.state.depenses}
                            colocataires={this.state.colocataires}
                            AddDepense={this.AddDepense}
                            toggleForm={this.state.toggleForm}
                            ChangeToggleForm={this.ChangeToggleForm}
                        />
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
                            return (acc += curr.amount);
                        }, 0)}
                    </span>
                </h1>
            </div>
        );
    }
}

export default DepensesView;
