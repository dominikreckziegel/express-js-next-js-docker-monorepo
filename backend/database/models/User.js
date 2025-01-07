const { Model } = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }

    // Methode zum Überprüfen des Passworts
    async validatePassword(password) {
      return await bcrypt.compare(password, this.password);
    }
  }

  User.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true, // Validiert, ob es eine gültige E-Mail-Adresse ist
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      profileType: {
        type: DataTypes.ENUM('Tierarzt', 'Helfer', 'Tierschutzorganisation', 'Tierheim / Shelter'),
        allowNull: false,
        defaultValue: 'Helfer',
      },
      biography: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'User',
      hooks: {
        // Hash-Passwort vor dem Erstellen eines Benutzers
        beforeCreate: async (user) => {
          if (user.password) {
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(user.password, salt);
          }
        },
        // Hash-Passwort vor dem Aktualisieren eines Benutzers
        beforeUpdate: async (user) => {
          if (user.password) {
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(user.password, salt);
          }
        },
      },
    },
  );

  return User;
};
