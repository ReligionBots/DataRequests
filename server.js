const express = require('express');
const app = express();
const port = process.env.DATABASE_PORT || 3003;
const QuranRouter = require("./Controllers/qRouter.js");
const PrefixesRouter = require("./Controllers/preRouter.js")
const TranslationsRouter = require("./Controllers/tRouter.js");
const NarrationsRouter = require("./Controllers/narrationsRouter.js");

app.use(express.json());


app.use("/quran", QuranRouter);
app.use("/translation", TranslationsRouter);
app.use("/pre", PrefixesRouter);
app.use("/narration", NarrationsRouter);


app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

