'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Hinzufügen des Feldes 'profileType' zur Tabelle 'Users'
    await queryInterface.addColumn('Users', 'profileType', {
      type: Sequelize.ENUM(
        'Tierarzt',
        'Helfer',
        'Tierschutzorganisation',
        'Tierheim / Shelter'
      ),
      allowNull: false,
      defaultValue: 'Helfer', // Standardwert
    });

    // Hinzufügen des Feldes 'biography' zur Tabelle 'Users'
    await queryInterface.addColumn('Users', 'biography', {
      type: Sequelize.TEXT,
      allowNull: true, // Optional
    });

    // Hinzufügen des Feldes 'password' zur Tabelle 'Users'
    await queryInterface.addColumn('Users', 'password', {
      type: Sequelize.STRING,
      allowNull: false, // Muss immer gesetzt sein
    });
  },

  async down(queryInterface, Sequelize) {
    // Entfernen des Feldes 'profileType'
    await queryInterface.removeColumn('Users', 'profileType');

    // Entfernen des Feldes 'biography'
    await queryInterface.removeColumn('Users', 'biography');

    // Entfernen des Feldes 'password'
    await queryInterface.removeColumn('Users', 'password');
  }
};
