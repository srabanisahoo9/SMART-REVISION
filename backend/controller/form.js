const Form = require("../model/form");
const mongoose = require("mongoose");
const FormHelper = require("../helper/form");
class FormController {
  // create question
  static async create(req, res) {
    try {
      const data = req.body;

      const questionLink = data.questionLink;
      const notes = data.notes;
      const createdBy = new mongoose.Types.ObjectId("668dab261a490dad98261fbc");
      const questionName = FormHelper.getQuestionName(questionLink);
      const newForm = await Form.create({
        questionLink,
        notes,
        createdBy,
        questionName,
      });

      // if we have reached till this, there must be no errors
      res.status(201).json({ success: true, form: newForm });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, error: error });
    }
  }
  // update frequency
  static async update(req, res) {
    res.json({ message: "hello" });
  }
  // cancel subsbscription

  // get all the questions saved
  static async getAll(req, res) {
    try {
      const createdBy = new mongoose.Types.ObjectId("668dab261a490dad98261fbc");
      const getAllFormData = await Form.find({ createdBy: createdBy });
      res.status(201).json({ success: true, allFormData: getAllFormData });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, error: error });
    }
  }
  static async deleteAll(req, res) {
    try {
      const createdBy = new mongoose.Types.ObjectId("668dab261a490dad98261fbc");
      console.log("yaha tak pahuch gaya");
      await Form.deleteMany({ createdBy: createdBy });
      res.status(201).json({ success: true, message: "all question deleted" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, error: error });
    }
  }
}

module.exports = FormController;
