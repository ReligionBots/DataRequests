const narrationModel = require('../Models/narrationClass.js');
const express = require('express');
const router = express.Router();



router.get('/get', async (req, res) => {
    try {
        const result = await narrationModel.get();
        if (!result) return res.sendStatus(404);
        else return res.json(result);
    } catch (e) { console.log(e) }
});

router.get('/get/:id/', async (req, res) => {
    try {
        const result = await narrationModel.getById(req.params.id);
        if (!result) return res.sendStatus(404);
        else return res.json(result);
    } catch (e) { console.log(e) }
});


router.post('/post/:data/', async (req, res) => {
    try {
        var data = JSON.parse(req.params.data)
        const result = await narrationModel.post(data);
        console.log(data)
        if (!result) return res.sendStatus(404);
        const getData = await narrationModel.getById(data.guild);
        if (!getData) return res.sendStatus(404);
        res.send(getData);
    } catch (e) {
        console.log(e)
    }
});


router.delete('/delete/:id/', async (req, res) => {
    try {
        const result = await narrationModel.delete(req.params.id);
        if (!result) return res.sendStatus(404);
        return res.send("deleted");
    } catch (e) {
        console.log(e);
    }
});


router.patch("/update/:id/:data/", async (req, res) => {
    try {
        const result = await narrationModel.update(req.params.id, JSON.parse(req.params.data));
        if (!result) return res.sendStatus(404);
        // the id is for the guild
        const getData = await narrationModel.getById(req.params.id);
        if (!getData) return res.sendStatus(404);
        res.send(getData);
    } catch (e) {
        console.log(e);
    }
});


module.exports = router