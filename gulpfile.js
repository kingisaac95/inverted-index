const gulp = require('gulp');
const connect = require('gulp-connect');
const open = require('gulp-open');

const htmlSource = './index.html';
const cssSource = './app/css/*.css';
const jsSource = './app/controllers/controller.js';

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

gulp.task('watch', () => {
  gulp.watch(htmlSource, ['html']);
  gulp.watch(cssSource, ['css']);
  gulp.watch(jsSource, ['js']);
});

gulp.task('default', ['html', 'css', 'js', 'open', 'connect', 'watch']);