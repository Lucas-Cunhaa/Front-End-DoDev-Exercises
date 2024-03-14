const input = document.querySelectorAll("form input");
const nameF = document.querySelector(".inputFormName");
const adress = document.querySelector(".inputFormAdress");
const form = document.querySelector("form");
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

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newForm = new Form(nameF.value, adress.value);
  
   fetch("https://apigenerator.dronahq.com/api/v9yZ0bYm/dataform", {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },
    redirect: 'follow',
    
    mode: 'cors',
    
    cache: 'no-cache',

    credentials: 'same-origin',

    referrerPolicy: 'no-referrer',

    body: JSON.stringify(newForm),
  })

    .then((res) => {
      return res.json();
    })

    .then((res) => res.json())
    
    .then((data) => {
      console.log(data); 
    })

    .catch((error) => {
      console.error("Erro:", error);
    });
  
    
});
