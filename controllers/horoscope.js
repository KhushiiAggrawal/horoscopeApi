import { horoscopeModel } from "../models/horoscope.js";

export const getHoroscope = async (req,res)=>{
    try{
        const { title } = req.query;
        const horoscope = await horoscopeModel.findOne({title});
        if (!horoscope) {
            return res
              .status(400)
              .json({ success: false, message: "Failed to get horoscope!" });
          }
        res.status(200).json({ success: true, horoscope });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Error" + error });
      }
}
export const createHoroscope = async (req,res) =>{
    try{
        const newHoroscope = await horoscopeModel.create({ ...req.body });
        res.status(200).json({
            success : true,
            message : "horoscope created",
            horoscope: newHoroscope,
        })
        }catch(error){
            res.status(501).json({
                success : false,
                message : `Failed to add : ${error}`
            })
        }
}
