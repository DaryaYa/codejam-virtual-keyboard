let textarea = document.createElement('input');
textarea.style.type = 'textarea';
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
console.log(butCollection);

let keysEng = ['~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '←', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i','o','p', '[', ']', '/', 'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '"', 'Enter', '', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Sft', '←', '↑', 'Ctrl', 'Fn', 'Alt', 'Space', 'Alt', 'Win', 'Print', 'Ctrl', '↓', '→'];

for(let i = 0; i < keysEng.length; i++) {
    butCollection[i].textContent = keysEng[i];
}

