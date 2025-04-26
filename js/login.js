/* step 1 - set event handler */
document.querySelector('button').addEventListener('click', function(event){

    // step 2 - prevent default behaviuor (prevent reloading browser)
    event.preventDefault() /* it means page will not reload. and if we work with the form we have to add extra line */

    /* step -3 get the phone number */
    const phoneNumber = document.getElementById('phone-number')
    const newValue = phoneNumber.value
    console.log(newValue);

    /* step -4 to get he pin number */
    const pinNumber = document.getElementById('pin-number');
    const insertedPin= pinNumber.value
    console.log(insertedPin);

})