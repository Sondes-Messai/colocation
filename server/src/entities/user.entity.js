module.exports = (sequelize, Sequelize) => {
    const Model = sequelize.define("utilisateurs", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        login: {
            type: Sequelize.STRING
        },
        mdp: {
            type: Sequelize.STRING
        },
        mail: {
            type: Sequelize.STRING
        },
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