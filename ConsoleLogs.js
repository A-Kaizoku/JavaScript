function func1(){
    console.time('YourCodeTook');
    var a=10;
    console.log(a);
    console.log('Hello User');
    console.log(a+15);
    // document.write(a+20); this line transforms the click buuton in number 30
    console.log({harry:"English",marks:34});
    var b={harry:"English",marks:34};
    console.log(typeof(b));

    console.log([3,2,5,6,8])

    //lets use console.table
    console.table({harry:"English",marks:34});

    //console.warn this creates a warning in the console
    console.warn("this is a warning");

    //it clears the console window
    //console.clear();

    //what if you want to calculate the time taken to run the above code
    //lets go to the top first and write console.time('Your Code Took')
    console.timeEnd('YourCodeTook');

    //putting condition in console.log
    console.assert(12<2," 12<2 is not possible");
}