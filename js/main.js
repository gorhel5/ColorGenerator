const colorBlock = document.querySelector('.color-block');
const text = document.querySelector('.text');
const btn = document.querySelector('.btn');

const hex = '0123456789ABCDEF';
let random = '#';

btn.addEventListener('click', () => {
    random = '#';

    for (let i = 0; i < 6; i++) {
        random = random + hex[Math.floor(Math.random() * hex.length)]
        
    };
    text.innerHTML = `${random}`;
    colorBlock.style.backgroundColor = random;
});