// Entry point of the app
const app = require('./config/server.config');
const routes = require('./api/routes');

const port = 3001;

// Mount Api Routes
app.use('/api', routes);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Sweet Water Service listening at http://localhost:${port}`);
});
