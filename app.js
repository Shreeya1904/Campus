const express =require('express');
const morgan=require('morgan');

const mongoose=require('mongoose');
const ProjectRoute=require('./Routes/projectroute');
const app=express();

const dbURI='mongodb+srv://netninjas:Nelapati@nodetuts.rhw6xbi.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
   .then((result)=>app.listen(3000))
   .catch((err)=>console.log(err))

app.set('view engine','ejs');




app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));


app.get('/add-project',(req,res)=>{
    const project=new Project({
        title: 'new-project',
        idea: 'description about the project',
        driveLink:'link for the project',
        GitLink:'Github link',
        imagepro:'image',
        video:'video'
    });

    project.save()
        .then((result)=>{
            res.send(result)
        })
        .catch((err)=>{
            console.log(err);
        });
})       

app.get('/all-project',(req,res)=>{
    Project.find()
        .then((result)=>{
            res.send(result);
        })
        .catch((err)=>{
            console.log(err);
        });
})

// app.get('/single-project',(req,res)=>{
//     Project.findById('65776425fd337347a89bc928')
//         .then((result)=>{
//             res.send(result)
//         })
//         .catch((err)=>{
//             console.log(err);
//         });
// })

app.get('/',(req,res)=>{

    res.redirect('/projects')
    
});

// app.get('/about',(req,res)=>{

//     res.render('about',{title:'About'});

//  });

//redirects
// app.get('/about-us',(req,res)=>{
//     res.redirect('/about',{title:'About'});
// });

//blog routes
app.use('/projects',ProjectRoute);

//404 page
app.use((req,res)=>{
    //res.status(404).sendFile('./views/404.html',{root:__dirname});
    res.status(404).render('404',{title:'404'});

  
});


 