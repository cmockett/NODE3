var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res){
 	res.sendFile('node3.html', {root : './public'})
 	})


	// function(req, res, next) {
 //  res.render('index', { title: 'Express' });




module.exports = router;
