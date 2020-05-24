/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const PermGroupHasUsers = sequelize.define(
    "PermGroupHasUsers",
    {
      group_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: "perm_group",
          key: "id"
        }
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: "users",
          key: "id"
        }
      },
      deletedAt: DataTypes.DATE
    },
    {
      tableName: "perm_group_has_users"
    }
  );

  PermGroupHasUsers.associate = models => {
    models.PermGroups.hasMany(PermGroupHasUsers, {
      foreignKey: "group_id"
    });
    PermGroupHasUsers.belongsTo(models.PermGroups, {
      foreignKey: "group_id"
    });

    models.users.hasMany(PermGroupHasUsers, {
      foreignKey: "user_id"
    });
    PermGroupHasUsers.belongsTo(models.users, {
      foreignKey: "user_id"
    });
  };

  return PermGroupHasUsers;
};
