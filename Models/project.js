const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectschema = new Schema({
  title: {
    type: String,
    required: true
  },
  skill: {
    type: String,
    required: true
  },
  idea: {
    type: String,
    required: true
  },
  drivelink: {
    type: String,
    required: false
  },
  gitlink: {
    type: String,
    required: false
  },
  image: {
    type: String,
    required: false
  },
  video: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: true
  },
}, { timestamps: true });

const Projects = mongoose.model('Projects', projectschema);
module.exports = Projects;