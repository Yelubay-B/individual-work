// Task 6: Counter
let counterValue = 0;
const counterDisplay = document.querySelector('#counterDisplay');
const incBtn = document.querySelector('#incBtn');
const decBtn = document.querySelector('#decBtn');
const resetBtn = document.querySelector('#resetBtn');

function updateDisplay() {
    counterDisplay.textContent = counterValue;
}

incBtn.addEventListener('click', () => {
    counterValue++;
    updateDisplay();
});

decBtn.addEventListener('click', () => {
    if (counterValue > 0) {
        counterValue--;
        updateDisplay();
    }
});

resetBtn.addEventListener('click', () => {
    counterValue = 0;
    updateDisplay();
});


// Task 7: Live Text Preview
const liveInput = document.querySelector('#liveInput');
const previewText = document.querySelector('#previewText');
const charCount = document.querySelector('#charCount');
const clearBtn = document.querySelector('#clearBtn');

liveInput.addEventListener('input', () => {
    const val = liveInput.value;
    if (val === '') {
        previewText.textContent = 'Your text will appear here';
        charCount.textContent = '0';
    } else {
        previewText.textContent = val;
        charCount.textContent = val.length;
    }
});

clearBtn.addEventListener('click', () => {
    liveInput.value = '';
    previewText.textContent = 'Your text will appear here';
    charCount.textContent = '0';
    liveInput.focus();
});


// Task 8: Change Image with Select Control
const imageSelect = document.querySelector('#imageSelect');
const displayImage = document.querySelector('#displayImage');
const imageCaption = document.querySelector('#imageCaption');

const imageData = {
    img1: { src: 'images/photo1.jpg', alt: 'First picture description', caption: 'Description of the first picture' },
    img2: { src: 'images/photo2.jpg', alt: 'Second picture description', caption: 'Description of the second picture' },
    img3: { src: 'images/photo3.jpg', alt: 'Third picture description', caption: 'Description of the third picture' }
};

imageSelect.addEventListener('change', (e) => {
    const selectedKey = e.target.value;
    const data = imageData[selectedKey];
    if (data) {
        displayImage.src = data.src;
        displayImage.alt = data.alt;
        imageCaption.textContent = data.caption;
    }
});


// Task 9: Keyboard Events
const keyInput = document.querySelector('#keyInput');
const keyStatus = document.querySelector('#keyStatus');
const keyResult = document.querySelector('#keyResult');

keyInput.addEventListener('keydown', (e) => {
    keyStatus.textContent = `Pressed key: ${e.key}`;

    if (e.key === 'Enter') {
        e.preventDefault();
        keyResult.textContent = keyInput.value;
    } else if (e.key === 'Escape') {
        keyInput.value = '';
        keyResult.textContent = '';
        keyStatus.textContent = '';
    }
});


// Task 10: Mouse and Focus Events
const focusCard = document.querySelector('#focusCard');
const instructionText = document.querySelector('#instructionText');

function activateHighlight() {
    focusCard.style.backgroundColor = '#e8f5e9';
    focusCard.style.borderColor = '#1b5e20';
    instructionText.textContent = 'Status: Card is active (hovered or focused)';
}

function removeHighlight() {
    focusCard.style.backgroundColor = '#fafafa';
    focusCard.style.borderColor = '#2e7d32';
    instructionText.textContent = 'Status: Waiting...';
}

focusCard.addEventListener('mouseenter', activateHighlight);
focusCard.addEventListener('mouseleave', removeHighlight);
focusCard.addEventListener('focus', activateHighlight);
focusCard.addEventListener('blur', removeHighlight);