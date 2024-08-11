/*****************************************
 *                Task 1-2               *
 *****************************************/
let solutionTask1 = document.getElementById('solution-task-1');
let blackSquare = document.getElementById('square-first-section');
let cssBtn = document.getElementById('CSS-btn');
cssBtn.addEventListener('click', ()=>{
  blackSquare.style.display = "none";
})

let jsBtn = document.getElementById('JS-btn');
jsBtn.addEventListener('click', () => {
  solutionTask1.removeChild(blackSquare);
})

let cssJsBtn = document.getElementById('CSS-JS-btn');
cssJsBtn.addEventListener('click', () => {
  blackSquare.classList.add('hidden')
})

let hideShowBtn = document.getElementById('hide-show-btn');
hideShowBtn.addEventListener('click', ()=>{
  if(blackSquare.classList.contains('hidden')){
    blackSquare.classList.remove('hidden');
  } else {
    blackSquare.classList.add('hidden');
  }
})

/*****************************************
 *                Task 3               *
 *****************************************/
let fiveSquares = document.getElementsByClassName('squares-second-section');
let hideShowSquaresBtn = document.getElementById('hide-show-5-squares-btn');
hideShowSquaresBtn.addEventListener('click', ()=>{
  if(hideShowSquaresBtn.innerHTML === "Сховати 5 квадратів"){
    for(let i = 0; i < fiveSquares.length; i++){
      fiveSquares[i].classList.add('hidden');
    }
    hideShowSquaresBtn.innerHTML = "Показати 5 квадратів"
  } else {
    for(let i = 0; i < fiveSquares.length; i++){
      fiveSquares[i].classList.remove('hidden');
    }
    hideShowSquaresBtn.innerHTML = "Сховати 5 квадратів"        
  }

})

/*****************************************
 *                Task 4               *
 *****************************************/
let inputSelector = document.getElementById('input-selector');
let hideElementsBtn = document.getElementById('input-hide-elements-btn');
let showElementsBtn = document.getElementById('input-show-elements-btn');

hideElementsBtn.addEventListener('click', ()=>{
  let selector = inputSelector.value;
  let elements = document.querySelectorAll(selector);
  for(let i = 0; i < elements.length; i++){
    elements[i].classList.add("hidden")
  }
})

showElementsBtn.addEventListener('click', ()=>{
  let selector = inputSelector.value;
  let elements = document.querySelectorAll(selector);
  for(let i = 0; i < elements.length; i++){
    elements[i].classList.remove("hidden")
  }
})
/*****************************************
 *                Task 5               *
 *****************************************/
let yellowSquare = document.getElementById('yellow-square');
yellowSquare.addEventListener('click', handleFirstClick)

function handleFirstClick(){
  alert("Привіт");
  yellowSquare.removeEventListener('click', handleFirstClick)
  yellowSquare.addEventListener('click', ()=>{
    yellowSquare.classList.add('hidden');
  })
}
/*****************************************
 *                Task 6               *
 *****************************************/
let redSquare = document.getElementById('red-square');
let hoverBtn = document.getElementById('hover-btn');
hoverBtn.addEventListener('mouseenter', ()=>{
  redSquare.style.opacity = '0';
})

hoverBtn.addEventListener('mouseleave', ()=>{
  redSquare.style.opacity = '1';
})
/*****************************************
 *                Task 7               *
 *****************************************/
let input = document.getElementById('input-show-rectangle');
let greenRectangle = document.getElementById('green-rectangle');

input.addEventListener('focus', ()=>{
  greenRectangle.style.display = 'block';
});
input.addEventListener('input', ()=>{
  greenRectangle.style.display = 'none';
})
input.addEventListener('blur', ()=>{
  greenRectangle.style.display = 'none';
});
/*****************************************
 *                Task 8               *
 *****************************************/
let inputImgURL = document.getElementById('url-image');
let sendImgUrlBtn = document.getElementById('url-image-btn');
let imgContainer = document.getElementById('img-container');

sendImgUrlBtn.addEventListener('click', ()=>{
  event.preventDefault();
  let url = inputImgURL.value;
  if(url){
    const img = document.createElement("img");
    img.src = url;
    img.alt = "Помилка завантаження";
    img.style.maxWidth = '100%';

    imgContainer.innerHTML = "";
    imgContainer.appendChild(img);
  } else {
    alert("Введіть URL зображення");
  }
})
/*****************************************
 *                Task 9               *
 *****************************************/
let textareaUrlsImages = document.getElementById('input-url-imgs');
let btnFindImages = document.getElementById('find-imgs-btn');
let imagesContainer = document.getElementById('images-container');

btnFindImages.addEventListener('click', ()=>{
  let urls = textareaUrlsImages.value;
  if(!urls){
    alert("Введіть URL зображення");
    return;
  }
  let urlsArray = urls.split("\n");
  imagesContainer.innerHTML = "";
  for(let i = 0; i<urlsArray.length; i++){
    if(!urlsArray[i]){
      continue;
    }
    const img = document.createElement('img');
    img.src = urlsArray[i];
    img.alt = "Помилка завантаження";
    img.style.width = '100px';
    imagesContainer.appendChild(img)
  }
  
})
/*****************************************
 *                Task 10-12             *
 ****************************************/
let coordContainer = document.getElementById('coord-container');
let mouseCoord = document.getElementById('mouse-coord');
document.documentElement.addEventListener('mousemove', (event)=>{
  let xCoord = event.clientX;
  let yCoord = event.clientY;
  let coords = `X: ${xCoord}, Y: ${yCoord}`;
  mouseCoord.innerHTML = coords
})

