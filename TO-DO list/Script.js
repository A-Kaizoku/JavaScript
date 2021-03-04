
const ul=document.querySelector('ul.To-do');
console.log(ul.children);
const arr=Array.from(ul.children);
arr.forEach(element => {
    
    element.classList.add("items");  
});

//button

const button=document.querySelector('button');
button.addEventListener('click',br=>{

    let li=document.createElement('li')
    li.textContent='New Task';
    ul.append(li);

});

//list
const li=document.querySelectorAll('li.items');
li.forEach(item=>

item.addEventListener('click',j=>{
    console.log(j.target);
    j.target.remove();
    
})
)