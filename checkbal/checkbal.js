document.querySelector('#logout').onclick = ()=>{

    window.location.href = "../index.html"
}

document.querySelector('#widthdraw').onclick = ()=>{

    window.location.href = "../widthdraw/widthdraw.html"
}

document.querySelector('#deposit').onclick = ()=>{

    window.location.href = "../deposit/deposit.html"
}

document.querySelector('#history').onclick = ()=>{

    window.location.href = "../history/history.html"
}

window.onload = ()=>{

    document.querySelector('#dit').innerHTML = new Date().toDateString();

    setTimeout(()=>{

        document.querySelector('#display').innerHTML = "Checking your balance..."

        setTimeout(()=>{

            const balance = new Check()

            document.querySelector('#display').innerHTML = "Your balance is " + balance.checkbal() + " pesos"

        }, 1500)

    }, 1500)
    
   
}

window.oncontextmenu = (e)=>{

    e.preventDefault()
}

let time = document.querySelector('#time')

    setInterval(()=>{

        let cT = new Date().toLocaleTimeString()

        time.innerHTML = cT

    }, 1000)