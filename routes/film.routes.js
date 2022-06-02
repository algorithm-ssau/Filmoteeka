/*const { Router } = require("express")
const Film = require("../models/Film")
const auth = require("../middleware/auth.middleware")
const config = require("config")

const router = Router()

router.post("/:id", auth, async (req, res) => {
    try {
        const filmId = req.params.id

        var film = await Film.findOne(filmId)
        if (!film) {
            return res.status(400).json({ message: "Не найдено фильма с таким названием" })
        }
          
        res.status(201).json({ message: "Фильм успешно найден", ...film })
      } catch (e) {
        res.status(500).json({ message: "Ошибка при получении информации о фильме" })
      }
})*/