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

window.oncontextmenu = (e)=>{

    // localStorage.removeItem("trans")

    e.preventDefault()
}

window.onload = ()=>{

    document.querySelector('h4').innerHTML = new Date().toDateString();

    let time = document.querySelector('#time')

    setInterval(()=>{

        let cT = new Date().toLocaleTimeString()

        time.innerHTML = cT

    }, 1000)
    

    let trans = JSON.parse(localStorage.getItem("trans")) || []

    let table = document.querySelector('table')
    
    trans.forEach(vals => {
        
   let tr = document.createElement('tr')

   table.appendChild(tr)

   let td1 = document.createElement('td')
   let td2 = document.createElement('td')
   let td3 = document.createElement('td')
   let td4 = document.createElement('td')

   td1.innerHTML = vals.type
   td2.innerHTML = vals.amount
   td3.innerHTML = vals.bal
   td4.innerHTML = vals.date

   tr.appendChild(td1)
   tr.appendChild(td2)
   tr.appendChild(td3)
   tr.appendChild(td4)

    });

    
}
