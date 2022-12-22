import React, { Component } from "react";
import DepenseItem from "./DepenseItemComponent";
import { MdDelete } from "react-icons/md";

class DepenseListComponent extends Component {
  render() {
    return (
      <>
        <table className="table table-striped table-responsive-stack">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Date de début dépense</th>
              <th scope="col">Catégorie</th>
              <th scope="col">Titre</th>
              <th scope="col">Montant</th>
              <th scope="col">Frequence</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.depenses.map(depense => {
              return (
                <DepenseItem
                  key={depense.id}
                  depense={depense}
                  DeleteDepense={this.props.DeleteDepense}
                  EditDepense={this.props.EditDepense}
                  ChangeToggleForm={this.props.ChangeToggleForm}
                />
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

export default DepenseListComponent;