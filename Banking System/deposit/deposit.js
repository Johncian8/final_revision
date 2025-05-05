document.querySelector("input").oninput = ()=>{

    document.querySelector('button').style.backgroundColor = "rgb(54, 212, 54)"
    document.querySelector('button').style.color = "rgb(0, 0, 0)"
    document.querySelector('button').disabled = false
}

document.querySelector('button').onclick = ()=>{

    let depositAmount = parseFloat(document.querySelector('#aDep').value)
    
    let balance = parseFloat(localStorage.getItem("balance"))

    const widthdraw = new Deposit(balance, depositAmount)

    widthdraw.execute()

    widthdraw.thanksD()

    document.querySelector('#aDep').value = ""

}

//para sa mga buttons or navigations
document.querySelector('#logout').onclick = ()=>{

    window.location.href = "../index.html"
}

document.querySelector('#widthdraw').onclick = ()=>{

    window.location.href = "../widthdraw/widthdraw.html"
}

document.querySelector('#checkbal').onclick = ()=>{

    window.location.href = "../checkbal/checkbal.html"
}

document.querySelector('#history').onclick = ()=>{

    window.location.href = "../history/history.html"
}

//yung date sa taas
window.onload = ()=>{

    document.querySelector('h4').innerHTML = new Date().toDateString()
}

window.oncontextmenu = (e)=>{

    e.preventDefault()
}

let time = document.querySelector('#time')

    setInterval(()=>{

        let cT = new Date().toLocaleTimeString()

        time.innerHTML = cT

    }, 1000)