const { Schema, model } = require("mongoose");

const categorySchema = new Schema(
  {
    title: String,
    category: String,
    questions: Object,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("category", categorySchema);
