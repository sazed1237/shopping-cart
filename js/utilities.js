
function getTextElementValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const phoneTotalPriceString = phoneTotalElement.innerText;
    const phoneTotalPriceParse = parseInt(phoneTotalPriceString);
    return phoneTotalPriceParse;
}

function setTextElementValueById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}


function calculateSubTotal(){
    const currentPhoneTotal = getTextElementValueById('phone-total-price')
    const currentCaseTotal = getTextElementValueById('case-Total-Price')

    const currentSubTotal = currentCaseTotal + currentPhoneTotal;
    setTextElementValueById('total-subtotal', currentSubTotal)


    const taxAmountString = (currentSubTotal * 0.1).toFixed(2)
    const taxAmount = parseFloat(taxAmountString)
    setTextElementValueById('total-tax', taxAmount)

    const finalTotal = currentSubTotal + taxAmount;
    setTextElementValueById('final-total', finalTotal);
}