module.exports = (sequelize, Sequelize) => {
    const Model = sequelize.define("colocataires", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        
        title: {
            type: Sequelize.STRING
        },
        nom: {
            type: Sequelize.STRING
        },
        prenom: {
            type: Sequelize.STRING
        }, 
        email: {
            type: Sequelize.STRING
        },
        date_naissance: {
            type: Sequelize.DATE
        },
        telephone: {
            type: Sequelize.STRING
        },
        //img: {
        //    type: Sequelize.STRING
        //},
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