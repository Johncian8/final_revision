let logInBtn = document.querySelector("#lbtn")
//Log in Area

//Encapsulation
class Credentials{
    
    #pinNumber
    
    constructor(pinNumber){
        
            this.#pinNumber = pinNumber
        }
        
        get pinNumber(){
            
            return this.#pinNumber
        }
        
    }
    
logInBtn.addEventListener('click', ()=>{

    if(parseFloat(localStorage.getItem("attemp")) >= 4){

        window.location.href = "welcome.html"
        localStorage.setItem("attemp", 0)
        alert("Please try again later")
    }
        
        let pinNumber = document.querySelector("#pinNumber").value
        
        //mas ok pag nasa database
        let systempinNumber = "123456"
        
        const userLogin = new Credentials(pinNumber)

        //Promise
        const promise = new Promise(
            (resolve, reject)=>{

            if(userLogin.pinNumber == systempinNumber){

                resolve("Login successfully")
            }else{
                
                reject("Login Failed")
            }
            
        }
    )
    
    promise.then((value)=>{
        
        localStorage.setItem("attemp", 0)
        window.location.href = "dashboard/dashboard.html"
        alert(value)
    }).catch((error)=>{

        alert(error)
    })

    localStorage.setItem("attemp", parseFloat(localStorage.getItem("attemp"))+1)
        
});

let dm = true;

window.oncontextmenu = (e)=>{
    
    e.preventDefault()
    let body = document.querySelector("body")
    let h1 = document.querySelector("h1")

    if(dm){
        
    body.style.backgroundColor = "black"
    h1.style.color = "white"
    dm = false
    }else{
    
    body.style.backgroundColor = "white"
    h1.style.color = "blue"
    dm = true
    }

}

window.onload = ()=>{

    const interv = setTimeout(() => {
        
        window.location.href = "welcome.html"
    }, 7000);

    window.onmousemove = ()=>{

    clearInterval(interv)
    }

    document.querySelector("#pinNumber").oninput = ()=>{

        clearInterval(interv)
        document.querySelector("#lbtn").disabled = false
    }

}