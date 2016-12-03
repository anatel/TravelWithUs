var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();

gulp.task('watch', function(){
    browserSync.init({
        notify: false,
        //tell browserSync where our website lives
        //because browserSync actually spins up a little
        //web server on our computer, and it needs to know where that
        //should point.
        server: {
            baseDir: "app"
        }
    });
    //arg#1: the file on our pc that we want to watch for saved changes to.
    //arg#2: what we want it to do
    watch('./app/index.html', function() {
        browserSync.reload();
    });
    
    watch('./app/assets/styles/**/*.css', function(){
        gulp.start('cssInject');
    });
});

gulp.task('cssInject', ['styles'], function() {
    return gulp.src('./app/temp/styles/styles.css')
        .pipe(browserSync.stream());
});