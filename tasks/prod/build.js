var gulp = require('gulp'),
	tasks = ['jsdist', 'pugdist', 'cleandist', 'stylusdist', 'imagesdist'];

gulp.task('build', tasks);

gulp.task('default', function(){
	gulp.run('build');
})