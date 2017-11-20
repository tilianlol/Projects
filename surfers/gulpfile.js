var gulp = require('gulp'),
		sass = require('gulp-sass'),
		minify = require('gulp-minify-css'),
		prefix = require('gulp-autoprefixer'),
		rigger = require('gulp-rigger'),
	  imagemin = require('gulp-imagemin'),
    watch = require('gulp-watch'),
    ugly = require('gulp-uglify'),
    browserSync = require("browser-sync"),
    pngquant = require('imagemin-pngquant'),
    reload = browserSync.reload;

gulp.task('script', function() {
  gulp.src('src/script/main.js')
  .pipe(rigger())
  // .pipe(ugly())
  .pipe(gulp.dest('build/js'));
});

gulp.task('style', function(){
	gulp.src('src/style/main.scss')
  .pipe(rigger())
	.pipe(sass())
	.pipe(minify())
	.pipe(prefix())
  .pipe(gulp.dest('build/css'));
});

gulp.task('html', function(){
	gulp.src('src/index.html')
	.pipe(rigger())
	.pipe(gulp.dest('build/'));
});

gulp.task('image', function () {
  gulp.src('src/img/**/*.*')
  .pipe(imagemin({
    progressive: true,
    svgoPlugins: [{removeViewBox: false}],
    use: [pngquant()],
    interlaced: true
  }))
  .pipe(gulp.dest('build/img/'));
});

gulp.task('fonts', function() {
    gulp.src('src/fonts/**/*.*')
    .pipe(gulp.dest('build/fonts/'))
});

gulp.task('build', [
  'html',
  'style',
  'script',
  'fonts',
  'image'
]);

gulp.task('watch', function(){
    watch(['src/**/*.html'], function(event, cb) {
        gulp.start('html');
    });
    watch(['src/style/**/*.scss'], function(event, cb) {
        gulp.start('style');
    });
});

gulp.task('server', function () {
    browserSync({
    	server: {
    		baseDir: './build'
    	},
    	host: 'localhost'
    });
});

gulp.task('default', ['server', 'build', 'watch']);
