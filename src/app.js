require('./css/app.css');
require('./css/app2.css');

import querystring from 'querystring';

var time = document.querySelector('#time');
setInterval(function () {
    time.innerHTML = '<h3> ' + Date.now() + '  </h3>';
}, 1000);