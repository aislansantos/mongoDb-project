import * as express from "express";
import { Request, Response } from "express";
import * as path from "path";
import * as mustache from "mustache-express";
import * as dotenv from "dotenv";
import mainRoutes from "./routes/index";

dotenv.config();

const server = express();

server.set("view engine", "mustache");
server.set("views", path.join(__dirname, "views"));
server.engine("mustache", mustache());

server.use(express.static(path.join(__dirname, "../public")));

server.use(express.urlencoded({ extended: true }));

server.use(mainRoutes);

server.use((req: Request, res: Response) => {
  res.status(404).send("Página não encontrada!");
});

server.listen(process.env.PORT, () => {
  console.log(process.env.PORT);
});
