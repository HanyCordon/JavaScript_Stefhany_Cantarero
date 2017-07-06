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
function sumar() {

}

function ingresarNumero(elemento) {
  var numero = parseInt(elemento.id);
  var pantalla =document.getElementById('display');
  if (isNaN(numero))
  {
    if (elemento.id=="on") {
      this.limpiar();
    }
    else if (elemento.id=="mas") {
      this.sumar();
    }
  }
  else
  {
    if (pantalla.innerHTML=="0") {
      pantalla.innerHTML = String(numero);
    }
    else
    {
      pantalla.innerHTML += String(numero);
    }
    if (pantalla.innerHTML.length>7 && pantalla.innerHTML.length<=10) {
      pantalla.style.fontSize = "4vw";
    }
    else if (pantalla.innerHTML.length>10) {
      pantalla.innerHTML = pantalla.innerHTML;
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
