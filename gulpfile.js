var gulp = require('gulp'),
    compass = require('gulp-compass'),
    concat = require("gulp-concat"),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require("gulp-uglify"),
    cssmin = require("gulp-cssmin"),
    htmlreplace = require("gulp-html-replace");


/**
 * ---------------------------------
 * TASKS FOR DEVELOPMENT ENVIRONMENT
 * ---------------------------------
 */
gulp.task('compile_styles', function () {
    gulp.
    src('scss/style.scss').
    pipe(compass({
        config_file: 'config.rb',
        css: 'website/css',
        sass: 'scss',
        sourcemap: true,
        style: 'expanded',
        comments: 'normal',
        relative: true
    })).
    pipe(gulp.dest('website/css'));
});

//Runs all above Development Environment
gulp.task('watch', function () {
    gulp.watch(['./scss/*'], ['compile_styles']);
});



/**
 * --------------------------------
 * TASKS FOR PRODUCTION ENVIRONMENT
 * --------------------------------
 */

var config = {
    paths: {
        javascript: {
            src: ["website/js/script.js"],
            dest: "website/js"
        },
        css: {
            src: ["website/css/**/*.css"],
            dest: "website/css"
        }
    }
};

// This task minifies user script.js
gulp.task("scripts", function () {
    return gulp.src(config.paths.javascript.src)
        .pipe(uglify())
        .pipe(concat("script.min.js"))
        .pipe(gulp.dest(config.paths.javascript.dest));
});

// This task minify all CSS files
gulp.task("css", function () {
    return gulp.src(config.paths.css.src)
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(cssmin())
        .pipe(concat("style.min.css"))
        .pipe(gulp.dest(config.paths.css.dest));
});

// This task updates all HTML pages with the minified JS/CSS
gulp.task('replace', function () {
    return gulp.src('website/*')
        .pipe(htmlreplace({
            css: 'css/style.min.css',
            js: 'js/script.min.js'
        }))
        .pipe(gulp.dest('website/'));
});

// Runs all above Production Environment
gulp.task("min", ["scripts", "css", "replace"]);
