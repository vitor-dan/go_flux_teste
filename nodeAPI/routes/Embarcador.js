const express = require("express");
const router = express.Router();
const Embarcador = require("../models/Embarcador");

//GET ALL
router.get("/", function(req,res){    
    Embarcador.find(function(err, foundEmbarcador){
        if(!err){
            res.json(foundEmbarcador);
        }
        else{
            res.json(err);
        }
    })
});

//SPECIFIC GET
router.get('/:embarcadorId', function(req,res){
    Embarcador.findById(req.params.embarcadorId, function(err,foundEmbarcador){
        if(!err){
            res.json(foundEmbarcador);
        }else{
            res.json(err);
        }
    });
});


//POST 
router.post("/", function(req,res){
    const embarcador = new Embarcador ({
        _id: req.body._id,
        name: req.body.name,
        doc: req.body.doc,
        about: req.body.about,
        active: req.body.active,
        site: req.body.site
    })
    console.log(req.body);
    embarcador.save()
    .then(function(data){
        // res.status(201).end();
        res.json(data);
    })
    .catch(function(err){
        res.json({message: err});
    });
});

//DELETE
router.delete('/:embarcadorId', function(req,res){
    Embarcador.remove({_id: req.params.embarcadorId}, function(err){
        if(!err){
            // res.status(200).end();
            res.json("Embarcador removido");
        }else{
            res.json(err);
        }
    })
});

//PATCH (UPADATE)
router.patch('/:embarcadorId', function(req,res){
    if(req.body.embarcadorId != req.params.embarcadorId)
    { 
        res.statusMessage = "Id body not equals Id Header";
        // res.status(400).end();
    }
    else{
    Embarcador.updateOne({_id: req.params.embarcadorId},
        {$set: 
            {
                name: req.body.name,
                doc: req.body.doc,
                about: req.body.about,
                active: req.body.active,
                site: req.body.site
            }}, function(err){
                    if(!err){
                    // res.status(201).end();
                    res.json("Embarcador modificado");
                    }else{
                        res.json(err);
                    }
    });
    }
});

module.exports = router;