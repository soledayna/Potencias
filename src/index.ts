let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let btnCalcular = document.getElementById("calcular");

let calcularPotencia = (bas:number,exp:number):number => {
  let resultado:number = 1;
  if (exp < 0){
    return console.log("Ingrese un exponente mayor o igual a cero");
  } else if (bas == 0){
    resultado = 1;
  } else for (let i:number=1;i<=exp;i++){
    resultado = resultado * bas;
  }
  return resultado;
}

btnCalcular.addEventListener("click", () => {
  let base:number= Number(dato1.value);
  let exponente:number= Number(dato2.value);
console.log ("La potencia es:", calcularPotencia (base,exponente));
}