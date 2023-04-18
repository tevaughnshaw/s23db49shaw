var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var tiger_controller = require('../controllers/tiger');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// TIGER ROUTES ///
// POST request for creating a Tiger.
router.post('/tiger', tiger_controller.tiger_create_post);
// DELETE request to delete Tiger.
router.delete('/tiger/:id', tiger_controller.tiger_delete);
// PUT request to update Tiger.
router.put('/tiger/:id', tiger_controller.tiger_update_put);
// GET request for one Tiger.
router.get('/tiger/:id', tiger_controller.tiger_detail);
// GET request for list of all Tiger items.
router.get('/tiger', tiger_controller.tiger_list);
module.exports = router;