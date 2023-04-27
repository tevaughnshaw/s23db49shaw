var express = require('express');
const tiger_controlers= require('../controllers/tiger');
var router = express.Router();

// A little function to check if we have an authorized user and continue on or
// redirect to login.
const secured = (req, res, next) => {
 if (req.user){
 return next();
 }
 req.session.returnTo = req.originalUrl;
 res.redirect("/login");
 }

/* GET home page. */
router.get('/', tiger_controlers.tiger_view_all_Page );


/* GET detail tiger page */
//console.log("controler is: " + tiger_controlers);
//console.log("function is: " + tiger_controlers.tiger_view_one_Page);
router.get('/detail', tiger_controlers.tiger_view_one_Page);
/* GET create tiger page */
router.get('/create', tiger_controlers.tiger_create_Page);
/* GET create update page */
router.get('/update',secured, tiger_controlers.tiger_update_Page);
/* GET delete tiger page */
router.get('/delete', tiger_controlers.tiger_delete_Page);

module.exports = router;
