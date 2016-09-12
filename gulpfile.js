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

var browserSync = require('browser-sync').create();

var dest		= "app/";

var src_js		= "app/js/*.js";
var src_sass	= "app/css/*.scss";

// ---------------------------------------------------------------------

gulp.task('styles', function(){
	gulp.src(src_sass)
	.pipe(sourcemaps.init())
	.pipe(plumber())
	.pipe(sass())
	.pipe(concat('app-min.css'))
	.pipe(gulp.dest(dest))
	.pipe(sourcemaps.write())
	.pipe(minify_css())
	.pipe(gulp.dest(dest))
	.pipe(notify({message: 'sass files have been compiled!!!'}));
});

// Static Server + watching scss/html files
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./app"
        }
    });
});

gulp.task('default', ['styles', 'serve']);