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


class admin extends User{
    //now it inherits all the method n members of class User
    //we can also add new methos here


    //if we pass parameter to admin object then due to the absence of the constructor if would get handled by the parent of the child class ie User
    //but if we declare a constructor here then it will handle the parameter inputs

    //but if we have constructor here and we want to use the constructor of the parent class , we do this by using ' super()' method;
    //ex :-

    constructor(username,email,title){
        super(username,email); //if we comment this out we will get an error as admin can intake parameter without declaring a constructor for it
        
        this.title=title;
    }

    deleteUser(user){
        arr=arr.filter((u) => {
            return u.username !== user.username;
        } )    
    }
}


const userone =new User('manik','jamila@gmail.com');
const usertwo =new User('maruti','bro@gmail.com');
const userthree=new admin('manan','ooBete@maujkardi.com','ninja');


let arr=[userone,usertwo,userthree];



console.log(arr);   //  (3) [User, User, admin]

userthree.deleteUser(usertwo);
console.log(arr);   //  (2) [User, admin]


console.log(userthree);
