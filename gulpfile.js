var gulp = require('gulp'),
    svgSprites = require('gulp-svg-sprites'),
    concatCss = require('gulp-concat-css'),
    svg2png = require('gulp-svg2png'),
    filter = require('gulp-filter');


var spritesConfig = {
	cssFile: "../css/svg-sprite.css",
    selector : "svg-%f-icon",
    svgPath : '../../images/%f',
    pngPath : '../../images/%f',
    defs:true,
    preview: false
};



gulp.task('sprites', function(){

    gulp.src('assets/images/svg-icons/*.svg')
        .pipe(svgSprites(spritesConfig))
        .pipe(gulp.dest("dist/images/"))
 
});


gulp.task('svg2png', function () {
    gulp.src('dist/images/svg/*.svg')
        .pipe(svg2png())
        .pipe(gulp.dest('dist/images/svg/'));
});



gulp.task('concatCss', ['sprites'],  function () {
  
  	gulp.src(['dist/css/svg-sprite.css', 'dist/css/*.css'])
    	.pipe(concatCss("style.min.css"))
    	.pipe(gulp.dest('dist/css/min/'));
});

gulp.task('default',['sprites' , 'concatCss', 'svg2png']);
