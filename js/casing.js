// console.log('this is casing file')

function caseIncreassDecreass(isCrease){
    const caseInputField = document.getElementById('case-input-field');
    const caseInputString = caseInputField.value 
    const caseInput = parseInt(caseInputString);
    
    
    let newCaseNumber;
    
    if(isCrease === true){
        newCaseNumber = caseInput + 1;
    }
    else{
        newCaseNumber = caseInput -1
    }

    caseInputField.value = newCaseNumber;

    return newCaseNumber;

}





function caseTotalPrice(newCaseNumber){
    let caseTotalPrice = newCaseNumber * 59;

    const caseTotalElement = document.getElementById('case-Total-Price');
    caseTotalElement.innerText = caseTotalPrice;
}






document.getElementById('case-increasing-btn').addEventListener('click', function(){
    const newCaseNumber = caseIncreassDecreass(true)

    caseTotalPrice(newCaseNumber)
    calculateSubTotal()
    
})

document.getElementById('case-decreasing-btn').addEventListener('click', function(){
    const newCaseNumber = caseIncreassDecreass(false)


    caseTotalPrice(newCaseNumber)
    calculateSubTotal()
   
})