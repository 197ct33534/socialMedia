import express from 'express';
import UserModel from '../Modals/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
export const registerUser = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(req.body.password, salt);
  req.body.password = hashedPass;
  const newUser = new UserModel(req.body);
  const { username } = req.body;
  try {
    const oldUSER = await UserModel.findOne({ username });
    if (oldUSER) {
      return res.status(400).json({ message: 'account exists' });
    }
    const user = await newUser.save();
    const token = jwt.sign(
      {
        username: user.username,
        id: user._id,
      },
      process.env.secret_key,
      { expiresIn: '1h' }
    );
    res.status(200).json({ newUser, token });
  } catch (error) {
    res.status(500).json('message', error.message);
  }
};

// login user

export const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await UserModel.findOne({ username: username });
    if (user) {
      const valid = await bcrypt.compare(password, user.password);
      if (!valid) {
        res.status(400).json('wrong password');
      } else {
        const token = jwt.sign({ username: user.username, id: user._id }, process.env.secret_key, {
          expiresIn: '1h',
        });
        res.status(200).json({ user, token });
      }
    } else {
      res.status(404).json('User does not Exists');
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
