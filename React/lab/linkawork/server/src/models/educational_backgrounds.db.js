/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "EducationalBackgrounds",
    {
      description: { type: DataTypes.STRING(255), allowNull: false },
      deletedAt: DataTypes.DATE
    },
    {
      tableName: "educational_backgrounds",
      timestamps: false
    }
  );
};
