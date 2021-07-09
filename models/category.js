const { Schema, model } = require("mongoose");

const categorySchema = new Schema(
  {
    category: String,
    questions: Object,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("category", categorySchema);
