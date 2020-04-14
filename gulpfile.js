'use strict';

var gulp = require("gulp")
var sass = require("gulp-sass")
var watch = require("gulp-watch")
sass.compiler = require('node-sass')

gulp.task('sass', () =>{
    return watch('./sass/**/*.scss', () => {
        gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css'))
    })
})


