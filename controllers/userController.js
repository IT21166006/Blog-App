const userModel = require("../model/userModel");
const bcrypt = require("bcrypt");
//create user register user
exports.registerController = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    

    //save new user
    const user = new userModel({ username, email, password: hashedPassword });
    await user.save();
    return res.status(201).send({
      success: true,
      message: "New User Created",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Error In Register callback",
      success: false,
      error,
    });
  }
};







//get all users
exports.getAllUsers = () => {};

//login
exports.loginController = () => {};