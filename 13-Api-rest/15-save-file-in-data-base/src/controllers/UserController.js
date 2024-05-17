import User from '../models/User';

class UserController {
  // crate users
  async store(req, res) {
    try {
      const newUser = await User.create(req.body);
      const { id, name, email } = newUser;
      return res.json({ id, name, email });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  // show all users
  async index(req, res) {
    try {
      // Show who inputs you want to find
      const users = await User.findAll({ attributes: ['id', 'name', 'email'] });
      return res.json(users);
    } catch (error) {
      return res.json(null);
    }
  }

  // show specified users
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id, { attributes: ['id', 'name', 'email'] });
      return res.json(user);
    } catch (error) {
      return res.json(null);
    }
  }

  // update user
  async update(req, res) {
    try {
      const user = await User.findByPk((req.userId));

      if (!user) {
        return res.status(400).json({
          errors: ['User not exist'],
        });
      }

      const newData = await user.update(req.body);
      const { id, name, email } = newData;
      return res.json({ id, name, email });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  // delete user
  async delete(req, res) {
    try {
      const user = await User.findByPk((req.userId));

      if (!user) {
        return res.status(400).json({
          errors: ['User not exist'],
        });
      }
      const { name } = user;
      await user.destroy();
      return res.json({ message: 'delete this user', name });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }
}
export default new UserController();
