import pug from 'gulp-pug';

export const markup = () => {
  return app.gulp.src(app.path.src.markup)
    .pipe(pug({
      // Сжатие HTML файла
      pretty: app.isBuild ? false : true,
    }))
    .pipe(app.plugins.replace(/@img\//g, 'img/'))
    .pipe(app.gulp.dest(app.path.build.markup))
    .pipe(app.plugins.browsersync.stream())
}

export const markupBackend = () => {
  return app.gulp.src(app.path.src.markup)
    .pipe(pug({
      // Сжатие HTML файла
      pretty: true
    }))
    .pipe(app.plugins.replace(/@img\//g, 'img/'))
    .pipe(app.plugins.if(app.isBuild, webpHtmlNosvg()))
    .pipe(app.gulp.dest(app.path.build.markup))
    .pipe(app.plugins.browsersync.stream())
}
