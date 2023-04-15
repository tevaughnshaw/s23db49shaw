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
exports.tiger_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Tiger.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
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
exports.tiger_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await Tiger.findById( req.params.id)
 // Do updates of properties
 if(req.body.tail)
 toUpdate.tail = req.body.tail;
 if(req.body.color) toUpdate.color = req.body.color;
 if(req.body.weight) toUpdate.weight = req.body.weight;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
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