// //Install express server
// const express = require('express');
// const path = require('path');

// const app = express();

// // Serve only the static files form the dist directory
// app.use(express.static('./dist/my-app'));

// app.get('/*', function(req,res) {
    
// res.sendFile(path.join('./dist/my-app/index.js'));
// });

// // Start the app by listening on the default Heroku port
// app.listen(process.env.PORT || 8080);

// console.log(`${__dirname} 
// Listem on port ${process.env.PORT || 8080}`);

const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
//app.listen(9000);
app.listen(process.env.PORT || 8080)
console.log(`Server listening on port: ${process.env.PORT || 8080}`);

