// getnumber
function number(num){
    var result = document.getElementById("enter");
    result.value+=num;
}

// getresult
function result(){
    var result = document.getElementById("enter");
    result.value=eval(result.value)
}

// clear result
function clearResult(){
    var result= document.getElementById("enter");
    result.value="";
}
function deletesingle(){
    var number = document.getElementById("enter");
    var remove = number.value;
    remove = remove.slice(0,-1);//remove last character from  a string
    number.value=remove;
}