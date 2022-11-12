const buttons = document.querySelectorAll('.extend');

for (let button of buttons) {
    button.addEventListener('click', function () {
        button.parentElement.classList.toggle('active');
    });
}