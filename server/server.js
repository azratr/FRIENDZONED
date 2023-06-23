
require("dotenv").config();
const express = require("express");
const AuthRoute = require("./routes/AuthRoute");
const cors = require("cors");
require("./db/conn");
const UploadRoute = require("./routes/UploadRoute")
const ChatRoute = require("./routes/ChatRoute")
const PostRoute = require("./routes/PostRoute")
const UserRoute = require("./routes/UserRoute")
const MessageRoute = require("./routes/MessageRoute")


const bodyParser = require("body-parser");

//Routes

const app = express();
// ro serve images for public
app.use(express.static('public'))
app.use('/images',express.static("images"))

const PORT = 4002;
//middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}))




app.listen(PORT, () => {
  console.log(`Server start at Port No : ${PORT}`);
});
//usage of routes

app.use('/auth',AuthRoute)
app.use('/user',UserRoute)
app.use('/post',PostRoute)
app.use('/chat',ChatRoute)
app.use('/upload',UploadRoute)
app.use('/message',MessageRoute)