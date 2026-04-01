const homePage = document.getElementById('home-page');
const dashboardPage = document.getElementById('dashboard-page');
const startBtn = document.getElementById('start-btn');
const addTaskBtn = document.getElementById('add-task-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const progressFill = document.getElementById('progress-fill');
const progressPercent = document.getElementById('progress-percent');
const finishBtn = document.getElementById('finish-btn');
const finishModal = document.getElementById('finish-modal');


startBtn.onclick = () => {
    homePage.classList.add('hidden');
    dashboardPage.classList.remove('hidden');
    updateDate();
};


addTaskBtn.onclick = () => {
    const text = taskInput.value.trim();
    if (text !== "") {
        const li = document.createElement('li');
        li.innerText = text;
        
        li.onclick = () => {
            li.classList.toggle('completed');
            updateProgress();
        };

        taskList.appendChild(li);
        taskInput.value = "";
        updateProgress();
    }
};

function updateProgress() {
    const tasks = document.querySelectorAll('#task-list li');
    const done = document.querySelectorAll('#task-list li.completed');
    
    let percent = 0;
    if (tasks.length > 0) {
        percent = Math.round((done.length / tasks.length) * 100);
    }
    
    progressFill.style.width = percent + "%";
    progressPercent.innerText = percent + "%";
}

function updateDate() {
    const d = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    document.getElementById('day-name').innerText = days[d.getDay()];
    document.getElementById('day-number').innerText = d.getDate();
    document.getElementById('month-name').innerText = months[d.getMonth()];
}

finishBtn.onclick = () => {
    finishModal.classList.remove('hidden');
};