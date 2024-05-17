import Sequelize, { Model } from 'sequelize';
// this criate the model of you use to put the data
export default class Student extends Model {
  static init(sequelize) {
    // this pick the init of Model
    super.init(
      {
        name: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'The name must to have between 3 and 255 characters',
            },
          },
        },
        last_name: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'The lastName must to have between 3 and 255 characters',
            },
          },
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: '',
          unique: {
            msg: 'This email aready exist',
          },
          validate: {
            isEmail: {
              msg: 'Invalid e-mail',
            },
          },
        },
        age: {
          type: Sequelize.INTEGER,
          defaultValue: '',
          validate: {
            isInt: {
              msg: 'The age must to be a interger number',
            },
          },
        },
        height: {
          type: Sequelize.FLOAT,
          defaultValue: '',
          validate: {
            isFloat: {
              msg: 'The height must to be a float or integer number',
            },
          },
        },
        Weight: {
          type: Sequelize.FLOAT,
          defaultValue: '',
          validate: {
            isFloat: {
              msg: 'The weight must to be a float or integer number',
            },
          },
        },
      },
      {
        sequelize,
      },
    );
    return this;
  }
}
