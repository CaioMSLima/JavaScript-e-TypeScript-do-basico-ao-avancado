/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // change students column
    await queryInterface.changeColumn(
      'students',
      'email',
      {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
    );
  },

  // async down (queryInterface, Sequelize) {
  //   /**
  //    * Add reverting commands here.
  //    *
  //    * Example:
  //    * await queryInterface.dropTable('users');
  //    */
  // }
};