let clientCoord = document.getElementById('client-coord');
navigator.geolocation.getCurrentPosition((position) => {
  let coords = `Ш: ${position.coords.latitude}, Д: ${position.coords.longitude}`;
  clientCoord.innerHTML = coords;
})
let language = document.getElementById('language');
language.innerHTML =`Мова браузера: ${navigator.language}`;
/*****************************************
 *                Task 13               *
 *****************************************/
let block1 = document.getElementById("block-1");
block1.textContent = localStorage.getItem('block1') || 'Блок № 1'
block1.addEventListener('input', ()=>{
  localStorage.setItem('block1', block1.textContent);
});

const block2 = document.getElementById('block-2');
block2.textContent = getCookie('block2') || 'Блок № 2';
block2.addEventListener('input', () => { 
  setCookie('block2', block2.textContent, 365);
});

function setCookie(name, value, days){
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name){
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for(let i=0; i<ca.length; i++){
    let c = ca[i];
    while(c.charAt(0) === ' ') c = c.substring(1, c.length);
    if(c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

const block3 = document.getElementById('block-3');
block3.textContent = sessionStorage.getItem('block3') || 'Блок № 3';
block3.addEventListener('input', () => {
  sessionStorage.setItem('block3', block3.textContent);
});
/*****************************************
 *                Task 14               *
 *****************************************/
let btnScrollUp = document.getElementById('btn-scroll-up');
window.addEventListener('scroll', ()=>{
  if(window.innerHeight + window.scrollY > document.body.clientHeight - 100){
    btnScrollUp.style.display = "block";
  } else {
    btnScrollUp.style.display = "none";
  }
})

btnScrollUp.addEventListener('click', ()=>{

})
/*****************************************
 *                Task 15               *
 *****************************************/
let bigBlock = document.getElementById('big-block');
let smallBlock = document.getElementById('small-block');
bigBlock.addEventListener("click", (event)=>{
  if(!smallBlock.contains(event.target)){
    alert("Увага! Ти натиснув на блакитний квадрат");
  } else {
    alert("Увага! Ти натиснув на жовтий квадрат")
  }
})
/*****************************************
 *                Task 16               *
 *****************************************/
let btnShowMask = document.getElementById('btn-show-mask');
let greyMask = document.getElementById('grey-mask');
btnShowMask.addEventListener('click', ()=>{
  greyMask.style.display = 'block';
  document.body.style.overflow = 'hidden';
});
greyMask.addEventListener('click', ()=>{
  greyMask.style.display = 'none';
  document.body.style.overflow = 'scroll';
})
/*****************************************
 *                Task 18               *
 *****************************************/
const fileInput = document.getElementById('file-input');
const fileDropArea = document.getElementById('file-drop-area');
const fileMessage = document.getElementById('file-message');
const fileIcon = document.getElementById('file-icon');

fileDropArea.addEventListener('dragover', (event) => {
    event.preventDefault();
    fileDropArea.classList.add('dragover');
});

fileDropArea.addEventListener('dragleave', () => {
    fileDropArea.classList.remove('dragover');
});

fileDropArea.addEventListener('drop', (event) => {
    event.preventDefault();
    fileDropArea.classList.remove('dragover');

    const files = event.dataTransfer.files;
    handleFiles(files);
});

fileDropArea.addEventListener('click', () => {
    fileInput.click();
});

fileInput.addEventListener('change', () => {
    const files = fileInput.files;
    handleFiles(files);
});

function handleFiles(files) {
    if (files.length > 0) {
        const fileName = files[0].name;
        fileMessage.textContent = `Вибрано файл: ${fileName}`;
        fileMessage.classList.add('selected');
        fileIcon.textContent = '✅'; 
    } else {
      console.log('файли не знайдені');
    }
}

/*****************************************
 *               Pagination              *
 *****************************************/

let btnPreviousSection = document.getElementById('btn-previous-section');
let btnNextSection = document.getElementById('btn-next-section');

let arrNamesSections = ['task1-2', 'task3', 'task4', 'task5', 'task6', 
                        'task7', 'task8', 'task9', 'task10-12', 'task13', 
                        'task14', 'task15', 'task16', 'task17', 'task18'];
let indexCurrentSection = 0;

btnPreviousSection.addEventListener('click', ()=>{
  if(indexCurrentSection === 0){
    return;
  }
  let currentSection = arrNamesSections[indexCurrentSection];
  let previousSection = arrNamesSections[--indexCurrentSection];
  document.getElementById(currentSection).classList.remove('active-section');
  document.getElementById(previousSection).classList.add('active-section');
  btnNextSection.style.borderLeft = '100px solid #356e00';
  btnNextSection.style.cursor = 'pointer';
  if(indexCurrentSection === 0){
    btnPreviousSection.style.borderRight = '100px solid #c9e2b2';
    btnPreviousSection.style.cursor = 'auto';
  }
})

btnNextSection.addEventListener('click', ()=>{
  if(indexCurrentSection === arrNamesSections.length-1){
    return;
  }
  let currentSection = arrNamesSections[indexCurrentSection];
  let nextSection = arrNamesSections[++indexCurrentSection];
  document.getElementById(currentSection).classList.remove('active-section');
  document.getElementById(nextSection).classList.add('active-section');
  btnPreviousSection.style.borderRight = '100px solid #356e00';
  btnPreviousSection.style.cursor = 'pointer';
  if(indexCurrentSection === arrNamesSections.length-1){
    btnNextSection.style.borderLeft = '100px solid #c9e2b2';
    btnNextSection.style.cursor = 'auto';
  } 
})