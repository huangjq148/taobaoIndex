/**
 *   @Author huangjq
 *   @createDate 2020/2/23
 */
const { watch, series } = require('gulp');
const gulp = require("gulp");
const scss = require("gulp-sass");

function css() {
	return gulp.src("sass/index.scss")
		.pipe(scss())
		.pipe(gulp.dest("css"))
	// cb();
}

// 可以只关联一个任务
// watch('css/sass/*.scss', css);

exports.default = css;
// 或者关联一个任务组合
// watch('src/*.js', series(clean, javascript));

// gulp.task("default",function(){
// 	console.log("gulp启动成功")
// })
//
// function scssCompiler(cb){
// 	console.log("scss")
// 	cb()
// 	return gulp.src("css/sass/index.scss")
// 		.pipe(scss())
// 		.pipe(gulp.dest("css"))
// }
// gulp.task("scss", scssCompiler)
//
// gulp.watch("css/sass/*.scss",scssCompiler);
