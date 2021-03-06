//lets assume we have an object and we want to make another like it with different member values
// what we can do is copy paste the first one and edit the values
//but the crux of js is code reusability so what we can do is :-
// create a constructor class to solve our issue

class User{
    constructor(username){
        // set up properties 
        this.username='chaaywala';

    }
}

const userOne =new User('manik');
const userTwo =new User('maruti');


console.log(userOne,userTwo);


// the 'new' keyword
// 1- it creates an empty object
//2- it binds the value of 'this' to the new empty object
//3- it calls the constructor function to 'build' the object