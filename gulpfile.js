const gulp = require('gulp');
const connect = require('gulp-connect');
const open = require('gulp-open');
const browserify = require('gulp-browserify');

const htmlSource = './index.html';
const cssSource = './app/css/*.css';
const jsSource = './app/controllers/controller.js';
const classSource = './app/class/invertedIndexClass.js';

gulp.task('connect', () => {
  connect.server({
    root: ['./'],
    port: 1337,
    livereload: true,
  });
});

gulp.task('open', () => {
  gulp.src(__filename)
  .pipe(open({ uri: 'http://localhost:1337' }));
});

gulp.task('html', () => {
  gulp.src(htmlSource)
  .pipe(connect.reload());
});

gulp.task('css', () => {
  gulp.src(cssSource)
  .pipe(connect.reload());
});

gulp.task('js', () => {
  gulp.src(jsSource)
  .pipe(connect.reload());
});

gulp.task('scripts', () => {
  // Single entry point to browserify
  gulp.src(classSource)
    .pipe(browserify({
      insertGlobals: true,
      debug: !gulp.env.production
    }))
    .pipe(gulp.dest('./build/js'));
});

gulp.task('watch', () => {
  gulp.watch(htmlSource, ['html']);
  gulp.watch(cssSource, ['css']);
  gulp.watch(jsSource, ['js']);
});

gulp.task('default', ['scripts', 'html', 'css', 'js', 'open', 'connect', 'watch']);
