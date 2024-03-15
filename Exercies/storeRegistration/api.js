const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json()); 

let forms = [];

app.get('/store',  (req, res) => {
    console.log("API GET")
    res.status(200).send(forms)
    
});

app.get('/store/:id', (req, res) => {
    console.log("API GET BY ID")
    res.status(200).send(forms)
})

app.post('/store', (req, res) => {
    console.log("API POST USER")
    const { Name, Adress } = req.body; 
    const newForm = { Name, Adress };
    forms.push(newForm); 
    res.status(200).send(newForm)
});

app.put('/store/:id', (req, res) => {
    console.log("API PUT USER")
    res.status(200).send(req.params.id)
})

app.delete('/store/:id', (req, res) => {
    console.log("API delete USER")
    res.status(200).send(req.params.id)
})

app.listen(3002, () => {
    console.log('Executed on 3000 door')
});

