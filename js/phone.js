// console.log('this is casing file')

function phoneIncreassDecreass(isCrease){
    const phoneInputField = document.getElementById('phone-input-field');
    const phoneInputString = phoneInputField.value 
    const phoneInput = parseInt(phoneInputString);
    
    
    let newPhoneNumber;
    
    if(isCrease === true){
        newPhoneNumber = phoneInput + 1;
    }
    else{
        newPhoneNumber = phoneInput - 1;
    }

    phoneInputField.value = newPhoneNumber;

    return newPhoneNumber;

}





function phoneTotalPrice(newPhoneNumber){
    let phoneTotalPrice = newPhoneNumber * 1219;

    const phoneTotalElement = document.getElementById('phone-total-price');
    phoneTotalElement.innerText = phoneTotalPrice;
}



document.getElementById('phone-increasing-btn').addEventListener('click', function(){
    const newPhoneNumber = phoneIncreassDecreass(true)

    phoneTotalPrice(newPhoneNumber)

    calculateSubTotal()

    
})

document.getElementById('phone-Decreasing-btn').addEventListener('click', function(){
    const newPhoneNumber = phoneIncreassDecreass(false)


    phoneTotalPrice(newPhoneNumber)
    calculateSubTotal()
   
})