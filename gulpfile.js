const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const sass = require("gulp-sass");

//compile sass

gulp.task("sass", function(){
  return gulp.src(["src/scss/*.scss"])
  .pipe(sass())
  .pipe(gulp.dest("src/css"))
  .pipe(browserSync.stream());
})

//Watch & server

gulp.task("serve", ["sass"], function(){
  browserSync.init({
    server: "./"
  });
});

gulp.watch(["src/scss*.scss"], ["sass"]);
gulp.watch(["./*.html"]).on("change", browserSync.reload);

//default

gulp.task("default", ["serve"]);
