// const form = document.querySelector('form');
// form.addEventListener('submit', function (e) {
//     e.preventDefault();

//     const height = parseInt(document.querySelector('#height').value);
//     const weight = parseInt(document.querySelector('#weight').value);
//     const results =(document.querySelector('#results'));

//     if(height===''|| height<0 || isNaN(height)){
//         results.innerHTML = `Please Give a Valid Height!!! ${height}`;
//     }
//     else if(weight===''|| weight<0 || isNaN(weight)){
//         results.innerHTML = `Please Give a Valid Weight!!! ${weight}`;
//     }
//     else{
//         const bmi= (weight / ((height*height)/10000)).toFixed(2);
//         // Now, Showing the results
//         results.innerHTML = `<span>${bmi} </span>`
//     }
// });

//     if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
//         alert('Please enter valid height and weight values.');
//         return;
//     }

//     // Calculate BMI
//     const bmi = calculateBMI(height, weight);

//     // Display BMI
//     displayBMIResult(bmi);
// });

// function calculateBMI(height, weight) {
//     // BMI formula: weight (kg) / (height (m) * height (m))
//     const heightInMeters = height / 100; // Convert height to meters
//     const bmi = weight / (heightInMeters * heightInMeters);
//     return bmi.toFixed(1);
// }

// function displayBMIResult(bmi) {
//     const weightGuide = document.getElementById('weight-guide');
//     const result = document.createElement('p');
//     result.innerHTML = `Your BMI is: <strong>${bmi}</strong><br>`;
    
//     if (bmi < 18.6) {
//         result.innerHTML += 'Category: Underweight';
//     } else if (bmi >= 18.6 && bmi <= 24.9) {
//         result.innerHTML += 'Category: Normal Range';
//     } else {
//         result.innerHTML += 'Category: Overweight';
//     }

//     // Remove previous results
//     while (weightGuide.firstChild) {
//         weightGuide.removeChild(weightGuide.firstChild);
//     }

//     weightGuide.appendChild(result);
// }

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const results = document.querySelector('#results');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const height = parseInt(document.querySelector('#height').value);
        const weight = parseInt(document.querySelector('#weight').value);

        // Clear previous results
        clearResults();

        if (isNaN(height) || height <= 0 || isNaN(weight) || weight <= 0) {
            results.innerHTML = 'Please enter valid height and weight values.';
        } else {
            // Calculate BMI
            const bmi = calculateBMI(height, weight);

            // Display BMI
            displayBMIResult(bmi);
        }
    });

    function calculateBMI(height, weight) {
        const heightInMeters = height / 100;
        const bmi = weight / (heightInMeters * heightInMeters);
        return bmi.toFixed(2);
    }

    function displayBMIResult(bmi) {
        // Display BMI in the results div
        results.innerHTML = `Your BMI is: <strong>${bmi}</strong>`;

        // Display weight guide based on BMI
        const weightGuide = document.getElementById('weight-guide');
        const resultCategory = document.createElement('p');

        if (bmi < 18.5) {
            resultCategory.innerHTML = 'Category: Underweight';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            resultCategory.innerHTML = 'Category: Normal Range';
        } else {
            resultCategory.innerHTML = 'Category: Overweight';
        }

        weightGuide.appendChild(resultCategory);
    }

    function clearResults() {
        // Clear previous results
        results.innerHTML = '';
        const weightGuide = document.getElementById('weight-guide');
        weightGuide.innerHTML = '';
    }
});
