var gulp = require ('gulp'),
    plumber = require ('gulp-plumber'),
    imagemin = require('gulp-imagemin');

gulp.task('imagesdist', ['cleandist'], function() {
  return gulp
    .src('./src/img/**/*.{jpg,png,gif}')
    .pipe(plumber())
    .pipe(imagemin({ optimizationLevel : 3, progressive : true, interlaced : true }))
    .pipe(gulp.dest('./dist/assets/img/'));
});