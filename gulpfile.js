'use strict';

var gulp = require("gulp")
var sass = require("gulp-sass")
var watch = require("gulp-watch")
var concat = require("gulp-concat")
var uglify = require("gulp-uglify")
sass.compiler = require('node-sass')

gulp.task('sass', () =>{
    return watch('./sass/**/*.scss', () => {
        gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css'))
    })
})

gulp.task('jsscript', () => {
    return gulp.src('./js/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/javascript'))
})
