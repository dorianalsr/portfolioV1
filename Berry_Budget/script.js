let totalBudget = 0;
let currentBalance = 0;

function setupBudget() {
    const input = document.getElementById('budget-input');
    const value = parseFloat(input.value);

    if (value > 0) {
        totalBudget = value;
        currentBalance = value;
        updateDisplay();
        document.getElementById('view-setup').classList.add('hidden');
        document.getElementById('view-dashboard').classList.remove('hidden');
    } else {
        alert("Entre un budget valide ! 🍇");
    }
}

function addNewExpense() {
    const nameInput = document.getElementById('exp-name');
    const priceInput = document.getElementById('exp-price');
    const name = nameInput.value.trim();
    const price = parseFloat(priceInput.value);

    if (name && price > 0) {
        currentBalance -= price;
        

        const li = document.createElement('li');
        li.innerHTML = `<span>${name}</span> <strong>-${price.toFixed(2)}€</strong>`;
        document.getElementById('expense-list').prepend(li);


        nameInput.value = '';
        priceInput.value = '';
        
        updateDisplay();
    }
}

function updateDisplay() {
    const balanceText = document.getElementById('balance-amount');
    balanceText.innerText = currentBalance.toFixed(2) + " €";

    const percent = (currentBalance / totalBudget) * 100;
    const bar = document.getElementById('budget-bar');
    bar.style.width = Math.max(0, percent) + "%";

    if (currentBalance < 0) {
        balanceText.style.color = "#FF6B6B";
    } else {
        balanceText.style.color = "white";
    }
}