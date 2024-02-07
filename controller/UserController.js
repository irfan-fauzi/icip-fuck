import UserModel from "../models/UserModel.js";

export const getUsers = async (req, res) => {
  try {
    const response = await UserModel.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message)
  }
};

export const getUserById = async (req, res) => {
  try {
    const response = await UserModel.findOne({
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json(response)
  } catch (error) {
    console.log(error.message)
  }
}