/* push commander component
 * To use add require('../cmds/push.js')(program) to your commander.js based node executable before program.parse
 */
'use strict';

module.exports = function(program) {

	program
		.command('push')
		.version('0.0.0')
		.description('A commander command')
		.action(function (/* Args here */) {
			// Your code goes here
		});

};
