//Task 2

// async function Weather(){
//     const Fetch = await fetch('https://api.open-meteo.com/v1/forecast?latitude=31.224020&longitude=75.770798&current_weather=true')
//     const JSON = await Fetch.json();
//     console.log(JSON);
    
    
// } 
//  Weather()


//Task 3

// async function Func(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//                 resolve("Task Completed after 2 seconds");
//         }, 2000)
//     })
// }

// Func()
// .then((data)=>{
//     console.log(data)
// })
// .catch((error)=>{
//     console.log(error)
// })

//Task 4

// async function API1(){
//     try{
//         const data = await  fetch("https://jsonplaceholder.typicode.com/users")
//         if(!data.ok){
//             throw new Error("Problem in network")
//         }
//         return data.json()         
//     }
//     catch(error){
//         console.log("Problem in API1, ", error)
//     }
    
// }

// async function API2(){
//     try{
//         const data =  await fetch("https://jsonplaceholder.typicode.com/posts")
//         if(!data.ok){
//             throw new Error("network problem")
//         }
//         return data.json();
       
//     }
//     catch(error){
//         console.log("Problem in API2, ", error)
//     }
// }


// Promise.all([API1(), API2()]) 

// .then((data)=>{
//     console.log(data)
// })

// .catch((error)=>{
//     console.log(error)
// })

//Task 5

// async function API(){
//     try{
//         const Data = await fetch('https://invalid-api.com/data')
//         if(!Data.ok){
//             throw new Error("I think problem is in network or else in link provided")
//         }
//         const data = await Data.json()
//         return data;

//     }
//     catch(error){
//         console.log(error)
//         throw error
//     }
// }

// API()
// .then((response)=>{
//     console.log(response)
// })

// .catch((error)=>{
//     console.log("nenachen da gotha")
// })