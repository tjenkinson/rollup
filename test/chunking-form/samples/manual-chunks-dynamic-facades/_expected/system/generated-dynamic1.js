System.register(['./generated-dynamic2.js', './generated-dynamic3.js'], function (exports) {
	'use strict';
	return {
		setters: [function (module) {
			exports('DYNAMIC_2', module.DYNAMIC_2);
		}, function (module) {
			exports('DYNAMIC_3', module.DYNAMIC_3);
		}],
		execute: function () {

			const DEP = exports('DEP', 'DEP');

			const DYNAMIC_1 = exports('DYNAMIC_1', 'DYNAMIC_1');

		}
	};
});
