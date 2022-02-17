function inputField(price){
    const inputNumber=document.getElementById(price).value
    return inputNumber 
}
function totalCost(){
    // const food=document.getElementById("food")
    const foodValue=inputField("food")
    // const rent=document.getElementById("rent")
    const rentValue=inputField("rent")
    // const clothe=document.getElementById("clothes")
    const clotheValue=inputField("clothes")
    var expensesError=document.getElementById("expenses-error")
   if(foodValue>0 && rentValue>0 && clotheValue>0){
    const totalPrice=parseFloat(foodValue)+parseFloat(rentValue)+parseFloat(clotheValue)
  
    return  totalPrice
   }
   else{
    expensesError.textContent="Please enter a positive number"
    expensesError.style.color = "red"
   }
}

// function income(){
//     const input=document.getElementById("input")
//     const inputValue=input.value
//     const inputv=parseFloat(inputValue)
//     return inputv
// }

document.getElementById("cost-buttton").addEventListener("click",function(){
    const expenses=document.getElementById("expenses")
    expenses.innerText= totalCost()
   
    // const input=document.getElementById("input")
    // const inputValue=input.value
    const inputv=(inputField("input"))
    var error=document.getElementById("error")
    const balance=document.getElementById("balance")
    if (isNaN(document.getElementById("input").value)) 
    {
          balance.innerText=" "
     // Changing content and color of content
        error.textContent = "Please enter a valid number"
        error.style.color = "red"
    }
   else {
    if(inputv>0){
       
      
        balance.innerText=parseFloat(inputv)-totalCost()
    }
 }
})
document.getElementById("save-button").addEventListener("click",function(){
    let save=document.getElementById("save").value
    const saveValue=save

    const balance=document.getElementById("balance")
    const balanceValue=balance.innerText
    const savingAmmount=document.getElementById("save-amount")
    // const input=document.getElementById("input")
    // const inputValue=input.value
    const inputv=parseFloat(inputField("input"))
    savingAmmount.innerText=inputv*(parseFloat(saveValue)/100)

    const remainingBalance=document.getElementById("remaining-balance")

    if(savingAmmount.innerText>balanceValue){
    remainingBalance.innerText=" "
    var errorMsg=document.getElementById("error-msg")
    errorMsg.textContent="you haven't enough money to save"
    errorMsg.style.color="red"
    }
    else{
      
        remainingBalance.innerText=parseFloat(balanceValue)-parseFloat( savingAmmount.innerText)
    }
})