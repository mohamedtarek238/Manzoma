import  express  from "express";
import Mogandeen from "../models/Mogandeen.js";

const router = express.Router();

//Creat
router.post("/",async(req,res)=>{
    const newMogand = new Mogandeen(req.body);

     
    try{
        const savedMogand= await newMogand.save()
        res.status(200).json(savedMogand);
    }catch(err){
        res.status(500).json(err)
    }
})

//update a Mogand

router.put("/:id", async (req, res) => {
    try {
      const mogand = await Mogandeen.findById(req.params.id);
      if (mogand.userId === req.body.userId) {
        await mogand.updateOne({ $set: req.body });
        res.status(200).json("the mogand has been updated");
      } else {
        res.status(403).json("you can update only your post");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });
  //get a mogand

router.get("/:id", async (req, res) => {
    try {
      const mogand = await Mogandeen.findById(req.params.id);
      res.status(200).json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  // GET all mogandeen
router.get('/', async (req, res) => {
    try {
      const mogandeen = await Mogandeen.find();
      res.json(mogandeen);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

export default router;