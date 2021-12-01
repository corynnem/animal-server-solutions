const express = require("express");
const router = express.Router();
const { Animal } = require("../models");

// MAKE SURE TO CREATE APP.USE(ANIMALCONTROLLER) STATEMENT IN APP.JS

/**
 * BRONZE CHALLENGE: * 
 * 
 * 
 * Make a new '/create' endpoint in the animal-controller file.  It should save all the data from the animal model to the database, including # of legs, boolean predator value, and its name.
 * 
 * If the animal is correctly saved in the database, inform the user. Otherwise, alert the user if there's an error.
 * 
 * Make another '/' endpoint that will return all the animals created in the database. Like the others, send appropriate statuses based on if the request succeeds or not.
 * 
 */

router.post('/create', async(req, res) => {
    const { name, legNumber, predator } = req.body.animal

    try {
        let newAnimal = await Animal.create({
            name, 
            legNumber,
            predator
        })

        if(newAnimal) {
            res.status(201).json({
                message: 'Animal created',
            })
        }
    } catch {
        res.status(500).json({
            message: 'Animal could not be created'
        })
    }

})




router.get('/', async(req, res) => {
    try {
        let animals = await Animal.findAll()
        if(animals) {
            res.status(200).json({
                animals: animals
            })
        }
    } catch {
        res.status(500).json({
            message: 'No animals found'
        })
    }
})



  




module.exports = router;