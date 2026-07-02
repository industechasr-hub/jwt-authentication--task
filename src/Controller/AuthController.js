import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { generateAcccessToken, generateRefreshToken } from "../Utils/generateToken.js";
import 'dotenv/config'

export const registerUser = async (req, res)=>{
    try {
        const {name, email, password} = req.body;

        const exists = await User.findOne({email})

        if (exists) {
            return res.status(400).json({
                message:"User already exist"
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });
        
        res.status(201).json({
            message:"user Regitred",
            user
        })
    } catch (error) {
       console.log(error)
    }
}

export const login = async(req, res)=>{
    try {
        const {email, password} = req.body;

        const user = await User.findOne({email})

        if (!user) {
            return res.status(404).json({
                message:"User not found"
            })
        }

        const matchPasword = await bcrypt.compare(password, user.password)

        if (!matchPasword) {
            return res.status(401).json({
                message :"invalid credentials"
            })
        }
        const accessToken = generateAcccessToken(user._id);

        const refreshToken = generateRefreshToken(user._id)

        user.refreshToken = refreshToken

        await user.save();

        res.json({
            accessToken,
            refreshToken
        });

    } catch (error) {
        res.status(500).json({
            message :error.message
        })
    }
}

export const refreshToken = async (req, res) => {
    try {
        const { refreshToken } = req.body;

        console.log(refreshToken);

        if (!refreshToken) {
            return res.status(401).json({
                message: "Refresh Token Required"
            });
        }

        const decoded = jwt.verify(
            refreshToken,
            process.env.REFRESH_TOKEN_SECRET
        );

        const user = await User.findById(decoded.id);

        if (!user || user.refreshToken !== refreshToken) {
            return res.status(403).json({
                message: "Invalid Refresh Token"
            });
        }

        const accessToken = generateAcccessToken(user._id);

        res.json({
            accessToken
        });

    } catch (error) {
        console.log(error);

        res.status(403).json({
            message: "Refresh Token Expired"
        });
    }
};git