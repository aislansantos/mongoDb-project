import { Router } from "express";

import * as HomeController from "../controllers/homeController";
import * as InfoController from "../controllers/infoController";
import * as UserController from "../controllers/userController";

const router = Router();

router.get("/", HomeController.home);

router.get("/contato", InfoController.contato);
router.get("/sobre", InfoController.sobre);

router.post("/new-user", UserController.addUserAction);

export default router;
