// /* step 1 - set event handler */
// document.querySelector('button').addEventListener('click', function(event){

//     // step 2 - prevent default behaviuor (prevent reloading browser)
//     event.preventDefault() /* it means page will not reload. and if we work with the form we have to add extra line */

//     /* step -3 get the phone number and pin number */
//     const phoneNumber = document.getElementById('phone-number')
//     const newValue = phoneNumber.value
//     const pinNumber = document.getElementById('pin-number').value
//     console.log(pinNumber, newValue);
    
//     // step 4 is to validate phone number and pin number the phone number and the pin number. but we should not do this. this is just temporary method

//     if(phoneNumber === '5' && pinNumber === '1234'){
//         console.log('you are logged in')
//         /* step 5 is to allow user to use the website */
//     }else{
//         alert('wrong phonenumber or pin')
//     }

// })

document.querySelector('button').addEventListener('click', function(event){ /* i am using here event parameter as i will take data from user. as it is form so i must need to write parameter */
  
    event.preventDefault() /* - it must need to use to stop relaoding as form ususally get reloaded */
 const phoneNumber = document.getElementById('phone-number').value;
 const pinNumber = document.getElementById('pin-number').value
 if(phoneNumber === '5' && pinNumber === '1234'){
    console.log('you logged in');
    window.location.href = './home.html' /* through this one i have taken it to the home page  */
 }else{
    alert('phonenumber or pinumber is error')
 }
})