var gulp = require('gulp');
var ts = require('gulp-typescript');
var runSequence = require('run-sequence');
var electron = require('electron-connect').server.create();

var typeScriptFiles = 'src/app/**/*.ts';

gulp.task('typescript', function() {
    return gulp.src(typeScriptFiles)
        .pipe(ts({
            noImplicitAny: true,
            out: 'src/app/output.js'
        }))
        .pipe(gulp.dest(''));
});

gulp.task('electron-reload', function() {
    electron.reload();
});

gulp.task('develop', function() {
    // Start browser process
    electron.start();
    // Restart browser process
    gulp.watch('main.js', electron.restart);
    // Reload renderer process
    gulp.watch(['src/**/*'], function() {
        runSequence('typescript', 'electron-reload');
    });
})
