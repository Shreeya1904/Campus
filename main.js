const express =require('express');
const morgan=require('morgan');

const POR = require('./Models/por');
const Projects = require('./Models/project');
const Students = require('./Models/student');
const Skills = require('./Models/skill');

const mongoose=require('mongoose');
const { machine } = require('os');

const main=express();

const dbURI='mongodb+srv://netninjas:Nelapati@nodetuts.rhw6xbi.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
   .then((result)=>main.listen(3000))
   .catch((err)=>console.log(err))
machine.set('view engine','ejs');

main.use(express.static('Public'));
main.use(express.urlencoded({extended: true}));
main.use(morgan('dev'));

main.use('/dashboard',profileRoutes);

main.use((req,res)=>{
    res.status(404).render('404'); 
});