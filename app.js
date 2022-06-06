const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
app.use(express.json({ extended: true }));

const PORT = process.env.PORT || 80;
const mongoUri = config.get("mongoUri");

app.use(express.json({ extended: true }));
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/films", require("./routes/film.routes"));

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

async function start() {
  try {
    await mongoose.connect(
      "mongodb+srv://aleksey:gEoYjnMARU3zLyiN@cluster0.q8ftm.mongodb.net/?retryWrites=true&w=majority ",
      {
        useNewUrlParser: true,
      }
    );

    app.listen(PORT, () => {
      console.log(`App has started on port ${PORT}...`);
    });
  } catch (error) {
    console.log("Server error", error.message);
    process.exit(1);
  }
}

start();
