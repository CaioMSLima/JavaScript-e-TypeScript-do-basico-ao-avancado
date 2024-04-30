import app from './app';

const port = 3001;
app.listen(port, () => {
  console.log();
  console.log(`Listen in the port ${port}`);
  console.log(`CTRl + Click in http://localhost:${port}`);
});
