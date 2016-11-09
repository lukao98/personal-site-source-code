var gulp = require('gulp'),
	stylus = require('gulp-stylus'),
	plumber = require('gulp-plumber'),
	browserSync = require('browser-sync'),
	jeet = require('jeet'),
	rupture = require('rupture'),
	koutoSwiss = require('kouto-swiss'),
	prefixer = require('autoprefixer-stylus');

 gulp.task('styles', function(){
    gulp
    	.src('./src/styles/main.styl')
    	.pipe(plumber())
    	.pipe(stylus( {use: [rupture(), koutoSwiss(), jeet(), prefixer()], compress: true}))
    	.pipe(gulp.dest('./app/assets/css'))
    	.pipe(browserSync.reload({stream:true}));
 });