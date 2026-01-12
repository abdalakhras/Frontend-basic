
    var totl = document.getElementById('totl')
    var sub1 = document.getElementById('sub1')
    var sub2 = document.getElementById('sub2')
    var sub3 = document.getElementById('sub3')
    var sub4 = document.getElementById('sub4')
    var sub5 = document.getElementById('sub5')
    var avg = document.getElementById('avg')
    var pass = document.getElementById('pass')

function Calculate (e){
     e.preventDefault()
    var subj1 = sub1.value 
    var subj2 = sub2.value 
    var subj3 = sub3.value 
    var subj4 = sub4.value 
    var subj5 = sub5.value 
   var total = Number(subj1) + Number(subj2) + Number(subj3) + Number(subj4) + Number(subj5)
   console.log(total)
   totl.innerHTML = total
   avg.innerHTML = total/5
   if(total >= 250 && avg >= 50 ){
    pass.innerHTML = 'Pass'
   }else{
    pass.innerHTML = 'fail'
   }
}
