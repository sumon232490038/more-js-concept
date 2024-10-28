// setTimeout(()=> {
//     console.log("Assalamu alaykum vai ")
// },5000)

// const name1 = "Alice"
// const time1 = 2000;
// const delayedGreeting = (name1, dalay) => {
//     setTimeout(() => {
//         console.log("hello",name1)
        
//     }, dalay);
// }

// const calledit = delayedGreeting(name1,time1)
// console.log(calledit)


// function tellJoke() {
//     console.log("Why don't scientists trust atoms? Because they make up everything!");
//     }
    

//     const jokeInterval = setInterval(tellJoke,2000);
// // After 10 seconds, stop telling jokes
// setTimeout(() => {
// clearInterval(jokeInterval)
//  }, 10000);


async function phTask() {
    const step1 = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single')
    const step2 = await step1.json()
    console.log(step2.joke)
    
}

phTask()