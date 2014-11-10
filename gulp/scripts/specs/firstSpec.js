var testFunc = require('../bundles/tests/basic.js'),
	mike = new testFunc;

	// our "unit" test
	describe('the test function', function () {
			it('returns a boolean', function () {
				expect(mike.aFunc(1)).toEqual(true);
			});
	});
