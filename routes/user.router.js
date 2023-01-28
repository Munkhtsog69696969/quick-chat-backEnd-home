const express=require("express");

const userRouter=express.Router();

const { body, validationResult } = require('express-validator');

const {createNewUser}=require("../controller/user.controller");
const {loginUser}=require("../controller/user.controller");
const {authMiddleware}=require("../common/middleware/authMiddleware");
const {getUsers}=require("../controller/user.controller")
const {getAllUsers}=require("../controller/user.controller");

userRouter
    .post("/signup",
    body("email").isEmail(),
    body("password").isLength({min:6}),
    body("username").isLength({min:6}),
    createNewUser)

    .post("/login",loginUser,authMiddleware)
    .get("/users/:num",getUsers)
    .get("/allUsers",getAllUsers);

module.exports=userRouter;