function updateOwnership() {
    const rows = document.querySelectorAll('#employees tr');
    let totalContribution = 0;

    // Calculate total contribution
    rows.forEach(row => {
        const input = row.querySelector('input');
        totalContribution += parseFloat(input.value) || 0;
    });

    // Update ownership percentages and apply alert for low ownership
    rows.forEach(row => {
        const input = row.querySelector('input');
        const ownershipCell = row.querySelector('.ownership');
        const nameCell = row.querySelector('td[data-name]');
        const contribution = parseFloat(input.value) || 0;
        const percentage = ((contribution / totalContribution) * 100).toFixed(2);
        ownershipCell.textContent = isNaN(percentage) ? '0.00%' : `${percentage}%`;

        if (percentage < 10) {
            nameCell.classList.add('alert');
            nameCell.textContent = `${nameCell.dataset.name} (Below Acceptable Percentage)`;
        } else {
            nameCell.classList.remove('alert');
            nameCell.textContent = nameCell.dataset.name;
        }
    });
}

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    body.setAttribute('data-theme', newTheme);
});

// Set initial theme
body.setAttribute('data-theme', 'dark');