import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

// this criate the model of you use to put the data
export default class User extends Model {
  static init(sequelize) {
    // this pick the init of Model
    // password only exist in modal not in data base
    super.init(
      {
        name: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'The input name must has between 3 and 255 character',
            },
          },
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            isEmail: {
              msg: 'Invalid Email',
            },
          },
        },
        password_hash: {
          type: Sequelize.STRING,
          defaultValue: '',
        },
        password: {
          type: Sequelize.VIRTUAL,
          defaultValue: '',
          validate: {
            len: {
              args: [6, 15],
              msg: 'The password must has between 6 and 15 character',
            },
          },
        },
      },
      {
        sequelize,
      },
    );
    // encrypt the password
    this.addHook('beforeSave', async (user) => {
      user.password_hash = await bcryptjs.hash(user.password, 8);
    });
    return this;
  }
}
