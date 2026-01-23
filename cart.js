

function Cart(){
    const data = localStorage.getItem('myList')
var myList = JSON.parse(data)
console.log(typeof(myList),myList)

const data2 = localStorage.getItem('productId')
var productId = Number(data2)
console.log(typeof(productId),productId)


    const filterd = myList.filter((itm)=>{
        return (itm.id == productId)
    })
    console.log('filterd Obj',filterd)
}
Cart()