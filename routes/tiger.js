var express = require('express');
const tiger_controlers= require('../controllers/tiger');
var router = express.Router();

/* GET home page. */
router.get('/', tiger_controlers.tiger_view_all_Page );

module.exports = router;
