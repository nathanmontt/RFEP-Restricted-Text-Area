'use strict'

const textArea = document.getElementById('textarea-holder');
let count = document.getElementById('count');
let temp = 0

textArea.addEventListener('keydown', (keyPressEvent) => {
    if (keyPressEvent.key) {
        temp++;
        count.innerHTML = `${temp}/250`;

        if (temp >= 250) {
            textArea.style.cssText = `border: 3px solid #d40808; color: #d40808;`;
            textArea.setAttribute('disabled', 'true');
            count.style.color = '#d40808';
        }
    }
});