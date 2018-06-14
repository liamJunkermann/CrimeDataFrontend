var express = require('express');
var router = express.Router();

/* GET support listening */
router.get('/', function(req, res, next) {
	res.send('Test');
	//res.render('support');
});

module.exports = router;
