const express = require("express");
const Transportador = require("../models/Transportador");
const router = express.Router();

//GET ALL
router.get("/", function(req,res){    
    Transportador.find(function(err, foundTransportador){
        if(!err){
            res.json(foundTransportador);
        }
        else{
            res.json(err);
        }
    })
});

//SPECIFIC GET
router.get('/:transportadorId', function(req,res){
    Transportador.findById(req.params.transportadorId, function(err,foundTransportador){
        if(!err){
            res.json(foundTransportador);
        }else{
            res.json(err);
        }
    });
});


//POST 
router.post("/", function(req,res){
    const transportador = new Transportador({
        _id: req.body.id,
        name: req.body.name,
        doc: req.body.doc,
        about: req.body.about,
        active: req.body.active,
        site: req.body.site
    })
    transportador.save()
    .then(function(data){
        // res.status(201).end();
        res.json(data);
    })
    .catch(function(err){
        res.json({message: err});
    });
});

//DELETE
router.delete('/:transportadorId', function(req,res){
    Transportador.remove({_id: req.params.transportadorId}, function(err){
        if(!err){
            // res.status(200).end();
            res.json("Transportador removido");
        }else{
            res.json(err);
        }
    })
});

//PATCH (UPADATE)
router.patch('/:transportadorId', function(req,res){
    if(req.body.id != req.params.transportadorId)
    { 
        res.statusMessage = "Id body not equals Id Header";
        res.status(400).end();
    }
    else{
    Transportador.updateOne({_id: req.params.transportadorId},
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
                    res.json("Transportador modificado");
                    }else{
                        res.json(err);
                    }
    });
    }
});

module.exports = router;