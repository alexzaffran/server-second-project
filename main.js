const userRouter = require('./router/userRouter');
const express = require('express');
var cors = require('cors');

let app = express();
app.use(express.json());

app.use(cors());

require('./configs/database');

app.use('/api/user', userRouter);

app.listen(8000, () => {
  console.log(`app is listening on port 8000`);
});
