const BUTTONS_IN_ROW = 14;
const ROWS_IN_KEYBOARD = 5;
const instruction = document.createElement('div');
let textarea = document.createElement('textarea');
let body = document.querySelector('body');
let keyboard = document.createElement('div');
let shiftBtn = false;
let altBtn = false;
textarea.style.resize = 'none';
textarea.className = 'input';
textarea.autofocus = true;

body.prepend(textarea);
keyboard.className = 'keyboard';

for (let i =0; i< ROWS_IN_KEYBOARD; i++) {
    let row = document.createElement('div');
    row.className = 'row';

        for(let j =0; j < BUTTONS_IN_ROW ; j++) {
            let buttons = document.createElement('div');
            buttons.className = 'buttons';
            
            row.append(buttons);
        }
    keyboard.append(row);
}

body.append(keyboard);
instruction.classList.add('instruction');
instruction.innerHTML = '<p>Press Alt+Shift to change the language</p><p>Windows</p>';
body.append(instruction);

let butCollection = keyboard.querySelectorAll('.buttons');
const keysEng = ['\`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i','o','p', '[', ']', '\\', 'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter', '', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '/', 'Sft', '←', '↑', 'Ctrl', 'Win', 'Alt', 'Space', 'Fn', 'Win', 'Print', 'Ctrl', '↓', '→'];
const keysRus = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', '', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'Sft', '←', '↑', 'Ctrl', 'Win', 'Alt', 'Space', 'Fn', 'Win', 'Print', 'Ctrl', '↓', '→'];
let engUpp = String.prototype.toUpperCase.apply(keysEng).split(",");
let rusUpp = String.prototype.toUpperCase.apply(keysRus).split(",");
let lang ='';
lang = localStorage.getItem('lang');

if (lang == 'eng' || !lang) {
    keyboard.classList.add('keysEng');
    localStorage.setItem('lang', 'eng');
        for (let i = 0; i <keysRus.length; i++) {
            butCollection[i].textContent = keysEng[i];
        }
}  else if(lang == 'rus') {
    keyboard.classList.remove('keysEng');
    localStorage.setItem('lang', 'rus');
        for (let i = 0; i <keysRus.length; i++) {
            butCollection[i].textContent = keysRus[i];
        }
    }
   

const typing = event => {
  
    const target = event.target;

    if(target.classList == 'buttons') {

        switch (target.textContent.toLowerCase()) {
            case 'backspace':
                textarea.value = textarea.value.slice(0, -1);
                break;
            case 'tab':
                textarea.value += '\t';
                break;
            case 'enter':
                textarea.value += '\n';
                break;        
            case 'space':
                textarea.value += ' ';
                break;
            case 'caps lock':
            case 'shift':   
            case 'ctrl':
            case 'alt':    
            case 'fn':
            case 'win':
            case 'sft': 
            case 'print':
            case '←':
            case '↑':    
            case '↓': 
            case '↑': 
            case '→':        
                break;   
            default:
                textarea.value += target.textContent;
        }
    
    target.classList.add('selected');
    setTimeout(() => {
        target.classList.remove('selected');
    },150);
}}


document.addEventListener('click', typing);

const keyDown = (event) => {
    if(event.code == 'ShiftLeft' || event.code == 'ShiftRight') {        
        shiftBtn = true;    
    } else if (event.code == 'AltLeft' || event.code == 'AltRight') {
        altBtn = true;
    } 
}

let keyUp = (event) => {
    if (event.code == 'AltLeft' && shiftBtn || event.code == 'AltRight' && shiftBtn) {
       keyboard.classList.toggle('keysEng');
        lang = localStorage.getItem('lang');
        if (lang == 'eng') { 
            localStorage.setItem('lang', 'rus');
            for (let i = 0; i <keysRus.length; i++) {           
                butCollection[i].textContent = keysEng[i];         
            } 
        } else if(lang == 'rus') {            
            localStorage.setItem('lang', 'eng');
            for (let i = 0; i <keysRus.length; i++) {
                butCollection[i].textContent = keysRus[i];
            }            
        }
    } 
     else if (event.code == 'ShiftLeft' || event.code == 'ShiftRight') {
        shiftBtn = false;  
     } 
}

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);

const realKey = (event) => {
    textarea.focus();
        let target = event.code;
        
        if (target == 'Tab') {
        textarea.value += '\t';
        event.preventDefault();
    }       

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
    } else if (target == 'Comma') {
        butCollection[50].classList.add('selected1');     
    }
    setTimeout(() => {
        butCollection.forEach(buttons => buttons.classList.remove('selected1'));
    }, 150);
}};

document.addEventListener('keydown', realKey);

const capsLock = (event) => {
    if(event.code == 'CapsLock' ) {
        keyboard.classList.toggle('upperCase');
        lang = localStorage.getItem('lang');

            if (keyboard.classList.contains('upperCase')) {
            for (let i = 0; i <keysRus.length; i++) {
                if (lang == 'eng') {
           butCollection[i].textContent = rusUpp[i];
          }     else if(lang == 'rus') {
            butCollection[i].textContent = engUpp[i];
          }
            } 
      }  else if(!keyboard.classList.contains('upperCase')) {
            
            for (let i = 0; i <keysRus.length; i++) {
                if (lang == 'eng') {
                    butCollection[i].textContent = keysRus[i];
                } else if(lang == 'rus') {
                    butCollection[i].textContent = keysEng[i];
                }       
            }                 
        }
    }
}


document.addEventListener('keyup', capsLock);

document.addEventListener('keydown', (event) => {
   if (event.code == 'ShiftLeft' || event.code == 'ShiftRight') {
       for (let i = 0; i <keysRus.length; i++) {
                if (lang == 'eng') {
                    butCollection[i].textContent = rusUpp[i];
                } else if(lang == 'rus') {
                    butCollection[i].textContent = engUpp[i];
                }       
            }        
   }
})

document.addEventListener('keyup', (event) => {
   if (event.code == 'ShiftLeft' || event.code == 'ShiftRight') {
       for (let i = 0; i <keysRus.length; i++) {
                if (lang == 'eng') {
                    butCollection[i].textContent = keysRus[i];
                } else if(lang == 'rus') {
                    butCollection[i].textContent = keysEng[i];
                }       
            }        
   }
})

// let current = lang;
// if (current == 'eng') {
//     localStorage.setItem('lang', 'rus')
// } else {localStorage.setItem('lang', 'eng')}



    
