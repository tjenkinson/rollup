define(['require', './generated-dynamic1', './generated-dynamic2', './generated-dynamic3'], function (require, dynamic, dynamic$1, dynamic$1$1) { 'use strict';

	Promise.all([new Promise(function (resolve, reject) { require(['./generated-dynamic1'], resolve, reject) }), new Promise(function (resolve, reject) { require(['./generated-dynamic2'], resolve, reject) }), new Promise(function (resolve, reject) { require(['./generated-dynamic3'], resolve, reject) })]).then(
		results => console.log(results, dynamic.DEP)
	);

});
