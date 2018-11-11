var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify-es').default;
/*var concat = require('gulp-concat');*/
var imageMin = require('gulp-imagemin');
var changed = require('gulp-changed');
var htmlreplace = require('gulp-html-replace');
var htmlMin = require('gulp-htmlmin');
var del = require('del');
var runSequence = require('run-sequence');
var pump = require('pump');

gulp.task('reload', function () {
    browserSync.reload();
})

gulp.task('serve', ['sass'], function () {
    browserSync({
        server: 'src'
    })

    gulp.watch('src/*html', ['reload']);
    gulp.watch('src/scss/**/*.scss', ['sass']);
})

gulp.task('sass', function () {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 4 versions']
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.stream());
})

gulp.task('minify-css', function () {
    return gulp.src('src/css/**/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/css'))
})

gulp.task('minify-js', function (cb) {
    pump([
         gulp.src('src/js/**/*.js'),
         uglify(),
         gulp.dest('dist/js')
        ],
        cb
         );
})

gulp.task('fonts', function () {
    return gulp.src('src/font/*')
        .pipe(gulp.dest('dist/font'))
})

gulp.task('minify-img', function () {
    return gulp.src('src/img/**/*.{jpg,jpeg,png}')
        .pipe(changed('dist/img'))
        .pipe(imageMin())
        .pipe(gulp.dest('dist/img'))
})

gulp.task('minify-html', function () {
    return gulp.src('src/*.html')
             .pipe(htmlMin({
            sortAttributes: true,
            sortClassName: true,
            collapseWhitespace: true,
        }))
        .pipe(gulp.dest('dist'))
})

gulp.task('clean', function () {
    return del(['dist'])
})

gulp.task('build', function () {
    runSequence('clean', ['minify-html', 'minify-css', 'minify-js', 'minify-img'])
})

gulp.task('default', ['serve']);
