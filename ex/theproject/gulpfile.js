
'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

// Optimize Images
gulp.task('images', function () {
    return gulp.src('assets/images/*')
        // .pipe($.cache($.imagemin({
        //   progressive: true,
        //   interlaced: true
        // })))
        .pipe(gulp.dest('dist/images'))
        .pipe($.size({title: 'images'}));
});

// Copy Web Fonts To Dist
gulp.task('fonts', function () {
    return gulp.src(['assets/fonts/*'])
        .pipe(gulp.dest('dist/fonts'))
        .pipe($.size({title: 'fonts'}));
});

gulp.task('js', function () {
    return gulp.src('assets/js/*.js')
        // .pipe($.jshint())
        // .pipe($.jshint.reporter('default'))
        .pipe($.uglify())
        .pipe($.concat('app.min.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe($.size({title: 'js'}));
});

gulp.task('css', function () {
    return gulp.src('assets/css/*.css')
        .pipe($.minifyCss({keepBreaks:true}))
        .pipe($.concat('app.min.css'))
        .pipe(gulp.dest('dist/css'))
        .pipe($.size({title: 'css'}));
});

// Build Production Files, the Default Task
gulp.task('minify', ['js', 'styles', 'images', 'fonts']);
