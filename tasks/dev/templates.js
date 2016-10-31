var pug = require('gulp-pug'),
	plumber = require('gulp-plumber'),
	gulp = require('gulp');

gulp.task('templates', function(){
    gulp	
    	.src('./src/views/index.pug')
    	.pipe(plumber())
        .pipe(pug({ pretty : true }))
    	.pipe(pug())
    	.pipe(gulp.dest('./app/'));
});