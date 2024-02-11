    // Add event listener to the next button
    const nextButton = document.getElementById('nextButtonAcademic');
    // Get references to the buttons
    const backButton = document.getElementById('back-button');
    const step1Button = document.getElementById('applicantInfo-step-button');
    const step2Button = document.getElementById('personal-background-step-button');

    nextButton.addEventListener('click', function() {
            // Redirect to the academicBackground page
             window.location.href = 'uploadDocuments.html';

    });

    // Add event listener for back button
    backButton.addEventListener('click', function() {
        // Navigate back to the personalBackground.html page
        window.location.href = 'personalBackground.html';
    });

    // Get the next button element

    // Add event listener for step button
    step1Button.addEventListener('click', function() {
        // Navigate back to the applicationForReAdmission.html page
        window.location.href = 'applicationForReAdmission.html';
    });

    // Add event listener for step button
    step2Button.addEventListener('click', function() {
        // Navigate back to the personalBackground.html page
        window.location.href = 'personalBackground.html';
    });

function purpose_toggleOthers() {
    var checkotherInitial = document.getElementById('otherInitialPurpose');
    var otherChecked = document.getElementById('otherInitialPurposeText');

    if (checkotherInitial.checked == true) {
        otherChecked.style.visibility = 'visible'
        checkotherInitial.value = otherChecked.value
    }
    else {
        otherChecked.style.visibility = 'hidden';
        otherChecked.value = "";
        checkotherInitial.value = "";
    }
}

function howLong_toggleOthers() {
    var checkHowLong = document.getElementById('howLongBeenAway').value;
    var othersContainer = document.getElementById('othersContainer');
    var othersInputBox = document.getElementById('otherSpecify');

    if (checkHowLong === "Others") {
        othersContainer.style.visibility = 'visible'
        checkHowLong.value = othersContainer.value
        
    }
    else {
        othersContainer.style.visibility = 'hidden';
        othersInputBox.value = "";
        checkHowLong.value = "";
    }

}

function Drop_toggleOthers() {
    var checkDrop = document.getElementById('otherInitialPurposeDrop');
    var otherChecked = document.getElementById('otherInitialPurposeTextDrop');
    
    if (checkDrop.checked == true) {
        otherChecked.style.visibility = 'visible'
        checkDrop.value = otherChecked.value
    }
    else {
        otherChecked.style.visibility = 'hidden';
        otherChecked.value = "";
        checkDrop.value = "";

    }

}

// function toggle_hourStudy() {
//     var weeklyHrsStudy = document.querySelector('input[name="WeeklyHrsStud"]:checked').value;
//     var yesRadio = document.getElementById('yesWeeklyHrsStud');
//     var noRadio = document.getElementById('noWeeklyHrsStud');
//     var selectLabel = document.getElementById('weeklyHrsTextLabel');
//     var selectContainer = document.getElementById('weeklyHrsStudSelect');

//     if (weeklyHrsStudy === "Yes") 
//     {
//         selectContainer.style.visibility = 'visible';
//         selectLabel.style.visibility = 'visible';
//         yesRadio.value = selectContainer.value;
//     }
//     else if (weeklyHrsStudy === "No")
//     {
//         selectContainer.style.visibility = 'hidden';
//         selectLabel.style.visibility = 'hidden';
//         selectContainer.value = "";
//         noRadio.value = "";
//     }
// }

// }


// function toggle_hourStudy() {
//     var weeklyHrsStudy = document.querySelector('input[name="WeeklyHrsStud"]:checked').value;
//     var yesRadio = document.getElementById('yesWeeklyHrsStud');
//     var noRadio = document.getElementById('noWeeklyHrsStud');
//     var selectHours = document.getElementById('row20-select-container');

//     if (weeklyHrsStudy === "Yes") {
//         selectContainer.style.visibility = 'visible';
//         yesRadio.value = selectContainer.value;
//     } else {
//         selectContainer.style.visibility = 'hidden';
//         selectContainer.value = "";
//         noRadio.value = "";
//     }
// }

function toggle_hourStudy() {
    var yesRadio = document.getElementById('yesWeeklyHrsStud');
    var noRadio = document.getElementById('noWeeklyHrsStud');
    var selectLabel = document.getElementById('weeklyHrsTextLabel');
    var selectContainer = document.getElementById('weeklyHrsStudSelect');

    // Check if both "Yes" and "No" are selected
    if (yesRadio.checked && noRadio.checked) {
        // If both are selected, deselect "No"
        noRadio.checked = false;
    }

    // Determine visibility based on the selected radio button
    if (yesRadio.checked) {
        selectContainer.style.visibility = 'visible';
        selectLabel.style.visibility = 'visible';
        selectContainer.disabled = false;
        yesRadio.value = selectContainer.value;
    } else if (noRadio.checked) {
        selectContainer.style.visibility = 'hidden';
        selectLabel.style.visibility = 'hidden';
        selectContainer.disabled = true; // Disable the select element when "No" is selected
        selectContainer.value = "";
    }
}

function upon_return_toggle() {
    var otherChecked = document.getElementById('otherSpecifyUponReturn');
    var othersInput = document.getElementById('otherintendsText');

    if (otherChecked.checked == true) {
        othersInput.style.visibility = 'visible'
        otherChecked.value = othersInput.value
    }
    else {
        othersInput.style.visibility = 'hidden';
        othersInput.value = "";
        otherChecked.value = "";
    }
}


// Add event listeners to the radio buttons to trigger the function when their state changes
document.getElementById('yesWeeklyHrsStud').addEventListener('change', toggle_hourStudy);
document.getElementById('noWeeklyHrsStud').addEventListener('change', toggle_hourStudy);

// Trigger the function initially to ensure proper visibility on page load
toggle_hourStudy();


     


