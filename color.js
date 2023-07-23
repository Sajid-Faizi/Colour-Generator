let randomCode="#fff";
function changeColor(){
    let randomNumber = Math.floor(Math.random()*1677216);
    randomCode = "#"+randomNumber.toString(16);
     document.getElementById("color").style.backgroundColor=randomCode;
     console.log(randomCode);
}
 
function copyFun(){

    navigator.clipboard.writeText(randomCode);
} 