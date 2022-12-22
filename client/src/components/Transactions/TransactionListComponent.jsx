import React, { Component } from "react";
import TransactionItem from "./TransactionItemComponent";
import { MdDelete } from "react-icons/md";

class TransactionListComponent extends Component {
  render() {
    return (
      <>
        <table className="table table-striped table-responsive-stack">
          <thead>
            <tr>
              <th scope="col">Date de réglement</th>
              <th scope="col">Catégorie</th>
              <th scope="col">Dépense</th>
              <th scope="col">Colocataire</th>
              <th scope="col">Montant</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.transactions.map(transaction => {
              return (
                <TransactionItem
                  key={transaction.id}
                  transaction={transaction}
                  DeleteTransaction={this.props.DeleteTransaction}
                  EditTransaction={this.props.EditTransaction}
                />
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

export default TransactionListComponent;