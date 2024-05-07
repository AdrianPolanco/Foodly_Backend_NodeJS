const { Schema, model } = require("mongoose");

const CategorySchema = new Schema({
    title: { type: String, required: true },
    value: { type: String, required: true },
    imageUrl: { type: String, required: true },
});

module.exports = model("Category", CategorySchema);
