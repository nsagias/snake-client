const { IP, PORT } = require('./constants');
const net = require("net");

const stdin = process.stdin;
const connect = function() {
  const conn = net.createConnection({
    // host: '135.23.223.133',// IP address here,
    // port: 50542 // PORT number here,
    host: IP,// IP address here,
    port: PORT // PORT number here,
  });

  conn.setEncoding("utf8");

  conn.on('connect', () => {
    conn.write('Name: NNN');
  });
  
  
  // conn.on('connect', (data) => {
  //   conn.write('Move: up');   
  // })
  
  // conn.on('connect', () => {
  //   conn.write('Move: up'); 
  //   // for (let i = 0; i < moveArray.length; i++) {
  //   //   const waitTime = 50 * (i + 1);
  //   //   setTimeout(()=> {
  //   //     conn.write();
  //   //   }, waitTime);
  //   // }
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
  // conn.on('data', (data) => {
  //   console.log(data.toString());
  // });

  return conn;
};



module.exports = { connect };