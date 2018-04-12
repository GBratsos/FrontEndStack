# My Front-end developer stack

[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

Front-end developer stack with Sass.

This stack contains my workflow Gulp tasks.


# Gulp Taks

* [Bower](https://www.npmjs.com/package/bower)
* [Gulp-sass](https://www.npmjs.com/package/gulp-sass)
* [Gulp-concat](https://www.npmjs.com/package/gulp-concat)
* [Gulp-uglify](https://www.npmjs.com/package/gulp-uglify)
* [Gulp-Autoprefixer](https://www.npmjs.com/package/autoprefixer)
* [Gulp-cssmin](https://www.npmjs.com/package/gulp-cssmin)
* [Gulp-imagemin](https://github.com/sindresorhus/gulp-imagemin)
* [Browser-sync](https://www.browsersync.io/docs/gulp/)
* [Gulp-html-replace](https://www.npmjs.com/package/gulp-html-replace)

# Directions

* cd into directory and run `npm install`.
* You can use [Bower](http://bower.io/) package manager to install packages (like Zurb Foundation or Twitter Bootstrap etc.). Type `bower install <package> --save`.
* Go to the Gulpfile.js and add your Sass folders.

After you have configured everything run:
* `npm run watch` to compile your SCSS files.
* `npm run min` to minify and append all your changes to all HTML files.
