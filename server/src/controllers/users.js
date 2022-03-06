import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/user.js";

export const signIn = async (req, res) => {
  const { email, password } = req.body;
  console.log(email);

  try {
    const existingUser = await User.findOne({ email: email });

    if (!existingUser) {
      return res.status(404).json({ message: "User doesn't exist" });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    console.log(isPasswordCorrect);

    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      {
        email: existingUser.email,
        id: existingUser._id,
      },
      // Generate strong secret and store in env
      process.env.SECRET,
      { expiresIn: "14d" }
    );

    console.log(token);

    const sendResponse = { _id: existingUser._id };

    res.status(200).json({ result: sendResponse, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signUp = async (req, res) => {
  const { email, password, confirmPassword, firstName, lastName, terms } =
    req.body;

  try {
    User.findOne({ email: email }, (error, user) => {
      if (error) {
        console.log(error);
      }

      if (user) {
        return res.status(400).json({ message: "User already exists" });
      }
    });

    // if (existingUser) {
    //   console.log(existingUser);
    //   return res.status(400).json({ message: "User already exists" });
    // }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords don't match" });
    }

    if (!terms) {
      return res.status(400).json({ message: "Terms not accepted" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
    });

    const token = jwt.sign(
      {
        email: result.email,
        id: result._id,
      },
      // Same secret as sign in (change later)
      process.env.SECRET,
      { expiresIn: "1h" }
    );

    const sendResponse = { _id: result._id };

    res.status(200).json({ sendResponse, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getUser = async (req, res) => {
  const { id } = req.params;

  try {
    const users = await User.findOne({ _id: id });

    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
