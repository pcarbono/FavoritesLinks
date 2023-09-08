// authentication.js
const express = require('express');
const router = express.Router();
const passport = require('passport');

// Definir rutas aquí

router.get('/signup', (req,res)=>{
    res.render('auth/signup');
});

// router.post('/signup',(req,res)=>{
// passport.authenticate('local.signup',{
// successRedirect:'/profile',
// failureRedirect: '/signup',
// failureFlash: true
// });

// res.send('received')
// });

router.post('/signup', passport.authenticate('local.signup',{
     successRedirect:'/profile',
     failureRedirect: '/signup',
     failureFlash: true
}));

router.get('/profile', (req, res) => {
    res.send('this is your Profile')
});

module.exports = router;
