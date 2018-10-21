var calculadora = {
  init: function(){
    sessionStorage.setItem("calculo_calculadora", "0");
    sessionStorage.setItem("mem_operador", "");
    this.eventocapturarmouse();
  },
  eventocapturarmouse: function(){

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

    on.addEventListener('mousedown', this.cambioclic);
    on.addEventListener('mouseup', this.soltarclic);
    on.addEventListener('mouseout', this.soltarclic);
    on.addEventListener('click', this.eventoclic);
    menos.addEventListener('mousedown', this.cambioclic);
    menos.addEventListener('mouseup', this.soltarclic);
    menos.addEventListener('mouseout', this.soltarclic);
    menos.addEventListener('click', this.operaciones_cal);
    por.addEventListener('mousedown', this.cambioclic);
    por.addEventListener('mouseup', this.soltarclic);
    por.addEventListener('mouseout', this.soltarclic);
    por.addEventListener('click', this.operaciones_cal);
    sing.addEventListener('mousedown', this.cambioclic);
    sing.addEventListener('mouseup', this.soltarclic);
    sing.addEventListener('mouseout', this.soltarclic);
    sign.addEventListener('click', this.eventoclic);
    raiz.addEventListener('mousedown', this.cambioclic);
    raiz.addEventListener('mouseup', this.soltarclic);
    raiz.addEventListener('mouseout', this.soltarclic);
    raiz.addEventListener('click', this.operaciones_cal);
    dividido.addEventListener('mousedown', this.cambioclic);
    dividido.addEventListener('mouseup', this.soltarclic);
    dividido.addEventListener('mouseout', this.soltarclic);
    dividido.addEventListener('click', this.operaciones_cal);
    n7.addEventListener('mousedown', this.cambioclic);
    n7.addEventListener('mouseup', this.soltarclic);
    n7.addEventListener('mouseout', this.soltarclic);
    n7.addEventListener('click', this.eventoclic);
    n8.addEventListener('mousedown', this.cambioclic);
    n8.addEventListener('mouseup', this.soltarclic);
    n8.addEventListener('mouseout', this.soltarclic);
    n8.addEventListener('click', this.eventoclic);
    n9.addEventListener('mousedown', this.cambioclic);
    n9.addEventListener('mouseup', this.soltarclic);
    n9.addEventListener('mouseout', this.soltarclic);
    n9.addEventListener('click', this.eventoclic);
    n1.addEventListener('mousedown', this.cambioclic);
    n1.addEventListener('mouseup', this.soltarclic);
    n1.addEventListener('mouseout', this.soltarclic);
    n1.addEventListener('click', this.eventoclic);
    n2.addEventListener('mousedown', this.cambioclic);
    n2.addEventListener('mouseup', this.soltarclic);
    n2.addEventListener('mouseout', this.soltarclic);
    n2.addEventListener('click', this.eventoclic);
    n3.addEventListener('mousedown', this.cambioclic);
    n3.addEventListener('mouseup', this.soltarclic);
    n3.addEventListener('mouseout', this.soltarclic);
    n3.addEventListener('click', this.eventoclic);
    n4.addEventListener('mousedown', this.cambioclic);
    n4.addEventListener('mouseup', this.soltarclic);
    n4.addEventListener('mouseout', this.soltarclic);
    n4.addEventListener('click', this.eventoclic);
    n5.addEventListener('mousedown', this.cambioclic);
    n5.addEventListener('mouseup', this.soltarclic);
    n5.addEventListener('mouseout', this.soltarclic);
    n5.addEventListener('click', this.eventoclic);
    n6.addEventListener('mousedown', this.cambioclic);
    n6.addEventListener('mouseup', this.soltarclic);
    n6.addEventListener('mouseout', this.soltarclic);
    n6.addEventListener('click', this.eventoclic);
    n0.addEventListener('mousedown', this.cambioclic);
    n0.addEventListener('mouseup', this.soltarclic);
    n0.addEventListener('mouseout', this.soltarclic);
    n0.addEventListener('click', this.eventoclic);
    punto.addEventListener('mousedown', this.cambioclic);
    punto.addEventListener('mouseup', this.soltarclic);
    punto.addEventListener('mouseout', this.soltarclic);
    punto.addEventListener('click', this.eventoclic);
    igual.addEventListener('mousedown', this.cambioclic);
    igual.addEventListener('mouseup', this.soltarclic);
    igual.addEventListener('mouseout', this.eventoclic);
    igual.addEventListener('click', this.operaciones_cal);
    mas.addEventListener('mousedown', this.cambioclic);
    mas.addEventListener('mouseup', this.soltarclic);
    mas.addEventListener('mouseout', this.soltarclic);
    mas.addEventListener('click', this.operaciones_cal);
  },
  cambioclic: function(evt){
    // Cuando se tiene presinada boton del mouse
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
  },
  soltarclic: function(evt){
    // Cuando se suelta el mouse
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
  },
  eventoclic: function(evt){
    // Cuando se tiene presinada boton del mouse
    var objeto=evt.target;
    var ids=objeto.id;
    if (ids=="on" || ids=="igual" || ids=="mas" || ids=="menos" || ids=="por" || ids=="sign"  || ids=="raiz"  || ids=="dividido"){

    if (ids=="on"){
        document.getElementById('display').innerHTML='0';
        }
    if (ids=="sign"){
          var numero=document.getElementById('display').innerHTML;
        if (numero != "0"){
          if ((numero.toString()).indexOf("-") < 0){                      var resfinal="-"+numero;
            }else {
              var resfinal=numero.replace("-","");
            }
            document.getElementById('display').innerHTML=resfinal;
          }
        }

        if (ids=="igual"){
          this.operacionescalculadora(ids);
        }
        if (ids=="mas"){
          this.operaciones_cal("ids");
        }
        if (ids=="menos"){
          this.operacionescalculadora(ids);
        }
        if (ids=="por"){
          this.operacionescalculadora(ids);
        }
        if (ids=="raiz"){
          this.operacionescalculadora(ids);
        }
        if (ids=="dividido"){
          this.operacionescalculadora(ids);
        }

      }else {
          //alert(ids);
          var num2=0;
          var numero=0; numero=document.getElementById('display').innerHTML;
          if (numero.length < 8){
            if (numero==0){
                if (ids=="punto" ){
                document.getElementById('display').innerHTML=".";
                }else {
                document.getElementById('display').innerHTML=ids;
                }
              }else {
                num2=ids;
                if (ids=="punto" ){
                  if ((numero.toString()).indexOf(".") < 0){
                      var resfinal=numero.concat(".");
                    }else {
                      var resfinal=numero;
                    }
                }
                else {
                  var resfinal=numero.concat(num2);
                }
                document.getElementById('display').innerHTML=resfinal;
            }
          }
      }
  },
  operaciones_cal: function(evt){
    var objeto=evt.target;
    var ids=objeto.id;
    numero=document.getElementById('display').innerHTML;

      if ((numero * 1) > 0 || numero.length > 1)
      {

        if (ids == "igual")
        {

            var mem_operador = sessionStorage.getItem("mem_operador");
            var mem_calculadora = sessionStorage.getItem("calculo_calculadora");
            mem_calculadora=mem_calculadora.concat(numero);

            if (mem_operador=="mas")
            {
              operandos = mem_calculadora.split("+");
              var n1=operandos[0];
              var n2=operandos[1];
              var resultadocalculadora= parseFloat(n1) + parseFloat(n2);
              document.getElementById('display').innerHTML=resultadocalculadora;
            }
            if (mem_operador=="menos")
            {
              operandos = mem_calculadora.split("-");
              var n1=operandos[0];
              var n2=operandos[1];
              if (n1=="")
              {
                n1=-n2;
                n2=operandos[2];
                if (n2=="")
                {
                  n2=-operandos[3];
                }
              }
              if (n2=="") n2=-operandos[2];
              var resultadocalculadora= parseFloat(n1) - parseFloat(n2);
              alert(resultadocalculadora);
              document.getElementById('display').innerHTML=resultadocalculadora;
            }
            if (mem_operador=="dividido")
            {
             operandos = mem_calculadora.split("/");
              var n1=operandos[0];
              var n2=operandos[1];
              var resultadocalculadora= parseFloat(n1) / parseFloat(n2);
              document.getElementById('display').innerHTML=resultadocalculadora;
            }
            if (mem_operador=="por")
            {
              operandos = mem_calculadora.split("*");
              var n1=operandos[0];
              var n2=operandos[1];
              var resultadocalculadora= parseFloat(n1) * parseFloat(n2);
              document.getElementById('display').innerHTML=resultadocalculadora;            }
            if (mem_operador=="raiz")
            {
              operandos = mem_calculadora.split("r");
              var n1=operandos[0];
              var n2=operandos[1];
              var resultadocalculadora= Math.pow(parseFloat(n1), parseFloat(n2));
              document.getElementById('display').innerHTML=resultadocalculadora;

            }
            //guardando a sessionStorage
            sessionStorage.setItem("calculo_calculadora", "0");
            sessionStorage.setItem("mem_operador", "");
        }
        //final de igual
        var mem_operador = sessionStorage.getItem("mem_operador");
        if (mem_operador =="")
        {
          if (ids=="mas"){
            var mem_operador = sessionStorage.getItem("mem_operador");
              var mem_calculadora=numero.concat("+");
              //guardando a sessionStorage
              sessionStorage.setItem("calculo_calculadora", mem_calculadora);
              sessionStorage.setItem("mem_operador", ids);
              document.getElementById('memoria').value=numero.concat("+");
              document.getElementById('display').innerHTML="";
          }
          if (ids=="menos"){
            var mem_calculadora=numero.concat("-");
            //guardando a sessionStorage
            sessionStorage.setItem("calculo_calculadora", mem_calculadora);
            sessionStorage.setItem("mem_operador", ids);
            document.getElementById('memoria').value=numero.concat("+");
            document.getElementById('display').innerHTML="";
          }
          if (ids=="por"){
            var mem_calculadora=numero.concat("*");
            //guardando a sessionStorage
            sessionStorage.setItem("calculo_calculadora", mem_calculadora);
            sessionStorage.setItem("mem_operador", ids);
            document.getElementById('memoria').value=numero.concat("+");
            document.getElementById('display').innerHTML="";
          }
          if (ids=="dividido"){
            var mem_calculadora=numero.concat("/");
            //guardando a sessionStorage
            sessionStorage.setItem("calculo_calculadora", mem_calculadora);
            sessionStorage.setItem("mem_operador", ids);
            document.getElementById('memoria').value=numero.concat("+");
            document.getElementById('display').innerHTML="";
          }
          if (ids=="raiz"){
            var mem_calculadora=numero.concat("r");
            //guardando a sessionStorage
            sessionStorage.setItem("calculo_calculadora", mem_calculadora);
            sessionStorage.setItem("mem_operador", ids);
            document.getElementById('memoria').value=numero.concat("+");
            document.getElementById('display').innerHTML="";
          }
        }
      }
  }
}


calculadora.init();
