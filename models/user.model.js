const UserEntity = require("../entities/user.entity");

const loginUser = async function checkEmail(data_login) {
  try {
    const result = await UserEntity.create(new_user);
    return result;
  } catch (err) {
    console.log("err create user --models", err);
    throw err;
  }
};

const createUser = async ({ new_user }) => {
  try {
    const result = await UserEntity.create(new_user);
    return result;
  } catch (err) {
    console.log("err create user --models", err);
    throw err;
  }
};

module.exports = {
  createUser,
};
