const net = require('net');
const fs = require('fs');
const server = net.createServer();

// add this line after server is created, before listen is called
server.on('connection', (client) => {
  // Set encoding - currently only for text files
  client.setEncoding('utf8');
  client.on('data', (data) => {
    const path = `./files/${data}`;
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) throw Error;
      client.write(data);
    });
  });
});

server.listen(4000, () => {
  console.log('Server listening on port 4000!');
});