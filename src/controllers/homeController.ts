import { Request, Response } from "express";

import { Product } from "../models/Product";

import User from "@/models/User";

export const home = async (req: Request, res: Response) => {
  const usuarios = await User.find({
    age: { $gt: 1, $lt: 90 },
  })
    .sort({ "name.firstName": 1 })
    .skip(0)
    .limit(2);

  console.log("Usuarios: ", usuarios);

  const age: number = 90;
  let showOld: boolean = false;

  if (age > 50) {
    showOld = true;
  }

  const list = Product.getAll();
  const expensiveList = Product.getFromPriceAfter(12);

  res.render("pages/home", {
    name: "Bonieky",
    lastName: "Lacerda",
    showOld,
    products: list,
    expensives: expensiveList,
    frasesDoDia: [],
  });
};
