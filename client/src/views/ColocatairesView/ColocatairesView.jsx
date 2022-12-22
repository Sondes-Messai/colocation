import React, { Component } from 'react';
import ColocataireFormComponent from '../../components/Colocataires/ColocataireFormComponent';
import ColocataireListComponent from '../../components/Colocataires/ColocataireListComponent';
import { getColocataireApi, postColocataireApi, updateColocataireApi, deleteColocataireApi, postImage } from '../../services/ColocatairesApiService'
import './ColocatairesView.css';

class ColocatairesView extends Component {

    constructor(props) {
        super(props)
        this.state = {
            colocataires: [],
            newColocataire: null,
            toggleForm: false
        }
    }

    ChangeToggleForm = (data) => {
        console.log(data);
        this.setState({
            newColocataire: data,
            toggleForm: !this.state.toggleForm
        })
    }

    // Methode locale pour récuprer la reponse de l'api et set le state local colocataire
    FetchColocataire = async () => {
        let response = await getColocataireApi();
        this.setState({
            colocataires: response.data.data
        })
    }

    AddColocataire = async (newColocataire) => {
        //console.table(newColocataire);
        let response = await postColocataireApi(newColocataire);
        alert(response.data.message);
        //console.table(response.data.data);
        this.FetchColocataire();
    }

    EditColocataire = async (editColocataire) => {
        let response = await updateColocataireApi(editColocataire);
        alert(response.data.message);
        this.FetchColocataire();
    }

    DeleteColocataire = async (id) => {
        if (window.confirm("Etes-vous sur de vouloir supprimer le colocataire N°" + id + " ?")) {
            let response = await deleteColocataireApi(id);
            alert(response.data.message)
        }
        this.FetchColocataire();
    }


    PostImage = async (id, image) => {
        let response = await postImage(id, image)
        console.log(response.data.message);
        alert(response.data.message)
        this.FetchColocataire();
    }

    async componentDidMount() {
        this.FetchColocataire();
    }


    render() {

        return (
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-sm-6">
                        <h2>Gérer vos <b>colocataires</b></h2>
                    </div>
                    <div className="col-sm-6 d-flex flex-row-reverse">
                        <ColocataireFormComponent
                            colocataires={this.state.colocataires}
                            newColocataire={this.state.newColocataire}
                            toggleForm={this.state.toggleForm}
                            AddColocataire={this.AddColocataire}
                            ChangeToggleForm={this.ChangeToggleForm}
                        />
                    </div>
                </div>
                <div className="row mt-3">
                    <ColocataireListComponent
                        colocataires={this.state.colocataires}
                        EditColocataire={this.EditColocataire}
                        DeleteColocataire={this.DeleteColocataire}
                        PostImage={this.PostImage}
                        ChangeToggleForm={this.ChangeToggleForm}
                    />
                </div>
            </div>
        );
    }
}

export default ColocatairesView;
