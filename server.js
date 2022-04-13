const express = require('express');
const timeOut = require('connect-timeout');
const app = express();
const port = process.env.DATABASE_PORT || 3003;
const quranRouter = require("./Controllers/qRouter.js");
const prefixesRouter = require("./Controllers/preRouter.js")
const translationsRouter = require("./Controllers/tRouter.js");
const narrationsRouter = require("./Controllers/narrationRouter.js");
const mergesRouter = require("./Controllers/mergeRouter.js");

app.use(express.json());


app.use(timeOut('10s'))
app.use("/quran", quranRouter);
app.use("/translation", translationsRouter);
app.use("/pre", prefixesRouter);
app.use("/narration", narrationsRouter);
app.use("/merge", mergesRouter);


app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

