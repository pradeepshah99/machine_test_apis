const express = require('express');
const router = express.Router();
const candidate_data = require('../model/candidateData');

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
    










module.exports = router;
