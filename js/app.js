/*GLOBALES*/
var n1 =0, n2 = 0, resultado=0;
var operador;

function aumentarTamano(elemento)
{
  var id = elemento.id;
  if (elemento.id =="1" || elemento.id == "0" || elemento.id == "punto"
    || elemento.id == "2" || elemento.id == "3" || elemento.id == "igual")
  {
    elemento.style.width = "29%";
  }
  else if (elemento.id == "mas") {
    elemento.style.width ="90%"
  }
  else {
    elemento.style.width = "22%";
  }

}
function disminuirTamano(elemento)
{
  var id = elemento.id;
  if (elemento.id =="1" || elemento.id == "0" || elemento.id == "punto"
    || elemento.id == "2" || elemento.id == "3" || elemento.id == "igual" )
  {
    elemento.style.width = "28%";

  }
  else if (elemento.id == "mas") {
    elemento.style.width = "89%";
  }
  else {
    elemento.style.width = "21%";
  }
}

function limpiar()
{
  document.getElementById('display').innerHTML="0";
}

function ingresarNumero(elemento) {
  var numero = parseInt(elemento.id);
  var pantalla =document.getElementById('display');
  if (isNaN(numero))
  {
    if (elemento.id=="on") {
      this.limpiar();
    }
    else if (elemento.id=="mas" || elemento.id=="menos" || elemento.id=="por" ||
            elemento.id=="dividido") {
      n1 = parseFloat(pantalla.innerHTML);
      operador= elemento.id;
      /*pantalla.style.fontSize ="5em"*/
      pantalla.innerHTML = "0";
    }
    else if (elemento.id=="punto") {
      if(!pantalla.innerHTML.includes(".")){
        pantalla.innerHTML += ".";
      }
    }
    else if(elemento.id == "sign"){
      var valor = parseFloat(pantalla.innerHTML);
      pantalla.innerHTML = String(valor * -1);
    }
    else if (elemento.id="igual") {
      n2 = parseFloat(pantalla.innerHTML);
      switch (operador) {
        case "mas":
          resultado = n1 + n2;
          pantalla.innerHTML = String(resultado).substr(0,8);;
          break;
        case "menos":
          resultado = n1 - n2;
          pantalla.innerHTML = String(resultado).substr(0,8);;
          break;
        case "por":
          resultado = n1 * n2;
          pantalla.innerHTML = String(resultado).substr(0,8);;
          break;
        case "dividido":
          resultado = n1 / n2;
          pantalla.innerHTML = String(resultado).substr(0,8);;
          break;
        default:

      }
    }
  }
  else
  {
    if (pantalla.innerHTML=="0") {
      pantalla.innerHTML = String(numero);
    }
    else
    {
      if (pantalla.innerHTML.length<=7){
        pantalla.innerHTML += String(numero);
        /*if (pantalla.innerHTML.length>7) {
          pantalla.style.fontSize = "4vw";
        }*/
      }
    }
  }

}

var calculadora =
{
  init : function(){
    this.asiganarEventos();
  },
  asiganarEventos : function()
  {
    var items = document.getElementsByClassName("tecla");
    for (var i = 0; i < items.length; i++) {
      items[i].onmousedown = this.eventoDisminuirTamano;
      items[i].onmouseup = this.eventoAumentarTamano;
      items[i].onclick = this.eventoIngresarNumero;}
  },
  eventoAumentarTamano : function(event)
  {
    aumentarTamano(event.target);
  },
  eventoDisminuirTamano : function(event)
  {
    disminuirTamano(event.target);
  },
  eventoIngresarNumero : function(event)
  {
    ingresarNumero(event.target);
  }
}

calculadora.init();
