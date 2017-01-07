var fs = require('fs');

fs.exists('../Project/Study/different-node2/node-fs/node.txt', function(exists) {
  if (exists)
    console.log('node.txt exists!');
  else
    console.log('node.txt doesn\'t exists!');
});
