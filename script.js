var ganar = document.getElementById("ganar");
const container = document.getElementById("container");



var cell11 ={
  position: document.getElementById("cell-11"),
  estado: 0
}

var cell12 ={
  position: document.getElementById("cell-12"),
  estado: 0
}

var cell13 ={
  position: document.getElementById("cell-13"),
  estado: 0
}

var cell21 ={
  position: document.getElementById("cell-21"),
  estado: 0
}

var cell22 ={
  position: document.getElementById("cell-22"),
  estado: 0
}

var cell23 ={
  position: document.getElementById("cell-23"),
  estado: 0
}

var cell31 ={
  position: document.getElementById("cell-31"),
  estado: 0
}

var cell32 ={
  position: document.getElementById("cell-32"),
  estado: 0
}

var cell33 ={
  position: document.getElementById("cell-33"),
  estado: 0
}


var celdas = [cell11, cell12, cell13, cell21, cell22, cell23, cell31, cell32, cell33];

var click = 1;


/*------------------------------------------------------------------------------------------------------------------------------------------------------------*/
function parImpar(click) {
  if(click % 2 == 0) {
    return true;
  }
  else {
    return false;
  }
}

function ganador (){
	ganar.style.display = "flex";
    container.style.filter = "blur(10px)";
 	if(celdas[j].estado == 1){
		ganar.innerHTML = "Gano Circulo";
    } else {
    	ganar.innerHTML = "Gano Cruz";
    }
}


function comprobar(){
  if (celdas[0].estado == celdas[1].estado && celdas[2].estado == celdas[1].estado && celdas[0].estado == celdas[2].estado && celdas[0].estado!=0) {
    j = 0;
    ganador();
  } else if (celdas[0].estado == celdas[3].estado && celdas[3].estado == celdas[6].estado && celdas[0].estado == celdas[6].estado && celdas[0].estado!=0) {
    j = 0;
    ganador();
  } else if (celdas[0].estado == celdas[4].estado && celdas[4].estado == celdas[8].estado && celdas[0].estado == celdas[8].estado && celdas[0].estado!=0) {
    j = 0;
    ganador();
  } else if (celdas[1].estado == celdas[4].estado && celdas[4].estado == celdas[7].estado && celdas[1].estado == celdas[7].estado && celdas[1].estado!=0) {
    j = 1;
    ganador();
  } else if (celdas[2].estado == celdas[5].estado && celdas[5].estado == celdas[8].estado && celdas[2].estado == celdas[8].estado && celdas[2].estado!=0) {
    j = 2;
    ganador();
  } else if (celdas[2].estado == celdas[4].estado && celdas[4].estado == celdas[6].estado && celdas[2].estado == celdas[6].estado && celdas[2].estado!=0) {
    j = 2;
    ganador();
  } else if (celdas[3].estado == celdas[4].estado && celdas[4].estado == celdas[5].estado && celdas[3].estado == celdas[5].estado && celdas[3].estado!=0) {
    j = 3;
    ganador();
  } else if (celdas[6].estado == celdas[7].estado && celdas[7].estado == celdas[8].estado && celdas[6].estado == celdas[8].estado && celdas[6].estado!=0) {
    j = 6;
    ganador();
  }
}

function madre(i){
  valor = parImpar(click);
  if (celdas[i].estado == 0) {
    if(valor){
      celdas[i].position.style.backgroundImage = "url('./circulo.png')"; 
      celdas[i].estado = 1;
      click ++;
      comprobar();
    } else {
      celdas[i].position.style.backgroundImage = "url('./cruz.png')";
      celdas[i].estado = 2;
      click ++;
      comprobar();
    }
  } else {
    //alert('Ya tocaste aca');
  }
}

function hover(i){
	if(click % 2 == 0){
		celdas[i].position.style.backgroundImage = "url('./circulo_hover.png')";
	} else {
		celdas[i].position.style.backgroundImage = "url('./cruz_hover.png')";
	}
}
/*------------------------------------------------------------------------------------------------------------------------------------------------------------*/
celdas[0].position.onclick = function(){
  var i = 0;
  madre(i);
}

