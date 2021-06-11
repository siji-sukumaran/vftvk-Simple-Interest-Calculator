function compute()
{
    var reslt = document.querySelector(".clsResult");
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
        if (reslt.classList.contains("clsNoDisp")) {
            reslt.classList.remove("clsNoDisp");
            reslt.classList.add("clsDisp");
        }
    }
    else {
        if (reslt.classList.contains("clsDisp")) {
            reslt.classList.remove("clsDisp");
            reslt.classList.add("clsNoDisp");
        }
    }
}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=`${rateval} %`;
}
function valPrinci() {
    var principal = document.getElementById("principal").value;
    if((principal<=0) ) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }
    else {
        return true;
    }
}
        