console.log('Welcome pranay')

var a1 = 10;
let b1 = 20;
const c1 = 30;

console.log("print var variable",a1)
console.log("print var variable",b1)
console.log("print var variable",c1)

var fristname = 'pranay'
let lastname = 'aletti'
console.log(fristname,lastname)



var a = 10;
var b = "10";
if (a==b){
    console.log("values are same");
}else{
    console.log("values are differnet");
}


if (a === b){
    console.log("values are same and datatypes are same also")
}else{
    console.log("values are same but dataypes are diffferent")
}



console.log("1 -10 numbers:")
for (let i = 1 ; i< 11;i++){
    if (i%2 == 0){console.log(i);}
    
}

var day = 3

switch(day){
    case 1:
        console.log('Sunday')
        break
    case 2:
        console.log('Monday')
        break
    default:
        console.log('Weekend')

}


let studentList = [1,2,3,4,5];
console.log(studentList[0])

console.log('printing items in list')
studentList.forEach((item)=>{
    console.log(item)
})




console.log('object creation')
let student = {
    frist_name : "Pranay",
    last_name : "Aletti",
    id : "4025",
    age : 21,
    branch:"CSE",
    cgpa:8.5
}

console.log(student.age);



// add values and update values
console.log(student)
student.college = "SRU"
console.log(student)



// function 

function add(a,b){
    return a+b
}

ans = add(5,6)
console.log('normal function :',ans)

let studentList1 = [1,2,3,4,5];
console.log(studentList1[0])

console.log('arrow function :')
console.log('printing items in list')
studentList1.forEach((item)=>{
    console.log(item)
})


//call backs
// asynchronous java script




// synchronous call back
function performOperation(a,b,callback){
    let result = a+b;
    // call the provided call back funciton
    // passing the result to it
    callback(result);
}

function handleResult(sum){
    console.log("The result of operation is :",sum);
}

performOperation(10,5,handleResult);


//asynchronous callback

console.log("start of script");
setTimeout(function(){
    console.log("This message appears after 2 seconds delay");
},2000);

console.log("End of script");





// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))


// function fetchData(url, callback) {
//   fetch(url)
//     .then(response => response.json())
//     .then(data => callback(data))
//     .catch(error => console.error('Error:', error));
// }

// function displayData(data) {
//     console.log('')
//   console.log('Data received:', data);
//   console.log(' ')
// }

// fetchData('https://jsonplaceholder.typicode.com/todos/1', displayData);


async function getdata() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1'
    try{
        const data = await fetch(url);
        const result = await data.json();
        console.log(result);
        
    }catch(e){
        console.log(e);
    }
}

getdata();
