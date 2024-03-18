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
    const foundForm = forms.find(form => form.id == id)
    if(foundForm){
        res.status(200).send(foundForm)
    } else {
        res.status(404).send('INVALID ID')
    }
})

let lastId = 0;

app.post('/store', (req, res) => {
    console.log("API POST USER")
    const { Name, Address } = req.body; 
    const id = ++lastId
    const newForm = { Name, Address , id};
    forms.push(newForm); 
    res.status(200).send(newForm)
});

app.put('/store/:id', (req, res) => {
    console.log("API PUT USER")
    const id = Number(req.params.id)
    const name = req.body.Name 
    const address = req.body.Address 
    let foundIndex = forms.findIndex(form => form.id == id)
    if(foundIndex !== -1 ){
        forms[foundIndex].Name = name; 
        forms[foundIndex].Address = address; 
        res.status(200).send(forms[foundIndex]); 
    } else {
        res.status(404).send('INVALID ID')
    }
    res.status(200).send()
})

app.delete('/store/:id', (req, res) => {
    console.log("API DELETE USER");
    const id = req.params.id
    const foundIndex = forms.findIndex(form => form.id == id);
    if(foundIndex != -1) {
        forms.splice(foundIndex, 1);
        res.status(200).send(forms);
    } else {
        res.status(404).send('ID NOT FOUND.');
    }
});

app.listen(3005, () => {
    console.log('Executed on 3005 door')
});

