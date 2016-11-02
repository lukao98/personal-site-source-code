var gulp = require('gulp'),
	browserSync = require('browser-sync'),
    reload = browserSync.reload;

gulp.task('template-watch', ['templates'], reload);