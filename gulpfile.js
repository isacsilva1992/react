const gulp = require("gulp")
const sass = require("gulp-sass")
const watchSass = require("gulp-watch-sass")
 
gulp.task("sass:watch", () => watchSass([
  "./src/Assets/scss/**/*.{scss,css}",
  "!./src/Assets/css/**/*"
])
  .pipe(sass())
  .pipe(gulp.dest("./")));

gulp.task('default', gulp.series('sass:watch'));
