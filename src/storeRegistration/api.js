const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes')
const path = require('path')
app.use(cors());
app.use(express.json()); 

app.use(routes)

app.set('views', path.resolve(__dirname, 'src', 'views'))





app.listen(3005, () => {
    console.log('Executed on 3005 door')
});

