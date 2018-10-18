var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

function handleError (error) {
  console.log(error.toString())
  this.emit('end')
}
 
gulp.task('sass', function() {
  return gulp.src('scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'expanded'
    }))
    .on('error', handleError)
    .pipe(autoprefixer({
        browsers: ['last 5 versions'], 
    }))
    .pipe(sourcemaps.write('.maps'))
    .pipe(gulp.dest('css'))
})

gulp.task('watch', ['sass'], function(){
  	gulp.watch('scss/**/*.scss', ['sass']);
})