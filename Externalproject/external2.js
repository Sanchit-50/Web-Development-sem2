 function checkArmstrong() {
        const inputString = document.getElementById("numInput").value;
    
        if (inputString === "") {
            document.getElementById("result").innerText = "Please enter a number."
            return;
        }

        const originalNumber = parseInt(inputString);
        const numberOfDigits = inputString.length;
        let sum = 0;
        let temp = originalNumber;

        // 2. Loop to calculate the sum of digits raised to the power
        while (temp > 0) {
            let remainder = temp % 10;
            sum += Math.pow(remainder, numberOfDigits);
            temp = Math.floor(temp / 10);
        }

        if (sum === originalNumber) {
            document.getElementById("result").innerText = originalNumber + " is an Armstrong number! 🎉";
            document.getElementById("result").style.color = "green";
        } else {
            document.getElementById("result").innerText = originalNumber + " is NOT an Armstrong number.";
            document.getElementById("result").style.color = "red";
        }

 }