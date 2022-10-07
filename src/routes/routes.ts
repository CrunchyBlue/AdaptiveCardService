import * as express from "express";
import * as controller from "../controllers/controller";

const router = express.Router();

router.get("/", controller.get);

router.get("/schema", controller.getSchema);

router.post("/", controller.post);

export default router;
