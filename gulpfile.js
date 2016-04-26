/**
 * Created by Snezhana on 25/04/16.
 */

// include gulp
var gulp = require('gulp');

//// include plug-ins
var changed = require('gulp-changed');
var minifyHTML = require('gulp-minify-html');

// minify new or changed HTML pages
gulp.task('minify-html', function() {
    var opts = {empty:true, quotes:true};
    var htmlPath = {htmlSrc:'./app/views/*.html', htmlDest:'./appbuild/views'};

    return gulp.src(htmlPath.htmlSrc)
        .pipe(changed(htmlPath.htmlDest))
        .pipe(minifyHTML(opts))
        .pipe(gulp.dest(htmlPath.htmlDest));
});


// include plug-ins
var concat = require('gulp-concat');
var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');

// CSS concat, auto prefix, minify, then rename output file
gulp.task('minify-css', function() {
    var cssPath = {cssSrc:['./scripts/css/*.css', '!*.min.css', '!/**/*.min.css'], cssDest:'./contentbuild/css/'};

    return gulp.src(cssPath.cssSrc)
        .pipe(concat('styles.css'))
        .pipe(autoprefix('last 2 versions'))
        .pipe(minifyCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(cssPath.cssDest));
});


// include plug-ins
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');

// JS concat, strip debugging code and minify
gulp.task('bundle-scripts', function() {
    var jsPath = {jsSrc:['./app/app.js','./app/**/*.js'], jsDest:'./appbuild'};
    gulp.src(jsPath.jsSrc)
        .pipe(concat('ngscripts.js'))
        .pipe(stripDebug())
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(jsPath.jsDest));
});

var Server = require('karma').Server;

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', function (done) {
    new Server({
        configFile: __dirname + '/karma.conf.js'
    }, done).start();
});

gulp.task('default', ['tdd']);