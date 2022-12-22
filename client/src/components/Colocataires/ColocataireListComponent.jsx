import React, { Component } from 'react'
import ColocataireItemComponent from '../../components/Colocataires/ColocataireItemComponent'
import './ColocataireComponent.css'
class ColocataireListComponent extends Component {
  render() {
    return (
      <>
        {this.props.colocataires.length === 0 ? (
          <>
            <img src="./img/loading.svg" alt="Loading" className="loadingImg" />
          </>
        ) : (
          <>
            <table className="table table-striped table-responsive-stack">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nom</th>
                  <th scope="col">Prenom</th>
                  {/* <th scope="col">Image</th>
                  <th scope="col">Titre</th>
                  <th scope="col">Nom</th>
                  <th scope="col">Prenom</th>
                  <th scope="col">Date Naissance</th>
                  <th scope="col">Mail</th>
                  <th scope="col">Téléphone</th>
                  <th scope="col">Created</th>
                  <th scope="col">Updated</th> */}
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {this.props.colocataires.map((colocataire, index) => {
                  return (
                    <ColocataireItemComponent
                      key={index}
                      colocataire={colocataire}
                      EditColocataire={this.props.EditColocataire}
                      DeleteColocataire={this.props.DeleteColocataire}
                      PostImage={this.props.PostImage}
                      ChangeToggleForm={this.props.ChangeToggleForm}
                    />
                  )
                })}
              </tbody>
            </table>
          </>
        )}
      </>
    )
  }
}

export default ColocataireListComponent
