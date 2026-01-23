let getNumber = 0;
document.getElementById("display").innerHTML = 0;


let num1 = 0
let num2 = 0
let additionOn = false;
const getText = (text) => {
    document.getElementById("display").innerHTML += text
    getNumber += text;
    

    if (text == '+') {
        additionOn = true
        document.getElementById("display").innerHTML = " "
    }
    if (additionOn) {
        if(text != '+')
            {num2 += text}
        
    }
    else {
        num1 += text
        // if (text != '+') {
        //     num2 = getNumber
        // }
    }
    console.log(getNumber)
    console.log("Num1 :" + num1)
    console.log("Num2 :" + num2)
}


const allClear = () => {
    document.getElementById("display").innerHTML = " "
    getNumber = ""
    num1 = 0
    num2 = 0
}

const add = () => {
    document.getElementById("display").innerHTML = " "
}
