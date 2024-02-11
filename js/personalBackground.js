document.addEventListener('DOMContentLoaded', function() {

    
    window.onload = function() {

        // Retrieve the stored data from localStorage
        const storedFamilyName = localStorage.getItem('familyName');
        const storedGivenName = localStorage.getItem('givenName');
        const storedMiddleName = localStorage.getItem('middleName');
    
        // Define the function to store data in local storage
        function storeDataInLocalStorage() {
            const familyNameInput = document.getElementById('personalfamilyName');
            const givenNameInput = document.getElementById('personalgivenName');
            const middleNameInput = document.getElementById('personalmiddleName');
    
            localStorage.setItem('familyName', familyNameInput.value);
            localStorage.setItem('givenName', givenNameInput.value);
            localStorage.setItem('middleName', middleNameInput.value);
        }
    
        // Check if the stored data is not null before populating the input fields
        if (storedFamilyName !== null) {
            const familyNameInput = document.getElementById('personalfamilyName');
            familyNameInput.value = storedFamilyName;
            familyNameInput.setAttribute('readonly', 'readonly'); // Lock the input field
        }
        if (storedGivenName !== null) {
            const givenNameInput = document.getElementById('personalgivenName');
            givenNameInput.value = storedGivenName;
            givenNameInput.setAttribute('readonly', 'readonly'); // Lock the input field
        }
        if (storedMiddleName !== null) {
            const middleNameInput = document.getElementById('personalmiddleName');
            middleNameInput.value = storedMiddleName;
            middleNameInput.setAttribute('readonly', 'readonly'); // Lock the input field
        }
    
        // Add event listener to clear localStorage when the page is unloaded
        window.addEventListener('unload', function() {
            storeDataInLocalStorage();
        });
    };

    // Define the areAllFieldsFilledOut() function
    function areAllFieldsFilledOut() {
        // Get references to the input fields
        const SexSelect = document.getElementById('sex');
        const AgeSelect = document.getElementById('age');
        const CivilStatusSelect = document.getElementById('civilStatus');
        const highSchoolInput = document.getElementById('highSchool');
        const highschoolLocationSelect = document.getElementById('highschoolLocation');
        const regionInput = document.getElementById('region');
        const provinceInput = document.getElementById('province');
        const cityInput = document.getElementById('city');
        const barangayInput = document.getElementById('barangay');
        const streetNameInput = document.getElementById('streetName');
        const postalCodeInput = document.getElementById('postalCode');
        const academicTermAdmissionSelect = document.getElementById('academicTermAdmission');
        const academicYearAdmission1Select = document.getElementById('academicYearAdmission1');
        const academicYearAdmission2Select = document.getElementById('academicYearAdmission2');
        const academicYearDroppedSelect = document.getElementById('academicYearDropped');
        const academicYearDropped1Select = document.getElementById('academicYearDropped1');
        const academicYearDropped2Select = document.getElementById('academicYearDropped2');
    
        // Check if the required fields have a non-empty value
        if (SexSelect.value.trim() === '' || AgeSelect.value.trim() === '' || CivilStatusSelect.value.trim() === '' || // Update this line
            highSchoolInput.value.trim() === '' || highschoolLocationSelect.value.trim() === '' || regionInput.value.trim() === '' ||
            provinceInput.value.trim() === '' || cityInput.value.trim() === '' ||  barangayInput.value.trim() === '' || 
            streetNameInput.value.trim() === '' || postalCodeInput.value.trim() === '' || academicTermAdmissionSelect.value.trim() === '' || 
            academicYearAdmission1Select.value.trim() === '' || academicYearAdmission2Select.value.trim() === '' || academicYearDroppedSelect.value.trim() === '' || 
            academicYearDropped1Select.value.trim() === '' || academicYearDropped2Select.value.trim() === '') {
            // At least one required field is empty, return false
            return false;
        } else {
            // All required fields are filled out, return true
            return true;
        }
    }


    //  // Get references to the buttons outside of DOMContentLoaded
    //  const stepButton = document.getElementById('applicantInfo-step-button');
    //  const backButton = document.getElementById('back-button');
 
    //  // Add event listener for step button
    //  stepButton.addEventListener('click', function() {
    //      // Navigate back to the applicationForReAdmission.html page
    //      window.location.href = 'applicationForReAdmission.html';
    //  });
 
    //  // Add event listener for back button
    //  backButton.addEventListener('click', function() {
    //      // Navigate back to the applicationForReAdmission.html page
    //      window.location.href = 'applicationForReAdmission.html';
    //  });

    

    // // Add event listener to the next button
    // const nextButton = document.getElementById('nextButton');

    // nextButton.addEventListener('click', function() {
    //     // Check if all required fields are filled out
    //     if (areAllFieldsFilledOut()) {
    //         // Redirect to the academicBackground page
    //          window.location.href = 'academicBackground.html';
    //     } else {
    //         // Display an error message
    //         alert('Please fill out all required fields.');
    //     }
    // });
    
    const step3Button = document.getElementById('academic-background-step-button');

    step3Button.addEventListener('click', function() {
        // Check if all required fields are filled out
        if (areAllFieldsFilledOut()) {
            // Redirect to the academicBackground page
             window.location.href = 'academicBackground.html';
        } else {
            // Display an error message
            alert('Please fill out all required fields.');
        }
    });

    // Get references to the buttons
    const stepButton = document.getElementById('applicantInfo-step-button');
    const backButton = document.getElementById('back-button');
    // Get the next button element

    // Add event listener for step button
    stepButton.addEventListener('click', function() {
        // Navigate back to the applicationForReAdmission.html page
        window.location.href = 'applicationForReAdmission.html';
    });

    // Add event listener for back button
    backButton.addEventListener('click', function() {
        // Navigate back to the applicationForReAdmission.html page
        window.location.href = 'applicationForReAdmission.html';
    });
    
    

     // Add event listeners for focus event on input fields
    SexSelect.addEventListener('focus', function() {
        // Check if family name input field is empty
        if (this.value.trim() === '') {
            // Trigger the browser's built-in validation message
            this.reportValidity();
        }
    });
        
    AgeSelect.addEventListener('focus', function() {
        if (this.value.trim() === '') {
            this.reportValidity();
        }
    });

    CivilStatusSelect.addEventListener('focus', function() {
        if (this.value.trim() === '') {
            this.reportValidity();
        }
    });

    highSchoolInput.addEventListener('focus', function() {
        if (this.value.trim() === '') {
            this.reportValidity();
        }
    });

    highschoolLocationSelect.addEventListener('focus', function() {
        if (this.value.trim() === '') {
            this.reportValidity();
        }
    });

    regionInput.addEventListener('focus', function() {
        if (this.value.trim() === '') {
            this.reportValidity();
        }
    });

    provinceInput.addEventListener('focus', function() {
        if (this.value.trim() === '') {
            this.reportValidity();
        }
    });

    cityInput.addEventListener('focus', function() {
        if (this.value.trim() === '') {
            this.reportValidity();
        }
    });

    barangayInput.addEventListener('focus', function() {
        if (this.value.trim() === '') {
            this.reportValidity();
        }
    });

    streetNameInput.addEventListener('focus', function() {
        if (this.value.trim() === '') {
            this.reportValidity();
        }
    });

    postalCodeInput.addEventListener('focus', function() {
        if (this.value.trim() === '') {
            this.reportValidity();
        }
    });
    
    academicTermAdmissionSelect.addEventListener('focus', function() {
        if (this.value.trim() === '') {
            this.reportValidity();
        }
    });

    academicYearAdmission1Select.addEventListener('focus', function() {
        if (this.value.trim() === '') {
            this.reportValidity();
        }
    });

    academicYearAdmission2Select.addEventListener('focus', function() {
        if (this.value.trim() === '') {
            this.reportValidity();
        }
    });

    academicYearDroppedSelect.addEventListener('focus', function() {
        if (this.value.trim() === '') {
            this.reportValidity();
        }
    });

    academicYearDropped1Select.addEventListener('focus', function() {
        if (this.value.trim() === '') {
            this.reportValidity();
        }
    });

    academicYearDropped2Select.addEventListener('focus', function() {
        if (this.value.trim() === '') {
            this.reportValidity();
        }
    });
});



