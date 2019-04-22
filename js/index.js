// Your code goes here

/*Text Color change on hover*/

let container_p = document.querySelectorAll('p');

container_p.forEach(element => 
   element.addEventListener('mouseover', function(event){
    event.target.style.backgroundColor = 'yellow';
}))

container_p.forEach(element => 
    element.addEventListener('mouseleave', function(event){
     event.target.style.backgroundColor = 'white';
 }))

 function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

 container_p.forEach(element => 
    element.addEventListener('click', function(event){
        event.stopPropagation();
        event.target.style.color = getRandomColor();
 }))

/*Container Click event*/

let container = document.querySelector('.container.home');

container.addEventListener('click', function(event){
    console.log(`You clicked on ${event.target} and that is at (${event.screenX}, ${event.screenY}) on the screen`);
    event.target.style.backgroundColor = getRandomColor();

})

/*Image*/

let images = document.querySelectorAll('h2');

images.forEach(element => 
    element.addEventListener('mouseover', function(event){
        event.target.className += ' bigText'
        console.log(event);
 }))

 images.forEach(element => 
    element.addEventListener('mouseleave', function(event){
        event.target.className -= ' bigText';
        console.log(event);
 }))


 /*Button Animations*/
 let btns = document.querySelectorAll('.btn');

 btns.forEach(element => 
    element.addEventListener('mouseover', function(event){
     event.target.className += ' animateButtonSize'
 }))

 btns.forEach(element => 
    element.addEventListener('mouseleave', function(event){
     event.target.classList.remove('animateButtonSize');
 }))


 /*Change colors of nav links when moused over and wheel on mouse is scrolled*/
 let nav_a = document.querySelectorAll('.nav-link');

 nav_a.forEach(element => {
     element.addEventListener('mouseover', function(event){
         event.target.style.backgroundColor = 'grey';
     })
 })

 nav_a.forEach(element => {
    element.addEventListener('mouseleave', function(event){
        if(event.target.style.backgroundColor === 'grey')
        event.target.style.backgroundColor = 'white';
    })
})

nav_a.forEach(element => {
    element.addEventListener('wheel', function(event){
        event.target.style.backgroundColor = getRandomColor();
    })
})