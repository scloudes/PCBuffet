const { Schema, model } = require("mongoose");

const computerSchema = new Schema(
  {
    model: String,
    price: Number,
    images: Array,
    components: Object,
    url: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("computer", computerSchema);
