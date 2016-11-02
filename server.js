const app = require('./lib/app');
const http = require('http');
const port = process.env.PORT || 8000;

const server = http.createServer(app);
server.listen(port, () => {
  console.log('server running at', server.address());
});