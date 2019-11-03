document.addEventListener("DOMContentLoaded", () => {
  
  //for X event Y Fetch the Burgers
  function grabBurgers(){
    return fetch("http://localhost:3000/burgers")
      .then(result => result.json())    
    }
   //render burgers and Slap them on the DOM
    function renderBurgers(burger){
    let burgerMenu = document.getElementById('burger-menu') 
    let burgerDiv = document.createElement('div')
    let burgerTitle = document.createElement('h3')
    let burgerImage = document.createElement('img')
    let burgerDescPTag = document.createElement('p')
    let addToOrder = document.createElement('btn')
    burgerMenu.append(burgerDiv)
    burgerDiv.append(burgerTitle)
    burgerTitle.innerText = burger.name
    burgerTitle.append(burgerImage)
    burgerImage.src = burger.image
    //empty p tag should be working for innerText assignment of Burger Description
    burgerDiv.append(burgerDescPTag)
    burgerDescPTag.innertext += burger.description
    //***************************************************
    //for X Event, Y fetch, Z slap add Burger to order list On DOM
    burgerDiv.append(addToOrder)
    addToOrder.innerHTML = `<button class="button" width="100px">Add to Order</button>`
    addToOrder.addEventListener('click', function addBurgerToOrder(){
        orderList = document.getElementById('order-list')
    orderList.append(    burger.name     )
      })
    }
      //Eric's Quick and Dirty
      //  let burgerArray = burger
      // burgerDiv.innerHTML += 
      // <h3 class="burger_title">`${burger.name}</h3>
      // <img src="`${burger.image}`">
      // <p class= "burger_description">
      //   ${burger.description}
      // </p>
      // <button class="button">Add to Order</button>
    //grab burger Array of Objects, iterate over them and spit out single burgers
    
    // create a custom burger and add it to the database
    let customBurgerForm = document.getElementById('custom-burger')


    customBurgerForm.addEventListener('submit', (event) =>{
      event.preventDefault();
      let newBurgerName = event.target.name.value
      let newBurgerDescription = event.target.description.value
      let newBurgerImg = event.target.url.value
    // debugger
        fetch('http://localhost:3000/burgers', {
          method: 'POST',
          headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            name: newBurgerName,
            description: newBurgerDescription,
            image: newBurgerImg
          })
        })
        .then( res => res.json())
        .then((burger) => {
          renderBurgers(burger);
        })
    })
      
    grabBurgers().then(burgers => {
    burgers.forEach(renderBurgers)
   })
  })
   





  //Z put the Burgers on the DOM
  

//console.log(grabDeBurgers)

//create div.order




