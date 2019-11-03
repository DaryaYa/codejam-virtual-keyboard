let textarea = document.createElement('textarea');
textarea.style.resize = 'none';
textarea.className = 'input';

let body = document.querySelector('body');
body.prepend(textarea);

let keyboard = document.createElement('div');
keyboard.className = 'keyboard';

let shiftBtn = false;


for (let i =0; i< 5; i++) {
    let row = document.createElement('div');
    row.className = 'row';

        for(let j =0; j <14 ; j++) {
            let buttons = document.createElement('div');
            buttons.className = 'buttons';
            
            row.append(buttons);
}
keyboard.append(row);
}

body.append(keyboard);

let butCollection = keyboard.querySelectorAll('.buttons');


let keysEng = ['~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i','o','p', '[', ']', '/', 'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '"', 'Enter', '', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Sft', '←', '↑', 'Ctrl', 'Fn', 'Alt', 'Space', 'Fn', 'Win', 'Print', 'Ctrl', '↓', '→'];

let keysRus = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', '', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'Sft', '←', '↑', 'Ctrl', 'Fn', 'Alt', 'Space', 'Fn', 'Win', 'Print', 'Ctrl', '↓', '→'];

let engUpp = String.prototype.toUpperCase.apply(keysEng).split(",");
let rusUpp = String.prototype.toUpperCase.apply(keysRus).split(",");

let lang ='';

lang = localStorage.getItem('lang');

for (let i = 0; i <keysRus.length; i++) {
    if (lang == 'eng') {
    keyboard.classList.add('keysEng');
    butCollection[i].textContent = keysEng[i];
    localStorage.setItem('lang', 'rus');
    }  else if(lang == 'rus') {
    keyboard.classList.remove('keysEng');
    butCollection[i].textContent = keysRus[i];
    localStorage.setItem('lang', 'eng');
    }
}   
/*const clear = function() {
   setTimeout(() => {
        butCollection.forEach(buttons => buttons.classList.remove('selected'))
    , 1000}
    );}*/

const typing = event => {
  
    const target = event.target;
  
    butCollection.forEach(buttons => buttons.classList.remove('selected'));
    butCollection.forEach(buttons => buttons.classList.remove('selected1'));


    if(target.classList == 'buttons') {
    if(target.textContent == 'Backspace') {
        textarea.value = textarea.value.slice(0, -1);
    }   else if(target.textContent == 'Tab' || target.textContent == 'Caps Lock' || target.textContent == 'Shift' ||                  target.textContent == 'Ctrl' || target.textContent == 'Enter' || target.textContent == 'Alt' ||                       target.textContent == 'Fn' || target.textContent == 'Win' || target.textContent == 'Sft' ||                           target.textContent == 'Print') {
                       textarea.value = textarea.value;
    }   else if(target.textContent == 'Space') {
                       textarea.value += ' ';
    }
        else  {
                textarea.value += target.textContent;
    } 
    target.classList.add('selected');
    }
}

document.addEventListener('click', typing);

const keyDown = (event) => {
    if(event.keyCode == 16) {
        shiftBtn = true;
    }
}
const keyUp = (event) => {
    if(event.keyCode == 18) {
       keyboard.classList.toggle('keysEng');
       lang = localStorage.getItem('lang');
       for (let i = 0; i <keysRus.length; i++) {
            if (lang == 'eng') {
            
            butCollection[i].textContent = keysRus[i];
            localStorage.setItem('lang', 'rus');
        }   if(lang == 'rus') {
            
            butCollection[i].textContent = keysEng[i];
            localStorage.setItem('lang', 'eng');
        }
    } 
    } else if(event.keyCode == 16) {
        shiftBtn = false;  
    }          
}

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);

const realKey = (event) => {
        butCollection.forEach(buttons => buttons.classList.remove('selected1'));
        butCollection.forEach(buttons => buttons.classList.remove('selected'));

    for(let i = 0; i < keysEng.length; i++) {
    if (event.key == keysEng[i])  {
        butCollection[i].classList.add('selected1');
    } else if (event.key == keysRus[i]) {
        butCollection[i].classList.add('selected1');
    }
    }  
}

document.addEventListener('keyup', realKey);

const capsLock = (event) => {
    if(event.keyCode == 20 ) {

        keyboard.classList.toggle('upperCase');

        if(keyboard.classList.contains('upperCase')) {
            lang = localStorage.getItem('lang');

            for (let i = 0; i <keysRus.length; i++) {
                if (lang == 'eng') {
           butCollection[i].textContent = engUpp[i];
          }     else if(lang == 'rus') {
            butCollection[i].textContent = rusUpp[i];
          }
            }  
         } else if(!keyboard.classList.contains('upperCase')) {
            lang = localStorage.getItem('lang');

            for (let i = 0; i <keysRus.length; i++) {
                if (lang == 'eng') {
            butCollection[i].textContent = keysEng[i];
          }     else if(lang == 'rus') {
            butCollection[i].textContent = keysRus[i];
          }
         }         
        }
    }
}
document.addEventListener('keyup', capsLock);
    
