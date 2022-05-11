const { Router } = require("express");
const router = Router();
const User = require("../models/user");

router.post("/register", async (req, res) => {
  try {
    const { login, password } = req.body;
    console.log("Body:", req.body);

    const candidate = await User.findOne({ login });
    if (candidate) {
      console.log("Пользователь с таким ником уже существует", login);
      return res.status(400).json({
        message: "Пользователь с таким ником уже существует",
      });
    }
    //const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({ login, password });

    await user.save();

    res.status(201).json({ message: "Пользователь создан" });
  } catch (error) {
    res.status(500).json({
      message: "Что то пошло не так",
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { login, password } = req.body;
    console.log("Body:", req.body);

    const candidate = await User.findOne({ login, password });
    if (!candidate) {
      console.log("Пользователь не найден", login);
      return res.status(400).json({ message: "Пользователь не найден" });
    }
    console.log("Пользователь найден", login);
  } catch (e) {
    res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" });
  }
});

module.exports = router;
