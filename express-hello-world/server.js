import express from 'express';

const app = express();

app.use((req, res) => {
  console.log('HTTP Method:', req.method);
  res.send('This is a new string');
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
