import express from 'express';
import UserModel from '../Modals/userModel.js';
import bcrypt from 'bcrypt';
export const registerUser = async (req,res) => {  
    const {username,password,firstname,lastname} = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password,salt);
    const newUser = new UserModel({username,password:hashedPass,firstname,lastname});

    try {
        await newUser.save();
        res.status(200).json(newUser);
    } catch (error) {
        res.status(500).json("message", error.message);
    }
};

// login user

export const loginUser = async (req, res) => {
    const {username,password} = req.body;
    try {
        const user = await UserModel.findOne({username: username});
        if(user){
            const valid = await bcrypt.compare(password, user.password);
            if(valid){
                res.status(200).json(user)
            }
            else{
                res.status(400).json("WRONG Password")
            }
        }else{
            res.status(400).json("User does not Exists")

        }
    } catch (error) {
        res.status(500).json("message", error.message);
        
    }
}