function func4(){

 // here radius is the parameter
    // we can also remove the parethesis in the radius only if there is one parameter to be passed
   
const area=(radius) => {
    return 3.14*radius**2;
};  

// this above arrow function can also be written as :-
//const area=radius => 3.14*radius**2;
// the code after arrow (=>) is assumed to return the value by the system
//and also this one liner is only for 
const zoo=area(5);  
console.log(zoo);

//example 2

// const bill=function(products,tax){
//     let total=0;
//     for(let i=0;i < products.length;i++){
//         total+=products[i]+products[i]*tax;
        
//     }
//     return total;    
// }
// console.log(bill([10,20,30],0.2))

//arrow version

const bill=(products,tax)=>{
    let total=0;
    for(let i=0;i < products.length;i++){
        total+=products[i]+products[i]*tax;
        
    }
    return total;  
}
console.log(bill([10,20,30],0.2))


}
