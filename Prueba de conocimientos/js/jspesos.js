var pics = [
  "img/globo.png",
  "img/pez.png",
  "img/flor.png",
  "img/reloj.png",
  "img/llaves.png",
  "img/taza.png",
  "img/manzana.png",
  "img/balon.png",
  "img/libros.png",
  "img/pastel.png",
  "img/sapo.png",
  "img/bebe.png",
  "img/gallina.png",
  "img/gato.png",
  "img/perro.png",
  "img/bicicleta.png",
  "img/motoneta.png",
  "img/caballo.png",
  "img/carro.png",
  "img/elefante.png",
  "img/casa.png",
  "img/avion.png",
  "img/barco.png",
  "img/montana.png",
  "img/tierra.png",
  "img/tache.png",
  "img/paloma.png",

];
function rand(n) {
  return aleatorio = Math.round(Math.random()*n);
}

 var num1,num2;
 var showPic1=document.getElementById("pic1");
 var showPic2=document.getElementById("pic2");
function randPic(){
  hideButton()
  num1=rand(24);
  num2=rand(24);
  if(num1==num2){
    randPic();
  }
  showPic1.src=pics[num1];
  showPic2.src=pics[num2];

}

function showButton(){
  document.getElementById('buttonNext').style.display="block";
}
function hideButton(){
  document.getElementById('buttonNext').style.display="none";
}

var contOk=0;
var contFail=0;
function validatePic(opcion) {

  if(num1==25 || num1== 26 || num2==25 || num2==26){
    alert("No");
  }

  if(opcion=="opc1"){
    if(num1>num2){
      alert("Es correcto");
      showButton()
      contOk++;
      showPic1.src=pics[26];
      showPic2.src=pics[25];
      alert(contOk);
    }else{
      alert("es incorrecto");
      showButton()
      contFail++;
      showPic1.src=pics[25];
      showPic2.src=pics[26];
      alert(contFail);
    }
  }else if(opcion=="opc2"){
    if(num1<num2){
      alert("Es correcto");
      showButton()
      contOk++;
      showPic2.src=pics[26];
      showPic1.src=pics[25];
    }else{
      alert("Es incorrecto");
      showButton()
      contFail++;
      showPic2.src=pics[25];
      showPic1.src=pics[26];
      alert(contFail);
    }
  }


}
