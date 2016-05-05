var path = require("path");
var Builder = require('systemjs-builder');

var outpath = 'public/js',
    outfile = path.join(outpath, 'application.js'),
    outfileMin = path.join(outpath, 'application.min.js');

// optional constructor options
// sets the baseURL and loads the configuration file
var builder = new Builder('./', 'app/system.config.js');

// Build the code, but do NOT minify.
builder.buildStatic('./app/app.js', outfile).then(function() {
  console.log('Build complete');
}).catch(function(err) {
  console.log('Build error', err);
});

// Build the code, and minify (also mangles), as well as provide a source map.
builder.buildStatic('./app/app.js', outfileMin, {
  minify: true,
  sourceMaps: true,
  globalDeps: {
    'angular/*': 'angular'
  }
}).then(function() {
  console.log('Build complete');
}).catch(function(err) {
  console.log('Build error', err);
});
