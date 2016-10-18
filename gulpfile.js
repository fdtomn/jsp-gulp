// 18311226880
var gulp = require('gulp'),                 // 基础库
    clean = require('gulp-clean'),          // 清空文件夹
    rev = require('gulp-rev'),
    revCollector = require('gulp-rev-collector'),
    minifyHTML   = require('gulp-htmlmin'),     //混淆html
    sourcemaps = require('gulp-sourcemaps'),
    cleanCSS = require('gulp-clean-css');


gulp.task('clean', function () {
    console.log('......clean dist.....');
    return gulp.src('src/main/webapp/assets', {read: false})
        .pipe(clean());
});


gulp.task('default', ['clean'] , function () {
    console.log('Hello Gulp');
    gulp.start('minify-css', 'rev');

});


/*gulp.task('scripts', function () {
    return gulp.src('src/js/!*.js')
        .pipe(rev())
        .pipe(gulp.dest('dist/js'))
        .pipe( rev.manifest() )
        .pipe( gulp.dest( 'rev/js' ) );
});*/

gulp.task('minify-css', function () {
    return gulp.src('src/main/webapp/static/css/*.css')
        //.pipe(sourcemaps.init())
        .pipe(cleanCSS({debug: true}, function (details) {
            console.log(details.name + ":" + details.stats.originalSize);
        }))
        .pipe(gulp.dest('build/assets'))
        .pipe(rev())
        .pipe(gulp.dest('src/main/webapp/assets/css'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('src/main/webapp/assets/css'))
        // .pipe(sourcemaps.write())
        // .pipe(gulp.dest('src/main/webapp/assets'));
});

gulp.task('rev', function () {
    //var opts = {comments:false,spare:false,quotes:true};
    console.log('.................replace..................');
    return gulp.src(['src/main/webapp/assets/css/*.json', 'src/main/webapp/*.jsp'])
        .pipe( revCollector({
            replaceReved: true,
            dirReplacements: {
                'css': 'src/main/webapp/static/css',
                //'/js/': '/dist/js/',
                // 'cdn/': function(manifest_value) {
                //     return '//cdn' + (Math.floor(Math.random() * 9) + 1) + '.' + 'exsample.dot' + '/img/' + manifest_value;
                // }
            }
        }) )
        // .pipe( minifyHTML({
        //     empty:true,
        //     spare:true
        // }) )
        //.pipe( gulp.dest('dist') )
        // .pipe( gulp.dest('src/main/webapp'))
        //.pipe(minifyHTML(opts))
});

































