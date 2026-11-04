function toggleButton() {
    let agree = document.getElementById("agree");
    let btn = document.getElementById("joinBtn");

    btn.disabled = !agree.checked;
}

function validateForm() {
    let valid = true;
    let ids = ["nameError", "ageError", "mobileError", "emailError", "passwordError",
        "confirmError", "planError", "dateError", "timeError", "mainError",
        "backupError", "addonsError", "finalMessage"];

    for (let i = 0; i < ids.length; i++) {
        document.getElementById(ids[i]).innerHTML = "";
    }

    let name = document.getElementById("fullName").value;
    let age = document.getElementById("age").value;
    let mobile = document.getElementById("mobile").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    let confirm = document.getElementById("confirmPassword").value;
    let plan = document.getElementById("plan").value;
    let date = document.getElementById("startDate").value;
    let main = document.getElementById("mainTrainer").value;
    let backup = document.getElementById("backupTrainer").value;
    let addons = document.getElementById("addons").value;
    let radios = document.getElementsByName("workoutTime");

    if (name.length === 0) {
        document.getElementById("nameError").innerHTML = "Your full name is missing.";
        valid = false;
    }
    else if (name.length < 3) {
        document.getElementById("nameError").innerHTML = "Full name is too short (minimum 3 letters).";
        valid = false;
    }
    else {
        let badName = false;

        for (let i = 0; i < name.length; i++) {
            let c = name.charAt(i);

            let small = (c >= "a" && c <= "z");
            let capital = (c >= "A" && c <= "Z");

            if (small === false && capital === false && c !== " ") {
                badName = true;
            }
        }

        if (badName === true) {
            document.getElementById("nameError").innerHTML = "Digits and symbols are not allowed in the full name.";
            valid = false;
        }
    }


    if (age.length === 0 || isNaN(age) || Number(age) < 16 || Number(age) > 65) {
        document.getElementById("ageError").innerHTML = "Age must be a number from 16 to 65.";
        valid = false;
    }


    let badMobile = false;

    if (mobile.length !== 11) {
        badMobile = true;
    }
    else {
        for (let i = 0; i < mobile.length; i++) {
            let d = mobile.charAt(i);
            if (d < "0" || d > "9") {
                badMobile = true;
            }
        }

        if (mobile.charAt(0) !== "0" || mobile.charAt(1) !== "1") {
            badMobile = true;
        }

        if (mobile.charAt(2) < "3") {
            badMobile = true;
        }
    }

    if (badMobile === true) {
        document.getElementById("mobileError").innerHTML = "Enter a valid mobile number (11 digits, starting with 013 to 019).";
        valid = false;
    }


    if (email.length === 0) {
        document.getElementById("emailError").innerHTML = "Email cannot be left empty.";
        valid = false;
    }
    else {
        let at = email.indexOf("@");
        let badEmail = false;

        if (email.indexOf(" ") !== -1) {
            badEmail = true;
        }
        else if (at === -1) {
            badEmail = true;
        }
        else if (at === 0) {
            badEmail = true;
        }
        else if (email.indexOf(".", at) === -1) {
            badEmail = true;
        }

        if (badEmail === true) {
            document.getElementById("emailError").innerHTML = "This email does not look right.";
            valid = false;
        }
    }


    if (pass.length < 8) {
        document.getElementById("passwordError").innerHTML = "Use a password of 8 or more characters.";
        valid = false;
    }
    else {
        let hasCapital = false;
        let hasDigit = false;

        for (let i = 0; i < pass.length; i++) {
            let p = pass.charAt(i);

            if (p >= "A" && p <= "Z") {
                hasCapital = true;
            }
            if (p >= "0" && p <= "9") {
                hasDigit = true;
            }
        }

        if (hasCapital === false || hasDigit === false) {
            document.getElementById("passwordError").innerHTML = "Password needs at least one capital letter and one digit.";
            valid = false;
        }
    }


    if (confirm !== pass) {
        document.getElementById("confirmError").innerHTML = "The two passwords are not the same.";
        valid = false;
    }


    if (plan === "") {
        document.getElementById("planError").innerHTML = "Please choose a plan.";
        valid = false;
    }


    if (date === "") {
        document.getElementById("dateError").innerHTML = "Please pick a start date.";
        valid = false;
    }


    let timeChosen = false;

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            timeChosen = true;
        }
    }

    if (timeChosen === false) {
        document.getElementById("timeError").innerHTML = "Please choose a workout time.";
        valid = false;
    }


    if (main === "") {
        document.getElementById("mainError").innerHTML = "Please choose a main trainer.";
        valid = false;
    }

    if (backup === "") {
        document.getElementById("backupError").innerHTML = "Please choose a backup trainer.";
        valid = false;
    }
    else if (main !== "" && main === backup) {
        document.getElementById("backupError").innerHTML = "Backup trainer must be different from the main trainer.";
        valid = false;
    }

    if (addons.length === 0 || isNaN(addons) || addons.indexOf(".") !== -1 || Number(addons) < 0 || Number(addons) > 3) {
        document.getElementById("addonsError").innerHTML = "Add-ons must be a whole number from 0 to 3.";
        valid = false;
    }


    if (valid === false) {
        return false;
    }


    let planFee = 0;

    if (plan === "Monthly") {
        planFee = 1500;
    }
    else if (plan === "Quarterly") {
        planFee = 4000;
    }
    else if (plan === "Yearly") {
        planFee = 14000;
    }

    let total = planFee + Number(addons) * 500;

    document.getElementById("finalMessage").innerHTML =
        "Welcome, " + name + "! Your " + plan + " membership starts on " + date +
        ". Total payable: " + total + " Taka.";



    document.getElementById("fullName").value = "";
    document.getElementById("age").value = "";
    document.getElementById("mobile").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirmPassword").value = "";
    document.getElementById("startDate").value = "";
    document.getElementById("addons").value = "";

    document.getElementById("plan").selectedIndex = 0;
    document.getElementById("mainTrainer").selectedIndex = 0;
    document.getElementById("backupTrainer").selectedIndex = 0;

    for (let i = 0; i < radios.length; i++) {
        radios[i].checked = false;
    }

    document.getElementById("agree").checked = false;
    document.getElementById("joinBtn").disabled = true;

    return false;
}
