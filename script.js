function totalCost(){
    const food=document.getElementById("food")
    const foodValue=food.value
    const rent=document.getElementById("rent")
    const rentValue=rent.value
    const clothe=document.getElementById("clothes")
    const clotheValue=clothe.value
    const totalPrice=parseFloat(foodValue)+parseFloat(rentValue)+parseFloat(clotheValue)
   
    return totalPrice
}
document.getElementById("cost-buttton").addEventListener("click",function(){
    const expenses=document.getElementById("expenses")
    expenses.innerText=totalCost()
    const input=document.getElementById("input")
    const inputValue=input.value
    if(inputValue>0){
        const balance=document.getElementById("balance")
        balance.innerText=parseFloat(inputValue)-totalCost()
    }
    else{
        alert("please input a positive value")
    }

})
document.getElementById("save-button").addEventListener("click",function(){
    let save=document.getElementById("save").value
    const saveValue=save

    const balance=document.getElementById("balance")
    const balanceValue=balance.innerText
    const savingAmmount=document.getElementById("save-amount")
    savingAmmount.innerText=parseFloat(balanceValue)*(parseFloat(saveValue)/100)

    const remainingBalance=document.getElementById("remaining-balance")
    remainingBalance.innerText=parseFloat(balanceValue)-parseFloat( savingAmmount.innerText)
})