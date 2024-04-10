import User from "@/models/User";
import { Request, Response } from "express";

export const addUserAction = async (req: Request, res: Response) => {
  try {
    const { name, lastName, email, age, interests } = req.body;
    const newUser = new User();

    let arrayInterests = [];
    arrayInterests = interests.split(",");

    newUser.name = { firstName: name, lastName: lastName };
    newUser.email = email;
    newUser.age = parseInt(age);
    newUser.interests = arrayInterests;

    const result = await newUser.save();

    console.log("Usuário Cadstrado com sucesso!", result);
  } catch (error) {
    console.log("Erro ao cadastrar", error);
  }

  res.redirect("localhost:2000");
};
