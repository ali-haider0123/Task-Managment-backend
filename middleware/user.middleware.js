const jwt = require("jsonwebtoken");
require("dotenv").config();

function authenticate(req, res, next) {
    try {
        const token = req?.headers?.authorization;
        console.log(token)
        if (!token) return res.status(401).json(new Message("you are not authenticated, login first", 401));
        const tokenData = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.currentUser = tokenData;
        // console.log("Token Data:");
        // console.log(tokenData);
        next();
    }
    catch (e) {
        if (e.name === "JsonWebTokenError") return res.status(500).json(
            { message: "invalid jsonwebtoken" }
        );
        console.log(e);
        return res.status(500).json(new Message(e.message, 500));
    }
}

module.exports = authenticate;