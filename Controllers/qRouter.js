const QModel = require('../Models/qClass.js');
const express = require('express');
const router = express.Router();

// data = {"AyahId": "23k4jkekfjasd", "AyahText": "3jkljaf akdjf", "Ayah": 34, "Surah": 342, "Page": 23, "Juz": 24 }


router.get('/get', async (req, res) =>{
    try{
        const result = await QModel.get();
        if(!result) return res.sendStatus(404);
        else return res.json(result);
    }catch(e){console.log(e)}
});

router.get('/get/:id/', async (req, res) => {
    try {
        const result = await QModel.getById(req.params.id);
        if (!result) return res.sendStatus(404);
        else return res.json(result);
    } catch (e) { console.log(e) }
});

router.get('/get/:surah/:ayah/', async (req, res) => {
    try {
        const result = await QModel.getBySurahAyah(req.params.surah, req.params.ayah);
        if (!result) return res.sendStatus(404);
        else return res.json(result);
    } catch (e) { 
        console.log(e)
    }
});



router.post('/post/:data/', async (req, res) => {
    try {
        var data = JSON.parse(req.params.data);
        const result = await QModel.post(data);
        console.log(data);
        if (!result) return res.sendStatus(404);
        const getData = await QModel.getById(data.AyahId);
        if (!getData) return res.sendStatus(404);
        res.send(getData);
    } catch (e) { 
        console.log(e)
     }
});


router.delete('/delete/:id/', async (req, res) => {
    try {
        const result = await QModel.delete(req.params.id);
        if (!result) return res.sendStatus(404);
        return res.send("deleted");
    } catch (e) {
        console.log(e)
    }
});


router.patch("/update/:id/:data/", async (req, res) => {
    try{
        const result = await QModel.update(req.params.id, JSON.parse(req.params.data));
        if(!result) return res.sendStatus(404);
        return res.sendStatus(200);
    }catch(e){
        console.log(e);
    }
});


module.exports = router