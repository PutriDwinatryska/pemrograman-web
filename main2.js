var input = document.getElementById('input');
var result = document.getElementById('result');
var inputtype = document.getElementById('inputtype');
var resultype = document.getElementById('resulttype');
var inputtypevalue,resulttypevalue;

input.addEventListener("keyup",myresult);
inputtype.addEventListener("change",myresult);
resulttype.addEventListener("change",myresult);

inputtypevalue = inputtype.value;
resulttypevalue = resulttype.value;

function myresult(){

    inputtypevalue = inputtype.value;
    resulttypevalue = resulttype.value;

    if(inputtypevalue === "meter" && resulttypevalue==="kilometer"){

        result.value = number(input.value) * 0.001;
    }else if(inputtypevalue === "meter" && resulttypevalue=== "centimeter"){
        result.value = number(input.value) * 100;

    }else if (inputtypevalue ==="meter" && resulttypevalue==="meter"){
        result.value = input.value
    }

    if(inputtypevalue === "kilometer" && resulttypevalue==="meter"){

        result.value = number(input.value) * 1000;
    }else if(inputtypevalue === "kilometer" && resulttypevalue=== "centimeter"){
        result.value = number(input.value) * 100000;

    }else if (inputtypevalue ==="kilometer" && resulttypevalue==="kilometer"){
        result.value = input.value
    }

    if(inputtypevalue === "centimeter" && resulttypevalue==="kilometer"){

        result.value = number(input.value) * 0.00001;
    }else if(inputtypevalue === "centimeter" && resulttypevalue=== "kilometer"){
        result.value = number(input.value) * 0.01

    }else if (inputtypevalue ==="centimeter" && resulttypevalue==="centimeter"){
        result.value = input.value


}