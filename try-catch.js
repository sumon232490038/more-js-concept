const cheakAge=()=>{

    const step1 = document.getElementById('input')
    const step2 = step1.value
    const step3= document.getElementById('error')
    try{
        const age = parseInt(step2)
        if (isNaN(age)){
            throw "this is not read able it"
        }
        if(age > 33){
            throw  'hello ami throw'
        }
      
    }
    catch(err){
        step3.innerHTML = "ERROR " + err
    }
    finally{
        console.log("bangladesh")
    }

}