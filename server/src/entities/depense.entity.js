module.exports = (sequelize, Sequelize) => {
    const Model = sequelize.define("depenses", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        id_categorie: {
            type: Sequelize.INTEGER
        },
        title: {
            type: Sequelize.INTEGER
        },
        montant: {
            type: Sequelize.INTEGER
        },
        date: {
            type: Sequelize.DATE
        },
        frequence: {
            type: Sequelize.INTEGER
        },
        id_colocation: {
            type: Sequelize.INTEGER
        },
        date_creation: {
            type: Sequelize.DATE
        }
    }, {
        // don't add the timestamp attributes (updatedAt, createdAt)
        timestamps: false,
        // If don't want createdAt
        createdAt: false,
        // If don't want updatedAt
        updatedAt: false
    });
    return Model;
}