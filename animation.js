const pernas = document.querySelector(".pernas");
const botao = document.querySelector(".botao");
const flag = document.querySelector(".bandeira");
const flag2 = document.querySelector(".bandeira2");
const flag3 = document.querySelector(".bandeira3");
const trofeu = document.querySelector(".trofeu");
const win = document.querySelector(".win");
const nuvem = document.querySelector(".nuvem");
const predio = document.querySelector(".predio");
const predio2 = document.querySelector(".predio2");
const predio3 = document.querySelector(".predio3");
const bd1 = document.querySelector(".bd1");
const bd2 = document.querySelector(".bd2");
const bd3 = document.querySelector(".bd3");
const bd4 = document.querySelector(".bd4");


let contadorbandeira = 0;


function iniciarAnimacao(){

const imagens = ["./assets/right1.png", "./assets/right2.png", "./assets/right3.png", "./assets/right4.png"];
let index = 0;
const imgbandeiras= ["./assets/flag1.png","./assets/flag2.png","./assets/flag3.png","./assets/flag4.png","./assets/flag5.png","./assets/flag6.png","./assets/flag7.png",]
let indexbd = 0;


flag.style.animation = 'flag-animation 4s linear';
nuvem.style.animation = 'nuvens 40s linear';
predio.style.animation ='predioanimation 51s linear';
predio2.style.animation ='predio2animation 35s linear';
predio3.style.animation ='predio3animation 16s linear ';

const intervalo = setInterval(()=>{

  pernas.src = imagens[index];

 index++; 
  
    if (index >= imagens.length) {
      index = 0; 
    }
       
   
 
},250);

const intervalo2 = setInterval(()=>{

  flag.src = imgbandeiras[indexbd];

  indexbd++;
        
    if(indexbd >= imgbandeiras.length){
      indexbd = 0;
    }
 
},500);

 

const intervalId = setInterval(()=>{
  const flagposition = flag.offsetLeft;
  
  if(flagposition <= 3){
    flag.style.left= `15px`;
    flag.src= './assets/moeda.png';
    flag.style.width = '20px';
    flag.style.height = '15px';
    flag.style.animation ='animatecoin 1s ease-out';
    
    
       
  }

 
},10);

setTimeout(()=>{
    
  clearInterval(intervalId);
  botao.disabled = false;
 
},5000);


setTimeout(() => {
  
  clearInterval(intervalo);
  clearInterval(intervalo2);
    predio.style.animationPlayState ='paused';
    predio2.style.animationPlayState ='paused';
    predio3.style.animationPlayState ='paused';
    contadorbandeira+= 1;
  
}, 3800);

setTimeout(() => {
  
  flag.style.animation= 'none';
  nuvem.style.animationPlayState = 'paused';
  flag.style.display= 'none';
  if(contadorbandeira == 1){
    bd1.style.filter ='none';
    }
}, 4000);



}



function iniciarAnimacao2(){
  
  bd1.style.filter ='none';
  flag2.style.animation = 'flag-animation 4s linear';
  predio.style.animationPlayState ='running';
  predio2.style.animationPlayState ='running';
  predio3.style.animationPlayState ='running';
  nuvem.style.animationPlayState = 'running';

  
const imagens = ["./assets/right1.png", "./assets/right2.png", "./assets/right3.png", "./assets/right4.png"];
let index = 0;
const imgbandeiras= ["./assets/flag1.png","./assets/flag2.png","./assets/flag3.png","./assets/flag4.png","./assets/flag5.png","./assets/flag6.png","./assets/flag7.png",]
let indexbd = 0;

const intervalo = setInterval(()=>{

  pernas.src = imagens[index];

 index++; 
  
    if (index >= imagens.length) {
      index = 0; 
    }
       
   
 
},250);

const intervalo2 = setInterval(()=>{

  flag2.src = imgbandeiras[indexbd];

  indexbd++;
        
    if(indexbd >= imgbandeiras.length){
      indexbd = 0;
    }
 
},500);
  

  const intervalId2 = setInterval(()=>{

    const flagposition = flag2.offsetLeft;
    
    if(flagposition <= 3){
      flag2.style.left= `15px`;
      flag2.src= './assets/moeda.png';
      flag2.style.width = '20px';
      flag2.style.height = '15px';
      flag2.style.animation ='animatecoin 2s ease-out';
      
    }
     
   
  },10);

  
setTimeout(()=>{
    
  clearInterval(intervalId2);
  botao.disabled = false;     
 
},5000);


setTimeout(() => {
  
    clearInterval(intervalo);
    clearInterval(intervalo2);  
    predio.style.animationPlayState ='paused';
    predio2.style.animationPlayState ='paused';
    predio3.style.animationPlayState ='paused';
    contadorbandeira+= 1;
  
}, 3800);

setTimeout(() => {
  
  flag2.style.animation= 'none';
  nuvem.style.animationPlayState = 'paused';
  flag2.style.display= 'none';
  if(contadorbandeira == 2){
    bd2.style.filter ='none';
    }
}, 4000);


}