celdas[0].position.onmouseover = function(){
	var i = 0;
	if(celdas[i].estado == 0 ){
		hover(i);
	}
}

celdas[0].position.onmouseout = function(){
	var i = 0;
	if(celdas[i].estado == 0){
		celdas[i].position.style.backgroundImage = "";
	}
}

celdas[1].position.onclick = function(){
  var i = 1;
  madre(i);
}

celdas[1].position.onmouseover = function(){
	var i = 1;
	if(celdas[i].estado == 0 ){
		hover(i);
	}
}

celdas[1].position.onmouseout = function(){
	var i = 1;
	if(celdas[i].estado == 0){
		celdas[i].position.style.backgroundImage = "";
	}
}

celdas[2].position.onclick = function(){
  var i = 2;
  madre(i);
}

celdas[2].position.onmouseover = function(){
	var i = 2;
	if(celdas[i].estado == 0 ){
		hover(i);
	}
}

celdas[2].position.onmouseout = function(){
	var i = 2;
	if(celdas[i].estado == 0){
		celdas[i].position.style.backgroundImage = "";
	}
}

celdas[3].position.onclick = function(){
  var i = 3;
  madre(i);
}

celdas[3].position.onmouseover = function(){
	var i = 3;
	if(celdas[i].estado == 0 ){
		hover(i);
	}
}

celdas[3].position.onmouseout = function(){
	var i = 3;
	if(celdas[i].estado == 0){
		celdas[i].position.style.backgroundImage = "";
	}
}
celdas[4].position.onclick = function(){
  var i = 4;
  madre(i);
}

celdas[4].position.onmouseover = function(){
	var i = 4;
	if(celdas[i].estado == 0 ){
		hover(i);
	}
}

celdas[4].position.onmouseout = function(){
	var i = 4;
	if(celdas[i].estado == 0){
		celdas[i].position.style.backgroundImage = "";
	}
}

celdas[5].position.onclick = function(){
  var i = 5;
  madre(i);
}

celdas[5].position.onmouseover = function(){
	var i = 5;
	if(celdas[i].estado == 0 ){
		hover(i);
	}
}

celdas[5].position.onmouseout = function(){
	var i = 5;
	if(celdas[i].estado == 0){
		celdas[i].position.style.backgroundImage = "";
	}
}


celdas[6].position.onclick = function(){
  var i = 6;
  madre(i);
}

celdas[6].position.onmouseover = function(){
	var i = 6;
	if(celdas[i].estado == 0 ){
		hover(i);
	}
}

celdas[6].position.onmouseout = function(){
	var i = 6;
	if(celdas[i].estado == 0){
		celdas[i].position.style.backgroundImage = "";
	}
}

celdas[7].position.onclick = function(){
  var i = 7;
  madre(i);
}

celdas[7].position.onmouseover = function(){
	var i = 7;
	if(celdas[i].estado == 0 ){
		hover(i);
	}
}

celdas[7].position.onmouseout = function(){
	var i = 7;
	if(celdas[i].estado == 0){
		celdas[i].position.style.backgroundImage = "";
	}
}

celdas[8].position.onclick = function(){
  var i = 8;
  madre(i);
}

celdas[8].position.onmouseover = function(){
	var i = 8;
	if(celdas[i].estado == 0 ){
		hover(i);
	}
}

celdas[8].position.onmouseout = function(){
	var i = 8;
	if(celdas[i].estado == 0){
		celdas[i].position.style.backgroundImage = "";
	}
}

function reiniciar(celdas){
  click = 1;
  ganar.style.display = "";
  container.style.filter = "blur()";
  for (var z = 0; z < celdas.length; z++) {
    celdas[z].estado = 0;
    celdas[z].position.style.backgroundImage = "";
  }
  
}
