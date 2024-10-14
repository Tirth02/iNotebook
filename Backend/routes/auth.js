const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const User = require("../models/User");
router.post('/',[
    body('name', 'Length of the name should be atleast 3 words').isLength({min:3}),
    body('email','Enter a valid email').isEmail(),
    body('password','Length of password must be more than 4 character').isLength({min : 5}),
],(req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty())
    {
        return res.status(400).json({ errors: errors.array()});
    }
    User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
    }).then(user => res.json(user))
    .catch(err => {console.log(err) 
    res.json({error: 'User already registered with this email',message: err.message})});
})

module.exports = router