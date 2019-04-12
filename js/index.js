// Your code goes here

/*Text Color change on hover*/

let container_p = document.querySelectorAll('p');

container_p.forEach(element => 
   element.addEventListener('mouseover', function(event){
    event.target.style.color = 'white';
    event.target.style.backgroundColor = 'red';
}))

container_p.forEach(element => 
    element.addEventListener('mouseleave', function(event){
     event.target.style.color = 'black';
     event.target.style.backgroundColor = 'white';
 }))

/*Container Click event*/

let container = document.querySelector('.container.home');

container.addEventListener('click', function(event){
    console.log(`You clicked on ${event.target} and that is at (${event.screenX}, ${event.screenY}) on the screen`);
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
     console.log(event);
 }))

//  btns.forEach(element => 
//     element.addEventListener('mouseleave', function(event){
//      event.target.className -= ' animateButtonSize'
//      event.target.className += ' animateButtonSizeReverse'
//      console.log(event);
//  }))