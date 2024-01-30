const express=require('express');
const projectController=require('../Controllers/projectContoller');
const router=express.Router();

router.get('/',projectController.project_index);
router.post('/',projectController.project_create_post);
router.get('/create',projectController.project_create_get); 
router.get('/:id',projectController.project_details);
router.delete('/:id',projectController.project_delete);

module.exports=router;