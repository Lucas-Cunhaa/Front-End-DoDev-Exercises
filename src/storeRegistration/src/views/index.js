const input = document.querySelectorAll("form input");

const postForm = document.querySelector('.postForm')
const postName = document.querySelector(".postName");
const postAddress = document.querySelector(".postAddress");

const searchId = document.querySelector('.searchId')
const searchByIdForm = document.querySelector('.searchForm')

const putForm = document.querySelector('.putForm')
const putId = document.querySelector('.putId')
const putType = document.querySelector('.putType')
const putContent = document.querySelector('.putContent')

const deleteForm = document.querySelector('.deleteForm')
const deleteId = document.querySelector('.deleteId')

class Form {
  Name;
  Adress;
  constructor(name, adress) {
    this.Name = name;
    this.Address = adress;
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

postForm.addEventListener("submit",  (e) => {
  e.preventDefault();
  const newForm = new Form(postName.value, postAddress.value);
  console.log(newForm)
       fetch("http://localhost:3005/store", {
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
  fetch("http://localhost:3005/store",{ 
     method: 'GET' 
  }).then(res => {
   console.log(res)
 })


}
searchByIdForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = searchId.value
    fetch(`http://localhost:3005/store/${id}`,{
      method: 'GET'
    }).then(res => {return res.json()}).then(data => {
      console.log(data)
    })
})

putForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const id = putId.value
  const name = putType.value 
  const address = putContent.value

  fetch(`http://localhost:3005/store/${id}`, {
          method: 'PUT',
          mode: 'cors',
          cache: 'no-cache',
          credentials: 'same-origin',
          headers: {
              'Content-Type': 'application/json'
          },
          redirect: 'follow',
          referrerPolicy: 'no-referrer',
          body: JSON.stringify( {"Name" : name, "Address" : address, "id" : id})
      }).then(res => {
        return res.json()
      }).then(data => {
        console.log(data)
      })

})

deleteForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const id = deleteId.value

  fetch(`http://localhost:3005/store/${id}`, {
          method: 'DELETE',
          mode: 'cors',
          cache: 'no-cache',
          credentials: 'same-origin',
          headers: {
              'Content-Type': 'application/json'
          },
          redirect: 'follow',
          referrerPolicy: 'no-referrer',
      }).then(res => {
        return res.json()
      }).then(data => {
        console.log(data)
      })

})



