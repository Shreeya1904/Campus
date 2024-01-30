const { url } = require('inspector');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  idea: {
    type: String,
    required: true,
  },
  driveLink: {
    type: url,
    required: false,
  },
  GitLink: {
    type: url,
    required: false,
  },
  imagepro: {
    type: Image,
    required: false,
  },
  video: {
    type: File,
    required: false,
  }

}, { timestamps: true });

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;