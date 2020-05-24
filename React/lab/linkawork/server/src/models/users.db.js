const cpfValidation = require("./validations/cpf");

module.exports = function(sequelize, DataTypes) {
  const users = sequelize.define(
    "users",
    {
      firstname: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          len: {
            args: [3, 150],
            msg: "Nome com tamanho inválido"
          }
        }
      },
      lastname: {
        type: DataTypes.STRING(255),
        validate: {
          len: {
            args: [3, 150],
            msg: "Nome com tamanho inválido"
          }
        }
      },
      company_name: {
        type: DataTypes.STRING(255),
        validate: {
          len: {
            args: [3, 150],
            msg: "Nome com tamanho inválido"
          }
        }
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: true,
        validate: {
          isEmail: {
            msg: "Email inválido"
          }
        }
      },
      cpf: {
        type: DataTypes.STRING(45),
        allowNull: true,
        unique: true,
        validate: {
          isCpf: cpfValidation
        }
      },
      cnpj: DataTypes.STRING(45),
      phone: DataTypes.STRING(16),
      type: {
        type: DataTypes.STRING(45),
        allowNull: true,
        validate: {
          isIn: {
            args: [["physical", "legal"]],
            msg: "Tipo inválido"
          }
        }
      },
      zipcode: DataTypes.INTEGER,
      address: DataTypes.STRING(255),
      city: DataTypes.STRING(255),
      state: {
        type: DataTypes.STRING(255),
        allowNull: true,
        validate: {
          isIn: {
            args: [
              [
                "",
                "AC",
                "AL",
                "AP",
                "AM",
                "BA",
                "CE",
                "DF",
                "ES",
                "GO",
                "MA",
                "MT",
                "MS",
                "MG",
                "PA",
                "PB",
                "PR",
                "PE",
                "PI",
                "RJ",
                "RN",
                "RS",
                "RO",
                "RR",
                "SC",
                "SP",
                "SE",
                "TO"
              ]
            ],
            msg: "Estado inválido"
          }
        }
      },
      password: DataTypes.STRING(255),
      birthday: DataTypes.DATE,
      educational_backgrounds_id: DataTypes.INTEGER,
      linkedin_id: DataTypes.STRING
    },
    {
      tableName: "users"
    }
  );

  users.associate = models => {
    models.EducationalBackgrounds.hasMany(users, {
      foreignKey: "educational_backgrounds_id"
    });
    users.belongsTo(models.EducationalBackgrounds, {
      foreignKey: "educational_backgrounds_id"
    });
  };
  return users;
};
