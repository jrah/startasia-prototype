var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
// sass
var sass        = require('gulp-sass');
// js
var pump = require('pump');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./",
        open: false
    });

    gulp.watch("src/**/*.scss", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
     gulp.src("src/scss/*.scss")
         .pipe(sass({
           includePaths: [
            './bower_components/mathsass/dist/',
            './bower_components/madsauce/',
            './bower_components/'
         ]
       }))
       .pipe(sourcemaps.init())
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream());
});

gulp.task('copy-build', () => gulp
  .src('*.html')
  .pipe(gulp.dest('dist')));

gulp.task('sass-build', function() {
     gulp.src("src/scss/*.scss")
         .pipe(sass({
           includePaths: [
            './bower_components/mathsass/dist/',
            './bower_components/madsauce/',
            './bower_components/'
         ]
       }))
        .pipe(gulp.dest("dist/css"))
});

gulp.task('js-build', function () {
  // pump helps locate errors better than `pipe`
  pump([
    gulp.src('js/*.js'),
    uglify(),
    concat('app.js'),
    gulp.dest('dist/js')
  ])
});

gulp.task('default', ['serve']);
gulp.task('build', ['js-build', 'copy-build', 'sass-build']);
