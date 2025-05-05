document.querySelector('button').onclick = ()=>{

    let widthdrawAmount = parseFloat(document.querySelector('#aWid').value)

        let balance = parseFloat(localStorage.getItem("balance"))

        if(balance <= 0 || balance < widthdrawAmount){

            alert("Insufficient balance")
        }else{

            const widthdraw = new Widthdraw(balance, widthdrawAmount)
            
            widthdraw.execute()
           
            widthdraw.thanksW()
           
        }
        
        document.querySelector('#aWid').value = ""

}

document.querySelector("input").oninput = ()=>{

    document.querySelector('button').style.color = "rgb(0, 0, 0)"
    document.querySelector('button').style.backgroundColor = "rgb(54, 212, 54)"
    document.querySelector('button').disabled = false
}

//para sa mga buttons or navigations
document.querySelector('#logout').onclick = ()=>{

    window.location.href = "../index.html"
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

//para sa dates
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