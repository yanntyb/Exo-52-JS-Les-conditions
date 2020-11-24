/* Modifier le code ci dessous pour réaliser l'exercice */
let x = prompt("x ?");
let y = prompt("y ?");

if(x === y){
    document.getElementById("monDiv").innerHTML = ("x = y")
}
else{
    document.getElementById("monDiv").innerText = ("x != y")
}
