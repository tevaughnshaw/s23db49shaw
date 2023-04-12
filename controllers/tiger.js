var Tiger = require('../models/tiger');
// List of all Costumes
exports.tiger_list = async function(req, res) {
    try{
    theTigers = await Tiger.find();
    res.send(theTigers);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// for a specific Costume.
exports.tiger_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Tiger detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.tiger_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Tiger create POST');
};
// Handle Costume delete form on DELETE.
exports.tiger_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Tiger delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.tiger_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Tiger update PUT' + req.params.id);
};