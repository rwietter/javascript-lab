/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "PermObjects",
    {
      name: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      description: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      type: {
        type: DataTypes.ENUM,
        values: ["view", "route", "component", "graphql"]
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      deletedAt: DataTypes.DATE
    },
    {
      tableName: "perm_objects"
    }
  );
};
