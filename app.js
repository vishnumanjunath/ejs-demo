const express = require('express');
const app = express();
const ejs = require('ejs');

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    const features = [
      { id: '121', name: 'Use plain JavaScript', description: 'We love JavaScript. Its a totally friendly language. All templating languages grow to be Turing-complete. Just cut out the middle-man, and use JS!' },
      { id: '122', name: 'Fast development time', description: 'Dont waste time and attention figuring out arcane new syntax because elegance — or how to preprocess your data so it will actually render right.' },
      { id: '123', name: 'Simple syntax', description: 'JavaScript code in simple, straightforward scriptlet tags. Just write JavaScript that emits the HTML you want, and get the job done!' },
      { id: '124', name: 'Speedy execution', description: 'We all know how fast V8 and the other JavaScript runtimes have gotten. EJS caches the intermediate JS functions for fast execution.' },
      { id: '125', name: 'Easy debugging', description: 'Its easy to debug EJS errors: your errors are plain JavaScript exceptions, with template line-numbers included.' },
      { id: '126', name: 'Active development', description: 'EJS has a large community of active users, and the library is under active development. Were happy to answer your questions or give you help.' },
    ];
  
    res.render('pages/index', {
      features: features,
    });
});

// about page => SSR Support
app.get('/about', function(req, res) {
  // res.render('pages/about');

  ejs.renderFile('views/pages/about.ejs', {}, 
        {}, function (err, template) {
        if (err) {
            throw err;
        } else {
            res.end(template);
        }
    });
});

app.listen(8080);
console.log('Server is listening on port 8080');
