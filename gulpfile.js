//tasks dev

require('./tasks/dev/serve.js');
require('./tasks/dev/clean.js');
require('./tasks/dev/templates.js');
require('./tasks/dev/styles.js');
require('./tasks/dev/template-watch.js');
require('./tasks/dev/images.js');
require('./tasks/dev/js.js');

//tasks prod
require('./tasks/prod/stylusdist.js');
require('./tasks/prod/jsdist.js');
require('./tasks/prod/pugdist.js');
require('./tasks/prod/cleandist.js');
require('./tasks/prod/build.js');
require('./tasks/prod/imagensdist.js');


