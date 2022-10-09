module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        product_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        product_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        product_type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        product_brand: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.STRING,
            allowNull: false
        },
        quantity: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        tableName: 'dbproducts'
    });

    return Product;
}