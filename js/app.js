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
    if (document.getElementById('display').value=="0") {
      document.getElementById('display').innerHTML = String(numero);
    }
    else{
      document.getElementById('display').innerHTML += String(numero);
    }

  }

}

var calculadora = {
  init : function(){
    this.asiganarEventos();
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
  },
  asiganarEventos : function(){
    var items = document.querySelectorAll("[class^='tecla']");
    for (var i = 0; i < items.length; i++) {
      items[i].onclick = this.eventoIngresarNumero;
      items[i].onmousedown = this.eventoDisminuirTamano;
      items[i].onmouseup = this.eventoAumentarTamano;
    }
  }


}

calculadora.init();
