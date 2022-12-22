import React, { Component } from 'react';
import TransactionFormComponent from '../../components/Transactions/TransactionFormComponent';
import TransactionListComponent from '../../components/Transactions/TransactionListComponent';
import Alert from '../../components/Alert';

import { getColocataireApi, postColocataireApi, updateColocataireApi, deleteColocataireApi, postImage } from '../../services/ColocatairesApiService'
import { getDepensesApi, postDepenseApi, updateDepenseApi, deleteDepenseApi } from '../../services/DepensesApiService'
import { getTransactionsApi, postTransactionApi, updateTransactionApi, deleteTransactionApi } from '../../services/TransactionsApiService'
import './TransactionsView.css';

class TransactionsView extends Component {

    constructor(props) {
        super(props)
        this.state = {
            transactions: [],
            colocataires: [],
            depenses: [],
            newTransaction: { id: "", charge: "", amount: "", edit: false },
            toggleForm: false,
            alert: { type: "", text: "", show: false }
        }
    }

    async componentDidMount() {
        this.FetchData();
    }


    ChangeToggleForm = (id) => {
        this.setState({
            toggleForm: !this.state.toggleForm
        })
    }

    // Methode locale pour récuprer la reponse de l'api et set le state local Transaction
    FetchData = async () => {
        let responseTransactions = await getTransactionsApi();
        let responseDepenses = await getDepensesApi();
        let responseColocataires = await getColocataireApi();
        this.setState({
            transactions: responseTransactions.data.data,
            depenses: responseDepenses.data.data,
            colocataires: responseColocataires.data.data,
        })
    }

    AddTransaction = async (newTransaction) => {
        console.log(newTransaction);
        let response = await postTransactionApi(newTransaction);
        alert(response.data.message);
        //console.table(response.data.data);
        this.FetchData();
    }

    EditTransaction = async (editTransaction) => {
        let response = await updateTransactionApi(editTransaction);
        alert(response.data.message);
        this.FetchData();
    }

    DeleteTransaction = async (id) => {
        if (window.confirm("Etes-vous sur de vouloir supprimer le Transaction N°" + id + " ?")) {
            let response = await deleteTransactionApi(id);
            alert(response.data.message)
        }
        this.FetchData();
    }
    render() {
        return (
            <div className='container-fluid'>
                {this.state.alert.show && <Alert type={alert.type} text={alert.text} />}
                <div className="row">
                    <div className="col-sm-6 d-flex">
                        <h2>Budget de la <b>colocation</b></h2>
                    </div>
                    <div className="col-sm-6 d-flex flex-row-reverse">
                        <TransactionFormComponent
                            transaction={this.state.newTransaction}
                            transactions={this.state.transactions}
                            colocataires={this.state.colocataires}
                            depenses={this.state.depenses}
                            AddTransaction={this.AddTransaction}
                            toggleForm={this.state.toggleForm}
                            ChangeToggleForm={this.ChangeToggleForm}
                        />
                    </div>
                </div>
                <div className="row mt-3">
                    <TransactionListComponent
                        transactions={this.state.transactions}
                        DeleteTransaction={this.DeleteTransaction}
                        EditTransaction={this.EditTransaction}
                    />
                </div>
            </div>
        );
    }
}

export default TransactionsView;
