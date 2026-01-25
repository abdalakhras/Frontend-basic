var myProducts = {
    id:'',
    name:'',
    discription:'',
    price:'',
    imgUrl:''
}

var myList = [
    {id:'1',
    name:'TV',
    discription:'sony TV',
    price:'100',
    imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk2GAEv2BeZxDOAVaJZ2KF-YKarCTdaaZAyw&s'},
    {
    id:'2',
    name:'TV',
    discription:'samsung Tv',
    price:'200',
    imgUrl:'https://m.media-amazon.com/images/I/81pieXC63IL._AC_UF1000,1000_QL80_.jpg'
    },
    {id:'3',
    name:'TV',
    discription:'Heisense',
    price:'300',
    imgUrl:'https://i5.walmartimages.com/seo/SAMSUNG-32-Class-FHD-1080P-Smart-LED-TV-UN32N5300_2b2943fd-73d6-4d7b-9c54-e22db0c660f1_4.e79d68ec3a718064170de6cbd82e6030.jpeg'}
]

function ViewList(){
  var row = document.getElementById('row')

  myList.forEach((obj)=>{
  
  const col = document.createElement('div')
    col.classList.add('col')
    col.innerHTML = `
      
       <div class="card" style="width: 18rem;">
        <img src="${obj.imgUrl}" class="card-img-top" alt="img cannot be shown">
        <div class="card-body">
        <h5 class="card-title">${obj.name}</h5>
        <p class="card-text">${obj.discription}</p>
        <p>${obj.price} $</p>
        <button class="btn btn-primary add-to-cart" data-id="${obj.id}">add to cart</button>
        </div>
        </div>

        `
         row.appendChild (col)

    const btn = col.querySelector('.add-to-cart')
    btn.addEventListener('click',(e)=>{
      let existObj = cartList.find(ob=> ob.id == obj.id)
      if(existObj){
        existObj.qnt +=1
      }else{
         cartList.push({...obj,qnt:1})
      }
     
      localStorage.setItem('cartList',JSON.stringify(cartList))
  console.log('obj od this specifc col', obj)
  console.log('cartList :',cartList)

    })
  })
}

ViewList()








var cartList = []
var myform = document.getElementById('myform')

myform.addEventListener('submit',(e)=>{
    e.preventDefault()
    var name = document.getElementById('productName')
var discription = document.getElementById('productDiscription')
var price = document.getElementById('productPrice')
var image = document.getElementById('productImg')

myProducts.id = Date.now()
myProducts.name = name.value
myProducts.discription = discription.value
myProducts.price = price.value
myProducts.imgUrl = image.value
myList.push({...myProducts})
// myList = [...myList,{...myProducts}] // we could also use this to create a copy of the obj and store in the list
localStorage.setItem('myList',JSON.stringify(myList))
console.log(myProducts)
console.log(myList)

  var row = document.getElementById('row')
    row.innerHTML = ''
    myList.forEach((itm)=>{
      const col = document.createElement('div')
      col.classList.add('col')
    //   col.dataset.id = itm.id
    // col.addEventListener('click',(e)=>{
    //     console.log(e.currentTarget.dataset.id)
    //     localStorage.setItem('productId',(e.currentTarget.dataset.id))
    // })
      col.innerHTML = `
      
       <div class="card" style="width: 18rem;">
        <img src="${itm.imgUrl}" class="card-img-top" alt="img cannot be shown">
        <div class="card-body">
        <h5 class="card-title">${itm.name}</h5>
        <p class="card-text">${itm.discription}</p>
        <p>${itm.price} $</p>
        <button class="btn btn-primary add-to-cart" data-id="${itm.id}">add to cart</button>
        </div>
        </div>

        `
         row.appendChild (col)
        
         
var btn = col.querySelector('.add-to-cart')
btn.addEventListener('click',(e)=>{

//  let id = e.target.dataset.id
//  console.log('id from button click',id)
//   localStorage.setItem('productId',(e.currentTarget.dataset.id))
  console.log('id of this button',itm.id)

  let existProduct = cartList.find(prod => prod.id == itm.id)

  if(existProduct){
    existProduct.qnt +=1
  }else{
    cartList.push({...itm,qnt:1})
  }
  
  localStorage.setItem('cartList',JSON.stringify(cartList))
  console.log('obj od this specifc col', itm)
   console.log('cartList :',cartList)
})

       
    })

})




