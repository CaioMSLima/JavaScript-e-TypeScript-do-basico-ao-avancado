import Student from '../models/Student';

class HomeController {
  async index(req, res) {
    const newStudent = await Student.create({
      name: 'Ana',
      last_name: 'Patos',
      email: 'Ana@mgmail.com',
      age: 2,
      height: 1.23,
      Weight: 10.75,
    });
    res.json(newStudent);
  }
}

export default new HomeController();
