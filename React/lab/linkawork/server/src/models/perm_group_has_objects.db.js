/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const PermGroupHasObjects = sequelize.define(
    "PermGroupHasObjects",
    {
      group_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: "perm_grupo",
          key: "id"
        }
      },
      object_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: "objects",
          key: "id"
        }
      },
      deletedAt: DataTypes.DATE
    },
    {
      tableName: "perm_group_has_objects"
    }
  );
  PermGroupHasObjects.associate = models => {
    models.PermGroups.hasMany(PermGroupHasObjects, {
      foreignKey: "group_id"
    });
    PermGroupHasObjects.belongsTo(models.PermGroups, {
      foreignKey: "group_id"
    });
    models.PermObjects.hasMany(PermGroupHasObjects, {
      foreignKey: "object_id"
    });
    PermGroupHasObjects.belongsTo(models.PermObjects, {
      foreignKey: "object_id"
    });
  };
  return PermGroupHasObjects;
};
