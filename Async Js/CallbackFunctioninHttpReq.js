const getTodos=()=>{
const request=new XMLHttpRequest();
//console.log(request); this give us the request object

request.addEventListener('readystatechange',()=>{
    if(request.readyState === 4 && request.status===200){
        console.log(request,request.responseText);
    }
    else if(request.readyState === 4){
        console.log('no data fetched');
    }
});

request.open('GET','https://jsonplaceholder.typicode.com/todos/');
request.send();

};


getTodos();


//this part is incomplete so rewatch the videos and complete it.