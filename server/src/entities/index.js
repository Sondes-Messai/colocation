const dbConfig = require('../config/db.config.js')

const Sequelize = require('sequelize')
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize
db.Colocation = require('./colocation.entity.js')(sequelize, Sequelize)
db.Colocation = require('./colocation.entity.js')(sequelize, Sequelize)
db.Colocataire = require('./colocataire.entity.js')(sequelize, Sequelize)
db.Depense = require('./depense.entity.js')(sequelize, Sequelize)
db.DepenseGroupe = require('./depenseGroupe.entity.js')(sequelize, Sequelize)
db.Payment = require('./payment.entity.js')(sequelize, Sequelize)

//db.Depense.hasMany(db.Payment, { foreignKey: "id_depense",as: "payments" });
//db.Payment.belongsTo(db.Depense);

db.DepenseGroupe.hasMany(db.Depense, {
  foreignKey: 'id_categorie',
})
db.Depense.belongsTo(db.DepenseGroupe, {
  foreignKey: { name: 'id_categorie' },
  as : 'categorie'
})

db.Depense.hasMany(db.Payment, {
  foreignKey: 'id_depense', // UserId -> invoice_creator
})
db.Colocataire.hasMany(db.Payment, {
  foreignKey: 'id_colocataire', // UserId -> invoice_creator
})
db.Payment.belongsTo(db.Depense, {
  foreignKey: { name: 'id_depense' }, // UserId -> invoice_creator
})
db.Payment.belongsTo(db.Colocataire, {
  foreignKey: { name: 'id_colocataire' }, // UserId -> invoice_creator
})
module.exports = db
