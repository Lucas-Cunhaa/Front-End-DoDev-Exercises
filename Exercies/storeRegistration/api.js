const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json()); 

app.listen(3000, () => {
    console.log('Executed on 3000 door')
});
app.use(cors());
