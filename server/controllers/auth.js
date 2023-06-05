import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Register
export const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const isUser = await User.findOne({ username });

    if (isUser) return res.status(402).json({ message: "Этот логин занят" });

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = new User({ username, password: hash });

    await newUser.save();

    res.json({ newUser, message: "Регистрация прошла успешно" });
  } catch (error) {
    res.json({ message: "Ошибка при создании пользователя" });
  }
};

// Login
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user)
      return res.json({ message: "Такого пользователя не существует" });

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) return res.json({ message: "Неправильный пароль" });

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );

    res.json({ token, user, message: "Вы вошли в систему" });
  } catch (error) {
    res.json({ message: "Ошибка при авторизации" });
  }
};

// Get me
export const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user)
      return res.json({ message: "Такого пользователя не существует" });

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );

    res.json({
      user,
      token,
    });
  } catch (error) {
    res.json({ message: "Нет доступа" });
  }
};
