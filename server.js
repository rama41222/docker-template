const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

const config = {
  port: 3000,
  host: '0.0.0.0',
  app: 'Test API',
  debugMode: 'dev'
};

app.use(cors());
app.use(bodyParser.json());
app.use(morgan(config.debugMode));

app.get('/', (req, res) => {
  res.status(200).json({ message: `Hello from ${config.app}`})
});

app.listen(config.port, config.host, (e) => {
  if(e) {
    console.error('Application Error', e);
    process.exit(1)
  }
  console.log(`${config.app} running on port ${config.port}`);
});
