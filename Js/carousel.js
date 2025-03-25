 let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images'); //returns nodeList 
console.log(images)
//a nodeList possible to iterate over it like an "Array" using forEach()

function showSlide(index) {                     //index is a paramaeter , you can name it whatever
    images.forEach(img => img.classList.remove('active')); // img is just a variable name 
    
    images[index].classList.add('active');  //you can use (.toggle) insted of (.add)
    console.log(images)
}


function prevSlide() {
   if(currentIndex==0){
    currentIndex = images.length - 1
    console.log(currentIndex)
    showSlide(currentIndex);
   }
   else{
    currentIndex = currentIndex-1
    showSlide(currentIndex);
   }
    
}

function nextSlide() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    showSlide(currentIndex);
}

// Auto slide every 3 seconds
// setInterval(nextSlide, 3000);
