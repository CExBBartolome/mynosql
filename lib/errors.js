"use strict";

var bunyan = require('bunyan');
var logger = bunyan.createLogger({name: 'mynosql'});

var errors = function(){
	var self = {
		log:log,
		NOCONNECTION:"Not connected to a MySQL server"	
	};

	return self;
};

module.exports = errors();

function log(error){
	logger.error(error);
	return error;
}
