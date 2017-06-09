// General
const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');

// PostCSS
const postcss = require('gulp-postcss');
const atImport = require('postcss-import');
const autoprefixer = require('autoprefixer');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');

// Browserify
const browserify = require('browserify');
const babelify = require('babelify');
const envify = require('envify/custom');
const uglifyify = require('uglifyify');
const collapser = require('bundle-collapser/plugin');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const uglify = require('gulp-uglify');
const budo = require('budo');

// Clean
const del = require('del');

gulp.task('postcss:prod', () =>
  gulp.src('source/css/main.css')
  .pipe(postcss([atImport(), autoprefixer()]))
  .pipe(rename((path) => { path.basename = 'bundle'; }))
  .pipe(sourcemaps.init())
  .pipe(cssnano({ discardComments: { removeAll: true } }))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('build/css'))
);

gulp.task('postcss:dev', () =>
  gulp.src('source/css/main.css')
  .pipe(postcss([atImport(), autoprefixer()]))
  .pipe(rename((path) => { path.basename = 'bundle'; }))
  .pipe(gulp.dest('build/css'))
);

gulp.task('browserify:prod', () =>
  browserify({ entries: 'source/jsx/index.jsx', debug: true })
  .transform(babelify.configure({ presets: ['react', 'stage-3', 'es2015'] }))
  .transform({ global: true }, envify({ NODE_ENV: 'production' }))
  .transform({ global: true }, uglifyify)
  .plugin(collapser)
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(buffer())
  .pipe(sourcemaps.init({ loadMaps: true }))
  .pipe(uglify())
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('build/js'))
);

gulp.task('browserify:dev', () =>
  budo('source/jsx/index.jsx', {
    live: '**/**/bundle.*',
    stream: process.stdout,
    port: 8080,
    serve: 'build/js/bundle.js',
    open: true,
    browserify: {
      transform: babelify.configure({
        presets: ['react', 'stage-3', 'es2015'],
        sourceMaps: false
      })
    }
  })
);

gulp.task('serve', () =>
  budo({
    live: null,
    stream: process.stdout,
    port: 8080,
    open: true
  })
);

gulp.task('clear', () =>
  del(['build'])
);

gulp.task('watch', gulp.series('clear', 'postcss:dev', gulp.parallel('browserify:dev', () =>
  gulp.watch('source/css/main.css', gulp.task('postcss:dev'))
)));

gulp.task('serve', gulp.task('serve'));

gulp.task('default', gulp.series('clear', gulp.parallel('postcss:prod', 'browserify:prod')));