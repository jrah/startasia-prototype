var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

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
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
