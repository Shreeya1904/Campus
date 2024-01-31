const Project=require('../Models/project');

const project_index =(req,res)=>{
    Project.find().sort({createdAt:-1})
    .then((result)=>{
        res.render('profile_page/index',{title:'Your Projects',projects: result})
    })
    .catch((err)=>{
        console.log(err);
    });
}

const project_details=(req,res)=>{
    const id=req.params.id;
    console.log(id);
    Project.findById(id)
        .then(result=>{
            res.render('projects/details',{project: result, title:'Project Details'})
        })
        .catch((err)=>{
            res.status(404).render('404',{title:'Project not found'});
        });
}

const project_create_get=(req,res)=>{
    res.render('projects/create',{title:'Upload a new project'});
}

const project_create_post=(req,res)=>{
    console.log(req.body);
    const project=new Project(req.body);

    project.save()
        .then((result)=>{
            res.redirect('/profile_page');
        })
        .catch((err)=>{
            console.log(err);
        });
}

const project_delete=(req,res)=>{
    const id=req.params.id;
    Project.findByIdAndDelete(id)
        .then(result=>{
            res.json({redirect: '/profile_page'})
        })
        .catch((err)=>{
            console.log(err);
        });
}

module.exports={
    project_index,
    project_details,
    project_create_get,
    project_create_post,
    project_delete
}