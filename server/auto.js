let SequelizeAuto = require('sequelize-auto')
let db = require('./config/config').db


let auto = new SequelizeAuto(db.name, db.user, db.pwd, { 
  host: db.host,   
  dialect: db.type,  
  directory: db.target,
  port: db.port,
  additional: {
    timestamps: false
  }
})

auto.run(function (err) {
  if (err) throw err
  console.log(auto.tables) // table list
  console.log(auto.foreignKeys) // foreign key list
})