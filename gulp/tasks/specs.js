//@exclude
var gulp = require('gulp'),
	jasmine = require('gulp-jasmine');

gulp.task('specs', function () {
	gulp.src('./gulp/scripts/specs/*.js')
	.pipe(jasmine({
		includeStackTrace : true
	}));
});
//@endexclude
