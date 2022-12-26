module.exports = (sequelize, Sequelize) => {
    const Model = sequelize.define("payments", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title : {
            type: Sequelize.STRING
        },
        montant: {
            type: Sequelize.FLOAT
        },
        date: {
            type: Sequelize.DATE
        },
        id_colocataire: {
            type: Sequelize.INTEGER
        },
        est_paye : {
            type: Sequelize.BOOLEAN
        },
        id_depense : {
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