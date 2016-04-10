var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var reactify = require('reactify');
var watchify = require('watchify');

/********************************************************
* DEFINE PATHS                                          *
********************************************************/
var path = {
    SASS_FILES: ['./sass/**/*.scss'],
    SASS_IMPORT: './sass/import.scss',
    CSS: 'style.css',
    CSS_MIN: 'style.min.css',
    CSS_OUT: './public/stylesheets/',
    JS_OUT: './public/javascripts',
    JS: 'script.js',
    JS_MIN: 'script.min.js',
    JS_IMPORT: './client_javascripts/import.js',
    TWIG_FILES: ['./views/**/*.twig'],
    PUBLIC_FILES: ['./public/**/*.js']
};

/********************************************************
* SASS                                                  *
********************************************************/
gulp.task('sass', function() {
    return gulp.src(path.SASS_IMPORT)
        .pipe(sass().on('error', sass.logError))
        .pipe(rename(path.CSS))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(path.CSS_OUT))
        .pipe(rename(path.CSS_MIN))
        .pipe(minifyCss())
        .pipe(gulp.dest(path.CSS_OUT))
        .pipe(browserSync.stream());
});

/********************************************************
* SETUP BROWSER SYNC                                    *
********************************************************/
gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: 'rememberwhen.local'
    });
});

/********************************************************
* WATCH TASKS                                           *
********************************************************/
gulp.task('watch', function() {
    gulp.watch(path.SASS_FILES, ['sass']);
    gulp.watch(path.TWIG_FILES, browserSync.reload);
    gulp.watch(path.PUBLIC_FILES, browserSync.reload);

    var watcher  = watchify(browserify({
        entries: [path.JS_IMPORT],
        transform: [reactify],
        debug: true,
        cache: {}, packageCache: {}, fullPaths: true
    }));

    return watcher.on('update', function() {
        watcher.bundle()
            .pipe(source(path.JS))
            .pipe(gulp.dest(path.JS_OUT))
            .pipe(buffer()) // convert from streaming to buffered vinyl file object
            .pipe(rename(path.JS_MIN)) // Rename the minified version
            .pipe(uglify()) // Minify the file
            .pipe(gulp.dest(path.JS_OUT)); // Output the minified file;
        console.log('Updated');
    })
        .bundle()
        .pipe(source(path.JS))
        .pipe(gulp.dest(path.JS_OUT))
        .pipe(buffer()) // convert from streaming to buffered vinyl file object
        .pipe(rename(path.JS_MIN)) // Rename the minified version
        .pipe(uglify()) // Minify the file
        .pipe(gulp.dest(path.JS_OUT)); // Output the minified file;
});

/********************************************************
* DEFAULT TASKS                                         *
********************************************************/
gulp.task('default',['watch', 'browser-sync']);
