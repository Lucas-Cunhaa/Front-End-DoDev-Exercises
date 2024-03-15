const input = document.querySelectorAll("form input");
const nameF = document.querySelector(".inputFormName");
const adress = document.querySelector(".inputFormAdress");
const searchForm = document.querySelector('.searchForm')
const inputSearch = document.querySelector('#search')
const form = document.querySelector("form");
let forms = [];
class Form {
  Name;
  Adress;
  constructor(name, adress) {
    this.Name = name;
    this.Adress = adress;
  }
}

function changeColor(e) {
  e.target.style.border = "4px solid aqua";
}
function resetColor(e) {
  e.target.style.border = "1px solid black";
}
function getText(e) {
  console.log(e.target.value);
}

input.forEach((element) => {
  element.addEventListener("blur", resetColor);
  element.addEventListener("focus", changeColor);
  element.addEventListener("keyup", getText);
});

form.addEventListener("submit",  (e) => {
  e.preventDefault();
  const newForm = new Form(nameF.value, adress.value);
  forms.push(newForm);
  
       fetch("http://localhost:3002/store", {
          method: 'POST',
          mode: 'cors',
          cache: 'no-cache',
          credentials: 'same-origin',
          headers: {
              'Content-Type': 'application/json'
          },
          redirect: 'follow',
          referrerPolicy: 'no-referrer',
          body: JSON.stringify(newForm)
      }).then(res => {
        return res.json()
      }).then(data => {
        console.log(data)
      })
    Get()
   
});

function Get() {
  fetch("http://localhost:3002/store").then(res => {
   console.log(res)
 })

}
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = inputSearch.value
    fetch(`http://localhost:3002/store/${id}`).then(res => {return res.json()}).then(data => {
      console.log(data)
    })
})



