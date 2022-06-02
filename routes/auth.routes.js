const { Router } = require("express");
const User = require("../models/user");
const config = require("config");
const jwt = require("jsonwebtoken");

const router = Router();

router.post("/register", async (req, res) => {
  try {
    const { login, password } = req.body;

    const candidate = await User.findOne({ login });
    if (candidate) {
      return res.status(400).json({
        message: "Пользователь с таким именем уже существует",
      });
    }
    const user = new User({ login, password });

    await user.save();

    res.status(201).json({ message: "Пользователь создан" });
  } catch (error) {
    res.status(500).json({
      message: "Ошибка сервера при регистрации",
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { login, password } = req.body;

    var candidate = await User.findOne({ login });
    if (!candidate) {
      return res
        .status(400)
        .json({ message: "Пользователя с таким именем не существует" });
    }

    candidate = await User.findOne({ login, password });
    if (!candidate) {
      return res.status(400).json({ message: "Неверный пароль" });
    }

    const token = jwt.sign({ userId: candidate.id }, config.get("jwtSecret"), {
      expiresIn: "1h",
    });

    res
      .status(201)
      .json({
        message: "Пользователь найден",
        userId: candidate.id,
        token: token,
      });
  } catch (e) {
    res.status(500).json({ message: "Ошибка сервера при входе" });
  }
});

module.exports = router;
