const style = require('ansi-styles');

var logFunction = console.log,
	logColor = 'green',
	warnColor = 'yellow',
	errorColor = 'red';

module.exports = {
	
	log: function(object) {
		logFunction(style[logColor].open + object + style[logColor].close);
		return true;
	},

	warn: function(object) {
		logFunction(style[warnColor].open + object + style[warnColor].close);
		return true;
	},

	error: function(object) {
		logFunction(style[errorColor].open + object + style[errorColor].close);
		return true;
	},

	configurate: function(logOutFunction, logColorName, warnColorName, errorColorName) {
		if(logOutFunction) logFunction = logOutFunction;
		logColor = logColorName;
		warnColor = warnColorName;
		errorColor = errorColorName;
	}
};
