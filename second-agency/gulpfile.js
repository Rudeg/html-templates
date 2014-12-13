var gulp        = require('gulp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var sass        = require('gulp-sass');

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('sass', function () {
    return gulp.src('sass/*.{sass,scss}')
        .pipe(sass({
            errLogToConsole: true,
            sourceComments : 'normal'
        }))
        .pipe(gulp.dest('css'))
        .pipe(reload({stream:true}));
});

gulp.task('default', ['sass', 'browser-sync'], function () {
    gulp.watch("sass/*.{sass,scss}", ['sass', browserSync.reload]);
});