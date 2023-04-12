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
exports.tiger_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Tiger();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.tail = req.body.tail;
    document.color = req.body.color;
    document.weight = req.body.weight;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// Handle Costume delete form on DELETE.
exports.tiger_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Tiger delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.tiger_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Tiger update PUT' + req.params.id);
};
// VIEWS
// Handle a show all view
exports.tiger_view_all_Page = async function(req, res) {
    try{
    theTigers = await Tiger.find();
    res.render('tiger', { title: 'Tiger Search Results', results: theTigers });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };