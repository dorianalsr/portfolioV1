let totalTime = 25 * 60; 
let timeLeft = totalTime;
let timerId = null;
let isRunning = false;

function navigateTo(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
    document.getElementById(viewId).classList.remove('hidden');
}

document.querySelectorAll('.menu-item').forEach(button => {
    button.onclick = () => {
        document.querySelectorAll('.menu-item').forEach(b => b.classList.remove('active'));
        button.classList.add('active');
        totalTime = parseInt(button.dataset.time) * 60;
        timeLeft = totalTime;
        updateDisplay();
    };
});

function startFocus() {
    const task = document.getElementById('task-input').value;
    if (task.trim() !== "") {
        document.getElementById('active-task-name').innerText = task;
        navigateTo('view-timer');
    } else {
        alert("Indique ta mission ! ☕");
    }
}

function updateDisplay() {
    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;
    document.getElementById('timer').innerText = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    
    const percent = (timeLeft / totalTime) * 100;
    document.querySelector('.progress-bar').style.width = percent + "%";
}

const toggleBtn = document.getElementById('toggle-btn');
toggleBtn.onclick = () => {
    if (isRunning) {
        clearInterval(timerId);
        toggleBtn.innerText = "▶";
    } else {
        timerId = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(timerId);
                alert("Pause café bien méritée ! ☕✨");
            }
        }, 1000);
        toggleBtn.innerText = "⏸";
    }
    isRunning = !isRunning;
};

updateDisplay();