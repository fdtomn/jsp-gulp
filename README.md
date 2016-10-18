# gulp

[gulp.js实现非覆盖式发布](http://www.reqianduan.com/1228.html)

## gulp start

1. 全局安装gulp

   $ npm install --global gulp

2. 作为项目的开发依赖（devDependencies）安装：

   $ npm install --save-dev gulp
    
3. 在项目根目录下创建一个名为 gulpfile.js 的文件：

    var gulp = require('gulp');
    
    gulp.task('default', function() {
      // 将你的默认的任务代码放在这
    });

4. 运行 gulp：

    $ gulp

## gulp plugins

### gulp-minify-css

This package has been deprecated. Please use gulp-clean-css instead.

#### install

npm install gulp-clean-css --save-dev

### gulp-clean

#### install

npm install --save-dev gulp-clean


### gulp-rev

#### install

$ npm install --save-dev gulp-rev

https://github.com/sindresorhus/gulp-rev

### gulp-rev-collector

#### install

$ npm install --save gulp-rev-collector

### gulp-htmlmin 

#### install

$ npm i gulp-htmlmin --save-dev


### gulp-sourcemaps 

#### install

$ npm install --save gulp-sourcemaps
## 参考

https://markpop.github.io/2014/09/17/Gulp%E5%85%A5%E9%97%A8%E6%95%99%E7%A8%8B/

http://www.reqianduan.com/1228.html
http://www.reqianduan.com/3015.html

http://stackoverflow.com/questions/30542393/spring-gulp-useref

http://www.oxxostudio.tw/articles/201503/gulp-3-compress-html.html
