const mongoose = require("mongoose");

const FormSchema = mongoose.Schema({
  /** from frontend */
  questionLink: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
  },

  /** handled by backend */
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  questionName: {
    type: String,
    required: true,
  },

  frequency: {
    type: Number,
    default: 1,
  },
  isCancelled: {
    type: Boolean,
    required: true,
    default: false,
  },

  createdAt: { type: Date, required: true, default: Date.now },
});

const Form = mongoose.model("Form", FormSchema);

module.exports = Form;
