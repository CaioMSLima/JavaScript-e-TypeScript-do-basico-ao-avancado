import Sequelize, { Model } from 'sequelize';
// this criate the model of you use to put the data
export default class Student extends Model {
  static init(sequelize) {
    // this pick the init of Model
    super.init(
      {
        name: Sequelize.STRING,
        last_name: Sequelize.STRING,
        email: Sequelize.STRING,
        age: Sequelize.INTEGER,
        height: Sequelize.FLOAT,
        Weight: Sequelize.FLOAT,
      },
      {
        sequelize,
      },
    );
    return this;
  }
}
