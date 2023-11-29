const gulp = require("gulp");
const nunjucksRender = require("gulp-nunjucks-render");

gulp.task("default", function () {
  return gulp.src("src/emails/*").pipe(nunjucksRender({
    path: ["src/templates"]
  })).pipe(gulp.dest("dist"));
});