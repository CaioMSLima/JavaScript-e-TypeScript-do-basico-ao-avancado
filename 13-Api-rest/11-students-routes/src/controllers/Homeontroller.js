import Student from '../models/Student';

class HomeController {
  async index(req, res) {
    res.json('Index');
  }
}

export default new HomeController();
