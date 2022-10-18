let data ={
    Name:"Sung",
    Chips:160
}
    cards=[]
    sum = 0
    let hasblackjack=false
    let isalive=false
    let message=""
    message=document.getElementById("messageEl")
    cardsum=document.getElementById("cardEl")
    sumAll=document.getElementById("sum-el")
    
    let playername = document.getElementById("person")
    playername.innerText = data.Name + ": $ " + data.Chips

    function getrandomnumber() {
    let random=Math.floor(Math.random()*14)
    if (random>10) {
        return 10
    }
    else if (random===1) {
        return 11
    } 
    else {
        return random
    }

}
function game() {
    isalive = true
    FirstCard = getrandomnumber()
    SecondCard =getrandomnumber()
    cards=[FirstCard, SecondCard]
    sum=FirstCard+SecondCard
   render()
   }

   function render() {
    
    cardsum.textContent = "Card :"
    for (let i=0;i<cards.length;i++){
        cardsum.textContent+=cards[i] +" "
    sumAll.textContent="Sum : "+ sum
    }
    if (sum<21) {
        message.textContent=("Want a new card")
    }
    else if (sum===21){
        message.textContent=("Jackpot")
        hasblackjack=true
    }
    else{
        message.textContent=("Lost")
        isalive=false
    }
}
        function newcard() {
            if (isalive===true && hasblackjack===false) {
        let Card=getrandomnumber()
        sum+=Card
        cards.push(Card)
    render()
            }
        }
