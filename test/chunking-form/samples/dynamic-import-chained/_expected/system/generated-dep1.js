System.register([], function () {
	'use strict';
	return {
		execute: function () {

			console.log('dep2');

			var dep2 = /*#__PURE__*/Object.freeze({
				__proto__: null
			});

			console.log('dep1');
			Promise.resolve().then(function () { return dep2; });

		}
	};
});
