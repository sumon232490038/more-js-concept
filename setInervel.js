console.log(1)
console.log(2)
console.log(4)
console.log(5)
console.log(6)

let num = 0;

 const clockId = setInterval ( () => {
    
    num++;
    if(num > 10) {
        clearInterval(clockId)
    }
    
    console.log(num)



},500)
