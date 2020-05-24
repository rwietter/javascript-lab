/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  let PermAccessControl = sequelize.define(
    "PermAccessControl",
    {
      token: {
        type: DataTypes.STRING(255),
        allowNull: false
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
      linkedin_code: { type: DataTypes.STRING(255) },
      ip: {
        type: DataTypes.STRING(15),
        allowNull: true
      },
      last_access: {
        type: DataTypes.DATE,
        allowNull: true
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: "1"
      },
      deletedAt: DataTypes.DATE
    },
    {
      tableName: "perm_access_control"
    }
  );

  PermAccessControl.associate = models => {
    models.users.hasMany(PermAccessControl, {
      foreignKey: "user_id"
    });
    PermAccessControl.belongsTo(models.users, {
      foreignKey: "user_id"
    });
  };
  return PermAccessControl;
};
