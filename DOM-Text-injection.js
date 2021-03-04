function func8(){

    //printinh the text in the p tag obtained from below
    const para=document.querySelector('p')
    console.log(para.innerText)
    //we can change this text by assigning a new text by
    para.innerText="OnePiece is the best"
    console.log(para.innerText)

    //what if we want to change the html code 

    const para2=document.querySelector('p.wow');
    para2.innerHTML='<h4> well bro what is ur name is the </h4>'



    //what if we want to change the attribute of the tags using get-set Attributes

    const link=document.querySelector('a')
    console.log(link.getAttribute('href'))

    //now lets change this attribute 
    link.setAttribute('href','www.instagram.com');
    link.innerText='Instagram'
    console.log('changed to '+link.getAttribute('href'))  

    //if the setted attribute is not present the the Js will simple add it there
    const para3=document.querySelector('p')
    para3.setAttribute('style','color:orange')

        

}