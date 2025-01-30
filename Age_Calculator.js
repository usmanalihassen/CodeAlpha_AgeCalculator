const container = document.createElement('div');
container.style.cssText = `
    background: #fff;
    color: #333;
    width: 90%;
    max-width: 400px;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
    text-align: center;
    font-family: Arial, sans-serif;
    margin: 50px auto;
`;

// Add the heading
const heading = document.createElement('h1');
heading.textContent = 'Age Calculator';
heading.style.cssText = `
    font-size: 2em;
    margin-bottom: 20px;
    color: #6a11cb;
`;
container.appendChild(heading);

// Add input for day
const dayInput = document.createElement('input');
dayInput.type = 'number';
dayInput.placeholder = 'Enter day (1-31)';
dayInput.style.cssText = `
    width: calc(100% - 24px);
    padding: 12px;
    margin: 10px 0;
    font-size: 1em;
    border: 1px solid #ccc;
    border-radius: 8px;
    outline: none;
    transition: 0.3s;
`;
container.appendChild(dayInput);

// Add input for month
const monthInput = document.createElement('input');
monthInput.type = 'number';
monthInput.placeholder = 'Enter month (1-12)';
monthInput.style.cssText = dayInput.style.cssText; // Same style as dayInput
container.appendChild(monthInput);

// Add input for year
const yearInput = document.createElement('input');
yearInput.type = 'number';
yearInput.placeholder = 'Enter year';
yearInput.style.cssText = dayInput.style.cssText; // Same style as dayInput
container.appendChild(yearInput);

// Add calculate button
const button = document.createElement('button');
button.textContent = 'Calculate Age';
button.style.cssText = `
    background: linear-gradient(135deg, #6a11cb, #2575fc);
    color: #fff;
    font-size: 1em;
    padding: 12px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 10px;
    transition: 0.3s;
`;
container.appendChild(button);

// Add result display area
const resultDiv = document.createElement('div');
resultDiv.style.cssText = `
    margin-top: 20px;
    font-size: 1.2em;
    font-weight: bold;
    color: #333;
`;
container.appendChild(resultDiv);

// Append the container to the body
document.body.style.cssText = `
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(135deg, #6a11cb, #2575fc);
    margin: 0;
`;
document.body.appendChild(container);

// Event Listener for button click
button.addEventListener('click', () => {
    const day = parseInt(dayInput.value);
    const month = parseInt(monthInput.value) - 1; // JavaScript months are 0-indexed
    const year = parseInt(yearInput.value);

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        resultDiv.textContent = 'Please enter a valid date!';
        return;
    }

    const dob = new Date(year, month, day);
    const today = new Date();

    if (dob > today) {
        resultDiv.textContent = 'The date of birth cannot be in the future!';
        return;
    }

    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    resultDiv.textContent = `Your age is ${age} years.`;
});
