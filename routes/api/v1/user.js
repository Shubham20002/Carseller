const express=require('express');
const router=express.Router();


const usercontroller=require('../../../controller/Usercontroller');

router.post('/create-user',usercontroller.createuser);
router.post('/create-session',usercontroller.cretesession);

module.exports=router;