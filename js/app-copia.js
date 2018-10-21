var calculadora = {
  init: function(){

  },
  eventocapturarmouse: function(){

  },
  eventobotonesclic: function(evt){
    // poner todo del botones para cambiar tamano al hacerclic
  }
}



function cambioclic(evt){
//  alert("Hola");
var objeto=evt.target;
var ids=objeto.id;

      if (ids=="1" || ids=="2" || ids=="3" || ids=="0" || ids=="igual" || ids=="punto")
      {
        document.getElementById(ids).style="width:28.8%; height: 58.91px;";
      }
      else
      {
        if (ids=="mas")
        {
          document.getElementById(ids).style="width:89%; height: 98%;";
        }
        else {
            document.getElementById(ids).style="width:21.8%; height: 58.91px;";
        }

      }
}

function soltarclic(evt){
//  alert("Hola");
var objeto=evt.target;
var ids=objeto.id;
if (ids=="1" || ids=="2" || ids=="3" || ids=="0" || ids=="igual" || ids=="punto")
{
  document.getElementById(ids).style="width:29%; height: 62.91px;";
}
else
{
  if (ids=="mas")
  {
    document.getElementById(ids).style="width:90%; height: 100%;";
  }
  else {
      document.getElementById(ids).style="width:22%; height: 62.91px;";
  }

}

}



var on  = document.getElementById('on');
var sing  = document.getElementById('sign');
var raiz  = document.getElementById('raiz');
var dividido  = document.getElementById('dividido');
var n7  = document.getElementById('7');
var n8  = document.getElementById('8');
var n9  = document.getElementById('9');
var por  = document.getElementById('por');
var n4  = document.getElementById('4');
var n5  = document.getElementById('5');
var n6  = document.getElementById('6');
var menos  = document.getElementById('menos');
var n1  = document.getElementById('1');
var n2  = document.getElementById('2');
var n3  = document.getElementById('3');
var n0  = document.getElementById('0');
var punto  = document.getElementById('punto');
var igual  = document.getElementById('igual');
var mas  = document.getElementById('mas');

on.addEventListener('mousedown', cambioclic);
on.addEventListener('mouseup', soltarclic);
menos.addEventListener('mousedown', cambioclic);
menos.addEventListener('mouseup', soltarclic);
por.addEventListener('mousedown', cambioclic);
por.addEventListener('mouseup', soltarclic);
sing.addEventListener('mousedown', cambioclic);
sing.addEventListener('mouseup', soltarclic);
raiz.addEventListener('mousedown', cambioclic);
raiz.addEventListener('mouseup', soltarclic);
dividido.addEventListener('mousedown', cambioclic);
dividido.addEventListener('mouseup', soltarclic);
n7.addEventListener('mousedown', cambioclic);
n7.addEventListener('mouseup', soltarclic);
n8.addEventListener('mousedown', cambioclic);
n8.addEventListener('mouseup', soltarclic);
n9.addEventListener('mousedown', cambioclic);
n9.addEventListener('mouseup', soltarclic);
n1.addEventListener('mousedown', cambioclic);
n1.addEventListener('mouseup', soltarclic);
n2.addEventListener('mousedown', cambioclic);
n2.addEventListener('mouseup', soltarclic);
n3.addEventListener('mousedown', cambioclic);
n3.addEventListener('mouseup', soltarclic);
n4.addEventListener('mousedown', cambioclic);
n4.addEventListener('mouseup', soltarclic);
n5.addEventListener('mousedown', cambioclic);
n5.addEventListener('mouseup', soltarclic);
n6.addEventListener('mousedown', cambioclic);
n6.addEventListener('mouseup', soltarclic);
n0.addEventListener('mousedown', cambioclic);
n0.addEventListener('mouseup', soltarclic);
punto.addEventListener('mousedown', cambioclic);
punto.addEventListener('mouseup', soltarclic);
igual.addEventListener('mousedown', cambioclic);
igual.addEventListener('mouseup', soltarclic);
mas.addEventListener('mousedown', cambioclic);
mas.addEventListener('mouseup', soltarclic);
