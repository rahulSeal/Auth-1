const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const authRouter = require("./routes/auth.route");
const noteRouter = require("./routes/note.route");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.static("./public"));
app.use(cors());

app.use("/api/auth", authRouter);
app.use("/api", noteRouter);

app.use("*name", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "/public/index.html"));
});

module.exports = app;
