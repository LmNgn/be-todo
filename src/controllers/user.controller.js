import User from "../models/User.js";
import createError from "../utils/createError.js";
import createResponse from "../utils/createResponse.js";
import handleAsync from "../utils/handleAsync.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
/**
 * s1: check if user exist
 * s2: harsh password
 * s3: create new user and sent message
 */
export const createUser = handleAsync(async (req, res) => {
    console.log("hihi")
    const { email, password, username } = req.body

    const isExist = await User.findOne({ email })

    if (isExist) {
        return createError(res, 400, "Already Exist", isExist)
    }
    const hash = bcrypt.hashSync(password, 10)
    const newUser = await User.create({ email, password: hash, username })
    const { password: pssw, ...userWithoutPassword } = newUser.toObject()
    return createResponse(res, 201, "Create Sucessfull", userWithoutPassword)
})


export const updateUser = handleAsync(async (req, res) => {
    const user = User.findByIdAndUpdate(req.params._id, req.body)
    createResponse(res, 201, "Update Sucessfull", user)
})

export const login = handleAsync(async (req, res) => {
    const { email, password } = req.body
    const isExist = await User.findOne({ email })
    if (!isExist)
        return createError(res, 404, "Login info wrong")
    const isMatched = bcrypt.compareSync(password, isExist.password)
    if (!isMatched)
        return createError(res, 404, "Login info wrong")
    const accessToken = jwt.sign({ _id: isExist._id }, "NOTASECRET")
    return createResponse(res, 200, "Login successfull", {
        user: isExist,
        accessToken
    })
})