function func9(){

    //if the setted attribute is not present the the Js will simple add it there
    const para=document.querySelector('p')
    para.setAttribute('style','color:orange')
    //but if the tag already had the attribute then that would be completely overwritten , so how could we prevent that

    //using CSS tags
    console.log(para.style) //this will give all the CSS properties the para onject can use

    para.style.margin='30px';
    console.log(para.getAttribute("style"))
    //see here previous attribute and new attribute both were returned 

    //javascript uses camel case 
    para.style.fontSize="30px" //  css property font-size was changed to fontSize in js 

    // how to remove an attribute
    //just give empty string as parameter
    para.style.margin="";


    //adding or removing classes
    //lets change the classes from wow1 to wow2

    const content=document.querySelector('p.wow.bro'); //giving all the classes for unique identification of the html tag
    console.log(content.classList) //this return the number of classes the tag has

    //adding another class
    content.classList.add('wow2') // here we added another class called ppls to the above classes

    //remove a class
    content.classList.remove('wow2');



    //activity
    

}