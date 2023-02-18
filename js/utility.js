// direct to the blog from index file

document.getElementById('btn-blog').addEventListener('click',function(){
    window.location.href = 'blog.html';
})

/*TODO: Input validation -> isnegative, isnumber , isNan
 * one function for multiple purpose
 */

function validateInput(firstValue, secondValue) {
    if (typeof (firstValue && secondValue) == "number") {
      if (firstValue >= 0 && secondValue >= 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }


  function calculateResult(geometryType, valueA, valueB) {
    if (geometryType == "triangle") {
      const resultfloat = 0.5 * valueA * valueB;
      const result = resultfloat.toFixed(2);
      myCreateFunction('Triangle',result);
    } 
    else if (geometryType == "rectangle") {
      const resultfloat = valueA * valueB;
      const result = resultfloat.toFixed(2);
      myCreateFunction('Rectangle',result);
    } 
    else return 0;
}

/*
 *TODO: Function to add row on the table dynamically 
 * one function for multiple purpose
 */

 let rowIn = 0;
 function myCreateFunction(shape,areaValue) {
   var table = document.getElementById("area-result");
   var row = table.insertRow(rowIn);
   rowIn++;
   var cell1 = row.insertCell(0);
   var cell2 = row.insertCell(1);
   var cell3 = row.insertCell(2);
   var cell4 = row.insertCell(3);
   cell1.innerHTML = rowIn;
   cell2.innerHTML = shape;
   cell3.innerHTML = areaValue+'cm<sup>2</sup></p>';
   cell4.innerHTML = "<button class='btn btn-info btn-sm text-white normal-case'><p>Convert to m<sup>2</sup></p></button>"; 
 }