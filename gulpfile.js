var gulp = require('gulp');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');


gulp.task('html', function(){
  return gulp.src('app/*.html')
    .pipe(gulp.dest('dist'))
});

gulp.task('compressjs', function () {
  gulp.src('app/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('compresscss', function () {
  gulp.src('app/**/*.css')
    .pipe(cssnano())
    .pipe(gulp.dest('dist'));
});


gulp.task('images', function(){
  return gulp.src('app/img/**/*.+(png|jpg|gif|svg)')
  .pipe(cache(imagemin()))
  .pipe(gulp.dest('dist/img'))
});

gulp.task('views', function() {
  return gulp.src('app/views/**/*')
  .pipe(gulp.dest('dist/views'))
})

gulp.task('clean:dist', function() {
  return del.sync('dist');
})

gulp.task('default', function(callback) {
  runSequence('clean:dist', 'html', 'compressjs', 'compresscss', 'images', 'views', callback);
});