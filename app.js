const express = require("express");
const config = require("config");
const mongoose = require("mongoose");

const app = express();
app.use(express.json({ extended: true }));

const PORT = config.get("port") || 5000;
const mongoUri = config.get("mongoUri");

app.use(express.json({ extended: true }));
app.use("/api/auth", require("./routes/auth.routes"));
//app.use("/api/films", require("./routes/film.routes"))

async function start() {
  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
    });
    app.listen(PORT, () => {
      console.log(`App has started on port ${PORT}...`);
    });
  } catch (error) {
    console.log("Server error", error.message);
    process.exit(1);
  }
}

start();
