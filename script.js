function toggleDiseaseFields() {
    var checkbox = document.getElementById('has_disease_checkbox');
    var diseaseFields = document.getElementById('disease_fields');

    diseaseFields.style.display = checkbox.checked ? 'block' : 'none';
}


function addSymptomField() {
    var container = $('#additional_symptoms');
    var inputField = '<label for="top_symptoms">Select Symptom:</label><select name="top_symptoms" class="form-control"><option value="Fever">Fever</option><option value="Headache">Headache</option><option value="Fatigue">Fatigue</option></select>';
    container.append(inputField);
}

function handleNext() {
    
}

function handleBack() {
    
}

function pridict() {
    
}