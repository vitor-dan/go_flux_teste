const express = require("express");
const Lance = require("../models/Lance");
const router = express.Router();

//GET ALL
router.get("/", function(req,res){    
    Lance.find(function(err, foundLance){
        if(!err){
            res.json(foundLance);
        }
        else{
            res.json(err);
        }
    })
});

//SPECIFIC GET
router.get('/:lanceId', function(req,res){
    Lance.findById(req.params.lanceId, function(err,foundLance){
        if(!err){
            res.json(foundLance);
        }else{
            res.json(err);
        }
    });
});


//POST 
router.post("/", function(req,res){
    const lance = new Lance({
        id_provider: req.body.id_provider,
        id_offer: req.body.id_offer,
        value: req.body.from,
        amount: req.body.amount,
    })
    lance.save()
    .then(function(data){
        // res.status(201).end();
        res.json(data);
    })
    .catch(function(err){
        res.json({message: err});
    });
});

//DELETE
router.delete('/:lanceId', function(req,res){
    Lance.remove({_id: req.params.lanceId}, function(err){
        if(!err){
            // res.status(200).end();
            res.json("Lance removido");
        }else{
            res.json(err);
        }
    })
});

//PATCH (UPADATE)
router.patch('/:lanceId', function(req,res){
    // if(req.body.id != req.params.lanceId)
    // { 
    //     res.statusMessage = "Id body not equals Id Header";
    //     res.status(400).end();
    // }
    // else{
    Lance.updateOne({_id: req.params.lanceId},
        {$set: 
            {
                id_provider: req.body.id_provider,
                id_offer: req.body.id_offer,
                value: req.body.from,
                amount: req.body.amount,
            }}, function(err){
                    if(!err){
                    // res.status(201).end();
                    res.json("Lance modificado");
                    }else{
                        res.json(err);
                    }
    });
    // }
});

module.exports = router;