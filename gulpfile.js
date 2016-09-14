var gulp        = require('gulp');
var gulp 		= require('gulp');
var uglify 		= require('gulp-uglify');
var concat 		= require('gulp-concat');
var minify_css 	= require('gulp-minify-css');
var sass 		= require('gulp-sass');
var less 		= require('gulp-less');
var watch 		= require('gulp-watch');
var plumber 	= require('gulp-plumber');
var prefix 		= require('gulp-autoprefixer');
var sourcemaps	= require('gulp-sourcemaps');
var notify 		= require('gulp-notify');
var mainBowerFiles = require('main-bower-files');
var browserSync = require('browser-sync').create();

var paths = {
	appStyles: './app/styles/*.scss',
	appScripts: ['./app/js/*.js','./app/js/**/*.js'],
	dest: './build/'
};

// ---------------------------------------------------------------------

gulp.task('vendor-styles', function(){
	var vendorStyles = mainBowerFiles({ filter: new RegExp('.*less$', 'i') });
	return gulp.src(vendorStyles)
    .pipe(less())
	.pipe(plumber())
	.pipe(concat('vendor.css'))
	.pipe(minify_css())
	.pipe(gulp.dest(paths.dest))
});

gulp.task('app-styles', function(){
	return gulp.src(paths.appStyles)
	.pipe(sourcemaps.init())
	.pipe(plumber())
	.pipe(sass())
	.pipe(concat('app-min.css'))
	.pipe(sourcemaps.write())
	.pipe(minify_css())
	.pipe(gulp.dest(paths.dest))
});

gulp.task('vendor-scripts', function () {
	var vendorScripts = mainBowerFiles({ filter: new RegExp('.*js$', 'i') });
	return gulp.src(vendorScripts)
 	.pipe(plumber())
    .pipe(concat('vendor.js'))
	.pipe(gulp.dest(paths.dest))
});

gulp.task('app-scripts', function () {
	return gulp.src(paths.appScripts)
 	.pipe(sourcemaps.init())
	.pipe(plumber())
    .pipe(concat('app-min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.dest))
});

gulp.task('watch', function(){
	gulp.watch('app/styles/*.scss', ['app-styles']);
	gulp.watch(['app/js/*.js','app/js/**/*.js'], ['app-scripts']);
	gulp.watch('app/views/*.html', ['default']);
	gulp.watch('index.html', ['default']);
});

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default', ['vendor-styles', 'app-styles', 'vendor-scripts', 'app-scripts', 'serve', 'watch']);