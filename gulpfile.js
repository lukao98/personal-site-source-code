var stylus = require('gulp-stylus'),
    pug = require('gulp-pug'),
    gulp = require('gulp');
    

    gulp.task('stylus', function()){
    		return gulp.src('./src/styles/main.styl')
    		.pipe(stylus())
    		.pipe(gulp.dest(app/assets/css))
    });

     gulp.task('pug', function()){
    		return gulp.src('./src/views/index.pug')
    		.pipe(pug())
    });

    gulp.task('build', function()){
    	gulp.run('stylus');
    	gulp.run('pug');
    });

