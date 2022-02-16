function totalCost(){
    const input=document.getElementById("input")
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
    totalCost()
    console.log("good")
})