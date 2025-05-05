document.querySelector('#logout').onclick = ()=>{

    window.location.href = "../index.html"
}

document.querySelector('#widthdraw').onclick = ()=>{

    window.location.href = "../widthdraw/widthdraw.html"
}

document.querySelector('#deposit').onclick = ()=>{

    window.location.href = "../deposit/deposit.html"
}

document.querySelector('#checkbal').onclick = ()=>{

    window.location.href = "../checkbal/checkbal.html"
}

document.querySelector('#history').onclick = ()=>{

    window.location.href = "../history/history.html"
}

window.onload = ()=>{

    document.querySelector('h4').innerHTML = new Date().toDateString();

    let first = document.querySelector('#first')
    let second = document.querySelector('#second')

    let line1 = "This system is designed to help you manage your finances with ease and security"
    let line2 = "You can perform variety of banking operations"

    let fC = 0
    let sC = 0

    const fI = setInterval(()=>{

        first.innerHTML = first.innerHTML + line1[fC]

        fC++

        if(line1.length == fC){

            clearInterval(fI)
        }

    }, 50)

    setTimeout(()=>{

        const sI = setInterval(()=>{

            second.innerHTML = second.innerHTML + line2[sC]
    
            sC++
    
            if(line2.length == sC){
    
                clearInterval(sI)
            }
    
        }, 50)

    }, 4000)

    let time = document.querySelector('#time')

    setInterval(()=>{

        let cT = new Date().toLocaleTimeString()

        time.innerHTML = cT

    }, 1000)
    

}

window.oncontextmenu = (e)=>{

    e.preventDefault()
}

