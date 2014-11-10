var testFunc = require('../bundles/unit-tests.js'),
	mike = new testFunc;

	// our "unit" test
	describe('the test function', function () {
			it('returns a boolean', function () {
				expect(mike.aFunc(0)).toEqual(true);
			});
	});
