document.addEventListener('DOMContentLoaded', function() {
    const nextButton = document.getElementById('nextButton');
    const personalBackgroundForm = document.getElementById('personalBackgroundForm');

    const blurOverlay = document.querySelector('.blur-overlay');

    const sexSelect = document.getElementById('sex');
    const ageSelect = document.getElementById('age');
    const civilStatusSelect = document.getElementById('civilStatus');
    const highSchoolSelect = document.getElementById('highSchool');
    const regionInput = document.getElementById('region');
    const provinceInput = document.getElementById('province');
    const cityInput = document.getElementById('city');
    const barangayInput = document.getElementById('barangay');
    const streetNameInput = document.getElementById('streetName');
    const postalCodeInput = document.getElementById('postalCode');
    const provRegionInput = document.getElementById('provRegion');
    const provProvinceInput = document.getElementById('provProvince');
    const provCityInput = document.getElementById('provCity');
    const provBarangayInput = document.getElementById('provBarangay');
    const provStreetNameInput = document.getElementById('provStreetName');
    const provPostalCode = document.getElementById('provPostalCode');
    const academicTermAdmissionSelect = document.getElementById('academicTermAdmission');
    const academicYearAdmission1Select = document.getElementById('academicYearAdmission1');
    const academicYearAdmission2Select = document.getElementById('academicYearAdmission2');
    const academicYearDroppedSelect = document.getElementById('academicYearDropped');

    const academicYearDropped1Select = document.getElementById('academicYearDropped1');
    const academicYearDropped2Select = document.getElementById('academicYearDropped2');
    const livingWithWhomSelect = document.getElementById('livingWithWhom');
    const otherSpecifyInput = document.getElementById('otherSpecify');
    
   
    
    const successMessage = document.getElementById('successMessage');

    // Function to show the success message
    function showSuccessMessage() {
        successMessage.style.display = 'block';
    }

    // Function to hide the success message
    function hideSuccessMessage() {
        successMessage.style.display = 'none';
    }

    // Function to handle form submission
    function handleFormSubmit(event) {
        event.preventDefault(); // Prevent the default form submission behavior

            // Show the blur overlay
            blurOverlay.style.display = 'block';

            // Check if both fields are filled out
            if (sexSelect.value.trim() !== '' 
            && ageSelect.value.trim() !== ''
            && civilStatusSelect.value.trim() !== ''
            && highSchoolSelect.value.trim() !== ''
            && regionInput.value.trim() !== '' 
            && provinceInput.value.trim() !== ''
            && cityInput.value.trim() !== ''
            && barangayInput.value.trim() !== ''
            && streetNameInput.value.trim() !== '' 
            && postalCodeInput.value.trim() !== ''
            && provRegionInput.value.trim() !== ''
            && provProvinceInput.value.trim() !== ''
            && provCityInput.value.trim() !== '' 
            && provBarangayInput.value.trim() !== ''
            && provStreetNameInput.value.trim() !== ''
            && provPostalCode.value.trim() !== ''
            && academicTermAdmissionSelect.value.trim() !== '' 
            && academicYearAdmission1Select.value.trim() !== ''
            && academicYearAdmission2Select.value.trim() !== ''
            && academicYearDroppedSelect.value.trim() !== ''
            && academicYearDropped1Select.value.trim() !== '' 
            && academicYearDropped2Select.value.trim() !== ''
            && livingWithWhomSelect.value.trim() !== ''

            && otherSpecifyInput.value.trim() !== ''
            
            
            
            ) {
            // Prepare form data
            const formData = new FormData();
            formData.append('Sex', sexSelect.value.trim());
            formData.append('Age', ageSelect.value.trim());
            formData.append('CivilStatus', civilStatusSelect.value.trim());
            formData.append('HighSchool', highSchoolSelect.value.trim());
            formData.append('Region', regionInput.value.trim());
            formData.append('Province', provinceInput.value.trim());
            formData.append('City', cityInput.value.trim());
            formData.append('Barangay', barangayInput.value.trim());
            formData.append('StreetName', streetNameInput.value.trim());
            formData.append('PostalCode', postalCodeInput.value.trim());
            formData.append('ProvincialRegion', provRegionInput.value.trim());
            formData.append('ProvincialProvince', provRegionInput.value.trim());
            formData.append('ProvincialCity', provCityInput.value.trim());
            formData.append('ProvincialBarangay', provBarangayInput.value.trim());
            formData.append('ProvincialStreetName', provStreetNameInput.value.trim());
            formData.append('ProvincialPostalCode', provPostalCode.value.trim());

            formData.append('AcademicTermAdmission', academicTermAdmissionSelect.value.trim());
            formData.append('AcademicYearAdmission1', academicYearAdmission1Select.value.trim());
            formData.append('AcademicYearAdmission2', academicYearAdmission2Select.value.trim());
            formData.append('AcademicYearDropped', academicYearDroppedSelect.value.trim());

            formData.append('AcademicYearDropped1', academicYearDropped1Select.value.trim());
            formData.append('AcademicYearDropped2', academicYearDropped2Select.value.trim());
            formData.append('LivingWithWhom', livingWithWhomSelect.value.trim());
            formData.append('LivingWithWhom', otherSpecifyInput.value.trim());

            
            // Send a POST request to your GAS endpoint
            fetch('https://script.google.com/macros/s/AKfycbwJaVvqlpRzhD4E1rVmO96-OzDSDkbq3Pp7KkAVN8HL6PCFT9ES65AOh7V5kagTX-zzKw/exec', {
                method: 'POST',
                body: formData
            })
            .then(response => {
                if (response.ok) {
                    // Redirect to personalBackground.html upon successful submission
                    window.location.href = 'academicBackground.html';
                } else {

                    // Hide the blur overlay if there's an error
                    blurOverlay.style.display = 'none';

                    // Handle error response
                    alert('An error occurred while submitting the form.');
                }
            })
            .catch(error => {

                // Hide the blur overlay if there's an error
                blurOverlay.style.display = 'none';

                console.error('Error:', error);
                alert('An error occurred while submitting the form.');
            });
        } else {

             // Hide the blur overlay if fields are empty
             blurOverlay.style.display = 'none';

            // Display an alert if fields are empty
            alert('There are still required fields that are empty.');
        }
    }

    // Add event listener to the "Next" button for form submission
    nextButton.addEventListener('click', handleFormSubmit);

    // Add event listener to the login form to show success message
    personalBackgroundForm.addEventListener('submit', function() {
        // Show success message when form is submitted
        showSuccessMessage();
        // Hide success message after a certain duration (e.g., 3 seconds)
        setTimeout(function() {
            hideSuccessMessage();
        }, 3000); // 3000 milliseconds = 3 seconds
    });

    // Add event listener to detect when the next page starts loading
    window.addEventListener('beforeunload', function() {
        // Hide success message when the next page starts loading
        hideSuccessMessage();
    });
});
