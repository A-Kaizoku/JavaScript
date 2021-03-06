//lets assume we have an object and we want to make another like it with different member values
// what we can do is copy paste the first one and edit the values
//but the crux of js is code reusability so what we can do is :-
// create a constructor class to solve our issue

class Usserr{
    constructor(username,email){
        // set up properties 
        this.username='chaaywala';
        this.email="raamgad_ka_2_rupiya@gmail.com"
    
    }
}

const userOne = new Usserr('manik'); // these parameter we are passing wont change the username inside the usserr object as it is simply not using the parameter
const userTwo = new Usserr('maruti');//for more insight watch the code below, ull get it


console.log(userOne,userTwo);


// the 'new' keyword
// 1- it creates an empty object
//2- it binds the value of 'this' to the new empty object
//3- it calls the constructor function to 'build' the object


//now lets talk about class methods

class User{
    constructor(username,email){
        // set up properties 
        this.username=username;
        this.email=email;
        this.score=0
    }
    //method are declared outside the constructor scope
    login(){
        console.log(`${this.username} just logged in`);
        return this;
    }
    logout(){
        console.log(`${this.username} just logged out`);
        return this;
    }
    incScore(){
        this.score+=1;
        console.log(`${this.username} score is ${this.score}`);
        return this;
    }
}

const userone =new User('manik','jamila@gmail.com');
const usertwo =new User('maruti','bro@gmail.com');
userone.login();
usertwo.login();


//now lets learn how to chain the methods
//ex userone.login().logout(); this how basically a chain is made
//here login will go first and then return a values whose method will be logout() and it will get fired too
//but in this case it wont work because login() does not return anything hence undefined
// to make it work we need to return object itself after login as object has a metod called logout()

//lets do this then (editing from line 40)
usertwo.login().logout().incScore().incScore();
//execution happens from left to right

//expected output:-

// chaaywala just logged in
// classes.js:43 chaaywala just logged out
// classes.js:48 chaaywala score is 1
// classes.js:48 chaaywala score is 2