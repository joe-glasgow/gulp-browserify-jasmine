var browserify = require('browserify'),
	gulp = require('gulp'),
	source = require('vinyl-source-stream');

gulp.task('browserify', function () {

	return browserify('./gulp/scripts/bundles/app.js')
		  .bundle()
		  .pipe(source('bundle.js'))
		  .pipe(gulp.dest('./gulp/scripts/'));
});
