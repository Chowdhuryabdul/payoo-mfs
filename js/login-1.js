
// document.getElementById('btn-id').addEventListener('click', function(event){
//     event.preventDefault /* to stop repload the form page */
//     const phoneNumberInput = document.getElementById('number-input').value
//     const pinCodInput = document.getElementById('pin-code').value;
//     console.log(pinCodInput, phoneNumberInput);

//     if(phoneNumberInput === '5' && pinCodInput === '1234'){
//         console.log('you are logged in');
//     }else{
//         alert('wrong pin number or pin')
//     }
// })


/* if it is input field then we will take value and if it is text field we will take innertext */

document.getElementById('btn-id').addEventListener('click', function(event){
    event.defaultPrevented;
    const phoneNUmber = document.getElementById('number-input').value ;
    const pinCode = document.getElementById('pin-code').value;
    if(phoneNUmber === '5' && pinCode === '1234'){
        console.log('you are logged in');
       window.location.href = './home.html'
    }else{
        alert('Your Phone Number or Pin Code is wrong')
    }
})