const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    // host: '135.23.223.133',// IP address here,
    // port: 50542 // PORT number here,
    host: 'localhost',// IP address here,
    port: 50541 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  // conn.write("Name: NNN")
  conn.on('connect', () => {
    conn.write('Name: NNN');
  });
  conn.on('connect', () => {
    conn.write('Move: up'); 
  });
  
  // "Move: up" - move up one square (unless facing down)
  // "Move: down" - move down one square (unless facing up)
  // "Move: left" - move left one square (unless facing right)
  // "Move: right" - move left one square (unless facing left)
  
  let moveArray = ["Move: up", "Move: down", "Move: left", "Move: right"];
  
  // conn.on('connect', () => {
  //   conn.write('Move: up'); 
  //   for (let i = 0; i < moveArray.length; i++) {
  //     const waitTime = 50 * (i + 1);
  //     setTimeout(()=> {
  //       conn.write(moveArray[0]);
  //     }, waitTime);
  //   }
  // });
  // conn.on('connect', () => {
  //     conn.write('Move: up'); 
  //     for (let i = 0; i < moveArray.length; i++) {
  //       const waitTime = 50 * (i + 1);
  //       setInterval(()=> {
  //         conn.write(moveArray[0]);
  //       }, waitTime);
  //     }
  //   });
  
 
  conn.on('data', (data) => {
    console.log(data.toString());
  });
  
  return conn;
};

console.log("Connecting ...");

module.exports = {connect};