function toggleSameAddress() {
    // Home Address Fields
    var sameAddressCheckbox = document.getElementById("sameAddress");
    var region = document.getElementById("region");
    var province = document.getElementById("province");
    var city = document.getElementById("city");
    var barangay = document.getElementById("barangay");
    var streetName = document.getElementById("streetName");
    var postalCode = document.getElementById("postalCode");

    // Pronvincial Address Fields
    var provRegion = document.getElementById("provRegion");
    var provProvince = document.getElementById("provProvince");
    var provCity = document.getElementById("provCity");
    var provBarangay = document.getElementById("provBarangay");
    var provStreetName = document.getElementById("provStreetName");
    var provPostalCode = document.getElementById("provPostalCode");


    if (sameAddressCheckbox.checked == true) 
    {
        provRegion.value = region.value
        provProvince.value = province.value
        provCity.value = city.value
        provBarangay.value = barangay.value
        provStreetName.value = streetName.value
        provPostalCode.value = postalCode.value
    }
    else 
    {
        provRegion.value = "";
        provProvince.value = "";
        provCity.value = "";
        provBarangay.value = "";
        provStreetName.value = "";
        provPostalCode.value = "";
    }

}

function toggleOthers() {
    var livingWithWhom = document.getElementById('livingWithWhom').value;
    var othersContainer = document.getElementById("othersContainer");
    var othersInput = document.getElementById("otherSpecify");

    if (livingWithWhom === "Others") {
        othersContainer.style.display = "block";
        livingWithWhom = othersInput.value;
    }
    else {
        othersContainer.style.display = "none";
    }


}

function updateLivingWithWhom() {
    var livingWithWhomSelect = document.getElementById("livingWithWhom");
    var otherSpecifyInput = document.getElementById("otherSpecify");

    if (otherSpecifyInput.value.trim() !== "") {
        livingWithWhomSelect.value = otherSpecifyInput.value;
    }
    else {
        livingWithWhomSelect.value = "";
    }
}
