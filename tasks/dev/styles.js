var gulp = require('gulp'),
	stylus = require('gulp-stylus'),
	plumber = require('gulp-plumber'),
	browserSync = require('browser-sync');

 gulp.task('styles', function(){
    gulp
    	.src('./src/styles/main.styl')
    	.pipe(plumber())
    	.pipe(stylus())
    	.pipe(gulp.dest('./app/assets/css'))
    	.pipe(browserSync.reload({stream:true}));
 });