const Dev = require('../models/Dev');  

module.exports = {
   async store(req,  res){   
      const { devId } = req.params;
      const { user } = req.headers;

      const loggedDev = await Dev.findById(user);
      const TargetDev = await Dev.findById(devId);

      if(!TargetDev) {
        return res.status(400).json({error: "Dev não encontrado"});
      }

      if(TargetDev.likes.includes(loggedDev._id)){
        console.log("Deu Macht")
      } 
        loggedDev.likes.push(TargetDev._id);

        await loggedDev.save()
      
      return res.json(loggedDev);
    }
} 