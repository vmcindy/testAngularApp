var gulp        = require('gulp');
var gulp 		= require('gulp');
var uglify 		= require('gulp-uglify');
var concat 		= require('gulp-concat');
var minify_css 	= require('gulp-minify-css');
var sass 		= require('gulp-sass');
var watch 		= require('gulp-watch');
var plumber 	= require('gulp-plumber');
var prefix 		= require('gulp-autoprefixer');
var sourcemaps	= require('gulp-sourcemaps');
var notify 		= require('gulp-notify');
var mainBowerFiles = require('main-bower-files');
var browserSync = require('browser-sync').create();

var paths = {
  appStyles: './app/css/*.scss',
  appScripts: './app/js/*.js',
  vendorStyles: './bower_components/bootstrap/dist/css/bootstrap.min.css',
  vendorScripts : ['./bower_components/jquery/dist/jquery.min.js', './bower_components/bootstrap/dist/js/bootstrap.min.js', './bower_components/angular/angular.min.js', './bower_components/angular-route/angular-route.min.js'],
  dest: './app/'
};

// ---------------------------------------------------------------------

gulp.task('vendor-styles', function(){
	gulp.src(paths.vendorStyles)
	.pipe(plumber())
	.pipe(concat('vendor.css'))
	.pipe(minify_css())
	.pipe(gulp.dest(paths.dest))
	.pipe(notify({message: 'vendor css files have been compiled!!!'}));
});

gulp.task('app-styles', function(){
	gulp.src(paths.appStyles)
	.pipe(sourcemaps.init())
	.pipe(plumber())
	.pipe(sass())
	.pipe(concat('app-min.css'))
	.pipe(sourcemaps.write())
	.pipe(minify_css())
	.pipe(gulp.dest(paths.dest))
	.pipe(notify({message: 'app sass files have been compiled!!!'}));
});

gulp.task('vendor-scripts', function () {
  var bowerFiles = mainBowerFiles({ filter: new RegExp('.*js$', 'i') });
  var vendorScripts = bowerFiles.concat(paths.vendorScripts) 
  return gulp.src(vendorScripts)
    .pipe(concat('vendor.js'))
	.pipe(gulp.dest(paths.dest))
});

gulp.task('app-scripts', function () {
  return gulp.src(paths.appScripts)
    .pipe(concat('app-min.js'))
    .pipe(gulp.dest(paths.dest))
});

gulp.task('watch', function(){
	gulp.watch('app/styles/*.scss', ['styles']);
	gulp.watch('app/js/*.js', ['scripts']);
});

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./app"
        }
    });
});

gulp.task('default', ['vendor-styles', 'app-styles', 'vendor-scripts', 'app-scripts', 'serve', 'watch']);