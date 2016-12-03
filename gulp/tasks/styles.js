var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    cssImport = require('postcss-import'),
    mixins = require('postcss-mixins');

gulp.task('styles', function(){
    //we chain the pipe method because we want to move the content of src into a pipe
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
        .on('error', function(errorInfo) {
            console.log(errorInfo.toString());
            this.emit('end'); //tell gulp that the task ended, and it won't see an error.
        })
        .pipe(gulp.dest('./app/temp/styles'));
    //we include return here because gulp.src is an async func, 
    //we want to make sure that gulp is aware when the function completes.    
});