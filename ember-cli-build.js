/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

// app.import('bower_components/bootstrap/dist/css/bootstrap.css.map', {
//     destDir: 'assets'
// });

app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.eot', {
    destDir: 'fonts'
});
app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf', {
    destDir: 'fonts'
});
app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.svg', {
    destDir: 'fonts'
});
app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff', {
    destDir: 'fonts'
});
app.import('bower_components/bootstrap/dist/css/bootstrap.min.css');
app.import('bower_components/bootstrap/dist/js/bootstrap.js');
app.import('bower_components/jquery-ui/jquery-ui.min.js');
app.import('bower_components/jquery-ui/themes/smoothness/jquery-ui.min.css');
app.import('bower_components/ember-table/dist/ember-table.min.js');
app.import('bower_components/ember-table/dist/ember-table.css');
app.import('bower_components/moment/moment.js');
app.import('bower_components/fullcalendar/dist/fullcalendar.min.js');
app.import('bower_components/fullcalendar/dist/fullcalendar.min.css');
app.import('bower_components/fullcalendar/dist/fullcalendar.print.css');
// app.import('bower_components/fullcalendar/dist/lang-all.js');
// app.import('bower_components/fullcalendar/dist/gcal.js');
app.import('bower_components/fullcalendar/dist/lang/en-ie.js');

// module.exports = app.toTree();
  return app.toTree();
};
