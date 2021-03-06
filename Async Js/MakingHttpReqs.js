const request = new XMLHttpRequest();
//we are creating a request object here
//this req obj can work with any kind of data


request.addEventListener('readystatechange', () => {
  // console.log(request);
  if(request.readyState === 4 && request.status === 200){
    console.log(request.responseText);
    //here in the responseText lies all our data
     
  } else if (request.readyState === 4){
    console.log('could not fetch the data');
  }
});

//when we want to get data, we make a get request
// first method is the open req which takes 2 paramenter, first is the string denoting the type pf request we want to make
//second is the link or api endpoint

request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
//this above step is just setting up the request

request.send();
// in this step we get our data but this is not visible
//to access this data goto line 6




