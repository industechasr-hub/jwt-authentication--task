import jwt from "jsonwebtoken";
import 'dotenv/config'



const generateAcccessToken  = (id) => {
    return jwt.sign({id}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "1m"})
}

const generateRefreshToken = (id) => {
    return jwt.sign({id}, process.env.REFRESH_TOKEN_SECRET, {expiresIn: "7d"})
}

export {generateAcccessToken, generateRefreshToken}