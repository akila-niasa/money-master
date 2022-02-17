//------------ inputField ------------
function inputField(price){
    const inputNumber=document.getElementById(price).value
    return inputNumber 
}
//---------- totalCost --------------
function totalCost(){
    const foodValue=inputField("food")
    const rentValue=inputField("rent")
    const clotheValue=inputField("clothes")
    var expensesError=document.getElementById("expenses-error")
   if(foodValue>=0 && rentValue>=0 && clotheValue>=0){
    const totalPrice=parseFloat(foodValue)+parseFloat(rentValue)+parseFloat(clotheValue)
  
    return  totalPrice
   }
   else{
    expensesError.textContent="Please enter a positive number"
    expensesError.style.color = "red"
   }
}
// calculateButton
document.getElementById("cost-buttton").addEventListener("click",function(){
    const expenses=document.getElementById("expenses")
    expenses.innerText= totalCost()
   
    const inputv=(inputField("input"))
    var error=document.getElementById("error")
    const balance=document.getElementById("balance")
    if (isNaN(inputv)) 
    {
          balance.innerText=" "
     // Changing content and color of content
        error.textContent = "Please enter a valid number"
        error.style.color = "red"
    }
   else {
    if(inputv>0 && inputv>totalCost()){
        balance.innerText=parseFloat(inputv)-totalCost()
    }
    else if(inputv<0){
        
        balance.innerText=" "
        // Changing content and color of content
           error.textContent = "Please enter a positive number"
           error.style.color = "red"
    }
    else if(totalCost()>inputv){
        balance.innerText="0"
        const invalidMsg=document.getElementById("extra-expenses-error")
        invalidMsg.textContent="you haven't any money"
        invalidMsg.style.color="red"
    }
 }
})
document.getElementById("save-button").addEventListener("click",function(){
    let save=document.getElementById("save").value
    const saveValue=save
    const balance=document.getElementById("balance")
    const balanceValue=balance.innerText
    const savingAmmount=document.getElementById("save-amount")
    const inputAmmount=parseFloat(inputField("input"))
    savingAmmount.innerText=inputAmmount*(parseFloat(saveValue)/100)

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