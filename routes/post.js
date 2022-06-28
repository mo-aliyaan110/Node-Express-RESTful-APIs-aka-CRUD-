const Express = require('express');
const router = new Express.Router();
const UsersPost = require('../models/Post');


router.post('/', async (req, res) => {
    const userPost = new UsersPost({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone 
    })

    try{
        const userResult = await userPost.save();
        res.json(userResult);
    }catch (err) {
        res.json({message: err});
        console.log(err);
    }
});

// update a user
router.patch('/:id', async(req, res) => {
    try{
        const updatesUser = await UsersPost.updateOne({_id: req.params.id}, {$set: {name: req.body.name}});
        res.json(updatesUser);
    }
    catch(err){
        console.log(err);
        res.json({message: err});
    }
})







module.exports = router;