const express = require('express');
const app = express();
const port = process.env.DATABASE_PORT || 3003;

app.use(express.json())




app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

