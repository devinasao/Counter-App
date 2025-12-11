let count = 0;
function updateDisplay() {
    const label = document.getElementById('counterLabel');
    label.textContent = count;
    label.classList.remove('positive', 'negative', 'zero');
    if (count > 0) label.classList.add('positive');
    else if (count < 0) label.classList.add('negative');
    else label.classList.add('zero');
}

document.getElementById('incrementBtn').addEventListener('click', function() {
    count += 1;
    updateDisplay();
});

document.getElementById('resetBtn').addEventListener('click', function() {
    count = 0;
    updateDisplay();
});

document.getElementById('decrementBtn').addEventListener('click', function() {
    count -= 1;
    updateDisplay();
});

// initialize display on load
updateDisplay();
