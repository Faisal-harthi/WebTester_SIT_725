
const websiteSchema = require("../models/websites");

const checkWebsite= async (req,res)=>{

        try{

           
            let result = await websiteSchema.find().lean()
         
            let find = result.find(element => element.websiteUrl.includes(req.body.name))

            if(find)
            {
                console.log('trusted')
                res.status= 200;
                return res.send({message:'trusted'})
            }
            else{
                console.log('fake')
                res.status = 200
                return res.send({message:'fake'})
            }

        }
        catch(e)
        {
            res.status=400
            return res.send(e)
        }
}
module.exports = 
{
    checkWebsite
}