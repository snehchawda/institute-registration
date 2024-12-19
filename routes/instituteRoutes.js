const express = require('express');
const Institute = require('../models/Institute');
const router = express.Router();

/////////// API - to register ///////////

router.post('/register', async (req, res)=> {
    const {name, type, board, medium, classCategory, standard, subjects, university, examType, degreeType} = req.body;
    console.log(req)
    try{
        const newInstitute = new institute({
            name, type, board, medium, classCategory, standard, subjects, university, examType, degreeType
        });
        await newInstitute.save();
        res.status(201).json({message: "Institute registered successfully", institute: newInstitute});
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Some error occured during registration!"});
    }
});


/////////// API - to get institute details /////////// 

router.get(':/id', async ( req, res )=> {
    const {id} = req.params;

    try {
        const institue = await Institute.findById(id);
        if(!institute) {
            return res.status(408).json({ error: 'Institute not found'});
        }
        res.json(institute);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Server error while fetching institute details"})
    }
});

module.exports = router;