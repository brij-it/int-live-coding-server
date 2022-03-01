/* eslint-disable no-console */
import express from 'express';

const app = express();
const port = 5000;
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello from Brij!' });
});
app.listen(port, () => console.log(`Running on port ${port}`));
