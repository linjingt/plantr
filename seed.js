const Sequelize = require('sequelize');
const db = require('./models');


db.sync({force: true})
  .then(() => {
    console.log('database success!!')
  })
  .catch((error) => {
    console.log('disaster!')
    console.log(error)
  })
  .finally(() => {
    db.close();
  });

