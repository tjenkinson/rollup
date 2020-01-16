define(['exports', './generated-dynamic2'], function (exports, dynamic) { 'use strict';

	console.log('dynamic1');

	exports.DYNAMIC_A = dynamic.DYNAMIC_B;
	exports.DYNAMIC_B = dynamic.DYNAMIC_A;

});
