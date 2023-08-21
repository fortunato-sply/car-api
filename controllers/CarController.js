const Car = require('../models/Car');
const ObjectId = require('mongodb').ObjectId;

class CarController {
  static async createCar(req, res){
    const data = req.body;

    if (!data.brand || !data.model || !data.year || !data.fip || !data.color)
      return res.status(400).send({ message: "Invalid data" });

    try {
      const c = await Car.create(data);
      return res.status(201).send({ message: "Successful!", body: c });
    } catch (err) {
      return res.status(500).send({ error: err });
    }
  }

  static async updateCar(req, res){
    const data = req.body;
    const car = {
      brand: data.brand,
      model: data.model,
      year: data.year,
      fip: data.fip,
      color: data.color
    }

    try {
      await Car.findByIdAndUpdate(data._id, car);
      console.log("aq")
      return res.status(200).send({ message: "Success!" });
    } catch (err) {
      return res.status(500).send({ message: `Error: ${err}`});
    }
  }

  static async deleteCar(req, res){
    const { id } = req.params;
    try {
      await Car.findByIdAndDelete(id);
      return res.status(200).send({ message: "Success" });
    } catch (err) {
      return res.status(500).send({ message: `Error: ${err}` });
    }
  }

  static async getCars(req, res){
    const cars = await Car.find();
    return res.status(200).send({ message: "Success!", content: cars });
  }
}

module.exports = CarController;