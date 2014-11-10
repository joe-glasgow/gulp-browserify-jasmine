var gulp = require('gulp'),
	preprocess = require('gulp-preprocess');

gulp.task('preprocess', function () {
	gulp.src('./gulp/scripts/bundles/tests/*.js')
	.pipe(preprocess())
	.pipe(gulp.dest('./gulp/scripts/bundles/'));
});
