import webp from 'gulp-webp';
import imagemin from 'gulp-imagemin-changba';
import retinize from 'gulp-retinize';

const OPTIONS = {
  flags: {1: '@1x', 2: '@2x', 4: '@4x'},
  flagsPrefix: false,
  flagsOut: {1: '', 2: '@2x', 4: '@4x'},
  flagsOutPrefix: false,
  extensions: ['jpg', 'jpeg', 'png'],
  roundUp: true,
  filter: true,
  scaleUp: false,
  scanFolder: true,
};

export const images = () => {
  return app.gulp.src(app.path.src.images)
    .pipe(app.plugins.newer(app.path.build.images))
    .pipe(app.plugins.if(app.isBuild, retinize()))
    .pipe(app.plugins.if(app.isBuild, webp()))
    .pipe(app.plugins.if(app.isBuild, app.gulp.dest(app.path.build.images)))
    .pipe(app.plugins.if(app.isBuild, app.gulp.src(app.path.src.images)))
    .pipe(app.plugins.if(app.isBuild, app.plugins.newer(app.path.build.images)))
    .pipe(app.plugins.if(app.isBuild, imagemin()))
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.gulp.src(app.path.src.svg))
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.plugins.browsersync.stream())
}
