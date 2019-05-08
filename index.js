function getValue(){
    let value1 = parseInt(document.querySelector("#value1").value);
    let value2 = parseInt(document.querySelector("#value2").value);
    return [value1,value2];
}

function add(){
    let values = getValue();
    let ans = values[0]+values[1];
    document.querySelector("#answer").innerHTML=ans;
}

function min(){
    let values = getValue();
    let ans = values[0]-values[1];
    document.querySelector("#answer").innerHTML=ans;
}

function mul(){
    let values = getValue();
    let ans = values[0]*values[1];
    document.querySelector("#answer").innerHTML=ans;
}

function div(){
    let values = getValue();
    let ans = values[0]/values[1];
    document.querySelector("#answer").innerHTML=ans;
}