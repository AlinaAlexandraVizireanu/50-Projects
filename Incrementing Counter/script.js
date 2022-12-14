const counters = document.querySelectorAll('.counter');

for (let counter of counters) {
    counter.innerText = '0';

    const updateCounter = () => {
        /// + in front of a value type string transforms it to a number (alternative to parseInt or Number)
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;

        const increment = target / 200;

        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1);
        } else {
            counter.innerText = target;
        }
    }

    updateCounter();
}