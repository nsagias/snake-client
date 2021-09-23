let connection;

const handleUserInput = function(data, conn) {
  if (data === '\u0003') {
    process.exit();
  }
  if(data === '\w') {
    conn.write('Move: up');
  }
  if(data === '\a') {
    conn.write('Move: left');
  }
  if(data === '\s') {
    conn.write('Move: down');
  }
  if(data === '\d') {
    conn.write('Move: right');
  }
  if(data === '\g') {
    conn.write("Say: I win");
  }
  
};


const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data', (data) => {
      stdin.write(data)
  })
  
  stdin.on("data", (data) => handleUserInput(data, conn));
  stdin.resume();
  return stdin;
};


module.exports = {setupInput};


