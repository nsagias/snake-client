const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '135.23.223.133',// IP address here,
    port: 50542 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  // conn.write("Name: NNN")
  conn.on('connect', () => {
    conn.write('Name: NNN');
  });
   
  // });
  conn.on('data', (data) => {
    console.log(data.toString());
  });
  
  return conn;
};

console.log("Connecting ...");

module.exports = {connect};