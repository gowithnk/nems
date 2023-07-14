module.exports = (Sequelize, DataTypes) => {

  const Product = sequelize.define("product", {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL
    },
    description: {
      type: DataTypes.TEXT
    },
    published: {
      type: DataTypes.BOOLEAN
    }
  })

  return Product
}