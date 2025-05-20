/* document.getElementById('add-amount').addEventListener('click', function(event){
    event.defaultPrevented;
    const amount = document.getElementById('added-amount').value ;
    const pin = document.getElementById('input-pin').value;
    if(pin === '1234'){
        // console.log('pls add money');
       const existinAmount = document.getElementById('existing-amount').innerText
       const totalAmount = parseInt(amount) + parseInt (existinAmount)
       document.getElementById('existing-amount').innerText = totalAmount
    }else{
        alert ('wrong password or wrong pin code')
    }
    
}) */


// Cash out section 

document.getElementById('cash-out').addEventListener('click', function(event){
    event.defaultPrevented
    const withdrawnAmount = document.getElementById('withdrawn-amount').value ;
    const withdrawnPin = document.getElementById('withdrawn-pin').value;
    if(withdrawnPin === '1234'){
        const existinAmount = document.getElementById('existing-amount').innerText;
        const updatedAmount = parseInt(existinAmount) - parseInt(withdrawnAmount)

        /* here i set this up in the UI */
        document.getElementById('existing-amount').innerText = updatedAmount
    }else{
        alert ('your pincode is wrong')
    }
})

