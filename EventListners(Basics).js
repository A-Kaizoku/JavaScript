function func11(){

   // we are making a small todo list

//using evenlisteners
    const button=document.querySelector('button.boom');
    //addEvenlistener("event type", callback function )
    button.addEventListener('click',()=>{
        console.log("you clicked me");
});

const items=document.querySelectorAll("li");
items.forEach(item=>{
    item.addEventListener('click', event =>{
        // console.log(event);
        console.log(event.target);
        event.target.style.textDecoration='line-through'; //this adds a line through style to the li tag
        // item.style.display='none';

        //but we dont want a line thorugh , we want to completely remove that tag 
        //so how to remove a tag using dom
        
        li.remove()
    });
})










}