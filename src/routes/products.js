import { Router } from "express";
import {
    create,
    getAll,
    getDetail,
    remove,
    update,
} from "../controllers/products";
import { checkPermission } from "../middlewares/checkPermission";
const router = Router();

router.get("/", getAll);
router.get("/:id", getDetail);
router.post("/", checkPermission, create);
router.put(`/:id`, checkPermission, update);
router.delete("/:id", remove);

export default router;