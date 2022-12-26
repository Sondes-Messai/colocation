import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faTrash,
    faPen,
    faCheck,
    faMoneyCheck,
} from '@fortawesome/free-solid-svg-icons'
import { getColocataireApi } from '../../services/ColocatairesApiService'
import { getDepensesApi } from '../../services/DepensesApiService'
import { getTransactionsApi } from '../../services/TransactionsApiService'
import {
    Button,
    Modal,
    ListGroup,
    Col,
    Form,
    Row,
    InputGroup,
} from 'react-bootstrap'
import './DashboardView.css'

class DashboardView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            transactions: [],
            colocataires: [],
            depenses: [],
        }
    }

    async componentDidMount() {
        let responseTransactions = await getTransactionsApi()
        let responseDepenses = await getDepensesApi()
        let responseColocataires = await getColocataireApi()
        this.setState({
            transactions: responseTransactions.data.data,
            depenses: responseDepenses.data.data,
            colocataires: responseColocataires.data.data,
        })
        console.log(this.state.depenses)
    }
    render() {
        console.log(this.state.depenses)
        return (
            <>
                <div className="container-fluid">
                    <div className="row">
                        <div className="card m-1 text-white bg-primary col">
                            <div className="card-header">Dépenses communes</div>
                            <div className="card-body">
                                <h5 className="card-title"></h5>
                                <p className="card-text">
                                    {this.state.depenses?.reduce(
                                        (sum, item) => sum + item.montant,
                                        0,
                                    )}{' '}
                                    €
                                </p>
                            </div>
                        </div>
                        <div className="card m-1 col">
                            <div className="card-header">Liste des transactions</div>
                            <ul className="list-group list-group-flush">
                                {this.state.transactions.map((transaction, index) => {
                                    return (
                                        <li className="list-group-item d-flex"
                                            key={transaction.id}>
                                            <div className="col-sm-3">
                                                <img
                                                    src="."
                                                    width={'50px'}
                                                    height={'50px'}
                                                    className="rounded-circle"
                                                ></img>
                                            </div>
                                            <div className="col-sm-9 text-start">
                                                <span>
                                                    {' '}
                                                    {transaction.colocataire.nom}{' '}
                                                    {transaction.colocataire.prenom}
                                                </span>
                                                <br />
                                                <span>Montant : {transaction.montant} €</span>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="card m-1 col">
                            <div className="card-header">Liste des dépenses</div>
                            <ul className="list-group list-group-flush">
                                {this.state.depenses.map((depense, index) => {
                                    return (
                                        <li className="list-group-item text-start" key={depense.id}>
                                            <span>
                                                {depense.categorie.nom} / {depense.title}
                                            </span>
                                            <br />
                                            <span>Montant : {depense.montant} €</span>
                                            <br />
                                            <Button
                                                variant="success"
                                                size="sm"
                                                className="float-right"
                                            >
                                                payé
                                            </Button>
                                            <br />
                                            <div className="float-left">left</div>
                                            <div className="float-right"> right</div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    renderA() {
        return (
            <div className="container-fluid">
                <h1>MaColoc</h1>
                <div className="card-group">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                Visualisez la situation de votre coloc en un clin d'&oelig;il
                            </h5>
                            <p className="card-text">
                                Pas besoin de passer des heures à faire vos comptes, MaColoc
                                vous donne un vision rapide de la manière dont les dépenses sont
                                réparties au sein de votre coloc.
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Suivez vos dépenses dans le temps</h5>
                            <p className="card-text">
                                MaColoc conserve la trace de vos dépenses pour que vous voyez
                                quels mois ont été les plus coûteux dans votre coloc.
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                Regardez les flux de dépenses dans votre coloc
                            </h5>
                            <p className="card-text">
                                Utilisez le graph des dépenses pour avoir une vision globale des
                                flux d'argent dans votre coloc et voir facilement si tout va
                                bien.
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Vous voulez solder vos comptes ?</h5>
                            <p className="card-text">
                                MaColoc vous dira comment le faire. Vous pourrez même le
                                partager avec vos colocataires en deux clics.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center mt-3 mb-5">
                    <div className="col-12 col-sm-8 col-md-6 text-justify">
                        Tenez à jour vos comptes
                        <div className="lighter">
                            Ce application vous permet de tenir vos comptes entre
                            colocataires. Démarrez dès que vous le souhaitez en ajoutant une
                            première dépense dans le champs ci dessous.
                        </div>
                    </div>
                </div>
                Gèrez votre Coloc <i>(comme un pro).</i>
                <h5>Ultra intuitif</h5>
                <p>
                    MaColoc s'occupe de la gestion de votre coloc à votre place. <br />{' '}
                    Oubliez les cahiers de notes ou autres fichiers Excel, MaColoc
                    s'occupe du reste.
                </p>
                <h5>La meilleure expérience utilisateur.</h5>
                <p>
                    Chaque intéraction avec MaColoc a été étudiée avec précaution pour
                    s'assurer qu'elle soit la plus efficace possible.
                </p>
                <h3>
                    C'est gratuit <i>(et ça le restera)</i>
                </h3>
                <p>
                    Nous n'avons pas besoin d'abonnements, de publicités ou de spams pour
                    faire fonctionner MaColoc. Nous ne vous ferons jamais payer le moindre
                    centime.
                </p>
                <h3>
                    C'est <i>(ultra)</i> rapide
                </h3>
                <p>
                    Essayez pour voir! Nous avons vérifié chaque intéraction avec MaColoc
                    pour être sûr qu'elle soit parfaitement optimisée.
                </p>
                <h3>
                    C'est joli <i>(au moins pour nous!)</i>
                </h3>
                <p>
                    Nous sommes des vrais gourous des interfaces utilisateurs, et nous
                    travaillons dur chaque jour pour être sûr que votre expérience soit
                    géniale sur MaColoc.
                </p>
                A quoi ça sert?"
                <h2>Visualisez la situation de votre coloc en un clin d'&oelig;il</h2>
                <p className="carousel-custom">
                    Pas besoin de passer des heures à faire vos comptes, MaColoc vous
                    donne un vision rapide de la manière dont les dépenses sont réparties
                    au sein de votre coloc.
                </p>
                <h2>Suivez vos dépenses dans le temps</h2>
                <p className="carousel-custom">
                    MaColoc conserve la trace de vos dépenses pour que vous voyez quels
                    mois ont été les plus coûteux dans votre coloc.
                </p>
                <h2>Vous voulez solder vos comptes ?</h2>
                <p className="carousel-custom">
                    MaColoc vous dira comment le faire. Vous pourrez même le partager avec
                    vos colocataires en deux clics.
                </p>
                <h2>Regardez les flux de dépenses dans votre coloc</h2>
                <p className="carousel-custom">
                    Utilisez le graph des dépenses pour avoir une vision globale des flux
                    d'argent dans votre coloc et voir facilement si tout va bien.
                </p>
                <button
                    className="btn background-color-primary mt-5 mx-auto d-block"
                    data-toggle="modal"
                    data-target="#addExpenseModal"
                >
                    Nouvelle dépense
                </button>
            </div>
        )
    }
}

export default DashboardView
