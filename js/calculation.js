// For triangle
document.getElementById('btn-triangle').addEventListener('click',function(){
    const triangleInputFieldB = document.getElementById('triangleFirstInput');
    const triangleInputFieldH = document.getElementById('triangleSecondInput');

    const triangleInputFieldBString = triangleInputFieldB.value;
    const triangleInputFieldHString = triangleInputFieldH.value;
    const triangleInputFieldBValue = parseFloat(triangleInputFieldBString);
    const triangleInputFieldHValue = parseFloat(triangleInputFieldHString);


    /*
     *TODO: Input validation -> isnegative, isnumber , isNan
     */
    const inputValidation = validateInput(triangleInputFieldBValue,triangleInputFieldHValue);

    if (inputValidation){
        const result = calculateResult('triangle',triangleInputFieldBValue,triangleInputFieldHValue);
        console.log(result);
    }
    else{
        alert('Enter Valid Number');
    }
})

// For rectangle
document.getElementById('btn-rectangle').addEventListener('click',function(){
    const rectangleInputFieldW = document.getElementById('rectangleFirstInput');
    const rectangleInputFieldL = document.getElementById('rectangleSecondInput');

    const rectangleInputFieldWString = rectangleInputFieldW.value;
    const rectangleInputFieldLString = rectangleInputFieldL.value;
    const rectangleInputFieldWValue = parseFloat(rectangleInputFieldWString);
    const rectangleInputFieldLValue = parseFloat(rectangleInputFieldLString);

    /*
     *TODO: Input validation
     */
    const inputValidation = validateInput(rectangleInputFieldWValue,rectangleInputFieldLValue);

    if (inputValidation){
        const result = calculateResult('rectangle',rectangleInputFieldWValue,rectangleInputFieldLValue);
        console.log(result);
    }
    else{
        alert('Enter Valid Number');
    }
})