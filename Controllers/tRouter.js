const TModel = require('../Models/tClass.js');
const express = require('express');
const router = express.Router();

data = { "TranslationId": "324dsfaas3","TranslationName":"english translation by unknown", "TranslationText":"k lsdjfksjd3 kdjf", "TranslationLanguage":"english", "AyahId": "23k4jkekfjasd", "Ayah": 34, "Surah": 342, "Page": 23, "Juz": 24 }

router.get('/get', async (req, res) => { 
    try{
        const result = await TModel.get();
        if (!result) return res.sendStatus(404);
        res.json(result);
    }catch(e){ 
        console.log(e);
    }
});

router.get('/get/:id/', async (req, res) => {
    try {
        const result = await TModel.getById(req.params.id);
        if (!result) return res.sendStatus(404);
        else return res.json(result);
    } catch (e) { 
        console.log(e)
    }
});

router.get('/get/:id/:surah/:ayah/', async (req, res) => {
    try {
        const result = await TModel.getBySurahAyah(req.params.id, req.params.surah, req.params.ayah);
        if (!result) return res.sendStatus(404);
        else return res.json(result);
    } catch (e) {
        console.log(e)
    }
});


router.post('/post/:data/', async (req, res) => {
    try {
        var data = JSON.parse(req.params.data)
        const result = await TModel.post(data);
        console.log(data)
        if (!result) return res.sendStatus(404);
        const getData = await TModel.getById(data.TranslationId);
        if (!getData) return res.sendStatus(404);
        res.send(getData);
    } catch (e) {
        console.log(e)
    }
});


router.delete('/delete/:id/', async (req, res) => {
    try {
        const result = await TModel.delete(req.params.id);
        if (!result) return res.sendStatus(404);
        return res.send("deleted");
    } catch (e) {
        console.log(e);
    }
});


router.patch("/update/:id/:data/", async (req, res) => {
    try {
        const result = await TModel.update(req.params.id, JSON.parse(req.params.data));
        if (!result) return res.sendStatus(404);
        const getData = await TModel.getById(req.params.id);
        if (!getData) return res.sendStatus(404);
        res.send(getData);
    } catch (e) {
        console.log(e);
    }
});



module.exports = router

