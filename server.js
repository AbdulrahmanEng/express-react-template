const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => res.sendFile(path.join(`${__dirname}/client/build/index.html`)));

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/trees', (req, res) => res.send(['Oak', 'Ash', 'Aspen', 'Palm']));

/* Matches any requests that don't match those above */
app.get('*', (req, res) => res.sendFile(path.join(`${__dirname}/client/build/index.html`)));

app.listen(port, () => console.log(`Express server listening at ${process.env.IP}:${port}!`));