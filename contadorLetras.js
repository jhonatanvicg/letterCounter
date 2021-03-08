//CONTAR EL NUMERO DE LETRAS EN UNA FRASE

let contentTextArea = document.querySelector('.write-text');
let containerCount = document.querySelector('.container-count');
let startCount = document.querySelector('.btn-accept')
let reset = document.querySelector('.btn-cancel')
let counterRightSpaces = document.querySelector('.counter-right-spaces');
let counterRightWords = document.querySelector('.counter-right-words');
let objLetters = {};
let spaces = 0;
let words = 0;
let originalLength = 0;
counterRightSpaces.innerText = 0;
counterRightWords.innerText = 0;

function deleteContent(){
  contentTextArea.value = '';
  counterRightSpaces.innerText = 0;
counterRightWords.innerText = 0;
  resetAll();
}


function resetAll(){
  let nodes = containerCount.childNodes;
  while(containerCount.firstChild){
      containerCount.removeChild(containerCount.lastChild)
  }
}

function addElemnt(letter,quantity){
  console.log(typeof letter)
  if(letter != "\n"){
    let counter = document.createElement('div');
    let counterLeft = document.createElement('div');
    let counterRight = document.createElement('div');
    counter.classList.add('counter');
    counterLeft.classList.add('counter-left');
    counterRight.classList.add('counter-right');
    counterLeft.innerText = letter;
    counterRight.innerText = quantity;
    counter.appendChild(counterLeft);
    counter.appendChild(counterRight);
    containerCount.appendChild(counter)


  }
}

function countSpacesAndWords(){
  
  contentTextArea.value.trim().split('').forEach(element => {
    if(element== ' '){
      spaces +=1;
    }
  });


  console.log(contentTextArea.value.trim().split(''))
  let rawPhrase = contentTextArea.value.trim().split('');

  //averiguamos el index de los saltos de linea
  for(let i = 0; i<rawPhrase.length;i++){
    if(rawPhrase[i]=='\n'){
      console.log('Saltos de linea')
      rawPhrase[i] = ' ';
    }
  }



  rawPhrase.join('').split(' ').map( element =>{
    if(element!=''){
      words +=1
    }
  })

  console.log(`Tienes ${spaces} espacios`)
  console.log(`Tienes ${words} palabras`)
  counterRightSpaces.innerText = spaces;
  counterRightWords.innerText = words;
  spaces = 0;
  words = 0;
}


function countLetter(){
  originalLength = contentTextArea.value.length;
  let content = contentTextArea.value.toLowerCase().split(" ").join("").split("");
  content.map(letter =>{
    if(objLetters[letter]>=1){
      objLetters.letter = objLetters[letter]+=1
    }else{
      objLetters[letter]=1
    }
  })


  delete objLetters.letter;
  for(const letter in objLetters){
    addElemnt(letter,objLetters[letter])
  }
  console.log(objLetters)
}

reset.addEventListener('click',()=>{
  deleteContent();
})

startCount.addEventListener('click',()=>{
  console.log(`ContextArea.length: ${contentTextArea.value.length}`)
  console.log(`originallength: ${originalLength}`);
  if(contentTextArea.value.length !=  originalLength){
    resetAll();
    countSpacesAndWords();
    countLetter()
    objLetters = {};
  }else if(contentTextArea.value.length == 0){
    alert('Aun no has escrito nada')
  }else{
    alert('no has agregado nuevos valores')
  }
})
