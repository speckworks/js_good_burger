document.addEventListener("DOMContentLoaded", () => {
  //*********************************************************************** 
  // Y Fetch the Burgers
  function grabBurgers(){
    return fetch("http://localhost:3000/burgers")
      .then(result => result.json())    
    }
    //********************************************************************
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
    burgerDescPTag.innerHTML = burger.description
    burgerDiv.append(burgerDescPTag)
    console.log(burgerDescPTag.innertext)
    //*********************************************************************
    //for X Event, Y fetch, Z slap add Burger to order list On DOM
    burgerDiv.append(addToOrder)
    addToOrder.innerHTML = `<button>Add to Order</button>`
    addToOrder.addEventListener('click', function addBurgerToOrder(){
        orderListUl = document.getElementById('order-list')
        newBurgerLi = document.createElement('li')
        newBurgerLi.innerText = burger.name
        orderListUl.append(newBurgerLi)
      })
    }
    
    let customBurgerForm = document.getElementById('custom-burger')
    //*********************************************************************
    // X event, Y create burger, persist it in the database, and Z slap it on the DOM
    customBurgerForm.addEventListener('submit', (event) =>{
      event.preventDefault();
      let newBurgerName = event.target.name.value
      let newBurgerDescription = event.target.description.value
      let newBurgerImg = event.target.url.value
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
   






