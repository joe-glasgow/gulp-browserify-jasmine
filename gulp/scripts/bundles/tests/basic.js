var plainObj = (function () {
	var Module = {
			init : function (options) {
				this.options = options || {}
			},
			doSomething : function (string) {
				this.objString = string;
			} /* @exclude  */,

			//functional testing
			aFunc : aMethod
			// end functional testing
			// @endexclude
	};

	//simulating privacy by not attaching these to module
	function aMethod (boolean) {
		if (boolean === 0) {
			return false;
		}

		return true;
	}
	return Module;
});

module.exports = plainObj;
