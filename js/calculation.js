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
// For parallalogram
document.getElementById('btn-parallelogram').addEventListener('click',function(){
    const parallelogramInputFieldB = document.getElementById('parallelogramFirstInput');
    const parallelogramInputFieldH = document.getElementById('parallelogramSecondInput');

    const parallelogramInputFieldBString = parallelogramInputFieldB.value;
    const parallelogramInputFieldHString = parallelogramInputFieldH.value;
    const parallelogramInputFieldBValue = parseFloat(parallelogramInputFieldBString);
    const parallelogramInputFieldHValue = parseFloat(parallelogramInputFieldHString);

    /*
     *TODO: Input validation
     */
    const inputValidation = validateInput(parallelogramInputFieldBValue,parallelogramInputFieldHValue);

    if (inputValidation){
        const result = calculateResult('parallalogram',parallelogramInputFieldBValue,parallelogramInputFieldHValue);
        console.log(result);
    }
    else{
        alert('Enter Valid Number');
    }
})
// For Rhombus
document.getElementById('btn-rhombus').addEventListener('click',function(){
    const rhombusInputFieldD1 = document.getElementById('rhombusFirstInput');
    const rhombusInputFieldD2 = document.getElementById('rhombusSecondInput');

    const rhombusInputFieldD1String = rhombusInputFieldD1.value;
    const rhombusInputFieldD2String = rhombusInputFieldD2.value;
    const rhombusInputFieldD1Value = parseFloat(rhombusInputFieldD1String);
    const rhombusInputFieldD2Value = parseFloat(rhombusInputFieldD2String);

    /*
     *TODO: Input validation
     */
    const inputValidation = validateInput(rhombusInputFieldD1Value,rhombusInputFieldD2Value);

    if (inputValidation){
        const result = calculateResult('rhombus',rhombusInputFieldD1Value,rhombusInputFieldD2Value);
        console.log(result);
    }
    else{
        alert('Enter Valid Number');
    }
})