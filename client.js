const net = require('net');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//We need to specify the address and the port to connect to
const client = net.createConnection({
  host: 'localhost',
  port: 4000
});

//We need the encoding to tell the server and the client what kind of data are we transfering
client.setEncoding('utf8');

// Will not register any data being input without this here
// Detects if data is being input and console.logs it
client.on('data', function(data) {
  console.log(data);
});

// Read user input as the file and send it back to the server (client.write)
rl.on('line', (input) => {
  client.write(input);
});