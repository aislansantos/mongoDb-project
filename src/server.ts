import * as express from "express";
import { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Teste Olá Mundo!");
});

app.listen(3000, () => {
  console.log("Rodando na porta 3000");
});
