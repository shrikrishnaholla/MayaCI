var express = require('express');
var router = express.Router();
var util = require('util');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* Web hook handler */
router.post('/webhook', function(req, res) {
  var event_type = req.headers["x-gitHub-event"]
  var delivery_guid = req.headers["x-gitHub-delivery"]
  var signature = req.headers["x-hub-signature"]
  var body = req.body;
  console.log('Event type: ' + event_type);
  console.log('Delivery Guid: ' + delivery_guid);
  console.log('Signature: ' + signature);
  console.log('body: ' + util.inspect(body));
  res.send('OK');
});

module.exports = router;
/*sample  comment  */
