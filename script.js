const pumpkin = document.getElementById('pumpkin');
const colorPicker = document.getElementById('colorPicker');

colorPicker.addEventListener('input', (event) => {
    pumpkin.style.backgroundColor = event.target.value;
});
