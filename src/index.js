const express = require('express');
const app = express();
const port = 3002;

const router = require('./Router');

const db = require('./Model/MongoseDB/mongdb');

db.connectDb();

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());


router(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
})