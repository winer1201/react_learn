/**
*  构建
*/
import path from'path';
import fs from 'fs';
import gulp from 'gulp';
import babel from 'gulp-babel';
import sourcemaps from 'gulp-sourcemaps';
import del from 'del';

const dirname = path.resolve(__dirname);

const getBabelrc = new Promise((resolve) => {
  fs.readFile(`${dirname}/.babelrc`, 'utf8', (error,...args) => {
      if(error){
        resolve({
          "presets": [
              "es2015",
              "react",
              "stage-2",
          ],
          "plugins": [
              "transform-runtime"
          ]
        });
      }
      else{
        resolve(JSON.parse(...args));
      }
  });
});

const dirs = {
  src: `${dirname}/src`,
  dest: `${dirname}/build`
};

const paths = {
	src: [
    `!${dirs.src}/**/static/**/client.jsx`,
    `!${dirs.src}/**/static/**/client.js`,
		// `${dirs.src}/**/server/**/**.js`,
		// `${dirs.src}/**/server/**/**.jsx`,
    `${dirs.src}/**/**/**.js`,
    `${dirs.src}/**/**/**.jsx`
	],
	dest: `${dirs.dest}`
};

gulp.task('clean', () =>{
	try{
    	//删除以前的文件
    	del.sync([`${paths.dest}/*`]);
	}
	catch(e){

	}
});

gulp.task('build', () => {
	getBabelrc.then((babelrc) => {
	    gulp.src(paths.src)
	    	.pipe(sourcemaps.init())
	    	.pipe(babel(babelrc))
	    	.pipe(sourcemaps.write('.'))
	    	.pipe(gulp.dest(paths.dest));
  	});
});

gulp.task('watch', ['build'], () => {
	gulp.watch(paths.src, ['build']);
});

gulp.task('default', ['clean','watch']);

