const gulp = require('gulp');
const gUtil = require('gulp-util');
const source = require('vinyl-source-stream');
const browserify = require('browserify');
const watchify = require('watchify');
const browserSync = require('browser-sync').create();

function bundle(bundler) {
  return bundler
    .bundle()
    .on('error', (e) => {
      gUtil.log(e);
    })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./app/build/js'))
    .pipe(browserSync.stream());
}

gulp.task('watch', () => {
  const watcher = watchify(browserify('./app/controllers/controller.js',
  watchify.args));
  bundle(watcher);
  watcher.on('update', () => {
    bundle(watcher);
  });
  watcher.on('log', gUtil.log);

  browserSync.init({
    server: './',
    files: './*.html',
    logFileChanges: false
  });
});

gulp.task('js', () => (
  bundle(browserify('./app/**/*.js'))
));
