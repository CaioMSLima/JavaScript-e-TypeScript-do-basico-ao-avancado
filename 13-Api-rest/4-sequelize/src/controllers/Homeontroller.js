import Student from '../models/student';

class HomeController {
  async index(req, res) {
    const newStudent = await Student.create({
      name: 'Caio',
      last_name: 'Matos',
      email: 'Caio@mgmail.com',
      age: 2222,
      height: 9.83,
      Weight: 102.75,
    });
    res.json(newStudent);
  }
}

export default new HomeController();
