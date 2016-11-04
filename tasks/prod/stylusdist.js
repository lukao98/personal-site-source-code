var gulp = require('gulp'),
	stylus = require('gulp-stylus'),
	plumber = require('gulp-plumber'),
	browserSync = require('browser-sync'),
	jeet = require('jeet'),
	rupture = require('rupture'),
	koutoSwiss  = require('kouto-swiss'),
	prefixer    = require('autoprefixer-stylus');

gulp.task('stylusdist', ['cleandist'], function() {
	gulp
 		.src('./src/styl/main.styl')
    	.pipe(plumber())
    	.pipe(stylus({
      		use: [koutoSwiss(), prefixer(), jeet(), rupture()],
      		compress: true
    	}))
    	.pipe(gulp.dest('./dist/assets/css/'))
    	.pipe(browserSync.reload({stream:true}));
});