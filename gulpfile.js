const gulp = require("gulp");
const nunjucksRender = require("gulp-nunjucks-render");
const replace = require('gulp-replace');
// const { src, dest } = require('gulp');

gulp.task("default", function () {
  return gulp.src("src/emails/*").pipe(nunjucksRender({
    path: ["src/templates"]
  })).pipe(gulp.dest("dist")).pipe(replace('/{/{', '{{')).pipe(gulp.dest("dist"));
});

// gulp.task("default", function replaceQuotes() {
//   return gulp.src("dist/*.html")
//     .pipe(replace('/{/{', '{{'))
//     .pipe(gulp.dest("dist"));
// });