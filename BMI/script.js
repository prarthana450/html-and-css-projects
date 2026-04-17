document.getElementById("btn").addEventListener("click", function () {

    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    let result = document.getElementById("result");

    if (height === "" || weight === "") {
        result.innerHTML = "Please enter height and weight";
        result.style.color = "red";
        return;
    }

    height = height / 100;

    let bmi = weight / (height * height);
    bmi = bmi.toFixed(2);

    let category = "";

    if (bmi < 18.5) {
        category = "Underweight";
    }
    else if (bmi < 24.9) {
        category = "Normal weight";
    }
    else if (bmi < 29.9) {
        category = "Overweight";
    }
    else {
        category = "Obese";
    }

    result.style.color = "green";
    result.innerHTML =
        "Your BMI is " + bmi + "<br>Category: " + category;

});