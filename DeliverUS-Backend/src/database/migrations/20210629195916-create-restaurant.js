module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Restaurants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      restaurantCategoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'RestaurantCategories'
          },
          key: 'id'
        },
        
        
        name: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        description: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        address: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        postalCode: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        url: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        shippingCosts: {
          allowNull: false,
          type: Sequelize.DOUBLE,
        },
        averageServiceMinutes: {
          allowNull: true,
          type: Sequelize.DOUBLE,
        },
        email: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        phone: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        logo: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        heroImage: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        status: {
          allowNull: true,
          type: Sequelize.ENUM,
          values: [
            'online',
            'offline',
            'closed',
            'temporily closed'

          ],
        },
        
        
      }
      
      // TODO: Include the rest of the fields of the Restaurants table

    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Restaurants')
  }
}
