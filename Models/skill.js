const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const skillschema = new Schema({
  myskill: {
    type: String,
    required: true,
  },
  rollno: {
    type: Int16Array,
    required: true,
  },
}, { timestamps: true });

const Skills = mongoose.model('Skills', skillschema);
module.exports = Skills;