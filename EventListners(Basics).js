function func11(){

   // we are making a small todo list



const ul=document.querySelector('ul.To-do')
//using evenlisteners
    const button=document.querySelector('button.boom');
    //addEvenlistener("event type", callback function )
    button.addEventListener('click',()=>{
        //console.log("you clicked me");

        //  old way
        // ul.innerHTML+='<li> new Task </li>';
        console.log('new task added');

        //  Different way

        //this is a three step process 
        // firstly we need to create a tag
        // then we need to add text in the tag
        // then we can append and prepand the text according to our requirement

        const liTag=document.createElement('li'); //this creates a li tag
        liTag.textContent='new task';  // add text the the tag
        ul.append(liTag); //add at last of the list
        //ul.prepend(liTag); // add at the stating of the list under ul
});

const items=document.querySelectorAll("li"); //doing this we got a nodelist
items.forEach(item=>{
    item.addEventListener('click', event =>{
        // console.log(event);
        console.log(event.target);
        // event.target.style.textDecoration='line-through'; //this adds a line through style to the li tag
        // item.style.display='none';

        //but we dont want a line thorugh , we want to completely remove that tag 
        //so how to remove a tag using dom
        
        // item.remove();
        // or
        event.target.remove();

        //now we saw how to remove an item but what if we do somthings like this-> if I press the buttom add new task in todo list
        //so i am going to make some changes in the line 11 above
        
    });

    
})

//after doing this much there is still some errors like if we remove the tag from ul add add new task , it is done successfully but
// then if we try to remove the task once again the it does not take the command








}