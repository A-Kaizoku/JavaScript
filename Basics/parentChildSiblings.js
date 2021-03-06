function func10(){

    // what were going to do is select each element inside article tag and apply class to each seperate of them

    const article=document.querySelector('article')
    console.log(article.children) // this gonna give us all the element tags inside the parent article
    //it return a html collection
    //we cant use for each loop in html collection

    //so lets convert it into an array
    Array.from(article.children)
    //here Array is a predefined object of JS which has a class from to convert paramenter into array
    console.log(Array.from(article.children)) // this gonna give us all the element tags inside the parent article
    
    //remenber article.children is still a -->html collection

    //so lets apply it
    Array.from(article.children).forEach( (child) =>{
        child.classList.add('article-element')
    })
    //now article's every child element has the classname article-element

    //now lets find parent element using the childrem
    const title=document.querySelector('h2')
    console.log(title.parentElement); //here we will get article tag
    console.log(title.parentElement.parentElement); //here we will get body tag

    //lets tryout the siling relationship next

    console.log(title.nextElementSibling); //p tag
    console.log(title.previousElementSibling); //null





}