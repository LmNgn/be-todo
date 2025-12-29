import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";

const auth = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return createError(res, 401, "Missing token");
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = {
        id: decoded.id
    };

    next();
};

export default auth;
