const keyDisplay = document.querySelector('.container');
const key = document.querySelector('.key');

const firstKey = document.createElement('div');
const secondKey = document.createElement('div');
const thirdKey = document.createElement('div');

const smallFirst = document.createElement('small');
const smallSecond = document.createElement('small');
const smallThird = document.createElement('small');

window.addEventListener('keydown', function (event) {
    /// Check if the key is still connected to DOM
    if (key.isConnected) {
        keyDisplay.removeChild(key);
    }

    keyDisplay.appendChild(firstKey);
    keyDisplay.appendChild(secondKey);
    keyDisplay.appendChild(thirdKey);

    firstKey.classList.add('key');
    firstKey.innerText = `${event.key === ' ' ? 'Space' : event.key}`;
    firstKey.appendChild(smallFirst);
    smallFirst.innerText = 'event.key';

    secondKey.classList.add('key');
    secondKey.innerText = `${event.keyCode}`;
    secondKey.appendChild(smallSecond);
    smallSecond.innerText = 'event.keyCode';

    thirdKey.classList.add('key');
    thirdKey.innerText = `${event.code}`;
    thirdKey.appendChild(smallThird);
    smallThird.innerText = 'event.code';
});


/// Instructor approach

// window.addEventListener('keydown', (event) => {
//     keyDisplay.innerHTML = `
//     <div class="key">
//     ${event.key === ' ' ? 'Space' : event.key} 
//     <small>event.key</small>
//   </div>
//   <div class="key">
//     ${event.keyCode}
//     <small>event.keyCode</small>
//   </div>
//   <div class="key">
//     ${event.code}
//     <small>event.code</small>
//   </div>
//     `
// });