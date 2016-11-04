var gulp = require('gulp'),
	tasks = ['jsdist', 'pugdist', 'cleandist', 'stylusdist', 'imagensdist'];

gulp.task('build', tasks);

gulp.task('default', function(){
	gulp.run('build');
})