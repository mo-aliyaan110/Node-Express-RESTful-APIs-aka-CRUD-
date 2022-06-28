const Express = require('express');
const router = new Express.Router();
const UsersPost = require('../models/Post');


// get all users
router.get('/', async (req, res) => {
    
    try{
        const users = await UsersPost.find();
        res.json(users);
    }
    catch(err){
        res.json({message: err});
    }
    
})

// get particular user
router.get('/:userId', async(req, res) => {
    try{
        const particularUser = await UsersPost.findById(req.params.userId);
        res.json(particularUser);
    }
    catch(err){
        res.json({message: err});
    }
})

// delete a user
router.delete('/:userId', async(req, res) => {
    try{
        await UsersPost.findByIdAndDelete(req.params.userId);
        res.json("User Deleted Successfully");
    }
    catch(err){
        res.json({message: err});
    }
})



module.exports = router;