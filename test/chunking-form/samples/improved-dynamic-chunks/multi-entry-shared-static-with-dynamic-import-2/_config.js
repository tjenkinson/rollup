// why `import './generated-dep.js';`?

module.exports = {
	// solo: true, // TODO the result from this one doesn't seem right
	description:
		'avoids chunks for always loaded dependencies if multiple entry points with different dependencies have dynamic imports',
	options: {
		input: ['main1', 'main2', 'main3']
	}
};
