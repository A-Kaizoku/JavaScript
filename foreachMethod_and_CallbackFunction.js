function func5()
{   // forEach method is like a for each loop
    // let people =['mario','ryuk','light','chun-li','gabriel']
    // people.forEach(function(names){
    //     console.log(`something ${names}`);
    //})

    // now lwts try the same with arrow function
    
    // let people =['mario','ryuk','light','chun-li','gabriel']
    // people.forEach(names => console.log(`something ${names}`))

    //also

    let people =['mario','ryuk','light','chun-li','gabriel'];

    const rambo=(names,index) => console.log(`${index}. Hello ${names}`);
    people.forEach(rambo);

    //callback function : in these above examples we passed function as a parameter.

    const ul=document.querySelector(".ppls");
    //here ul is just a constant name
    
    let peoples =['mario','ryuk','light','chun-li','gabriel'];
    let html=``;
    peoples.forEach(function (person) {
        html+=`<li style="color:pruple">${person}</li>`;
    });

    console.log(html);
    ul.innerHTML=html;

}