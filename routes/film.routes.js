const { Router } = require("express");
const Film = require("../models/Film");
const auth = require("../middleware/auth.middleware");
const config = require("config");

const router = Router();

router.post("/byGenre", async (req, res) => {
  /*
  try {
    const { genre } = req.body;

    const films = await Film.find({ genre: genre });
    const msg = `Найдено ${films.length} фильма(ов)`;
    res.status(200).json({ message: msg, films: JSON.stringify(films) });
  } catch (e) {
    res
      .status(500)
      .json({ message: "Ошибка при получении информации о фильмах" });
  }
  */
  res.status(200).json({ message: msg, films: [] });
});

//router.get("/byName", auth, async (req, res) => {
router.post("/byName", async (req, res) => {
  /*
  try {
    const { name } = req.body;
    console.log(`searching for film by name: ${name}`);

    var film = await Film.findOne({ name: name });

    if (!film) {
      return res
        .status(400)
        .json({ message: "Не найдено фильма с таким названием" });
    }

    res.status(201).json({
      message: "Фильм успешно найден",
      filmInfo: JSON.stringify(film),
    });
  } catch (e) {
    res
      .status(500)
      .json({ message: "Ошибка при получении информации о фильме" });
  }
  */
  return res
    .status(400)
    .json({ message: "Не найдено фильма с таким названием" });
});

module.exports = router;
