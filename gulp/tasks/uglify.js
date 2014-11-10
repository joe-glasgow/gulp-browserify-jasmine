var gulp = require('gulp'),
	uglify = require('gulp-uglify');

gulp.task('compress', function () {
	gulp.src('./gulp/scripts/bundle.js')
	.pipe(uglify())
	.pipe(gulp.dest('./gulp/scripts/'));
});
