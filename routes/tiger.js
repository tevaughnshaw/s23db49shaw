var express = require('express');
const tiger_controlers= require('../controllers/tiger');
var router = express.Router();

/* GET home page. */
router.get('/', tiger_controlers.tiger_view_all_Page );


/* GET detail tiger page */
//console.log("controler is: " + tiger_controlers);
//console.log("function is: " + tiger_controlers.tiger_view_one_Page);
router.get('/detail', tiger_controlers.tiger_view_one_Page);
/* GET create tiger page */
router.get('/create', tiger_controlers.tiger_create_Page);
/* GET create update page */
router.get('/update', tiger_controlers.tiger_update_Page);
/* GET delete tiger page */
router.get('/delete', tiger_controlers.tiger_delete_Page);

module.exports = router;
