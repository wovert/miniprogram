/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('order_product', {
		order_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		product_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		count: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		delete_time: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		update_time: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'order_product',
		timestamps: false
	});
};
