var express = require('express');
var router = express.Router(); 
var nj = require('numjs'); /* GET home page. */

router.get('/', function(req, res) { 
    var matrix = JSON.parse(nj.zeros([1024]).toJSON() )
    res.render('index', { mat: matrix });
}); 

module.exports = router;