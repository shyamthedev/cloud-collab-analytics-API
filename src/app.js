const express = require("express");
const app = express();

require("./db/mongoose");
const userRouter = require("./routes/user.js");


var PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/users', userRouter);

app.listen(PORT, () => {
  console.log(`port listen`);
});
