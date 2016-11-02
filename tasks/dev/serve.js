var taskList = ['clean', 'templates', 'styles'],
	gulp = require('gulp'),
	browserSync = require('browser-sync');

 gulp.task('serve',taskList, function(){
 	 browserSync({server: './app'});

 	 	gulp.watch('./src/styl/**/*.styl', ['styles']);
 	 	gulp.watch('./src/views/**/*.pug', ['templates']);
 });