function iniciarAnimacao3(){
  
  bd1.style.filter ='none';
  bd2.style.filter ='none';
  flag3.style.animation = 'flag-animation 4s linear';
  trofeu.style.visibility ='visible';
  trofeu.style.animation = 'trofeu-animation  4s linear';
  predio.style.animationPlayState ='running';
  predio2.style.animationPlayState ='running';
  predio3.style.animationPlayState ='running';
  nuvem.style.animationPlayState = 'running';

  
const imagens = ["./assets/right1.png", "./assets/right2.png", "./assets/right3.png", "./assets/right4.png"];
let index = 0;
const imgbandeiras= ["./assets/flag1.png","./assets/flag2.png","./assets/flag3.png","./assets/flag4.png","./assets/flag5.png","./assets/flag6.png","./assets/flag7.png",]
let indexbd = 0;

const intervalo = setInterval(()=>{

  pernas.src = imagens[index];

 index++; 
  
    if (index >= imagens.length) {
      index = 0; 
    }
       
   
 
},250);

const intervalo2 = setInterval(()=>{

  flag3.src = imgbandeiras[indexbd];

  indexbd++;
        
    if(indexbd >= imgbandeiras.length){
      indexbd = 0;
    }
 
},500);
  

  const intervalId3 = setInterval(()=>{

    const flagposition = flag3.offsetLeft;
    
    if(flagposition <= 3){
      flag3.style.left= `15px`;
      flag3.src= './assets/moeda.png';
      flag3.style.width = '30px';
      flag3.style.height = '15px';
      flag3.style.animation ='animatecoin 2s ease-out';
      
    }
     
   
  },10);

  
setTimeout(()=>{
    
  clearInterval(intervalId3);
  botao.disabled = false;    
 
},5000);


setTimeout(() => {
  
    clearInterval(intervalo);
    clearInterval(intervalo2);  
    predio.style.animationPlayState ='paused';
    predio2.style.animationPlayState ='paused';
    predio3.style.animationPlayState ='paused';
    trofeu.classList.remove('trofeu');
    trofeu.classList.add('trofeu2');
    trofeu.style.visibility='visible';
    contadorbandeira+= 1;
  
}, 3800);

setTimeout(() => {
  
  flag3.style.animation= 'none';
  nuvem.style.animationPlayState = 'paused';
  flag3.style.display= 'none';
  if(contadorbandeira == 3){
    bd3.style.filter ='none';
    }
}, 4000);


}




function iniciarAnimacao4(){
  
  bd1.style.filter ='none';
  bd2.style.filter ='none';
  bd3.style.filter ='none';
  trofeu.style.animation = 'trofeu-animation2 4s linear';
  predio.style.animationPlayState ='running';
  predio2.style.animationPlayState ='running';
  predio3.style.animationPlayState ='running';
  nuvem.style.animationPlayState = 'running';

  
const imagens = ["./assets/right1.png", "./assets/right2.png", "./assets/right3.png", "./assets/right4.png"];
let index = 0;

const intervalo = setInterval(()=>{

  pernas.src = imagens[index];

 index++; 
  
    if (index >= imagens.length) {
      index = 0; 
    }
       
   
 
},250);
  

  const intervalId4 = setInterval(()=>{

    const trofeuposition = trofeu.offsetLeft;
    
    if(trofeuposition <= 3){
      trofeu.style.left= `15px`;
      trofeu.style.animation ='animatecoin 2s ease-out';
      
    }
     
   
  },10);

  
setTimeout(()=>{
    
  clearInterval(intervalId4);
  botao.disabled = false;
 
},5000);


setTimeout(() => {
  
    clearInterval(intervalo);
   
    predio.style.animationPlayState ='paused';
    predio2.style.animationPlayState ='paused';
    predio3.style.animationPlayState ='paused';
    contadorbandeira+= 1;
  
}, 3800);

setTimeout(() => {
  
  trofeu.style.animation= 'none';
  nuvem.style.animationPlayState = 'paused';
  trofeu.style.display= 'none';
  win.style.animation ='win-animation linear 2s'; 
  win.style.visibility ='visible';
  if(contadorbandeira == 4){
    bd4.style.filter ='none';
    }
}, 4000);


}



botao.addEventListener('click', () => {
 
  if(contadorbandeira == 0) {
    iniciarAnimacao();
    botao.disabled = true;
  }

  if(contadorbandeira == 1){
    iniciarAnimacao2();
    botao.disabled = true;
  }
  if(contadorbandeira == 2){
    iniciarAnimacao3();
    botao.disabled = true;
  }
  if(contadorbandeira == 3){
    iniciarAnimacao4();
    botao.disabled = true;
    
  }

  if(contadorbandeira == 4){
    location.reload();
    
  }
 
});






