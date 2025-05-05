class Account{

    constructor(balance){

        //Abstrantion
        if(this.constructor == Account){

            throw new Error("This cannot be stanciated")
        }

        this.balance = balance

        //kung ang balance na naka store sa local storage ng chrome is null or NaN gagawing default na 0 ang balance
        if(localStorage.getItem("balance") === null || isNaN(parseFloat(localStorage.getItem("balance")))){
    
            this.balance = 0
            localStorage.setItem("balance", 0)
        }else{

            balance = parseFloat(localStorage.getItem("balance"))
        }
    }

    //Polymorphism
    execute(){

        throw new Error("This must be override")
    }

    //Inheritance
    thanksW(){
        alert("Thank you for withdrawing " + this.wMoney + " pesos")
    }
    
    thanksD(){
        alert("Thank you for depositing " + this.dMoney + " pesos")
    }

}


class Widthdraw extends Account{

    constructor(balance, wMoney){

        super(balance)
        this.wMoney = wMoney
        
    }

    //na override na method galing kay super class
    execute(){


        if(this.wMoney <= 0){

            alert("Invalid amount")

        }else{

            
        if(this.balance < this.wMoney){

            alert("Insufficient balance")
        }else{

            let balance = this.balance - this.wMoney

            localStorage.setItem("balance", balance)

            saveHistory("Withdrawing", this.wMoney, new Date().toLocaleString(), balance)

        }

    }
}


}

class Deposit extends Account{

    constructor(balance, dMoney){

        super(balance)
        this.dMoney = dMoney
    }

    //na override na method galing kay super class
    execute(){

        if(this.dMoney <= 0){

            alert("Invalid amount")
        }else{

            let total = this.balance + this.dMoney

            localStorage.setItem("balance", total)

            saveHistory("Depositing", this.dMoney, new Date().toLocaleString(), total)
        }

    }
}

class Check extends Account{

    checkbal(){
        return localStorage.getItem("balance")
    }
}

function saveHistory(typeOfTrans, money, cDate, cBal){

    let trans = JSON.parse(localStorage.getItem("trans")) || []

    trans.push({

        type: typeOfTrans,
        amount: money,
        date: cDate,
        bal: cBal

    })

    localStorage.setItem("trans", JSON.stringify(trans))

}