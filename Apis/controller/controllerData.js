const express = require('express');
const router = express.Router();
const candidate_data = require('../model/candidateData');
const scoreUpdate = require('../model/scoreUpdate');

router.post('/addCandidate',  async(req, res) => {

    const checkEmail =  await candidate_data.findOne({email: req.body.email});

    if(checkEmail)
    {
        res.send({message: "account already exist"})
    }
    else
    {
      let data = candidate_data();
    data.firstName = req.body.firstName;
    data.lastName = req.body.lastName;
    data.email = req.body.email;
    data.password = req.body.password;

    if( !req.body.firstName || !req.body.lastName || !req.body.email || !req.body.password)
    {
        res.json("All field data input is compulsory")
    }
    else
    {
        data.save().then((err, result) => {
            if(err) {
                res.json(err);
            } else {
                res.status(200).json({message: "Data saved successfully", Result : result});
            }
        });
    }
    }

})

router.put('/updateScore/:id', async(req, res)=> {
  await candidate_data.findByIdAndUpdate(req.params.id, {test1: req.body.test1, test2:req.body.test2, test3:req.body.test3}, {new:true}).then((err, result)=>{
    if(err){res.send(err)}else
    {
        res.send("updatio done")
    }
  })
 
})
    










module.exports = router;
