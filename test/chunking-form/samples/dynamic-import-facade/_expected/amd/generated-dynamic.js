define(['exports'], function (exports) { 'use strict';

	console.log('dep');

	const dep = 'dep';

	console.log('dynamic', dep);
	const dynamic = 'dynamic';

	console.log('main2', dynamic, dep);

	exports.dynamic = dynamic;

});
