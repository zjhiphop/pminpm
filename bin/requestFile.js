const fs = require("fs"),
      http = require("http"),
	  util=require('util');
function getFile(options,cb) {
	var result='';
    http.get(options, function(res) {
	  //console.log("Got response: " + util.inspect(res));
	  res.on('end',function(){
	    cb(result);
		//cb(result);
	  })
	  res.on('data',function(trunk){
	   result+=trunk;
	  });
	}).on('error', function(e) {
	  //console.log("Got error: " + e.message);
	});
}
module.exports = {
    get : getFile
};