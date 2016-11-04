var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    pug = require('gulp-pug');

gulp.task('pugdist', ['cleandist'], function() {
  gulp
    .src('./src/views/*.pug')
    .pipe(plumber())
    .pipe(pug())
    .pipe(gulp.dest('./dist/'));
});