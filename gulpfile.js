var gulp = require('gulp'),
    compass = require('gulp-compass'),
    concat = require("gulp-concat"),
    uglify = require("gulp-uglify"),
    cssmin = require("gulp-cssmin");


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
}

gulp.task("scripts", function () {
    return gulp.src(config.paths.javascript.src)
        .pipe(uglify())
        .pipe(concat("script.min.js"))
        .pipe(gulp.dest(config.paths.javascript.dest));
});

gulp.task("css", function () {
    return gulp.src(config.paths.css.src)
        .pipe(cssmin())
        .pipe(concat("style.min.css"))
        .pipe(gulp.dest(config.paths.css.dest));
});

gulp.task("min", ["scripts", "css"]);