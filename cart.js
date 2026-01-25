

function Cart(){
    const data = localStorage.getItem('myList')
var myList = JSON.parse(data)
console.log(typeof(myList),myList)

const data3 = localStorage.getItem('cartList')
var cartList = JSON.parse(data3)

// const data2 = localStorage.getItem('productId')
// var productId = Number(data2)
// console.log(typeof(productId),productId)


    // const filterd = myList.filter((itm)=>{
    //     return (itm.id == productId)
    // })
    // console.log('filterd Obj',filterd)

    var row = document.getElementById('row')

    cartList.forEach(card => {
           
    const col = document.createElement('div')
    col.classList.add('col')

    col.innerHTML = `
    
    <div class="card" style="width: 18rem;">
  <img src="${card.imgUrl}" class="card-img-top" alt="img cannot be shown">
  <div class="card-body">
    <h5 class="card-title">${card.name}</h5>
    <p class="card-text">${card.discription}</p>
    <p style ="color:blue" id="card-price" class="card-price" data-qntty=${card.qnt} data-price=${card.price}>${card.price} $</p>
           <p style ="color:red"># of products :  ${card.qnt}</p>
           <p style ="color:blueviolet"> price :  ${Number(card.qnt)*Number(card.price)}</p>
  
  </div>
</div>

    `
    row.appendChild(col)
    });
  
}
Cart()

var cardPrice = document.querySelectorAll('.card-price')
// var cardPricex = document.getElementById('card-price')
var totalPrice = document.getElementById('totalPrice') 
function getTotalPrice (){
let total = 0 
cardPrice.forEach((card)=>{
  let qntty = card.dataset.qntty
  let price = card.dataset.price
  console.log(Number(price)*Number(qntty))
  let totalPrice = Number(price)*Number(qntty)
  console.log(totalPrice)
  total += Number(totalPrice)
})
console.log(total)
totalPrice.innerHTML=total + "$"
}

getTotalPrice()

