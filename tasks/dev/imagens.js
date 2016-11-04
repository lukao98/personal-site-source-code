var gulp = require('gulp');

gulp.task('imagens', ['clean'], function() {
  gulp.src('./src/img/**/*.{jpg,png,gif}')
  .pipe(gulp.dest('./app/assets/img'));
});