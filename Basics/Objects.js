function func6()
{   let user={
        name:'mayank',
        age:'21',
        email:"manny@poko.com",
        blogs:['yolo','Github'],
        login:function(user){
            console.log(`current user is ${user}`);
        },
        logblog:function(){
            console.log(this.blogs); // if we dont provide this keyword then error because we have not defined blogs in this scope
        }
        //in order to use this keyword inside the object we should always use regular function and not arrow function as in case of arrow function the scope of this keyword is set to window (global).


    };
//for overwriting or updating values
//user.name="madhvi";

//object Methods

user.logo='hi'; // this adds a new key value pair to the object

user.login("mayank");
console.log(user);

user.logblog();
}

//it is absolutely fine with keeping objects inside array :-
//this is an array of objects
//  ex const block=[
    //     {title: "hello",likes:30},
    //     {title2: "bello",likes:50}
//      ]; 