const express = require("express");
const Oferta = require("../models/Oferta");
const router = express.Router();

//GET ALL
router.get("/", function(req,res){    
    Oferta.find(function(err, foundOferta){
        if(!err){
            res.json(foundOferta);
        }
        else{
            res.json(err);
        }
    })
});

//SPECIFIC GET
router.get('/:ofertaId', function(req,res){
    Oferta.findById(req.params.ofertaId, function(err,foundOferta){
        if(!err){
            res.json(foundOferta);
        }else{
            res.json(err);
        }
    });
});


//POST 
router.post("/", function(req,res){
    const oferta = new Oferta({
        _id: req.body._id,
        id_customer: req.body.id_customer,
        from: req.body.from,
        to: req.body.to,
        initial_value: req.body.initial_value,
        amount: req.body.amount,
        amount_type: req.body.amount_type
    })
    oferta.save()
    .then(function(data){
        // res.status(201).end();
        res.json(data);
    })
    .catch(function(err){
        res.json({message: err});
    });
});

//DELETE
router.delete('/:ofertaId', function(req,res){
    Oferta.remove({_id: req.params.ofertaId}, function(err){
        if(!err){
            // res.status(200).end();
            res.json("Oferta removido");
        }else{
            res.json(err);
        }
    })
});

//PATCH (UPADATE)
router.patch('/:ofertaId', function(req,res){
    if(req.body.id != req.params.ofertaId)
    { 
        res.statusMessage = "Id body not equals Id Header";
        res.status(400).end();
    }
    else{
    Oferta.updateOne({_id: req.params.ofertaId},
        {$set: 
            {
                from: req.body.from,
                to: req.body.to,
                initial_value: req.body.initial_value,
                amount: req.body.amount,
                amount: req.body.amount_type
            }}, function(err){
                    if(!err){
                    // res.status(201).end();
                    res.json("Oferta modificado");
                    }else{
                        res.json(err);
                    }
    });
    }
});

module.exports = router;