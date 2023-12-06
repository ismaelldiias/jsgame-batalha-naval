function clicar(valor){
valor = Number(valor);
if(valor == numberAleatorio){
for (let i = 0;i<document.getElementsByTagName("h2").length;i++){
document.getElementsByTagName("h2")[i].setAttribute("style","background-color: initial");
document.getElementsByTagName("h2")[i].innerHTML = "";
}
document.getElementsByClassName("quadrado")[valor].innerHTML = "&#128674";
}
else{
document.getElementsByClassName("quadrado")[valor].setAttribute("style","background-color: initial");
}
}

let numberAleatorio = Math.trunc(Math.random()*document.getElementsByClassName("quadrado").length);