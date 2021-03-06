function func7(){

    console.log(document)
    // when html file is loaded in the browser it gets adjusted according to the Dom model
    //in which for example document is the parent and all html css js tags and elements are the child nodes.

    //if we want to do some changes in html using js we have to use the document as reference

    const chase=document.querySelector('p');  //this will return the first p thag that it can find

    console.log(chase)

    //but what if we want to get the second or the third p element 
    //in that case w'll use the class
    
    const chase2= document.querySelector(".wow")
    console.log(chase2);

    //but  what if we have two error classes and we have to select the second one

    const chase3= document.querySelector("div.wow")
    console.log(chase3);

    //another way to get the hello fella p tag is going to the text in html -> inspecting it -> right click on the tag ->copy -> copy selector and paste it in queryselector

    const chase4= document.querySelector("body > p:nth-child(15)")
    console.log(chase4);

    //querySelectorAll 
    //if want to select all the p tags then...
    const chase5= document.querySelectorAll("p")
    console.log(chase5);
    //this will return us a nodelist which is a lot similar to array like we can use [] to get the index elements
    //chase5[0]= the first p element.
    chase5.forEach(i => {
        console.log(i);
    })
//using querySelector nodelist is returned




//other ways to Query the DOM 

//using getElements html collection is returned

//get the element by ID
    const bro=document.getElementById('error')
    console.log(bro); //here result will alway be singular because ID is always unique

//get element by class name
    const bro2=document.getElementsByClassName('wow')
    console.log(bro2)
    //here all the classes with wow name will be returned in a html collection
    // in a html collection we cant apply forEach loop

//get element by their tagname
    const bro3=document.getElementsByTagName('p')
    console.log(bro3)
    //return html collection 

    //gives all the p tags in the html page
    
}