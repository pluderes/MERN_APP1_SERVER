const UserModel = require("../models/user.model");
const errorMessage = require("../config").errorMessage;

const loginUser = async (data_login) => {
  try {
    const result = await UserModel.loginUser({ data_login });
    if (!result) {
      res.status(402).json(errorMessage(["err login user --controller"]));
    } else {
      return result;
    }
  } catch (err) {
    res.status(402).json(errorMessage(["err in USER LOGIN", err]));
  }
};

const createUser = async ({ new_user }) => {
  try {
    const result = await UserModel.createUser({ new_user });
    if (!result) {
      res.status(402).json(errorMessage(["err create user --controller"]));
    } else {
      return result;
    }
  } catch (error) {
    res.status(402).json(errorMessage(["err create user --controller", err]));
  }
};

module.exports = {
  createUser,
  loginUser,
};
