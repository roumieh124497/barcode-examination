const app = require('./app');
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;

const db = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD,
);

mongoose
  .connect(db)
  .then(() => {
    console.log('DB connected..');
  })
  .catch(err => {
    console.log(err);
  });

app.listen(port, () => {
  console.log('server is running on port 3000');
});
