const panels = document.querySelectorAll('.panel');


for (let panel of panels) {
    panel.addEventListener('click', function () {
        removeActiveClasses();
        panel.classList.add('active');
    });
}

function removeActiveClasses() {
    for (let panel of panels) {
        panel.classList.remove('active');
    }
}

