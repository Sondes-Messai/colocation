module.exports = (sequelize, Sequelize) => {
    const Model = sequelize.define("utilisateurs", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type: Sequelize.STRING
        },
        mdp: {
            type: Sequelize.STRING
        },
        /*
        nom: {
            type: Sequelize.STRING
        },
        prenom: {
            type: Sequelize.STRING
        },
        date_anniversaire: {
            type: Sequelize.DATE
        },*/
        id_colocation: {
            type: Sequelize.INTEGER
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