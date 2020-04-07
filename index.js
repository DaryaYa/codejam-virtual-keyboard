let textarea = document.createElement('textarea');
textarea.style.resize = 'none';
textarea.className = 'input';
textarea.autofocus = true;

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
let instruction = document.createElement('div');
instruction.classList.add('instruction');
instruction.textContent = `Press Alt+Shift to change the language`;
body.append(instruction);

let butCollection = keyboard.querySelectorAll('.buttons');


let keysEng = ['\`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i','o','p', '[', ']', '\\', 'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter', '', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Sft', '←', '↑', 'Ctrl', 'Win', 'Alt', 'Space', 'Fn', 'Win', 'Print', 'Ctrl', '↓', '→'];

let keysRus = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', '', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'Sft', '←', '↑', 'Ctrl', 'Win', 'Alt', 'Space', 'Fn', 'Win', 'Print', 'Ctrl', '↓', '→'];

let engUpp = String.prototype.toUpperCase.apply(keysEng).split(",");
let rusUpp = String.prototype.toUpperCase.apply(keysRus).split(",");

let lang ='';
if(!localStorage.getItem('lang')) {localStorage.setItem('lang', 'eng')} else {
    lang = localStorage.getItem('lang');
}

for (let i = 0; i <keysRus.length; i++) {
    if (lang == 'eng' || !lang) {
    keyboard.classList.add('keysEng');
    butCollection[i].textContent = keysEng[i];
    localStorage.setItem('lang', 'rus');
    }  else if(lang == 'rus') {
    keyboard.classList.remove('keysEng');
    butCollection[i].textContent = keysRus[i];
    localStorage.setItem('lang', 'eng');
    }
}   

const typing = event => {
  
    const target = event.target;
  
    butCollection.forEach(buttons => buttons.classList.remove('selected'));
    butCollection.forEach(buttons => buttons.classList.remove('selected1'));


    if(target.classList == 'buttons') {
    if(target.textContent.toLowerCase() == 'backspace') {
        textarea.value = textarea.value.slice(0, -1);
    }   else if(target.textContent.toLowerCase() == 'tab' || target.textContent.toLowerCase() == 'caps lock' || target.textContent.toLowerCase() == 'shift' || target.textContent.toLowerCase() == 'ctrl' || target.textContent.toLowerCase() == 'enter' || target.textContent.toLowerCase() == 'alt' ||                       target.textContent.toLowerCase() == 'fn' || target.textContent.toLowerCase() == 'win' || target.textContent.toLowerCase() == 'sft' ||                           target.textContent.toLowerCase() == 'print') {
                       textarea.value = textarea.value;
    }   else if(target.textContent.toLowerCase() == 'space') {
                       textarea.value += ' ';
    }
        else  {
                textarea.value += target.textContent;
    } 
    target.classList.add('selected');
    }

    setTimeout(() => {
        butCollection.forEach(buttons => buttons.classList.remove('selected'));
    }, 300);
}

document.addEventListener('click', typing);

const keyDown = (event) => {
    if(event.keyCode == 16) {
        
        shiftBtn = true;
    } else {shiftBtn = false;}
}
const keyUp = (event) => {
    if(event.keyCode == 18 && shiftBtn == true) {
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
    // textarea.focus();
        butCollection.forEach(buttons => buttons.classList.remove('selected1'));
        butCollection.forEach(buttons => buttons.classList.remove('selected'));
        let target = event.code;
        console.log(target, event.keyCode);       

    for (let i = 0; i < keysEng.length; i++) {
    
    if (target == 'Space') {
        butCollection[59].classList.add('selected1');
    } else if (target == 'ArrowLeft') {
        butCollection[54].classList.add('selected1');
    } else if (target == 'ArrowUp') {
        butCollection[55].classList.add('selected1');
    } else if (target == 'ArrowRight') {
        butCollection[65].classList.add('selected1');
    } else if (target == 'ArrowDown') {
        butCollection[64].classList.add('selected1');
    } else if (target == 'ControlLeft') {
        butCollection[56].classList.add('selected1');
    } else if (target == 'ControlRight') {
        butCollection[63].classList.add('selected1');
    } else if (target == 'CapsLock') {
        butCollection[28].classList.add('selected1');
    } else if (target == 'ShiftRight') {
        butCollection[53].classList.add('selected1');
    } else if (target == 'ContextMenu') {
        butCollection[62].classList.add('selected1');
    } else if (target == 'MetaRight') {
        butCollection[61].classList.add('selected1');
    } else if (target == 'MetaLeft') {
        butCollection[57].classList.add('selected1');
    } else if (target == 'Backquote') {
        butCollection[0].classList.add('selected1');
    } else if (target == 'Slash') {
        butCollection[52].classList.add('selected1');
    } else if (target == 'Period') {
        butCollection[51].classList.add('selected1');
    } else if (event.key == keysEng[i] || event.key == engUpp[i])  {
        butCollection[i].classList.add('selected1');
    } else if (event.key == keysRus[i] || event.key == rusUpp[i]) {
        butCollection[i].classList.add('selected1');
    }  

    setTimeout(() => {
        butCollection.forEach(buttons => buttons.classList.remove('selected1'));
    }, 300);
}};

document.addEventListener('keydown', realKey);

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


    
