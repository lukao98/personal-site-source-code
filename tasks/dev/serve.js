var taskList = ['clean','js', 'styles', 'images', 'template-watch'],
	gulp = require('gulp'),
	browserSync = require('browser-sync');

 gulp.task('serve',taskList, function(){
 	 browserSync({server: './app'});

 	 	gulp.watch('./src/styles/**/*.styl', ['styles']);
 	 	gulp.watch('./src/views/**/*.pug', ['templates']);
 	 	gulp.watch('./src/js/**/*.js', ['js']);
 	 	gulp.watch('./src/img/**/*.{jpg,png,gif}', ['imagens']);
 });