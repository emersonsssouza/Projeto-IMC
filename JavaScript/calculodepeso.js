function Calcular() {
  let nome = document.getElementById("nome").value;
  let peso = document.getElementById("peso").value;
  let altura = document.getElementById("altura").value;
  let resultado = document.getElementById("res");

  let soma = (peso / (altura * altura)).toFixed(1);

  if (nome == "" && peso == "" && altura == "") {
    console.log("Insira os dados");
    resultado.innerHTML = "Complete os campos acima por favor!";
  } else if (soma < 18.5) {
    resultado.innerHTML = `${nome} seu IMC é ${soma} e voce esta abaixo do peso`;
  } else if (soma >= 18.5 && soma < 24.9) {
    resultado.innerHTML = `${nome} seu IMC é ${soma} e voce está com peso ideal. Parabens!!!`;
  } else if (soma >= 25 && soma < 29.9) {
    resultado.innerHTML = `${nome} seu IMC é ${soma} e voce está com Sobrepeso`;
  } else if (soma >= 30 && soma < 34.9) {
    resultado.innerHTML = `${nome} seu IMC é ${soma} e voce está com Obesidade grau 1`;
  } else if (soma >= 35 && soma < 39.9) {
    resultado.innerHTML = `${nome} seu IMC é ${soma} e voce está com Obesidade grau 2 (severa)`;
  } else {
    resultado.innerHTML = `${nome} seu IMC é ${soma} e voce está com Obesidade grau 3 (Morbida)`;
  }
  console.log(soma);
}

function limpar() {
  document.querySelector("#nome").value = "";
  document.querySelector("#altura").value = "";
  document.querySelector("#peso").value = "";
}
