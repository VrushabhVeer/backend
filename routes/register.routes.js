const { Router } = require("express");
const { UserModel } = require("../models/register.model.js");
const userRouter = Router();

userRouter.post("/register", async (req, res) => {
  try {
    const { name, email,  userName, contact, photo } = req.body;

    const user = new UserModel({
      name,
      email,
      userName,
      contact,
      photo,
    });

    await user.save();
    res.send(user);
  } catch (error) {
    res.send(error);
  }
});

userRouter.get("/", async (req, res) => {
  try {
    const result = await UserModel.find();
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

userRouter.delete("/delete/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    const deleteUser = await UserModel.findOneAndDelete({ _id: userId });

    if (deleteUser) {
      res.send({ message: "Deleted" });
    } else {
      res.send({ message: "User not found" });
    }
  } catch (error) {
    res.send(error);
  }
});

userRouter.patch("/edit/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const updates = req.body;
    const updatedUser = await UserModel.findByIdAndUpdate(userId, updates, { new: true });

    if (updatedUser) {
      res.send(updatedUser);
    } else {
      res.status(404).send({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});


module.exports = { userRouter };
