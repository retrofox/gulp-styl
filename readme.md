gulp-style
----------

Preprocess CSS with [Styl](https://github.com/visionmedia/styl)

## Install

Install with [npm](https://npmjs.org/package/gulp-styl)

```
npm install --save-dev gulp-styl
```

## Example

```js
var gulp = require('gulp');
var styl = require('gulp-styl');
var inline = require('rework-inline');

gulp.task('default', function () {
	gulp.src('src/app.css')
		.pipe(styl(inline()))
		.pipe(gulp.dest('dist'));
});
```


## API

The `compress` option from Styl is intentionally missing. A separate task like [gulp-csso](https://github.com/ben-eb/gulp-csso) will do a much better job.

### styl(plugin, plugin, ..., options)

Plugins are supplied as arguments.
Optionally supply an object with options as the last argument.

#### options.whitespace

Type: `Boolean`  
Default: `false`

Utilize CSS [whitespace transformations](https://github.com/visionmedia/styl#whitespace-significant-syntax).

## Example

Be sure gulp-jade depedencies are donwloaded (`npm install`) and into
`example/` folder:

```bash
$ npm install -g gulp
$ npm install gulp --save-dev
$ gulp
```

### main.styl

```styl
body
  background-color: white
  color: red
  transform: background-color 300ms ease-out
  &.active
    background-color: blue
    &::before
      content: 'Page is Active'
```

### copiled ./dist/main.css

```css
body {
  background-color: white;
  color: red;
  -ms-transform: background-color 300ms ease-out;
  -moz-transform: background-color 300ms ease-out;
  -webkit-transform: background-color 300ms ease-out;
  transform: background-color 300ms ease-out;
}

body.active::before {
  content: 'Page is Active';
}

body.active {
  background-color: blue;
}
```

## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
