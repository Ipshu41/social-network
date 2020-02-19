const express =require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator/check');

//route -> post api/users
//desc -> register
//access -> Public

router.post('/', 
[
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Enter a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more character').isLength({min: 6})
   
    ],

(req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    console.log(req.body);
    res.send('User route')
});


module.exports = router;