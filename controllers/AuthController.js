const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

class AuthController {
  static async delete(req, res) {
    const { id } = req.params;

    if(!id) return res.status(400).send({ message: "no id provider" });
    
    try {
      await User.findByIdAndDelete(id);
      return res.status(200).send({ message: "Deleted" });
    } catch (err) {
      return res.status(400).send({ message: "Error", err: err });
    }
  }

  static async register(req, res) {
    const { name, email, password } = req.body;

    if (!name || !email || !password)
      return res.status(400).send({ message: "Erro ao criar conta: Um ou mais campos faltaram." })

    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    const user = new User({
      name,
      email,
      password: passwordHash
    });

    try {
      await user.save();
      res.status(201).send({ message: "Usuário cadastrado com sucesso" });
    } catch (error) {
      return res.status(500).send({ message: "Something failed" })
    }
  }

  static async login(req, res) {
    const { email, password } = req.body;
    
    if(!email || !password)
      return res.status(400).send({ message: "Necessário usuário e senha." });

    const user = await User.findOne({ email })

    console.log(await bcrypt.compare(password, user.password));
    console.log(user.password, password);
    
    if (!user)
      return res.status(400).send({ message: "Invalid Email or password" })
    if (!await bcrypt.compare(password, user.password))
      return res.status(400).send({ message: "Invalid Email or password" })

    const secret = process.env.SECRET;
    const token = jwt.sign(
      {
        id: user._id,
      },
      secret,
      {
        expiresIn: '2 days'
      }
    );

    return res.status(200).send({ token: token })
  }

  static async get(req, res) {
    const users = await User.find();
    return res.status(200).send({ message: "Sucesso!", content: users })
  }
}

module.exports = AuthController;