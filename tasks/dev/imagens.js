var gulp = require('gulp');

gulp.task('images', ['clean'], function() {
  gulp.src('./src/img/**/*.{jpg,png,gif}')
  .pipe(gulp.dest('./app/assets/img'));
});