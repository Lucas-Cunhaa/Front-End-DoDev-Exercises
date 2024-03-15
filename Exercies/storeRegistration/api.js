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
    const id = req.params.id
    let index;
    forms.forEach((element, i) => {
        if ( element.id == id){
            index = i
        }
    })
    res.status(200).send(forms[index])
})
let lastId = 0;
app.post('/store', (req, res) => {
    console.log("API POST USER")
    const { Name, Adress } = req.body; 
    const id = ++lastId
    const newForm = { Name, Adress , id};
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
    console.log('Executed on 3002 door')
});

