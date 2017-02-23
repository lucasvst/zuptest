/**
 * Describe here your assets.
 */
const SOURCES = {
  sass: ['./src/scss/main.scss'],
  vendorFonts: ['./node_modules/bootstrap/fonts/**'],
  vendorCss: [
    './node_modules/bootstrap/dist/css/bootstrap.min.css',
    './node_modules/angular-ui-bootstrap/dist/ui-bootstrap-csp.css'
  ],
  vendorJs: [
    './node_modules/angular/angular.js',
    './node_modules/angular-ui-router/release/angular-ui-router.js',
    './node_modules/angular-ui-bootstrap/dist/ui-bootstrap.js',
    './node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
    './node_modules/ngstorage/ngStorage.min.js'
  ],
  images: ['./src/img/**'],
  scripts: ['./src/app/**/*.js'],
  index: [
    './src/index.html',
    './src/.htaccess'
  ],
  views: ['./src/views/**']
}

/**
 * Require all the external libs.
 */
const gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    minifyCss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    connect = require('gulp-connect');

/**
 * Describe all tasks and subtasks.
 */

/* main tasks */
gulp.task('default', ['build', 'watch', 'connect'])
gulp.task('build', ['assets', 'html', 'vendor'])
gulp.task('watch', () => gulp.watch(['./src/**'], ['build']))
gulp.task('assets', ['sass', 'images', 'scripts'])
gulp.task('html', ['index', 'views'])
gulp.task('vendor', ['vendorCss', 'vendorJs', 'vendorFonts'])

/* subtasks */
gulp.task('connect', connectTask);
gulp.task('sass', sassTask)
gulp.task('images', imagesTask)
gulp.task('scripts', scriptsTask)
gulp.task('index', indexTask)
gulp.task('views', viewsTask)
gulp.task('vendorCss', vendorCssTask)
gulp.task('vendorJs', vendorJsTask)
gulp.task('vendorFonts', vendorFontsTask)

/**
 * Code your tasks :).
 */
function connectTask() {
  connect.server({
    name: 'Exhibition',
    root: ['dist'],
    port: 8000,
    fallback: 'dist/index.html'
  });
}

function sassTask(done) {
  gulp.src(SOURCES.sass)
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./dist/css/'))
    .on('end', done)
}

function vendorFontsTask(done) {
  gulp.src(SOURCES.vendorFonts)
    .pipe(gulp.dest('./dist/fonts/'))
    .on('end', done)
}

function vendorCssTask(done) {
  gulp.src(SOURCES.vendorCss)
    .pipe(concat('vendor.css'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./dist/css/'))
    .on('end', done)
}

function vendorJsTask(done) {
  gulp.src(SOURCES.vendorJs)
    .pipe(concat('vendor.js'))
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest('./dist/js/'))
    .on('end', done)
}

function imagesTask(done) {
  gulp.src(SOURCES.images)
    .pipe(gulp.dest('./dist/img/'))
    .on('end', done)
}

function scriptsTask(done) {
  gulp.src(SOURCES.scripts)
    .pipe(concat('main.js'))
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest('./dist/js/'))
    .on('end', done)
}

function indexTask(done) {
  gulp.src(SOURCES.index)
    .pipe(gulp.dest('./dist/'))
    .on('end', done)
}

function viewsTask(done) {
  gulp.src(SOURCES.views)
    .pipe(gulp.dest('./dist/views/'))
    .on('end', done)
}