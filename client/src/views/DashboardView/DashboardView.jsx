import React, { Component } from 'react'
import ColocataireFormComponent from '../../components/Colocataires/ColocataireFormComponent'
import ColocataireListComponent from '../../components/Colocataires/ColocataireListComponent'
import {
  getColocataireApi,
  postColocataireApi,
  updateColocataireApi,
  deleteColocataireApi,
  postImage,
} from '../../services/ColocatairesApiService'
import './DashboardView.css'

class DashboardView extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="container-fluid">
        <h1>MaColoc</h1>
        <div class="card-group">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">
                Visualisez la situation de votre coloc en un clin d'&oelig;il
              </h5>
              <p class="card-text">
                Pas besoin de passer des heures à faire vos comptes, MaColoc
                vous donne un vision rapide de la manière dont les dépenses sont
                réparties au sein de votre coloc.
              </p>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Suivez vos dépenses dans le temps</h5>
              <p class="card-text">
                MaColoc conserve la trace de vos dépenses pour que vous voyez
                quels mois ont été les plus coûteux dans votre coloc.
              </p>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">
                Regardez les flux de dépenses dans votre coloc
              </h5>
              <p class="card-text">
                Utilisez le graph des dépenses pour avoir une vision globale des
                flux d'argent dans votre coloc et voir facilement si tout va
                bien.
              </p>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Vous voulez solder vos comptes ?</h5>
              <p class="card-text">
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
