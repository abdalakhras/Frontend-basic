

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
    <p>${card.price} $</p>
           <p># of products ${card.qnt}</p>
    <a href="" class="btn btn-primary">Add to cart</a>
  </div>
</div>

    `
    row.appendChild(col)
    });
  
}
Cart()