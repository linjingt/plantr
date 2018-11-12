const Sequelize = require('sequelize');
const {db, Vegetable} = require('./models');




const init =  () => {

  db.sync({force: true})
  .then(() => {
    console.log('database success!!')
      const veg = Vegetable.create({
        name: 'pepper',
        color: 'red',
          plantedOn: '11-01-2018',
      })
  })
    .catch((error) => {
      console.log('disaster!')
      console.log(error)
    })
    .finally(() => {
      db.close();
    });
}

init()

