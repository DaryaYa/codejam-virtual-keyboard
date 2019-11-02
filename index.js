let textarea = document.createElement('textarea');
textarea.style.resize = 'none';
textarea.className = 'input';

let body = document.querySelector('body');
body.prepend(textarea);

let keyboard = document.createElement('div');
keyboard.className = 'keyboard';



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


let keysEng = ['~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i','o','p', '[', ']', '/', 'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '"', 'Enter', '', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Sft', '←', '↑', 'Ctrl', 'Fn', 'Alt', 'Space', 'Alt', 'Win', 'Print', 'Ctrl', '↓', '→'];

let keysRus = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', '', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'Sft', '←', '↑', 'Ctrl', 'Fn', 'Alt', 'Space', 'Alt', 'Win', 'Print', 'Ctrl', '↓', '→'];

for(let i = 0; i < keysEng.length; i++) {
    butCollection[i].textContent = keysEng[i];
}

const clear = function() {
   setTimeout(() => {
        butCollection.forEach(buttons => buttons.classList.remove('selected'))
    , 1000}
    );}

const typing = event => {
  
    const target = event.target;
    console.log(target);
    
    if(target.textContent == 'Backspace') {
        textarea.value = textarea.value.slice(0, -1);
    }   else if(target.textContent == 'Tab' || target.textContent == 'Caps Lock' || target.textContent == 'Shift' ||                  target.textContent == 'Ctrl' || target.textContent == 'Enter' || target.textContent == 'Alt' ||                       target.textContent == 'Fn' || target.textContent == 'Win' || target.textContent == 'Sft' ||                           target.textContent == 'Print') {
                       textarea.value = textarea.value;
    }   else if(target.textContent == 'Space') {
                       textarea.value += ' ';
    }
        else {
                textarea.value += target.textContent;
    } 
    target.classList.add('selected');
    console.log(target.classList);
}

keyboard.addEventListener('click', typing);
document.addEventListener('click', clear); 
    
