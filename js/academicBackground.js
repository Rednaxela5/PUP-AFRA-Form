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
    var valuecheckDrop = document.getElementById('otherInitialPurposeTextDrop').value;
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

function toggle_hourStudy() {
    var weeklyHrsStudy = document.querySelector('input[name="WeeklyHrsStud"]:checked').value;
    var yesRadio = document.getElementById('yesWeeklyHrsStud');
    var noRadio = document.getElementById('noWeeklyHrsStud');
    var selectedHours = document.getElementById('weeklyHrsStudSelect');
    var selectContainer = document.getElementById('row20-select-container');

    if (weeklyHrsStudy === "Yes") {
        selectContainer.style.visibility = 'visible'
        yesRadio.value = selectContainer.value
    }
    else {
        selectContainer.style.visibility = 'hidden';
        selectContainer.value = "";
        noRadio.value = "";
    }


}





     


