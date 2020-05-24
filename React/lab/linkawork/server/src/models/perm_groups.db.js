/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "PermGroups",
    {
      name: {
        type: DataTypes.STRING(45)
      },
      description: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      deletedAt: DataTypes.DATE
    },
    {
      tableName: "perm_groups"
    }
  );
};
