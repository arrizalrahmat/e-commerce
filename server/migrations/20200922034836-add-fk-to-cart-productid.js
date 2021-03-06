'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Carts', 'ProductId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Products',
        key: 'id'
      },
      OnUpdate: 'CASCADE',
      OnDelete: 'CASCADE'
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Carts', 'ProductId')
  }
};
