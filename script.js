// get the button

// selected all players and buttons adding click halder through their index
const btn = document.querySelectorAll(".select-btn")
const players = document.querySelectorAll(".select-palyer");
const ol = document.getElementById("player-list")

// getting input for per player,manager,coach and calcluateBtn/calcluateTotalBtn
const inputForPlayers = document.getElementById("per-player")
const inputForManager = document.getElementById("manager")
const inputForCoach = document.getElementById("coach")

const calcluateBtn = document.getElementById("cal-btn")
const calcluateTotalBtn = document.getElementById("cal-btn-total")

// getting span tag for player expence

const spanForPerPlayer = document.getElementById("per-player-amount")
const spanForTotal = document.getElementById("total-amount")


// getting span

function createAndGetElement(player){
    const li = document.createElement("li")
    li.appendChild(document.createTextNode(player))
    ol.appendChild(li)
}

// calcluate the per player const 

function calcluatePerPlayer(){
    // getting input value
    calcluateBtn.addEventListener("click",function() {  
        const value = inputForPlayers.value 
        const perPlayerCost = value * ol.childElementCount
        // adding per player and total ammount
        spanForPerPlayer.innerText = perPlayerCost
      
    })

  
}

function calcluatoTotal(){
    calcluateTotalBtn.addEventListener('click',() =>{
        // getting input value
        const valueForManager = parseFloat(inputForManager.value)
        const valueForCoach = parseFloat(inputForCoach.value)
        const value = inputForPlayers.value 

        const perPlayerCost = value * ol.childElementCount

        // console.table(typeof perPlayerCost, typeof valueForManager,typeof valueForCoach)

        const playerTotalCost = parseInt(perPlayerCost + valueForManager + valueForCoach)
        spanForTotal.innerText = playerTotalCost
    })
}

// document.getElementById("button").addEventListener("click", function(){  
//     let player = document.getElementById("player-name").textContent
//     createAndGetElement(player)
// })

// document.getElementById("button-2").addEventListener("click", function(){
    
//     let player = document.getElementById("player-2").textContent
//     createElement(player)
// })

btn[0].addEventListener("click",function(e)  {
    if( ol.children.length <= 4 ){
        createAndGetElement(players[0].innerText)
        btn[0].disabled = true
        
        // calling the function for Player cost and total cost
        calcluatePerPlayer()
        calcluatoTotal()
    }
    else{
        alert("You can't add any players limit exceeded")
    }
})

btn[1].addEventListener("click",function ()  {
    if( ol.children.length <= 4 ){
        createAndGetElement(players[1].innerText)
        btn[1].disabled = true 
    }
    else{
        alert("You can't add any players limit exceeded")
    }
 
})

btn[2].addEventListener("click",function ()  {
    if( ol.children.length <= 4 ){
        createAndGetElement(players[2].innerText)
        btn[2].disabled = true 
    }
    else{
        alert("You can't add any players limit exceeded")
    }

})

btn[3].addEventListener("click",function ()  {
    if( ol.children.length <= 4 ){
        createAndGetElement(players[3].innerText)
        btn[3].disabled = true 
    }
    else{
        alert("You can't add any players limit exceeded")
    }
})

btn[4].addEventListener("click",function ()  {
    if( ol.children.length <= 4 ){
        createAndGetElement(players[4].innerText)
        btn[4].disabled = true 
    }
    else{
        alert("You can't add any players limit exceeded")
    }
})

btn[5].addEventListener("click",function ()  {
    if( ol.children.length <= 4 ){
        createAndGetElement(players[5].innerText)
        btn[5].disabled = true 
    }
    else{
        alert("You can't add any players limit exceeded")
    }
})