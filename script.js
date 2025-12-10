let count = 0;

document.getElementById('incrementBtn').addEventListener('click', function() {
    count+=1;
    document.getElementById('counterLabel').textContent = count;
});

document.getElementById('resetBtn').addEventListener('click', function() {
    count=0;
    document.getElementById('counterLabel').textContent = count;
});

document.getElementById('decrementBtn').addEventListener('click', function() {
    count-=1;
    document.getElementById('counterLabel').textContent = count;
});