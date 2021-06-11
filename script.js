function compute()
{
    if(valPrinci()) {
    var principal = document.getElementById("principal").value;
    document.getElementById("depAmt").innerText= `${principal},`;
    var rate = document.getElementById("rate").value;
    document.getElementById("intRate").innerText= `${rate} %.`
    var years = document.getElementById("years").value;
    var interest = Math.fround(principal * years * (rate / 100)).toFixed(2);
    document.getElementById("result").innerText= `${interest},`
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("calYear").innerText= `${year}`
    var reslt = document.querySelector(".clsResult");
    reslt.classList.remove("clsNoDisp");
    reslt.classList.add("clsDisp");
    }
}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
function valPrinci() {
    var principal = document.getElementById("principal").value;
    if((principal<=0) ) {
        alert("Enter a positive number");
        principal.focus();
        return false;
    }
    else {
        return true;
    }
}
        