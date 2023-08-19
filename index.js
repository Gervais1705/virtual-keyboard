const keyboardLayout = [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='],
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'"],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/','@','Space', 'Backspace']
];

const keyboardElement = document.getElementById('keyboard');
const textAreaElement = document.getElementById('textArea');

keyboardLayout.forEach(row => {
    const rowElement = document.createElement('div');
    rowElement.classList.add('keyboard-row');
    row.forEach(key => {
        const keyElement = document.createElement('div');
        keyElement.classList.add('key');
        keyElement.textContent = key;
        keyElement.addEventListener('click', () => {
            handleKeyPress(key);
        });
        rowElement.appendChild(keyElement);
    });
    keyboardElement.appendChild(rowElement);
});

function handleKeyPress(key) {
    switch (key) {
        case 'Backspace':
            textAreaElement.value = textAreaElement.value.slice(0, -1);
            break;
        case 'Enter':
            textAreaElement.value += '\n';
            break;
        case 'Space':
            textAreaElement.value += ' ';
            break;
        default:
            textAreaElement.value += key;
            break;
    }
}

// You would also need to add logic to handle shift, special characters, etc.
