
import Mogandeen from "../models/Mogandeen.js";

class mogandenController{
    static addMogand =async(req,res)=>{
        const newMogand = new Mogandeen(req.body);
        try{
            const savedMogand= await newMogand.save()
            res.status(200).json(savedMogand);
        }catch(err){
            res.status(500).json(err)
        }
    }

    static updateMogand = async (req, res) => {
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
    }

    static getOneMogand =async (req, res) => {
        try {
          const mogand = await Mogandeen.findById(req.params.id);
          res.status(200).json(post);
        } catch (err) {
          res.status(500).json(err);
        }
    }

    static getAllMogand = async (req, res) => {
        try {
          const mogandeen = await Mogandeen.find();
          res.json(mogandeen);
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
    }

    static deleteMogand = async (req,res)=>{
        try {
            const id = req.params.id
            const mogand = await Mogandeen.findByIdAndDelete({_id:id})

            if (!mogand){
            res.status(404).json({ message: "Mogand not found"});
            }
          } catch (error) {
            res.status(500).json({ message: error.message });
          }
          
    }

}

export default mogandenController;
