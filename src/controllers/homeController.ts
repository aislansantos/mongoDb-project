import { Request, Response } from "express";

import { Product } from "../models/Product";

export const home = (req: Request, res: Response) => {
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
