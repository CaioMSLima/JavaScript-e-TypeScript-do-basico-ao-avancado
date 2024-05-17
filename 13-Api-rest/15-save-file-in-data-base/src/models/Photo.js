import Sequelize, { Model } from 'sequelize';
// this criate the model of you use to put the data
export default class Photo extends Model {
  static init(sequelize) {
    // this pick the init of Model
    super.init(
      {
        originalname: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'The fild not may to be empty',
            },
          },
        },
        filename: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'The fild not may to be empty',
            },
          },
        },
      },
      {
        sequelize,
        tableName: 'Photos',
      },
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Student, { foreignKey: 'student_id' });
  }
}
