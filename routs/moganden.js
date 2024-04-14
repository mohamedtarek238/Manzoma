import  express  from "express";
import Mogandeen from "../models/Mogandeen.js";
import mogandenController from "../controllers/mogandController.js";

const router = express.Router();

//Create
router.post("/",mogandenController.addMogand)

//update a Mogand
router.put("/:id",mogandenController.updateMogand)

  //get a mogand
router.get("/:id",mogandenController.getOneMogand)

  // GET all mogandeen
router.get('/all',mogandenController.getAllMogand);

export default router;