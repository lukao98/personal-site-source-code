var stylus = require('gulp-stylus'),
    pug = require('gulp-pug'),
    gulp = require('gulp'),
    clean = require('gulp-clean'),
    plumber = require('gulp-plumber');
    

    gulp.task('clean', function(){
    	return gulp.src('./app/', { read : false })
    	.pipe(clean({ force : true }));

    });
    
    gulp.task('stylus', ['clean'], function(){
    	gulp
    		.src('./src/styles/main.styl')
    		.pipe(plumber())
    		.pipe(stylus())
    		.pipe(gulp.dest('app/assets/css'))
    });

     gulp.task('pug', ['clean'], function(){
    	gulp	
    		.src('./src/views/index.pug')
    		.pipe(plumber())
            .pipe(pug({ pretty : true }))
    		.pipe(pug())
    		.pipe(gulp.dest('./app/'));
    });

    gulp.task('build', function(){	
    	gulp.watch('stylus');
    	gulp.watch('pug');
    });

