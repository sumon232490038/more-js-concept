

const propost = ()  => {
    return new Promise ((resolve,reject) => {
        const success = Math.random()
        if(success < 0.5){
            resolve(success)
        }
        else{
            reject(success)
        }
    })
}


propost()
.then(data => console.log("resolve",data))
.catch(data2 => console.log('rejects',data2))



async function promisearray(){
    try{
        const data4 = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data5 = await data4.json()
    console.log(data5)
    }
    catch(data){
        console.log("sorry")

    }
}

// promisearray()