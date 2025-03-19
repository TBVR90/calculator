function update(event) {
    value = event.target.value
    if(value == "A/C"){
        para.innerHTML = "0"
        val1 = ""
        val2 = ""
    }

    else if(value == "+") {
        val1 = para.innerHTML
        para.innerHTML = ""
        if(value === "enter"){
            val2 = para.innerHTML
            para.innerHTML = sum(val1, val2)
        }



    }

    else {
    if(para.innerHTML == "0"){
        para.innerHTML = ""
        
    }
    para.innerHTML += value
    }
    
}

function sum(val1, val2){
    return parseInt(val1) + parseInt(val2)
}
    
    
